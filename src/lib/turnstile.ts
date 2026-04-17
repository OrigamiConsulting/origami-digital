/**
 * Cloudflare Turnstile server-side verification.
 *
 * Called from the /api/contact route. Takes the one-time token the widget
 * produced on the client and asks Cloudflare to confirm it's legit.
 *
 * If TURNSTILE_SECRET_KEY is not configured, verification is skipped
 * (returns success) so local development without keys still works — the
 * spam-filter defences still apply independently.
 */

const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export interface TurnstileVerifyResult {
  success: boolean
  /** Error codes returned by Cloudflare when verification fails. */
  errors?: string[]
  /** True if the secret key wasn't configured (verification was skipped). */
  skipped?: boolean
}

export async function verifyTurnstileToken(
  token: string | undefined,
  remoteip?: string
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY

  if (!secret) {
    console.warn('Turnstile: TURNSTILE_SECRET_KEY not set — skipping verification')
    return { success: true, skipped: true }
  }

  if (!token || typeof token !== 'string' || token.length === 0) {
    return { success: false, errors: ['missing-input-response'] }
  }

  try {
    const body = new URLSearchParams({
      secret,
      response: token,
    })
    if (remoteip) body.append('remoteip', remoteip)

    const response = await fetch(VERIFY_URL, {
      method: 'POST',
      body,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })

    if (!response.ok) {
      console.error('Turnstile verify HTTP error:', response.status)
      return { success: false, errors: [`http_${response.status}`] }
    }

    const data = (await response.json()) as {
      success: boolean
      'error-codes'?: string[]
    }

    return {
      success: data.success,
      errors: data['error-codes'],
    }
  } catch (err) {
    console.error('Turnstile verify exception:', err)
    return { success: false, errors: ['network_error'] }
  }
}
