# Anti-Spam Playbook for Contact Forms

> **Purpose:** A stack-agnostic playbook for stopping bot/spam submissions on web contact forms. Includes a reference implementation (Next.js 15 + App Router + TypeScript) from Origami Digital, but the concepts apply to any framework.
>
> **Audience:** Any Claude agent (or developer) adding anti-spam defences to a web app. Designed to be dropped into a new project cold.
>
> **Last updated:** 2026-04-17

---

## The Problem

Public-facing contact forms attract automated spam — bots that fill and submit forms to:

- Inject SEO/backlink spam into email notifications you receive
- Pollute your CRM / email marketing tool with fake leads
- **Burn ad budget.** If your form's success handler fires a conversion event (Google Ads, Meta Pixel, GA4), every spam submission is counted as a conversion, inflating your CPA and teaching the bid algorithm to chase the wrong audience.

## The Strategy: Layered Defence

No single technique stops all spam. Stack multiple cheap filters so at least one catches each bot. Each layer runs server-side **before** any expensive downstream action (email send, CRM write, conversion fire).

```
Client submits form
        │
        ▼
┌───────────────────────┐
│ Layer 1: Turnstile    │ ← primary defence (invisible CAPTCHA)
└───────────────────────┘
        │
        ▼
┌───────────────────────┐
│ Layer 2: Honeypot     │ ← catches dumb bots missed by Turnstile
└───────────────────────┘
        │
        ▼
┌───────────────────────┐
│ Layer 3: Timing check │ ← catches fast-submit scripts
└───────────────────────┘
        │
        ▼
┌───────────────────────┐
│ Layer 4: Content      │ ← URLs, keywords, scripts, disposable emails
│         heuristics    │
└───────────────────────┘
        │
        ▼
  ALL PASS → run side effects (send email, write CRM, fire conversion)
  ANY FAIL → return HTTP 400, NO side effects
```

**Critical rule:** Return HTTP 400 (or whatever your framework's error code is) for spam. Do NOT silently return success. Why: client-side conversion tracking typically fires on the success path. A 400 keeps the conversion from firing and keeps the CRM clean.

---

## Layer 1: Cloudflare Turnstile (Primary)

Free, invisible CAPTCHA alternative from Cloudflare. Verifies visitors silently unless they look suspicious, in which case it shows a challenge. No user friction for legitimate humans.

### Why Turnstile over reCAPTCHA / hCaptcha?

- **Free forever** (hCaptcha has free tier but with ads; reCAPTCHA is free but tracks users heavily)
- **Privacy-friendly** (no personal data sent to Google)
- **Invisible by default** (no "click all the buses" interruption)
- **Works behind any domain**, not just Cloudflare-proxied sites
- **Simple integration** — one script tag, one token verification call

### Setup (one-time, ~5 minutes)

1. Go to <https://dash.cloudflare.com> → sign up / log in
2. Navigate to **Turnstile** (in the sidebar under "Protect & Connect")
3. Click **Add widget**
4. Fill in:
   - **Widget name:** `[App Name] - Contact Forms`
   - **Hostname:** your production domain (e.g. `example.com`). Add `preview.example.com` or `*.vercel.app` subdomain if you test on preview deploys.
   - **Widget Mode:** `Managed (Recommended)` — Cloudflare decides when to challenge
5. Click **Create**
6. Copy the **Site Key** and **Secret Key**. The site key is public (goes in your frontend); the secret key is private (server-side only).

### Environment variables

```bash
# Public — ships to the browser
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAC-xxxxxxxxxx

# Private — server-side only, never expose
TURNSTILE_SECRET_KEY=0x4AAAAAAC-xxxxxxxxxx
```

Adapt the `NEXT_PUBLIC_` prefix to your framework:
- **Next.js:** `NEXT_PUBLIC_*`
- **Vite / Remix / React:** `VITE_*` or `PUBLIC_*` (check your bundler's convention)
- **Nuxt:** `NUXT_PUBLIC_*`
- **SvelteKit:** `PUBLIC_*`
- **Rails:** just put it in a JS config file — Rails doesn't need a prefix
- **Django:** expose it via a template context

### Client-side integration

Load the Cloudflare script and render the widget. The widget produces a one-time token that you submit with the form.

**Reference: Next.js 15 (React)** — see [`src/components/ui/turnstile.tsx`](../src/components/ui/turnstile.tsx)

Key points any framework:

1. **Load script** from `https://challenges.cloudflare.com/turnstile/v0/api.js` (async, defer)
2. **Render widget** into a `<div>` with your site key: `window.turnstile.render(element, { sitekey, callback, ... })`
3. **Store token** from the callback — this is what you submit to your server
4. **Handle expiry** — tokens expire after ~5 minutes; on expiry, clear the stored token

Minimal vanilla JS version for non-React stacks:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
<form id="contact">
  <!-- your fields -->
  <div class="cf-turnstile"
       data-sitekey="YOUR_SITE_KEY"
       data-callback="onTurnstileVerify"></div>
  <button type="submit">Send</button>
</form>
<script>
  let turnstileToken = '';
  function onTurnstileVerify(token) { turnstileToken = token; }

  document.getElementById('contact').addEventListener('submit', async (e) => {
    e.preventDefault();
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ /* ...fields */, turnstileToken }),
    });
  });
