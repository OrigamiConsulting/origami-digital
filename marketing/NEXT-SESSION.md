# Next Session — Handoff Brief

> **Read this first.** This file is the starting point for the next Claude agent working on the Origami Digital marketing launch. It tells you what the previous session shipped, what's ready to execute, and what to do next in priority order.

**Last session:** 2026-04-17
**Branch:** `claude/origami-digi-marketing-uTjSV` (pushed to origin)
**Detailed log:** `marketing/PROGRESS.md`
**Master plan:** `MARKETING-LAUNCH.md` (status table at top is accurate as of 2026-04-17)

---

## 1. State of the branch (what's shipped + on origin)

**Code (tested with `npm run build` — passes):**
- `/api/newsletter` — Brevo list #4 signups with honeypot + Turnstile
- `/api/contact` — extended service enum: `free-audit`, `geo-audit`, `partnership` with segmented Brevo `LEAD_SOURCE`
- `/get-started/free-audit` — stripped-nav landing page, noindex, conversion tracked
- `/get-started/geo-audit` — stripped-nav landing page with SEO-vs-GEO comparison, noindex
- `/partners` — public indexable partnership programme page
- `<NewsletterSignup />` component (footer + card variants) wired into footer and blog post footers

**Content:**
- 2 new blog posts in `src/content/posts/` (`signs-website-needs-redesign-2026.mdx`, `how-to-get-recommended-by-chatgpt.mdx`)
- Lead magnet PDF at `public/downloads/website-checklist-2026.pdf` (regenerate with `npm run build:checklist`)
- `scripts/generate-checklist-pdf.tsx` — the React-PDF generator source

**Marketing research & drafts in `marketing/`:**
- `PROGRESS.md` — full timestamped log of session 1
- `content-calendar.md` — central tracker
- `linkedin-posts.md` — 4 launch posts
- `linkedin-posts-week-1.md` — 3 Mon/Wed/Fri posts
- `newsletter-queue.md` — Edition 1 of The Digital Edge
- `partnership-targets.md` — 20 JHB/Gauteng targets researched
- `partnership-outreach-drafts.md` — personalised messages (👁️ awaiting Tinashe review)
- `outreach-targets-week-1.md` — 10 SME cold outreach prospects
- `outreach-drafts-week-1.md` — "website roast" templates (👁️ awaiting Tinashe review)

**Browser runbooks** (self-contained — every field + every click pre-written):
- `linkedin-business-page-runbook.md` — ~25 min
- `gbp-completion-runbook.md` — ~25 min
- `directory-listings-runbook.md` — ~40 min
- `bing-webmaster-runbook.md` — ~10 min

---

## 2. Critical context

### Playwright MCP is now configured
`.mcp.json` was added to the repo with Playwright MCP. If you're a fresh Claude Code session (not the one that added it), you should have `mcp__playwright__*` tools available. Verify with:

```
ToolSearch query: "playwright navigate"
```

If they're there, you can drive the runbooks directly. If not, the user needs to restart Claude Code and approve the MCP server on startup.

**First-time browser install:** if Playwright errors with "browser not installed", run `npx playwright install chromium` once in a Bash tool call.

### Tinashe's Google auth
The user is signed into Chrome with `origamiconsultinggroup@gmail.com`. For any service that offers "Sign in with Google", use that account. For services without Google SSO, register with `hello@origami-digital.co.za` and save passwords to a password manager.

### Business info (use EXACTLY — NAP consistency matters for GEO)
Copy from `MARKETING-LAUNCH.md` "Business Information" section or from the header of any runbook. Do not paraphrase business name, address, or phone.

### Brand voice
Per `CLAUDE.md` — confident, clear, direct, warm-professional. Use "we" for Origami Digital. South African English spelling (organisation, optimise, colour). No jargon. No hype.

### Branch workflow
**Everything lands on `claude/origami-digi-marketing-uTjSV`.** Do NOT push to `main`. Commit in logical batches with conventional-commits messages. Do NOT open a PR unless the user explicitly asks.

### Session from 2026-04-17 trailer footer
Commits include the `https://claude.ai/code/session_017MWTVfTQDAiMfmETGtTiFM` footer — that's fine, leave it. Your session will have its own footer.

---

## 3. Next actions, in priority order

### Priority 1 — Browser runbooks (if Playwright MCP is active)

Execute the 4 runbooks in this order. Each is a single-page script you can follow step-by-step. Pause and ask the user for input only on:
- Verification SMS codes / phone calls
- Anything that requires their physical identity verification
- Anything the runbook explicitly marks as `🧑 HUMAN REQUIRED`

Suggested order:
1. `bing-webmaster-runbook.md` (10 min) — quickest, validates Playwright setup
2. `gbp-completion-runbook.md` (25 min) — high-ROI, partially started already
3. `linkedin-business-page-runbook.md` (25 min) — includes company page creation + launch post publish
4. `directory-listings-runbook.md` (40 min) — 5 sequential submissions

After each runbook completes, update `marketing/PROGRESS.md` with the timestamp and any observations (URLs, listing IDs, verification pending, etc).

### Priority 2 — Audit-report generator (Task 10.1 Step 2 from MARKETING-LAUNCH.md)

The `/get-started/free-audit` landing page exists and captures leads, but the automated audit PDF doesn't yet get generated or delivered. Build this next:

