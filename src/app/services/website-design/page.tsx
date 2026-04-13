import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Website Design & Development in Johannesburg",
  description:
    "Custom websites built with Next.js and React. Fast, responsive, SEO-optimised web design and development for South African businesses.",
  path: "/services/website-design",
});

const includes = [
  "Custom UI/UX design tailored to your brand and audience",
  "Responsive development that works flawlessly on every device",
  "CMS integration for easy content management",
  "SEO setup — meta tags, structured data, sitemap, and page speed optimisation",
  "Performance optimisation targeting 95+ Lighthouse scores",
  "Hosting setup and deployment on modern infrastructure",
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We learn about your business, audience, and goals. We audit your current digital presence and identify opportunities.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We create wireframes and high-fidelity designs that reflect your brand. You review and approve before a single line of code is written.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "We build your site with modern frameworks like Next.js, ensuring speed, accessibility, and search engine visibility from day one.",
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We handle deployment, DNS configuration, analytics setup, and post-launch monitoring to make sure everything runs smoothly.",
  },
];

const faqs = [
  {
    question: "How long does a website project typically take?",
    answer:
      "Most projects take 4 to 8 weeks from kickoff to launch, depending on complexity. A simple brochure site can be ready in 3 to 4 weeks, while a larger site with custom functionality may take 8 to 12 weeks.",
  },
  {
    question: "What does a website cost?",
    answer:
      "Projects typically range from R30,000 to R150,000 depending on scope. We provide a detailed quote after the discovery phase so there are no surprises.",
  },
  {
    question: "Will my website be optimised for search engines?",
    answer:
      "Absolutely. SEO is baked into every build — proper heading structure, meta tags, structured data, fast load times, mobile responsiveness, and clean URLs are all included as standard.",
  },
];

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#0A8FBF] mb-4">
                Build
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Website Design &amp; Development
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-lg md:text-xl text-[#B0B0B0] max-w-2xl">
                Modern, fast, SEO-optimised websites that convert visitors into
                customers. Built with the same tools used by leading tech companies.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">The Problem</h2>
              <p className="text-[#4A4A4A] text-lg">
                Your website is often the first interaction a potential customer has
                with your business. A slow, outdated, or poorly designed site
                drives people away before they ever learn what you offer. In South
                Africa, many businesses still rely on template sites that look
                generic and perform poorly on mobile.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">Our Solution</h2>
              <p className="text-[#4A4A4A] text-lg">
                We design and build custom websites using modern frameworks like
                Next.js and React. Every site is crafted for speed, accessibility,
                and search engine visibility — giving your business a digital
                presence that works as hard as you do.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              What&apos;s Included
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {includes.map((item, index) => (
              <ScrollReveal key={index} delay={index * 50}>
                <div className="flex items-start gap-4 p-6 rounded-xl bg-[#2A2A2A]">
                  <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#0A8FBF] flex items-center justify-center text-xs font-bold">
                    &#10003;
                  </span>
                  <p className="text-[#B0B0B0]">{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#1E1E1E]">How We Work</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <ScrollReveal key={item.step} delay={index * 100}>
                <div>
                  <span className="text-5xl font-bold text-[#0A8FBF]/20">
                    {item.step}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3 text-[#1E1E1E]">{item.title}</h3>
                  <p className="text-[#4A4A4A]">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>
          <div className="max-w-3xl space-y-8">
            {faqs.map((faq, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{faq.question}</h3>
                  <p className="text-[#B0B0B0]">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1E1E1E]">
                Ready to get started?
              </h2>
              <p className="text-lg text-[#4A4A4A] mb-8">
                Let&apos;s talk about your project. Book a free consultation and
                we will show you what&apos;s possible.
              </p>
              <Button href="/contact" size="lg">
                Get in Touch
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
