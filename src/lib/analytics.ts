/**
 * Google Ads Conversion Tracking
 *
 * Conversion ID: AW-17524264437
 * Conversion labels (from Google Ads tag setup):
 *   - Contact:         submit_lead_form conversion
 *   - Page view:       Landing page CTA click conversion
 *   - Sign-up:         sign_up conversion
 *   - Submit lead form: submit_lead_form conversion
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

const AW_CONVERSION_ID = 'AW-17524264437'

type ConversionType = 'contact' | 'lead_form' | 'landing_page_cta' | 'sign_up'

const CONVERSION_LABELS: Record<ConversionType, string> = {
  contact: 'uT42CPTpjo0cEPWbnKRB',
  lead_form: 'uT42CPTpjo0cEPWbnKRB',
  landing_page_cta: 'uT42CPTpjo0cEPWbnKRB',
  sign_up: 'uT42CPTpjo0cEPWbnKRB',
}

/**
 * Fire a Google Ads conversion event.
 *
 * @param type - The conversion type to track
 * @param value - Monetary value in ZAR (defaults to 1.0)
 */
export function trackConversion(type: ConversionType, value = 1.0): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  const label = CONVERSION_LABELS[type]

  window.gtag('event', 'conversion', {
    send_to: `${AW_CONVERSION_ID}/${label}`,
    value,
    currency: 'ZAR',
  })
}

/**
 * Track a custom GA4 event alongside the Google Ads conversion.
 *
 * @param eventName - GA4 event name (e.g. 'generate_lead')
 * @param params - Additional event parameters
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined' || !window.gtag) {
    return
  }

  window.gtag('event', eventName, params)
}
