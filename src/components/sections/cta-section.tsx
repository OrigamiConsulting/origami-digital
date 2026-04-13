'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

export function CTASection() {
  return (
    <section id="cta" className="relative overflow-hidden py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A8FBF] to-[#297373] noise-texture" />
      <div className="absolute inset-0 bg-[#141414]/30" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-white">
            Ready to Build Something Exceptional?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <p className="text-lg text-white/80 mt-6 max-w-xl mx-auto">
            Let&apos;s discuss how we can help your business build, grow, and automate.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#EF6351] text-white rounded-full px-10 py-5 text-lg font-semibold mt-10 shadow-[0_0_40px_rgba(239,99,81,0.3)] hover:bg-[#D94F3F] hover:shadow-[0_0_50px_rgba(239,99,81,0.4)] hover:scale-[1.02] transition-all duration-200"
          >
            Get a Free Consultation
          </Link>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <p className="text-white/60 text-sm mt-6">
            Or email us at{' '}
            <a
              href="mailto:hello@origami-digital.co.za"
              className="text-white hover:text-white/80 transition-colors underline underline-offset-2"
            >
              hello@origami-digital.co.za
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
