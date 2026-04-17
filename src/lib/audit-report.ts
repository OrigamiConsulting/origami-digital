/**
 * Website audit report generator.
 *
 * Given a target URL, gathers signals and returns a structured audit result
 * that can be rendered to PDF and emailed to the lead.
 *
 * Sources (all free, no paid APIs):
 *   - Google PageSpeed Insights API (Lighthouse scores + Core Web Vitals)
 *     — requires PAGESPEED_API_KEY env var. Falls back to limited report if missing.
 *   - Raw HTML fetch of the target page — used to detect meta tags,
 *     schema markup, OG tags, favicon, font stack.
 *
 * Keep this module deterministic and side-effect free so it can be unit-tested.
 * PDF generation and email delivery happen in the caller.
 */

export interface AuditFinding {
  /** Short title rendered in the PDF. */
  title: string
  /** One to two sentence explanation for a non-technical reader. */
  detail: string
  /** Impact ranking (1 = top fix first). */
  priority: 1 | 2 | 3
  /** Rough category for grouping in the PDF. */
  category: 'performance' | 'seo' | 'ai-search' | 'design' | 'trust'
  /** Optional concrete recommendation. */
  action?: string
}

export interface AuditResult {
  url: string
  generatedAt: string
  /** Normalised host for the PDF title ("Example Co — example.co.za"). */
  host: string
  lighthouse?: {
    performance: number | null
    accessibility: number | null
    bestPractices: number | null
    seo: number | null
    lcpMs: number | null
    clsScore: number | null
    inpMs: number | null
  }
  pageSignals: {
    hasTitle: boolean
    titleLength: number | null
    hasMetaDescription: boolean
    metaDescriptionLength: number | null
    hasH1: boolean
    hasOgImage: boolean
    hasFavicon: boolean
    hasCanonical: boolean
    hasOrganisationSchema: boolean
    hasLocalBusinessSchema: boolean
    hasFaqSchema: boolean
    hasAnySchema: boolean
    totalImages: number
    imagesWithoutAlt: number
  }
  findings: AuditFinding[]
  /** Free-form note — errors encountered, partial data, etc. */
  notes: string[]
}

/**
 * Entry point. Accepts a raw URL from the form (may be missing protocol),
 * normalises it, runs the audits, returns a full result.
 */
export async function runAudit(rawUrl: string): Promise<AuditResult> {
  const url = normaliseUrl(rawUrl)
  const host = new URL(url).host

  const notes: string[] = []

  const [lighthouse, html] = await Promise.all([
    fetchLighthouse(url).catch((err) => {
      notes.push(`Lighthouse data unavailable: ${errMsg(err)}`)
      return null
    }),
    fetchHtml(url).catch((err) => {
      notes.push(`Page HTML could not be fetched: ${errMsg(err)}`)
      return null
    }),
  ])

  const pageSignals = html ? extractPageSignals(html) : emptySignals()

  const findings = buildFindings({ lighthouse, pageSignals })

  return {
    url,
    generatedAt: new Date().toISOString(),
    host,
    lighthouse: lighthouse ?? undefined,
    pageSignals,
    findings,
    notes,
  }
}

function normaliseUrl(input: string): string {
  const trimmed = input.trim()
  if (!trimmed) throw new Error('URL is required')
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  // Will throw if invalid.
  const u = new URL(withProtocol)
  return u.toString()
}

function errMsg(err: unknown): string {
  return err instanceof Error ? err.message : String(err)
}

// --- Lighthouse via PageSpeed Insights -------------------------------------

async function fetchLighthouse(url: string): Promise<AuditResult['lighthouse']> {
  const apiKey = process.env.PAGESPEED_API_KEY
  if (!apiKey) {
    throw new Error('PAGESPEED_API_KEY not configured')
  }

  const endpoint = new URL('https://www.googleapis.com/pagespeedonline/v5/runPagespeed')
  endpoint.searchParams.set('url', url)
  endpoint.searchParams.set('strategy', 'mobile')
  endpoint.searchParams.set('category', 'performance')
  endpoint.searchParams.append('category', 'accessibility')
  endpoint.searchParams.append('category', 'best-practices')
  endpoint.searchParams.append('category', 'seo')
  endpoint.searchParams.set('key', apiKey)

  const res = await fetch(endpoint.toString(), {
    signal: AbortSignal.timeout(60_000),
  })
  if (!res.ok) {
    throw new Error(`PageSpeed API ${res.status}`)
  }

  type PsiCategory = { score?: number | null }
  type PsiAudit = { numericValue?: number | null; score?: number | null }
  type PsiResponse = {
    lighthouseResult?: {
      categories?: {
        performance?: PsiCategory
        accessibility?: PsiCategory
        'best-practices'?: PsiCategory
        seo?: PsiCategory
      }
      audits?: Record<string, PsiAudit | undefined>
    }
  }
  const data = (await res.json()) as PsiResponse
  const cats = data.lighthouseResult?.categories
  const audits = data.lighthouseResult?.audits ?? {}

  return {
    performance: pct(cats?.performance?.score),
    accessibility: pct(cats?.accessibility?.score),
    bestPractices: pct(cats?.['best-practices']?.score),
    seo: pct(cats?.seo?.score),
    lcpMs: numeric(audits['largest-contentful-paint']?.numericValue),
    clsScore: numeric(audits['cumulative-layout-shift']?.numericValue),
    inpMs: numeric(audits['interaction-to-next-paint']?.numericValue),
  }
}

