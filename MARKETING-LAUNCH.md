# MARKETING-LAUNCH.md — Origami Digital Marketing Execution Plan

> **Purpose:** This document is an autonomous execution guide for Claude Code with Chrome browser access. Follow each task sequentially. For any task that requires account credentials or personal verification (like SMS codes), pause and notify the user. Mark each task as DONE when completed.

---

## EXECUTION STATUS (Last updated: 2026-04-15)

| Phase | Task | Status | Notes |
|---|---|---|---|
| **Phase 1** | Google Business Profile | 🟡 Partial | Profile created and linked. Pending: description update, photos upload |
| **Phase 2** | Directory Listings | ❌ Not started | Clutch, GoodFirms, DesignRush, TechBehemoths, Sortlist — none submitted yet |
| **Phase 3** | SEO Foundations | ✅ Done | Google Search Console verified, sitemap submitted, meta tags on all pages |
| **Phase 3** | Bing Webmaster Tools | 🟡 Partial | Account created, site import started. Pending: complete setup, submit sitemap |
| **Phase 4** | Blog Content | ✅ Done | All 5 blog posts published (see `src/content/posts/`) |
| **Phase 5** | LinkedIn | ❌ Not started | Profile and company page not yet optimised |
| **Phase 6** | Email Marketing (Brevo) | ❌ Not started | |
| **Phase 7** | Lead Magnet PDF | ❌ Not started | Content for email nurture + checklist drafted but PDF not generated |
| **Phase 8** | Google Ads Landing Pages | ✅ Done | 3 landing pages live: `/get-started/website-design`, `/get-started/seo-audit`, `/get-started/ai-consultation` |
| **Phase 8** | Google Ads Campaigns | ✅ Done | 6 campaigns configured in account 702-187-8945 (see details below) |
| **Phase 8** | GEO Audit Landing Page | ❌ Not started | `/get-started/geo-audit` not yet built |
| **Phase 9** | Google Analytics 4 | ✅ Done | GA4 property `G-X38KXW2JYC` installed and verified |
| **Phase 9** | Conversion Tracking | ✅ Done | Google Ads conversion tracking (`AW-17524264437`) on all forms |

### Google Ads Campaign Details (Account: 702-187-8945)

**Campaigns live as of 2026-04-15:**

| Campaign | Type | Bid Strategy | Daily Budget | Status |
|---|---|---|---|---|
| OrigamiPay - Search - Payslip Generator SA | Search | Maximize conversions | R60 | Active |
| Origami Finance - Search - Sign-ups | Search | Maximize conversions | R100 | Active |
| Search - AI Automation SA | Search | **Maximize clicks (R15 max CPC)** | R150 | Active (Learning) |
| Search - Website Design JHB | Search | Maximize conversions | R150 | Paused |
| Home EV Charger Installers | Performance Max | Maximize conversions | R50 | Paused |
| CPMS Platform - South Africa | Performance Max | Maximize conversions | R25 | Active (Limited) |

**Key decisions:**
- AI Automation campaign changed from "Maximize conversions" to "Maximize clicks" with R15 max CPC (2026-04-15) to prevent budget burn from click fraud
- Performance Max campaigns cannot be changed to "Maximize clicks" (Google limitation) but have very low actual CPC (R0.54 and R0.95)
- All conversions use label `uT42CPTpjo0cEPWbnKRB` with fixed ZAR 2,500 value per conversion (tracking label, not actual cost)
- Total account spend to date: ~R6,400.80

---

## BUSINESS INFORMATION (Reference for all tasks)

```
Business Name:        Origami Digital
Website:              https://origami-digital.co.za
Owner:                Tinashe Munyaka
Email:                hello@origami-digital.co.za
Phone:                +27 (0)78 190 0107
Address:              Kloof Estates, Bedfordview, Johannesburg, South Africa
Business Hours:       Monday–Friday, 8:00 AM – 5:00 PM SAST
Business Category:    Web design company (primary)
Secondary Categories: Software company, Internet marketing service, Mobile app developer
Service Area:         Johannesburg, Gauteng, South Africa (expanding nationally)

Services Offered:
- Website Design & Development
- Mobile App Development
- Custom Software & SaaS Solutions
- SEO & Generative Engine Optimisation (GEO)
- Google Ads Management
- AI Automation & Business Solutions

Tagline:              Build. Grow. Automate.
Description (short):  AI-augmented digital agency in Johannesburg delivering enterprise-quality websites, SEO, and automation solutions for South African businesses.
Description (long):   Origami Digital is an AI-augmented digital agency based in Bedfordview, Johannesburg. We help established South African businesses build exceptional websites and apps, grow their online visibility through SEO and Google Ads, and automate operations with AI-powered tools. Founded by Tinashe Munyaka, an expert UI/UX designer and full-stack developer with over 16 years of experience, we deliver enterprise-quality results without bloated agency overhead. Our portfolio includes SaaS platforms, B2B websites, EV charging dashboards, and custom business tools built with Next.js, React, and TypeScript.
```

