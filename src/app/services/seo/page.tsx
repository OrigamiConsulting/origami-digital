import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
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
      <SectionWrapper dark>
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#297373] mb-4">
              Grow
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              SEO &amp; Generative Engine Optimisation
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE] max-w-2xl">
              Get found on Google and AI search engines. We optimise your
              digital presence for where your customers are searching today —
              and where they will be searching tomorrow.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Problem / Solution */}
      <SectionWrapper>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">The Problem</h2>
            <p className="text-[#4A4A4A] text-lg">
              You have a great business, but potential customers cannot find you
              online. Your competitors rank higher on Google, and now AI search
              tools are changing the game entirely. Without a clear SEO strategy,
              you are leaving revenue on the table every single day.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-[#4A4A4A] text-lg">
              We combine traditional SEO with Generative Engine Optimisation to
              ensure your business appears in both Google results and AI-powered
              search responses. From technical fixes to content strategy, we
              build visibility that compounds over time.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* What's Included */}
      <SectionWrapper dark>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            What&apos;s Included
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {includes.map((item, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-[#2A2A2A]">
                <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#297373] flex items-center justify-center text-xs font-bold">
                  &#10003;
                </span>
                <p className="text-[#DEDEDE]">{item}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">How We Work</h2>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.1}>
              <div>
                <span className="text-5xl font-bold text-[#297373]/20">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">{item.title}</h3>
                <p className="text-[#4A4A4A]">{item.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper dark>
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Frequently Asked Questions
          </h2>
        </FadeIn>
        <div className="max-w-3xl space-y-8">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div>
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-[#DEDEDE]">{faq.answer}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper>
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-lg text-[#4A4A4A] mb-8">
              Request a free SEO audit and find out where your biggest growth
              opportunities are.
            </p>
            <Button href="/contact" size="lg">
              Get a Free SEO Audit
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
