'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionWrapper } from '@/components/ui/section-wrapper'

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
    <SectionWrapper dark id="work">
      <div className="text-center mb-16">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block h-px w-12 bg-[#0A8FBF]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
              Portfolio
            </span>
            <span className="block h-px w-12 bg-[#0A8FBF]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Selected Work
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-[#8A8A8A] max-w-2xl mx-auto">
            Real projects. Real results.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={0.1 * index}>
            <div
              className="group relative rounded-2xl bg-[#2A2A2A] overflow-hidden
                         transition-all duration-300 ease-out
                         hover:scale-[1.02] hover:shadow-2xl"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-[#8A8A8A] text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full
                                 bg-white/5 text-[#DEDEDE] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.5}>
        <div className="text-center mt-14">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[#0A8FBF] font-semibold
                       transition-colors duration-200 hover:text-[#087CA7] group"
          >
            View All Projects
            <span className="transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
        </div>
      </FadeIn>
    </SectionWrapper>
  )
}
