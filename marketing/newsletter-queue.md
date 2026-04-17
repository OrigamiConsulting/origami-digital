# Newsletter Queue — "The Digital Edge"

**Next send:** 2026-05-01 (or whenever the list has at least 20 subscribers)

**Channel:** Brevo → List #4 (Newsletter Subscribers)

**Sender name / from:** `Tinashe @ Origami Digital <hello@origami-digital.co.za>`

**Format:** Plain HTML, text-first, single column. No fancy template. Looks like a letter, not a marketing email.

---

## Edition 1 — "Two things that actually matter in 2026"

**Subject line options (A/B):**
- `Two things that actually matter for your website in 2026`
- `The one thing nobody's talking about (and it's worth money)`
- `A quiet shift that most SA businesses haven't noticed`

**Preview text:** Most businesses are still optimising for yesterday's web. Here's what to focus on instead.

---

### Body

```
Hi [FIRSTNAME|there],

Welcome to the first edition of The Digital Edge — a monthly email covering what's actually moving the needle for South African businesses online, written by a senior dev and designer who's in the weeds every day.

No fluff, no listicles, no "10 tips for SEO success". One main insight, a couple of things worth reading, one thing you can do today. That's it.

---

THE ONE THING

Something significant quietly shifted in how people find businesses online in 2026, and almost nobody in the SA market has caught up to it yet.

Five years ago, your customers typed "web design Johannesburg" into Google and picked from a list of 10 links. Today, a growing number of them open ChatGPT instead. They ask "who should I hire to build a website for my law firm?" and they get ONE recommendation back. Maybe two.

If your business is the cited answer, you get the enquiry. If you're not, you're invisible.

This is not theoretical. Google AI Overviews now appear on most commercial searches in South Africa. Perplexity and ChatGPT search are growing fast. The discipline for getting cited by these tools is called Generative Engine Optimisation — GEO — and it's very different from traditional SEO.

The good news: because nobody in the SA market is talking about it, there's an 18-24 month window to build an enormous lead over your competitors before they figure it out.

I wrote two pieces on this that cover exactly what to do:

→ What is GEO, and why SA businesses need it:
https://origami-digital.co.za/journal/generative-engine-optimisation-south-africa

→ How to get your business recommended by ChatGPT and Perplexity:
https://origami-digital.co.za/journal/how-to-get-recommended-by-chatgpt

---

ONE MORE THING

If your site is over three years old, run this quick test today:

Go to pagespeed.web.dev, enter your URL, look at "Largest Contentful Paint" on mobile. If it's over 2.5 seconds, you're losing visitors before they see your page. Google also ranks you lower because of it.

That's a single number that tells you 80% of what you need to know about whether your site is due for attention. Everything else flows from it.

(If you want the full version: I just published the 7 signs your business website needs a redesign in 2026. Covers all the usual culprits and a couple of the sneaky ones: https://origami-digital.co.za/journal/signs-website-needs-redesign-2026)

---

THE FREE AUDIT

Every month I run a handful of free website audits for business owners who want to know where they stand. Performance, SEO, design, AI search readiness — written up into a report with prioritised recommendations.

No pitch, no obligation. You get the findings, the priority order, and the top 5 fixes. You implement them yourself or bring us in — your call.

Spots are limited because I do them personally, not via automated tool. Request one here:
https://origami-digital.co.za/get-started/free-audit

That's it for this edition. See you on the 1st of next month.

— Tinashe
Origami Digital
Build. Grow. Automate.

PS. If this was useful, forward it to the one person you know who needs to read it. That's how this grows.

---

You're getting this because you signed up at origami-digital.co.za. Unsubscribe any time: {UNSUBSCRIBE_LINK}
```

---

## Edition 2 — outline (draft before sending Edition 1)

**Subject:** `The Lighthouse score you can actually hit (and why)`

- Main insight: Lighthouse performance score — what 95+ actually means, why it matters, how hard it is to get
- Link: two case studies where we moved a client from sub-50 to 95+ (once we have them)
- Actionable: "pick one image on your homepage, compress it to WebP, re-upload" — usually gives you 10-15 points for free
- CTA: free audit

---

## Template notes for Brevo

- Use plain text (no fancy blocks) to maximise deliverability
- Personalise with `{{FIRSTNAME|default:'there'}}` (Brevo syntax)
- Always include an unsubscribe link (Brevo auto-injects if configured)
- Send from `hello@origami-digital.co.za` with proper DKIM/SPF set up (check Brevo > Senders & IP > Domain Authentication)
- Send on Tuesday/Wednesday between 8:00 and 10:00 SAST for best open rates
