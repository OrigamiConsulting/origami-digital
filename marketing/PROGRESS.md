# Marketing — Progress Log

Chronological log of what the cloud Claude agent did, when, and what is queued next.

---

## 2026-04-17 — Autonomous marketing infra drop

Cloud agent session on branch `claude/origami-digi-marketing-uTjSV`.

### Shipped (code — ready to merge + deploy)

- **Extended `/api/contact`** — added `free-audit`, `geo-audit`, `partnership` to the service enum, with matching Brevo `LEAD_SOURCE` segmentation (`free_audit`, `geo_audit`, `partnership`)
- **Built `/api/newsletter`** — new endpoint for newsletter signups, writes to Brevo list #4, reuses honeypot + timing spam filter, optional Turnstile
- **Built `NewsletterSignup` component** (`src/components/sections/newsletter-signup.tsx`) — two variants: `footer` (compact) and `card` (blog post footer). Includes free-checklist PDF CTA.
- **Wired newsletter signup into the footer** — new row spans full footer width above existing columns
- **Wired newsletter signup into blog post pages** — card variant above the existing dark CTA block
- **Built `/get-started/free-audit`** — stripped-nav landing page, full form, `service: 'free-audit'`, conversion + event tracking, `noindex`
- **Built `/get-started/geo-audit`** — stripped-nav landing page with SEO-vs-GEO comparison block, full form, `service: 'geo-audit'`, `noindex`
- **Built `/partners`** — indexable public page (not stripped), full partnership form, `service: 'partnership'`
- **Published 2 new blog posts:**
  - `signs-website-needs-redesign-2026.mdx` — "7 Signs Your Business Website Needs a Redesign in 2026"
  - `how-to-get-recommended-by-chatgpt.mdx` — "How to Get Your Business Recommended by ChatGPT and Perplexity"
- **Generated lead magnet PDF** — `public/downloads/website-checklist-2026.pdf`, 30 items across 6 categories. Re-generate anytime with `npm run build:checklist`. Source: `scripts/generate-checklist-pdf.tsx`.

### Shipped (marketing research + drafts in `marketing/`)

- `linkedin-posts-week-1.md` — 3 posts for week 1 (Mon/Wed/Fri cadence)
- `partnership-targets.md` — 20 JHB/Gauteng partnership targets researched, with fit notes
- `partnership-outreach-drafts.md` — personalised message per target (👁️ for Tinashe to review before sending)
- `outreach-targets-week-1.md` — 10 SA SMEs across law, property, accounting, healthcare with 3 audit findings each
- `outreach-drafts-week-1.md` — personalised "website roast" messages (👁️ for Tinashe to review)
- `newsletter-queue.md` — first Digital Edge newsletter (queued for next send)
- `content-calendar.md` — central tracker for what is published where
- `linkedin-business-page-runbook.md` — step-by-step browser runbook (for Tinashe to execute)
- `gbp-completion-runbook.md` — step-by-step runbook to finish GBP setup
- `directory-listings-runbook.md` — Clutch, GoodFirms, DesignRush, TechBehemoths, Sortlist submissions
- `bing-webmaster-runbook.md` — complete setup + sitemap

### Blocked

None. All autonomous tasks complete. Browser-dependent tasks are drafted as runbooks for human execution (see `*-runbook.md` files).

### Queued for next session

- Execute browser runbooks (ideally with Playwright MCP loaded, else manually)
- Build the audit-report generator (Task 10.1 Step 2 — PageSpeed Insights API + branded PDF per submission)
- Set up Brevo automation for free-audit delivery (Task 10.1 Step 3)
- Draft Emails 2–5 of the nurture sequence (already outlined in MARKETING-LAUNCH.md §6)
- Write the next 2 blog posts from the keyword bank:
  - "Best website builders vs custom development"
  - "What is AI search and how does it affect your business?"
- Weekly LinkedIn post batch for week 2
- Partnership follow-ups based on week 1 responses
- Cold outreach follow-ups based on week 1 responses
