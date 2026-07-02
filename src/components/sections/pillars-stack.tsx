'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

type Pillar = {
  number: string
  name: string
  tagline: string
  description: string
  services: { label: string; href: string }[]
  exploreHref: string
  accent: string
  accentSoft: string
  bg: string
  glow: string
}

const PILLARS: Pillar[] = [
  {
    number: '01',
    name: 'Build',
    tagline: 'Digital products that perform',
    description:
      'From concept to launch — websites, apps and platforms engineered for speed, polish and conversion. Design and code from one senior hand.',
    services: [
      { label: 'Website Design & Development', href: '/services/website-design' },
      { label: 'Mobile App Development', href: '/services/mobile-apps' },
      { label: 'Custom Software & SaaS', href: '/services/custom-software' },
      { label: 'UI/UX Design', href: '/services/website-design' },
    ],
    exploreHref: '/services/website-design',
    accent: '#0A8FBF',
    accentSoft: 'rgba(10,143,191,0.12)',
    bg: '#0C1218',
    glow: 'radial-gradient(ellipse at 80% 20%, rgba(10,143,191,0.14), transparent 55%)',
  },
  {
    number: '02',
    name: 'Grow',
    tagline: 'Visibility that compounds',
    description:
      'Get found on Google — and now in AI answers too. Search strategy built for the era of ChatGPT, Gemini and AI Overviews, backed by measurable results.',
    services: [
      { label: 'SEO & Generative Engine Optimisation', href: '/services/seo' },
      { label: 'Google Ads Management', href: '/services/google-ads' },
      { label: 'Content Strategy', href: '/services/seo' },
      { label: 'Analytics & Conversion Optimisation', href: '/services/seo' },
    ],
    exploreHref: '/services/seo',
    accent: '#35A3A3',
    accentSoft: 'rgba(41,115,115,0.16)',
    bg: '#0B1414',
    glow: 'radial-gradient(ellipse at 80% 20%, rgba(41,115,115,0.18), transparent 55%)',
  },
  {
    number: '03',
    name: 'Automate',
    tagline: 'AI doing the busywork',
    description:
      'AI agents that answer enquiries, process documents and keep your systems in sync — around the clock. The pillar most agencies can’t offer.',
    services: [
      { label: 'Workflow Automation', href: '/services/ai-automation' },
      { label: 'AI Chatbots & Customer Service', href: '/services/ai-automation' },
      { label: 'Document Processing', href: '/services/ai-automation' },
      { label: 'Custom Business Tools', href: '/services/custom-software' },
    ],
    exploreHref: '/services/ai-automation',
    accent: '#E8503E',
    accentSoft: 'rgba(232,80,62,0.12)',
    bg: '#170F0D',
    glow: 'radial-gradient(ellipse at 80% 20%, rgba(232,80,62,0.14), transparent 55%)',
  },
]

function PillarPanel({ pillar, index }: { pillar: Pillar; index: number }) {
  return (
    <div
      className="lg:sticky top-0 flex min-h-[100svh] items-center overflow-hidden"
      style={{
        backgroundColor: pillar.bg,
        zIndex: index + 1,
        borderRadius: index > 0 ? '2.5rem 2.5rem 0 0' : undefined,
        boxShadow: index > 0 ? '0 -30px 60px rgba(0,0,0,0.55)' : undefined,
      }}
    >
      <div className="absolute inset-0" style={{ background: pillar.glow }} aria-hidden="true" />
      <div className="grid-lines absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 px-6 py-24 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20 lg:px-16">
        {/* Left: giant identity */}
        <div>
          <span
            className="display-xl block text-[clamp(5rem,14vw,11rem)] leading-none text-outline-faint select-none"
            aria-hidden="true"
          >
            {pillar.number}
          </span>
          <h3
            className="display-xl mt-2 text-[clamp(3rem,8vw,6.5rem)]"
            style={{ color: pillar.accent }}
          >
            {pillar.name}
          </h3>
          <p className="mt-4 font-[family-name:var(--font-display)] text-xl font-medium text-white/80 md:text-2xl">
            {pillar.tagline}
          </p>
        </div>

        {/* Right: detail */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
          >
            {pillar.description}
          </motion.p>

          <ul className="mt-10">
            {PILLARS[index].services.map((service, i) => (
              <motion.li
                key={service.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={service.href}
                  className="group flex items-center justify-between border-b border-white/10 py-5 transition-colors duration-300 hover:border-white/30"
                >
                  <span className="flex items-center gap-4">
                    <span
                      className="font-[family-name:var(--font-mono)] text-xs"
                      style={{ color: pillar.accent }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-[family-name:var(--font-display)] text-lg font-medium text-white/85 transition-transform duration-300 group-hover:translate-x-1.5 md:text-xl">
                      {service.label}
                    </span>
                  </span>
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all duration-300 group-hover:text-white"
                    style={{ transitionProperty: 'all' }}
                  >
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10"
          >
            <Link
              href={pillar.exploreHref}
              className="inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 hover:gap-4"
              style={{ backgroundColor: pillar.accentSoft, color: pillar.accent }}
            >
              Explore {pillar.name}
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export function PillarsStack() {
  return (
    <section id="services" className="relative bg-[#0A0A0B]">
      {/* Lead-in header */}
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-16 sm:px-10 md:pt-32 md:pb-24 lg:px-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-white/40">
            02 — What we do
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h2 className="display-xl max-w-4xl text-[clamp(2.6rem,6.5vw,5.5rem)] text-white">
          Three pillars.
          <br />
          <span className="text-outline">One studio.</span>
        </h2>
      </div>

      {/* Sticky-stacking panels */}
      <div className="relative">
        {PILLARS.map((pillar, index) => (
          <PillarPanel key={pillar.name} pillar={pillar} index={index} />
        ))}
      </div>
    </section>
  )
}
