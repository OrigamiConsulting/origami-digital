import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FreeAuditForm } from './form'

export const metadata: Metadata = {
  title: 'Free Website Audit — Find Out What\'s Holding You Back | Origami Digital',
  description:
    'Get a free personalised audit of your South African business website. Performance, SEO, design, AI search readiness. No obligation, no sales pitch.',
  alternates: { canonical: 'https://origami-digital.co.za/get-started/free-audit' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Free Website Audit — Find Out What\'s Holding You Back',
    description:
      'Get a free personalised audit of your South African business website. Performance, SEO, design, AI search readiness.',
    url: 'https://origami-digital.co.za/get-started/free-audit',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Website Audit — Find Out What\'s Holding You Back',
    description:
      'Free personalised audit of your website. Performance, SEO, design, AI search readiness.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Free Website Audit',
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
    'Free personalised website audit covering performance, SEO, design, and AI search readiness for South African businesses.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
    description: 'Free website audit — no obligation',
  },
}

const benefits = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance deep-dive',
    detail: 'Lighthouse scores, Core Web Vitals, load times on mobile. Hard numbers — not opinions.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO & AI search visibility',
    detail: 'Technical SEO health, keyword opportunities, and how your business appears in ChatGPT and Google AI answers.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Design & UX review',
    detail: 'Trust signals, CTA clarity, mobile experience, and the friction points costing you enquiries.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Top 5 quick wins',
    detail: 'A prioritised action list you can start implementing tomorrow — with or without us.',
  },
]

const included = [
  'Full Lighthouse performance report (performance, accessibility, best practices, SEO)',
  'Technical SEO check — meta tags, schema markup, canonical URLs, indexability',
  'Mobile responsiveness and Core Web Vitals (LCP, INP, CLS)',
  'AI search / GEO readiness — how your business appears to ChatGPT & Google AI Overviews',
  'Design & UX review — trust signals, CTA clarity, friction points',
  'Keyword opportunity scan — what you should be ranking for but aren\'t',
  'Competitor comparison — what the top 3 in your niche are doing differently',
  'Prioritised action plan with the 5 biggest wins ranked by effort-to-impact',
]

const faqs = [
  {
    q: 'Is this really free?',
    a: 'Yes, completely free. No credit card, no hidden upsell. We audit your site, send you the report, and leave the next step up to you.',
  },
  {
    q: 'What do I actually get?',
    a: 'A personalised PDF report covering performance, SEO, design, and AI search readiness — plus a prioritised list of the top 5 fixes that will have the biggest impact on your business.',
  },
  {
    q: 'How long does it take?',
    a: 'We typically deliver the audit within 3–5 business days of your submission. Complex sites or high-volume weeks can take up to 7 business days.',
  },
  {
    q: 'Will you try to sell me something?',
    a: 'No pitch, no pressure. At the end of the report you\'ll see an optional "want us to fix these" link — if you want to talk, we talk. If not, you\'ve still got a clear action plan you can hand to any developer.',
  },
]

export default function FreeAuditLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Minimal header */}
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
        {/* Hero + form */}
        <section className="noise-texture bg-[#141414] px-6 py-16 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8503E]/30 bg-[#E8503E]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8503E]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E8503E]">
                    Free Website Audit — No Obligation
                  </span>
                </div>

                <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Find out what&apos;s holding{' '}
                  <span className="text-[#E8503E]">your website back</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#B0B0B0]">
                  Get a personalised audit covering performance, SEO, design, and AI search readiness. No obligation. No sales pitch. Just actionable insights you can use with any developer.
                </p>

                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">100% free</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">3–5 day delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">No pressure</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {benefits.map((item) => (
                    <div
                      key={item.title}
                      className="flex gap-4 rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-4"
                    >
                      <div className="mt-0.5 flex-shrink-0 text-[#0A8FBF]">{item.icon}</div>
                      <div>
                        <p className="mb-0.5 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                          {item.title}
                        </p>
                        <p className="text-xs leading-relaxed text-[#8A8A8A]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E8503E]">
                  Free — No Credit Card Required
                </div>
                <h2 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Get your free audit
                </h2>
                <p className="mb-6 text-sm text-[#8A8A8A]">
                  Tell us about your website and we&apos;ll send you a personalised report within 3–5 days.
                </p>
                <FreeAuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                  What&apos;s included
                </p>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                  An audit built by a senior developer — not an automated tool
                </h2>
                <p className="mb-8 text-[#4A4A4A]">
                  Most free audits are one-click dashboards spitting out raw numbers. Ours is reviewed by Tinashe directly — 16+ years of senior dev and design experience, looking at your site the way a potential client would.
                </p>
              </div>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F5F5F5] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              Common questions
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

      {/* Minimal footer */}
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
