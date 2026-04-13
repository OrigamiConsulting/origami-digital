import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Google Ads Management",
  description:
    "Google Ads setup and management for South African businesses. Targeted paid search campaigns that drive qualified leads. Origami Digital, Johannesburg.",
  path: "/services/google-ads",
});

const includes = [
  "Campaign setup with proper account structure and conversion tracking",
  "In-depth keyword research focused on high-intent, cost-effective terms",
  "Compelling ad copywriting with multiple variants for A/B testing",
  "Landing page optimisation to maximise conversion rates",
  "Conversion tracking setup across forms, calls, and key actions",
  "Monthly reporting with spend analysis, ROI metrics, and recommendations",
];

const process = [
  {
    step: "01",
    title: "Research & Setup",
    description:
      "We research your market, competitors, and target keywords. We structure your campaigns for maximum relevance and set up conversion tracking.",
  },
  {
    step: "02",
    title: "Launch",
    description:
      "We launch your campaigns with carefully crafted ads, negative keyword lists, and bid strategies aligned with your budget and goals.",
  },
  {
    step: "03",
    title: "Optimise",
    description:
      "We continuously monitor performance, adjust bids, test new ad copy, refine targeting, and eliminate wasted spend to improve your cost per lead.",
  },
];

const faqs = [
  {
    question: "How much should I budget for Google Ads?",
    answer:
      "We recommend a minimum ad spend of R5,000 to R10,000 per month to gather meaningful data, plus our management fee. The ideal budget depends on your industry, competition, and target area. We will help you find the right starting point during our consultation.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "You can start seeing clicks and leads within the first week. However, it typically takes 4 to 8 weeks of data collection and optimisation to reach peak campaign performance. Google Ads delivers faster results than SEO but requires ongoing management to stay profitable.",
  },
  {
    question: "Do you manage the ad spend or do I pay Google directly?",
    answer:
      "You pay Google directly from your own Google Ads account — you always own your data and account. We charge a separate management fee for strategy, setup, optimisation, and reporting.",
  },
];

export default function GoogleAdsPage() {
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
                Google Ads Setup &amp; Management
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-lg md:text-xl text-[#B0B0B0] max-w-2xl">
                Targeted paid search campaigns that put your business in front of
                people actively searching for what you offer — and convert them
                into leads.
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
                SEO takes time, and you need leads now. You have tried running
                Google Ads yourself but the costs spiralled, the leads were poor
                quality, and you could not tell what was actually working. Without
                expertise, it is easy to burn through budget with nothing to show
                for it.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">Our Solution</h2>
              <p className="text-[#4A4A4A] text-lg">
                We set up and manage your Google Ads campaigns with precision —
                targeting the right keywords, writing compelling ads, and
                optimising landing pages for conversions. Every rand of your ad
                spend is tracked and accounted for.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Let&apos;s discuss your advertising goals and build a campaign
                that delivers real results.
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
