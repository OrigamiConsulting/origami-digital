import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { ContactForm } from '@/components/sections/contact-form';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Contact Us',
  description:
    'Get in touch with Origami Digital. Let\u2019s discuss your website, app, SEO, or AI automation project. Free consultation for South African businesses.',
  path: '/contact',
});

const contactFaqs = [
  {
    question: 'What happens after I submit the form?',
    answer:
      'We\u2019ll review your enquiry and get back to you within one business day with some initial thoughts and to schedule a free consultation call.',
  },
  {
    question: 'Is the consultation really free?',
    answer:
      'Yes. The initial consultation is completely free and no-obligation. We\u2019ll discuss your goals, review your current digital presence, and suggest a way forward.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Timelines vary by scope. A business website is typically 4\u20138 weeks, a web application 8\u201312 weeks, and SEO/marketing engagements are ongoing. We\u2019ll give you a clear timeline during the proposal phase.',
  },
  {
    question: 'Do you work with businesses outside Johannesburg?',
    answer:
      'Absolutely. While we\u2019re based in Bedfordview, Johannesburg, we work with clients across South Africa and internationally. Everything is managed digitally.',
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <ScrollReveal>
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="block h-px w-12 bg-[#0A8FBF]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                  Contact
                </span>
                <span className="block h-px w-12 bg-[#0A8FBF]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
                Let&apos;s Build Something Great
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto max-w-2xl text-lg text-[#B0B0B0]">
                Whether you need a new website, want to improve your search
                rankings, or are ready to automate your workflows &mdash; we&apos;d
                love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 className="mb-6 text-2xl font-bold text-[#1E1E1E]">Send us a message</h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact info — narrower column */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={150}>
                <div className="space-y-8">
                  {/* Email */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      Email
                    </h3>
                    <a
                      href="mailto:hello@origami-digital.co.za"
                      className="text-lg font-semibold text-[#0A8FBF] transition-colors hover:text-[#087CA7]"
                    >
                      hello@origami-digital.co.za
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      Location
                    </h3>
                    <p className="text-lg text-[#4A4A4A]">
                      Bedfordview, Johannesburg
                      <br />
                      Gauteng, South Africa
                    </p>
                  </div>

                  {/* Business Hours */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      Business Hours
                    </h3>
                    <p className="text-lg text-[#4A4A4A]">
                      Monday &ndash; Friday
                      <br />
                      08:00 &ndash; 17:00 SAST
                    </p>
                  </div>

                  {/* Map placeholder */}
                  <div className="overflow-hidden rounded-2xl">
                    <div className="flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-[#0A8FBF] to-[#297373] p-8">
                      <div className="text-center">
                        <svg
                          className="mx-auto mb-3 h-10 w-10 text-white/60"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        <p className="text-lg font-bold text-white">
                          Bedfordview, Johannesburg
                        </p>
                        <p className="mt-1 text-sm text-white/60">
                          Gauteng, South Africa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-12 text-3xl font-bold text-[#1E1E1E] md:text-4xl">
                Common Questions
              </h2>
            </div>
          </ScrollReveal>
          <div className="mx-auto max-w-3xl space-y-6">
            {contactFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={100 * i}>
                <div className="rounded-xl bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold text-[#1E1E1E]">
                    {faq.question}
                  </h3>
                  <p className="leading-relaxed text-[#4A4A4A]">{faq.answer}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
