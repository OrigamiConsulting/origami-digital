# Google Ads changes — 2026-04-20

Context: 12 spam Gmail contacts exploited the unprotected `/api/newsletter` endpoint before it was hardened with Turnstile. These spam hits were being counted as form-fill "Contact" conversions, which was training Google's bidding algorithm to chase more of that audience and burn ad budget. The code hole is now closed (separate commit). This doc records the Google Ads-side mitigations.

## Account: 702-187-8945 (origamiconsultinggroup@gmail.com)

### 1. Conversion actions — demoted from Primary → Secondary

| Conversion | Was | Now | Reason |
|---|---|---|---|
| **Contact** (Website) | Primary, 93 events, R232,500 credit | **Secondary** | Form-fill signal is spam-polluted. Demotion stops Smart Bidding from learning on it. Still reported in "All conversions" for measurement. |
| **Landing Page CTA Click** (Website) | Primary | **Secondary** | Same reasoning — low-intent signal easily spoofed by bot traffic. |
| Sign-up (Website) | Primary, 1 event | **Left as Primary** | Only 1 event and it's the primary goal of Origami Pay / Finance campaigns, not origami-digital. Not a spam vector. |
| Successful Registration | Inactive | Left | Not firing. |

### 2. origami-digital campaigns — tightened

#### Search - Website Design JHB (campaignId 23758838863) — KEPT PAUSED per instruction

| Setting | Was | Now |
|---|---|---|
| Bid strategy | Maximise conversions | **Maximise clicks, max CPC ZAR 15** |
| Networks | Google Search Network + Search partners | **Google Search Network only** |
| Locations | Johannesburg (Gauteng, ZA city) + "Presence or interest" | **Johannesburg (ZA city) + "Presence only"** |
| Status | Paused | **Still paused** |

Bid strategy currently shows "Bid strategy learning" while Google's model settles.

#### Search - AI Automation SA (campaignId 23754423551) — ACTIVE

| Setting | Was | Now |
|---|---|---|
| Bid strategy | Maximise clicks, max CPC ZAR 15 | *Unchanged* ✓ |
| Networks | Google Search Network + Search partners + **Display Network** | **Google Search Network only** |
| Locations | South Africa + "Presence or interest" | **South Africa + "Presence only"** |

### 3. Campaigns intentionally NOT touched

- **OrigamiPay - Search - Payslip Generator SA** — belongs to Origami Pay, not origami-digital. No spam issue there.
- **Origami Finance - Search - Sign-ups** — same, belongs to Origami Finance.
- **CPMS Platform - South Africa** (Performance Max) — EV Connect campaign, different site.
- **Home EV Charger Installers** (Performance Max) — already paused.

## Impact to watch over the next 7 days

- Click volume on AI Automation SA will drop ~20-30% initially (removing search partners + Display) but click quality should rise meaningfully.
- CPC on Max Clicks campaigns capped at R15 — hard ceiling on per-click spend for Website Design JHB once you unpause it.
- "Contact" conversions will still accumulate in All Conversions for reporting; they just won't influence bids.
- After 30 days with clean data, revisit whether to promote Contact back to Primary.

## What was NOT done and why

### Invalid-conversions upload (the 12 spam "Contact" events)

Google Ads supports uploading an "invalid conversions" CSV to retroactively back out spam conversions, but it **requires a GCLID** (Google Click ID) per conversion. GCLIDs are captured from the ad click URL and passed through to the form submission. Our current form doesn't persist the GCLID anywhere, so we can't produce a precise retraction list.

**This is OK for now because:**
- Demoting Contact to Secondary means those 93 past conversions no longer influence future bidding (Smart Bidding only trains on Primary actions).
- The spam "credit" of R232,500 is a reporting artefact, not real ad spend.
- Future spam is now blocked upstream (Turnstile + spam filter).

**To fix for next time** (not urgent):
- Capture the `gclid` URL parameter on landing, persist it in a hidden form field, and include it in the `/api/contact` payload.
- Store it in Brevo as a contact attribute.
- Then a future spam incident can be retracted via an upload to Google Ads → Tools → Uploads → "Invalid conversions".

Noting this as a future improvement — no action required right now.

## Quick sanity check — what to do this week

1. Watch Google Ads → Reports → Predefined → Invalid Clicks for the next 7 days. Google's auto-fraud filter should catch more of the obvious junk now that the account is cleaner.
2. Check GA4 for any drop in real form submissions (should be near zero — the spam wasn't driving real users).
3. If Website Design JHB is ready to run, unpause it. The R15 CPC cap + Presence-only SA + Search-Network-only combo means maximum sensible spend is ~R150/day, matching the daily budget.
