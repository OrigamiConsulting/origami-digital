import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata = generatePageMetadata({
  title: "About Us",
  description:
    "Meet Tinashe Munyaka, the founder of Origami Digital — an AI-augmented digital agency in Johannesburg delivering enterprise-quality digital solutions.",
  path: "/about",
});

const values = [
  {
    title: "Precision",
    description:
      "Every pixel, every line of code, every strategy is intentional. We don\u2019t cut corners \u2014 we fold them with purpose.",
  },
  {
    title: "Transparency",
    description:
      "Clear communication, honest timelines, no hidden costs. You\u2019ll always know where your project stands.",
  },
  {
    title: "Partnership",
    description:
      "We succeed when you succeed. Your goals drive everything we do, from first conversation to final delivery.",
  },
  {
    title: "Innovation",
    description:
      "We embrace new technology to deliver better results, faster. AI isn\u2019t a buzzword here \u2014 it\u2019s built into how we work.",
  },
];

const benefits = [
  {
    title: "Faster Delivery",
    description:
      "AI-assisted development and design workflows mean projects are completed in weeks, not months. You get to market faster without sacrificing quality.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0A8FBF]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Lower Costs",
    description:
      "No bloated team, no office overheads, no layers of account managers. The savings get passed directly to you as competitive pricing.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0A8FBF]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    title: "Enterprise Quality",
    description:
      "The same modern tech stack and best practices used by world-class product teams. You get senior-level expertise on every project.",
    icon: (
      <svg
        className="h-8 w-8 text-[#0A8FBF]"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#141414] py-24 md:py-32 px-6 noise-texture text-center">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="overline text-[#0A8FBF] mb-4">
              About Origami Digital
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white font-[family-name:var(--font-display)]">
              The Story Behind{" "}
              <span className="text-[#0A8FBF]">Origami Digital</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-[#B0B0B0] font-medium mb-8 font-[family-name:var(--font-body)]">
              Precision. Transformation. Craft.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="max-w-2xl mx-auto text-lg text-[#B0B0B0] leading-relaxed font-[family-name:var(--font-body)]">
              Like the art of origami, great digital work requires patience,
              precision, and the ability to transform something simple into
              something extraordinary. A single sheet of paper becomes a work of
              art. A clear strategy becomes a thriving digital presence.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-[#1E1E1E]">
                  <Image
                    src="/images/team/tinashe-munyaka.jpg"
                    alt="Tinashe Munyaka, Founder of Origami Digital"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="overline text-[#0A8FBF] mb-3">
                  Meet the Founder
                </p>
                <h2 className="section-heading text-[#1E1E1E] mb-6">
                  Tinashe Munyaka
                </h2>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-4 font-[family-name:var(--font-body)]">
                  Expert UI/UX Designer and Software Engineer based in
                  Johannesburg, South Africa. Since 2010, I&apos;ve been designing
                  and building digital products — from complex enterprise
                  platforms to lean SaaS applications.
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-4 font-[family-name:var(--font-body)]">
                  My experience spans working with enterprise-level tools and
                  methodologies used by teams at companies like ServiceNow and
                  Shopify. That background informs everything I build today:
                  scalable, performant, and designed with real users in mind.
                </p>
                <p className="text-[#4A4A4A] text-lg leading-relaxed mb-6 font-[family-name:var(--font-body)]">
                  Now, I&apos;ve channelled over 16 years of experience into
                  Origami Digital — an AI-augmented studio that delivers
                  enterprise-quality results without the agency overhead. By
                  operating lean and leveraging AI across every stage of design
                  and development, we move faster, build smarter, and keep costs
                  competitive — across web, mobile, and any platform your
                  business needs.
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "UI/UX Design",
                    "Web Development",
                    "Mobile Apps",
                    "React / Next.js",
                    "iOS / Android",
                    "AI Integration",
                    "E-Commerce",
                    "SaaS",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-1.5 rounded-full bg-[#F5F5F5] text-[#4A4A4A] text-sm font-medium font-[family-name:var(--font-body)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* AI-Augmented Approach */}
      <section className="bg-[#141414] py-24 md:py-32 px-6 noise-texture">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="overline text-[#0A8FBF] mb-3">
                Our Approach
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading text-white mb-6">
                Why AI-Augmented?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="max-w-3xl mx-auto text-lg text-[#B0B0B0] leading-relaxed mb-4 font-[family-name:var(--font-body)]">
                The digital landscape has fundamentally changed. AI isn&apos;t
                replacing good work — it&apos;s amplifying it. We use AI tools
                throughout our entire workflow: from research and design
                exploration to code generation and quality assurance.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="max-w-3xl mx-auto text-lg text-[#B0B0B0] leading-relaxed italic font-[family-name:var(--font-body)]">
                &ldquo;No bloated agency overhead. No layers of account managers.
                Direct access to a senior practitioner who builds with the same
                tools used by teams at companies like ServiceNow and
                Shopify.&rdquo;
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={100 * index}>
                <div className="bg-[#2A2A2A] rounded-2xl p-8 h-full transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-5">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-white font-[family-name:var(--font-display)]">{benefit.title}</h3>
                  <p className="text-[#B0B0B0] leading-relaxed font-[family-name:var(--font-body)]">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <ScrollReveal>
              <p className="overline text-[#0A8FBF] mb-3">
                What We Stand For
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="section-heading text-[#1E1E1E] mb-6">Our Values</h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="max-w-2xl mx-auto text-lg text-[#4A4A4A] leading-relaxed font-[family-name:var(--font-body)]">
                These principles guide every project, every decision, and every
                client relationship.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={100 * index}>
                <div className="text-center p-6">
                  <div className="w-14 h-14 rounded-xl bg-[#0A8FBF]/10 flex items-center justify-center mx-auto mb-5">
                    <span className="text-[#0A8FBF] font-bold text-xl font-[family-name:var(--font-display)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#1E1E1E] font-[family-name:var(--font-display)]">{value.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed font-[family-name:var(--font-body)]">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#141414] py-24 md:py-32 px-6 noise-texture text-center">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-white mb-6">
              Ready to work together?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="max-w-xl mx-auto text-lg text-[#B0B0B0] leading-relaxed mb-8 font-[family-name:var(--font-body)]">
              Whether you need a new website, want to improve your search
              rankings, or are curious about how AI can streamline your business
              — let&apos;s talk.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Button href="/contact" size="lg">
              Get in Touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
