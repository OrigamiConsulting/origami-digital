# Brevo Workflow Setup — Lead Nurture Sequence

This document walks through the Brevo automation workflows that need to be configured **manually in the Brevo web UI** to complement the Layer 1 + Layer 2 lead-response system. The code-side pieces (contact creation, list assignment) are already wired in [src/lib/brevo.ts](../src/lib/brevo.ts) and [src/app/api/contact/route.ts](../src/app/api/contact/route.ts).

---

## What's already done in code

When a website form is submitted, `/api/contact` calls `createContact(...)` which:
- Adds the contact to Brevo **list 3** (Origami Digital Leads) — see `BREVO_LISTS.LEADS` constant.
- Sets attributes: `FIRSTNAME`, `LASTNAME`, `SMS` (phone), `SERVICE_INTEREST`, `BUDGET`, `LEAD_SOURCE`.
- `LEAD_SOURCE` values: `free_audit`, `geo_audit`, `partnership`, or `contact_form` (default).

`/api/newsletter` adds newsletter subscribers to **list 4** (Newsletter Subscribers) — separate from lead list.

---

## What you need to set up in Brevo (manual UI work)

Go to [my.brevo.com](https://my.brevo.com) → **Automation** → **+ Create new workflow**.

### Workflow 1 — Lead Acknowledgement (immediate)

**Already partially handled by Resend** (the code already sends an instant "Thanks for getting in touch" email via Resend on form submit). So this Brevo workflow is **optional, redundant**. Skip unless you want a Brevo-side record of when the acknowledgement fired.

If you do want it: Trigger on contact added to list 3 → wait 0 minutes → send a transactional email. Mark inactive if relying on the Resend confirmation.

---

### Workflow 2 — Day-2 Follow-Up (NEW — recommended)

**Purpose:** If you haven't replied within 48h (i.e. Layer 2 drafted but you didn't send, or you got busy), Brevo sends a polite "I'm reviewing your enquiry, will be back shortly" auto-message so the prospect doesn't go cold.

**Setup:**
1. **Trigger:** A contact is added to list 3 (Origami Digital Leads).
2. **Wait:** 48 hours.
3. **Condition:** Has the contact opened any email from `hello@origami-digital.co.za` since being added? (Brevo can detect this if outgoing emails are sent via Brevo SMTP — but ours are sent via Gmail/Resend, so this condition won't reliably detect a reply. **Skip this condition** and rely on you manually pausing the workflow for contacts you've already replied to. Or, better, see Workflow 3.)
4. **Send transactional email:** "Just confirming we got your enquiry — Tinashe will be in touch within the next day or two with a personal note. In the meantime, feel free to browse our portfolio."
5. **End workflow.**

**Sender:** `hello@origami-digital.co.za` (set up as verified sender in Brevo Senders & IP).

---

### Workflow 3 — Replied-To Detection (the smarter version)

The cleanest way to "stop Brevo follow-ups when Tinashe has manually replied" is to **add a custom attribute** like `LAST_REPLY_AT` and have your Layer 2 routine update it whenever it observes a sent reply.

**Setup:**
1. In Brevo, go to **Contacts → Settings → Contact attributes** → add a new attribute `LAST_REPLY_AT` (type: Date).
2. Update the Layer 2 agent prompt to also call Brevo's API to set `LAST_REPLY_AT = today` on each prospect's Brevo contact record after Tinashe sends the draft. (This is a Phase 2 enhancement — not in the current routine prompt.)
3. Workflow 2 trigger gains a condition: **Only proceed if `LAST_REPLY_AT` is empty.**

**Status:** Phase 2 — wire after the basic Layer 2 routine has been running for a couple of weeks and we know it's stable.

---

### Workflow 4 — Lead Nurture (Day 7, 14, 30 — for cold leads)

**Purpose:** If a prospect went silent after the initial reply, drip useful content over the following weeks to stay top-of-mind.

**Setup:**
1. **Trigger:** Contact in list 3 with attribute `LAST_REPLY_AT` older than 7 days AND no booked call (manual flag).
2. **Day 7:** "Did our slots not work for you? Here's a Calendly link to pick your own time."
3. **Day 14:** Send the most relevant of the 5 published blog posts based on `SERVICE_INTEREST` attribute:
   - `Website Design` → "What to Look for When Hiring a Web Design Company in Johannesburg"
   - `AI Automation` → "How AI Automation Is Helping South African Businesses Save Time and Money"
   - `SEO` → "What Is Generative Engine Optimisation (GEO)?"
   - `Other` → fallback to the website cost article
4. **Day 30:** Soft re-engagement — "Still considering options? Reply with one word and I'll send a tailored 15-min Loom walkthrough of what we'd build."
5. **End workflow.**

**Status:** Phase 2 — wire after Workflows 2 + 3 are stable.

---

## Verification checklist

After setting up Workflow 2 (the minimum), test it:

- [ ] Submit a real form on origami-digital.co.za with a test email you control
- [ ] Confirm the Resend acknowledgement arrives within ~30 seconds
- [ ] Confirm the contact appears in Brevo list 3 with all attributes populated
- [ ] Wait 48h (or shrink the wait to 5 mins for testing) and confirm Workflow 2 fires
- [ ] Restore the wait to 48h before going live

---

## Sender authentication (one-time)

For Brevo to send from `hello@origami-digital.co.za`, you must:

1. Go to **Senders & IP → Senders** → add `hello@origami-digital.co.za` as a sender, verify the email link.
2. Go to **Senders & IP → Domains** → add `origami-digital.co.za` and complete the SPF + DKIM DNS records (Brevo provides them; add to your DNS host).
3. Confirm Resend's SPF doesn't conflict — both Resend and Brevo can coexist on the same domain via separate DKIM keys, but SPF must include both. The combined SPF should look like:

   ```
   v=spf1 include:_spf.brevo.com include:amazonses.com ~all
   ```

   (Resend uses Amazon SES, hence `amazonses.com`.)
