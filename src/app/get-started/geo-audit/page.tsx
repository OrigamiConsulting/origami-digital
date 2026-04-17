import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { GeoAuditForm } from './form'

export const metadata: Metadata = {
  title: 'Free GEO Audit — Is Your Business Invisible to AI Search? | Origami Digital',
  description:
    'ChatGPT, Google AI Overviews, and Perplexity are how people find businesses now. Get a free Generative Engine Optimisation audit for your South African business.',
  alternates: { canonical: 'https://origami-digital.co.za/get-started/geo-audit' },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Free GEO Audit — Is Your Business Invisible to AI Search?',
    description:
      'Get cited by ChatGPT, Google AI Overviews, and Perplexity. Free Generative Engine Optimisation audit for South African businesses.',
    url: 'https://origami-digital.co.za/get-started/geo-audit',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free GEO Audit — Is Your Business Invisible to AI Search?',
    description:
      'Get cited by ChatGPT, Google AI Overviews, and Perplexity. Free GEO audit for SA businesses.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Generative Engine Optimisation (GEO) Audit',
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
    'Free Generative Engine Optimisation audit — how your business appears to ChatGPT, Google AI Overviews, and Perplexity.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'ZAR',
    description: 'Free GEO audit — no obligation',
  },
}

const problems = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477-1 12-1s10 4.477 10 10c0 1.654-.402 3.214-1.113 4.589" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
      </svg>
    ),
    problem: 'Invisible to AI search',
    detail: 'When customers ask ChatGPT "who should I hire for X in Johannesburg?", your business isn\'t in the answer.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    problem: 'Competitors getting cited',
    detail: 'AI search gives ONE answer, not a list of links. If it\'s not you, you\'re losing the enquiry before the click.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    problem: 'Google traffic dropping',
    detail: 'AI Overviews are taking clicks away from traditional search results. If you\'re not optimised for both, your organic traffic is shrinking.',
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    problem: 'Nobody else is talking about GEO yet',
    detail: 'Most SA agencies are still selling 2022 SEO. The businesses that move on GEO now will dominate their niche before competitors catch up.',
  },
]

const auditCovers = [
  'AI search visibility test — we ask ChatGPT, Perplexity, and Google AI Overviews questions your customers would ask, and check if your business appears',
  'Competitor citation analysis — which competitors are being recommended instead of you, and why',
  'Schema markup audit — Organisation, Service, FAQ, LocalBusiness, HowTo — what\'s missing and where to add it',
  'Entity consistency check — NAP (Name, Address, Phone) data across your website, GBP, directories, and social',
  'Content structure review — is your content formatted for AI extraction (clear answers, definitions, comparisons)?',
  'Topical authority assessment — how deeply you\'ve covered your core service topics',
  'Specific GEO action plan — the 5 highest-impact changes to improve your AI search visibility',
]

const faqs = [
  {
    q: 'What is GEO, actually?',
    a: 'GEO (Generative Engine Optimisation) is the practice of structuring your website so that AI systems like ChatGPT, Perplexity, and Google AI Overviews understand your business and recommend it when users ask questions. Traditional SEO gets you ranked in a list; GEO gets you CITED in the AI-generated answer.',
  },
  {
    q: 'Do I still need traditional SEO?',
    a: 'Yes — SEO is the foundation that makes GEO possible. AI search engines largely pull from content that traditional search engines already trust. GEO is a layer on top of good SEO, not a replacement for it.',
  },
  {
    q: 'How is this different from your regular SEO audit?',
    a: 'The SEO audit focuses on Google rankings. The GEO audit focuses specifically on how AI search engines see and cite your business — a completely different set of signals, content structures, and schema requirements. Most of our clients eventually want both.',
  },
  {
    q: 'Is GEO actually worth investing in now?',
    a: 'Google AI Overviews appear on a growing share of SA searches. Perplexity and ChatGPT search are growing fast. The cost of getting ahead now is low because almost no SA agencies are doing it yet — the cost of catching up in 12 months will be much higher.',
  },
]

export default function GeoAuditLandingPage() {
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
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A8FBF]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
                    SA&apos;s first GEO-focused agency
                  </span>
                </div>

                <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Is your business{' '}
                  <span className="text-[#E8503E]">invisible to AI search?</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#B0B0B0]">
                  Google AI Overviews, ChatGPT, and Perplexity are how people find businesses now. If you&apos;re not optimised for AI search, you&apos;re losing enquiries to competitors who are — every single day.
                </p>

                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Free, no obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">3–5 day turnaround</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Actionable report</span>
                  </div>
                </div>

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

              <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#E8503E]">
                  Free GEO Audit — Limited Spots
                </div>
                <h2 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Get your free GEO audit
                </h2>
                <p className="mb-6 text-sm text-[#8A8A8A]">
                  We&apos;ll check how your business appears in ChatGPT, Perplexity, and Google AI Overviews, and send you a prioritised action plan.
                </p>
                <GeoAuditForm />
              </div>
            </div>
          </div>
        </section>

        {/* SEO vs GEO comparison */}
        <section className="bg-white px-6 py-16 md:py-20">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                The shift nobody&apos;s talking about
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                SEO gets you ranked. GEO gets you cited.
              </h2>
              <p className="mx-auto max-w-2xl text-[#4A4A4A]">
                Traditional search shows users a list of 10 blue links. AI search gives them ONE answer, with a handful of cited sources. The rules for getting picked are completely different.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-[#DEDEDE] bg-[#F5F5F5] p-6 md:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#8A8A8A]">
                  Traditional SEO
                </p>
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold text-[#1E1E1E]">
                  Appears in a list of 10 links
                </h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>• User sees multiple results and chooses</li>
                  <li>• Ranking #1 vs #10 makes a big difference</li>
                  <li>• Clicks are the primary outcome</li>
                  <li>• Backlinks + on-page optimisation are key signals</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-[#0A8FBF]/30 bg-gradient-to-br from-[#0A8FBF]/5 to-[#297373]/10 p-6 md:p-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
                  Generative Engine Optimisation
                </p>
                <h3 className="mb-4 font-[family-name:var(--font-display)] text-xl font-bold text-[#1E1E1E]">
                  Cited in the AI-generated answer
                </h3>
                <ul className="space-y-2 text-sm text-[#4A4A4A]">
                  <li>• AI picks ONE recommended answer (often with 2–4 citations)</li>
                  <li>• You&apos;re either cited or invisible — no middle ground</li>
                  <li>• Mentions and recommendations matter more than clicks</li>
                  <li>• Structured data + entity authority + extractable content are the signals</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What the audit covers */}
        <section className="bg-[#F5F5F5] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                  What you&apos;ll get
                </p>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                  An honest look at your AI search visibility — with a plan to fix it
                </h2>
                <p className="mb-8 text-[#4A4A4A]">
                  We don&apos;t do automated audits. Tinashe personally runs the same searches your customers are running — in ChatGPT, Perplexity, and Google — and documents exactly what&apos;s happening. You get the screenshots, the analysis, and the plan.
                </p>
              </div>
              <ul className="space-y-3">
                {auditCovers.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-xl border border-[#DEDEDE] bg-white p-4">
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
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              Questions about GEO
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-[#DEDEDE] bg-[#F5F5F5] p-5">
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
