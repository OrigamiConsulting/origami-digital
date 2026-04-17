/**
 * Generate the "30-point website checklist" lead magnet PDF.
 *
 * Run: npm run build:checklist
 * Output: public/downloads/website-checklist-2026.pdf
 *
 * The PDF is committed to the repo so it can be served as a static asset
 * without running this script on every deploy.
 */

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  renderToFile,
  Svg,
  Path,
} from '@react-pdf/renderer'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Brand tokens from CLAUDE.md
const COLORS = {
  bgDark: '#141414',
  bgCard: '#1E1E1E',
  accentBlue: '#0A8FBF',
  accentTeal: '#297373',
  coral: '#EF6351',
  white: '#FFFFFF',
  textLight: '#B0B0B0',
  textMuted: '#8A8A8A',
  textFaint: '#4A4A4A',
  border: '#2A2A2A',
  borderLight: '#DEDEDE',
  lightBg: '#F5F5F5',
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.bgDark,
    padding: 0,
    fontFamily: 'Helvetica',
    color: COLORS.white,
  },
  header: {
    padding: 48,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  eyebrow: {
    fontSize: 9,
    letterSpacing: 2,
    color: COLORS.accentBlue,
    fontFamily: 'Helvetica-Bold',
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 8,
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: 13,
    color: COLORS.textLight,
    lineHeight: 1.5,
    marginBottom: 0,
  },
  body: {
    padding: 40,
    paddingTop: 32,
    paddingBottom: 48,
  },
  intro: {
    fontSize: 11,
    color: COLORS.textLight,
    lineHeight: 1.6,
    marginBottom: 28,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 10,
  },
  categoryNumber: {
    fontSize: 9,
    color: COLORS.coral,
    fontFamily: 'Helvetica-Bold',
    letterSpacing: 2,
    textTransform: 'uppercase',
    marginRight: 10,
  },
  categoryLine: {
    flexGrow: 1,
    height: 1,
    backgroundColor: COLORS.border,
  },
  categoryTitle: {
    fontSize: 15,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    paddingLeft: 4,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: COLORS.coral,
    borderRadius: 2,
    marginRight: 10,
    marginTop: 1,
    flexShrink: 0,
  },
  itemText: {
    fontSize: 10,
    color: COLORS.textLight,
    lineHeight: 1.5,
    flex: 1,
  },
  itemNum: {
    color: COLORS.accentBlue,
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    marginRight: 6,
  },
  ctaBox: {
    marginTop: 30,
    padding: 20,
    backgroundColor: COLORS.bgCard,
    borderWidth: 1,
    borderColor: COLORS.accentBlue,
    borderRadius: 6,
  },
  ctaTitle: {
    fontSize: 13,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
    marginBottom: 6,
  },
  ctaText: {
    fontSize: 10,
    color: COLORS.textLight,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  ctaLink: {
    fontSize: 10,
    color: COLORS.accentBlue,
    fontFamily: 'Helvetica-Bold',
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 40,
    right: 40,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontSize: 8,
    color: COLORS.textMuted,
  },
  logo: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
    color: COLORS.white,
  },
  logoAccent: {
    color: COLORS.accentBlue,
  },
})

type Category = {
  title: string
  items: string[]
}

