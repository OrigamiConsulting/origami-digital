'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { SectionWrapper } from '@/components/ui/section-wrapper';

const differentiators = [
  {
    metric: '10+',
    label: 'Years of Experience',
    description:
      'From enterprise platforms to startup MVPs, we bring deep expertise in UI/UX design and full-stack development to every project.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="16" r="2" />
      </svg>
    ),
  },
  {
    metric: '95+',
    label: 'Lighthouse Performance',
    description:
      "We build fast, accessible, SEO-optimised websites that score in the top percentile on Google's performance benchmarks.",
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2a10 10 0 1 0 10 10" />
        <path d="M12 12l7-7" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 6v2" />
        <path d="M6 12h2" />
        <path d="M12 18v-2" />
        <path d="M18 12h-2" />
      </svg>
    ),
  },
  {
    metric: '2-3x',
    label: 'Faster Delivery',
    description:
      'Our AI-augmented workflow means enterprise-quality results delivered faster and more cost-effectively than traditional agencies.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l2.4 3.6L18 4l-1.2 3.6L20.4 9H16.8L15.6 12l-1.8-3H10.2L8.4 12 7.2 9H3.6l3.6-1.4L6 4l3.6 1.6z" />
        <path d="M8 14l-2 8 6-4 6 4-2-8" />
      </svg>
    ),
  },
  {
    metric: '0',
    label: 'Layers of Account Managers',
    description:
      'No middlemen. You work directly with the senior practitioner who designs and builds your solution. Clear communication, faster decisions.',
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="10" cy="7" r="4" />
        <path d="M22 11l-3-3-3 3" />
        <path d="M19 8v6" />
      </svg>
    ),
  },
];

export function WhyWorkWithUs() {
  return (
    <SectionWrapper id="why-work-with-us" className="bg-[#F5F5F5]">
      <FadeIn>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Why Work With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8A8A8A]">
            Senior expertise meets AI-powered efficiency.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        {differentiators.map((item, index) => (
          <FadeIn key={item.label} delay={index * 0.12}>
            <div className="relative h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              {/* Icon in top-right corner */}
              <span className="absolute right-6 top-6 text-[#DEDEDE]">
                {item.icon}
              </span>

              <div className="relative">
                <p className="font-display text-5xl font-bold text-[#0A8FBF]">
                  {item.metric}
                </p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-[#8A8A8A]">
                  {item.label}
                </p>
                <p className="mt-4 leading-relaxed text-[#4A4A4A]">
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
