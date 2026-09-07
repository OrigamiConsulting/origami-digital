/**
 * Copy and data for the Origami Mobility page.
 *
 * Sources, in the origami-mobility repository:
 *   docs/13-GO-TO-MARKET.md §2, §3, §6   (offers, what to say, page shape)
 *   docs/04-COMMERCIAL-MODEL.md §3      (the six-cents panel)
 *   docs/10-FLEET-DEMO.md               (the five beats)
 *   docs/00-BUSINESS-CASE.md §3.2       (positioning)
 *
 * House style: no em-dashes, short sentences, South African English, no ZAR,
 * no prices, no app-store badges, no "trusted by", no promise of riders or drivers.
 */

export const MOBILITY_URL = 'https://mobility.origami-digital.co.za'
export const PARENT_URL = 'https://origami-digital.co.za'
export const CONTACT_EMAIL = 'hello@origami-digital.co.za'

/** The one accent colour, taken from the lockup's ground. */
export const MOBILITY_BLUE = '#087CA7'

export type Offer = 'marketplace' | 'fleet'

/** One contact path: the Origami Digital contact form, tagged for Mobility. */
export function demoHref(offer?: Offer): string {
  const params = new URLSearchParams({ product: 'mobility' })
  if (offer) params.set('offer', offer)
  return `${PARENT_URL}/contact?${params.toString()}`
}

export const hero = {
  overline: 'An Origami Digital product',
  headline: 'White-label e\u2011hailing and fleet dispatch, built cash-first.',
  offers: [
    {
      id: 'marketplace' as Offer,
      label: 'Marketplace',
      line: 'The e-hailing platform that works where cash is king.',
    },
    {
      id: 'fleet' as Offer,
      label: 'Fleet mode',
      line: 'Your dispatch board, your driver app, your money. For a fleet you already run.',
    },
  ],
  primaryCta: 'Book a demo',
  secondaryCta: 'See fleet mode',
  lockupAlt:
    'Origami Mobility: a folded-paper car with blue glass beside the wordmark, on ink',
}

export const capabilities = [
  'Cash-first fares',
  'Rider app',
  'Driver app',
  'Operator console',
  'Agent network',
  'Manual dispatch',
  'Book-ahead',
  'On-account statements',
  'Append-only ledger',
  'Self-hosted maps',
]

export interface Door {
  id: Offer
  label: string
  line: string
  where: string
  who: string
  proof: { title: string; body: string }[]
  candid: string
  cta: string
}

export const doors: Door[] = [
  {
    id: 'marketplace',
    label: 'Marketplace',
    line: 'The e-hailing platform that works where cash is king.',
    where: 'Zimbabwe, Zambia, Malawi, Mozambique',
    who: 'An independent transport operator in a cash-dominant market, with access to drivers and a budget to keep them online.',
    proof: [
      {
        title: 'Your brand on both apps',
        body: 'Rider and driver apps in your name, with dispatch, cash-first fares and an operator console.',
      },
      {
        title: 'Commission collected in cash',
        body: 'Drivers settle what they owe at an agent counter. No card and no smartphone wallet required.',
      },
      {
        title: 'Six cents a ride',
        body: 'You keep 85% of your own commission. The whole panel is further down this page.',
      },
    ],
    candid: 'You bring the drivers and the budget to keep them online. We bring the platform.',
    cta: 'Book a marketplace demo',
  },
  {
    id: 'fleet',
    label: 'Fleet mode',
    line: 'Your dispatch board, your driver app, your money. For a fleet you already run.',
    where: 'South Africa first',
    who: 'The office that takes the phone calls: transfer companies, cab firms, lodge and corporate shuttles, electric chauffeur services.',
    proof: [
      {
        title: 'Your drivers are on the list in a minute',
        body: 'Roster onboarding. A code proves the phone. No forms, no uploads.',
      },
      {
        title: 'A phone call becomes a job',
        body: 'The office prices the booking, books it ahead if it is for Thursday, and gives it to a driver by name.',
      },
      {
        title: 'Every cent traceable',
        body: 'Cash held by each driver and on-account statements for company customers, derived from an append-only ledger.',
      },
    ],
    candid: 'Keep the booking process that already works. Add the ledger and the driver app.',
    cta: 'Book a fleet demo',
  },
]

/** docs/04-COMMERCIAL-MODEL.md §3, on a typical US$3.50 ride with commission at 12%. */
export const sixCents = {
  heading: 'Six cents a ride.',
  intro:
    'On a typical US$3.50 marketplace ride, with the operator’s commission at 12%, this is where the money goes.',
  rows: [
    { label: 'Rider pays, in cash', value: 'US$3.50', emphasis: true },
    { label: 'Driver keeps', value: 'US$3.08' },
    { label: 'Operator’s commission', value: 'US$0.42', emphasis: true },
    { label: 'Origami’s share', value: 'US$0.06' },
    { label: 'Operator keeps', value: 'US$0.36', note: '85%', emphasis: true },
  ],
  /** Proportions of the US$3.50 fare, for the bar. */
  split: [
    { label: 'Driver', amount: 3.08, colour: '#087CA7' },
    { label: 'Operator', amount: 0.36, colour: '#35A3A3' },
    { label: 'Origami', amount: 0.06, colour: '#F5F2EC' },
  ],
  footnote:
    'The operator keeps 85% of its own commission. That is the marketplace illustration; terms are for the call, not the page.',
}

