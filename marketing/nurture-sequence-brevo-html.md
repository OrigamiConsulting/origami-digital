# Nurture Sequence — Brevo-Ready HTML

**Status:** ✅ Paste-ready. Load each email directly into Brevo's automation editor (use the "Code view" / HTML toggle, NOT the drag-drop builder — that will wreck the 1-to-1 feel).

**Key design decision:** these emails are deliberately plain — no header image, no footer logo, no multi-column layout. They're meant to look like Tinashe typed them in Gmail. That's the entire deliverability + response-rate strategy. Resist the urge to "brand them up".

**Brevo variables used:** `{{ contact.FIRSTNAME }}`, `{{ contact.SERVICE_INTEREST }}`. If either is missing in Brevo, add the attribute in Settings → Contacts → Attributes before loading.

**Recommended Brevo settings per email:**
- Sender: `Tinashe Munyaka <hello@origami-digital.co.za>`
- Reply-to: `hello@origami-digital.co.za`
- Preheader: shown inline below each email
- Track opens + clicks: ON
- Unsubscribe footer: Brevo's default is fine; it must be present for POPIA / CAN-SPAM

---

## Email 2 — Day 3

**Subject (A):** `Quick question about your {{ contact.SERVICE_INTEREST | default : "project" }}`
**Subject (B):** `{{ contact.FIRSTNAME | default : "Hi" }} — a quick follow-up`
**Preheader:** `A question before we book a call.`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Quick follow-up</title>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1E1E1E; font-size:16px; line-height:1.6;">
<div style="max-width:560px; margin:0 auto; padding:32px 24px;">

<p>Hi {{ contact.FIRSTNAME | default : "there" }},</p>

<p>I got your enquiry last week and wanted to follow up properly.</p>

<p>Before I suggest next steps, one question that helps me give you a useful answer rather than a generic one:</p>

<p><strong>What's the main business outcome you're hoping this project solves?</strong> More enquiries from your website? A specific process you want to automate? Ranking for a particular search term?</p>

<p>Answers I've heard lately range from "I just want a site I'm not embarrassed to hand out" to "our ops team is drowning in manual data entry and I want it gone". Both are valid. They lead to very different projects.</p>

<p>If you reply with a sentence or two, I can come back with either:</p>

