"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/fade-in";
import { SectionWrapper } from "@/components/ui/section-wrapper";

interface ServicePillar {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  linkText: string;
  accentColour: string;
}

const pillars: ServicePillar[] = [
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 10L4 20L12 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28 10L36 20L28 30"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23 8L17 32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Build",
    subtitle: "Digital Product Development",
    description:
      "Custom websites, mobile apps, and software solutions built with modern technology stacks.",
    bullets: [
      "Website Design & Development",
      "Mobile App Development",
      "Custom Software & SaaS",
      "UI/UX Design",
    ],
    linkText: "Explore Build Services",
    accentColour: "#0A8FBF",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 32L14 18L22 24L34 8"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M26 8H34V16"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Grow",
    subtitle: "Search & Digital Visibility",
    description:
      "Get found online and convert visitors into customers with data-driven digital marketing.",
    bullets: [
      "SEO & GEO",
      "Google Ads",
      "Content Strategy",
      "Analytics & Optimisation",
    ],
    linkText: "Explore Grow Services",
    accentColour: "#297373",
  },
  {
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 6V14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M20 26V34"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M8 20H14"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M26 20H32"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle
          cx="20"
          cy="20"
          r="6"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M10.5 10.5L14.5 14.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M25.5 25.5L29.5 29.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M29.5 10.5L25.5 14.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M14.5 25.5L10.5 29.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Automate",
    subtitle: "AI-Powered Business Solutions",
    description:
      "Streamline operations and reduce costs with intelligent automation and AI tools.",
    bullets: [
      "Workflow Automation",
      "AI Chatbots",
      "Document Processing",
      "Custom Business Tools",
    ],
    linkText: "Explore Automation Services",
    accentColour: "#EF6351",
  },
];

export function ServicesOverview() {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-16">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="block h-px w-12 bg-[#0A8FBF]" />
            <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
              Services
            </span>
            <span className="block h-px w-12 bg-[#0A8FBF]" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
            What We Do
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
            Three pillars. One goal — transforming your digital presence.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => (
          <FadeIn key={pillar.title} delay={0.1 * index}>
            <div
              className="group relative rounded-2xl bg-white shadow-md overflow-hidden
                         transition-all duration-300 ease-out
                         hover:-translate-y-1 hover:shadow-xl h-full flex flex-col"
              style={{ borderTop: `4px solid ${pillar.accentColour}` }}
            >
              <div className="p-8 flex flex-col flex-1">
                <div
                  className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl"
                  style={{
                    backgroundColor: `${pillar.accentColour}14`,
                    color: pillar.accentColour,
                  }}
                >
                  {pillar.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-1">
                  {pillar.title}
                </h3>
                <p
                  className="text-sm font-semibold uppercase tracking-wide mb-4"
                  style={{ color: pillar.accentColour }}
                >
                  {pillar.subtitle}
                </p>

                <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {pillar.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-[#4A4A4A]"
                    >
                      <span
                        className="mt-1.5 block h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: pillar.accentColour }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/services"
                  className="inline-flex items-center text-sm font-semibold transition-colors duration-200 group/link"
                  style={{ color: pillar.accentColour }}
                >
                  {pillar.linkText}
                  <span className="ml-1 transition-transform duration-200 group-hover/link:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
