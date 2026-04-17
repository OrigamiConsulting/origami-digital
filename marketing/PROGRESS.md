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

---

## 2026-04-18 — Autonomous content + audit-generator drop

Local Claude Code session on the same branch. The handoff brief in `NEXT-SESSION.md` was used as the queue.

### Shipped (code)

- **`src/lib/audit-report.ts`** — URL normalisation, Google PageSpeed Insights API integration (mobile strategy, 4 categories + Core Web Vitals), raw HTML fetch + signal extraction (title / meta / H1 / canonical / OG / favicon / schema detection / alt-text coverage), priority-ranked findings generator. Graceful degradation if `PAGESPEED_API_KEY` is missing — still returns a page-signal-based report.
- **`src/lib/audit-pdf.tsx`** — React-PDF renderer producing a branded A4 audit report with dark cover, Lighthouse scorecard, Core Web Vitals tiles, prioritised findings list (coral / blue / teal borders by priority), and a closing CTA block. Exports `renderAuditPdf(result): Promise<Buffer>`.
- **`src/app/api/generate-audit/route.ts`** — POST endpoint that runs the audit, renders the PDF, and emails it via Brevo transactional as a base64 attachment. Optional `AUDIT_WEBHOOK_SECRET` gate (`x-audit-secret` header). `runtime: 'nodejs'`, `maxDuration: 90`.
- **Extended `src/lib/brevo.ts`** — `sendTransactionalEmail` now accepts an optional `attachment: [{ name, content }]` array so transactional sends can carry PDFs without needing a dedicated template.
- **Wired `/api/contact`** — when `service === 'free-audit'` and the message contains a URL, the contact route fires a non-blocking POST to `/api/generate-audit`. No impact on the success response path if the audit job fails (logged server-side only).

### Shipped (content)

- **`src/content/posts/wix-vs-custom-development-south-africa.mdx`** — pillar-length piece targeting "Wix vs custom development South Africa". Cross-links to cost, redesign, GEO, AI automation posts, /get-started/free-audit, /contact.
- **`src/content/posts/what-is-ai-search-south-africa.mdx`** — education-first piece targeting "AI search South Africa". Quick-wins → medium-term → long-term framework. Cross-links to GEO pillar, GEO-vs-SEO, ChatGPT playbook, /get-started/geo-audit, /get-started/free-audit.
- **`marketing/linkedin-posts-week-2.md`** — Monday (schema for GEO), Wednesday (performance case study, anonymised w/ note for Tinashe on attribution), Friday (AI automation — three concrete examples). All three use DM-CTA pattern (no external links in body) as an engagement experiment vs Week 1's linked posts.
- **`marketing/nurture-sequence-emails.md`** — Emails 2–5 of the post-enquiry nurture sequence, written in a 1-to-1 voice (no HTML chrome, no header images). Subject-line A/B options for each. Brevo automation setup notes at the bottom.

### Pending / blocked

- **Browser runbooks (Bing, GBP, LinkedIn company page, 5 directories)** — not executed this session. No Playwright MCP was loaded in this session and account creation / public publishing actions need to be observed by Tinashe regardless. Runbooks remain accurate; execute them when next at a browser.
- **`PAGESPEED_API_KEY` and `AUDIT_WEBHOOK_SECRET` env vars** — must be added in Vercel before the audit pipeline works end-to-end. The code falls back to a signal-only report if PageSpeed is missing, but the full scorecard needs the key.
- **Brevo automation for the 5-email nurture** — drafts are ready but loading them into Brevo requires browser access. Queued for next browser session.
- **Week 2 LinkedIn + audit report + nurture emails are `👁️ REVIEW-ONLY`** — all drafted under the Origami Digital brand voice, none auto-published.

### Queued for next session

- Execute the four browser runbooks (Bing → GBP → LinkedIn → directories)
- Load nurture emails 2–5 into Brevo automation (see `nurture-sequence-emails.md` for the setup spec)
- Add `PAGESPEED_API_KEY` (Google Cloud Console → APIs & Services → PageSpeed Insights API → credentials) and `AUDIT_WEBHOOK_SECRET` to Vercel env + `.env.local`
- Smoke-test the audit pipeline end-to-end against a real submission
- Draft Week 3 LinkedIn batch once Week 2 publishes
- Partnership + cold outreach responses (only if Week 1 messages have actually been sent)
