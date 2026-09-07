'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'

const PROJECTS = [
  {
    title: 'EV Connect',
    description: 'EV charger installation & smart energy — homes and businesses across Gauteng',
    tags: ['Next.js', 'EV', 'Lead Gen'],
    image: '/images/portfolio/ev-connect-v2.png',
    url: 'https://www.origamievconnect.com',
    accent: '#0A8FBF',
  },
  {
    title: 'EV Connect CPMS',
    description: 'Charge point management platform — live network, payments and fleet control',
    tags: ['SaaS', 'IoT', 'Dashboard'],
    image: '/images/portfolio/cpms-v2.png',
    url: 'https://cpms.origamievconnect.com',
    accent: '#35A3A3',
  },
  {
    title: 'Origami Mobility',
    description: 'White-label e-hailing platform for cash-first markets, with fleet dispatch for operators who already have drivers',
    tags: ['Platform', 'React Native', 'Dispatch'],
    image: '/images/portfolio/origami-mobility.png',
    url: 'https://mobility.origami-digital.co.za',
    accent: '#087CA7',
  },
  {
    title: 'Origami Finance',
    description: 'SaaS invoicing platform for South African businesses',
    tags: ['SaaS', 'Fintech', 'Next.js'],
    image: '/images/portfolio/origami-finance-v2.png',
    url: 'https://origami-finance.co.za',
    accent: '#E8503E',
  },
  {
    title: 'Origami Pay',
    description: 'Payroll & payslips for SA small businesses, built around SARS compliance',
    tags: ['React', 'SaaS', 'HR Tech'],
    image: '/images/portfolio/origami-pay-v2.png',
    url: 'https://origami-pay.co.za',
    accent: '#0A8FBF',
  },
  {
    title: 'ImpactRoots',
    description: 'B2B consulting site for a skills development company',
    tags: ['Web Design', 'B2B', 'SEO'],
    image: '/images/portfolio/impactroots-v2.png',
    url: 'https://www.impactroots.co.za',
    accent: '#35A3A3',
  },
]

function ProjectCard({ project, index, sizing }: {
  project: (typeof PROJECTS)[number]
  index: number
  sizing: 'sticky' | 'snap'
}) {
  const sizeClass =
    sizing === 'sticky'
      ? 'h-[60vh] w-[min(72vw,900px)] xl:h-[64vh]'
      : 'aspect-[4/3] w-[85vw] snap-start sm:w-[70vw] md:w-[520px]'

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-label="View"
      className={`group relative flex-shrink-0 overflow-hidden rounded-2xl bg-[#141418] ring-1 ring-white/10 ${sizeClass}`}
    >
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.description}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 900px"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `linear-gradient(to top, ${project.accent}66, transparent 60%)` }}
      />

      <span
        className="display-xl absolute top-4 right-6 text-[5rem] text-white/[0.07] transition-colors duration-500 select-none group-hover:text-white/[0.16] md:text-[7rem]"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="absolute right-0 bottom-0 left-0 flex flex-col gap-2 p-6 md:p-9">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] text-white/85 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-white md:text-4xl">
          {project.title}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-white/70 md:text-base">
          {project.description}
        </p>
      </div>
    </a>
  )
}

function AllProjectsCard({ sizing }: { sizing: 'sticky' | 'snap' }) {
  const sizeClass =
    sizing === 'sticky'
      ? 'h-[60vh] w-[min(52vw,560px)] xl:h-[64vh]'
      : 'aspect-[4/3] w-[85vw] snap-start sm:w-[70vw] md:w-[420px]'

  return (
    <Link
      href="/work"
      data-cursor-label="All work"
      className={`group relative flex flex-shrink-0 flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl border border-white/10 bg-[#101014] transition-colors duration-500 hover:border-[#E8503E]/50 ${sizeClass}`}
    >
      <div className="grid-lines absolute inset-0 opacity-50" aria-hidden="true" />
      <span className="display-xl relative text-[clamp(2.4rem,4.5vw,4rem)] text-outline transition-colors duration-500 group-hover:text-white group-hover:[-webkit-text-stroke:0px]">
        All projects
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#E8503E] text-white transition-transform duration-500 group-hover:scale-110">
        <svg className="h-5 w-5 transition-transform duration-500 group-hover:-rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}

function SectionHeader() {
  return (
    <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-white/40">
          04 — Selected work
        </span>
        <div className="h-px flex-1 bg-white/10" />
      </div>
      <h2 className="display-xl text-[clamp(2.6rem,6.5vw,5.5rem)] text-white">
        Proof, <span className="text-outline">not promises.</span>
      </h2>
    </div>
  )
}

export function WorkShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(false)
  const [maxX, setMaxX] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (!isDesktop) return
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      setMaxX(Math.max(0, track.scrollWidth - window.innerWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [isDesktop])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX])
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1])

  const useSticky = isDesktop && !reducedMotion

  if (!useSticky) {
    // Mobile & reduced-motion: native snap scroll
    return (
      <section id="work" ref={sectionRef} className="relative overflow-hidden bg-[#0A0A0B] py-24 md:py-32">
        <SectionHeader />
        <div
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:px-10"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} sizing="snap" />
          ))}
          <AllProjectsCard sizing="snap" />
          <div className="w-2 flex-shrink-0" aria-hidden="true" />
        </div>
      </section>
    )
  }

  return (
    <section id="work" ref={sectionRef} className="relative bg-[#0A0A0B]" style={{ height: '400vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="pb-10">
          <SectionHeader />
        </div>

        <motion.div ref={trackRef} style={{ x }} className="flex w-max gap-8 pl-6 will-change-transform sm:pl-10 lg:pl-16">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} sizing="sticky" />
          ))}
          <AllProjectsCard sizing="sticky" />
          <div className="w-8 flex-shrink-0" aria-hidden="true" />
        </motion.div>

        {/* Progress rail */}
        <div className="mx-auto mt-10 w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
          <div className="h-px w-full bg-white/10">
            <motion.div
              className="h-px origin-left bg-[#E8503E]"
              style={{ scaleX: progressScale }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
