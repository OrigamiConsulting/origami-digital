# Runbook — Bing Webmaster Tools completion

**Time required:** 10 minutes
**Status per MARKETING-LAUNCH.md:** Account created, site import started. Needs: completion + sitemap submission.
**Auth:** `origamiconsultinggroup@gmail.com` signed in on Chrome. Bing uses Microsoft auth, but you can sign in with Google.

**Why this matters:** Bing powers ChatGPT's web search, Perplexity, and a growing share of AI search engines. A sitemap submitted to Bing Webmaster Tools feeds directly into how those tools discover and cite your content.

---

## Step 1 — Sign in and resume the import (3 min)

1. Open Chrome → https://www.bing.com/webmasters
2. Click **Sign In** → choose **Sign in with Google** → pick `origamiconsultinggroup@gmail.com`
3. If the import from Google Search Console was partially completed, you'll see **origami-digital.co.za** in the dashboard. Click into it.
4. If the import never completed, click **+ Add a site** → enter `https://origami-digital.co.za` → select **Import from Google Search Console** (fastest) → authorise the GSC access if prompted.

---

## Step 2 — Verify ownership (2 min)

If Bing imported from GSC successfully, verification should be automatic. If not:

1. Bing will offer 3 verification methods:
   - **XML file upload** — download the file, ask Tinashe to commit it to `public/` in the repo, push, then click Verify
   - **Meta tag** — copy the tag, ask Tinashe to add it to `src/app/layout.tsx` in the `<head>`, push, then click Verify
   - **DNS record** — copy the CNAME, add it to the DNS provider (Afrihost control panel), wait 30 min, then click Verify
2. Easiest: pick the meta tag option, add it to layout, push to main (Vercel auto-deploys in ~2 min), click Verify.

---

## Step 3 — Submit the sitemap (2 min)

1. In the Bing Webmaster dashboard for origami-digital.co.za, go to **Sitemaps** (left nav)
2. Click **Submit sitemap**
3. Enter: `https://origami-digital.co.za/sitemap.xml`
4. Click **Submit**
5. The status will go to "Pending" then "Success" within a few minutes

---

## Step 4 — Set crawl settings (2 min)

1. Go to **Crawl Control**
2. Leave crawl rate at **Normal** (this is fine for a small site)
3. Go to **Sitemaps** → confirm the sitemap shows as successfully processed
4. Go to **URL Inspection** (optional) → paste `https://origami-digital.co.za/` → click **Request indexing** to kick off a fresh crawl of the homepage

---

## Step 5 — Request indexing for key new pages (1 min)

Use **URL Inspection** to request indexing for each of these new URLs:

- `https://origami-digital.co.za/get-started/free-audit`
- `https://origami-digital.co.za/get-started/geo-audit`
- `https://origami-digital.co.za/partners`
- `https://origami-digital.co.za/journal/signs-website-needs-redesign-2026`
- `https://origami-digital.co.za/journal/how-to-get-recommended-by-chatgpt`

Skip the two landing pages (`/get-started/free-audit` and `/get-started/geo-audit`) if they remain `noindex` — they have `robots: noindex` in the page metadata and shouldn't be submitted to search engines.

Actually — re-check that. The `/get-started/free-audit` and `/get-started/geo-audit` are both set to `robots: { index: false, follow: false }`. Do NOT submit these to Bing. Only submit:
- `https://origami-digital.co.za/partners`
- `https://origami-digital.co.za/journal/signs-website-needs-redesign-2026`
- `https://origami-digital.co.za/journal/how-to-get-recommended-by-chatgpt`

---

## Done-check

- [ ] Site verified on Bing Webmaster Tools
- [ ] Sitemap submitted and processed successfully
- [ ] Key new pages submitted for indexing
- [ ] Confirm in `marketing/PROGRESS.md` that Bing is complete
