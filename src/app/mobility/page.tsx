import type { Metadata } from 'next'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Marquee } from '@/components/ui/marquee'
import {
  MOBILITY_URL,
  PARENT_URL,
  CONTACT_EMAIL,
  MOBILITY_BLUE,
  demoHref,
  hero,
  capabilities,
  doors,
  sixCents,
  beats,
  demoCaption,
  builtForHere,
  contact,
  seo,
  type Beat,
  type Door,
} from './content'

/**
 * Origami Mobility, served at https://mobility.origami-digital.co.za/ (see
 * src/proxy.ts) and reachable at /mobility on the main host. The canonical is
 * the subdomain so the two never compete.
 */
export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  alternates: { canonical: `${MOBILITY_URL}/` },
  icons: {
    icon: [{ url: '/mobility/icon-64.png', sizes: '64x64', type: 'image/png' }],
    apple: [{ url: '/mobility/icon-180.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: `${MOBILITY_URL}/`,
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/mobility/og.png', width: 1200, height: 630, alt: seo.ogAlt }],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: ['/mobility/og.png'],
  },
}

function MobilityJsonLd() {
  const software = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Origami Mobility',
    url: `${MOBILITY_URL}/`,
    image: `${PARENT_URL}/mobility/og.png`,
    description: seo.description,
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Ride-hailing and fleet dispatch platform',
    operatingSystem: 'Android, iOS, Web',
    featureList: [
      'White-label rider and driver apps',
      'Cash-first fares',
      'Driver commission collected through an agent network',
      'Operator console with dispatch board',
      'Fleet mode: roster onboarding, office-priced bookings, book-ahead, on-account statements',
      'Append-only ledger',
      'Self-hosted maps',
    ],
    areaServed: ['ZW', 'ZA', 'ZM', 'MW', 'MZ'].map((code) => ({
      '@type': 'Country',
      name: code,
    })),
    author: { '@type': 'Organization', name: 'Origami Digital', url: PARENT_URL },
    publisher: { '@type': 'Organization', name: 'Origami Digital', url: PARENT_URL },
    provider: {
      '@type': 'Organization',
      name: 'Origami Digital',
      url: PARENT_URL,
      email: CONTACT_EMAIL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Bedfordview',
        addressRegion: 'Gauteng',
        addressCountry: 'ZA',
      },
    },
  }

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Origami Digital', item: PARENT_URL },
      { '@type': 'ListItem', position: 2, name: 'Origami Mobility', item: `${MOBILITY_URL}/` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(software) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  )
}

function SectionLabel({ index, label, tone }: { index: string; label: string; tone: 'ink' | 'paper' }) {
  const text = tone === 'ink' ? 'text-white/60' : 'text-[#4A4A4A]'
  const rule = tone === 'ink' ? 'bg-white/10' : 'bg-[#1E1E1E]/10'
  return (
    <div className="mb-8 flex items-center gap-4">
      <span className={`font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase ${text}`}>
        {index} · {label}
      </span>
      <div className={`h-px flex-1 ${rule}`} />
    </div>
  )
}

function ArrowIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Hero: the name, one sentence per offer, one picture                 */
/* ------------------------------------------------------------------ */

