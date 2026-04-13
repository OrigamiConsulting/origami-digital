# CLAUDE.md — Origami Digital Website Project

## Project Identity

**Company:** Origami Digital (formerly Origami Consulting)
**Domain:** origami-digital.co.za (or origami-consulting.co.za as fallback)
**Tagline:** "Build. Grow. Automate."
**Owner:** Tinashe Munyaka — Senior UI/UX Designer & Full-Stack Developer, Johannesburg, South Africa
**Logo:** Origami Horse graphic + wordmark. The horse symbolises precision, elegance, and transformation — core to the origami metaphor.

This is the website for a one-person AI-augmented digital agency based in Bedfordview, Johannesburg. The website must function as both a showcase of capability AND as a lead generation machine. Every architectural and design decision must serve both goals simultaneously.

---

## Business Context — Read This First

Tinashe is relaunching a digital services business after operating primarily on internal projects since ~2015. The market has fundamentally changed. This is NOT a traditional web agency — it is an AI-augmented digital solutions provider. That positioning is the core differentiator in the South African market, where most agencies still operate on pre-AI workflows.

### The Three Pillars (Service Architecture)

All services are organised under three pillars. Never present them as a flat list of 8+ services — always group under these pillars:

**1. BUILD — Digital Product Development**
- Website design & development (Next.js, React, modern stacks)
- Mobile app development (React Native, PWAs)
- Custom software & SaaS solutions
- UI/UX design (embedded in all work, not a separate line item)

**2. GROW — Search & Digital Visibility**
- SEO & Generative Engine Optimisation (GEO) — optimising for both Google and AI search results
- Google Ads setup and management
- Content strategy & blog content creation
- Analytics, conversion optimisation & performance tracking
- Social media strategy (LinkedIn-focused for B2B)

**3. AUTOMATE — AI-Powered Business Solutions**
- Workflow automation (Claude, MCP connectors, Zapier, n8n)
- AI chatbots & customer service automation
- Document processing & intelligent data extraction
- Custom internal business tools (dashboards, portals, quoting systems)
- AI-assisted email marketing and CRM automation

### Target Market

Primary: Established South African SMEs and mid-market companies (R10M–R500M revenue) with:
- Existing businesses but weak/outdated digital presence
- Budget for R30K–R150K website projects
- Need for ongoing digital services (recurring revenue)
- Curiosity about AI but unsure where to start

Key verticals: Professional services (law, accounting, engineering), property developers, private healthcare, hospitality/tourism, manufacturing/industrial.

Secondary: Eventually expanding into other African markets, starting with SADC region.

### Competitive Positioning

Position as a senior specialist who operates lean by design — using AI to deliver enterprise-quality results without agency overhead. This is a strength, not a weakness. Frame the home-office setup as: "No bloated agency overhead. No layers of account managers. Direct access to a senior practitioner who builds with the same tools used by teams at companies like ServiceNow and Shopify."

### Portfolio / Proof Points

Reference these existing projects as proof of capability:
- origami-design.co — Interior design AI-enhanced service site (Next.js)
- origami-finance.co.za — SaaS invoicing platform for SA businesses
- origami-pay.co.za — Payslip generator SaaS for SA businesses
- origamievconnect.com — EV Connect platform with CPMS dashboard
- impactroots.co.za — B2B consulting site for skills development company
- Various projects on GitHub (reference by screenshot, not by direct link to repos with messy commit history)

---

## Marketing Strategy — The Bigger Picture

This website is the hub of a broader marketing engine. Claude Code must build it with the architectural hooks for these channels:

### Primary Channels

**1. SEO & Content Marketing (Long Game)**
- Blog section is CRITICAL — not optional. Architect it from day one.
- Target long-tail keywords: "web design company Johannesburg", "custom software development South Africa", "AI automation for small business South Africa", "SEO agency Gauteng"
- Every page must have proper meta titles, descriptions, Open Graph tags, JSON-LD structured data
- Blog posts should demonstrate expertise: case studies, "how we built X", AI in business insights, web design trends
- Target 2-4 posts per month (AI-assisted drafting, human-edited)
- Implement a content hub architecture — pillar pages for each service pillar linking to cluster content

**2. Google Business Profile**
- The site must integrate with and link to a Google Business Profile
- Include Bedfordview/Johannesburg address, service areas, operating hours
- Add review schema markup to the site

**3. LinkedIn (B2B Lead Generation)**
- Blog content should be easily shareable to LinkedIn with proper OG meta
- Include LinkedIn profile link prominently
- Consider a "Insights" or "Journal" section for shorter thought-leadership pieces
- Content repurposing: blog post → LinkedIn article → LinkedIn carousel (the website should make this easy)