---

## PHASE 1: GOOGLE BUSINESS PROFILE SETUP

**Priority: HIGH | Time: 20 minutes | Cost: Free**

### Task 1.1: Create Google Business Profile

1. Navigate to `https://business.google.com/create`
2. Sign in with the user's Google account (PAUSE and ask user for credentials if needed)
3. Enter business name: **Origami Digital**
4. Select business category: **Web design company**
5. Add secondary categories: **Software company**, **Internet marketing service**
6. When asked "Do you want to add a location customers can visit?":
   - Select YES if user has a physical office address in Bedfordview
   - If working from home and prefers not to show address: Select "I deliver goods and services to my customers" and hide the address
7. Enter address: Kloof Estates, Bedfordview, Johannesburg, South Africa (ask user for full street address)
8. Set service area: Johannesburg, Pretoria, Gauteng, South Africa
9. Enter phone: +27 78 190 0107
10. Enter website: https://origami-digital.co.za
11. Click through to verification — PAUSE and notify user about verification method (phone/postcard/email)

### Task 1.2: Optimise the Profile

Once the profile is created (even before verification completes):

1. **Business description:** Paste the long description from the business info above
2. **Business hours:** Monday–Friday 8:00 AM – 5:00 PM, Saturday–Sunday Closed
3. **Services:** Add each service as a separate item:
   - Website Design & Development — "Custom websites built with Next.js, React, and modern frameworks. Fast, responsive, and SEO-optimised."
   - Mobile App Development — "Cross-platform mobile applications using React Native and PWAs."
   - Custom Software & SaaS — "Bespoke business tools and SaaS platforms tailored to your needs."
   - SEO & Search Visibility — "Technical SEO, content strategy, and Generative Engine Optimisation (GEO) for Google and AI search engines like ChatGPT and Perplexity. We optimise your business to be found AND cited."
   - Google Ads Management — "Targeted paid search campaigns that drive qualified leads."
   - AI Automation — "Workflow automation, AI chatbots, and custom business tools powered by AI."
4. **Photos:** Upload the following (ask user to provide files, or take screenshots from the live website):
   - Logo image (the Origami horse or wordmark)
   - Cover photo (hero section screenshot from origami-digital.co.za)
   - 3-5 portfolio screenshots from: origami-finance.co.za, origami-pay.co.za, impactroots.co.za, origamievconnect.com
5. **Attributes:** Enable any relevant attributes like "Online appointments", "Online estimates"
6. **Opening date:** Set to 2010 (original founding year)

### Task 1.3: Create First Google Business Post

Write and publish a post:

```
Title: Now Accepting New Clients for 2026
Body: Origami Digital is an AI-augmented web design and development agency in Johannesburg. We help South African businesses build exceptional websites, grow their online visibility, and automate operations with AI.

Book a free consultation to discuss your project.

CTA Button: Book Online → https://origami-digital.co.za/contact
```

---

## PHASE 2: DIRECTORY LISTINGS

**Priority: HIGH | Time: 40 minutes | Cost: Free**

### Task 2.1: Clutch.co

1. Navigate to `https://clutch.co/get-listed`
2. Select "Basic" (free) profile
3. Sign in with LinkedIn or Google account (PAUSE for user auth if needed)
4. Complete company profile:
   - Company name: Origami Digital
   - Website: https://origami-digital.co.za
   - Location: Johannesburg, South Africa
   - Company size: 1-9 employees
   - Founded: 2010
   - Hourly rate: R500–R1,500 / $25–$80
   - Minimum project size: R30,000 / $1,500
   - Service lines: Web Design, Web Development, Mobile App Development, UX/UI Design, SEO, Custom Software Development
   - Industry focus: Professional Services, Healthcare, Property, Hospitality, Manufacturing
   - Client focus: Small Business (40%), Midmarket (50%), Enterprise (10%)
   - Description: Use the long description from business info above
5. Submit for review

### Task 2.2: GoodFirms

1. Navigate to `https://www.goodfirms.co/get-listed`
2. Sign up with business email or Google account
3. Complete profile with same information as Clutch
4. Service categories: Web Design Companies, Software Development Companies, SEO Companies, Mobile App Development Companies
5. Location: Johannesburg, South Africa
6. Submit for review

### Task 2.3: DesignRush

1. Navigate to `https://www.designrush.com/get-listed`
2. Create free agency profile
3. Fill in same details: name, website, services, location, company description
4. Categories: Web Design, SEO, Software Development, Mobile Development
5. Submit

### Task 2.4: TechBehemoths

1. Navigate to `https://techbehemoths.com/register`
2. Create company profile
3. Services: Web Design, SEO, Mobile Development, Software Development, UI/UX Design
4. Location: Johannesburg, South Africa
5. Complete and submit

