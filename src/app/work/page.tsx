import Link from 'next/link';
import Image from 'next/image';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Our Work',
  description:
    'Explore our portfolio of web applications, SaaS platforms, and digital solutions built for South African businesses. Real projects, real results.',
  path: '/work',
});

interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    slug: 'origami-finance',
    title: 'Origami Finance',
    description:
      'Built a comprehensive invoicing solution tailored for South African businesses with automated tax calculations and multi-currency support.',
    tags: ['Next.js', 'SaaS', 'Fintech'],
    image: '/images/portfolio/origami-finance.png',
    url: 'https://origami-finance.co.za',
  },
  {
    slug: 'origami-pay',
    title: 'Origami Pay',
    description:
      'Streamlined payslip generation for SA businesses with automated calculations, SARS compliance, and bulk processing.',
    tags: ['React', 'SaaS', 'HR Tech'],
    image: '/images/portfolio/origami-pay.png',
    url: 'https://origami-pay.co.za',
  },
  {
    slug: 'ev-connect',
    title: 'EV Connect',
    description:
      'Developed a charge point management system with real-time monitoring, payment integration, and fleet management.',
    tags: ['Next.js', 'IoT', 'Dashboard'],
    image: '/images/portfolio/ev-connect.png',
    url: 'https://www.origamievconnect.com',
  },
  {
    slug: 'impactroots',
    title: 'ImpactRoots',
    description:
      'Designed and built a professional web presence for a skills development consultancy.',
    tags: ['Web Design', 'B2B'],
    image: '/images/portfolio/impactroots.png',
    url: 'https://www.impactroots.co.za',
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <ScrollReveal>
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="block h-px w-12 bg-[#0A8FBF]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                  Portfolio
                </span>
                <span className="block h-px w-12 bg-[#0A8FBF]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Our Work</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto max-w-2xl text-lg text-[#B0B0B0]">
                Real projects. Real results. Here&apos;s a selection of the
                digital products and platforms we&apos;ve built.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <ScrollReveal key={project.slug} delay={100 * index}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-2xl bg-[#F5F5F5] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.description}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="mb-2 text-xl font-bold text-[#1E1E1E]">
                      {project.title}
                    </h2>
                    <p className="mb-4 text-sm leading-relaxed text-[#4A4A4A]">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[#DEDEDE] bg-white px-3 py-1 text-xs font-medium text-[#4A4A4A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A8FBF] transition-colors group-hover:text-[#087CA7]">
                      Visit Live Site
                      <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-lg text-[#B0B0B0]">
                We&apos;d love to hear about it. Let&apos;s chat about how we can
                bring your vision to life.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-[#E8503E] px-8 py-4 text-lg font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#D14535] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8503E] focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                Get in Touch
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