**4. Google Ads (Paid Search)**
- Build dedicated landing pages for key services (not just linking to the homepage)
- Landing pages must be conversion-optimised: single CTA, social proof, clear value prop
- URL structure should support UTM tracking and campaign-specific pages
- Example: /services/website-design-johannesburg (SEO page) vs /get-started/website-design (ads landing page)

### Secondary / Emerging Channels

**5. Email Marketing**
- Build an email capture mechanism into the site (newsletter, lead magnet, free audit offer)
- Architect for integration with email platforms (Mailchimp, Brevo/Sendinblue, or Loops)
- Offer a "Free Website Audit" or "Free AI Readiness Assessment" as a lead magnet
- Automated nurture sequences: inquiry → follow-up → case study → proposal offer

**6. AI Search Optimisation (GEO)**
- Optimise for AI Overviews and AI search engines (Perplexity, ChatGPT search, Google AI Mode)
- Use clear, factual, well-structured content that AI models can extract and cite
- Include FAQ sections with concise answers (these get pulled into AI overviews)
- Entity-based SEO: establish Origami Digital as a known entity through consistent NAP data, schema markup, and authoritative content

**7. Referral & Partnership Marketing**
- Include a "Partners" or "Collaborate" section for agencies that do branding/marketing but need a dev partner
- Consider a referral programme page
- Build case studies that partners can share

**8. Social Proof & Authority Building**
- Testimonials section (start collecting from existing clients like ImpactRoots)
- "As seen in" / media mentions section (build over time)
- Client logos section
- Results/metrics where available ("40% faster load times", "Page 1 rankings in 3 months")

### Marketing Automation Stack (Practice What You Preach)

The site itself should demonstrate the AUTOMATE pillar:
- AI chatbot on the site (Claude-powered, demonstrating capability)
- Automated lead scoring and routing
- Smart contact forms that adapt based on service interest
- Analytics dashboard integration (Google Analytics 4, Search Console, Hotjar)

---

## Design System

### Brand Colours

Primary palette — refined from the original Origami Consulting colours:

```
--color-primary-dark:     #1E1E1E;    /* Near-black — headers, dark sections, text */
--color-primary-darker:   #141414;    /* Deeper black — hero backgrounds, nav */
--color-surface-dark:     #2A2A2A;    /* Dark surface — cards on dark backgrounds */

--color-accent-blue:      #0A8FBF;    /* Primary brand accent — buttons, links, highlights */
--color-accent-blue-dark: #087CA7;    /* Blue hover/pressed state */
--color-accent-teal:      #297373;    /* Secondary accent — supporting elements, gradients */
--color-accent-teal-light:#347F7F;    /* Teal hover state */

--color-coral:            #EF6351;    /* Signature pop — SPARINGLY: primary CTAs only, max 1-2 per page */
--color-coral-dark:       #D94F3F;    /* Coral hover state */

--color-neutral-100:      #FFFFFF;    /* White */
--color-neutral-200:      #F5F5F5;    /* Off-white backgrounds */
--color-neutral-300:      #DEDEDE;    /* Light grey — borders, dividers */
--color-neutral-400:      #8A8A8A;    /* Medium grey — secondary text */
--color-neutral-500:      #4A4A4A;    /* Dark grey — body text on light bg */
```