function MobilityHero() {
  return (
    <section className="noise-texture relative overflow-hidden bg-[#0A0A0B] pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{ background: `radial-gradient(circle, ${MOBILITY_BLUE} 0%, transparent 65%)` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <p
              className="anim-fade-up inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.22em] uppercase text-white/70"
              style={{ '--d': '0ms' } as React.CSSProperties}
            >
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: MOBILITY_BLUE }} aria-hidden="true" />
              Origami Mobility
              <span className="hidden text-white/60 sm:inline">{hero.overline}</span>
            </p>

            <h1
              className="anim-fade-up mt-7 font-[family-name:var(--font-display)] text-[clamp(2.4rem,5.4vw,4.6rem)] leading-[1.02] font-bold tracking-[-0.03em] text-white"
              style={{ '--d': '100ms' } as React.CSSProperties}
            >
              {hero.headline}
            </h1>

            <dl className="mt-9 max-w-xl space-y-5">
              {hero.offers.map((offer, i) => (
                <div
                  key={offer.id}
                  className="anim-fade-up grid grid-cols-[92px_1fr] gap-4 border-l border-white/10 pl-5 sm:grid-cols-[110px_1fr]"
                  style={{ '--d': `${220 + i * 110}ms` } as React.CSSProperties}
                >
                  <dt
                    className="pt-1 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase"
                    style={{ color: MOBILITY_BLUE }}
                  >
                    {offer.label}
                  </dt>
                  <dd className="text-lg leading-snug text-white/80 md:text-xl">{offer.line}</dd>
                </div>
              ))}
            </dl>

            <div
              className="anim-fade-up mt-10 flex flex-wrap items-center gap-4"
              style={{ '--d': '480ms' } as React.CSSProperties}
            >
              <a
                href={demoHref()}
                data-cursor-label="Demo"
                className="inline-flex items-center gap-3 rounded-full bg-[#E8503E] px-8 py-4 text-base font-bold text-white shadow-[0_16px_48px_rgba(232,80,62,0.3)] transition-all duration-300 hover:bg-[#D14535] hover:scale-[1.02] active:scale-[0.98] md:text-lg"
              >
                {hero.primaryCta}
                <ArrowIcon />
              </a>
              <a
                href="#fleet"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-4 text-base font-semibold text-white/80 transition-colors duration-300 hover:border-white/40 hover:text-white"
              >
                {hero.secondaryCta}
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
                </svg>
              </a>
            </div>
          </div>

          {/* The picture: the paper car and the wordmark, on the product's blue */}
          <div
            className="anim-fade-up relative min-w-0"
            style={{ '--d': '300ms' } as React.CSSProperties}
          >
            <div
              className="relative aspect-[2.1/1] overflow-hidden rounded-[28px] ring-1 ring-white/10 shadow-[0_40px_120px_rgba(8,124,167,0.35)]"
              style={{ background: MOBILITY_BLUE }}
            >
              <Image
                src="/mobility/lockup-car3d-brand-horizontal.png"
                alt={hero.lockupAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 640px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Capability marquee, in the site's own voice */}
      <div className="relative z-10 mt-16 border-t border-white/[0.07] py-5 md:mt-20 md:py-6" aria-hidden="true">
        <Marquee speed={45}>
          {capabilities.map((item) => (
            <span
              key={item}
              className="display-xl flex items-center gap-8 whitespace-nowrap text-2xl text-white/85 md:text-3xl"
            >
              {item}
              <span className="h-2 w-2 rounded-full" style={{ background: MOBILITY_BLUE }} />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Two doors                                                           */
/* ------------------------------------------------------------------ */

function DoorCard({ door, delay }: { door: Door; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <article
        id={door.id}
        className="group flex h-full scroll-mt-28 flex-col rounded-[28px] border border-[#1E1E1E]/10 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl md:p-10"
      >
        <div className="flex items-center justify-between gap-4">
          <span
            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase"
            style={{ color: MOBILITY_BLUE }}
          >
            {door.label}
          </span>
          <span className="text-right text-xs font-medium text-[#1E1E1E]/70">{door.where}</span>
        </div>

        <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl leading-tight font-bold tracking-tight text-[#1E1E1E] md:text-[2rem]">
          {door.line}
        </h3>
        <p className="mt-4 text-[#4A4A4A]">{door.who}</p>

        <ol className="mt-8 space-y-5 border-t border-[#1E1E1E]/10 pt-8">
          {door.proof.map((point, i) => (
            <li key={point.title} className="grid grid-cols-[36px_1fr] gap-3">
              <span className="font-[family-name:var(--font-mono)] text-sm text-[#1E1E1E]/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p className="font-semibold text-[#1E1E1E]">{point.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#4A4A4A]">{point.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 rounded-2xl bg-[#F5F2EC] px-5 py-4 text-sm leading-relaxed text-[#1E1E1E]/80">
          {door.candid}
        </p>

        <a
          href={demoHref(door.id)}
          data-cursor-label="Demo"
          className="mt-8 inline-flex items-center justify-between gap-3 rounded-full bg-[#1E1E1E] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#0A0A0B] group-hover:pr-5"
        >
          {door.cta}
          <ArrowIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </article>
    </ScrollReveal>
  )
}

function TwoDoors() {
  return (
    <section id="offers" className="bg-[#F5F2EC] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <SectionLabel index="01" label="Two doors" tone="paper" />
        <ScrollReveal>
          <h2 className="display-xl max-w-4xl text-[clamp(2.4rem,5.5vw,4.6rem)] text-[#1E1E1E]">
            One platform. <span className="text-outline-ink">Two ways in.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-6 max-w-2xl text-lg text-[#4A4A4A]">
            The marketplace finds a market riders and drivers. Fleet mode runs the one you already have. Same apps, same ledger, same console; the switches are tenant configuration.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {doors.map((door, i) => (
            <DoorCard key={door.id} door={door} delay={150 + i * 120} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Six cents                                                           */
/* ------------------------------------------------------------------ */

function SixCentsPanel() {
  const total = sixCents.split.reduce((sum, part) => sum + part.amount, 0)

  return (
    <section id="six-cents" className="noise-texture relative overflow-hidden bg-[#0A0A0B] py-24 md:py-32">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <SectionLabel index="02" label="The panel" tone="ink" />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <ScrollReveal>
              <h2 className="display-xl text-[clamp(3rem,8vw,7rem)] text-white">
                Six cents <span className="text-outline">a ride.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-8 max-w-md text-lg text-white/70">{sixCents.intro}</p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60">{sixCents.footnote}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-9">
              <dl className="divide-y divide-white/10">
                {sixCents.rows.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-6 py-4 first:pt-0 last:pb-0">
                    <dt className={row.emphasis ? 'font-semibold text-white' : 'text-white/65'}>{row.label}</dt>
                    <dd className="flex items-baseline gap-3 text-right">
                      {row.note && (
                        <span
                          className="rounded-full px-2.5 py-0.5 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.12em] text-white"
                          style={{ background: MOBILITY_BLUE }}
                        >
                          {row.note}
                        </span>
                      )}
                      <span
                        className={`font-[family-name:var(--font-mono)] tabular-nums ${
                          row.emphasis ? 'text-xl font-bold text-white md:text-2xl' : 'text-lg text-white/75'
                        }`}
                      >
                        {row.value}
                      </span>
                    </dd>
                  </div>
                ))}
              </dl>

              {/* Where the fare goes, to scale */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] uppercase text-white/60">
                  Where the US$3.50 goes
                </p>
                <div
                  className="flex h-4 w-full gap-[3px] overflow-hidden rounded-full"
                  role="img"
                  aria-label="Of every US$3.50 fare, the driver keeps US$3.08, the operator keeps US$0.36 and Origami takes US$0.06"
                >
                  {sixCents.split.map((part) => (
                    <span
                      key={part.label}
                      className="block h-full min-w-[4px] rounded-full"
                      style={{ width: `${(part.amount / total) * 100}%`, background: part.colour }}
                    />
                  ))}
                </div>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/65" aria-hidden="true">
                  {sixCents.split.map((part) => (
                    <li key={part.label} className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full" style={{ background: part.colour }} />
                      {part.label}
                      <span className="font-[family-name:var(--font-mono)] text-white/45">
                        US${part.amount.toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* The fleet demo, in five beats                                       */
/* ------------------------------------------------------------------ */

function BeatImage({ beat }: { beat: Beat }) {
  if (beat.kind === 'phone') {
    return (
      <div className="flex justify-center rounded-[28px] bg-[#ECE7DC] px-6 py-8 md:py-10">
        <div className="w-[220px] overflow-hidden rounded-[28px] ring-1 ring-[#1E1E1E]/10 shadow-[0_24px_60px_rgba(30,30,30,0.18)] sm:w-[250px]">
          <Image
            src={beat.image}
            alt={beat.alt}
            width={1206}
            height={2622}
            sizes="250px"
            className="h-auto w-full"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="overflow-hidden rounded-[20px] bg-[#0A0A0B] ring-1 ring-[#1E1E1E]/10 shadow-[0_24px_60px_rgba(30,30,30,0.18)]">
      <Image
        src={beat.image}
        alt={beat.alt}
        width={1440}
        height={900}
        sizes="(max-width: 1024px) 100vw, 760px"
        className="h-auto w-full"
      />
    </div>
  )
}

function FleetDemo() {
  return (
    <section id="fleet" className="scroll-mt-20 bg-[#F5F2EC] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <SectionLabel index="03" label="Fleet mode, walked" tone="paper" />
        <ScrollReveal>
          <h2 className="display-xl max-w-4xl text-[clamp(2.4rem,5.5vw,4.6rem)] text-[#1E1E1E]">
            The fleet demo, <span className="text-outline-ink">in five beats.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <p className="mt-6 max-w-2xl text-lg text-[#4A4A4A]">
            A transfer, cab or shuttle operator who already has drivers and customers sees their own dispatch board, their own driver app, and the money.
          </p>
        </ScrollReveal>

        <ol className="mt-16 space-y-16 md:space-y-24">
          {beats.map((beat, i) => {
            const flip = i % 2 === 1
            return (
              <li key={beat.n} className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
                <ScrollReveal className={flip ? 'lg:order-2' : ''}>
                  <div>
                    <span
                      className="font-[family-name:var(--font-display)] text-5xl font-bold leading-none md:text-6xl"
                      style={{ color: MOBILITY_BLUE, opacity: 0.35 }}
                      aria-hidden="true"
                    >
                      {beat.n}
                    </span>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl leading-tight font-bold tracking-tight text-[#1E1E1E] md:text-3xl">
                      {beat.title}
                    </h3>
                    <p className="mt-4 max-w-lg leading-relaxed text-[#4A4A4A]">{beat.body}</p>
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={120} className={flip ? 'lg:order-1' : ''}>
                  <BeatImage beat={beat} />
                </ScrollReveal>
              </li>
            )
          })}
        </ol>

        <ScrollReveal>
          <p className="mt-14 max-w-2xl text-sm text-[#4A4A4A]">{demoCaption}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* Built for here                                                      */
/* ------------------------------------------------------------------ */

function BuiltForHere() {
  return (
    <section id="built-for-here" className="noise-texture relative overflow-hidden bg-[#0A0A0B] py-24 md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <SectionLabel index="04" label="Built for here" tone="ink" />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <ScrollReveal>
              <h2 className="display-xl text-[clamp(2.6rem,6vw,5.5rem)] text-white">
                Built <span className="text-outline">for here.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p className="mt-8 max-w-sm text-lg text-white/70">
                Harare, not Helsinki. The constraints were chosen before the code was written.
              </p>
            </ScrollReveal>
          </div>

          <dl className="divide-y divide-white/10 border-t border-white/10">
            {builtForHere.items.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={80 * i}
                className="grid gap-2 py-7 md:grid-cols-[1fr_1.2fr] md:gap-8"
              >
                <dt className="font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-white md:text-2xl">
                  {item.title}
                </dt>
                <dd className="text-white/65">{item.body}</dd>
              </ScrollReveal>
            ))}
          </dl>
        </div>

        <ScrollReveal delay={200}>
          <p className="mt-14 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 text-sm leading-relaxed text-white/65">
            {builtForHere.roadmap}
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* One contact path                                                    */
/* ------------------------------------------------------------------ */

function BookADemo() {
  return (
    <section id="demo" className="relative overflow-hidden bg-[#F5F2EC] py-28 md:py-40">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-[-40%] mx-auto h-[600px] w-[900px] rounded-full opacity-20 blur-3xl"
        style={{ background: `radial-gradient(circle, ${MOBILITY_BLUE} 0%, transparent 65%)` }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <ScrollReveal>
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase"
            style={{ color: MOBILITY_BLUE }}
          >
            {contact.overline}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="display-xl mt-6 text-[clamp(2.6rem,7vw,6rem)] text-[#1E1E1E]">{contact.heading}</h2>
        </ScrollReveal>
        <ScrollReveal delay={160}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-[#4A4A4A]">{contact.body}</p>
        </ScrollReveal>
        <ScrollReveal delay={240}>
          <div className="mt-12">
            <a
              href={demoHref()}
              data-cursor-label="Demo"
              className="inline-flex items-center gap-3 rounded-full bg-[#E8503E] px-12 py-6 text-lg font-bold text-white shadow-[0_20px_60px_rgba(232,80,62,0.3)] transition-all duration-300 hover:bg-[#D14535] hover:shadow-[0_20px_80px_rgba(232,80,62,0.45)] hover:scale-[1.02] active:scale-[0.98] md:text-xl"
            >
              {contact.cta}
              <ArrowIcon />
            </a>
            <p className="mt-8 text-sm text-[#4A4A4A]">
              Or email{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Origami%20Mobility%20demo`}
                className="text-[#1E1E1E] underline underline-offset-4 transition-colors hover:text-[#087CA7]"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default function MobilityPage() {
  return (
    <>
      <MobilityJsonLd />
      <MobilityHero />
      <TwoDoors />
      <SixCentsPanel />
      <FleetDemo />
      <BuiltForHere />
      <BookADemo />
    </>
  )
}
