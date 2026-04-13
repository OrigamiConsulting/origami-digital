'use client'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import Link from 'next/link'
import Image from 'next/image'

export function ServicesOverview() {
  return (
    <section id="services" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <p className="font-[family-name:var(--font-body)] font-semibold text-xs tracking-[0.15em] uppercase text-[#0A8FBF]">
            WHAT WE DO
          </p>
          <h2 className="section-heading text-[#1E1E1E] mt-3">
            Three pillars. One mission.
          </h2>
          <p className="text-[#4A4A4A] text-lg max-w-2xl mt-4">
            Everything you need to build, grow, and automate your digital presence.
          </p>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* BUILD Card — 3 of 5 columns */}
          <ScrollReveal delay={0} className="md:col-span-3">
            <div className="relative bg-[#F8F8F8] border border-neutral-200/50 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
              {/* Corner gradient blob */}
              <div className="absolute -top-24 -left-24 w-[200px] h-[200px] rounded-full bg-[#0A8FBF] opacity-[0.06] blur-3xl pointer-events-none" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                  alt="Code on screen representing digital product development"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Overline */}
              <p className="font-[family-name:var(--font-body)] font-semibold text-xs tracking-[0.15em] uppercase text-[#0A8FBF] mb-2">
                BUILD
              </p>

              {/* Heading */}
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1E1E1E] mb-4">
                Digital Product Development
              </h3>

              {/* Service items */}
              <ul className="space-y-2.5 mb-6">
                {['Website Design & Development', 'Mobile App Development', 'Custom Software & SaaS', 'UI/UX Design'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[#0A8FBF] shrink-0" />
                    <span className="text-[#4A4A4A] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[#0A8FBF] font-semibold text-sm group/link"
              >
                Explore Build Services
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>

          {/* GROW Card — 2 of 5 columns */}
          <ScrollReveal delay={100} className="md:col-span-2">
            <div className="relative bg-[#F8F8F8] border border-neutral-200/50 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 h-full">
              {/* Corner gradient blob */}
              <div className="absolute -top-24 -left-24 w-[200px] h-[200px] rounded-full bg-[#297373] opacity-[0.06] blur-3xl pointer-events-none" />

              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Analytics dashboard representing search and digital visibility"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Overline */}
              <p className="font-[family-name:var(--font-body)] font-semibold text-xs tracking-[0.15em] uppercase text-[#297373] mb-2">
                GROW
              </p>

              {/* Heading */}
              <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1E1E1E] mb-4">
                Search & Digital Visibility
              </h3>

              {/* Service items */}
              <ul className="space-y-2.5 mb-6">
                {['SEO & GEO', 'Google Ads', 'Content Strategy', 'Analytics & Optimisation'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[#297373] shrink-0" />
                    <span className="text-[#4A4A4A] text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Arrow link */}
              <Link
                href="/services"
                className="inline-flex items-center gap-1 text-[#297373] font-semibold text-sm group/link"
              >
                Explore Grow Services
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>

        {/* AUTOMATE Card — full width */}
        <div className="mt-6">
          <ScrollReveal delay={200}>
            <div className="relative bg-[#F8F8F8] border border-neutral-200/50 rounded-3xl p-8 md:p-10 overflow-hidden hover:-translate-y-1 hover:shadow-xl hover:border-[#E8503E]/30 transition-all duration-300">
              {/* Corner gradient blob */}
              <div className="absolute -top-24 -left-24 w-[200px] h-[200px] rounded-full bg-[#E8503E] opacity-[0.05] blur-3xl pointer-events-none" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left column */}
                <div>
                  {/* Overline */}
                  <p className="font-[family-name:var(--font-body)] font-semibold text-xs tracking-[0.15em] uppercase text-[#E8503E] mb-2">
                    AUTOMATE
                  </p>

                  {/* Heading */}
                  <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-[#1E1E1E] mb-4">
                    AI-Powered Business Solutions
                  </h3>

                  {/* Service items in 2-column grid */}
                  <ul className="grid grid-cols-2 gap-2.5 mb-6">
                    {['Workflow Automation', 'AI Chatbots', 'Document Processing', 'Custom Business Tools'].map((item) => (
                      <li key={item} className="flex items-center gap-2.5">
                        <span className="block h-1.5 w-1.5 rounded-full bg-[#E8503E] shrink-0" />
                        <span className="text-[#4A4A4A] text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Arrow link */}
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-1 text-[#E8503E] font-semibold text-sm group/link"
                  >
                    Explore Automation Services
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">&rarr;</span>
                  </Link>
                </div>

                {/* Right column — Image */}
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10]">
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                    alt="Abstract AI technology visual representing automation solutions"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
