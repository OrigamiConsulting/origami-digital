'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const headlineWords = ['We', 'Build', 'Digital', 'Products', 'That', 'Perform'];

const trustIndicators = [
  'Next.js',
  'React',
  'AI-Powered',
  'Johannesburg',
];

export function Hero() {
  return (
    <section className="noise-texture relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-darker">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #0A8FBF, transparent 70%)' }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #297373, transparent 70%)' }}
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/3 top-2/3 h-[350px] w-[350px] rounded-full opacity-10 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #0A8FBF, transparent 70%)' }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-8 inline-flex"
        >
          <span className="inline-flex items-center rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-accent-blue shadow-[0_0_15px_rgba(10,143,191,0.15)]">
            AI-Augmented Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-6 font-display font-bold text-neutral-100">
          <span className="sr-only">We Build Digital Products That Perform</span>
          <span aria-hidden="true" className="flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-1 text-5xl md:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl"
        >
          From websites and apps to SEO and AI automation — we help South African
          businesses build, grow, and automate their digital presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Consultation
          </Button>
          <Button
            href="/work"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            See Our Work
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-neutral-400/60"
        >
          {trustIndicators.map((item, i) => (
            <span key={item} className="flex items-center">
              {i > 0 && (
                <span className="mr-2 text-neutral-400/30" aria-hidden="true">
                  &bull;
                </span>
              )}
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400/50"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