### Task 2.5: Sortlist

1. Navigate to `https://www.sortlist.com` and find "Register as agency" or "Get listed"
2. Create free agency profile
3. Services: Web Development, SEO, App Development, Digital Strategy
4. Location: South Africa
5. Complete and submit

---

## PHASE 3: SEO FOUNDATIONS ON THE WEBSITE

**Priority: HIGH | Time: 30 minutes | Cost: Free**

### Task 3.1: Verify Site Technical SEO

Using the browser, navigate to the live site and check each page:

1. **Homepage** (https://origami-digital.co.za)
   - Verify `<title>` tag exists and contains "Origami Digital"
   - Verify `<meta name="description">` exists and is 150-160 chars
   - Verify `<link rel="canonical">` points to correct URL
   - Verify JSON-LD structured data exists (Organisation schema)
   - Verify Open Graph meta tags exist

2. **Services page** (/services) — same checks
3. **About page** (/about) — same checks
4. **Contact page** (/contact) — same checks
5. **Each service detail page** (/services/website-design, /services/seo, etc.) — same checks

Report any missing or incorrect meta tags to the user.

### Task 3.2: Submit to Google Search Console

1. Navigate to `https://search.google.com/search-console`
2. Sign in with user's Google account
3. Add property: `https://origami-digital.co.za`
4. Choose verification method:
   - If DNS verification: provide the TXT record to the user to add
   - If HTML tag: provide the meta tag to add to the site
5. Once verified, submit the sitemap: `https://origami-digital.co.za/sitemap.xml`
6. Request indexing for the homepage

### Task 3.3: Submit to Bing Webmaster Tools

1. Navigate to `https://www.bing.com/webmasters`
2. Sign in or create account
3. Import from Google Search Console (fastest method) OR add site manually
4. Submit sitemap: `https://origami-digital.co.za/sitemap.xml`

---

## PHASE 4: BLOG CONTENT CREATION

**Priority: HIGH | Time: 60 minutes | Cost: Free**

### Task 4.1: Write First Blog Post

Create an MDX file for the blog. The post should target the keyword "web design company Johannesburg" and be approximately 1,500 words.

**Title:** "What to Look for When Hiring a Web Design Company in Johannesburg (2026 Guide)"

**Outline:**
- Introduction: The Johannesburg web design market in 2026
- Why your website matters more than ever (mobile-first, AI search, Core Web Vitals)
- 7 things to look for in a web design company:
  1. Portfolio of real, live websites (not just mockups)
  2. Modern tech stack (Next.js, React — not outdated WordPress themes)
  3. SEO built-in from day one, not bolted on later
  4. Performance focus (Lighthouse scores, load times)
  5. Clear pricing and process
  6. Ongoing support and maintenance
  7. Understanding of AI and automation trends
- Red flags to watch out for
- How Origami Digital approaches web design differently
- CTA: Book a free consultation

**SEO requirements for the post:**
- URL slug: `/journal/web-design-company-johannesburg`
- Meta title: "What to Look for in a Web Design Company in Johannesburg | 2026 Guide"
- Meta description: "Hiring a web design company in Johannesburg? Here are 7 essential things to look for and red flags to avoid. Expert guide from Origami Digital."
- Include internal links to /services/website-design and /contact
- Include the keyword naturally 3-5 times (never forced)

Save the file to `src/content/posts/web-design-company-johannesburg.mdx`

### Task 4.2: Write Second Blog Post

Target keyword: "AI automation for business South Africa"

**Title:** "How AI Automation Is Helping South African Businesses Save Time and Money in 2026"

**Outline:**
- Introduction: AI is no longer just for big corporations
- What is AI automation? (explain in plain language for business owners)
- 5 practical AI automation use cases for SA businesses:
  1. Automated customer responses and chatbots
  2. Document processing and data extraction
  3. Email marketing automation and personalisation
  4. Reporting and analytics dashboards
  5. Internal workflow automation (approvals, scheduling, data entry)
- Real cost savings: what businesses can expect
- How to get started (start small, measure, scale)
- Why Origami Digital's approach is different (AI-first, not AI-as-afterthought)
- CTA: Book a free AI readiness consultation

**SEO requirements:**
- URL slug: `/journal/ai-automation-business-south-africa`
- Meta title: "AI Automation for Business in South Africa | Practical Guide 2026"
- Meta description: "Discover how South African businesses are using AI automation to save time and cut costs. 5 practical use cases you can implement today."
- Include internal links to /services/ai-automation and /contact

Save the file to `src/content/posts/ai-automation-business-south-africa.mdx`

### Task 4.3: Write Third Blog Post

Target keyword: "how much does a website cost South Africa"

**Title:** "How Much Does a Website Cost in South Africa? A Transparent 2026 Pricing Guide"

**Outline:**
- Introduction: The most common question we get
- Pricing tiers in the SA market:
  - Template/DIY sites: R0–R5,000
  - Freelancer-built: R5,000–R25,000
  - Agency-built standard: R25,000–R80,000
  - Custom-built premium: R80,000–R250,000+
  - Enterprise/complex: R250,000+
- What determines the price (number of pages, complexity, features, CMS, e-commerce, integrations)
- What you SHOULD expect at each price point
- The hidden costs people forget (hosting, domain, SSL, maintenance, content updates)
- Why the cheapest option often costs more long-term
- How Origami Digital prices projects (transparent, value-based)
- CTA: Get a free quote for your project

**SEO requirements:**
- URL slug: `/journal/website-cost-south-africa`
- Meta title: "How Much Does a Website Cost in South Africa? | 2026 Pricing Guide"
- Meta description: "Wondering what a website costs in South Africa? Complete 2026 pricing breakdown from R5,000 to R250,000+. Transparent guide from Origami Digital."
- Include internal links to /services/website-design, /services/custom-software, and /contact

Save the file to `src/content/posts/website-cost-south-africa.mdx`

### Task 4.4: Write Fourth Blog Post — GEO (CRITICAL DIFFERENTIATOR)

Target keyword: "generative engine optimisation South Africa"

This is the most strategically important blog post. Almost NO South African agency is writing about GEO yet. By publishing this first, Origami Digital can own this keyword and position as the authority on AI search optimisation in the SA market.

**Title:** "What Is Generative Engine Optimisation (GEO)? Why South African Businesses Need It in 2026"

**Outline (aim for 2,000 words — this is a pillar page):**
- Introduction: The search landscape has fundamentally changed
  - Google AI Overviews now appear on the majority of search results
  - AI search engines like Perplexity, ChatGPT search, and Google AI Mode are how a growing number of people find businesses
  - If your website isn't optimised for AI to cite you, you're becoming invisible
- What is GEO? (explain clearly for non-technical business owners)
  - GEO = optimising your website so that AI systems (not just traditional search engines) can find, understand, and recommend your business
  - How it differs from traditional SEO: SEO gets you ranked in a list of links; GEO gets you cited in AI-generated answers
  - GEO and SEO are not competitors — they work together. Good SEO is the foundation, GEO is the next layer.
- Why GEO matters for South African businesses specifically
  - South Africans are rapidly adopting AI search tools
  - Businesses that appear in AI-generated answers get the enquiry; those that don't get skipped entirely
  - Early adopters in the SA market will have a massive advantage before competitors catch up
- The 7 pillars of effective GEO:
  1. Structured data and schema markup (FAQ schema, Organisation schema, Service schema, HowTo schema)
  2. Clear, factual, well-organised content that AI can extract and quote
  3. Entity authority — consistent NAP (Name, Address, Phone) data across all platforms
  4. FAQ sections on every service page with direct, concise answers
  5. Topical authority — deep content clusters around your core services
  6. Technical foundation — fast loading, mobile-first, clean semantic HTML
  7. Reputation signals — reviews, directory listings, backlinks from credible sources
- Practical GEO checklist for SA business owners (actionable steps they can take today)
  - Claim and optimise Google Business Profile
  - Add FAQ schema to all service pages
  - Write content that directly answers common questions in your industry
  - Ensure your business information is identical everywhere it appears online
  - Get listed on credible directories (Clutch, GoodFirms, industry-specific platforms)
- How Origami Digital builds GEO into every website
  - Every site we build includes structured data, FAQ schemas, semantic HTML, and content architecture designed for both Google and AI search engines
  - This isn't a bolt-on service — it's embedded in how we develop
- CTA: Book a free GEO audit — we'll show you how your business appears (or doesn't appear) in AI search results