function pct(score: number | null | undefined): number | null {
  if (score === null || score === undefined) return null
  return Math.round(score * 100)
}

function numeric(n: number | null | undefined): number | null {
  if (n === null || n === undefined) return null
  return Math.round(n)
}

// --- Raw HTML signals ------------------------------------------------------

async function fetchHtml(url: string): Promise<string> {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(15_000),
    headers: {
      // Some sites block unknown UAs. Present as a normal browser.
      'user-agent':
        'Mozilla/5.0 (compatible; OrigamiAuditBot/1.0; +https://origami-digital.co.za/about)',
      accept: 'text/html,application/xhtml+xml',
    },
    redirect: 'follow',
  })
  if (!res.ok) throw new Error(`HTML fetch ${res.status}`)
  return await res.text()
}

function emptySignals(): AuditResult['pageSignals'] {
  return {
    hasTitle: false,
    titleLength: null,
    hasMetaDescription: false,
    metaDescriptionLength: null,
    hasH1: false,
    hasOgImage: false,
    hasFavicon: false,
    hasCanonical: false,
    hasOrganisationSchema: false,
    hasLocalBusinessSchema: false,
    hasFaqSchema: false,
    hasAnySchema: false,
    totalImages: 0,
    imagesWithoutAlt: 0,
  }
}

