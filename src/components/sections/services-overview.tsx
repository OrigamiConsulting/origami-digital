'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const pillars = [
  {
    number: '01',
    overline: 'BUILD',
    heading: 'Digital Product Development',
    description:
      'From concept to launch, we craft high-performance digital products that set you apart.',
    services: [
      'Website Design & Development',
      'Mobile App Development',
      'Custom Software & SaaS',
      'UI/UX Design',
    ],
    color: '#0A8FBF',
    href: '/services',
  },
  {
    number: '02',
    overline: 'GROW',
    heading: 'Search & Digital Visibility',
    description:
      'Get found by the right people. We drive organic and paid traffic that converts.',
    services: [
      'SEO & Generative Engine Optimisation',
      'Google Ads Management',
      'Content Strategy',
      'Analytics & Optimisation',
    ],
    color: '#297373',
    href: '/services',
  },
  {
    number: '03',
    overline: 'AUTOMATE',
    heading: 'AI-Powered Business Solutions',
    description:
      'Streamline operations and unlock new capabilities with intelligent automation.',
    services: [
      'Workflow Automation',
      'AI Chatbots',
      'Document Processing',
      'Custom Business Tools',
    ],
    color: '#E8503E',
    href: '/services',
  },
]

export function ServicesOverview() {
  return (
    <section id="services" className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-[family-name:var(--font-body)] text-sm font-semibold uppercase tracking-[0.2em] text-[#0A8FBF]">
              What We Do
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-[#1E1E1E] md:text-5xl">
              Three pillars. One mission.
            </h2>
            <p className="mt-4 font-[family-name:var(--font-body)] text-lg leading-relaxed text-[#4A4A4A]">
              We combine design, technology, and AI to deliver digital solutions
              that help your business build momentum, reach new audiences, and
              operate smarter.
            </p>
          </div>
        </ScrollReveal>

        {/* Decorative Divider */}
        <ScrollReveal delay={100}>
          <div className="mx-auto mt-14 mb-16 flex max-w-md items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#DEDEDE]" />
            <div className="h-2 w-2 rotate-45 border border-[#DEDEDE] bg-white" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#DEDEDE]" />
          </div>
        </ScrollReveal>

        {/* Pillar Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.number} delay={150 + index * 100}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#EBEBEB] bg-[#FAFAFA] p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#DEDEDE] hover:bg-white hover:shadow-lg md:p-10">
                {/* Accent Strip — left border that scales on hover */}
                <div
                  className="absolute top-0 left-0 h-full w-1 origin-top scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
                  style={{ backgroundColor: pillar.color }}
                />

                {/* Large Faded Number */}
                <span
                  className="pointer-events-none absolute top-4 right-6 select-none font-[family-name:var(--font-display)] text-[8rem] font-bold leading-none opacity-[0.04]"
                  aria-hidden="true"
                >
                  {pillar.number}
                </span>

                {/* Overline */}
                <p
                  className="relative font-[family-name:var(--font-body)] text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: pillar.color }}
                >
                  {pillar.overline}
                </p>

                {/* Heading */}
                <h3 className="relative mt-4 font-[family-name:var(--font-display)] text-2xl font-bold leading-tight text-[#1E1E1E]">
                  {pillar.heading}
                </h3>

                {/* Description */}
                <p className="relative mt-3 font-[family-name:var(--font-body)] text-sm leading-relaxed text-[#8A8A8A]">
                  {pillar.description}
                </p>

                {/* Service List */}
                <ul className="relative mt-8 flex-1 space-y-3.5">
                  {pillar.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 font-[family-name:var(--font-body)] text-sm text-[#4A4A4A]"
                    >
                      <span
                        className="mt-[7px] block h-1.5 w-1.5 flex-shrink-0 rounded-full transition-transform duration-300 group-hover:scale-125"
                        style={{ backgroundColor: pillar.color }}
                        aria-hidden="true"
                      />
                      {service}
                    </li>
                  ))}
                </ul>

                {/* Explore Link */}
                <div className="relative mt-10 border-t border-[#EBEBEB] pt-6">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center gap-2 font-[family-name:var(--font-body)] text-sm font-semibold transition-colors duration-300"
                    style={{ color: pillar.color }}
                  >
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
