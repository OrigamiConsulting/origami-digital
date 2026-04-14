import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WebsiteDesignForm } from './form'

export const metadata: Metadata = {
  title: 'Professional Website Design Johannesburg | Get a Free Consultation — Origami Digital',
  description:
    'Get a high-performance website built for your Johannesburg business. Fast, mobile-first, SEO-optimised. Free consultation with a senior developer. No agency overhead.',
  alternates: { canonical: 'https://origami-digital.co.za/get-started/website-design' },
  robots: { index: false, follow: false }, // Keep ads pages out of organic results
  openGraph: {
    title: 'Professional Website Design Johannesburg | Free Consultation',
    description:
      'Get a high-performance website built for your Johannesburg business. Fast, mobile-first, SEO-optimised. Free consultation with a senior developer.',
    url: 'https://origami-digital.co.za/get-started/website-design',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Website Design Johannesburg | Free Consultation',
    description:
      'Get a high-performance website built for your Johannesburg business. Fast, mobile-first, SEO-optimised.',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design & Development',
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
    'Professional website design and development for South African businesses. Mobile-first, fast-loading, SEO-optimised websites built on modern technology.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'ZAR',
    priceRange: 'R30,000 – R150,000+',
  },
}

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Blazing Fast',
    description: 'Built for 95+ Lighthouse scores. Load times under 2.5 seconds — because slow websites lose customers.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile-First',
    description: 'Over 60% of South African web traffic is mobile. Your website works flawlessly on every screen size.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    title: 'SEO-Optimised',
    description: 'Built for Google from day one. Proper meta tags, structured data, fast loading, and clean code that search engines love.',
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Conversion-Focused',
    description: 'Every design decision is made to turn visitors into enquiries. Clear calls to action, trust signals, and persuasive copy.',
  },
]

const projects = [
  {
    name: 'ImpactRoots',
    url: 'impactroots.co.za',
    category: 'B2B Consulting',
    description: 'Corporate website for a skills development and B-BBEE consulting firm.',
  },
  {
    name: 'Origami Finance',
    url: 'origami-finance.co.za',
    category: 'SaaS Platform',
    description: 'Invoicing and financial management SaaS platform for South African businesses.',
  },
  {
    name: 'Origami Design',
    url: 'origami-design.co',
    category: 'Interior Design',
    description: 'AI-enhanced service site for a boutique interior design studio.',
  },
]

const faqs = [
  {
    q: 'How much does a website cost?',
    a: 'Our websites range from R30,000 for a professional business site to R150,000+ for complex web applications. We provide a fixed-price quote after the initial consultation — no surprises.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'A professional business website typically takes 4–6 weeks from kick-off to launch. More complex projects with custom functionality can take 8–12 weeks.',
  },
  {
    q: 'Do you offer ongoing support and updates?',
    a: 'Yes. We offer monthly maintenance and support packages that cover hosting management, security updates, content updates, and performance monitoring.',
  },
  {
    q: 'Will my website rank on Google?',
    a: "Every website we build is technically SEO-optimised from the start. For ongoing SEO content and link building, we offer a separate SEO service that layers on top of the website build.",
  },
]

export default function WebsiteDesignLandingPage() {
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

              {/* Left — headline + benefits */}
              <div>
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-4 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0A8FBF]" />
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
                    Website Design — Johannesburg
                  </span>
                </div>

                <h1 className="mb-5 font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] tracking-tight text-white md:text-5xl">
                  Get a Professional Website That Actually{' '}
                  <span className="text-[#0A8FBF]">Converts</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-[#B0B0B0]">
                  We build high-performance websites for Johannesburg and South African businesses that load fast, rank on Google, and turn visitors into customers — without the agency markup.
                </p>

                {/* Trust bar */}
                <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">10+ years experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Fixed-price quotes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-5 w-5 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-[#DEDEDE]">Johannesburg-based</span>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {benefits.map((benefit) => (
                    <div
                      key={benefit.title}
                      className="flex gap-4 rounded-xl border border-[#2A2A2A] bg-[#1E1E1E] p-4"
                    >
                      <div className="mt-0.5 flex-shrink-0 text-[#0A8FBF]">{benefit.icon}</div>
                      <div>
                        <h3 className="mb-1 font-[family-name:var(--font-display)] text-sm font-bold text-white">
                          {benefit.title}
                        </h3>
                        <p className="text-xs leading-relaxed text-[#8A8A8A]">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — form card */}
              <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8 lg:sticky lg:top-24">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
                  Free Consultation
                </div>
                <h2 className="mb-1 font-[family-name:var(--font-display)] text-2xl font-bold text-white">
                  Tell us about your project
                </h2>
                <p className="mb-6 text-sm text-[#8A8A8A]">
                  No obligation. We&apos;ll review your enquiry and respond within one business day.
                </p>
                <WebsiteDesignForm />
              </div>
            </div>
          </div>
        </section>

        {/* ── Social proof — portfolio ── */}
        <section className="bg-[#F5F5F5] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                Recent Work
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                Projects We&apos;ve Delivered
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-xl border border-[#DEDEDE] bg-white p-6 shadow-sm"
                >
                  <div className="mb-3 inline-block rounded-full bg-[#0A8FBF]/10 px-3 py-1 text-xs font-semibold text-[#0A8FBF]">
                    {project.category}
                  </div>
                  <h3 className="mb-1 font-[family-name:var(--font-display)] text-lg font-bold text-[#1E1E1E]">
                    {project.name}
                  </h3>
                  <p className="mb-2 text-sm text-[#4A4A4A]">{project.description}</p>
                  <p className="text-xs text-[#8A8A8A]">{project.url}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-white px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              Common Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="rounded-xl border border-[#DEDEDE] p-5">
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
      <footer className="border-t border-[#DEDEDE] bg-[#F5F5F5] px-6 py-8">
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
