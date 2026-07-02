'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import { MagneticButton } from '@/components/ui/magnetic-button'

/* ------------------------------------------------------------------ */
/* Scripted loop — 12 ticks, deterministic, repeats seamlessly         */
/* ------------------------------------------------------------------ */

type AgentStatus = 'idle' | 'thinking' | 'working' | 'done'

type AgentFrame = { status: AgentStatus; action: string }

const AGENTS: { name: string; role: string; timeline: AgentFrame[] }[] = [
  {
    name: 'Intake Agent',
    role: 'enquiries & leads',
    timeline: [
      { status: 'thinking', action: 'New enquiry — Sarah M. (website design)' },
      { status: 'working', action: 'Reading brief, checking availability…' },
      { status: 'working', action: 'Drafting personalised reply + estimate…' },
      { status: 'done', action: 'Reply drafted in 2.3s — sent for approval' },
      { status: 'working', action: 'Logging lead in CRM…' },
      { status: 'done', action: 'CRM updated — follow-up scheduled' },
      { status: 'idle', action: 'Watching inbox & contact forms…' },
      { status: 'thinking', action: 'WhatsApp enquiry — quote request' },
      { status: 'working', action: 'Preparing quote from price list…' },
      { status: 'done', action: 'Quote ready — awaiting your approval' },
      { status: 'idle', action: 'Watching inbox & contact forms…' },
      { status: 'idle', action: 'Watching inbox & contact forms…' },
    ],
  },
  {
    name: 'Docs Agent',
    role: 'documents & data',
    timeline: [
      { status: 'idle', action: 'Watching shared drive…' },
      { status: 'idle', action: 'Watching shared drive…' },
      { status: 'thinking', action: 'invoice_2041.pdf detected' },
      { status: 'working', action: 'Extracting supplier, totals, VAT…' },
      { status: 'done', action: '14 fields captured — zero errors' },
      { status: 'working', action: 'Pushing to accounting system…' },
      { status: 'done', action: 'Filed & reconciled ✓' },
      { status: 'idle', action: 'Watching shared drive…' },
      { status: 'thinking', action: '3 delivery notes received' },
      { status: 'working', action: 'Matching notes to purchase orders…' },
      { status: 'done', action: 'All matched — flagged 1 discrepancy' },
      { status: 'idle', action: 'Watching shared drive…' },
    ],
  },
  {
    name: 'Ops Agent',
    role: 'reporting & sync',
    timeline: [
      { status: 'idle', action: 'Next run: Friday 07:00 digest' },
      { status: 'thinking', action: 'Compiling weekly performance digest' },
      { status: 'working', action: 'Pulling GA4 + Search Console data…' },
      { status: 'working', action: 'Summarising traffic & rankings…' },
      { status: 'done', action: 'Digest delivered → WhatsApp' },
      { status: 'idle', action: 'Monitoring site uptime…' },
      { status: 'idle', action: 'Monitoring site uptime…' },
      { status: 'working', action: 'Syncing CRM ↔ mailing list…' },
      { status: 'done', action: '212 contacts in sync' },
      { status: 'idle', action: 'Monitoring site uptime…' },
      { status: 'thinking', action: 'Anomaly check: ad spend pacing' },
      { status: 'done', action: 'Budget on track — no action needed' },
    ],
  },
]

const TERMINAL_SCRIPT = [
  { icon: '→', agent: 'intake', text: 'new enquiry: sarah@meridianlaw.co.za (website design)' },
  { icon: '⋯', agent: 'intake', text: 'drafting personalised reply + project estimate' },
  { icon: '✓', agent: 'intake', text: 'draft ready in 2.3s — waiting for human approval' },
  { icon: '→', agent: 'docs', text: 'invoice_2041.pdf detected in /shared/inbox' },
  { icon: '⋯', agent: 'docs', text: 'extracting supplier, line items, VAT (14 fields)' },
  { icon: '✓', agent: 'docs', text: 'captured → accounting · 0 errors, 0 retyping' },
  { icon: '→', agent: 'ops', text: 'compiling weekly performance digest' },
  { icon: '⋯', agent: 'ops', text: 'GA4 + search console + ads → one summary' },
  { icon: '✓', agent: 'ops', text: 'digest delivered → whatsapp (07:00 sharp)' },
  { icon: '→', agent: 'intake', text: 'whatsapp enquiry: “can you send a quote?”' },
  { icon: '✓', agent: 'intake', text: 'quote generated from price list — approved & sent' },
  { icon: '✓', agent: 'system', text: '6 tasks this hour · 0 needed a human to start' },
]

const AGENT_TERM_COLOR: Record<string, string> = {
  intake: '#7CD4F5',
  docs: '#5FC9C9',
  ops: '#F5A97F',
  system: '#A6DA95',
}

