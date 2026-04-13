'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { HorizontalScroll } from '@/components/ui/horizontal-scroll'

const projects = [
  {
    title: 'Origami Finance',
    description: 'SaaS invoicing platform for South African businesses',
    tags: ['Next.js', 'SaaS', 'Fintech'],
    image: '/images/portfolio/origami-finance.png',
    url: 'https://origami-finance.co.za',
  },
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
      className="group relative flex-shrink-0 w-[340px] h-[380px] sm:w-[450px] sm:h-[420px] md:w-[550px] md:h-[450px] rounded-2xl overflow-hidden ring-1 ring-white/10 bg-[#2A2A2A]"
    >
      {/* Project image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <Image
          src={project.image}
          alt={`${project.title} — ${project.description}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 340px, (max-width: 768px) 450px, 550px"
        />
      </div>

      {/* Permanent bottom gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Hover tint overlay */}
      <div className="absolute inset-0 bg-[#0A8FBF]/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Large faded project number */}
      <span className="absolute top-4 right-5 font-[family-name:var(--font-display)] text-[7rem] sm:text-[8rem] md:text-[9rem] font-bold leading-none text-white/[0.06] select-none pointer-events-none transition-colors duration-500 group-hover:text-white/[0.12]">
        {number}
      </span>

      {/* "View Project" hover indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
        <span className="font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white tracking-wide translate-y-3 transition-transform duration-500 group-hover:translate-y-0">
          View Project &rarr;
        </span>
      </div>

      {/* Bottom content overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-8 flex flex-col gap-3">
        <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-[90%]">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium text-white/80 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 transition-colors duration-300 group-hover:bg-white/15"
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
    <section id="work" className="relative bg-[#1E1E1E] noise-texture overflow-hidden">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-24 md:pt-32 pb-8 md:pb-12">
        <ScrollReveal>
          <p className="text-[#0A8FBF] font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Portfolio
          </p>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Selected Work
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-white/50 max-w-xl">
            Real projects. Real results.
          </p>
        </ScrollReveal>
      </div>

      {/* Horizontal scroll cards */}
      <HorizontalScroll>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
        {/* End spacer so last card has room */}
        <div className="flex-shrink-0 w-16 md:w-32" aria-hidden="true" />
      </HorizontalScroll>

      {/* View All link */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
        <ScrollReveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-lg md:text-xl font-semibold text-white group/link transition-colors duration-300 hover:text-[#0A8FBF]"
          >
            <span>View All Projects</span>
            <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1.5">
              &rarr;
            </span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
