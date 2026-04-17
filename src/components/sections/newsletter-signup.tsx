'use client'

import { useState, useRef, useEffect, type FormEvent } from 'react'
import { trackEvent } from '@/lib/analytics'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface NewsletterSignupProps {
  /** Visual variant. `footer` is compact for the site footer; `card` is a standalone block used on blog post pages. */
  variant?: 'footer' | 'card'
  /** Attribution — stored in Brevo LEAD_SOURCE. */
  source?: string
  className?: string
}

export function NewsletterSignup({
  variant = 'card',
  source = 'newsletter_signup',
  className = '',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [fax, setFax] = useState('')
  const renderedAt = useRef(0)
  useEffect(() => {
    renderedAt.current = Date.now()
  }, [])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          fax,
          _ts: renderedAt.current,
          source,
        }),
      })

      if (!response.ok) throw new Error('Failed')
      setStatus('success')
      trackEvent('newsletter_signup', { event_category: 'engagement', event_label: source })
    } catch {
      setStatus('error')
    }
  }

  // Shared honeypot input — hidden off-screen.
  const Honeypot = (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
    >
      <label htmlFor={`nl-fax-${source}`}>Fax (leave blank)</label>
      <input
        type="text"
        id={`nl-fax-${source}`}
        name="fax"
        tabIndex={-1}
        autoComplete="off"
        value={fax}
        onChange={(e) => setFax(e.target.value)}
      />
    </div>
  )

  if (variant === 'footer') {
    return (
      <div className={className}>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
          The Digital Edge
        </h3>
        <p className="mb-4 max-w-sm text-sm leading-relaxed text-[#8A8A8A]">
          Monthly insights on web design, SEO, and AI automation for South African businesses.
        </p>
        {status === 'success' ? (
          <p className="text-sm text-[#0A8FBF]">
            You&apos;re in. Expect the next edition on the 1st.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:flex-row" noValidate>
            {Honeypot}
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.co.za"
              className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-[#4A4A4A] transition-colors focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]/30"
              aria-label="Email address"
            />
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="rounded-lg bg-[#0A8FBF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#087CA7] disabled:opacity-50"
            >
              {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
            </button>
          </form>
        )}
        {status === 'error' && (
          <p className="mt-2 text-xs text-red-400">
            Something went wrong. Try again or email{' '}
            <a href="mailto:hello@origami-digital.co.za" className="underline">
              hello@origami-digital.co.za
            </a>
          </p>
        )}
        <a
          href="/downloads/website-checklist-2026.pdf"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[#0A8FBF] transition-colors hover:text-white"
        >
          Or grab our free 30-point website checklist
          <span aria-hidden="true">→</span>
        </a>
      </div>
    )
  }

  // Card variant — used on blog post pages.
  return (
    <div
      className={`rounded-2xl border border-[#2A2A2A] bg-[#141414] p-8 md:p-10 ${className}`}
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
        Newsletter
      </p>
      <h3 className="mb-3 font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
        Enjoyed this? Get monthly insights delivered.
      </h3>
      <p className="mb-6 text-[#B0B0B0]">
        <strong className="text-white">The Digital Edge</strong> — one email a month with
        practical insights on web design, SEO, GEO, and AI automation for South African businesses.
        No spam, unsubscribe anytime.
      </p>
      {status === 'success' ? (
        <div className="rounded-xl border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 p-5">
          <p className="font-semibold text-white">You&apos;re in.</p>
          <p className="mt-1 text-sm text-[#B0B0B0]">Expect the next edition on the 1st of the month.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row" noValidate>
          {Honeypot}
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.co.za"
            className="flex-1 rounded-xl border border-[#3A3A3A] bg-[#1E1E1E] px-4 py-3 text-white placeholder-[#4A4A4A] transition-colors focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]/30"
            aria-label="Email address"
          />
          <button
            type="submit"
            disabled={status === 'submitting'}
            className="rounded-xl bg-[#E8503E] px-6 py-3 font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#D14535] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
          >
            {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
          </button>
        </form>
      )}
      {status === 'error' && (
        <p className="mt-3 text-sm text-red-400">
          Something went wrong. Try again or email{' '}
          <a href="mailto:hello@origami-digital.co.za" className="font-semibold underline">
            hello@origami-digital.co.za
          </a>
        </p>
      )}
    </div>
  )
}