const STATUS_META: Record<AgentStatus, { color: string; label: string; pulse: boolean }> = {
  idle: { color: '#5A5A66', label: 'Idle', pulse: false },
  thinking: { color: '#0A8FBF', label: 'Thinking', pulse: true },
  working: { color: '#35A3A3', label: 'Working', pulse: true },
  done: { color: '#A6DA95', label: 'Done', pulse: false },
}

const SOURCES = ['Email', 'Forms', 'WhatsApp', 'Drive']
const DESTINATIONS = ['CRM', 'Accounting', 'Reports', 'Inbox drafts']

const TICK_MS = 2200
const BASE_TASKS = 38

/* ------------------------------------------------------------------ */
/* Console pieces                                                      */
/* ------------------------------------------------------------------ */

function FlowLane({ reverse = false }: { reverse?: boolean }) {
  // A connector line with two travelling pulses
  return (
    <div className="relative h-px flex-1 overflow-visible bg-white/10">
      {[0, 1].map((i) => (
        <span
          key={i}
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full"
          style={{
            backgroundColor: reverse ? '#35A3A3' : '#0A8FBF',
            boxShadow: `0 0 8px ${reverse ? '#35A3A3' : '#0A8FBF'}`,
            animation: `flow-travel 2.6s linear infinite`,
            animationDelay: `${i * 1.3}s`,
          }}
        />
      ))}
      <style>{`
        @keyframes flow-travel {
          0%   { left: 0%; opacity: 0; }
          8%   { opacity: 1; }
          92%  { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  )
}

function AgentRow({ frame, name, role }: { frame: AgentFrame; name: string; role: string }) {
  const meta = STATUS_META[frame.status]
  return (
    <div className="flex items-center gap-3 border-b border-white/[0.06] px-4 py-3 last:border-b-0 sm:gap-4 sm:px-5">
      {/* status dot */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span
          className="absolute inline-flex h-full w-full rounded-full"
          style={{
            backgroundColor: meta.color,
            animation: meta.pulse ? 'pulse-dot 1.4s ease-in-out infinite' : 'none',
          }}
        />
      </span>
      {/* name */}
      <div className="w-28 shrink-0 sm:w-36">
        <p className="font-[family-name:var(--font-display)] text-xs font-semibold text-white sm:text-sm">
          {name}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-[9px] tracking-wide text-white/35 sm:text-[10px]">
          {role}
        </p>
      </div>
      {/* live action — key swap animates the change */}
      <div className="min-w-0 flex-1">
        <motion.p
          key={frame.action}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="truncate font-[family-name:var(--font-mono)] text-[10px] text-white/70 sm:text-xs"
        >
          {frame.action}
        </motion.p>
      </div>
      {/* status label */}
      <span
        className="hidden shrink-0 rounded-full px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.14em] uppercase sm:inline-block"
        style={{ color: meta.color, backgroundColor: `${meta.color}1A` }}
      >
        {meta.label}
      </span>
    </div>
  )
}

export function AgentConsole() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '-15% 0px' })
  const reducedMotion = useReducedMotion()
  const [tick, setTick] = useState(0)
  const [lines, setLines] = useState<{ id: number; time: string; icon: string; agent: string; text: string }[]>([])
  const [tasksDone, setTasksDone] = useState(BASE_TASKS)
  const tickRef = useRef(0)
  const lineIdRef = useRef(0)

  useEffect(() => {
    if (!inView || reducedMotion) return
    const interval = setInterval(() => {
      tickRef.current = (tickRef.current + 1) % TERMINAL_SCRIPT.length
      const next = tickRef.current
      const entry = TERMINAL_SCRIPT[next]
      const time = new Date().toTimeString().slice(0, 8)
      const line = { id: lineIdRef.current++, time, ...entry }
      setTick(next)
      setLines((prev) => [...prev.slice(-5), line])
      if (entry.icon === '✓') setTasksDone((n) => n + 1)
    }, TICK_MS)
    return () => clearInterval(interval)
  }, [inView, reducedMotion])

  // Static snapshot for reduced motion: everything visible, no timers
  const staticLines = TERMINAL_SCRIPT.slice(-6).map((entry, i) => ({
    id: i,
    time: '09:41:0' + i,
    ...entry,
  }))
  const visibleLines = reducedMotion ? staticLines : lines

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0E0E11] shadow-[0_40px_120px_rgba(0,0,0,0.55)]"
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          <span className="ml-3 hidden font-[family-name:var(--font-mono)] text-[10px] text-white/35 sm:inline">
            origami — automation console
          </span>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-[#E8503E]/30 bg-[#E8503E]/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[9px] tracking-[0.2em] text-[#FF8A7A] uppercase">
          <span
            className="h-1.5 w-1.5 rounded-full bg-[#E8503E]"
            style={{ animation: reducedMotion ? 'none' : 'pulse-dot 1.2s ease-in-out infinite' }}
          />
          Live
        </span>
      </div>

      {/* Pipeline map */}
      <div className="border-b border-white/[0.07] px-4 py-5 sm:px-6">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Sources */}
          <div className="flex flex-col gap-1.5">
            {SOURCES.map((s) => (
              <span
                key={s}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-center font-[family-name:var(--font-mono)] text-[9px] text-white/55 sm:px-2.5 sm:text-[10px]"
              >
                {s}
              </span>
            ))}
          </div>

          <FlowLane />

          {/* The agents node */}
          <div className="flex flex-col items-center gap-1.5 rounded-xl border border-[#0A8FBF]/30 bg-[#0A8FBF]/[0.07] px-3 py-3 sm:px-5">
            <svg viewBox="0 0 72 64" className="h-5 w-8" aria-hidden="true">
              <path d="M10 18 L58 14 L62 22 L14 26 Z" fill="#FFFFFF" />
              <path d="M10 30 L58 26 L62 34 L14 38 Z" fill="#297373" />
              <path d="M10 42 L58 38 L62 46 L14 50 Z" fill="#E8503E" />
            </svg>
            <span className="font-[family-name:var(--font-mono)] text-[9px] tracking-[0.16em] text-white/70 uppercase whitespace-nowrap">
              AI Agents
            </span>
          </div>

          <FlowLane reverse />

          {/* Destinations */}
          <div className="flex flex-col gap-1.5">
            {DESTINATIONS.map((d) => (
              <span
                key={d}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-center font-[family-name:var(--font-mono)] text-[9px] text-white/55 sm:px-2.5 sm:text-[10px]"
              >
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Agent activity */}
      <div>
        {AGENTS.map((agent) => (
          <AgentRow
            key={agent.name}
            name={agent.name}
            role={agent.role}
            frame={reducedMotion ? agent.timeline.find((f) => f.status === 'done') ?? agent.timeline[0] : agent.timeline[tick]}
          />
        ))}
      </div>

      {/* Terminal */}
      <div className="border-t border-white/[0.07] bg-black/40 px-4 py-4 sm:px-5">
        <div className="flex min-h-[132px] flex-col justify-end gap-1.5">
          {visibleLines.length === 0 && (
            <p className="font-[family-name:var(--font-mono)] text-[10px] text-white/30 sm:text-[11px]">
              # agents idle — waiting for the next trigger…
            </p>
          )}
          {visibleLines.map((line) => (
            <motion.p
              key={line.id}
              initial={reducedMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="truncate font-[family-name:var(--font-mono)] text-[10px] leading-relaxed sm:text-[11px]"
            >
              <span className="text-white/25">{line.time}</span>{' '}
              <span style={{ color: AGENT_TERM_COLOR[line.agent] ?? '#FFFFFF' }}>
                {line.icon} {line.agent.padEnd(6, ' ')}
              </span>{' '}
              <span className="text-white/65">{line.text}</span>
            </motion.p>
          ))}
          <p className="font-[family-name:var(--font-mono)] text-[10px] text-white/50 sm:text-[11px]">
            <span className="text-[#A6DA95]">❯</span>{' '}
            <span
              className="inline-block h-3 w-1.5 translate-y-0.5 bg-white/70"
              style={{ animation: reducedMotion ? 'none' : 'blink-caret 1.1s step-end infinite' }}
            />
          </p>
        </div>
      </div>

      {/* Console footer stats */}
      <div className="flex items-center justify-between border-t border-white/[0.07] px-4 py-3 sm:px-5">
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/45">
          <span className="text-white">{tasksDone}</span> tasks completed today
        </span>
        <span className="font-[family-name:var(--font-mono)] text-[10px] text-white/45">
          <span className="text-white">0</span> enquiries missed
        </span>
        <span className="hidden font-[family-name:var(--font-mono)] text-[10px] text-white/45 sm:inline">
          avg response <span className="text-white">90s</span>
        </span>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */

export function AIShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0B] py-24 md:py-36">
      {/* ambient glow behind the console */}
      <div
        className="absolute top-1/2 right-[-10%] h-[60vmax] w-[60vmax] -translate-y-1/2 rounded-full"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(circle, rgba(10,143,191,0.09) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-8 flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-white/40">
            03 — Automate · Live
          </span>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          {/* Narrative */}
          <div className="min-w-0">
            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="display-xl text-[clamp(2.6rem,6vw,4.75rem)] text-white"
            >
              AI agents,
              <br />
              <span className="text-gradient-cool">actually working.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-lg text-base leading-relaxed text-white/60 md:text-lg"
            >
              This is not a stock illustration — it&apos;s a live picture of the
              systems we build. Agents that read your enquiries, draft the
              replies, capture the invoices and send the reports. While you run
              the business.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['Replies in seconds, not days', '24/7 — no leave days', 'You approve, AI executes'].map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] text-white/65"
                >
                  {chip}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10"
            >
              <MagneticButton href="/services/ai-automation" strength={0.25}>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#E8503E] px-8 py-4 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#D14535] sm:text-base">
                  Automate my business
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Console */}
          <motion.div
            className="min-w-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <AgentConsole />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
