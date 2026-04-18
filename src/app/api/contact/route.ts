import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { createContact } from '@/lib/brevo'
import { checkSpam } from '@/lib/spam-filter'
import { verifyTurnstileToken } from '@/lib/turnstile'

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set')
  }
  return new Resend(apiKey)
}

interface ContactFormData {
  name: string
  email: string
  phone?: string
  service: string
  budget?: string
  message: string
  /** Honeypot field — must be empty. Bots fill it, humans never see it. */
  fax?: string
  /** Client-set render timestamp (ms since epoch) for timing check. */
  _ts?: number
  /** Cloudflare Turnstile token from the widget. */
  turnstileToken?: string
}

const serviceLabels: Record<string, string> = {
  'website-design': 'Website Design',
  'mobile-app': 'Mobile App',
  'custom-software': 'Custom Software',
  'seo': 'SEO',
  'google-ads': 'Google Ads',
  'ai-automation': 'AI Automation',
  'free-audit': 'Free Website Audit',
  'geo-audit': 'GEO Audit (AI Search)',
  'partnership': 'Partnership Enquiry',
  'other': 'Other',
}

// Maps service value → Brevo LEAD_SOURCE so the CRM can segment by campaign.
const serviceSources: Record<string, string> = {
  'free-audit': 'free_audit',
  'geo-audit': 'geo_audit',
  'partnership': 'partnership',
}