</script>
```

### Server-side verification

Send the token to Cloudflare's verify endpoint with your secret key. If `success: true`, the submission is legit.

**Reference: Next.js / TypeScript** — see [`src/lib/turnstile.ts`](../src/lib/turnstile.ts)

**Framework-agnostic pseudocode:**

```
POST https://challenges.cloudflare.com/turnstile/v0/siteverify
Content-Type: application/x-www-form-urlencoded

secret=YOUR_SECRET_KEY
response=TOKEN_FROM_CLIENT
remoteip=CLIENT_IP (optional, recommended)
```

Response:
```json
{ "success": true, "error-codes": [] }
```

If `success` is `false`, reject with HTTP 400. Check `error-codes` for debugging (e.g. `invalid-input-response`, `timeout-or-duplicate`).

**Python / Flask example:**

```python
import requests

def verify_turnstile(token, remote_ip=None):
    if not token:
        return False
    data = {"secret": os.environ["TURNSTILE_SECRET_KEY"], "response": token}
    if remote_ip:
        data["remoteip"] = remote_ip
    r = requests.post(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        data=data, timeout=5,
    )
    return r.ok and r.json().get("success", False)
```

**Rails example:**

```ruby
require "net/http"

def verify_turnstile(token, remote_ip = nil)
  return false if token.blank?
  uri = URI("https://challenges.cloudflare.com/turnstile/v0/siteverify")
  params = { secret: ENV["TURNSTILE_SECRET_KEY"], response: token }
  params[:remoteip] = remote_ip if remote_ip
  res = Net::HTTP.post_form(uri, params)
  JSON.parse(res.body)["success"] == true
rescue
  false
end
```

### Graceful degradation

Make verification **optional at the code level** — skip if the secret key isn't set. This keeps local development working without keys and lets you deploy the code before the keys are configured. The other layers still apply.

```ts
if (!process.env.TURNSTILE_SECRET_KEY) {
  console.warn('Turnstile secret not set — skipping verification')
  return { success: true, skipped: true }
}
```

---

## Layer 2: Honeypot Field

A hidden form field that humans never see but bots will fill in (they fill every input). If the field has any value on submission, it's spam.

### Implementation

**Choose a field name that looks plausible but won't collide** with any legitimate field in your form. Good choices:

- `fax` (nobody has a fax anymore, bots still fill it)
- `url` (if your form has no real URL field)
- `homepage`
- `company_website` (if "website" is a legitimate field)

**Bad choices:**
- `email_confirm`, `name_again` — might be used for real validation
- `website` — many forms legitimately have this

**Hide it properly.** Do NOT use `display: none` or `visibility: hidden` — some bots detect and skip these. Use off-screen positioning so the field is still "rendered" but not visible:

```html
<div aria-hidden="true"
     style="position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden;">
  <label for="fax">Fax number (leave blank)</label>
  <input type="text" id="fax" name="fax" tabindex="-1" autocomplete="off" />
</div>
```

Critical attributes:
- `aria-hidden="true"` — screen readers ignore it
- `tabindex="-1"` — keyboard navigation skips it
- `autocomplete="off"` — browser autofill doesn't pre-fill it
- Off-screen positioning — visually hidden without being `display: none`

### Server-side check

```ts
if (body.fax && body.fax.trim().length > 0) {
  return { spam: true, reason: 'honeypot_filled' }
}
```

This single layer blocks ~60-70% of unsophisticated bot spam on its own.

---

## Layer 3: Timing Check

Bots submit forms instantly. Humans take at least a few seconds to read and type. Set a minimum render-to-submit duration.

### Implementation

1. **Client:** Record a timestamp when the form mounts. Submit it with the form data.
2. **Server:** Reject if the elapsed time is unreasonably short or unreasonably long.

**React / Next.js:**

```tsx
const renderedAt = useRef<number>(0)
useEffect(() => { renderedAt.current = Date.now() }, [])

