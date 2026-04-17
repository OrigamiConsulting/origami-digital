'use client'

/**
 * Cloudflare Turnstile widget.
 *
 * Invisible-by-default CAPTCHA alternative. Renders the managed widget,
 * captures the one-time token, and hands it to the parent via onVerify.
 *
 * The token is valid for ~5 minutes and must be verified server-side via
 * `verifyTurnstileToken()` in @/lib/turnstile before trusting the submission.
 */

import Script from 'next/script'
import { useEffect, useRef } from 'react'

interface TurnstileWidget {
  render: (
    selector: string | HTMLElement,
    options: {
      sitekey: string
      callback?: (token: string) => void
      'error-callback'?: () => void
      'expired-callback'?: () => void
      theme?: 'light' | 'dark' | 'auto'
      size?: 'normal' | 'compact' | 'flexible'
      appearance?: 'always' | 'execute' | 'interaction-only'
    }
  ) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
  getResponse: (widgetId?: string) => string | undefined
}

declare global {
  interface Window {
    turnstile?: TurnstileWidget
    onloadTurnstileCallback?: () => void
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void
  onExpire?: () => void
  theme?: 'light' | 'dark' | 'auto'
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export function Turnstile({ onVerify, onExpire, theme = 'auto' }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  useEffect(() => {
    if (!SITE_KEY) {
      console.warn('Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY not set')
      return
    }

    function tryRender() {
      if (!window.turnstile || !containerRef.current) return false
      if (widgetIdRef.current) return true // already rendered

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: SITE_KEY!,
        callback: onVerify,
        'expired-callback': () => {
          onExpire?.()
        },
        'error-callback': () => {
          onExpire?.()
        },
        theme,
      })
      return true
    }

    // Try immediately if Turnstile already loaded
    if (tryRender()) return

    // Otherwise, poll every 200ms for up to 10s
    const interval = setInterval(() => {
      if (tryRender()) clearInterval(interval)
    }, 200)

    const timeout = setTimeout(() => clearInterval(interval), 10_000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // ignore
        }
        widgetIdRef.current = null
      }
    }
  }, [onVerify, onExpire, theme])

  if (!SITE_KEY) return null

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="afterInteractive"
        async
        defer
      />
      <div ref={containerRef} />
    </>
  )
}