**SEO requirements:**
- URL slug: `/journal/generative-engine-optimisation-south-africa`
- Meta title: "What Is Generative Engine Optimisation (GEO)? | South Africa Guide 2026"
- Meta description: "GEO is how businesses get found in AI search results. Learn what Generative Engine Optimisation is, why it matters for SA businesses, and how to implement it."
- Include internal links to /services/seo, /services/website-design, and /contact
- Include the keyword "generative engine optimisation" naturally 5-8 times
- Include secondary keywords: "GEO optimisation", "AI search optimisation South Africa", "AI search visibility"
- This post should be linked FROM the SEO service page (/services/seo) as supporting content

Save the file to `src/content/posts/generative-engine-optimisation-south-africa.mdx`

### Task 4.5: Write Fifth Blog Post — GEO vs SEO Comparison

Target keyword: "GEO vs SEO difference"

**Title:** "GEO vs SEO: What's the Difference and Does Your Business Need Both?"

**Outline (aim for 1,200 words):**
- Introduction: You've heard of SEO. But what about GEO?
- Quick definitions side by side
- Comparison table:
  - SEO: Optimises for search engine rankings → appears in list of links → user clicks through to your site
  - GEO: Optimises for AI-generated answers → appears as a cited source in AI responses → user may or may not click, but your brand is the recommended answer
