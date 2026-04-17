'use client'

import { useState, useRef, useEffect, useCallback, type FormEvent } from 'react'
import { trackConversion, trackEvent } from '@/lib/analytics'
import { Turnstile } from '@/components/ui/turnstile'

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

interface FormData {
  name: string
  company: string
  email: string
  phone: string
  serviceFocus: string
  message: string
}

const inputClasses =
  'w-full rounded-xl border border-[#3A3A3A] bg-[#141414] px-4 py-3 text-white placeholder-[#4A4A4A] transition-all duration-200 focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]/30 text-sm'

const labelClasses = 'mb-1.5 block text-sm font-semibold text-[#DEDEDE]'

export function PartnersForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceFocus: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [fax, setFax] = useState('')
  const renderedAt = useRef(0)
  useEffect(() => {
    renderedAt.current = Date.now()
  }, [])
  const [turnstileToken, setTurnstileToken] = useState('')
  const handleVerify = useCallback((token: string) => setTurnstileToken(token), [])
  const handleExpire = useCallback(() => setTurnstileToken(''), [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: 'partnership',
          budget: '',
          message: `Partnership Enquiry\n\nCompany: ${formData.company}\nService focus: ${formData.serviceFocus}\n\nHow they serve clients:\n${formData.message || '(not provided)'}`,
          fax,
          _ts: renderedAt.current,
          turnstileToken,
        }),
      })

      if (!response.ok) throw new Error('Failed to send')
      setStatus('success')

      trackConversion('lead_form')
      trackEvent('generate_lead', {
        event_category: 'partners',
        event_label: 'partnership_enquiry',
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
          Thanks for reaching out!
        </h3>
        <p className="text-sm text-[#8A8A8A]">
          We&apos;ll be in touch within two business days to discuss how we can work together.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="partner-fax">Fax (leave blank)</label>
        <input type="text" id="partner-fax" name="fax" tabIndex={-1} autoComplete="off" value={fax} onChange={(e) => setFax(e.target.value)} />
      </div>
      {status === 'error' && (
        <div className="rounded-xl border border-red-800/50 bg-red-900/20 p-4 text-sm text-red-300">
          Something went wrong. Email us at{' '}
          <a href="mailto:hello@origami-digital.co.za" className="font-semibold underline">
            hello@origami-digital.co.za
          </a>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className={labelClasses}>
            Your name <span className="text-[#E8503E]">*</span>
          </label>
          <input
            type="text"
            id="partner-name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="partner-company" className={labelClasses}>
            Company <span className="text-[#E8503E]">*</span>
          </label>
          <input
            type="text"
            id="partner-company"
            name="company"
            required
            autoComplete="organization"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your agency / company"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-email" className={labelClasses}>
            Email <span className="text-[#E8503E]">*</span>
          </label>
          <input
            type="email"
            id="partner-email"
            name="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.co.za"
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="partner-phone" className={labelClasses}>
            Phone
          </label>
          <input
            type="tel"
            id="partner-phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+27 …"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label htmlFor="partner-service-focus" className={labelClasses}>
          What do you do? <span className="text-[#E8503E]">*</span>
        </label>
        <select
          id="partner-service-focus"
          name="serviceFocus"
          required
          value={formData.serviceFocus}
          onChange={handleChange}
          className={inputClasses}
        >
          <option value="">Select your service focus…</option>
          <option value="Branding / Graphic Design">Branding / Graphic Design</option>
          <option value="Marketing / PR Agency">Marketing / PR Agency</option>
          <option value="Business Consultant">Business Consultant</option>
          <option value="Accountant / Bookkeeper">Accountant / Bookkeeper</option>
          <option value="Copywriter / Content Creator">Copywriter / Content Creator</option>
          <option value="Photographer / Videographer">Photographer / Videographer</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="partner-message" className={labelClasses}>
          How do you serve your clients, and where do we fit in?
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a bit about your clients and how you think a partnership could work…"
          className={`${inputClasses} resize-none`}
        />
      </div>

      <Turnstile onVerify={handleVerify} onExpire={handleExpire} theme="dark" />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#E8503E] px-6 py-4 text-base font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-[#D14535] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8503E] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <svg className="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Submitting...
          </>
        ) : (
          'Start the Conversation'
        )}
      </button>

      <p className="text-center text-xs text-[#4A4A4A]">
        We&apos;ll review your details and reply within two business days.
      </p>
    </form>
  )
}
