import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
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
      <SectionWrapper dark>
        <div className="max-w-3xl">
          <FadeIn>
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-[#0A8FBF] mb-4">
              Build
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Custom Software &amp; SaaS Solutions
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE] max-w-2xl">
              Bespoke business tools and SaaS platforms that solve the problems
              off-the-shelf software cannot touch.
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
              Your team wastes hours on manual processes, spreadsheets, and
              disconnected tools. Generic software forces you to adapt your
              business to its limitations instead of the other way around. As you
              grow, these inefficiencies compound.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-[#4A4A4A] text-lg">
              We build software that fits your business like a glove. From
              internal dashboards and quoting systems to full SaaS products, we
              create tools that automate repetitive work, connect your systems,
              and give you a genuine competitive edge.
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
                <span className="mt-1 flex-shrink-0 h-5 w-5 rounded-full bg-[#0A8FBF] flex items-center justify-center text-xs font-bold">
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
                <span className="text-5xl font-bold text-[#0A8FBF]/20">
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
              Tell us about the problem you need solved. We will map out a
              solution together.
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
