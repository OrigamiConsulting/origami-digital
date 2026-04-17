import { NextResponse } from 'next/server'
import { runAudit } from '@/lib/audit-report'
import { renderAuditPdf } from '@/lib/audit-pdf'
import { sendTransactionalEmail } from '@/lib/brevo'

// @react-pdf/renderer depends on Node APIs (streams, Buffer).
export const runtime = 'nodejs'
// PDF generation + PageSpeed API can easily exceed the default 10s budget.
export const maxDuration = 90

/**
 * Generate a branded website audit PDF for a given URL and email it to the lead.
 *
 * Intended callers:
 *   1. Server-side trigger from `/api/contact` when a `free-audit` submission lands.
 *   2. Manual admin trigger (curl / browser) when re-running an audit.
 *
 * Auth:
 *   - If the `AUDIT_WEBHOOK_SECRET` env var is set, requests must include a matching
 *     `x-audit-secret` header. This keeps the endpoint from being used as an open
 *     PDF-generator for arbitrary URLs once the env var is configured.
 *
 * Request body:
 *   { url: string, recipientEmail: string, recipientName?: string }
 *
 * Response:
 *   { success: true, findings: number } on happy path.
 *   { error: string } on failure. Caller should not block form submission on this.
 */

interface GenerateAuditRequest {
  url: string
  recipientEmail: string
  recipientName?: string
}

export async function POST(request: Request) {
  const secret = process.env.AUDIT_WEBHOOK_SECRET
  if (secret) {
    const provided = request.headers.get('x-audit-secret')
    if (provided !== secret) {
      return NextResponse.json({ error: 'Unauthorised' }, { status: 401 })
    }
  }

  let body: GenerateAuditRequest
  try {
    body = (await request.json()) as GenerateAuditRequest
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }

  if (!body.url || !body.recipientEmail) {
    return NextResponse.json(
      { error: 'url and recipientEmail are required' },
      { status: 400 },
    )
  }

  try {
    const result = await runAudit(body.url)
    const pdf = await renderAuditPdf(result)
    const base64 = pdf.toString('base64')

    const firstName = body.recipientName?.split(' ')[0] ?? 'there'
    const topFindings = result.findings.slice(0, 3)
    const topFindingsList = topFindings
      .map((f) => `<li style="margin-bottom: 8px;">${escapeHtml(f.title)}</li>`)
      .join('')

    const htmlContent = `
      <p>Hi ${escapeHtml(firstName)},</p>
      <p>Your free audit for <strong>${escapeHtml(result.host)}</strong> is attached.
      The report covers performance, SEO, AI-search readiness and a few design signals,
      with ${result.findings.length} prioritised findings.</p>
      ${topFindings.length ? `<p>Top three things to look at first:</p><ul>${topFindingsList}</ul>` : ''}
      <p>Everything in the PDF has a recommended action. Pick the ones that matter most to your business
      and run at them — or reply to this email and we can walk through implementation together.</p>
      <p>— Tinashe<br/>Origami Digital<br/><a href="https://origami-digital.co.za">origami-digital.co.za</a></p>
    `

    const sendResult = await sendTransactionalEmail({
      to: [{ email: body.recipientEmail, name: body.recipientName ?? body.recipientEmail }],
      subject: `Your website audit — ${result.host}`,
      htmlContent,
      attachment: [
        {
          name: `audit-${sanitiseFilename(result.host)}.pdf`,
          content: base64,
        },
      ],
    })

    if (!sendResult.success) {
      return NextResponse.json(
        { error: `Email send failed: ${sendResult.error ?? 'unknown'}` },
        { status: 502 },
      )
    }

    return NextResponse.json({
      success: true,
      findings: result.findings.length,
      url: result.url,
    })
  } catch (error) {
    const msg = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function sanitiseFilename(s: string): string {
  return s.replace(/[^a-z0-9.-]/gi, '_').toLowerCase()
}
