import { NextResponse } from 'next/server'
import { createContact, BREVO_LISTS } from '@/lib/brevo'
import { checkSpam } from '@/lib/spam-filter'
import { verifyTurnstileToken } from '@/lib/turnstile'

/**
 * Newsletter signup endpoint.
 *
 * **Every defence that protects the contact form also protects this route.**
 * The previous version made Turnstile optional, which let bots skip it by
 * just omitting the token — all they had to do was send {email, fax:''} and
 * the contact was created in Brevo. That's the 12-lead spam incident on 2026-04-18.
 */

interface NewsletterPayload {
  email: string
  firstName?: string
  /** Honeypot — bots fill, humans never see. */
  fax?: string
  /** Client-set render timestamp (ms since epoch) for timing check. */
  _ts?: number
  /** Cloudflare Turnstile token — REQUIRED. No exceptions. */
  turnstileToken?: string
  /** Where the signup came from — footer, blog_post_footer, etc. Used as Brevo LEAD_SOURCE. */
  source?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export async function POST(request: Request) {
  try {
    const body: NewsletterPayload = await request.json()

    if (!body.email || !EMAIL_RE.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Layer 1: Turnstile is MANDATORY. If the secret key is configured in the
    // environment and the token is missing or invalid, reject. This closes the
    // "just omit the token" bypass from the previous version.
    const remoteip =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      undefined
    const turnstile = await verifyTurnstileToken(body.turnstileToken, remoteip)
    if (!turnstile.success) {
      console.warn('Newsletter Turnstile rejected:', turnstile.errors, { email: body.email })
      return NextResponse.json(
        { error: 'Verification failed. Please refresh the page and try again.' },
        { status: 400 }
      )
    }

    // Layer 2: Full spam filter — honeypot, timing, content, email/TLD, name patterns.
    const spamCheck = checkSpam({
      email: body.email,
      name: body.firstName,
      fax: body.fax,
      _ts: body._ts,
    })
    if (spamCheck.spam) {
      console.warn('Newsletter spam rejected:', spamCheck.reason, { email: body.email })
      return NextResponse.json({ error: 'Submission rejected' }, { status: 400 })
    }

    // Require firstName explicitly. The previous version defaulted to the email
    // local-part, which gave spammers free FIRSTNAME attributes ("bingadyson474"
    // as a first name is a spam signature). Legit newsletter forms supply a name.
    // For the current footer-only signup form where we don't ask for a name, use
    // "Subscriber" as the placeholder — never derive from the email address.
    const firstName = (body.firstName?.trim() || 'Subscriber').slice(0, 60)

    // Cap the source string and restrict to a safe allowlist of prefixes so a bot
    // can't exfiltrate arbitrary text into Brevo via this attribute.
    const rawSource = body.source || 'newsletter_signup'
    const source = /^[a-z0-9_-]{1,60}$/i.test(rawSource) ? rawSource : 'newsletter_signup'

    const result = await createContact({
      email: body.email,
      firstName,
      source,
      listIds: [BREVO_LISTS.NEWSLETTER],
    })

    if (!result.success) {
      console.error('Newsletter Brevo error:', result.error)
      return NextResponse.json(
        { error: 'Could not subscribe. Please try again.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Newsletter route error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again.' },
      { status: 500 }
    )
  }
}
