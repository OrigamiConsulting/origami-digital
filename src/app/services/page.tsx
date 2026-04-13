import Link from "next/link";
import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Our Services",
  description:
    "Digital services to build, grow, and automate your business. Website design, SEO, AI automation, and more from Origami Digital in Johannesburg.",
  path: "/services",
});

const pillars = [
  {
    name: "Build",
    tagline: "Digital Product Development",
    colour: "#0A8FBF",
    services: [
      {
        title: "Website Design & Development",
        href: "/services/website-design",
        description:
          "Custom websites built with modern frameworks like Next.js and React. Fast, responsive, and optimised for search engines.",
      },
      {
        title: "Mobile App Development",
        href: "/services/mobile-apps",
        description:
          "Cross-platform mobile applications using React Native and PWAs. One codebase, every device.",
      },
      {
        title: "Custom Software & SaaS",
        href: "/services/custom-software",
        description:
          "Bespoke business tools and SaaS platforms tailored to your workflows and growth goals.",
      },
    ],
  },
  {
    name: "Grow",
    tagline: "Search & Digital Visibility",
    colour: "#297373",
    services: [
      {
        title: "SEO & Generative Engine Optimisation",
        href: "/services/seo",
        description:
          "Get found on Google and AI search engines. Technical SEO, content strategy, and GEO to future-proof your visibility.",
      },
      {
        title: "Google Ads",
        href: "/services/google-ads",
        description:
          "Targeted paid search campaigns that drive qualified leads. Setup, management, and ongoing optimisation.",
      },
    ],
  },
  {
    name: "Automate",
    tagline: "AI-Powered Business Solutions",
    colour: "#EF6351",
    services: [
      {
        title: "AI Automation & Business Solutions",
        href: "/services/ai-automation",
        description:
          "Workflow automation, AI chatbots, document processing, and custom internal tools that save hours every week.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper dark>
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Services
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE]">
              Build. Grow. Automate. — Everything you need for digital success.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Pillars */}
      {pillars.map((pillar, pillarIndex) => (
        <SectionWrapper key={pillar.name} dark={pillarIndex % 2 !== 0}>
          <FadeIn>
            <div className="mb-12">
              <span
                className="inline-block text-sm font-semibold tracking-widest uppercase mb-2"
                style={{ color: pillar.colour }}
              >
                {pillar.name}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold">
                {pillar.tagline}
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillar.services.map((service, serviceIndex) => (
              <FadeIn
                key={service.href}
                delay={serviceIndex * 0.1}
              >
                <Link
                  href={service.href}
                  className="group block h-full rounded-2xl border border-[#DEDEDE]/20 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    backgroundColor:
                      pillarIndex % 2 !== 0
                        ? "rgba(255,255,255,0.05)"
                        : "rgba(30,30,30,0.03)",
                  }}
                >
                  <div
                    className="mb-4 h-12 w-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${pillar.colour}20` }}
                  >
                    <div
                      className="h-5 w-5 rounded-sm"
                      style={{ backgroundColor: pillar.colour }}
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p
                    className={`text-base mb-6 ${
                      pillarIndex % 2 !== 0
                        ? "text-[#DEDEDE]"
                        : "text-[#4A4A4A]"
                    }`}
                  >
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center text-sm font-semibold transition-colors"
                    style={{ color: pillar.colour }}
                  >
                    Learn More
                    <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Not sure where to start?
            </h2>
            <p className="text-lg text-[#DEDEDE] mb-8">
              Book a free consultation and we will help you identify the highest-impact
              opportunities for your business.
            </p>
            <Button href="/contact" size="lg">
              Get a Free Consultation
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