// Include in submission:
body: JSON.stringify({ ...formData, _ts: renderedAt.current })
```

**Vanilla JS:**

```js
const renderedAt = Date.now()
// Include in submission: { ...formData, _ts: renderedAt }
```

**Server check:**

```ts
if (typeof body._ts === 'number') {
  const elapsed = Date.now() - body._ts
  if (elapsed < 2500) return { spam: true, reason: 'submitted_too_fast' }
  if (elapsed > 24 * 60 * 60 * 1000) return { spam: true, reason: 'stale_form' }
}
```

**Thresholds:**
- **Minimum:** 2.5 seconds. Fast-typing humans can submit in 3-4s; bots submit in <500ms. 2.5s is a safe line.
- **Maximum:** 24 hours. Prevents replay attacks where a spammer captures a valid timestamp and reuses it weeks later.

**Security note:** Client-set timestamps can be forged by sophisticated bots. This is a weak signal on its own but adds friction. For stronger timing, use HMAC-signed timestamps from the server — usually unnecessary given the other layers.

---

## Layer 4: Content Heuristics

Even if a bot passes Turnstile + honeypot + timing, the content of the message often reveals it. Check for common spam patterns.

### Signals

**1. URL count in message**
More than 2 URLs is almost always spam (link-building backlink spam, dodgy SEO services).

```ts
const urls = (message.match(/(https?:\/\/|www\.)[^\s]+/gi) || []).length
if (urls > 2) return { spam: true, reason: 'too_many_urls' }
```

**2. Spam keyword templates**
Automated SEO/affiliate spam uses recognisable phrases. Block common ones (case-insensitive):

```
guest post, backlink, link building, link exchange,
seo services, boost your ranking, first page of google,
rank higher, web hosting offer, bitcoin, crypto investment,
forex, binary options, casino, gambling, dating site,
hot singles, write an article, sponsored post,
i can help you rank, outsource, cheap development
```

**3. Mixed-script abuse**
For English-market forms, Cyrillic or CJK characters mixed with Latin is a strong bot signal.

```ts
const hasCyrillic = /[\u0400-\u04FF]/.test(text)
const hasCJK = /[\u4E00-\u9FFF\u3040-\u30FF]/.test(text)
const hasLatin = /[A-Za-z]/.test(text)
if (hasLatin && (hasCyrillic || hasCJK)) {
  return { spam: true, reason: 'mixed_scripts' }
}
```

**4. URL or @ in name field**
Spammers stuff their domain/email into the name field. No human does this.

```ts
if (/https?:\/\/|www\./.test(name) || /@/.test(name)) {
  return { spam: true, reason: 'url_in_name' }
}
```

**5. Disposable email domains**
Block known throwaway email providers.

```ts
const DISPOSABLE = new Set([
  'mailinator.com', 'tempmail.com', 'guerrillamail.com',
  '10minutemail.com', 'throwawaymail.com', 'yopmail.com',
  'trashmail.com', 'getnada.com', 'sharklasers.com', 'maildrop.cc',
])
const domain = email.split('@')[1]?.toLowerCase().trim()
if (DISPOSABLE.has(domain)) return { spam: true, reason: 'disposable_email' }
```

For a comprehensive list, use <https://github.com/disposable-email-domains/disposable-email-domains> (updated list of ~3000 domains).

**6. Short messages with URLs**
A 2-word message with a link is low-effort spam.

```ts
if (message.trim().length < 30 && urls > 0) {
  return { spam: true, reason: 'short_message_with_url' }
}
```

### Reference implementation

[`src/lib/spam-filter.ts`](../src/lib/spam-filter.ts) in this repo implements all seven heuristics as a pure function you can call from any serverless function or API route.

---

## Integration Pattern

Regardless of stack, your form handler should follow this structure:

```
1. Parse request body
2. Validate required fields (name, email, message)
3. Validate email format
4. LAYER 1: Verify Turnstile token → on failure, return 400
5. LAYER 2-4: Run heuristic spam filter → on failure, return 400
6. (ONLY IF ALL PASS) Run side effects:
   a. Send notification email (Resend, SendGrid, SMTP, etc.)
   b. Create CRM contact (Brevo, HubSpot, Mailchimp, etc.)
   c. Return success → client fires conversion event
```

**Reference:** [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts) in this repo.

### Framework examples

- **Next.js 15 (App Router):** `app/api/contact/route.ts` — see this repo
- **Next.js (Pages Router):** `pages/api/contact.ts` — same logic, different export shape
- **Express / Node:** `app.post('/api/contact', async (req, res) => { ... })`
- **Flask / Django:** `@app.route('/api/contact', methods=['POST'])`
- **Rails:** `def create; ... end` in a `ContactsController`
- **Laravel:** `public function store(Request $request)` in a controller
- **Cloudflare Workers / Hono:** `app.post('/api/contact', async (c) => { ... })`
- **Supabase Edge Functions:** same pattern, Deno runtime

---

## Testing

Before calling this done, verify:

1. **Happy path still works.** Fill in the form normally, submit. Should succeed.
2. **Honeypot works.** In DevTools, un-hide the honeypot field, fill it, submit. Should fail with 400.
3. **Turnstile works.** Disable JavaScript, try to submit. Should fail (no token).
4. **Timing works.** In DevTools, override the timestamp to `Date.now() - 500` and submit. Should fail.
5. **Keyword filter works.** Submit with message "I offer SEO services and backlinks for cheap." Should fail.

### Test script

Run against a deployed endpoint:

```bash
# Honeypot check (should return 400)
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"t@example.com","service":"other","message":"hello","fax":"filled"}'

