'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

interface Project {
  title: string
  description: string
  tags: string[]
  image: string
}

const projects: Project[] = [
  {
    title: 'Origami Finance',
    description: 'SaaS invoicing platform for South African businesses',
    tags: ['Next.js', 'SaaS', 'Fintech'],
    image: '/images/portfolio/origami-finance.png',
  },
  {
    title: 'Origami Pay',
    description: 'Payslip generator for SA businesses',
    tags: ['React', 'SaaS', 'HR Tech'],
    image: '/images/portfolio/origami-pay.png',
  },
  {
    title: 'EV Connect',
    description: 'Electric vehicle charging platform with CPMS dashboard',
    tags: ['Next.js', 'IoT', 'Dashboard'],
    image: '/images/portfolio/ev-connect.png',
  },
  {
    title: 'ImpactRoots',
    description: 'B2B consulting site for skills development',
    tags: ['Web Design', 'B2B'],
    image: '/images/portfolio/impactroots.png',
  },
]

export function PortfolioPreview() {
  return (
    <section id="work" className="noise-texture bg-[#1E1E1E] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
              PORTFOLIO
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-heading text-white mt-4">
              Selected Work
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg text-[#B0B0B0] mt-4">
              Real projects. Real results.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={100 * index}>
              <div className="group relative rounded-2xl bg-[#2A2A2A] overflow-hidden">
                <div className="aspect-video w-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} — ${project.description}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      View Project &rarr;
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white font-[family-name:var(--font-display)]">
                    {project.title}
                  </h3>
                  <p className="text-[#8A8A8A] text-sm mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/5 border border-white/10 text-[#DEDEDE] rounded-full px-3 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-14">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[#0A8FBF] font-semibold transition-colors duration-200 hover:text-[#087CA7] group"
            >
              View All Projects
              <span className="transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
