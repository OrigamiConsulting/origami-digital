# Next Session — Handoff Brief

> **Read this first.** Updated 2026-04-18 after the second autonomous drop.

**Last session:** 2026-04-18 (local Claude Code, same branch)
**Branch:** `claude/origami-digi-marketing-uTjSV`
**Detailed log:** `marketing/PROGRESS.md`
**Master plan:** `MARKETING-LAUNCH.md`

---

## 1. What's new on the branch since 2026-04-17

**Code (needs `npm install && npm run build` to verify locally — node_modules wasn't present in the 2026-04-18 session so build was not re-run):**

- `src/lib/audit-report.ts` — PageSpeed Insights + HTML signal extraction + prioritised findings
- `src/lib/audit-pdf.tsx` — React-PDF renderer for the audit report
- `src/app/api/generate-audit/route.ts` — Node-runtime POST endpoint that runs the audit, renders the PDF, emails it via Brevo transactional
- `src/app/api/contact/route.ts` — non-blocking hook: `service === 'free-audit'` submissions now trigger `/api/generate-audit` in the background
- `src/lib/brevo.ts` — `sendTransactionalEmail` now accepts optional `attachment[]`

**Content:**

- 2 new blog posts — `src/content/posts/wix-vs-custom-development-south-africa.mdx`, `src/content/posts/what-is-ai-search-south-africa.mdx`
- `marketing/linkedin-posts-week-2.md` — 3 posts, DM-CTA pattern (review-only)
- `marketing/nurture-sequence-emails.md` — Emails 2–5 with Brevo setup spec (review-only)

---

## 2. What still needs doing, in priority order

### Priority 1 — Ship the audit pipeline (requires Tinashe: env vars)

Before the free-audit automation works end-to-end:

1. **Create a PageSpeed Insights API key**
   - Google Cloud Console → APIs & Services → Library → search "PageSpeed Insights API" → Enable
   - Credentials → Create credentials → API key → copy
   - Restrict the key to the PageSpeed Insights API only
2. **Add env vars in Vercel** (and mirror into local `.env.local`):
   - `PAGESPEED_API_KEY=<the key>`
   - `AUDIT_WEBHOOK_SECRET=<a long random string>` — prevents the endpoint being used as an open PDF generator. Pick with `openssl rand -hex 32`.
3. **Smoke test**: `curl -X POST https://origami-digital.co.za/api/generate-audit -H "content-type: application/json" -H "x-audit-secret: <secret>" -d '{"url":"https://example.co.za","recipientEmail":"hello@origami-digital.co.za"}'` — should return `{success:true, findings:N}` and land a branded PDF in the inbox.
4. **Verify on a real submission**: submit `/get-started/free-audit` with a real URL, confirm the PDF email arrives.

Known good: the code mirrors the pattern of `scripts/generate-checklist-pdf.tsx`, which already works in production. Brevo's transactional API supports base64 attachments natively.

### Priority 2 — Browser runbooks (updated 2026-04-18 after the execution pass)

- **Bing Webmaster — DONE.** Site imported + sitemap processing + 14 key URLs submitted for indexing. No further action needed.
- **Google Business Profile — DONE (text + scheduled posts).** Description, opening date (Jan 2010), two extra services, and launch post are live / pending Google review. **Posts 2–4 also scheduled natively in GBP** — 24 Apr, 1 May, 8 May (all 08:30 SAST) with the runbook Week 2/3/4 content. Still TO DO manually: (a) photo uploads (logo + cover + 5–10 portfolio screenshots — use `public/images/logo/origami-horse.png` and the existing `public/images/portfolio/*.png` assets); (b) Q&A seeding (needs a second non-owner Google account to post the 3 questions from `gbp-completion-runbook.md` Step 5 — the owner account can then answer); (c) adding the CTA button to the 4 posts (edit each post, expand "Add more details" → Button → "Book online" → `/contact`).
- **LinkedIn Company Page — BLOCKED on connection count.** LinkedIn refuses company-page creation while the admin's personal profile has 0 connections. **Fix:** send ~5–10 connection requests to people Tinashe knows professionally, wait for them to accept (LinkedIn treats it as a "connection count ≥ N" gate; exact N isn't published but 5–10 accepted connections reliably unlocks it). Then re-execute `linkedin-business-page-runbook.md` — every field value is pre-written, it's ~5 min of paste-and-submit after the gate clears.
- **Directory listings — manual.** `directory-listings-runbook.md` has every field value pre-filled; ~40 min of copy-paste across Clutch / GoodFirms / DesignRush / TechBehemoths / Sortlist. These need human execution because each directory requires a new user account with email verification (often CAPTCHA) — outside the autonomous scope of Claude Code.

