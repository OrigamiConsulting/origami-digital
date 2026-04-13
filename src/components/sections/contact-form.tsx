'use client';

import { useState, type FormEvent } from 'react';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const serviceOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'website-design', label: 'Website Design' },
  { value: 'mobile-app', label: 'Mobile App' },
  { value: 'custom-software', label: 'Custom Software' },
  { value: 'seo', label: 'SEO' },
  { value: 'google-ads', label: 'Google Ads' },
  { value: 'ai-automation', label: 'AI Automation' },
  { value: 'other', label: 'Other' },
];

const budgetOptions = [
  { value: '', label: 'Select a budget range...' },
  { value: 'under-30k', label: 'Under R30,000' },
  { value: '30k-75k', label: 'R30,000 – R75,000' },
  { value: '75k-150k', label: 'R75,000 – R150,000' },
  { value: '150k-plus', label: 'R150,000+' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const inputClasses =
  'w-full rounded-xl border border-[#DEDEDE] bg-white px-4 py-3 font-[family-name:var(--font-body)] text-[#1E1E1E] placeholder-[#8A8A8A] transition-all duration-200 focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]';

const labelClasses = 'mb-1.5 block text-sm font-semibold text-[#1E1E1E]';

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-[#F5F5F5] px-8 py-16 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A8FBF]/10">
          <svg
            className="h-8 w-8 text-[#0A8FBF]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mb-2 text-2xl font-bold text-[#1E1E1E]">
          Thank you for reaching out!
        </h3>
        <p className="max-w-md text-[#4A4A4A]">
          We&apos;ve received your message and will get back to you within one
          business day. Looking forward to chatting about your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          Something went wrong. Please try again or email us directly at{' '}
          <a href="mailto:hello@origami-digital.co.za" className="font-semibold underline">
            hello@origami-digital.co.za
          </a>
        </div>
      )}
      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClasses}>
          Name <span className="text-[#E8503E]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className={inputClasses}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email <span className="text-[#E8503E]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.co.za"
          className={inputClasses}
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClasses}>
          Phone <span className="text-[#8A8A8A] font-normal">(optional)</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+27 XX XXX XXXX"
          className={inputClasses}
        />
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className={labelClasses}>
          Service Interest <span className="text-[#E8503E]">*</span>
        </label>
        <select
          id="service"
          name="service"
          required
          value={formData.service}
          onChange={handleChange}
          className={inputClasses}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Budget Range */}
      <div>
        <label htmlFor="budget" className={labelClasses}>
          Budget Range
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className={inputClasses}
        >
          {budgetOptions.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={!opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message <span className="text-[#E8503E]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your project, goals, and any specific requirements..."
          className={`${inputClasses} resize-y`}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center rounded-xl bg-[#E8503E] px-8 py-4 text-lg font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#D14535] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8503E] focus-visible:ring-offset-2 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <svg
              className="mr-2 h-5 w-5 animate-spin"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