1. Create `src/lib/audit-report.ts` (or `scripts/generate-audit-report.ts`) that:
   - Takes a URL as input
   - Calls Google PageSpeed Insights API (free, needs a Google API key — ask user to add to `.env.local` as `PAGESPEED_API_KEY`)
   - Scrapes the target page (Playwright would be ideal — check for script tags, meta tags, schema markup)
   - Generates a branded PDF via `@react-pdf/renderer` using the same pattern as `scripts/generate-checklist-pdf.tsx`
2. Create an API route `/api/generate-audit` (or run it as a Brevo automation webhook) that triggers on new `free-audit` submissions
3. Hook into Brevo: when a contact is added with `LEAD_SOURCE=free_audit`, send them the generated PDF via `sendTransactionalEmail()` within 24 hours

The brand colours and PDF layout conventions are in `scripts/generate-checklist-pdf.tsx` — copy the style pattern.

### Priority 3 — Nurture sequence emails 2–5

Draft content for the 5-email nurture sequence outlined in `MARKETING-LAUNCH.md` Phase 6 (lines ~577–595). Brevo automation is already set up for email 1 (welcome). Add emails 2–5 by either:
- Adding new steps to the existing Brevo automation (requires browser access — add to `gbp-completion-runbook.md`-style runbook), or
- Building them as transactional templates and triggering via `sendTransactionalEmail()` in new API routes

### Priority 4 — Week 2 LinkedIn batch

Draft the 3 posts for week 2 following the Mon/Wed/Fri cadence established in `marketing/linkedin-posts-week-1.md`. Rotate themes — don't repeat week 1's topics (LCP / CTA clarity / GEO). Suggested week 2 themes:
- **Monday (educational):** Structured data / schema markup — what it is, why it matters for GEO, one thing you can do today
- **Wednesday (case study):** Before/after performance metric from a real project (ask the user for a specific client to reference, with permission)
- **Friday (thought leadership):** AI automation practical examples — follow-up to the GEO content but pivot to the AUTOMATE pillar

Save to `marketing/linkedin-posts-week-2.md`. Do NOT publish automatically — these are `👁️ REVIEW-ONLY`.

### Priority 5 — Next 2 blog posts

From the keyword bank in `MARKETING-LAUNCH.md` line 1095, the highest-value next posts are:
- "Best website builders vs custom development — which is right for your SA business?" (target: "Wix vs custom development")
- "What is AI search and how does it affect your business?" (target: "AI search South Africa")

Follow the same frontmatter + voice + internal-linking pattern as the existing posts in `src/content/posts/`. Add to `marketing/content-calendar.md` after publishing.

### Priority 6 — Partnership + outreach follow-ups (if week 1 has been sent)

If the user has executed `partnership-outreach-drafts.md` and `outreach-drafts-week-1.md` and there are replies to handle, help with:
- Response drafts per reply (one file per conversation)
- Follow-up messages for no-responders after the 7-10 day mark
- Updating a tracker in `marketing/partnership-tracker.md` and `marketing/outreach-tracker.md`

---

## 4. Known gotchas

- **Landing pages `/get-started/free-audit` and `/get-started/geo-audit` are `noindex`.** Don't add them to sitemaps or submit them to Search Console — that's intentional for ad landing pages.
- **`/partners` IS indexable.** Submit it to Google Search Console and Bing Webmaster Tools for indexing.
- **Brevo `LEAD_SOURCE` segmentation matters** — don't break it by changing the `serviceSources` map in `src/app/api/contact/route.ts` without updating the Brevo automations.
- **Turnstile tokens:** the newsletter route accepts them optionally. If spam becomes an issue, make it required.
- **PDF generator:** `scripts/generate-checklist-pdf.tsx` must be run with `tsx` (not `ts-node`). The `build:checklist` npm script handles that.
- **Next.js 16 / Turbopack:** the build uses Turbopack. If you hit an obscure build error, try `npm run build -- --no-turbo` as a fallback (but don't commit the fallback — it's diagnostic only).

---

## 5. How to verify the world still works before starting

1. `git status` — should be clean on `claude/origami-digi-marketing-uTjSV`
2. `git log --oneline -6` — last 6 commits should include the 5 from session 1 + `chore: add .mcp.json with Playwright MCP server`
3. `npm run build` — should succeed with the route table showing `/api/newsletter`, `/get-started/free-audit`, `/get-started/geo-audit`, `/partners`, and all 7 blog posts
4. `ls marketing/` — should show 13 markdown files + this NEXT-SESSION.md
5. `ls public/downloads/` — should contain `website-checklist-2026.pdf`

If any of those are missing, something's gone wrong — stop and ask the user before proceeding.

---

## 6. Tone reminder for the user

Tinashe is a senior developer who wants an **autonomous** agent. Don't ask "should I do X?" for tasks tagged `🤖 AUTONOMOUS` in MARKETING-LAUNCH.md — just do them. DO ask for:
- Credentials or auth (once per service)
- Client-specific permission (e.g., "can I reference [client name] in this case study?")
- Anything that will be published publicly under the Origami Digital brand where tone/positioning is ambiguous

Batch drafted content for `👁️ REVIEW-ONLY` items — don't interrupt with individual pieces.

Good luck. Ship fast. Match the voice.