const budgetLabels: Record<string, string> = {
  'under-30k': 'Under R30,000',
  '30k-75k': 'R30,000 – R75,000',
  '75k-150k': 'R75,000 – R150,000',
  '150k-plus': 'R150,000+',
  'not-sure': 'Not sure yet',
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.service || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Layer 1: Cloudflare Turnstile — verify the token before doing anything else.
    // This blocks virtually all automated bots before they can trigger any downstream
    // side effects (Resend, Brevo, Google Ads). If the Turnstile secret isn't
    // configured (local dev), this is skipped and the other spam filters still apply.
    const remoteip =
      request.headers.get('cf-connecting-ip') ||
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      undefined
    const turnstile = await verifyTurnstileToken(body.turnstileToken, remoteip)
    if (!turnstile.success) {
      console.warn('Turnstile verification failed:', turnstile.errors, {
        email: body.email,
      })
      return NextResponse.json(
        { error: 'Verification failed. Please refresh the page and try again.' },
        { status: 400 }
      )
    }

    // Layer 2: Heuristic spam filter — honeypot, timing, content patterns.
    // Second line of defence for anything Turnstile let through.
    // Returns 400 so the client's error branch runs and conversion doesn't fire.
    const spamCheck = checkSpam({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      fax: body.fax,
      _ts: body._ts,
    })
    if (spamCheck.spam) {
      console.warn('Contact form spam blocked:', spamCheck.reason, {
        email: body.email,
        name: body.name,
      })
      return NextResponse.json(
        { error: 'Submission rejected' },
        { status: 400 }
      )
    }

    const serviceLabel = serviceLabels[body.service] || body.service
    const budgetLabel = body.budget ? (budgetLabels[body.budget] || body.budget) : 'Not specified'

    const resend = getResendClient()

    // Use verified domain or Resend onboarding address as fallback
    const fromAddress = process.env.RESEND_FROM_EMAIL || 'Origami Digital <onboarding@resend.dev>'

    // Send notification email to Origami Digital
    await resend.emails.send({
      from: fromAddress,
      to: ['hello@origami-digital.co.za'],
      replyTo: body.email,
      subject: `New Enquiry: ${serviceLabel} — ${body.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
          <div style="background: #141414; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">New Website Enquiry</h1>
            <p style="color: #0A8FBF; font-size: 14px; margin-top: 8px; letter-spacing: 2px; text-transform: uppercase;">Origami Digital</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #8A8A8A; font-size: 14px; width: 140px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E1E1E; font-size: 14px; font-weight: 600;">${body.name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #8A8A8A; font-size: 14px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E1E1E; font-size: 14px;"><a href="mailto:${body.email}" style="color: #0A8FBF;">${body.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #8A8A8A; font-size: 14px;">Phone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E1E1E; font-size: 14px;">${body.phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #8A8A8A; font-size: 14px;">Service</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E1E1E; font-size: 14px;">${serviceLabel}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #8A8A8A; font-size: 14px;">Budget</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1E1E1E; font-size: 14px;">${budgetLabel}</td>
              </tr>
            </table>
            <div style="margin-top: 24px;">
              <p style="color: #8A8A8A; font-size: 14px; margin-bottom: 8px;">Message</p>
              <div style="background: #ffffff; border: 1px solid #eee; border-radius: 8px; padding: 16px;">
                <p style="color: #1E1E1E; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${body.message}</p>
              </div>
            </div>
          </div>
          <div style="background: #f0f0f0; padding: 16px 32px; text-align: center;">
            <p style="color: #8A8A8A; font-size: 12px; margin: 0;">This enquiry was submitted via origami-digital.co.za</p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the enquirer
    await resend.emails.send({
      from: fromAddress,
      to: [body.email],
      subject: `Thanks for reaching out, ${body.name.split(' ')[0]}!`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
          <div style="background: #141414; padding: 32px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 24px; margin: 0;">Thanks for Getting in Touch</h1>
            <p style="color: #0A8FBF; font-size: 14px; margin-top: 8px; letter-spacing: 2px; text-transform: uppercase;">Origami Digital</p>
          </div>
          <div style="padding: 32px;">
            <p style="color: #1E1E1E; font-size: 16px; line-height: 1.6;">Hi ${body.name.split(' ')[0]},</p>
            <p style="color: #4A4A4A; font-size: 14px; line-height: 1.6;">Thank you for reaching out to Origami Digital. We&rsquo;ve received your enquiry about <strong>${serviceLabel}</strong> and will get back to you within one business day.</p>
            <p style="color: #4A4A4A; font-size: 14px; line-height: 1.6;">In the meantime, feel free to browse our <a href="https://origami-digital.co.za/work" style="color: #0A8FBF;">portfolio</a> or check out our <a href="https://origami-digital.co.za/journal" style="color: #0A8FBF;">journal</a> for insights on digital strategy.</p>
            <p style="color: #4A4A4A; font-size: 14px; line-height: 1.6;">We look forward to chatting about your project.</p>
            <p style="color: #1E1E1E; font-size: 14px; line-height: 1.6; margin-top: 24px;">
              Kind regards,<br />
              <strong>Tinashe Munyaka</strong><br />
              <span style="color: #8A8A8A;">Origami Digital</span><br />
              <a href="https://origami-digital.co.za" style="color: #0A8FBF; font-size: 12px;">origami-digital.co.za</a>
            </p>
          </div>
        </div>
      `,
    })

    // Add contact to Brevo for email marketing.
    // We await so the HTTP request actually completes — Vercel serverless
    // functions terminate as soon as the response is returned, which kills
    // any still-pending promises. .catch() keeps Brevo errors from breaking
    // the form submission (Resend confirmation already sent by this point).
    const nameParts = body.name.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined

    // Await the Brevo write so the HTTP request actually completes before the
    // Vercel function terminates — fire-and-forget promises are killed when
    // the response is sent. Errors are swallowed so Brevo downtime never
    // breaks the form submission (Resend confirmation has already fired).
    const brevoResult = await createContact({
      email: body.email,
      firstName,
      lastName,
      phone: body.phone,
      service: serviceLabel,
      budget: budgetLabel,
      source: serviceSources[body.service] || 'contact_form',
    }).catch((err) => {
      console.error('Brevo contact creation threw:', err)
      return { success: false as const, error: err instanceof Error ? err.message : String(err) }
    })
    if (!brevoResult.success) {
      console.error('Brevo contact creation failed:', brevoResult.error)
    }

    // Free-audit submissions trigger the automated PDF audit.
    // Awaited for the same reason as the Brevo call above.
    if (body.service === 'free-audit') {
      await triggerAuditReport({
        message: body.message,
        email: body.email,
        name: body.name,
      }).catch((err) => {
        console.error('Audit report trigger failed (non-blocking):', err)
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}

async function triggerAuditReport({
  message,
  email,
  name,
}: {
  message: string
  email: string
  name: string
}): Promise<void> {
  const url = extractUrl(message)
  if (!url) return

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://origami-digital.co.za'
  const secret = process.env.AUDIT_WEBHOOK_SECRET

  const res = await fetch(`${siteUrl}/api/generate-audit`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      ...(secret ? { 'x-audit-secret': secret } : {}),
    },
    body: JSON.stringify({ url, recipientEmail: email, recipientName: name }),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    console.error('generate-audit returned non-OK:', res.status, text)
  }
}

function extractUrl(message: string): string | null {
  const match = message.match(/\bhttps?:\/\/\S+/i)
  if (match) return match[0].replace(/[.,;]+$/, '')
  // Fallback: look for "Website: ..." line the free-audit form produces.
  const line = message.match(/Website:\s*(\S+)/i)
  if (line && line[1]) return line[1].replace(/[.,;]+$/, '')
  return null
}