Usage rules:
- Coral (#EF6351) is the SIGNATURE colour. Use it ONLY for the single most important CTA per viewport. When everything is coral, nothing is coral.
- Blue (#0A8FBF) is the workhorse accent — links, secondary buttons, active states, section highlights
- Teal (#297373) is for supporting roles — hover states, gradient endpoints paired with blue, subtle section backgrounds
- Dark sections should use #1E1E1E or #141414 backgrounds with white/light text
- Light sections should use #FFFFFF or #F5F5F5 backgrounds with #1E1E1E or #4A4A4A text
- Alternate dark/light sections for visual rhythm

### Typography

Do NOT use generic fonts (Inter, Roboto, Arial, system-ui). Choose distinctive, characterful fonts:

```
--font-display:   'Cabinet Grotesk', sans-serif;     /* Headlines, hero text — bold, geometric, modern */
--font-body:      'Satoshi', sans-serif;              /* Body text — clean, readable, slightly rounded */
--font-mono:      'JetBrains Mono', monospace;        /* Code snippets, technical details */
```

Alternative acceptable combinations (choose ONE, don't mix):
- Display: 'Clash Display' + Body: 'General Sans'
- Display: 'Syne' + Body: 'DM Sans'
- Display: 'Space Grotesk' + Body: 'Outfit'

Font loading: Use Google Fonts or Fontshare (free). Always include `font-display: swap`.

Scale:
```
--text-xs:    0.75rem;     /* 12px — captions, labels */
--text-sm:    0.875rem;    /* 14px — small text, metadata */
--text-base:  1rem;        /* 16px — body text */
--text-lg:    1.125rem;    /* 18px — large body, intro text */
--text-xl:    1.25rem;     /* 20px — section intros */
--text-2xl:   1.5rem;      /* 24px — card headings */
--text-3xl:   2rem;        /* 32px — section headings */
--text-4xl:   2.5rem;      /* 40px — page titles */
--text-5xl:   3.5rem;      /* 56px — hero heading (desktop) */
--text-6xl:   4.5rem;      /* 72px — hero heading (large screens) */
```

### Motion & Animation

This site must feel alive, not static. But purposeful — every animation should serve UX:

- **Page load:** Staggered fade-in reveals for hero elements (heading → subheading → CTA → visual, each 100ms delayed)
- **Scroll animations:** Elements fade-up on intersection (use Framer Motion's `whileInView`). Keep it subtle — 20-40px translate, 0.5-0.8s duration
- **Hover states:** All interactive elements must have clear hover feedback. Cards: subtle lift (translateY -4px) + shadow. Buttons: background shift + slight scale
- **Section transitions:** Alternate section backgrounds create natural visual rhythm. Use subtle gradient transitions between sections rather than hard colour breaks
- **Hero section:** This is where you can be bold — kinetic typography, animated gradient backgrounds, or an animated SVG of the origami horse. This is the first impression. Make it count.
- **Performance:** Use CSS animations for simple effects. Framer Motion for scroll-triggered and complex sequences. Never sacrifice Core Web Vitals for animation — lazy-load heavy animations below the fold.

### Spatial Composition

- Use generous whitespace. Premium brands breathe.
- Max content width: 1280px for text content, full-bleed for hero/feature sections
- Grid: 12-column CSS grid for layouts. Break the grid intentionally for visual interest (overlapping elements, offset images)
- Mobile-first: Design for 375px first, then scale up. Touch targets: minimum 44x44px
- Section padding: 80-120px vertical on desktop, 48-64px on mobile

### Visual Effects — Use With Intent

- **Glassmorphism:** Subtle frosted glass effects on cards or overlays where appropriate (backdrop-filter: blur). Use sparingly — one or two elements per page, not everything.
- **Gradient accents:** Blue-to-teal gradients for decorative elements, section dividers, or background subtle washes
- **Grain/noise:** A very subtle noise texture overlay on dark sections adds warmth and prevents flat digital feeling
- **Grid patterns:** Subtle dot or line grid patterns as background textures for technical/builder sections

### What NOT To Do (Anti-Patterns)

- ❌ Purple gradients on white backgrounds (the #1 "AI slop" tell)
- ❌ Stock illustrations of people sitting with laptops (the current site's biggest issue)
- ❌ Floating 3D objects/blobs with no purpose
- ❌ Generic "hero with laptop mockup" patterns
- ❌ Overuse of glassmorphism (one or two elements, not the whole page)
- ❌ Rainbow/multicolour gradients
- ❌ Comic Sans, Papyrus, or other joke fonts (obviously)
- ❌ Animations that delay content visibility or hurt LCP
- ❌ Cookie-cutter SaaS landing page layouts
- ❌ Using the coral colour on more than 2 elements per viewport

---

## Technical Architecture

### Tech Stack

```
Framework:        Next.js 15 (App Router)
Language:         TypeScript
Styling:          Tailwind CSS v4
Animation:        Framer Motion
Deployment:       Vercel
Email:            Afrihost (for business email) or custom domain email
Analytics:        Google Analytics 4 + Google Search Console
Forms:            Server actions or API routes → email notification + CRM/spreadsheet
CMS (blog):       MDX files in the repo (start simple) or Sanity/Contentlayer if scaling
```

### Project Structure

```
origami-digital/
├── CLAUDE.md                    # This file
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── public/
│   ├── images/
│   │   ├── logo/               # Origami horse logo variants (SVG, PNG, favicon)
│   │   ├── portfolio/          # Project screenshots
│   │   ├── og/                 # Open Graph images for social sharing
│   │   └── icons/              # Service icons, decorative SVGs
│   ├── fonts/                  # Self-hosted font files if not using Google Fonts CDN
│   ├── robots.txt
│   └── sitemap.xml             # Generated at build time
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts, metadata, analytics
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx        # Services overview
│   │   │   ├── website-design/
│   │   │   │   └── page.tsx    # Individual service page (SEO-targeted)
│   │   │   ├── mobile-apps/
│   │   │   ├── custom-software/
│   │   │   ├── seo/
│   │   │   ├── ai-automation/
│   │   │   └── google-ads/
│   │   ├── work/               # Portfolio / case studies
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── journal/            # Blog / insights
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── get-started/        # Paid campaign landing pages
│   │   │   ├── website-design/
│   │   │   ├── seo-audit/
│   │   │   └── ai-consultation/
│   │   └── api/
│   │       ├── contact/        # Form submission handler
│   │       └── newsletter/     # Email capture handler
│   ├── components/
│   │   ├── layout/             # Header, Footer, Navigation, MobileMenu
│   │   ├── sections/           # Hero, Services, Portfolio, Testimonials, CTA, FAQ
│   │   ├── ui/                 # Button, Card, Badge, Input, AnimatedText
│   │   └── seo/                # JsonLd, MetaTags, BreadcrumbSchema
│   ├── content/
│   │   ├── posts/              # MDX blog posts
│   │   └── projects/           # MDX case studies
│   ├── lib/
│   │   ├── fonts.ts            # Font configuration
│   │   ├── metadata.ts         # Default metadata + helper functions
│   │   ├── analytics.ts        # GA4 event helpers
│   │   └── utils.ts
│   └── styles/
│       └── globals.css         # Tailwind directives + CSS custom properties
```

### SEO Architecture — Non-Negotiable Requirements

Every page MUST have:
1. Unique `<title>` tag (50-60 chars) with primary keyword + "| Origami Digital"
2. Unique `<meta name="description">` (150-160 chars) with keyword + value proposition
3. `<meta property="og:title">`, `og:description`, `og:image`, `og:url`
4. `<meta name="twitter:card">` set to "summary_large_image"
5. Canonical URL
6. JSON-LD structured data (Organisation on homepage, Service on service pages, BlogPosting on articles, BreadcrumbList on all pages)
7. Proper heading hierarchy (one H1 per page, H2s for sections, H3s for subsections)
8. Alt text on ALL images (descriptive, keyword-natural)
9. Internal linking between related pages (services ↔ blog posts ↔ case studies)

```typescript
// Example: src/lib/metadata.ts
export function generateMetadata(page: {
  title: string;
  description: string;
  path: string;
  image?: string;
}) {
  const url = `https://origami-digital.co.za${page.path}`;
  return {
    title: `${page.title} | Origami Digital`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'Origami Digital',
      locale: 'en_ZA',
      type: 'website',
      images: [{ url: page.image || '/images/og/default.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  };
}
```

### Performance Requirements

Target scores (Lighthouse):
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Specific targets:
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1
- INP (Interaction to Next Paint): < 200ms

Implementation:
- Use `next/image` for ALL images with proper width/height/sizes
- Use `next/font` for font loading
- Lazy load below-fold sections and heavy animations
- Preload critical hero image
- Use static generation (SSG) for all pages except dynamic API routes
- Minimise client-side JavaScript — use Server Components by default

### Accessibility Requirements

- WCAG 2.1 AA compliance minimum
- All interactive elements keyboard-navigable
- Skip-to-content link
- Focus indicators on all interactive elements
- Colour contrast ratio: minimum 4.5:1 for body text, 3:1 for large text
- Reduced-motion media query: disable animations for users who prefer reduced motion
- Screen reader-friendly: proper ARIA labels, semantic HTML, landmark regions

---

## Sitemap & Page Content Direction

### Homepage
- **Hero:** Bold headline + subheadline + primary CTA ("Get a Free Consultation") + secondary CTA ("See Our Work")
- **Three Pillars Section:** Visual cards for Build / Grow / Automate with brief descriptions and links to service pages
- **Portfolio Highlights:** 3-4 best projects with screenshots and brief descriptions
- **Social Proof:** Testimonials, client logos, key metrics
- **Blog Preview:** Latest 3 journal entries
- **CTA Section:** "Ready to transform your digital presence?" with contact form or calendly embed
- **FAQ Section:** 5-6 common questions (feeds into AI search results)

### About Page
- Tinashe's story — the journey from 2015 to now, the AI-augmented approach
- Values and working methodology
- The Origami metaphor — precision, transformation, craft
- Why "no agency overhead" is a feature, not a bug

### Services Overview Page
- Three-pillar layout with links to individual service pages
- Each pillar gets a dedicated section with 3-4 specific offerings
- Cross-linking between complementary services

### Individual Service Pages (6 pages)
Each must be SEO-optimised for specific keywords. Include:
- Hero with service-specific headline
- Problem/solution framing
- What's included (scope)
- Process (how it works — 3-4 steps)
- Relevant portfolio examples
- FAQ specific to that service
- CTA to contact/get started

### Work / Portfolio Page
- Grid of project case studies
- Filter by service type (Build / Grow / Automate)
- Each case study: challenge → approach → results → screenshots

### Journal / Blog
- Grid layout with featured post + recent posts
- Category filtering (Web Design, SEO, AI & Automation, Business Insights)
- Each post: proper reading time estimate, table of contents for long posts, share buttons, related posts

### Contact Page
- Smart contact form (service interest selector that adjusts fields)
- Direct email and phone
- Location (Bedfordview, Johannesburg — Google Maps embed)
- Business hours
- Optional: Calendly embed for booking consultations

### Landing Pages (for Google Ads)
- Stripped-down pages: no main navigation, single focused CTA
- Social proof immediately visible
- Form above the fold
- Specific to the service being advertised

---

## Content Voice & Tone

### Brand Voice
- **Confident, not arrogant.** "We build digital products that perform" not "We're the best agency in SA"
- **Clear, not jargon-heavy.** Explain AI and tech concepts in plain language. The target audience is business owners, not developers.
- **Direct, not salesy.** Lead with value and expertise. No "synergy" or "leverage" or "disrupt"
- **Warm but professional.** Approachable without being casual. Think senior consultant, not startup bro.

### Writing Guidelines
- Use "we" even though it's a one-person operation — it sounds more professional and leaves room for growth
- Active voice: "We build websites that convert" not "Websites are built by us that convert"
- Specific over vague: "93% Lighthouse performance score" not "really fast websites"
- South African English spelling (organisation, not organization; colour, not color; optimise, not optimize)
- Include Rand (ZAR) pricing where relevant, not USD

---

## Development Guidelines for Claude Code

### Code Quality
- TypeScript strict mode — no `any` types
- ESLint + Prettier configured
- Consistent file naming: kebab-case for files, PascalCase for components
- Co-locate styles, tests, and components
- Extract shared logic into custom hooks
- Use Server Components by default, Client Components only when needed (interactivity, hooks)

### Component Architecture
- Every section of the homepage should be a separate component in `components/sections/`
- UI primitives (Button, Card, Input) in `components/ui/` — reusable across pages
- Layout components (Header, Footer) in `components/layout/`
- All components should accept `className` prop for composition

### Git Conventions
- Conventional commits: `feat:`, `fix:`, `style:`, `docs:`, `refactor:`
- Branch naming: `feature/homepage-hero`, `fix/mobile-nav`, `content/blog-post-1`

### Environment Variables
```
NEXT_PUBLIC_GA_ID=                  # Google Analytics 4
NEXT_PUBLIC_SITE_URL=https://origami-digital.co.za
CONTACT_EMAIL=hello@origami-digital.co.za
SMTP_HOST=                          # For contact form emails
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

---

## MCP Servers & Integrations for Claude Code

When working in Claude Code, these MCP integrations are available and should be used:
- **Context7:** Pull up-to-date documentation for Next.js 15, Tailwind CSS v4, Framer Motion, React — always check for latest API patterns before writing code
- **Figma MCP:** If designs exist in Figma, reference them. For this project, designs are built in code first.
- **Vercel MCP:** For deployment, checking build logs, managing environment variables
- **Supabase MCP:** If/when a database is needed (contact form submissions, blog CMS, lead tracking)

---

## Launch Checklist

Before going live, verify:
- [ ] All pages have unique meta titles and descriptions
- [ ] JSON-LD structured data on all pages (Organisation, Service, BlogPosting, BreadcrumbList)
- [ ] robots.txt allows crawling of all public pages
- [ ] XML sitemap generated and submitted to Google Search Console
- [ ] Google Analytics 4 tracking verified
- [ ] Google Search Console property created and verified
- [ ] Google Business Profile created and linked
- [ ] Favicon and apple-touch-icon configured
- [ ] Open Graph images generated for all key pages (1200x630px)
- [ ] Contact form tested end-to-end (submission → email notification)
- [ ] All images optimised with proper alt text
- [ ] Lighthouse scores: Performance 95+, Accessibility 100, SEO 100
- [ ] Mobile responsive tested on actual devices (not just browser dev tools)
- [ ] 404 page designed and functional
- [ ] SSL certificate active (Vercel handles this automatically)
- [ ] Email capture / newsletter signup functional
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Reduced-motion preference respected
- [ ] Print stylesheet (basic)
