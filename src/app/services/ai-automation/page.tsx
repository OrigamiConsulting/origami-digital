import { ScrollReveal } from "@/components/ui/scroll-reveal";
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
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#E8503E] mb-4">
                Automate
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                AI-Powered Business Automation
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-lg md:text-xl text-[#B0B0B0] max-w-2xl">
                Workflow automation, AI chatbots, and intelligent document
                processing that save your team hours every week — so you can
                focus on growing your business.
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
                Your team spends hours on repetitive tasks — copying data between
                systems, answering the same customer questions, processing
                documents manually, and generating reports. These tasks do not
                require human intelligence, but they consume human time.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">Our Solution</h2>
              <p className="text-[#4A4A4A] text-lg">
                We identify your highest-impact automation opportunities and build
                AI-powered solutions that handle the repetitive work. From
                intelligent chatbots to document processing pipelines, we help
                your business do more with less — without replacing your team,
                but by freeing them to do meaningful work.
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
                  <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#E8503E] flex items-center justify-center text-xs font-bold">
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
                  <span className="text-5xl font-bold text-[#E8503E]/20">
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
                Book a free AI readiness assessment and discover how automation
                can transform your operations.
              </p>
              <Button href="/contact" size="lg">
                Book a Free Assessment
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