function extractPageSignals(html: string): AuditResult['pageSignals'] {
  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i)
  const metaDescMatch = html.match(
    /<meta[^>]+name=["']description["'][^>]*content=["']([\s\S]*?)["']/i,
  )
  const ogImage = /<meta[^>]+property=["']og:image["']/i.test(html)
  const favicon = /<link[^>]+rel=["'](?:icon|shortcut icon)["']/i.test(html)
  const canonical = /<link[^>]+rel=["']canonical["']/i.test(html)
  const h1 = /<h1[\s>]/i.test(html)

  const schemaBlocks = [...html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
  const schemaJson = schemaBlocks.map((m) => m[1]).join('\n')
  const hasOrganisationSchema = /"@type"\s*:\s*"Organization"/i.test(schemaJson)
  const hasLocalBusinessSchema = /"@type"\s*:\s*"LocalBusiness"/i.test(schemaJson)
  const hasFaqSchema = /"@type"\s*:\s*"FAQPage"/i.test(schemaJson)

  const imgTags = [...html.matchAll(/<img\b[^>]*>/gi)].map((m) => m[0])
  const imagesWithoutAlt = imgTags.filter((tag) => !/\balt\s*=/i.test(tag)).length

  const title = titleMatch?.[1]?.trim() ?? ''
  const metaDesc = metaDescMatch?.[1]?.trim() ?? ''

  return {
    hasTitle: title.length > 0,
    titleLength: title.length > 0 ? title.length : null,
    hasMetaDescription: metaDesc.length > 0,
    metaDescriptionLength: metaDesc.length > 0 ? metaDesc.length : null,
    hasH1: h1,
    hasOgImage: ogImage,
    hasFavicon: favicon,
    hasCanonical: canonical,
    hasOrganisationSchema,
    hasLocalBusinessSchema,
    hasFaqSchema,
    hasAnySchema: schemaBlocks.length > 0,
    totalImages: imgTags.length,
    imagesWithoutAlt,
  }
}

// --- Findings / recommendations -------------------------------------------

function buildFindings(input: {
  lighthouse: AuditResult['lighthouse'] | null
  pageSignals: AuditResult['pageSignals']
}): AuditFinding[] {
  const findings: AuditFinding[] = []
  const { lighthouse, pageSignals } = input

  if (lighthouse) {
    if (lighthouse.performance !== null && lighthouse.performance < 70) {
      findings.push({
        title: `Mobile performance score is ${lighthouse.performance}/100`,
        detail:
          'Performance below 70 means most mobile visitors are waiting long enough to abandon the page before it renders. This directly suppresses conversions and search rankings.',
        priority: 1,
        category: 'performance',
        action:
          'Compress hero imagery to WebP under 200KB, defer third-party scripts below the fold, and move to static hosting with edge caching.',
      })
    }
    if (lighthouse.lcpMs !== null && lighthouse.lcpMs > 2500) {
      findings.push({
        title: `Largest Contentful Paint is ${(lighthouse.lcpMs / 1000).toFixed(1)}s (target < 2.5s)`,
        detail:
          'LCP measures when the main content becomes visible. Every extra second above 3s loses roughly 20% of mobile visitors.',
        priority: 1,
        category: 'performance',
        action:
          'Optimise the largest above-the-fold image (WebP, proper dimensions, preload) and eliminate render-blocking JavaScript.',
      })
    }
    if (lighthouse.seo !== null && lighthouse.seo < 90) {
      findings.push({
        title: `Technical SEO score is ${lighthouse.seo}/100`,
        detail:
          'Lighthouse SEO score below 90 signals missing meta tags, broken canonicals, poor mobile usability, or crawlability issues.',
        priority: 2,
        category: 'seo',
      })
    }
    if (lighthouse.accessibility !== null && lighthouse.accessibility < 90) {
      findings.push({
        title: `Accessibility score is ${lighthouse.accessibility}/100`,
        detail:
          'Accessibility issues block users with disabilities and hurt Google rankings. Common causes: low contrast, missing alt text, unlabelled form fields.',
        priority: 2,
        category: 'design',
      })
    }
  }

  if (!pageSignals.hasTitle) {
    findings.push({
      title: 'Page is missing a <title> tag',
      detail:
        'The title tag is the single most important on-page SEO signal. Without one, search engines invent one from the page content.',
      priority: 1,
      category: 'seo',
      action: 'Set a unique, keyword-rich title under 60 characters on every page.',
    })
  } else if (pageSignals.titleLength && pageSignals.titleLength > 65) {
    findings.push({
      title: `Title tag is ${pageSignals.titleLength} characters (target < 60)`,
      detail:
        'Titles over 60 characters get truncated in Google results. Users see "…" instead of your value proposition.',
      priority: 3,
      category: 'seo',
    })
  }

  if (!pageSignals.hasMetaDescription) {
    findings.push({
      title: 'Missing meta description',
      detail:
        'Without a meta description, Google picks an arbitrary sentence from the page as the search snippet. That usually hurts click-through.',
      priority: 2,
      category: 'seo',
      action: 'Write a 150-160 character description that includes a primary keyword and a reason to click.',
    })
  }

  if (!pageSignals.hasH1) {
    findings.push({
      title: 'No H1 heading detected on the homepage',
      detail:
        'Every page should have exactly one H1. Its absence is a clear technical SEO flag and confuses assistive technology.',
      priority: 2,
      category: 'seo',
    })
  }

  if (!pageSignals.hasCanonical) {
    findings.push({
      title: 'Canonical URL not set',
      detail:
        'Missing canonical tags lead to duplicate-content dilution when the site is accessible via multiple URLs (www vs non-www, http vs https).',
      priority: 3,
      category: 'seo',
    })
  }

  if (!pageSignals.hasAnySchema) {
    findings.push({
      title: 'No structured data (schema markup) found',
      detail:
        'Structured data is the biggest single AI-search win. It tells ChatGPT, Perplexity and Google AI Mode exactly what your business is and what you offer.',
      priority: 1,
      category: 'ai-search',
      action:
        'Add Organisation or LocalBusiness schema at minimum. Add FAQPage schema on any page with a FAQ section.',
    })
  } else {
    if (!pageSignals.hasOrganisationSchema && !pageSignals.hasLocalBusinessSchema) {
      findings.push({
        title: 'No Organisation or LocalBusiness schema',
        detail:
          'You have some structured data but not the core entity markup AI search engines use to identify your business.',
        priority: 2,
        category: 'ai-search',
      })
    }
    if (!pageSignals.hasFaqSchema) {
      findings.push({
        title: 'No FAQPage schema',
        detail:
          'FAQ schema is the single easiest way to get content pulled into AI Overviews and ChatGPT citations.',
        priority: 3,
        category: 'ai-search',
        action: 'Add a FAQ section to at least one core page and mark it up with FAQPage schema.',
      })
    }
  }

  if (!pageSignals.hasOgImage) {
    findings.push({
      title: 'No Open Graph image',
      detail:
        'When this site is shared on LinkedIn, WhatsApp or Slack, it has no preview image. That kills click-through on every share.',
      priority: 3,
      category: 'trust',
    })
  }

  if (!pageSignals.hasFavicon) {
    findings.push({
      title: 'Favicon missing',
      detail:
        'No favicon gives the browser tab a generic default icon — small but noticeable credibility gap.',
      priority: 3,
      category: 'trust',
    })
  }

  if (pageSignals.totalImages > 0 && pageSignals.imagesWithoutAlt > 0) {
    const pct = Math.round(
      (pageSignals.imagesWithoutAlt / pageSignals.totalImages) * 100,
    )
    if (pct > 10) {
      findings.push({
        title: `${pageSignals.imagesWithoutAlt} of ${pageSignals.totalImages} images missing alt text (${pct}%)`,
        detail:
          'Alt text is required for accessibility, helps image SEO, and is used by AI models to understand visual content.',
        priority: 3,
        category: 'design',
      })
    }
  }

  // Sort by priority (1 first).
  findings.sort((a, b) => a.priority - b.priority)
  return findings
}
