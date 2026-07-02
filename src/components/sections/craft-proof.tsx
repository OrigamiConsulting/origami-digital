'use client'

import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { Marquee } from '@/components/ui/marquee'

const GAUGES = [
  { value: 98, label: 'Performance', color: '#0A8FBF' },
  { value: 100, label: 'Accessibility', color: '#35A3A3' },
  { value: 100, label: 'SEO', color: '#E8503E' },
]

const FACTS = [
  { value: 16, suffix: '+', label: 'years of design & engineering' },
  { value: 50, suffix: '+', label: 'projects shipped to production' },
  { value: 24, suffix: 'h', label: 'max response time, usually faster' },
  { value: 100, suffix: '%', label: 'senior-built — no juniors, no handoffs' },
]

const STACK_ROW_A = [
  'Next.js', 'React', 'TypeScript', 'React Native', 'Tailwind CSS',
  'Node.js', 'PostgreSQL', 'Supabase', 'Vercel', 'AWS',
]
const STACK_ROW_B = [
  'Claude', 'MCP', 'OpenAI', 'n8n', 'Zapier',
  'Figma', 'Framer Motion', 'Python', 'Shopify', 'WordPress',
]

function Gauge({ value, label, color }: { value: number; label: string; color: string }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative h-32 w-32 sm:h-36 sm:w-36">
        <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
          <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: value / 100 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-[family-name:var(--font-display)] text-3xl font-bold text-white sm:text-4xl">
            <AnimatedCounter target={value} duration={1600} />
          </span>
        </div>
      </div>
      <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-white/50">
        {label}
      </span>
    </div>
  )
}

export function CraftProof() {
  return (
    <section className="relative overflow-hidden bg-[#0C0C0E] py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-white/40">
            05 — The craft
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl text-[clamp(2.6rem,6vw,4.75rem)] text-white"
            >
              Engineered
              <br />
              <span className="text-outline">to perform.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
            >
              Beautiful is the entry fee. Every site we ship is measured
              against Google&apos;s Core Web Vitals — the same scores that
              decide your search rankings and your ad costs. Design that wins
              attention, engineering that keeps it.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 sm:gap-10 lg:justify-end">
            {GAUGES.map((gauge) => (
              <Gauge key={gauge.label} {...gauge} />
            ))}
          </div>
        </div>

        {/* Fact strip */}
        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-[#0C0C0E] p-6 sm:p-8">
              <p className="font-[family-name:var(--font-display)] text-4xl font-bold text-white sm:text-5xl">
                <AnimatedCounter target={fact.value} suffix={fact.suffix} duration={1800} />
              </p>
              <p className="mt-2 text-sm leading-snug text-white/45">{fact.label}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-24 max-w-4xl text-center"
        >
          <div className="three-folds-divider mx-auto mb-8" aria-hidden="true">
            <span /><span /><span />
          </div>
          <p className="font-[family-name:var(--font-display)] text-2xl leading-snug font-medium text-white md:text-[2rem]">
            “No bloated agency overhead. No layers of account managers. Direct
            access to a senior practitioner who builds with the same AI tools
            used by teams at{' '}
            <span className="text-[#0A8FBF]">ServiceNow</span>,{' '}
            <span className="text-[#35A3A3]">Shopify</span> and{' '}
            <span className="text-[#E8503E]">Notion</span>.”
          </p>
        </motion.blockquote>
      </div>

      {/* Tech stack — dual marquee */}
      <div className="mt-24 space-y-4">
        <Marquee speed={46}>
          {STACK_ROW_A.map((item) => (
            <span key={item} className="display-xl flex items-center gap-8 whitespace-nowrap text-4xl text-outline-faint md:text-5xl">
              {item}
              <span className="h-1.5 w-1.5 rotate-45 bg-white/20" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
        <Marquee speed={38} reverse>
          {STACK_ROW_B.map((item) => (
            <span key={item} className="display-xl flex items-center gap-8 whitespace-nowrap text-4xl text-outline-faint md:text-5xl">
              {item}
              <span className="h-1.5 w-1.5 rotate-45 bg-white/20" aria-hidden="true" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
