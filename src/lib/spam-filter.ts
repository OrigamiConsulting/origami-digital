/**
 * Spam detection for contact form submissions.
 *
 * Layered defences — each runs cheaply before hitting Resend/Brevo/Google Ads.
 * Returns { spam: true, reason } to let the API route short-circuit.
 *
 * Philosophy: false-positives are tolerable (legitimate users can retry or
 * email directly). False-negatives burn ad budget and pollute the CRM.
 */

export interface SpamCheckInput {
  name?: string
  email?: string
  phone?: string
  message?: string
  /** Hidden honeypot field — must be empty */
  fax?: string
  /** Client-set render timestamp (ms since epoch) */
  _ts?: number
}

export interface SpamCheckResult {
  spam: boolean
  reason?: string
}

/** Common spam bait keywords (case-insensitive). */
const SPAM_KEYWORDS = [
  // SEO / backlink spam
  'guest post',
  'backlink',
  'link building',
  'link exchange',
  'seo services',
  'boost your ranking',
  'boost your website',
  'first page of google',
  'rank higher',
  'increase traffic',
  'web hosting offer',
  // Crypto / finance spam
  'bitcoin',
  'crypto investment',
  'forex',
  'binary options',
  // Content/dating spam
  'adult',
  'casino',
  'gambling',
  'dating site',
  'hot singles',
  // Generic sales
  'write an article',
  'sponsored post',
  'i can help you rank',
  'i visited your website',
  'i saw your website and',
  'outsource',
  'cheap development',
  'hire me',
  'hire us',
]

/** Count URLs in a string (http/https/www). */
function countUrls(text: string): number {
  const pattern = /(https?:\/\/|www\.)[^\s]+/gi
  const matches = text.match(pattern)
  return matches ? matches.length : 0
}

/** Detect mixed-script abuse (e.g. Cyrillic in an otherwise Latin message). */
function hasSuspiciousScriptMix(text: string): boolean {
  const hasCyrillic = /[\u0400-\u04FF]/.test(text)
  const hasCJK = /[\u4E00-\u9FFF\u3040-\u30FF]/.test(text)
  const hasLatin = /[A-Za-z]/.test(text)
  // Mixed Latin + Cyrillic/CJK is a strong bot signal for English-speaking market
  return hasLatin && (hasCyrillic || hasCJK)
}

/** Disposable / throwaway email domains frequently used by spammers. */
const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com',
  'tempmail.com',
  'guerrillamail.com',
  '10minutemail.com',
  'throwawaymail.com',
  'yopmail.com',
  'trashmail.com',
  'getnada.com',
  'sharklasers.com',
  'maildrop.cc',
])

export function checkSpam(input: SpamCheckInput): SpamCheckResult {
  const { name = '', email = '', message = '', fax, _ts } = input

  // 1. Honeypot — hidden field that bots fill but humans never see
  if (fax && fax.trim().length > 0) {
    return { spam: true, reason: 'honeypot_filled' }
  }

  // 2. Timing — form must be on screen ≥2.5s before submission.
  //    Missing timestamp is suspicious but not automatically spam
  //    (some browsers may not set it). Only reject if present AND too fast.
  if (typeof _ts === 'number' && Number.isFinite(_ts)) {
    const elapsedMs = Date.now() - _ts
    if (elapsedMs < 2500) {
      return { spam: true, reason: 'submitted_too_fast' }
    }
    // Stale form (>24h) — likely replayed
    if (elapsedMs > 24 * 60 * 60 * 1000) {
      return { spam: true, reason: 'stale_form' }
    }
  }

  // 3. Disposable email domain
  const emailDomain = email.split('@')[1]?.toLowerCase().trim()
  if (emailDomain && DISPOSABLE_DOMAINS.has(emailDomain)) {
    return { spam: true, reason: 'disposable_email' }
  }

  // 4. URL stuffing — >2 URLs in the message is almost always spam
  const urlCount = countUrls(message)
  if (urlCount > 2) {
    return { spam: true, reason: 'too_many_urls' }
  }

  // 5. Keyword match — common spam templates
  const lowerMessage = message.toLowerCase()
  const lowerName = name.toLowerCase()
  for (const keyword of SPAM_KEYWORDS) {
    if (lowerMessage.includes(keyword) || lowerName.includes(keyword)) {
      return { spam: true, reason: `keyword:${keyword}` }
    }
  }

  // 6. Mixed script abuse (e.g. Cyrillic in English-market form)
  if (hasSuspiciousScriptMix(message) || hasSuspiciousScriptMix(name)) {
    return { spam: true, reason: 'mixed_scripts' }
  }

  // 7. Name looks like a URL or email (common spam pattern)
  if (countUrls(name) > 0 || /@/.test(name)) {
    return { spam: true, reason: 'url_in_name' }
  }

  // 8. Extremely short message with URL (low-effort spam)
  if (message.trim().length < 30 && urlCount > 0) {
    return { spam: true, reason: 'short_message_with_url' }
  }

  return { spam: false }
}
