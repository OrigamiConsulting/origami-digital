import { NextResponse } from 'next/server'
import { createContact, BREVO_LISTS } from '@/lib/brevo'
import { checkSpam } from '@/lib/spam-filter'
import { verifyTurnstileToken } from '@/lib/turnstile'

interface NewsletterPayload {
  email: string
  firstName?: string
  /** Honeypot — bots fill, humans never see. */
  fax?: string
  /** Client-set render timestamp (ms since epoch) for timing check. */
  _ts?: number
  /** Cloudflare Turnstile token. Optional — if not provided we still run honeypot + timing. */
  turnstileToken?: string
  /** Where the signup came from — footer, blog_post_footer, etc. Used as Brevo LEAD_SOURCE. */
  source?: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: Request) {
  try {
    const body: NewsletterPayload = await request.json()

    if (!body.email || !EMAIL_RE.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // Turnstile (if a token was sent)
    if (body.turnstileToken) {
      const remoteip =
        request.headers.get('cf-connecting-ip') ||
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        undefined
      const turnstile = await verifyTurnstileToken(body.turnstileToken, remoteip)
      if (!turnstile.success) {
        return NextResponse.json(
          { error: 'Verification failed. Please refresh and try again.' },
          { status: 400 }
        )
      }
    }

    // Lightweight spam check — honeypot + timing only (no message field to scan).
    const spamCheck = checkSpam({
      email: body.email,
      name: body.firstName,
      fax: body.fax,
      _ts: body._ts,
    })
    if (spamCheck.spam) {
      console.warn('Newsletter signup blocked:', spamCheck.reason, { email: body.email })
      return NextResponse.json({ error: 'Submission rejected' }, { status: 400 })
    }

    const firstName = (body.firstName?.trim() || body.email.split('@')[0]).slice(0, 60)
    const source = (body.source || 'newsletter_signup').slice(0, 60)

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
