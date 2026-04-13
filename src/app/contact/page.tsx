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

                  {/* Phone */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      Phone
                    </h3>
                    <a
                      href="tel:+27781900107"
                      className="text-lg font-semibold text-[#0A8FBF] transition-colors hover:text-[#087CA7]"
                    >
                      +27 (0)78 190 0107
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      WhatsApp
                    </h3>
                    <a
                      href="https://wa.me/27781900107"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-lg font-semibold text-[#25D366] transition-colors hover:text-[#1da851]"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      +27 (0)78 190 0107
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                      Location
                    </h3>
                    <p className="text-lg text-[#4A4A4A]">
                      Kloof Estates, Bedfordview
                      <br />
                      Johannesburg, South Africa
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

                  {/* Google Maps Embed */}
                  <div className="overflow-hidden rounded-2xl ring-1 ring-[#DEDEDE]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28603.71392164706!2d28.12!3d-26.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e547e2fe7e1%3A0x622880b3b6e15aef!2sBedfordview%2C%20Germiston!5e0!3m2!1sen!2sza!4v1713000000000!5m2!1sen!2sza"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Origami Digital location — Bedfordview, Johannesburg"
                      className="w-full"
                    />
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