- Do you need both? (Yes — here's why)
  - SEO is the foundation. Without good SEO, GEO has nothing to build on.
  - GEO is the future layer. Without GEO, you'll lose visibility as AI search grows.
- What this means practically for a South African business
- How Origami Digital integrates both into every project
- CTA: Get a free consultation to discuss your search visibility strategy

**SEO requirements:**
- URL slug: `/journal/geo-vs-seo-difference`
- Meta title: "GEO vs SEO: What's the Difference? | Origami Digital"
- Meta description: "SEO gets you ranked. GEO gets you cited by AI. Learn the difference between Generative Engine Optimisation and traditional SEO, and why your business needs both."
- Include internal links to /journal/generative-engine-optimisation-south-africa, /services/seo, and /contact

Save the file to `src/content/posts/geo-vs-seo-difference.mdx`

---

## PHASE 5: LINKEDIN OPTIMISATION

**Priority: MEDIUM | Time: 20 minutes | Cost: Free**

### Task 5.1: Update LinkedIn Personal Profile

PAUSE and ask user to provide LinkedIn login credentials or perform this together.

Update the following on Tinashe's LinkedIn profile:
- **Headline:** "Founder at Origami Digital | AI-Augmented Web Design & Development | Johannesburg"
- **About section:** 
  ```
  I help South African businesses build exceptional digital products, grow their online visibility, and automate operations with AI.

  After 16+ years in UI/UX design and software development, I founded Origami Digital — an AI-augmented agency that delivers enterprise-quality websites, SEO, and automation solutions without bloated agency overhead.

  What we do:
  → Website Design & Development (Next.js, React, TypeScript)
  → Mobile App Development
  → SEO & Generative Engine Optimisation
  → AI Automation & Business Solutions
  → Google Ads Management

  Our portfolio includes SaaS platforms (Origami Finance, Origami Pay), EV charging dashboards (Origami EV Connect), and B2B consulting websites — all built with modern frameworks and AI-assisted workflows.

  Based in Bedfordview, Johannesburg. Serving businesses across South Africa.

  → Book a free consultation: https://origami-digital.co.za/contact
  ```
- **Experience:** Add "Founder & Lead Developer at Origami Digital" (2010–Present)
- **Featured section:** Add link to origami-digital.co.za
- **Skills:** Add: Web Design, UI/UX Design, React.js, Next.js, TypeScript, SEO, AI, Software Development

### Task 5.2: Create LinkedIn Company Page

1. Navigate to LinkedIn → Create Company Page → Small business
2. Company name: Origami Digital
3. Website: https://origami-digital.co.za
4. Industry: IT Services and IT Consulting
5. Company size: 1-10 employees
6. Tagline: "Build. Grow. Automate."
7. Description: Use the long description from business info above
8. Logo: Upload the Origami Digital logo
9. Location: Bedfordview, Johannesburg, South Africa

### Task 5.3: Draft First 3 LinkedIn Posts

Write three LinkedIn posts and save them for the user to review and publish:

**Post 1 — Launch Announcement:**
```
After years of building digital products for my own businesses — SaaS platforms, EV charging dashboards, interior design sites — I'm officially opening the doors at Origami Digital.

We're an AI-augmented digital agency in Johannesburg that helps South African businesses:

→ Build exceptional websites and apps
→ Grow their online visibility through SEO
→ Automate operations with AI

What makes us different? No bloated agency team. No layers of account managers. Just a senior designer and developer who builds with the same AI tools used by teams at companies like Shopify and ServiceNow.

If your website isn't bringing in business, let's talk.

🔗 origami-digital.co.za/contact

#WebDesign #Johannesburg #DigitalAgency #AI #SouthAfrica
```

**Post 2 — Value Post (share next week):**
```
Your website's Lighthouse performance score matters more than you think.

Google uses Core Web Vitals (loading speed, interactivity, visual stability) as a ranking signal. A slow site doesn't just frustrate visitors — it actively pushes you down in search results.

Here's what good looks like:
• LCP (loading): under 2.5 seconds
• INP (interactivity): under 200ms
• CLS (visual stability): under 0.1

Every site we build at Origami Digital targets 95+ on Lighthouse performance.

Want to know your score? Run your site through PageSpeed Insights (it's free) and see where you stand.

Or send me your URL — I'll run a quick audit and share what I find. No strings attached.

#WebPerformance #SEO #WebDesign #SouthAfrica
```

**Post 3 — AI Thought Leadership (share week 3):**
```
Most South African businesses are sleeping on AI automation.

Here's what one of our clients automated in a single week:

→ Customer enquiry responses (AI chatbot handles 70% of FAQs)
→ Invoice generation (from 45 mins to 3 mins per batch)
→ Monthly reporting (auto-generated from their data)

Total time saved: ~15 hours per week.
Total cost: Less than one employee's monthly salary.

The tools exist. They're affordable. Most businesses just don't know where to start.

That's exactly what we help with at Origami Digital.

If you're curious about what AI automation could look like for your business, I'm happy to walk you through it. No pitch — just an honest conversation.

DM me or book a call: origami-digital.co.za/contact

#AIAutomation #BusinessAutomation #SouthAfrica #SmallBusiness
```

Save these posts to a file: `marketing/linkedin-posts.md`

**Post 4 — GEO Thought Leadership (share week 4):**
```
Most SEO agencies in South Africa aren't talking about this yet.

It's called Generative Engine Optimisation — GEO.

Here's the shift: Google AI Overviews, ChatGPT, Perplexity — they don't show you a list of 10 links anymore. They give you ONE answer. And they cite the sources they trust.

If your website isn't structured for AI to understand and recommend your business, you're becoming invisible. Not slowly. Right now.

Traditional SEO gets you ranked in a list.
GEO gets you CITED in the answer.

The businesses that figure this out in 2026 will dominate their markets. The ones that don't will wonder where their leads went.

At Origami Digital, we build GEO into every website from day one — structured data, FAQ schemas, entity authority, content architecture designed for both Google AND AI search.

I wrote a detailed guide on what GEO is and how SA businesses can start implementing it: [link to blog post]

If you want to know how your business appears in AI search results right now, send me your URL. I'll check for you.

#GEO #GenerativeEngineOptimisation #SEO #AI #SouthAfrica #DigitalMarketing
```

Save all posts to a file: `marketing/linkedin-posts.md`

---

## PHASE 6: EMAIL MARKETING SETUP

**Priority: MEDIUM | Time: 30 minutes | Cost: Free (Brevo free tier)**

### Task 6.1: Create Brevo Account

1. Navigate to `https://www.brevo.com`
2. Sign up for free account with hello@origami-digital.co.za
3. PAUSE for user to verify email and complete setup

### Task 6.2: Create Email List

1. Create a list called "Origami Digital Leads"
2. Create a list called "Newsletter Subscribers"

### Task 6.3: Draft Welcome Email Sequence

Write 5 emails for an automated welcome sequence. Save to `marketing/email-sequence.md`:

**Email 1 (Immediate — after contact form submission):**
- Subject: "Thanks for reaching out — here's what happens next"
- Body: Confirm receipt, set expectations (we'll respond within 24 hours), brief intro to Origami Digital, link to portfolio

**Email 2 (Day 3 — if no response yet):**
- Subject: "Quick question about your project"
- Body: Ask a simple qualifying question (What's the biggest challenge with your current website?), share a relevant blog post

**Email 3 (Day 7):**
- Subject: "How [client name] transformed their online presence"
- Body: Share a case study (ImpactRoots or Origami Finance), results achieved, subtle CTA to book a call

**Email 4 (Day 14):**
- Subject: "Is your website costing you clients?"
- Body: Share the "Website Cost in South Africa" blog post, frame it as educational value, include free audit offer

**Email 5 (Day 30):**
- Subject: "Still thinking about your digital project?"
- Body: Friendly follow-up, offer a no-obligation 15-minute consultation, mention that projects book up in advance

Save the full email content to `marketing/email-sequence.md`

---

## PHASE 7: LEAD MAGNET CREATION

**Priority: MEDIUM | Time: 30 minutes | Cost: Free**

### Task 7.1: Create "Website Audit Checklist" Lead Magnet

Create a downloadable PDF checklist that visitors can get in exchange for their email.

**Title:** "The 2026 Website Checklist: 25 Things Your South African Business Website Needs"

**Content structure (25 items grouped into 5 categories):**

Performance (5 items):
1. Page loads in under 3 seconds on mobile
2. Lighthouse performance score above 90
3. Images optimised (WebP format, lazy-loaded)
4. No render-blocking resources
5. Core Web Vitals passing (LCP, INP, CLS)

SEO (5 items):
6. Unique title tags on every page (under 60 characters)
7. Meta descriptions on every page (under 160 characters)
8. XML sitemap submitted to Google Search Console
9. Google Business Profile claimed and optimised
10. Schema markup (Organisation, LocalBusiness, or Service)

Design & UX (5 items):
11. Mobile responsive on all screen sizes
12. Clear call-to-action above the fold
13. Contact information easy to find
14. Professional, modern design (not a template)
15. Consistent branding (colours, fonts, logo)

Content (5 items):
16. Clear value proposition on the homepage
17. Service pages with detailed descriptions
18. About page with team/founder info
19. Blog or resources section (for SEO)
20. Client testimonials or case studies

Security & Technical (5 items):
21. SSL certificate active (https://)
22. POPIA compliance (cookie consent, privacy policy)
23. Contact form working and tested
24. 404 error page designed
25. Regular backups configured

AI Search Readiness / GEO (5 items):
26. FAQ schema markup on service pages (helps AI search engines extract your answers)
27. Clear, factual content that directly answers common questions in your industry
28. Entity consistency — your business Name, Address, Phone (NAP) is identical across your website, Google Business Profile, directories, and social media
29. Structured data beyond the basics — Organisation, Service, LocalBusiness, and BreadcrumbList schemas implemented
30. Content architecture designed for AI extraction — concise paragraphs, clear headings, direct statements that AI can quote

Include a CTA at the bottom: "Want us to run this checklist on YOUR website? Get a free audit at origami-digital.co.za/contact"

**Note:** Update the title to reflect the expanded checklist:
**Title:** "The 2026 Website Checklist: 30 Things Your South African Business Website Needs"

Generate this as a well-designed PDF using the brand colours (dark background, blue/teal accents, coral for checkboxes). Save to `public/downloads/website-checklist-2026.pdf`

---

## PHASE 8: GOOGLE ADS PREPARATION (Setup only — don't launch yet)

**Priority: LOW (prepare now, launch in 2 weeks) | Time: 30 minutes | Cost: Free to set up**

### Task 8.1: Build Landing Page

Create a dedicated landing page at `/get-started/website-design` with:
- NO main navigation (remove header nav, keep only the logo)
- Headline: "Get a Website That Actually Brings In Business"
- Subheadline: "Custom-built, SEO-optimised websites for South African businesses. From R30,000."
- 3 key benefits with icons
- Social proof: portfolio screenshots, key metrics
- Simple contact form: Name, Email, Phone, "Tell us about your project" textarea
- Single CTA: "Get Your Free Quote"
- Footer: minimal, just contact info and privacy link

### Task 8.2: Draft Google Ads Campaign Structure

Save to `marketing/google-ads-plan.md`:

**Campaign 1: Web Design (Search)**
- Budget: R100/day
- Keywords:
  - "web design company Johannesburg" (exact match)
  - "website developer Johannesburg" (exact match)
  - "web design Gauteng" (phrase match)
  - "custom website South Africa" (phrase match)
  - "website design near me" (phrase match)
- Negative keywords: "free", "template", "DIY", "WordPress theme", "Wix", "cheap"
- Ad copy (3 headlines / 2 descriptions):
  - H1: "Custom Web Design | Johannesburg"
  - H2: "Modern Websites That Convert"
  - H3: "Free Consultation — Book Today"
  - D1: "AI-augmented web design agency in Johannesburg. Fast, SEO-optimised websites built with Next.js & React. 16+ years experience."
  - D2: "No bloated agency fees. Direct access to a senior designer & developer. Get a free quote for your project today."
- Landing page: /get-started/website-design

**Campaign 2: SEO Services (Search)**
- Budget: R50/day
- Keywords:
  - "SEO company Johannesburg" (exact match)
  - "SEO services South Africa" (phrase match)
  - "SEO agency Gauteng" (phrase match)
- Ad copy:
  - H1: "SEO Services | Johannesburg"
  - H2: "Get Found on Google & AI Search"
  - H3: "Free SEO Audit — Limited Spots"
  - D1: "Expert SEO for South African businesses. Technical SEO, content strategy, and Generative Engine Optimisation. Results you can measure."
  - D2: "We optimise for both Google and AI search engines. Book a free audit and see where your website stands."
- Landing page: /get-started/seo-audit (create this page too)

**Campaign 3: GEO / AI Search Optimisation (Search)**
- Budget: R50/day
- This is a LOW-COMPETITION, HIGH-VALUE campaign — almost nobody in SA is bidding on these keywords yet
- Keywords:
  - "generative engine optimisation South Africa" (phrase match)
  - "GEO optimisation" (phrase match)
  - "AI search optimisation South Africa" (phrase match)
  - "optimise for AI search" (broad match modifier)
  - "how to appear in AI search results" (phrase match)
  - "SEO for AI" (phrase match)
- Negative keywords: "course", "tutorial", "free tool", "what is GEO" (informational, not buyer intent)
- Ad copy (3 headlines / 2 descriptions):
  - H1: "GEO Optimisation | South Africa"
  - H2: "Get Cited by AI Search Engines"
  - H3: "Free GEO Audit — Book Now"
  - D1: "Is your business invisible to AI search? Generative Engine Optimisation ensures Google AI, ChatGPT & Perplexity recommend YOUR business. SA's first GEO-focused agency."
  - D2: "Traditional SEO gets you ranked. GEO gets you cited. We build both into every website. Free audit — see how you appear in AI search today."
- Landing page: /get-started/geo-audit

### Task 8.3: Build GEO Landing Page

Create a dedicated landing page at `/get-started/geo-audit` with:
- NO main navigation (remove header nav, keep only the logo)
- Headline: "Is Your Business Invisible to AI Search?"
- Subheadline: "Google AI Overviews, ChatGPT, and Perplexity are how people find businesses now. If you're not optimised for AI search, you're losing clients to competitors who are."
- Section: "What is GEO?" — 3 sentence plain-language explanation
- Section: "Traditional SEO vs GEO" — simple visual comparison (ranked in list vs cited in answer)
- Section: "What you get in a free GEO audit":
  - How your business currently appears in AI search results
  - Which competitors are being cited instead of you
  - Specific recommendations to improve your AI search visibility
  - A clear action plan you can implement immediately
- Social proof: Origami Digital expertise stats, portfolio screenshots
- Simple contact form: Name, Email, Website URL, "What's your biggest search visibility challenge?" textarea
- Single CTA: "Get Your Free GEO Audit"
- Footer: minimal, just contact info and privacy link

### Task 8.4: Build SEO Audit Landing Page

Create a dedicated landing page at `/get-started/seo-audit` with:
- NO main navigation (remove header nav, keep only the logo)
- Headline: "Find Out Why Your Website Isn't Ranking"
- Subheadline: "Get a free, no-obligation SEO audit that shows exactly what's holding your website back in Google search results."
- Section: "What's included in your free audit":
  - Technical SEO health check (site speed, mobile, Core Web Vitals)
  - Keyword opportunity analysis
  - Competitor comparison
  - GEO readiness assessment (AI search visibility)
  - Prioritised action plan
- Social proof: key metrics, portfolio screenshots
- Simple contact form: Name, Email, Website URL, Phone
- Single CTA: "Get Your Free SEO Audit"
- Footer: minimal, just contact info and privacy link

---

## PHASE 9: ANALYTICS VERIFICATION

**Priority: HIGH | Time: 15 minutes | Cost: Free**

### Task 9.1: Verify Google Analytics 4

1. Navigate to `https://analytics.google.com`
2. Confirm the GA4 property for origami-digital.co.za exists
3. If not, create one:
   - Property name: Origami Digital
   - Reporting time zone: South Africa (GMT+2)
   - Currency: ZAR
4. Get the Measurement ID (G-XXXXXXXXXX)
5. Verify it's installed on the website (check page source for the GA script)
6. If not installed, provide the user with the Measurement ID to add to the site's environment variables

### Task 9.2: Set Up Conversion Tracking

In GA4, create these conversion events:
- `form_submit` — when contact form is submitted
- `cta_click` — when "Get a Free Consultation" button is clicked
- `phone_click` — when phone number link is clicked
- `email_click` — when email link is clicked

---

## EXECUTION ORDER SUMMARY

Run tasks in this order (respecting dependencies). Status reflects actual completion as of 2026-04-15:

1. ✅ Phase 9: Analytics verification — GA4 (`G-X38KXW2JYC`) installed, Google Ads conversion tracking (`AW-17524264437`) on all forms
2. 🟡 Phase 1: Google Business Profile — created and linked, but needs description update and photos
3. ✅ Phase 3: SEO foundations — Google Search Console verified, sitemap submitted. Bing Webmaster Tools partially done.
4. ❌ Phase 2: Directory listings — NOT YET DONE (Clutch, GoodFirms, DesignRush, TechBehemoths, Sortlist)
5. ✅ Phase 4: Blog content — ALL 5 posts written and published in `src/content/posts/`
6. ❌ Phase 5: LinkedIn — NOT YET DONE (profile optimisation, company page, posts)
7. ❌ Phase 6: Email setup — NOT YET DONE (Brevo account not created)
8. ❌ Phase 7: Lead magnet — NOT YET DONE (email nurture content drafted but PDF not generated)
9. ✅ Phase 8: Google Ads — 3 landing pages built and live. 6 campaigns configured in Google Ads account 702-187-8945. GEO audit landing page NOT YET BUILT.

**GEO content is strategically distributed across ALL phases:**
- Blog: 2 dedicated GEO posts (pillar page + comparison post)
- LinkedIn: 1 dedicated GEO post
- Lead magnet: AI Search Readiness category (5 items)
- Google Ads: Dedicated GEO campaign with unique landing page
- Directory listings: GEO mentioned in service descriptions
- Google Business Profile: GEO referenced in service listings

---

## IMPORTANT NOTES FOR CLAUDE CODE

- **NEVER enter passwords or sensitive credentials without asking the user first.** Pause and request them.
- **NEVER submit payment information.** All tasks in this plan use free tiers only.
- **NEVER publish content without user review.** Draft and save content to files, then ask user to review before publishing.
- **For directory listings:** If a site requires email verification, pause and notify the user.
- **For Google Business Profile:** Verification may require a phone call or postcard — notify the user about the method and let them handle verification.
- **Save all drafted content** to a `marketing/` folder in the project root so the user can review everything.
- **Take screenshots** of completed profile setups and save them to `marketing/screenshots/` for the user's records.
- **Log progress** by creating/updating a file `marketing/PROGRESS.md` with timestamps and status for each task.
