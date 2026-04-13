'use client'

import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { MagneticButton } from '@/components/ui/magnetic-button'

export function CTASection() {
  return (
    <section id="cta" className="noise-texture relative overflow-hidden py-24 md:py-32 px-6 bg-[#141414]">
      {/* Gradient background layer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #0A8FBF 0%, #297373 40%, #1E1E1E 100%)',
        }}
        aria-hidden="true"
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Decorative rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div
          className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-white/[0.06]"
          style={{ animation: 'cta-spin-slow 60s linear infinite' }}
        />
        <div
          className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] rounded-full border border-white/[0.08]"
          style={{ animation: 'cta-spin-slow 45s linear infinite reverse' }}
        />
      </div>

      <style>{`
        @keyframes cta-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

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
          <div className="mt-10">
            <MagneticButton href="/contact">
              <span className="inline-flex items-center justify-center bg-white text-[#1E1E1E] rounded-full px-10 py-5 text-lg font-bold shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:bg-neutral-100 hover:shadow-[0_0_60px_rgba(255,255,255,0.25)] hover:scale-[1.02] transition-all duration-200">
                Get a Free Consultation
              </span>
            </MagneticButton>
          </div>
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
