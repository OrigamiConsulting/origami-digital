import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SeoAuditForm } from './form'

export const metadata: Metadata = {
  title: 'Free SEO Audit — Find Out Why Your Website Isn\'t Ranking | Origami Digital',
  description:
    'Get a free SEO audit for your South African business website. Discover why you\'re not ranking on Google and get a clear roadmap to the first page. No obligation.',
  alternates: { canonical: 'https://origami-digital.co.za/get-started/seo-audit' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Free SEO Audit — Find Out Why Your Website Isn\'t Ranking',
    description:
      'Get a free SEO audit for your South African business website. Discover why you\'re not ranking on Google and get a clear roadmap to the first page.',
    url: 'https://origami-digital.co.za/get-started/seo-audit',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free SEO Audit — Find Out Why Your Website Isn\'t Ranking',
    description:
      'Get a free SEO audit for your South African business website. Discover why you\'re not ranking on Google.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SEO Audit & Search Engine Optimisation',
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
    'Comprehensive SEO audits and search engine optimisation for South African businesses. Identify why your website isn\'t ranking and get a clear improvement roadmap.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
    description: 'Free initial SEO audit',
  },
}

const problems = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'You\'re invisible on Google',
    detail: 'Potential customers search for your services daily — but they find your competitors first.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
      </svg>
    ),
    problem: 'Competitors are outranking you',
    detail: 'Smaller, younger businesses are getting more traffic because their SEO is better structured.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'You had rankings — then lost them',
    detail: 'Algorithm updates, technical issues, or stale content can wipe out years of SEO progress overnight.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'You don\'t know what\'s wrong',
    detail: 'You\'ve tried fixing things but nothing sticks. You need a clear diagnosis before you can treat the problem.',
  },
]

const auditCovers = [
  'Technical SEO — crawlability, indexing, site speed, mobile-friendliness',
  'On-page SEO — title tags, meta descriptions, heading structure, content quality',
  'Keyword gaps — what you should be ranking for but aren\'t',
  'Competitor analysis — why they outrank you and how to close the gap',
  'Backlink profile — authority assessment and toxic link identification',
  'Local SEO — Google Business Profile optimisation for Johannesburg searches',
  'Core Web Vitals — Google\'s page experience signals affecting your rankings',
]

const faqs = [
  {
    q: 'Is the SEO audit really free?',
    a: 'Yes, completely. We review your website, run it through our audit tools, and provide you with a summary of findings and priority recommendations — at no cost and no obligation.',
  },
  {
    q: 'What do I get from the audit?',
    a: 'You\'ll receive a summary report covering your technical SEO health, keyword gaps, competitor comparison, and the top 5 actions that will have the biggest impact on your rankings.',
  },
  {
    q: 'How long does the audit take?',
    a: 'We typically deliver audit findings within 3–5 business days of receiving your website URL and details.',
  },
  {
    q: 'Do you guarantee first-page rankings?',
    a: 'Anyone who guarantees specific rankings is misleading you — Google doesn\'t allow it. What we can guarantee is that we use proven, ethical SEO practices that deliver sustained improvements over time.',
  },
]

export default function SeoAuditLandingPage() {
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

              {/* Left — headline + pain points */}
              <div>
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#E8503E]/30 bg-[#E8503E]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8503E]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#E8503E]">
                    Free SEO Audit — No Obligation
                  </span>
                </div>

                <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Find Out Why Your Website{' '}
                  <span className="text-[#E8503E]">Isn&apos;t Ranking</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#B0B0B0]">
                  We audit your website and tell you exactly what&apos;s holding you back from Google&apos;s first page — for free. No jargon, no fluff. Just clear answers and a practical roadmap.
                </p>

                {/* Trust signals */}
                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">100% free audit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Results in 3–5 days</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">No sales pressure</span>
                  </div>
                </div>

                {/* Problem cards */}
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {problems.map((item) => (
                    <div
                      key={item.problem}
                      className="flex gap-4 rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-4"
                    >
                      <div className="mt-0.5 flex-shrink-0 text-[#8A8A8A]">{item.icon}</div>
                      <div>
                        <p className="mb-0.5 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                          {item.problem}
                        </p>
                        <p className="text-xs leading-relaxed text-[#8A8A8A]">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form card */}
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E8503E]">
                  Free — No Credit Card Required
                </div>
                <h2 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Get your free SEO audit
                </h2>
                <p className="mb-6 text-sm text-[#8A8A8A]">
                  Enter your details below and we&apos;ll analyse your website and send you a personalised report.
                </p>
                <SeoAuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── What the audit covers ── */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                  What&apos;s included
                </p>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                  A complete picture of your SEO health
                </h2>
                <p className="mb-8 text-[#4A4A4A]">
                  We dig into every layer of your website&apos;s SEO — technical, content, authority, and local signals. You&apos;ll know exactly what&apos;s working, what isn&apos;t, and what to fix first.
                </p>
                <ul className="space-y-3">
                  {auditCovers.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm text-[#4A4A4A]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stat block */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { stat: '75%', label: 'of users never scroll past the first page of Google results' },
                  { stat: '53%', label: 'of website traffic comes from organic search' },
                  { stat: '3.5B', label: 'Google searches happen every single day' },
                  { stat: '#1', label: 'result gets 10x more clicks than the #10 result' },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="rounded-xl bg-[#F5F5F5] p-5 text-center"
                  >
                    <p className="mb-1 font-[family-name:var(--font-display)] text-3xl font-bold text-[#0A8FBF]">
                      {item.stat}
                    </p>
                    <p className="text-xs leading-snug text-[#4A4A4A]">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-[#F5F5F5] px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              Questions about the audit
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
