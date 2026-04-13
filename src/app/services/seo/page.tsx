import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "SEO & Digital Marketing in South Africa",
  description:
    "SEO and Generative Engine Optimisation for South African businesses. Get found on Google and AI search engines. Origami Digital, Johannesburg.",
  path: "/services/seo",
});

const includes = [
  "Comprehensive technical SEO audit — site speed, crawlability, indexation, and Core Web Vitals",
  "Keyword research targeting high-intent search terms in your industry",
  "Content strategy and creation aligned with search demand",
  "Generative Engine Optimisation (GEO) — structuring content for AI search results",
  "Link building and digital PR to grow domain authority",
  "Monthly reporting with clear metrics and actionable insights",
];

const process = [
  {
    step: "01",
    title: "Audit & Research",
    description:
      "We conduct a thorough technical SEO audit and keyword research to understand where you stand and where the biggest opportunities lie.",
  },
  {
    step: "02",
    title: "Strategy",
    description:
      "We build a prioritised roadmap of technical fixes, content opportunities, and link-building targets based on your goals and competitive landscape.",
  },
  {
    step: "03",
    title: "Execute & Optimise",
    description:
      "We implement technical improvements, create and optimise content, and build authoritative links — tracking rankings and traffic throughout.",
  },
  {
    step: "04",
    title: "Report & Refine",
    description:
      "Monthly reports show exactly what changed and why. We continuously refine the strategy based on real performance data.",
  },
];

const faqs = [
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer:
      "GEO is the practice of optimising your content to appear in AI-generated search results — such as Google AI Overviews, ChatGPT search, and Perplexity. It involves structuring content with clear, factual, well-cited information that AI models can confidently extract and reference. We optimise for both traditional and AI search simultaneously.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO is a long-term investment. You can expect to see initial improvements in 3 to 6 months, with significant results building over 6 to 12 months. Technical fixes often have a faster impact, while content and link-building gains compound over time.",
  },
  {
    question: "Do you guarantee page 1 rankings?",
    answer:
      "No reputable SEO provider can guarantee specific rankings — Google's algorithm changes constantly and no one controls it. What we do guarantee is a data-driven, transparent approach that consistently improves your visibility, traffic, and leads over time.",
  },
];

export default function SeoPage() {
  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#297373] mb-4">
                Grow
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                SEO &amp; Generative Engine Optimisation
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-lg md:text-xl text-[#B0B0B0] max-w-2xl">
                Get found on Google and AI search engines. We optimise your
                digital presence for where your customers are searching today —
                and where they will be searching tomorrow.
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
                You have a great business, but potential customers cannot find you
                online. Your competitors rank higher on Google, and now AI search
                tools are changing the game entirely. Without a clear SEO strategy,
                you are leaving revenue on the table every single day.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">Our Solution</h2>
              <p className="text-[#4A4A4A] text-lg">
                We combine traditional SEO with Generative Engine Optimisation to
                ensure your business appears in both Google results and AI-powered
                search responses. From technical fixes to content strategy, we
                build visibility that compounds over time.
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
                  <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#297373] flex items-center justify-center text-xs font-bold">
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
                  <span className="text-5xl font-bold text-[#297373]/20">
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
                Request a free SEO audit and find out where your biggest growth
                opportunities are.
              </p>
              <Button href="/contact" size="lg">
                Get a Free SEO Audit
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
