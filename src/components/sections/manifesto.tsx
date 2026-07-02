'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type Token = { word: string; accent?: 'coral' | 'teal' | 'blue' }

const STATEMENT: Token[] = [
  { word: 'Most' }, { word: 'agencies' }, { word: 'talk' }, { word: 'about' },
  { word: 'AI.', accent: 'coral' },
  { word: 'We' }, { word: 'build' }, { word: 'with' }, { word: 'it' }, { word: '—' },
  { word: 'every' }, { word: 'day.' },
  { word: 'Sixteen' }, { word: 'years' }, { word: 'of' }, { word: 'design' },
  { word: 'and' }, { word: 'engineering' }, { word: 'craft,', accent: 'teal' },
  { word: 'amplified' }, { word: 'by' }, { word: 'the' }, { word: 'tools' },
  { word: 'rewriting' }, { word: 'this' }, { word: 'industry.' },
  { word: 'Enterprise' }, { word: 'quality.' },
  { word: 'Boutique' }, { word: 'speed.' },
  { word: 'Zero', accent: 'blue' }, { word: 'bloat.', accent: 'blue' },
]

const ACCENT_CLASS = {
  coral: 'text-[#E8503E]',
  teal: 'text-[#297373]',
  blue: 'text-[#0A8FBF]',
}

function Word({
  token,
  index,
  total,
  progress,
}: {
  token: Token
  index: number
  total: number
  progress: MotionValue<number>
}) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(progress, [start, end], [0.12, 1])

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block ${token.accent ? ACCENT_CLASS[token.accent] : 'text-[#1E1E1E]'}`}
    >
      {token.word}
    </motion.span>
  )
}

export function Manifesto() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 0.85', 'end 0.45'],
  })

  return (
    <section className="relative bg-[#F5F2EC] py-28 md:py-40">
      {/* Fold seam along the top edge */}
      <div className="absolute top-0 left-0 h-1.5 w-full" aria-hidden="true">
        <div className="flex h-full">
          <div className="h-full flex-1 bg-[#1E1E1E]" />
          <div className="h-full flex-1 bg-[#297373]" />
          <div className="h-full flex-1 bg-[#E8503E]" />
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-10 flex items-center gap-4 md:mb-14">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-[#8A8A8A]">
            01 — The approach
          </span>
          <div className="h-px flex-1 bg-[#1E1E1E]/10" />
        </div>

        <div ref={targetRef}>
          <p className="max-w-5xl font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.6vw,4rem)] leading-[1.18] font-semibold tracking-tight">
            {STATEMENT.map((token, i) => (
              <span key={`${token.word}-${i}`}>
                <Word
                  token={token}
                  index={i}
                  total={STATEMENT.length}
                  progress={scrollYProgress}
                />{' '}
              </span>
            ))}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-6 md:mt-16 md:flex-row md:items-center md:justify-between">
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[#1E1E1E] transition-colors hover:text-[#0A8FBF]"
          >
            How we work
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E1E]/15 transition-all duration-300 group-hover:border-[#0A8FBF] group-hover:bg-[#0A8FBF] group-hover:text-white">
              <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-[#4A4A4A]">
            One senior practitioner. The output of a team — powered by
            AI-augmented workflows across design, code and content.
          </p>
        </div>
      </div>
    </section>
  )
}
