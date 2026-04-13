'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { MagneticButton } from '@/components/ui/magnetic-button'

const HEADLINE_WORDS = ['We', 'Build', 'Digital', 'Products', 'That', 'Perform']

const STATS = [
  { value: 16, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 95, suffix: '+', label: 'Lighthouse Scores' },
]

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="noise-texture relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#141414]">
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
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Animated gradient orb */}
      <div
        aria-hidden="true"
        className="absolute pointer-events-none"
        style={{
          left: '50%',
          top: '50%',
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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">

          {/* Floating pill badge */}
          <div
            className="mb-10"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '0ms',
            }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-5 py-2 text-xs tracking-widest uppercase text-[#0A8FBF] sm:text-sm font-semibold">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#0A8FBF]" />
              AI-Augmented Digital Agency
            </span>
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="hero-headline mb-8 flex flex-wrap items-center justify-center gap-x-[0.25em] gap-y-1">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden py-1">
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
            className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-[#B8B8B8] sm:text-lg md:text-xl"
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
            className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '900ms',
            }}
          >
            <MagneticButton href="/contact" strength={0.2}>
              <span className="inline-flex items-center rounded-full bg-[#E8503E] px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#D14535] sm:text-base">
                Get a Free Consultation
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </MagneticButton>

            <MagneticButton href="/work" strength={0.2}>
              <span className="inline-flex items-center rounded-full border-2 border-white/20 px-8 py-4 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white sm:text-base">
                See Our Work
              </span>
            </MagneticButton>
          </div>

          {/* Horizontal line that draws across */}
          <div className="mx-auto mb-16 w-full max-w-4xl">
            <div
              className="mx-auto h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(10,143,191,0.4), transparent)',
                width: mounted ? '100%' : '0%',
                transition: 'width 1.2s cubic-bezier(0.16,1,0.3,1)',
                transitionDelay: '1100ms',
              }}
            />
          </div>

          {/* Stats row */}
          <div
            className="grid w-full max-w-3xl grid-cols-1 gap-8 sm:grid-cols-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: '1300ms',
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-display)] sm:text-4xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={1800} />
                </span>
                <span className="mt-1 text-xs tracking-widest uppercase text-[#8A8A8A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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
