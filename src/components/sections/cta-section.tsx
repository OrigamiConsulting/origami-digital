'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FadeIn } from '@/components/ui/fade-in';

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden px-4 py-20 md:py-28 lg:py-32"
      style={{
        background: 'linear-gradient(135deg, #141414 0%, #1a2a35 50%, #141414 100%)',
      }}
    >
      {/* Decorative gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-40 top-1/4 h-[400px] w-[400px] rounded-full opacity-15 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #0A8FBF, transparent 70%)' }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-40 bottom-1/4 h-[350px] w-[350px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #297373, transparent 70%)' }}
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <FadeIn>
          <h2 className="mb-6 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Ready to Transform Your Digital Presence?
          </h2>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="mx-auto mb-10 max-w-xl text-lg text-neutral-300 md:text-xl">
            Let&apos;s discuss how we can help your business build, grow, and
            automate.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-col items-center gap-6">
            <Button href="/contact" variant="primary" size="lg">
              Get a Free Consultation
            </Button>
            <p className="text-sm text-neutral-400">
              Or email us directly at{' '}
              <a
                href="mailto:hello@origami-digital.co.za"
                className="text-[#0A8FBF] underline underline-offset-2 transition-colors hover:text-[#087CA7]"
              >
                hello@origami-digital.co.za
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