<ul style="padding-left:20px; margin:0 0 16px 0;">
  <li>A direct answer (if the ask is well-defined and I've done it before), or</li>
  <li>Two or three clarifying questions and a rough shape of what the work would look like</li>
</ul>

<p>Either way, you'll get something useful rather than a standard sales reply.</p>

<p>— Tinashe<br>
Origami Digital<br>
<a href="https://origami-digital.co.za" style="color:#0A8FBF;">origami-digital.co.za</a></p>

<p style="color:#4A4A4A; font-size:14px;"><em>PS. If the project's now on the back burner, just reply "not now" and I'll stop emailing. No sales pressure.</em></p>

</div>
</body>
</html>
```

---

## Email 3 — Day 7

**Subject (A):** `How a client doubled their enquiries (without a redesign)`
**Subject (B):** `A quick story before we go further`
**Preheader:** `Same site. Same SEO. Different outcome.`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>A quick story</title>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1E1E1E; font-size:16px; line-height:1.6;">
<div style="max-width:560px; margin:0 auto; padding:32px 24px;">

<p>Hi {{ contact.FIRSTNAME | default : "there" }},</p>

<p>A short story that's relevant to most projects I take on.</p>

<p>A few months ago a client came in with what they thought was a traffic problem. "We need SEO, we're not getting enough leads."</p>

<p>We looked at their analytics before touching anything. Traffic was actually fine — about 2,000 visitors a month from Google. Their problem was that only 1.5% of those visitors were converting.</p>

<p>Here's what we changed. Not the design. Not the copy. Not the SEO.</p>

<p>We reduced the number of CTAs on the homepage from four competing buttons ("Learn More", "Our Work", "Contact", "Book Consultation") down to ONE: "Book a free consultation". Same position, bigger, more prominent. The other three moved into secondary positions.</p>

<p>That change alone moved their conversion rate from 1.5% to 4.2%. Enquiries doubled inside a month. Same traffic, same SEO budget.</p>

<p>The point isn't that every site needs fewer CTAs. The point is that <strong>most projects people think are "I need more traffic" are actually "my existing traffic isn't converting".</strong> Doing the traffic work first wastes money.</p>

<p>I always look at both before proposing anything. If you'd like me to do the same quick analysis on your site — no charge, no pitch — just send me the URL and I'll come back with the top 2 or 3 things that would likely move the number.</p>

<p>— Tinashe<br>
<a href="https://origami-digital.co.za/work" style="color:#0A8FBF;">origami-digital.co.za/work</a></p>

<p style="color:#4A4A4A; font-size:14px;"><em>PS. The full case study of the before/after is on the site under Work. Short read, 2 minutes.</em></p>

</div>
</body>
</html>
```

---

## Email 4 — Day 14

**Subject (A):** `Is your website quietly costing you clients?`
**Subject (B):** `A free audit spot opened up`
**Preheader:** `Free website audit — no sales pitch, written up in a report, yours to keep.`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Free audit</title>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1E1E1E; font-size:16px; line-height:1.6;">
<div style="max-width:560px; margin:0 auto; padding:32px 24px;">

<p>Hi {{ contact.FIRSTNAME | default : "there" }},</p>

<p>Quick one.</p>

<p>I run a handful of free website audits every month for business owners who want to know where their site actually stands. Not a sales pitch — a written report covering:</p>

<ul style="padding-left:20px; margin:0 0 16px 0;">
  <li><strong>Performance</strong> (how fast it loads on mobile, where the bottlenecks are)</li>
  <li><strong>SEO</strong> (what you rank for now, what you could rank for, what's broken)</li>
  <li><strong>Design and conversion</strong> (whether visitors can actually find and do what you want them to)</li>
  <li><strong>AI search readiness</strong> (whether ChatGPT and Perplexity can cite you)</li>
</ul>

<p>You get the report, the priority order, and the top 5 fixes ranked by impact. You implement them yourself or bring us in — your call.</p>

<p>I do these personally, not via automated tool. So the spots are limited to 3 or 4 per month.</p>

<p>If you want one, request it here — takes 60 seconds:</p>

<p><a href="https://origami-digital.co.za/get-started/free-audit" style="display:inline-block; background:#EF6351; color:#ffffff; padding:12px 20px; border-radius:6px; text-decoration:none; font-weight:600;">Request a free audit</a></p>

<p style="color:#4A4A4A; font-size:14px;">Or if you're just curious what a website should cost these days in South Africa (most quotes are either wildly over or wildly under), I broke it down <a href="https://origami-digital.co.za/journal/website-cost-south-africa" style="color:#0A8FBF;">by project size here</a>.</p>

<p>— Tinashe</p>

<p style="color:#4A4A4A; font-size:14px;"><em>PS. If the project is on permanent hold, reply "not now" and I'll stop emailing. No hard feelings.</em></p>

</div>
</body>
</html>
```

---

## Email 5 — Day 30

**Subject (A):** `Still thinking about it?`
**Subject (B):** `A 15-minute call, no pitch`
**Preheader:** `No pitch, no obligation. Fifteen minutes to answer your questions.`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>One last email</title>
</head>
<body style="margin:0; padding:0; background:#ffffff; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color:#1E1E1E; font-size:16px; line-height:1.6;">
<div style="max-width:560px; margin:0 auto; padding:32px 24px;">

<p>Hi {{ contact.FIRSTNAME | default : "there" }},</p>

<p>This is the last follow-up from me — I don't want to be the agency that clogs your inbox.</p>

<p>If the project is still on your mind but you're stuck, I'll offer one thing: <strong>a 15-minute call where you ask me anything and I answer honestly.</strong></p>

<p>No slides. No pitch. No "and by the way, here's our package". Just me, on a call, helping you think through whatever's slowing you down. Scope, budget range, tech stack, whether you should even be doing this now, how to brief an agency properly — whatever the actual blocker is.</p>

<p>If it's useful and we end up working together, great. If it's useful and we don't, also great.</p>

<p><a href="https://origami-digital.co.za/contact" style="color:#0A8FBF; font-weight:600;">Book a slot here →</a></p>

<p>Otherwise, I'll leave you alone. If you need me in 6 months, the address hasn't changed.</p>

<p>All the best with whatever you're building.</p>

<p>— Tinashe<br>
Origami Digital</p>

<p style="color:#4A4A4A; font-size:14px;"><em>PS. The monthly newsletter (The Digital Edge) has one main insight per month about what's actually working online in SA. If that's useful in your inbox, you can subscribe at the bottom of any page on the site. Unsubscribe anytime.</em></p>

</div>
</body>
</html>
```

---

## Loading into Brevo — step-by-step

1. **Brevo → Automations → Create automation → Custom workflow.**
2. **Name:** `Post-enquiry nurture (5-step)`.
3. **Entry trigger:** *A contact is added to a list* → select all leads lists EXCEPT the newsletter list. (Make sure welcome-email list is excluded to avoid double-sending.)
4. **Exit conditions:**
   - Contact replies to any email (Brevo auto-detects inbound replies)
   - Contact attribute `STATUS` = `paused`
   - Contact unsubscribes
5. **Add steps in order:**
   - Wait 3 days → Send email (Email 2)
   - Wait 4 days → Send email (Email 3)
   - Wait 7 days → Send email (Email 4)
   - Wait 16 days → Send email (Email 5)
6. **For each email step:**
   - Click "Design email" → top-right toggle to **"Code your own"** → paste the `<html>…</html>` block above.
   - Set sender: `Tinashe Munyaka <hello@origami-digital.co.za>`.
   - Set reply-to: `hello@origami-digital.co.za`.
   - Set preheader (Brevo calls it "preview text").
   - Enable A/B subject test → paste both A and B subject lines.
   - Save.
7. **Send-window constraint:** in Brevo's step settings, toggle "Send only during these hours" → Tue/Wed/Thu, 09:00–16:00 SAST. Applies per step.
8. **Activate** the automation. Brevo will only enrol new contacts going forward — existing contacts are not auto-enrolled (deliberate, so we don't spam people who enquired months ago).

**Sanity check:** after activation, create a test contact (use a personal Gmail), add them to a leads list, confirm you receive Email 2 three days later in the right window.
