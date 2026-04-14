import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { AiConsultationForm } from './form'

export const metadata: Metadata = {
  title: 'Free AI Business Consultation — Automate Your Business with AI | Origami Digital',
  description:
    'Book a free AI consultation for your South African business. Discover how to automate repetitive tasks, reduce costs, and scale faster with AI-powered workflows.',
  alternates: { canonical: 'https://origami-digital.co.za/get-started/ai-consultation' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Free AI Business Consultation — Automate with AI',
    description:
      'Book a free AI consultation for your South African business. Discover how to automate repetitive tasks, reduce costs, and scale faster.',
    url: 'https://origami-digital.co.za/get-started/ai-consultation',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Business Consultation — Automate with AI',
    description:
      'Book a free AI consultation for your South African business. Automate tasks, reduce costs, and scale faster.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI Business Automation Consultation',
  provider: {
    '@type': 'ProfessionalService',
    name: 'Origami Digital',
    url: 'https://origami-digital.co.za',
    telephone: '+27781900107',
    email: 'hello@origami-digital.co.za',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bedfordview',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
  },
  areaServed: { '@type': 'Country', name: 'South Africa' },
  description:
    'AI business automation consulting for South African SMEs. Workflow automation, AI chatbots, document processing, and custom AI-powered tools.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
    description: 'Free 45-minute AI consultation',
  },
}

const useCases = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'AI Customer Service',
    description: 'Handle customer enquiries 24/7 with an AI assistant that knows your business, products, and policies — without hiring extra staff.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: 'Document Processing',
    description: 'Automatically extract data from invoices, contracts, and forms. Eliminate manual data entry and the errors that come with it.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Workflow Automation',
    description: 'Connect your existing tools and automate repetitive processes. Lead follow-ups, reporting, approvals, and more — running on autopilot.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Custom Business Dashboards',
    description: 'Replace spreadsheet chaos with a purpose-built dashboard. See your key metrics in real time and make faster decisions.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email & CRM Automation',
    description: 'Intelligent lead nurturing, automated follow-ups, and personalised email sequences that run without manual effort.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Custom AI Tools',
    description: 'Bespoke internal tools built around your specific workflows — quotation generators, compliance checkers, inventory assistants, and more.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Book your consultation',
    description: 'Fill in the form and we\'ll schedule a 45-minute video call at a time that suits you.',
  },
  {
    step: '02',
    title: 'We map your workflow',
    description: 'We listen, ask the right questions, and identify where AI can deliver the highest return in your specific business.',
  },
  {
    step: '03',
    title: 'You get a clear roadmap',
    description: 'We send you a written summary of recommendations — practical, prioritised, with realistic timelines and costs. No buzzwords.',
  },
]

const faqs = [
  {
    q: 'Is AI automation only for big companies?',
    a: 'Not at all. In fact, SMEs often see the fastest ROI from AI automation because every hour saved directly impacts the owner or a small team. Most of our automation projects start at under R20,000.',
  },
  {
    q: 'Do we need to replace our existing software?',
    a: 'Almost never. We typically integrate AI capabilities into your existing systems — whether that\'s an email platform, accounting software, WhatsApp, or spreadsheets. We work with what you have.',
  },
  {
    q: 'How long does it take to implement?',
    a: 'Simple automations can be live in 1–2 weeks. More complex custom tools typically take 4–8 weeks. We\'ll give you a precise estimate after the consultation.',
  },
  {
    q: 'What if AI makes mistakes?',
    a: 'We build AI systems with human oversight built in. Complex decisions still go to a human. AI handles the repetitive, rule-based work — freeing you up for the high-value decisions.',
  },
]

