'use client'

import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { AnimatedCounter } from '@/components/ui/animated-counter'
import { Marquee } from '@/components/ui/marquee'

const metrics = [
  { target: 10, suffix: '+', label: 'Years of Design & Development Experience' },
  { target: 50, suffix: '+', label: 'Projects Delivered' },
  { target: 95, suffix: '+', label: 'Average Lighthouse Performance Score' },
  { target: 24, suffix: 'h', label: 'Average Response Time' },
]

const marqueeItems = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Vercel',
  'AI-Powered',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
  'Figma',
]

export function WhyWorkWithUs() {
  return (
    <section id="why-work-with-us" className="bg-[#F5F5F5] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
              WHY US
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="section-heading text-[#1E1E1E] mt-4">
              Why Origami Digital
            </h2>
          </ScrollReveal>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={100 * index}>
              <div className="bg-white rounded-2xl p-6 md:p-8 text-center">
                <p className="text-5xl md:text-6xl font-bold font-[family-name:var(--font-display)] text-[#0A8FBF]">
                  <AnimatedCounter
                    target={metric.target}
                    suffix={metric.suffix}
                    duration={2000}
                  />
                </p>
                <p className="text-sm text-[#4A4A4A] mt-3 max-w-[160px] mx-auto">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Blockquote */}
        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <div className="w-16 h-px bg-[#0A8FBF] mx-auto mb-8" />
            <blockquote className="text-xl md:text-2xl font-[family-name:var(--font-display)] font-medium text-[#1E1E1E] text-center italic max-w-3xl mx-auto leading-relaxed">
              &ldquo;No bloated agency overhead. Direct access to a senior designer &amp; developer who builds with the same AI tools used by teams at ServiceNow, Shopify, and Notion.&rdquo;
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Tech Stack Text */}
        <ScrollReveal delay={300}>
          <p className="text-sm text-[#8A8A8A] text-center tracking-wide mt-12">
            Next.js &bull; React &bull; TypeScript &bull; Tailwind CSS &bull; Vercel &bull; AI-Powered
          </p>
        </ScrollReveal>

        {/* Marquee */}
        <ScrollReveal delay={400}>
          <div className="mt-10">
            <Marquee speed={35} pauseOnHover className="py-4">
              {marqueeItems.map((item) => (
                <span
                  key={item}
                  className="text-sm font-medium text-[#8A8A8A] whitespace-nowrap px-4"
                >
                  <span className="text-[#0A8FBF]/40 mr-8">&diams;</span>
                  {item}
                </span>
              ))}
            </Marquee>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
