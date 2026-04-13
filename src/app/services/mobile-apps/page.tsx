import { SectionWrapper } from "@/components/ui/section-wrapper";
import { FadeIn } from "@/components/ui/fade-in";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "Mobile App Development",
  description:
    "Cross-platform mobile app development using React Native and PWAs. Build once, deploy everywhere. Origami Digital, Johannesburg.",
  path: "/services/mobile-apps",
});

const includes = [
  "UI/UX design optimised for mobile interactions and gestures",
  "Cross-platform development with React Native — iOS and Android from one codebase",
  "Progressive Web App (PWA) development for browser-based mobile experiences",
  "API integration with your existing systems and third-party services",
  "App store submission and approval management for Apple and Google",
  "Analytics setup to track user behaviour and app performance",
];

const process = [
  {
    step: "01",
    title: "Discovery & Planning",
    description:
      "We define the app's purpose, target users, and core features. We map out user flows and decide on the right technical approach — native, cross-platform, or PWA.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    description:
      "We design intuitive interfaces following platform conventions. Interactive prototypes let you test the experience before development begins.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description:
      "We build the app iteratively, sharing progress at each milestone. Rigorous testing across devices and OS versions ensures a reliable product.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description:
      "We handle app store submissions, monitor performance post-launch, and provide ongoing support and updates as your needs evolve.",
  },
];

const faqs = [
  {
    question: "Should I build a native app or a PWA?",
    answer:
      "It depends on your needs. Native or cross-platform apps (React Native) are best for complex interactions, offline use, and access to device hardware. PWAs are ideal for content-driven apps where you want broad reach without app store friction. We will help you choose the right approach during discovery.",
  },
  {
    question: "How much does a mobile app cost?",
    answer:
      "A simple app typically starts from R80,000, while more complex apps with custom backends and integrations can range from R150,000 to R400,000+. We provide detailed quotes after understanding your requirements.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes. We regularly integrate mobile apps with existing APIs, databases, payment gateways, CRM systems, and third-party services. If your system has an API, we can connect to it.",
  },
];

export default function MobileAppsPage() {
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
              Mobile App Development
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 text-lg md:text-xl text-[#DEDEDE] max-w-2xl">
              Cross-platform mobile applications that deliver native-quality
              experiences on iOS and Android — from a single codebase.
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
              Your customers expect to interact with your business on their
              phones. Without a mobile presence, you are missing opportunities to
              engage users where they spend most of their screen time. Building
              separate apps for iOS and Android doubles your cost and
              maintenance burden.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl font-bold mb-4">Our Solution</h2>
            <p className="text-[#4A4A4A] text-lg">
              We build cross-platform apps using React Native that look and feel
              native on both platforms. One codebase means faster development,
              lower costs, and easier maintenance — without compromising on
              quality or user experience.
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
              Have an app idea? Let&apos;s discuss how to bring it to life.
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