export default function AiConsultationLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Minimal header — logo only ── */}
      <header className="sticky top-0 z-50 border-b border-[#2A2A2A] bg-[#141414]/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" aria-label="Origami Digital — back to homepage">
            <Image
              src="/images/logo/origami-horse.png"
              alt="Origami Digital"
              width={120}
              height={36}
              className="h-8 w-auto"
              priority
            />
          </Link>
          <a
            href="tel:+27781900107"
            className="text-sm font-semibold text-[#0A8FBF] transition-colors hover:text-white"
          >
            +27 (0)78 190 0107
          </a>
        </div>
      </header>

      <main>
        {/* ── Hero + Form ── */}
        <section className="noise-texture bg-[#141414] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">

              {/* Left — headline + use cases */}
              <div>
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#297373]/40 bg-[#297373]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#297373]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#347F7F]">
                    AI Automation — Free Consultation
                  </span>
                </div>

                <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Automate Your Business with AI —{' '}
                  <span className="text-[#0A8FBF]">Free Consultation</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#B0B0B0]">
                  Most South African businesses are losing hours every week to tasks that AI could handle in seconds. In a 45-minute consultation, we&apos;ll identify your biggest automation opportunities and show you exactly what&apos;s possible.
                </p>

                {/* Trust signals */}
                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">45-min video call</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Written roadmap included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">No obligation</span>
                  </div>
                </div>

                {/* How it works */}
                <div className="space-y-4">
                  {howItWorks.map((step) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0A8FBF]/40 bg-[#0A8FBF]/10">
                          <span className="font-[family-name:var(--font-display)] text-xs font-bold text-[#0A8FBF]">
                            {step.step}
                          </span>
                        </div>
                      </div>
                      <div className="pb-4 border-b border-[#2A2A2A] last:border-0 last:pb-0">
                        <p className="mb-0.5 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                          {step.title}
                        </p>
                        <p className="text-sm text-[#8A8A8A]">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form card */}
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#347F7F]">
                  Free — 45 Minutes — No Obligation
                </div>
                <h2 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Book your AI consultation
                </h2>
                <p className="mb-6 text-sm text-[#8A8A8A]">
                  Tell us a bit about your business and we&apos;ll reach out to schedule your session.
                </p>
                <AiConsultationForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── AI use cases grid ── */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                What we can automate
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                AI automation for South African businesses
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[#4A4A4A]">
                These are the most common areas where our clients save time and money. If you don&apos;t see your use case listed — it doesn&apos;t mean it&apos;s not possible. Book a call and let&apos;s explore it.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {useCases.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-[#DEDEDE] bg-[#F5F5F5] p-5 transition-shadow hover:shadow-md"
                >
                  <div className="mb-3 text-[#0A8FBF]">{item.icon}</div>
                  <h3 className="mb-2 font-[family-name:var(--font-display)] font-bold text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Social proof callout ── */}
        <section className="noise-texture bg-[#1E1E1E] px-6 py-14">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
              The SA advantage
            </p>
            <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-white md:text-3xl">
              Most South African businesses haven&apos;t automated yet
            </h2>
            <p className="text-lg text-[#B0B0B0]">
              That&apos;s your competitive opportunity. While your competitors are still doing things manually, you can be running leaner, responding faster, and serving customers better — with AI doing the heavy lifting.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { stat: '40%', label: 'average time saved on admin tasks with workflow automation' },
                { stat: '3×', label: 'faster response times with AI customer service tools' },
                { stat: '90%', label: 'reduction in manual data entry errors with AI document processing' },
              ].map((item) => (
                <div key={item.stat} className="rounded-xl border border-[#2A2A2A] bg-[#141414] p-5">
                  <p className="mb-1 font-[family-name:var(--font-display)] text-3xl font-bold text-[#0A8FBF]">
                    {item.stat}
                  </p>
                  <p className="text-xs leading-snug text-[#8A8A8A]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#F5F5F5] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              Questions about AI automation
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-[#DEDEDE] bg-white p-5">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] font-bold text-[#1E1E1E]">
                    {faq.q}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#4A4A4A]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── Minimal footer ── */}
      <footer className="border-t border-[#DEDEDE] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center text-sm text-[#8A8A8A] sm:flex-row sm:text-left">
          <p>
            &copy; {new Date().getFullYear()} Origami Digital &mdash; Bedfordview, Johannesburg
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-end">
            <a href="tel:+27781900107" className="hover:text-[#0A8FBF] transition-colors">
              +27 (0)78 190 0107
            </a>
            <a href="mailto:hello@origami-digital.co.za" className="hover:text-[#0A8FBF] transition-colors">
              hello@origami-digital.co.za
            </a>
            <Link href="/privacy" className="hover:text-[#0A8FBF] transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </>
  )
}
