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

### Priority 2 — Browser runbooks (unchanged from last handoff)

Four runbooks in `marketing/*-runbook.md`. Execute in this order, roughly 100 min total:

1. `bing-webmaster-runbook.md` (10 min) — quickest, finishes the existing partial setup
2. `gbp-completion-runbook.md` (25 min) — description + photos
3. `linkedin-business-page-runbook.md` (25 min) — create company page + publish launch post
4. `directory-listings-runbook.md` (40 min) — 5 sequential directory submissions

**After each:** log timestamp + URLs in `marketing/PROGRESS.md`.

**Playwright MCP note:** `.mcp.json` adds Playwright MCP. On a fresh Claude Code session, verify with `ToolSearch query: "playwright navigate"`. If not present, restart Claude Code and approve on startup.

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
