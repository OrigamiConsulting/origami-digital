'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
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
    const raf = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section
      className="noise-texture relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#141414' }}
    >
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

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 py-32 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center text-center">

          {/* Floating pill badge */}
          <div
            className="mb-10 overflow-hidden"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(12px)',
              transition:
                'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '0ms',
            }}
          >
            <span
              className="font-[family-name:var(--font-body)] inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs tracking-widest uppercase sm:text-sm"
              style={{
                borderColor: 'rgba(10, 143, 191, 0.3)',
                color: '#0A8FBF',
                backgroundColor: 'rgba(10, 143, 191, 0.06)',
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: '#0A8FBF' }}
              />
              AI-Augmented Digital Agency
            </span>
          </div>

          {/* Headline — word-by-word reveal */}
          <h1 className="hero-headline font-[family-name:var(--font-display)] mb-8 flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-1 leading-[1.05] font-bold tracking-tight text-white">
            {HEADLINE_WORDS.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden py-1">
                <span
                  className="inline-block"
                  style={{
                    transform: mounted ? 'translateY(0)' : 'translateY(110%)',
                    opacity: mounted ? 1 : 0,
                    transition:
                      'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
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
            className="font-[family-name:var(--font-body)] mx-auto mb-12 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
            style={{
              color: '#8A8A8A',
              opacity: mounted ? 1 : 0,
              transform: mounted ? 'translateY(0)' : 'translateY(20px)',
              transition:
                'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
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
              transition:
                'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '900ms',
            }}
          >
            <MagneticButton href="/contact" strength={0.2}>
              <span
                className="font-[family-name:var(--font-body)] inline-flex items-center rounded-full px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 sm:text-base"
                style={{ backgroundColor: '#E8503E' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D94F3F'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#E8503E'
                }}
              >
                Get a Free Consultation
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </MagneticButton>

            <MagneticButton href="/work" strength={0.2}>
              <span
                className="font-[family-name:var(--font-body)] inline-flex items-center rounded-full border px-8 py-4 text-sm font-semibold transition-colors duration-300 sm:text-base"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'rgba(255, 255, 255, 0.8)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
                  e.currentTarget.style.color = '#FFFFFF'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)'
                }}
              >
                See Our Work
              </span>
            </MagneticButton>
          </div>

          {/* Horizontal line that draws across */}
          <div className="mx-auto mb-16 w-full max-w-4xl">
            <div
              className="mx-auto h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(10, 143, 191, 0.4), transparent)',
                width: mounted ? '100%' : '0%',
                transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
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
              transition:
                'opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
              transitionDelay: '1300ms',
            }}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1800}
                  />
                </span>
                <span
                  className="font-[family-name:var(--font-body)] mt-1 text-xs tracking-widest uppercase"
                  style={{ color: '#8A8A8A' }}
                >
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
        <div
          className="flex h-9 w-5 items-start justify-center rounded-full border p-1"
          style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
        >
          <div
            className="h-1.5 w-1 rounded-full"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              animation: 'hero-scroll-dot 2s ease-in-out infinite',
            }}
          />
        </div>
      </div>
    </section>
  )
}
