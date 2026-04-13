import Link from 'next/link';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { FadeIn } from '@/components/ui/fade-in';
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
  gradientFrom: string;
  gradientTo: string;
}

const projects: Project[] = [
  {
    slug: 'origami-finance',
    title: 'Origami Finance',
    description:
      'Built a comprehensive invoicing solution tailored for South African businesses with automated tax calculations and multi-currency support.',
    tags: ['Next.js', 'SaaS', 'Fintech'],
    gradientFrom: '#0A8FBF',
    gradientTo: '#297373',
  },
  {
    slug: 'origami-pay',
    title: 'Origami Pay',
    description:
      'Streamlined payslip generation for SA businesses with automated calculations, SARS compliance, and bulk processing.',
    tags: ['React', 'SaaS', 'HR Tech'],
    gradientFrom: '#297373',
    gradientTo: '#0A8FBF',
  },
  {
    slug: 'ev-connect',
    title: 'EV Connect',
    description:
      'Developed a charge point management system with real-time monitoring, payment integration, and fleet management.',
    tags: ['Next.js', 'IoT', 'Dashboard'],
    gradientFrom: '#1E1E1E',
    gradientTo: '#0A8FBF',
  },
  {
    slug: 'impactroots',
    title: 'ImpactRoots',
    description:
      'Designed and built a professional web presence for a skills development consultancy.',
    tags: ['Web Design', 'B2B'],
    gradientFrom: '#297373',
    gradientTo: '#1E1E1E',
  },
];

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper dark>
        <div className="text-center">
          <FadeIn>
            <div className="mb-4 flex items-center justify-center gap-4">
              <span className="block h-px w-12 bg-[#0A8FBF]" />
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                Portfolio
              </span>
              <span className="block h-px w-12 bg-[#0A8FBF]" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">Our Work</h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto max-w-2xl text-lg text-[#8A8A8A]">
              Real projects. Real results. Here&apos;s a selection of the
              digital products and platforms we&apos;ve built.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Projects grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={0.1 * index}>
              <Link
                href={`/work/${project.slug}`}
                className="group block overflow-hidden rounded-2xl bg-[#F5F5F5] transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-xl"
              >
                {/* Gradient placeholder image */}
                <div
                  className="flex aspect-video items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                  }}
                >
                  <span className="select-none text-xl font-bold tracking-wider text-white/30">
                    {project.title}
                  </span>
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
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A8FBF] transition-colors group-hover:text-[#087CA7]">
                    View Case Study
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark>
        <FadeIn>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-[#8A8A8A]">
              We&apos;d love to hear about it. Let&apos;s chat about how we can
              bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#EF6351] px-8 py-4 text-lg font-semibold text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#D94F3F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EF6351] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
