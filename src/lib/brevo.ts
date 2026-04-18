/**
 * Brevo (formerly Sendinblue) API Integration
 *
 * Used to create contacts in Brevo when forms are submitted,
 * enabling email marketing automation and lead nurturing.
 *
 * Lists:
 *   - #3: Origami Digital Leads (form submissions)
 *   - #4: Newsletter Subscribers
 */

const BREVO_API_URL = 'https://api.brevo.com/v3'

function getApiKey(): string {
  const apiKey = process.env.BREVO_API_KEY
  if (!apiKey) {
    throw new Error('BREVO_API_KEY environment variable is not set')
  }
  return apiKey
}

/** Brevo list IDs */
export const BREVO_LISTS = {
  LEADS: 3,
  NEWSLETTER: 4,
} as const

interface CreateContactParams {
  email: string
  firstName: string
  lastName?: string
  phone?: string
  service?: string
  budget?: string
  source?: string
  listIds?: number[]
}

/**
 * Create or update a contact in Brevo.
 *
 * Uses the Brevo Contacts API with `updateEnabled: true`
 * so existing contacts are updated rather than throwing errors.
 *
 * Retries once on transient failures (network errors, 5xx responses, or
 * 429 rate limits) with a short backoff. Silently losing a lead because
 * of a flaky single call is worse than taking an extra second.
 */
export async function createContact({
  email,
  firstName,
  lastName,
  phone,
  service,
  budget,
  source = 'website',
  listIds = [BREVO_LISTS.LEADS],
}: CreateContactParams): Promise<{ success: boolean; error?: string }> {
  const apiKey = getApiKey()

  const attributes: Record<string, string> = { FIRSTNAME: firstName }
  if (lastName) attributes.LASTNAME = lastName
  if (phone) attributes.SMS = phone
  if (service) attributes.SERVICE_INTEREST = service
  if (budget) attributes.BUDGET = budget
  attributes.LEAD_SOURCE = source

  const payload = JSON.stringify({ email, attributes, listIds, updateEnabled: true })

  async function attempt(attemptNo: number): Promise<{ success: boolean; error?: string; retryable: boolean }> {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 8000)
      const response = await fetch(`${BREVO_API_URL}/contacts`, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
          'api-key': apiKey,
        },
        body: payload,
        signal: controller.signal,
      }).finally(() => clearTimeout(timeoutId))

      if (response.ok) return { success: true, retryable: false }

      const errorData = await response.json().catch(() => ({}))
      console.error(`Brevo API error (attempt ${attemptNo}, email=${email}):`, response.status, errorData)
      // 429 (rate limit) and 5xx are worth retrying; 4xx client errors are not.
      const retryable = response.status === 429 || response.status >= 500
      return {
        success: false,
        error: `Brevo API error: ${response.status}`,
        retryable,
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      console.error(`Brevo fetch threw (attempt ${attemptNo}, email=${email}):`, msg)
      // Network errors, aborts, DNS failures, etc. — all retryable
      return { success: false, error: msg, retryable: true }
    }
  }

  const first = await attempt(1)
  if (first.success || !first.retryable) {
    return { success: first.success, error: first.error }
  }

  // Backoff briefly, then retry once
  await new Promise((resolve) => setTimeout(resolve, 600))
  const second = await attempt(2)
  if (!second.success) {
    console.error(`Brevo createContact FINAL failure for ${email}: ${second.error}`)
  }
  return { success: second.success, error: second.error }
}

interface SendTransactionalEmailParams {
  to: { email: string; name?: string }[]
  subject: string
  htmlContent: string
  sender?: { name: string; email: string }
  attachment?: Array<{ name: string; content: string }>
}

/**
 * Send a transactional email via Brevo SMTP API.
 *
 * This can be used for welcome emails, confirmations, etc.
 * Note: For automated sequences, use Brevo's Automation workflows instead.
 */
export async function sendTransactionalEmail({
  to,
  subject,
  htmlContent,
  sender = { name: 'Origami Digital', email: 'hello@origami-digital.co.za' },
  attachment,
}: SendTransactionalEmailParams): Promise<{ success: boolean; error?: string }> {
  try {
    const apiKey = getApiKey()

    const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': apiKey,
      },
      body: JSON.stringify({
        sender,
        to,
        subject,
        htmlContent,
        ...(attachment && attachment.length > 0 ? { attachment } : {}),
      }),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      console.error('Brevo SMTP API error:', response.status, errorData)
      return {
        success: false,
        error: `Brevo SMTP error: ${response.status}`,
      }
    }

    return { success: true }
  } catch (error) {
    console.error('Brevo sendTransactionalEmail error:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    }
  }
}
