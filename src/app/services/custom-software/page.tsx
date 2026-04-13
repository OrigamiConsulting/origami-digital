import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Custom Software & SaaS Development",
  description:
    "Bespoke software and SaaS platforms built for South African businesses. From internal tools to full-scale products. Origami Digital, Johannesburg.",
  path: "/services/custom-software",
});

const includes = [
  "In-depth requirements analysis and stakeholder interviews",
  "System architecture and technology selection",
  "Full-stack development with modern, scalable frameworks",
  "Comprehensive testing — unit, integration, and end-to-end",
  "Deployment to production-grade cloud infrastructure",
  "Ongoing maintenance, updates, and feature development",
];

const process = [
  {
    step: "01",
    title: "Requirements Analysis",
    description:
      "We work with you to understand your workflows, pain points, and goals. We document functional requirements and define the scope of the solution.",
  },
  {
    step: "02",
    title: "Architecture & Planning",
    description:
      "We design the system architecture, choose the right technology stack, and create a development roadmap with clear milestones.",
  },
  {
    step: "03",
    title: "Iterative Development",
    description:
      "We build in sprints, delivering working software every two weeks. You review, provide feedback, and we refine until it is exactly right.",
  },
  {
    step: "04",
    title: "Launch & Evolve",
    description:
      "We deploy your software, train your team, and provide ongoing support. As your business evolves, your software evolves with it.",
  },
];

const faqs = [
  {
    question: "When does custom software make sense over off-the-shelf tools?",
    answer:
      "Custom software is the right choice when your business processes are unique enough that off-the-shelf tools require too many workarounds, when you need to integrate multiple systems, or when you want a competitive advantage through technology that your competitors cannot simply buy.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We primarily work with TypeScript, React, Next.js, Node.js, and PostgreSQL — a modern, proven stack that balances developer productivity with long-term maintainability. We choose tools based on your specific needs, not trends.",
  },
  {
    question: "Can you take over or improve an existing system?",
    answer:
      "Yes. We regularly audit, refactor, and extend existing codebases. Whether you need bug fixes, performance improvements, or new features added to an existing platform, we can help.",
  },
];

export default function CustomSoftwarePage() {
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
                Custom Software &amp; SaaS Solutions
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-6 text-lg md:text-xl text-[#B0B0B0] max-w-2xl">
                Bespoke business tools and SaaS platforms that solve the problems
                off-the-shelf software cannot touch.
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
                Your team wastes hours on manual processes, spreadsheets, and
                disconnected tools. Generic software forces you to adapt your
                business to its limitations instead of the other way around. As you
                grow, these inefficiencies compound.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="text-3xl font-bold mb-4 text-[#1E1E1E]">Our Solution</h2>
              <p className="text-[#4A4A4A] text-lg">
                We build software that fits your business like a glove. From
                internal dashboards and quoting systems to full SaaS products, we
                create tools that automate repetitive work, connect your systems,
                and give you a genuine competitive edge.
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
                Tell us about the problem you need solved. We will map out a
                solution together.
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
