'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { MagneticButton } from '@/components/ui/magnetic-button'

const HEADLINE_WORDS = ['We', 'Build', 'Digital', 'Products', 'That', 'Perform']

const STATS = [
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 95, suffix: '+', label: 'Lighthouse Scores' },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Small delay to ensure hydration is complete
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="noise-texture relative min-h-screen overflow-hidden bg-[#141414]">
      {/* Keyframes */}
      <style>{`
        @keyframes hero-orb-drift {
          0%   { transform: translate(-50%, -50%) scale(1); }
          25%  { transform: translate(-45%, -55%) scale(1.08); }
          50%  { transform: translate(-55%, -48%) scale(0.95); }
          75%  { transform: translate(-48%, -52%) scale(1.05); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes hero-scroll-dot {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50%      { transform: translateY(12px); opacity: 0.3; }
        }
      `}</style>

      {/* Dot-grid background texture */}
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />

      {/* Animated gradient orb */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2"
        style={{
          width: '900px',
          height: '900px',
          background:
            'radial-gradient(circle at 40% 40%, rgba(10, 143, 191, 0.15) 0%, rgba(41, 115, 115, 0.1) 40%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)',
          animation: 'hero-orb-drift 18s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Main content grid — text left, image right */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-32 lg:grid-cols-2 lg:gap-8 lg:px-12 xl:px-20">
        {/* ===== TEXT COLUMN ===== */}
        <div className="flex flex-col justify-center">
          {/* Floating pill badge */}
          <div
            className="mb-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0ms',
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#0A8FBF] sm:text-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0A8FBF]" />
              AI-Augmented Digital Agency
            </span>
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="hero-headline mb-6 font-[family-name:var(--font-display)]">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden mr-[0.25em] last:mr-0">
                <span
                  className="inline-block text-white"
                  style={{
                    transform: mounted ? 'translateY(0)' : 'translateY(110%)',
                    opacity: mounted ? 1 : 0,
                    transition: 'transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.8s cubic-bezier(0.16,1,0.3,1)',
                    transitionDelay: `${200 + i * 70}ms`,
                  }}
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/* Subheading */}
          <p
            className="mb-10 max-w-lg text-lg text-[#B8B8B8] font-[family-name:var(--font-body)]"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '700ms',
            }}
          >
            From websites and apps to SEO and AI automation — we help South
            African businesses build, grow, and automate their digital presence.
          </p>

          {/* CTAs */}
          <div
            className="mb-0 flex flex-wrap items-center gap-4"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '900ms',
            }}
          >
            <MagneticButton href="/contact" strength={0.2}>
              <span className="inline-flex items-center rounded-full bg-[#E8503E] px-8 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(239,99,81,0.2)] transition-colors duration-200 hover:bg-[#D14535]">
                Get a Free Consultation
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>
            <MagneticButton href="/work" strength={0.2}>
              <span className="inline-flex items-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5">
                See Our Work
              </span>
            </MagneticButton>
          </div>

          {/* Stats row */}
          <div
            className="mt-12 flex flex-wrap items-start gap-8"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '1100ms',
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-[#8A8A8A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== IMAGE COLUMN ===== */}
        <div
          className="relative hidden lg:block"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'scale(1)' : 'scale(0.95)',
            transition: 'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '400ms',
          }}
        >
          {/* Decorative border glow */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#0A8FBF]/20 via-transparent to-[#297373]/20 blur-sm" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            {/* Gradient overlay on left edge for blending */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[25%] bg-gradient-to-r from-[#141414]/80 to-transparent"
              aria-hidden="true"
            />
            {/* Bottom gradient for depth */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[30%] bg-gradient-to-t from-[#141414]/60 to-transparent"
              aria-hidden="true"
            />

            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&q=80"
              alt="Abstract technology network representing digital solutions"
              width={1200}
              height={800}
              className="aspect-[4/3] h-full w-full object-cover lg:min-h-[500px] xl:min-h-[580px]"
              priority
              unoptimized
            />

            {/* Floating accent card overlay */}
            <div className="absolute bottom-6 right-6 z-20 rounded-xl border border-white/10 bg-[#1E1E1E]/80 backdrop-blur-md px-5 py-4">
              <p className="text-xs uppercase tracking-widest text-[#0A8FBF] mb-1">Tech Stack</p>
              <p className="text-sm text-white/80 font-[family-name:var(--font-body)]">
                Next.js · React · TypeScript · AI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line that draws across — below the grid */}
      <div className="absolute bottom-24 left-0 right-0 z-10 px-6 lg:px-20">
        <div
          className="mx-auto h-px max-w-[1440px]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(10,143,191,0.4), transparent)',
            width: mounted ? '100%' : '0%',
            transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
            transitionDelay: '1300ms',
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: 'opacity 1s ease',
          transitionDelay: '1800ms',
        }}
      >
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <div
            className="h-1.5 w-1 rounded-full bg-white/50"
            style={{ animation: 'hero-scroll-dot 2s ease-in-out infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
