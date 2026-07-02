'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Marquee } from '@/components/ui/marquee'

export function CTASection() {
  return (
    <section id="cta" className="noise-texture relative overflow-hidden bg-[#0A0A0B] py-28 md:py-40">
      {/* Giant background ticker */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-60"
        aria-hidden="true"
      >
        <Marquee speed={60}>
          {['Build', 'Grow', 'Automate'].map((word) => (
            <span
              key={word}
              className="display-xl flex items-center gap-16 whitespace-nowrap text-[22vw] leading-none text-outline-faint"
            >
              {word}
              <svg viewBox="0 0 24 24" className="h-[6vw] w-[6vw] text-[#E8503E]/30" fill="currentColor" aria-hidden="true">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
              </svg>
            </span>
          ))}
        </Marquee>
      </div>

      {/* Radial vignette to keep the centre legible */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(10,10,11,0.92) 0%, rgba(10,10,11,0.55) 45%, transparent 75%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="display-xl text-[clamp(2.8rem,7vw,6rem)] text-white"
        >
          Let&apos;s build
          <br />
          something{' '}
          <span className="text-gradient-brand">extraordinary.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-8 max-w-xl text-lg text-white/60"
        >
          Free consultation. Straight answers. A clear plan for how design,
          search and AI automation can move your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <MagneticButton href="/contact" strength={0.3}>
            <span
              className="inline-flex items-center gap-3 rounded-full bg-[#E8503E] px-12 py-6 text-lg font-bold text-white shadow-[0_20px_60px_rgba(232,80,62,0.35)] transition-all duration-300 hover:bg-[#D14535] hover:shadow-[0_20px_80px_rgba(232,80,62,0.5)] md:text-xl"
            >
              Start your project
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </MagneticButton>

          <p className="mt-8 text-sm text-white/50">
            Or email{' '}
            <a
              href="mailto:hello@origami-digital.co.za"
              className="text-white underline underline-offset-4 transition-colors hover:text-[#7CD4F5]"
            >
              hello@origami-digital.co.za
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
