'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'
import { Marquee } from '@/components/ui/marquee'

const HEADLINE_LINES = [
  { text: 'We design.', className: 'text-white' },
  { text: 'We engineer.', className: 'text-outline' },
  { text: 'We automate.', className: 'text-gradient-brand' },
]

const STATS = [
  { value: '16+', label: 'Years of craft' },
  { value: '50+', label: 'Projects shipped' },
  { value: '95+', label: 'Lighthouse scores' },
]

const MARQUEE_ITEMS = [
  'Web Design',
  'Development',
  'AI Automation',
  'SEO & GEO',
  'UI/UX',
  'Mobile Apps',
  'Custom Software',
  'Google Ads',
]

/* Origami fold shards — folded-paper planes drifting behind the type */
const SHARDS = [
  {
    className: 'right-[6%] top-[16%] h-40 w-56 md:h-56 md:w-80',
    clip: 'polygon(0 35%, 62% 0, 100% 55%, 30% 100%)',
    gradient: 'linear-gradient(135deg, rgba(10,143,191,0.28), rgba(10,143,191,0.02))',
    depth: 34,
    rotate: '-8deg',
    duration: '11s',
  },
  {
    className: 'right-[22%] bottom-[24%] h-28 w-40 md:h-40 md:w-60',
    clip: 'polygon(0 0, 100% 18%, 72% 100%, 8% 78%)',
    gradient: 'linear-gradient(135deg, rgba(41,115,115,0.35), rgba(41,115,115,0.03))',
    depth: 60,
    rotate: '10deg',
    duration: '14s',
  },
  {
    className: 'right-[38%] top-[10%] hidden h-24 w-32 md:block md:h-32 md:w-44',
    clip: 'polygon(20% 0, 100% 30%, 80% 100%, 0 65%)',
    gradient: 'linear-gradient(135deg, rgba(232,80,62,0.30), rgba(232,80,62,0.02))',
    depth: 90,
    rotate: '18deg',
    duration: '9s',
  },
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  // Per-shard parallax offsets, deeper shards move more
  const shard0X = useTransform(springX, (v) => v * SHARDS[0].depth)
  const shard0Y = useTransform(springY, (v) => v * SHARDS[0].depth)
  const shard1X = useTransform(springX, (v) => v * SHARDS[1].depth)
  const shard1Y = useTransform(springY, (v) => v * SHARDS[1].depth)
  const shard2X = useTransform(springX, (v) => v * SHARDS[2].depth)
  const shard2Y = useTransform(springY, (v) => v * SHARDS[2].depth)
  const shardTransforms = [
    { x: shard0X, y: shard0Y },
    { x: shard1X, y: shard1Y },
    { x: shard2X, y: shard2Y },
  ]

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion) return
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="noise-texture relative flex min-h-[100svh] flex-col overflow-hidden bg-[#0A0A0B]"
    >
      {/* Structural grid lines */}
      <div className="grid-lines absolute inset-0 opacity-60" aria-hidden="true" />

      {/* Aurora wash */}
      <div
        aria-hidden="true"
        className="absolute -top-[20%] left-[8%] h-[70vmax] w-[70vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 35% 35%, rgba(10,143,191,0.16) 0%, rgba(41,115,115,0.10) 45%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'aurora-drift 22s ease-in-out infinite',
          willChange: 'transform',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-[30%] right-[-10%] h-[55vmax] w-[55vmax] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 60% 40%, rgba(232,80,62,0.10) 0%, rgba(10,143,191,0.07) 50%, transparent 72%)',
          filter: 'blur(80px)',
          animation: 'aurora-drift 28s ease-in-out infinite reverse',
          willChange: 'transform',
        }}
      />

      {/* Origami fold shards — parallax on mouse */}
      {SHARDS.map((shard, i) => (
        <motion.div
          key={i}
          aria-hidden="true"
          className={`pointer-events-none absolute ${shard.className}`}
          style={{ x: shardTransforms[i].x, y: shardTransforms[i].y }}
        >
          <div
            className="h-full w-full"
            style={
              {
                clipPath: shard.clip,
                background: shard.gradient,
                border: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(2px)',
                '--shard-r': shard.rotate,
                animation: `shard-float ${shard.duration} ease-in-out infinite`,
              } as React.CSSProperties
            }
          />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-center px-6 pt-32 pb-16 sm:px-10 lg:px-16">
        {/* Badge */}
        <div className="anim-fade-up mb-10 md:mb-14" style={{ '--d': '100ms' } as React.CSSProperties}>
          <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-white/70 backdrop-blur-sm sm:text-xs">
            <span
              className="inline-block h-2 w-2 rounded-full bg-[#E8503E]"
              style={{ animation: 'pulse-dot 2s ease-in-out infinite' }}
            />
            AI-Augmented Digital Studio — Johannesburg
          </span>
        </div>

        {/* Headline — accessible sentence, kinetic visual */}
        <h1 className="mb-0">
          <span className="sr-only">
            We design, engineer and automate — high-performance websites, apps
            and AI automation for South African businesses.
          </span>
          <span aria-hidden="true" className="block">
            {HEADLINE_LINES.map((line, i) => (
              <span key={line.text} className="block overflow-hidden pb-[0.06em]">
                <span
                  className={`anim-rise display-xl block text-[clamp(2.6rem,10.5vw,8.75rem)] ${line.className}`}
                  style={{ '--d': `${200 + i * 110}ms` } as React.CSSProperties}
                >
                  {line.text}
                </span>
              </span>
            ))}
          </span>
        </h1>

        {/* Sub row: copy + CTAs left, stats right */}
        <div className="mt-12 flex flex-col gap-12 md:mt-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p
              className="anim-fade-up text-base leading-relaxed text-white/60 sm:text-lg"
              style={{ '--d': '750ms' } as React.CSSProperties}
            >
              High-performance websites, apps and intelligent automation —
              crafted by a senior studio that builds with the same AI tools
              used at Shopify and ServiceNow. No agency bloat. Just work that
              performs.
            </p>

            <div
              className="anim-fade-up mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6"
              style={{ '--d': '900ms' } as React.CSSProperties}
            >
              <MagneticButton href="/contact" strength={0.25}>
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-[#E8503E] px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#D14535] sm:text-base"
                  style={{ animation: 'pulse-ring 3s ease-out infinite' }}
                >
                  Start your project
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>

              <MagneticButton href="/work" strength={0.25}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-sm font-semibold text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white sm:text-base">
                  See our work
                </span>
              </MagneticButton>
            </div>
          </div>

          {/* Stats */}
          <div
            className="anim-fade-up flex items-start gap-8 sm:gap-12"
            style={{ '--d': '1050ms' } as React.CSSProperties}
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col border-l border-white/10 pl-4 sm:pl-6">
                <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 font-[family-name:var(--font-mono)] text-[10px] tracking-[0.18em] uppercase text-white/40 sm:text-[11px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Capability marquee */}
      <div
        className="anim-fade-up relative z-10 border-t border-white/[0.07] py-5 md:py-6"
        style={{ '--d': '1200ms' } as React.CSSProperties}
      >
        <Marquee speed={40}>
          {MARQUEE_ITEMS.map((item) => (
            <span
              key={item}
              className="display-xl flex items-center gap-8 whitespace-nowrap text-3xl text-white/90 md:text-4xl"
            >
              {item}
              <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#E8503E]" fill="currentColor" aria-hidden="true">
                <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6L12 0z" />
              </svg>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
