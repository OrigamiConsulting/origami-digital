'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { trackConversion, trackEvent } from '@/lib/analytics'
import { Turnstile } from '@/components/ui/turnstile'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const inputClasses =
  'w-full rounded-xl border border-[#3A3A3A] bg-[#141414] px-4 py-3 text-white placeholder-[#4A4A4A] transition-all duration-200 focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]/30 text-sm'

const labelClasses = 'mb-1.5 block text-sm font-semibold text-[#DEDEDE]'

export function WebsiteDesignForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [fax, setFax] = useState('') // honeypot
  const renderedAt = useRef<number>(0)
  useEffect(() => { renderedAt.current = Date.now() }, [])
  const [turnstileToken, setTurnstileToken] = useState('')
  const handleVerify = useCallback((token: string) => setTurnstileToken(token), [])
  const handleExpire = useCallback(() => setTurnstileToken(''), [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!turnstileToken) { setStatus('error'); return }
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          service: 'website-design',
          budget: '',
          fax, // honeypot
          _ts: renderedAt.current,
          turnstileToken,
        }),
      })

      if (!response.ok) throw new Error('Failed to send')
      setStatus('success')

      trackConversion('lead_form')
      trackEvent('generate_lead', {
        event_category: 'landing_page',
        event_label: 'website-design',
        value: 1,
      })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl bg-[#141414] px-6 py-12 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A8FBF]/15">
          <svg className="h-7 w-7 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-white">
          We&apos;ll be in touch!
        </h3>
        <p className="text-sm text-[#8A8A8A]">
          Thanks for reaching out. Expect a response within one business day.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      {/* Honeypot — hidden from humans, bait for bots. Do not remove. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="wd-fax">Fax number (leave blank)</label>
        <input type="text" id="wd-fax" name="fax" tabIndex={-1} autoComplete="off" value={fax} onChange={(e) => setFax(e.target.value)} />
      </div>
      {status === 'error' && (
        <div className="rounded-xl border border-red-800/50 bg-red-900/20 p-4 text-sm text-red-300">
          Something went wrong. Email us directly at{' '}
          <a href="mailto:hello@origami-digital.co.za" className="font-semibold underline">
            hello@origami-digital.co.za
          </a>
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="wd-name" className={labelClasses}>
          Full name <span className="text-[#E8503E]">*</span>
        </label>
        <input
          type="text"
          id="wd-name"
          name="name"
          required
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="wd-email" className={labelClasses}>
          Email address <span className="text-[#E8503E]">*</span>
        </label>
        <input
          type="email"
          id="wd-email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.co.za"
          className={inputClasses}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="wd-phone" className={labelClasses}>
          Phone{' '}
          <span className="font-normal text-[#4A4A4A]">(optional)</span>
        </label>
        <input
          type="tel"
          id="wd-phone"
          name="phone"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+27 XX XXX XXXX"
          className={inputClasses}
        />
      </div>

      {/* Project brief */}
      <div>
        <label htmlFor="wd-message" className={labelClasses}>
          Tell us about your project <span className="text-[#E8503E]">*</span>
        </label>
        <textarea
          id="wd-message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="What does your business do? What do you need the website to achieve? Any existing site we should know about?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* Cloudflare Turnstile */}
      <Turnstile onVerify={handleVerify} onExpire={handleExpire} theme="dark" />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting' || !turnstileToken}
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#E8503E] px-6 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#D14535] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8503E] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <svg className="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : !turnstileToken ? (
          'Verifying…'
        ) : (
          'Get Your Free Consultation'
        )}
      </button>

      <p className="text-center text-xs text-[#4A4A4A]">
        No obligation &mdash; we&apos;ll respond within one business day
      </p>
    </form>
  )
}
