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
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react'

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

export interface TurnstileHandle {
  /** Clears the current token and asks Cloudflare for a fresh one.
   *  Call this after a failed submission (so the next retry uses a new
   *  token) or on iOS Safari bfcache restore (where the old token is
   *  invalid because Cloudflare already consumed it). */
  reset: () => void
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

export const Turnstile = forwardRef<TurnstileHandle, TurnstileProps>(
  function Turnstile({ onVerify, onExpire, theme = 'auto' }, ref) {
    const containerRef = useRef<HTMLDivElement>(null)
    const widgetIdRef = useRef<string | null>(null)
    // Keep latest callbacks in refs so we can swap them without forcing a re-render
    // of the Turnstile widget itself (which is expensive and loses state).
    const onVerifyRef = useRef(onVerify)
    const onExpireRef = useRef(onExpire)
    useEffect(() => { onVerifyRef.current = onVerify }, [onVerify])
    useEffect(() => { onExpireRef.current = onExpire }, [onExpire])

    function resetWidget() {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.reset(widgetIdRef.current)
        } catch {
          // ignore — widget may not be fully mounted yet
        }
      }
      // Let the parent know the in-memory token should be discarded.
      onExpireRef.current?.()
    }

    useImperativeHandle(ref, () => ({ reset: resetWidget }), [])

    useEffect(() => {
      if (!SITE_KEY) {
        console.warn('Turnstile: NEXT_PUBLIC_TURNSTILE_SITE_KEY not set')
        return
      }

      let interval: ReturnType<typeof setInterval> | null = null
      let timeout: ReturnType<typeof setTimeout> | null = null

      function tryRender() {
        if (!window.turnstile || !containerRef.current) return false
        if (widgetIdRef.current) return true // already rendered

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: SITE_KEY!,
          callback: (token: string) => onVerifyRef.current?.(token),
          'expired-callback': () => onExpireRef.current?.(),
          'error-callback': () => onExpireRef.current?.(),
          theme,
        })
        return true
      }

      // Render now, or poll every 200ms for up to 10s for the Turnstile script to load
      if (!tryRender()) {
        interval = setInterval(() => {
          if (tryRender() && interval) clearInterval(interval)
        }, 200)
        timeout = setTimeout(() => {
          if (interval) clearInterval(interval)
        }, 10_000)
      }

      // Safari/iOS bfcache fix: when the page is restored from the back/forward
      // cache, the in-memory Turnstile token is stale (Cloudflare has already
      // consumed it) but the widget still reports it as valid. On restore,
      // reset the widget so the next submit uses a fresh token.
      function handlePageShow(e: PageTransitionEvent) {
        if (e.persisted) resetWidget()
      }
      window.addEventListener('pageshow', handlePageShow)

      return () => {
        if (interval) clearInterval(interval)
        if (timeout) clearTimeout(timeout)
        window.removeEventListener('pageshow', handlePageShow)
        if (widgetIdRef.current && window.turnstile) {
          try {
            window.turnstile.remove(widgetIdRef.current)
          } catch {
            // ignore
          }
          widgetIdRef.current = null
        }
      }
    }, [theme])

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
)