**After each runbook action:** log timestamp + URLs in `marketing/PROGRESS.md`.

**Playwright MCP note:** `.mcp.json` adds Playwright MCP. The 2026-04-18 browser pass used the Claude-in-Chrome extension (already live). Playwright is still present for future sessions that prefer it.

### Priority 3 — Load nurture emails 2–5 into Brevo

Spec in `marketing/nurture-sequence-emails.md` → "Brevo automation setup". Requires browser access to Brevo → Automations.

Add to an existing runbook or create `brevo-automation-runbook.md` as you go.

### Priority 4 — Week 3 LinkedIn batch (only after Week 2 publishes)

Follow the Mon/Wed/Fri rhythm from `marketing/linkedin-posts-week-1.md` → `-week-2.md`. Rotate themes — don't repeat. Suggested Week 3 themes:

- **Monday (educational):** Core Web Vitals — how to actually get from 60 to 95 on Lighthouse (practical, not theoretical)
- **Wednesday (case study):** A specific automation delivered — continuation of Friday Week 2's thread (with real client consent if possible)
- **Friday (thought leadership):** The state of AI search in SA — what's changing on the ground, 6-month outlook

Save to `marketing/linkedin-posts-week-3.md`. 👁️ REVIEW-ONLY.

### Priority 5 — Next 2 blog posts

From the keyword bank:

- **"How much does SEO cost in South Africa?"** — companion to the website cost piece. High commercial intent.
- **"WordPress vs Webflow vs custom — what SA agencies actually recommend in 2026"** — follows naturally from the Wix vs custom piece just shipped.

Follow the same frontmatter + voice + internal-linking pattern. Add to `marketing/content-calendar.md` after publishing.

### Priority 6 — Partnership + cold outreach follow-ups

Only if Tinashe has actually executed `partnership-outreach-drafts.md` and `outreach-drafts-week-1.md`. If not, skip.

---

## 3. Known gotchas (new + unchanged)

- **Landing pages `/get-started/free-audit` and `/get-started/geo-audit` are `noindex`.** Intentional for ad landing pages. Don't submit to sitemaps.
- **`/partners` IS indexable.** Submit to Search Console and Bing Webmaster.
- **Brevo `LEAD_SOURCE` segmentation matters** — don't change the `serviceSources` map without updating Brevo automations.
- **Audit endpoint is gated by `AUDIT_WEBHOOK_SECRET` when that env var is set.** Forgetting to pass the header in callers (other than the contact route which handles it automatically) returns 401.
- **`/api/generate-audit` runs on `runtime: 'nodejs'` and `maxDuration: 90`.** Don't change these without testing — PageSpeed runs can take 30–60 seconds.
- **New blog posts cross-link to `/get-started/free-audit` and `/get-started/geo-audit`.** Those pages are `noindex` but the internal links are valuable for conversion — leave them.
- **@react-pdf/renderer TS config:** `tsc --noEmit` reports "cannot find module" for the package, but it resolves fine at runtime via the existing `scripts/generate-checklist-pdf.tsx`. If you touch the audit PDF, use `next build` as the canonical check rather than `tsc`.

---

## 4. Verification before starting

```bash
git status                      # clean on claude/origami-digi-marketing-uTjSV
git log --oneline -10           # should include the 2026-04-18 commits
npm install                     # if node_modules missing
npm run build                   # should show /api/generate-audit in the route table
ls src/content/posts/           # 9 mdx files total
ls marketing/                   # 15+ markdown files
```

---

## 5. Scope boundaries for the next agent

**Do autonomously:** code, content drafting, copywriting, research, commits to the feature branch.

**Ask first:**
- Environment variable changes in Vercel (Tinashe must paste keys)
- Anything that creates a third-party account or publishes public content under the Origami Digital brand
- Client names / metrics used in case study posts (get specific permission per client)
- Opening a PR from the feature branch to main

**Never:**
- Push to `main` directly
- Skip the Tinashe review step on `👁️ REVIEW-ONLY` artefacts
- Post to LinkedIn, send outreach, or modify GBP without confirmed approval per-post / per-message

Good luck. Ship fast. Match the voice.