const CATEGORIES: Category[] = [
  {
    title: 'PERFORMANCE',
    items: [
      'Page loads in under 3 seconds on mobile (test at pagespeed.web.dev)',
      'Lighthouse performance score above 90 on mobile and desktop',
      'Images optimised (WebP format, lazy-loaded, properly sized)',
      'No render-blocking resources above the fold',
      'Core Web Vitals passing (LCP under 2.5s, INP under 200ms, CLS under 0.1)',
    ],
  },
  {
    title: 'SEO',
    items: [
      'Unique title tags on every page (50–60 characters, primary keyword included)',
      'Meta descriptions on every page (150–160 characters, compelling and unique)',
      'XML sitemap submitted to Google Search Console AND Bing Webmaster Tools',
      'Google Business Profile claimed, optimised, and regularly updated',
      'Schema markup (Organisation, LocalBusiness, Service) on appropriate pages',
    ],
  },
  {
    title: 'DESIGN & UX',
    items: [
      'Mobile responsive on all screen sizes (375px, 768px, 1440px at minimum)',
      'Clear call-to-action above the fold on every landing page',
      'Contact information easy to find (header, footer, contact page)',
      'Professional, modern design — not a generic template',
      'Consistent branding — colours, fonts, logo usage across every page',
    ],
  },
  {
    title: 'CONTENT',
    items: [
      'Clear value proposition on the homepage (what you do, for whom, what outcome)',
      'Service pages with detailed descriptions, not just bullet lists',
      'About page with team, founder, or operator information and photo',
      'Blog or resources section publishing regularly (1–4 posts per month)',
      'Client testimonials, case studies, or measurable results displayed',
    ],
  },
  {
    title: 'SECURITY & TECHNICAL',
    items: [
      'SSL certificate active — site loads on https:// with no browser warnings',
      'POPIA compliance — cookie consent banner and privacy policy page',
      'Contact form tested end-to-end and delivering to a monitored inbox',
      '404 error page designed (not the generic browser default)',
      'Regular backups configured (daily for CMS sites, every deploy for static)',
    ],
  },
  {
    title: 'AI SEARCH / GEO READINESS',
    items: [
      'FAQ schema markup on every service page (AI search pulls from these directly)',
      'Clear, factual content that directly answers common industry questions',
      'Entity consistency — identical NAP (Name, Address, Phone) on website, GBP, directories, social media',
      'Structured data beyond basics — Organisation, Service, LocalBusiness, BreadcrumbList schemas',
      'Content architecture designed for AI extraction — concise paragraphs, clear headings, quotable direct statements',
    ],
  },
]

function Checkbox() {
  return <View style={styles.checkbox} />
}

function ChecklistDocument() {
  let itemCounter = 0
  return (
    <Document title="2026 Website Checklist" author="Origami Digital">
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.eyebrow}>ORIGAMI DIGITAL &bull; LEAD MAGNET</Text>
          <Text style={styles.title}>The 2026 Website Checklist</Text>
          <Text style={styles.subtitle}>
            30 things your South African business website needs to compete in 2026.
            Built on what we look for when auditing client sites.
          </Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          <Text style={styles.intro}>
            A useful website in 2026 does six jobs at once: it loads fast, ranks on Google,
            gets cited by AI search engines, looks current, converts visitors into leads,
            and is safe and updateable. This checklist covers all six. Work through it
            honestly &mdash; if you cannot tick at least 22 of 30 boxes, you have work to do.
          </Text>

          {CATEGORIES.map((cat, ci) => (
            <View key={cat.title} wrap={false}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryNumber}>
                  {String(ci + 1).padStart(2, '0')}
                </Text>
                <Text style={styles.categoryTitle}>{cat.title}</Text>
                <View style={styles.categoryLine} />
              </View>
              {cat.items.map((item) => {
                itemCounter += 1
                return (
                  <View key={`${cat.title}-${itemCounter}`} style={styles.item}>
                    <Checkbox />
                    <Text style={styles.itemText}>
                      <Text style={styles.itemNum}>{itemCounter}. </Text>
                      {item}
                    </Text>
                  </View>
                )
              })}
            </View>
          ))}

          {/* CTA */}
          <View style={styles.ctaBox}>
            <Text style={styles.ctaTitle}>
              Want us to run this checklist on YOUR website?
            </Text>
            <Text style={styles.ctaText}>
              We offer a free personalised audit for South African businesses &mdash; covering
              performance, SEO, design, security, and AI search readiness. You get a written
              report with prioritised recommendations. No obligation, no sales pitch.
            </Text>
            <Text style={styles.ctaLink}>
              origami-digital.co.za/get-started/free-audit
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footer} fixed>
          <Text style={styles.logo}>
            <Text style={styles.logoAccent}>Origami</Text> Digital
          </Text>
          <Text style={styles.footerText}>
            Build. Grow. Automate. &bull; origami-digital.co.za
          </Text>
        </View>
      </Page>
    </Document>
  )
}

async function main() {
  const outputPath = path.join(__dirname, '..', 'public', 'downloads', 'website-checklist-2026.pdf')
  console.log(`Generating ${outputPath}…`)
  await renderToFile(<ChecklistDocument />, outputPath)
  console.log('Done.')
}

void main()
