import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { generatePageMetadata } from '@/lib/metadata'
import { PartnersForm } from './form'

export const metadata = generatePageMetadata({
  title: 'Partners — Let\'s Grow Together',
  description:
    'Origami Digital partners with branding agencies, marketing firms, consultants, and accountants across South Africa. Refer clients, earn a share, or build joint offerings.',
  path: '/partners',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Origami Digital Partners Programme',
  description:
    'Referral and partnership programme for South African agencies and consultants. 10% referral fee on first projects or reciprocal referrals.',
  url: 'https://origami-digital.co.za/partners',
}

const partnerTypes = [
  {
    title: 'Branding & graphic design agencies',
    detail: 'You craft the identity. We build the website and digital infrastructure that brings it to life online.',
  },
  {
    title: 'Marketing & PR agencies',
    detail: 'You run the campaigns. We build the landing pages, microsites, and automation that turn awareness into enquiries.',
  },
  {
    title: 'Business consultants & accountants',
    detail: 'Your clients keep asking "know a good web person?" Now you have a senior developer on speed-dial.',
  },
  {
    title: 'Copywriters, photographers & videographers',
    detail: 'You produce the content. We build the websites and platforms where that content lives and converts.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'Introduce us',
    detail: 'Make a warm intro via email or LinkedIn. We handle the rest — scope, proposal, delivery.',
  },
  {
    step: '2',
    title: 'We deliver',
    detail: 'Your client gets a senior-level build with AI-assisted workflows. You stay involved as much or as little as you want.',
  },
  {
    step: '3',
    title: 'You earn',
    detail: 'Choose 10% of the first project invoice (paid once the client pays us), or reciprocal referrals when our clients need your service.',
  },
]

const whatWeBring = [
  '16+ years of senior design and development experience',
  'Modern tech stack — Next.js, React, TypeScript, AI-augmented workflows',
  'Proven track record — SaaS platforms, EV charging dashboards, B2B consulting sites',
  'SEO and GEO (AI search) built into every project from day one',
  'Johannesburg-based, serving clients across South Africa and SADC',
  'No account manager layers — direct access to the person building your client\'s project',
]

const faqs = [
  {
    q: 'Is there a minimum commitment?',
    a: 'None. The partnership is informal. If a project fits both sides, we work together. If not, no pressure and no obligation.',
  },
  {
    q: 'How does the referral fee actually work?',
    a: 'Once the client has paid their first invoice, we pay you 10% of the total project value. Simple, once-off, no complicated ongoing revenue-share to track.',
  },
  {
    q: 'What if I want to white-label instead?',
    a: 'We can do white-label arrangements for established partners. Talk to us about it — we have existing partners we work with this way.',
  },
  {
    q: 'Do you work outside Johannesburg?',
    a: 'Yes. We serve clients across South Africa and increasingly across SADC. The partnership is location-independent.',
  },
]

export default function PartnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="noise-texture bg-[#141414] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A8FBF]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0A8FBF]">
                Origami Digital Partners
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Let&apos;s grow{' '}
              <span className="text-[#E8503E]">together.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-[#B0B0B0]">
              We partner with branding agencies, marketing firms, consultants, and accountants across South Africa. You bring the relationship — we bring the senior-level dev and design. Everyone wins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Who this is for */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                Who we partner with
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-[#1E1E1E] md:text-4xl">
                Your clients need a website. You need a trusted dev partner.
              </h2>
              <p className="mx-auto max-w-2xl text-[#4A4A4A]">
                If you serve businesses that eventually need websites, apps, SEO, or automation — but development isn&apos;t your core service — we should talk.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {partnerTypes.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-[#DEDEDE] bg-[#F5F5F5] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] text-xl font-bold text-[#1E1E1E]">
                    {item.title}
                  </h3>
                  <p className="text-[#4A4A4A]">{item.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="noise-texture bg-[#141414] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                How it works
              </p>
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                Simple, informal, non-exclusive
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {howItWorks.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="h-full rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-8">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0A8FBF]/20 font-[family-name:var(--font-display)] text-xl font-bold text-[#0A8FBF]">
                    {step.step}
                  </div>
                  <h3 className="mb-3 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-[#B0B0B0]">{step.detail}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring */}
      <section className="bg-white px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#8A8A8A]">
                  What we bring
                </p>
                <h2 className="mb-6 font-[family-name:var(--font-display)] text-3xl font-bold text-[#1E1E1E] md:text-4xl">
                  Senior-level delivery without agency overhead
                </h2>
                <p className="text-[#4A4A4A]">
                  When you refer a client, you&apos;re not handing them to a junior dev on a big team. You&apos;re handing them to Tinashe directly — 16+ years of experience, using the same AI-augmented workflows that the best engineering teams in the world use today.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <ul className="space-y-3">
                {whatWeBring.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0A8FBF]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-[#4A4A4A]">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="noise-texture bg-[#141414] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <h2 className="mb-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
                Start the conversation
              </h2>
              <p className="text-[#B0B0B0]">
                Tell us what you do and how you think we could work together. We&apos;ll reply within two business days.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="rounded-2xl border border-[#2A2A2A] bg-[#1E1E1E] p-6 shadow-2xl md:p-8">
              <PartnersForm />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F5F5F5] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="mb-10 text-center font-[family-name:var(--font-display)] text-3xl font-bold text-[#1E1E1E] md:text-4xl">
              Common questions
            </h2>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 80}>
                <div className="rounded-xl border border-[#DEDEDE] bg-white p-6">
                  <h3 className="mb-2 font-[family-name:var(--font-display)] font-bold text-[#1E1E1E]">
                    {faq.q}
                  </h3>
                  <p className="text-[#4A4A4A]">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
