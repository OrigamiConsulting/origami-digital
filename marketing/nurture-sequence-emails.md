# Nurture Sequence — Emails 2 to 5

**Status:** 👁️ REVIEW-ONLY. Draft ready for Tinashe to approve before loading into Brevo.

**Trigger:** Contact created in Brevo with `LEAD_SOURCE` of `contact`, `website-design`, `seo-audit`, `ai-consultation`, `free-audit`, or `geo-audit` AND no reply received from the welcome email (Email 1).

**Automation target:** Brevo > Automations > `Post-enquiry nurture`.

**Send window:** Tuesday–Thursday, 09:00 SAST. Never weekends.

**From:** `Tinashe Munyaka <hello@origami-digital.co.za>`

**Reply-to:** `hello@origami-digital.co.za`

**Voice:** 1-to-1. Written as if Tinashe is typing it himself. Short. No HTML chrome. No header images. A real person writing to another real person. This is the key differentiator — most agencies send obvious template blasts.

**Each email should:**
- Reference the service they enquired about (use Brevo's `{{contact.SERVICE_INTEREST}}` or equivalent attribute)
- Contain exactly ONE link
- Have no graphics or elaborate HTML
- End with a soft question Tinashe can actually answer

---

## Email 2 — Day 3

**Subject line options (A/B):**
- `Quick question about your {{contact.SERVICE_INTEREST|default:'project'}}`
- `One thing I wanted to ask`
- `{{contact.FIRSTNAME|default:'Hi'}} — a quick follow-up`

**Preview text:** A question before we book a call.

### Body (plain text)

```
Hi {{contact.FIRSTNAME|default:'there'}},

I got your enquiry last week and wanted to follow up properly.

Before I suggest next steps, one question that helps me give you a useful answer rather than a generic one:

What's the main business outcome you're hoping this project solves? More enquiries from your website? A specific process you want to automate? Ranking for a particular search term?

Answers I've heard lately range from "I just want a site I'm not embarrassed to hand out" to "our ops team is drowning in manual data entry and I want it gone". Both are valid. They lead to very different projects.

If you reply with a sentence or two, I can come back with either:

- A direct answer (if the ask is well-defined and I've done it before), or
- Two or three clarifying questions and a rough shape of what the work would look like

Either way, you'll get something useful rather than a standard sales reply.

— Tinashe
Origami Digital
https://origami-digital.co.za

PS. If the project's now on the back burner, just reply "not now" and I'll stop emailing. No sales pressure.
```

---

## Email 3 — Day 7

**Subject line options (A/B):**
- `How [client] doubled their enquiries (without a redesign)`
- `The one change that 2x'd a client's enquiries`
- `A quick story before we go further`

**Preview text:** Same site. Same SEO. Different outcome.

### Body (plain text)

```
Hi {{contact.FIRSTNAME|default:'there'}},

A short story that's relevant to most projects I take on.

A few months ago a client came in with what they thought was a traffic problem. "We need SEO, we're not getting enough leads."

We looked at their analytics before touching anything. Traffic was actually fine — about 2,000 visitors a month from Google. Their problem was that only 1.5% of those visitors were converting.

Here's what we changed. Not the design. Not the copy. Not the SEO.

We reduced the number of CTAs on the homepage from four competing buttons ("Learn More", "Our Work", "Contact", "Book Consultation") down to ONE: "Book a free consultation". Same position, bigger, more prominent. The other three moved into secondary positions.

That change alone moved their conversion rate from 1.5% to 4.2%. Enquiries doubled inside a month. Same traffic, same SEO budget.

The point isn't that every site needs fewer CTAs. The point is that most projects people think are "I need more traffic" are actually "my existing traffic isn't converting". Doing the traffic work first wastes money.

I always look at both before proposing anything. If you'd like me to do the same quick analysis on your site — no charge, no pitch — just send me the URL and I'll come back with the top 2 or 3 things that would likely move the number.

— Tinashe
https://origami-digital.co.za/work

PS. The full case study of the before/after is on the site under Work. Short read, 2 minutes.
```

---

## Email 4 — Day 14

**Subject line options (A/B):**
- `Is your website quietly costing you clients?`
- `The silent lead killer on most SA business sites`
- `A free audit spot opened up`

**Preview text:** Free website audit — no sales pitch, written up in a report, yours to keep.

### Body (plain text)

```
Hi {{contact.FIRSTNAME|default:'there'}},

Quick one.

I run a handful of free website audits every month for business owners who want to know where their site actually stands. Not a sales pitch — a written report covering:

- Performance (how fast it loads on mobile, where the bottlenecks are)
- SEO (what you rank for now, what you could rank for, what's broken)
- Design and conversion (whether visitors can actually find and do what you want them to)
- AI search readiness (whether ChatGPT and Perplexity can cite you)

You get the report, the priority order, and the top 5 fixes ranked by impact. You implement them yourself or bring us in — your call.

I do these personally, not via automated tool. So the spots are limited to 3 or 4 per month.

If you want one, request it here — takes 60 seconds:

https://origami-digital.co.za/get-started/free-audit

If you're wondering what a website should cost these days in South Africa in the first place (most quotes you'll get are either wildly over or wildly under), I broke it down by project size here: https://origami-digital.co.za/journal/website-cost-south-africa — saves you a few phone calls.

— Tinashe

PS. If the project is on permanent hold, reply "not now" and I'll stop emailing. No hard feelings.
```

---

## Email 5 — Day 30

**Subject line options (A/B):**
- `Still thinking about it?`
- `One last email from me`
- `A 15-minute call, no pitch`

**Preview text:** No pitch, no obligation. Fifteen minutes to answer your questions.

### Body (plain text)

```
Hi {{contact.FIRSTNAME|default:'there'}},

This is the last follow-up from me — I don't want to be the agency that clogs your inbox.

If the project is still on your mind but you're stuck, I'll offer one thing: a 15-minute call where you ask me anything and I answer honestly.

No slides. No pitch. No "and by the way, here's our package". Just me, on a call, helping you think through whatever's slowing you down. Scope, budget range, tech stack, whether you should even be doing this now, how to brief an agency properly — whatever the actual blocker is.

If it's useful and we end up working together, great. If it's useful and we don't, also great.

Book a slot here: https://origami-digital.co.za/contact

Otherwise, I'll leave you alone. If you need me in 6 months, the address hasn't changed.

All the best with whatever you're building.

— Tinashe
Origami Digital

PS. The monthly newsletter (The Digital Edge) has one main insight per month about what's actually working online in SA. If that's useful to have in your inbox, you can subscribe at the bottom of any page on the site. Unsubscribe anytime.
```

---

## Brevo automation setup (for when you load these in)

**Automation name:** `Post-enquiry nurture (5-step)`

**Entry trigger:** Contact added to any of the leads lists (not newsletter list) with `LEAD_SOURCE` attribute set.

**Exit conditions (any of):**
- Contact replies to any email in the sequence (outbound reply detected)
- Contact books a call via Calendly / contact form again
- Contact clicks "not now" reply trigger (manual tag `paused`)
- Contact unsubscribes

**Timings:**
- Email 1 (welcome) — +1 hour from enquiry (already live)
- Email 2 — +3 days
- Email 3 — +7 days
- Email 4 — +14 days
- Email 5 — +30 days

**Send-window constraint:** each email only fires Tue/Wed/Thu between 09:00 and 16:00 SAST. If the scheduled time falls outside that window, queue until the next valid slot.

**A/B:** Run the A/B subject test on Email 2 first (largest sample). Pick the winner after 50 sends and apply to Email 2 permanently, then run the next test on Email 4. Brevo supports this natively via "A/B test" on the send step.

**Tracking:** enable open + click tracking. Watch for people who open Email 4 but don't click the audit link — those are warm leads worth a manual Tinashe follow-up.
