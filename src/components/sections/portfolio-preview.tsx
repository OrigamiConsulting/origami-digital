'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const projects = [
  {
    title: 'Origami Pay',
    description: 'Payslip generator for SA businesses',
    tags: ['React', 'SaaS', 'HR Tech'],
    image: '/images/portfolio/origami-pay.png',
    url: 'https://origami-pay.co.za',
  },
  {
    title: 'EV Connect',
    description: 'Electric vehicle charging platform with CPMS dashboard',
    tags: ['Next.js', 'IoT', 'Dashboard'],
    image: '/images/portfolio/ev-connect.png',
    url: 'https://www.origamievconnect.com',
  },
  {
    title: 'ImpactRoots',
    description: 'B2B consulting site for skills development',
    tags: ['Web Design', 'B2B'],
    image: '/images/portfolio/impactroots.png',
    url: 'https://www.impactroots.co.za',
  },
  {
    title: 'Origami Finance',
    description: 'SaaS invoicing platform for South African businesses',
    tags: ['Next.js', 'SaaS', 'Fintech'],
    image: '/images/portfolio/origami-finance.png',
    url: 'https://origami-finance.co.za',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number]
  index: number
}) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-[500px] lg:w-[550px] aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#2A2A2A] snap-start"
    >
      {/* Project image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.description}`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 85vw, (max-width: 768px) 70vw, 550px"
        />
      </div>

      {/* Permanent bottom gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover tint overlay */}
      <div className="absolute inset-0 bg-[#0A8FBF]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Large faded project number */}
      <span
        className="absolute top-4 right-5 font-[family-name:var(--font-display)] text-[6rem] sm:text-[7rem] md:text-[8rem] font-bold leading-none text-white/[0.06] select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.12]"
        aria-hidden="true"
      >
        {number}
      </span>

      {/* "View Project" hover indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white tracking-wide translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
          View Project &rarr;
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 flex flex-col gap-2">
        <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed max-w-[90%]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

export function PortfolioPreview() {
  return (
    <section id="work" className="relative bg-[#1E1E1E] noise-texture py-24 md:py-32 overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <ScrollReveal>
          <p className="text-[#0A8FBF] font-[family-name:var(--font-body)] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Portfolio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
            Selected Work
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg text-white/50 max-w-xl">
            Real projects. Real results.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll container with CSS scroll-snap */}
      <ScrollReveal delay={300}>
        <div
          className="flex gap-6 overflow-x-auto px-6 md:px-16 pb-6 snap-x snap-mandatory"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
          {/* End spacer */}
          <div className="flex-shrink-0 w-4 md:w-8" aria-hidden="true" />
        </div>
      </ScrollReveal>

      {/* Scroll hint */}
      <ScrollReveal delay={400}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 mt-8 flex items-center justify-between">
          <p className="text-sm text-white/30 hidden md:block">
            ← Scroll to explore →
          </p>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-lg font-semibold text-white group/link transition-colors duration-300 hover:text-[#0A8FBF]"
          >
            <span>View All Projects</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </div>
      </ScrollReveal>
    </section>
  )
}
