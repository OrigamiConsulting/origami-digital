import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
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
      <SectionWrapper dark>
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#297373] mb-4">
              Grow
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Google Ads Setup &amp; Management
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE] max-w-2xl">
              Targeted paid search campaigns that put your business in front of
              people actively searching for what you offer — and convert them
              into leads.
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
              SEO takes time, and you need leads now. You have tried running
              Google Ads yourself but the costs spiralled, the leads were poor
              quality, and you could not tell what was actually working. Without
              expertise, it is easy to burn through budget with nothing to show
              for it.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-[#4A4A4A] text-lg">
              We set up and manage your Google Ads campaigns with precision —
              targeting the right keywords, writing compelling ads, and
              optimising landing pages for conversions. Every rand of your ad
              spend is tracked and accounted for.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Let&apos;s discuss your advertising goals and build a campaign
              that delivers real results.
            </p>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
