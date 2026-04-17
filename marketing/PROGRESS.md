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

---

## 2026-04-18 (later) — Autonomous browser runbook execution

Local Claude Code session with Chrome extension live. Signed in as `origamiconsultinggroup@gmail.com`. Executed the browser runbooks the cloud agent could not touch.

### Shipped

**Bing Webmaster Tools (done)** — imported the 2 verified sites from Google Search Console via OAuth. `https://origami-digital.co.za` is now a verified property. Sitemap imported (status: Processing). Submitted 14 key URLs to URL Submission for accelerated indexing: homepage, /about, /services, /services/website-design, /services/ai-automation, /services/seo, /work, /journal, /contact, and 5 blog posts. Daily quota used: 14/100. The two `noindex` `/get-started/*` landing pages were intentionally NOT submitted.

**Google Business Profile (done for text-only work)** — Origami Digital profile is Verified. Updated:
- Description replaced with the tighter 627/750-char version from the runbook (featuring the "16 years" framing and the full three-pillar service list). Pending Google review (up to 10 min).
- Opening date set to January 2010.
- Services: added "Website Design & Development" and "Google Ads Management" as custom services on top of the existing five (Application development, Mobile app development, Software development, SEO & Digital Marketing, AI Automation & Business Solutions). All pending review.
- Published the "Now accepting new clients for 2026" GBP post (type: Update) with the runbook copy. Live.
- Skipped for Tinashe to do manually: photo uploads (logo + cover + portfolio screenshots — no file-system bridge in the browser extension), Q&A seeding (needs a non-owner Google account to post the questions), and the CTA button on the launch post (the composer's button-config fields didn't render in the visible pane — Tinashe can add the button by editing the post).

### Blocked / out of autonomous scope

**LinkedIn Company Page** — LinkedIn refused page creation with "Feature not available — You don't have enough connections to create a Page". Tinashe's personal profile currently has 0 connections. LinkedIn requires a minimum number of first-degree connections on the admin's personal profile before it unlocks Company Page creation. Tinashe needs to connect with roughly 5–10 people from his professional network on the personal profile first, then the Company Page creation flow will unlock. The runbook content is ready — the page identity, description, tagline, specialties, location, CTA, and launch post are all pre-written in `linkedin-business-page-runbook.md`. Zero rework needed, just a 5-minute retry once the connection threshold is met.

**Directory listings (Clutch / GoodFirms / DesignRush / TechBehemoths / Sortlist)** — each requires creating a new user account on the directory with email verification loops plus often CAPTCHAs. This is outside the autonomous-action scope per Claude Code's safety rules (no creating accounts on the user's behalf). Tinashe should execute `directory-listings-runbook.md` manually — the runbook has every field value pre-filled so it's copy-paste work, ~40 min total. NAP data in the runbook is canonical; use it verbatim for entity-authority consistency.

### Session notes

- All NAP data used in the GBP edits matches the runbook canonical values exactly (name "Origami Digital", address "Kloof Estates, Bedfordview", phone +27 78 190 0107, 2010 founded). This consistency is important for AI-search entity authority — do not let any subsequent listing drift.
- Bing import used a fresh OAuth grant (bing.com → Google Search Console View scope). That grant remains active; future Bing sitemap syncs happen automatically.
- GBP edits are pending Google review (typical 10 min–24 hour window). If the description edit gets rejected, a manual review via Help can usually get it unblocked — most common reason is a URL or phone number that doesn't match the pre-verified NAP.
