import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "AI Automation for South African Businesses",
  description:
    "AI-powered workflow automation, chatbots, and document processing for South African businesses. Save time and reduce costs with intelligent automation.",
  path: "/services/ai-automation",
});

const includes = [
  "Process analysis to identify the highest-impact automation opportunities",
  "AI tool selection — matching the right technology to your specific needs",
  "Custom integration with your existing systems and workflows",
  "AI chatbot development for customer service and lead qualification",
  "Dashboard and reporting tool creation for real-time business insights",
  "Training and ongoing support to ensure your team gets the most from every tool",
];

const process = [
  {
    step: "01",
    title: "Assess",
    description:
      "We audit your current processes to identify repetitive tasks, bottlenecks, and manual steps that are costing you time and money.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "We design automation workflows and select the right AI tools — from Claude and GPT to Zapier, n8n, and custom integrations.",
  },
  {
    step: "03",
    title: "Build & Test",
    description:
      "We build your automations, test them rigorously with real data, and refine until they work reliably in production.",
  },
  {
    step: "04",
    title: "Deploy & Train",
    description:
      "We deploy the solution, train your team, and provide documentation. We stay on hand for support and future enhancements.",
  },
];

const faqs = [
  {
    question: "What kind of tasks can be automated with AI?",
    answer:
      "Common examples include email triage and responses, document processing and data extraction, customer support chatbots, lead qualification, report generation, invoice processing, appointment scheduling, and data entry between systems. If a task is repetitive and rule-based — or requires processing text and documents — there is likely an AI solution for it.",
  },
  {
    question: "Is AI automation only for large companies?",
    answer:
      "Not at all. Many of the most impactful automations are for small and mid-sized businesses where every hour counts. A solo accounting firm automating document intake or a property agency automating lead responses can see dramatic time savings from relatively simple implementations.",
  },
  {
    question: "How do you ensure data privacy and security?",
    answer:
      "We follow best practices for data handling — using secure APIs, encrypted connections, and ensuring your data stays within approved services. For sensitive industries, we can implement on-premise or private-cloud solutions that keep data entirely within your control.",
  },
];

export default function AiAutomationPage() {
  return (
    <>
      {/* Hero */}
      <SectionWrapper dark>
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#EF6351] mb-4">
              Automate
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              AI-Powered Business Automation
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE] max-w-2xl">
              Workflow automation, AI chatbots, and intelligent document
              processing that save your team hours every week — so you can
              focus on growing your business.
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
              Your team spends hours on repetitive tasks — copying data between
              systems, answering the same customer questions, processing
              documents manually, and generating reports. These tasks do not
              require human intelligence, but they consume human time.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-[#4A4A4A] text-lg">
              We identify your highest-impact automation opportunities and build
              AI-powered solutions that handle the repetitive work. From
              intelligent chatbots to document processing pipelines, we help
              your business do more with less — without replacing your team,
              but by freeing them to do meaningful work.
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
                <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#EF6351] flex items-center justify-center text-xs font-bold">
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
                <span className="text-5xl font-bold text-[#EF6351]/20">
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
              Book a free AI readiness assessment and discover how automation
              can transform your operations.
            </p>
            <Button href="/contact" size="lg">
              Book a Free Assessment
            </Button>
          </FadeIn>
        </div>
      </SectionWrapper>
    </>
  );
}
