# LinkedIn — Week 3 (post-launch content cadence)

Week 3 of the Mon / Wed / Fri rhythm. Each post is under 1,300 characters, ends with a soft CTA, no hard sell.

**Status:** 👁️ REVIEW-ONLY — do not auto-publish.
**Publish as:** Tinashe (personal profile). Cross-post key posts to the new Company Page (linkedin.com/company/origami-digital-za) after logo + cover upload.

Themes rotate off Week 2 — Monday goes deep on Core Web Vitals (the "how", not the "what"), Wednesday shares a concrete automation win, Friday zooms out on the state of AI search in SA.

---

## Monday — Educational (Core Web Vitals, practical not theoretical)

```
Everyone talks about Lighthouse scores. Almost nobody explains how to actually move them from 60 to 95.

Here's what I've learned auditing 40+ SA business sites this year.

1. LCP is almost always one image.
The hero. Too big, lazy-loaded when it shouldn't be, no width/height, served as a JPG when a WebP would be 70% smaller. Fix that one element, most sites gain 20+ points.

2. CLS is almost always ads or fonts.
Fonts that swap in late and push text around. Ad iframes with no reserved height. Both fixable in one afternoon: `font-display: swap` with a size-adjust fallback, and a fixed min-height on every ad slot.

3. INP is almost always a 2019 jQuery plugin.
That carousel nobody scrolls past. That scroll-triggered animation library. Audit what's actually firing on interaction — usually 80% is code you can delete.

4. You cannot fix Core Web Vitals with a plugin.
WP Rocket will get you to 70. The last 25 points are surgical — actual image compression, actual font strategy, actual JavaScript diet. No plugin does that for you.

The SA sites ranking on page 1 aren't faster because they spent more. They're faster because someone sat with the code for a day.

If your site's sitting at 50–70 mobile, three hours of the right work gets you to 90+. Happy to run a free audit if you want to see what's specifically costing your site points — link in the first comment.
```

**Engagement prompt:** Ask in comments: "What's the worst LCP score you've seen on a live SA site?"

**Link in first comment:** origami-digital.co.za/get-started/free-audit

---

## Wednesday — Case study (automation delivered)

```
Spent three weeks on an automation that shaved 6 hours/week off an accounting firm's admin load. Here's what we built.

The problem: every new client meant 4 manual steps across 4 systems. Xero setup, Google Drive folder with templates, Slack channel, client portal account. An admin did this ~8 times a month. 45 min each. That's 6 hours just copying the same fields between forms.

The fix: one Typeform, four webhooks, and about 200 lines of code.

→ Typeform captures the new client details once
→ Webhook hits n8n
→ n8n creates the Xero contact, the Drive folder (with the right template files copied in), the Slack channel (with the right people invited), and the portal account
→ Admin gets a Slack ping when everything's done with links to all four, to spot-check
→ Total time: 12 seconds instead of 45 minutes

Cost of the build: about what they were paying in admin hours in a single month. After month one, pure savings.

None of this was Claude-or-nothing. The heavy lifting was n8n, which is open-source and runs on a R90/month VPS. AI just made building the webhooks faster.

Most SA SMEs have 3–5 of these workflows hiding in plain sight. The trick is mapping them — once you see the pattern, the build is quick.

If your team's copying fields between systems more than a few times a day, that's the workflow to automate first.
```

**Engagement prompt:** "What's the one workflow in your business you'd automate first if you could?"

---

## Friday — Thought leadership (state of AI search in SA)

```
Six months ago "AI search" sounded like hype. Today it's quietly rewriting how SA businesses get found.

What actually changed in 2026:

1. ChatGPT search is pulling from live websites.
Not just training data. Live, today, with citations. If your site has structured data and clear FAQs, you're being cited. If it doesn't, you're invisible.

2. Google's AI Overviews eat 40% of clicks for informational queries.
Before anyone reaches your site, Google summarises three competitors at the top of the page. Winning AI Overview placement is a different game to winning rank 1.

3. Perplexity is the SA tech buyer's default research tool.
Ask any dev or product lead in Joburg how they found their last tool. It wasn't Google. It was Perplexity or Claude. If you sell B2B tech in SA, this is your buyer now.

What this means for SA SMEs over the next 6 months:

→ Rank 1 on Google is no longer the goal. Being cited by AI models is.
→ Your FAQ page is worth more than your blog. Concrete answers in plain language are what AI extracts and surfaces.
→ Entity SEO matters more than keyword SEO. Google needs to know *who you are* as a business before it can recommend you.
→ Schema markup stops being optional. It's the vocabulary AI models use to describe you.

The SA businesses that quietly fix these four things by July are going to win 2026. The ones still chasing generic backlinks will keep paying more for less traffic.

If you want to see where your site stands on this — specifically what AI models currently know about your business — drop me a DM.
```

**Engagement prompt:** "What's the last thing you searched for on Perplexity or ChatGPT instead of Google?"

---

## Publishing schedule

| Day | Time (SAST) | Post | Status |
|---|---|---|---|
| Mon wk 3 | 08:30 | Core Web Vitals | ⏳ Review |
| Wed wk 3 | 08:30 | Automation case study | ⏳ Review |
| Fri wk 3 | 08:30 | AI search outlook | ⏳ Review |

**Pre-publish checklist:**
1. Add logo + cover image to Company Page first (so preview cards render right)
2. Post from personal profile; cross-post to Company Page same-day
3. Engage with every comment within 2 hours
4. After 24 hours, log impressions + engagement rate into `PROGRESS.md`