# Keyword check (should return 400)
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"t@example.com","service":"other","message":"I can help you rank on the first page of google with backlinks"}'

# Missing Turnstile token — if Turnstile is enforced, should return 400
curl -X POST https://your-domain.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"t@example.com","service":"other","message":"Legit enquiry"}'
```

---

## CRM Cleanup (Existing Spam)

If you already have spam in your CRM (HubSpot, Brevo, Mailchimp, etc.), run a one-off cleanup script:

1. Fetch all contacts via the CRM's API
2. Apply the same spam heuristics (the ones in `src/lib/spam-filter.ts` work against contact data, not just form submissions)
3. Flag candidates → save to a JSON report
4. **Review the report manually** before deleting — false-positives in batch deletion can lose legit contacts
5. Delete confirmed spam via the CRM's API or UI

**Reference:** [`scripts/brevo-spam-report.mjs`](../scripts/brevo-spam-report.mjs) in this repo — adapt the API calls for your CRM.

---

## What This Does NOT Cover

- **Sophisticated targeted attacks** (competitor sabotage, advanced anti-anti-spam). Those need rate limiting + IP reputation + WAF rules. Cloudflare's WAF (free tier) handles most of this if your domain is proxied through Cloudflare.
- **Rate limiting per IP.** Vercel / serverless functions are stateless, so in-memory rate limits don't work reliably. Use Upstash Redis, Vercel KV, or Cloudflare Rate Limiting Rules if you need this. For most contact forms, the four layers above are sufficient.
- **DDoS.** That's a WAF / CDN problem, not a form problem.
- **Phishing submissions that look legitimate.** Those require manual review. No heuristic catches a carefully-crafted human-written spam.

---

## Summary Checklist

Drop this into any web app with a contact form:

- [ ] Create Cloudflare Turnstile widget, copy site key + secret key
- [ ] Add both keys to environment variables (public site key, private secret key)
- [ ] Install Turnstile script + widget in your form component
- [ ] Add honeypot field (hidden off-screen, `aria-hidden`, `tabindex="-1"`, `autocomplete="off"`)
- [ ] Add render timestamp (client records, sends with form, server validates)
- [ ] Write a spam filter function implementing all 7 content heuristics
- [ ] In form handler: verify Turnstile → run heuristic filter → THEN run side effects
- [ ] Return HTTP 400 for any spam (so client doesn't fire conversion event)
- [ ] Test all 5 paths (happy + 4 failure modes)
- [ ] (Optional) Run CRM cleanup script for existing spam

**Expected result:** Automated spam drops by ~99%. Legit conversions keep flowing. Ad budget stops being wasted on bot clicks.

---

## Reference Implementation Files

All in this repo (origami-digital.co.za) — the other agent can read these directly or clone the repo:

| Path | What it is |
|---|---|
| [`src/lib/turnstile.ts`](../src/lib/turnstile.ts) | Server-side Turnstile verification helper |
| [`src/lib/spam-filter.ts`](../src/lib/spam-filter.ts) | Pure function: all 7 content heuristics |
| [`src/components/ui/turnstile.tsx`](../src/components/ui/turnstile.tsx) | React component: lazy-loads Turnstile script, renders widget |
| [`src/app/api/contact/route.ts`](../src/app/api/contact/route.ts) | Next.js API route with full integration |
| [`src/components/sections/contact-form.tsx`](../src/components/sections/contact-form.tsx) | Main contact form using honeypot + Turnstile + timing |
| [`scripts/brevo-spam-report.mjs`](../scripts/brevo-spam-report.mjs) | Adaptable CRM cleanup script (Brevo API as example) |

**Raw GitHub URLs** (for other agents to fetch directly):

```
https://raw.githubusercontent.com/OrigamiConsulting/origami-digital/main/src/lib/turnstile.ts
https://raw.githubusercontent.com/OrigamiConsulting/origami-digital/main/src/lib/spam-filter.ts
https://raw.githubusercontent.com/OrigamiConsulting/origami-digital/main/src/components/ui/turnstile.tsx
https://raw.githubusercontent.com/OrigamiConsulting/origami-digital/main/src/app/api/contact/route.ts
https://raw.githubusercontent.com/OrigamiConsulting/origami-digital/main/docs/anti-spam-playbook.md
```