export interface Beat {
  n: string
  title: string
  body: string
  image: string
  alt: string
  kind: 'console' | 'phone'
}

/** docs/10-FLEET-DEMO.md, one sentence a beat, one screenshot each from docs/walks/2026-09-03. */
export const beats: Beat[] = [
  {
    n: '01',
    title: 'Your drivers are on the list in a minute.',
    body: 'You already know your drivers. You type a name, a number and a plate, and they prove the phone. No forms, no uploads. Only numbers on this list can sign in to the driver app.',
    image: '/mobility/screens/console-06-approvals.png',
    alt: 'Operator console, Approvals tab: the add-driver form with fields for full name, mobile number, make, model, colour and plate',
    kind: 'console',
  },
  {
    n: '02',
    title: 'The driver’s whole sign-up is a code.',
    body: 'Six digits to the number on your list, then the pay explainer: the fare is the company’s, you hand it in, the office pays you. No identity step, no car step, no documents.',
    image: '/mobility/screens/driver-03-code.png',
    alt: 'Driver app: the enter-the-code screen with a six-digit code typed in and a Continue button',
    kind: 'phone',
  },
  {
    n: '03',
    title: 'A phone call becomes a job.',
    body: 'A customer rings. The office types the number, the pickup with its gate note, the drop-off and its own price, with the estimate beside it so the difference is never a mystery. Then it gives the job to a driver by name, with a reason, and both go on the audit trail. Thursday’s run can be booked on Monday.',
    image: '/mobility/screens/console-04-dispatch.png',
    alt: 'Operator console, Dispatch tab: a map of Harare beside the booking form and the board of trips on the road and done today',
    kind: 'console',
  },
  {
    n: '04',
    title: 'The driver is told, and drives.',
    body: 'The job lands on the phone with the pickup, the gate note and the fare. No countdown and no decline into a queue. If the driver cannot do it, they ring the office and the board gives it to someone else.',
    image: '/mobility/screens/driver-15-to-pickup.png',
    alt: 'Driver app: driving to the pickup, with the route on the map, the fare and a Navigate to the pickup button',
    kind: 'phone',
  },
  {
    n: '05',
    title: 'The money, in the same console.',
    body: 'Cash held by drivers leads: what each driver is carrying of the company’s money, per fare, with the last fare time. Under it, this month’s statement for every customer on account, derived from their trips, and what the platform bills on.',
    image: '/mobility/screens/console-07-money.png',
    alt: 'Operator console, Money tab: platform billing, commission earned today and cash held, beside the map',
    kind: 'console',
  },
]

export const demoCaption =
  'Screens from the walked build of 3 September 2026, on the demo tenant. The demo runs on a laptop and a phone; it takes five minutes.'

export const builtForHere = {
  heading: 'Built for here.',
  items: [
    {
      title: 'Cash is the default, not a fallback.',
      body: 'Fares are paid in notes at the end of the trip. Every competitor assumes money moves digitally. Here it does not have to.',
    },
    {
      title: 'Built for a 2 GB Android on prepaid data.',
      body: 'The reference device is the driver’s phone, not an iPhone.',
    },
    {
      title: 'Self-hosted maps.',
      body: 'No commercial map service in the per-trip path, so a busy day does not turn into a map bill.',
    },
    {
      title: 'Every cent traceable.',
      body: 'The ledger is append-only. Balances are derived, never typed.',
    },
    {
      title: 'POTRAZ and POPIA in view.',
      body: 'You stay the operator of record, your brand and your data stay yours, and the platform is built with Zimbabwe’s POTRAZ and South Africa’s POPIA in view.',
    },
  ],
  roadmap:
    'Run electric cars? Charging runs on Origami EV Connect. Landing the charging cost on the vehicle’s ledger here is on the roadmap, not in the demo.',
}

export const contact = {
  overline: 'Book a demo',
  heading: 'See it on your own numbers.',
  body: 'Twenty minutes, one laptop and one phone. Your city, your fares, your drivers. Book through the Origami Digital contact form and we come back within one business day.',
  cta: 'Book a demo',
}

export const seo = {
  title: 'Origami Mobility: White-Label E-hailing and Fleet Dispatch',
  description:
    'White-label e-hailing platform for cash-dominant markets, plus fleet dispatch for operators who already have drivers. Cash-first fares, driver app, console.',
  keywords: [
    'e-hailing platform Zimbabwe',
    'white label taxi app',
    'fleet dispatch software South Africa',
    'cash e-hailing',
    'white-label e-hailing platform',
    'taxi dispatch software',
  ],
  ogAlt: 'Origami Mobility: the paper car beside the wordmark on the product’s blue',
}
