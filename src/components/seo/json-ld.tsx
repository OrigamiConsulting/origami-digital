type OrganisationSchema = {
  '@context': string
  '@type': string
  name: string
  url: string
  logo: string
  description: string
  address: {
    '@type': string
    addressLocality: string
    addressRegion: string
    addressCountry: string
  }
  contactPoint: {
    '@type': string
    email: string
    contactType: string
  }
  sameAs: string[]
}

type ServiceSchema = {
  '@context': string
  '@type': string
  name: string
  description: string
  url: string
  provider: {
    '@type': string
    name: string
    url: string
  }
  areaServed: {
    '@type': string
    name: string
  }
}

type BreadcrumbSchema = {
  '@context': string
  '@type': string
  itemListElement: {
    '@type': string
    position: number
    name: string
    item: string
  }[]
}

const BASE_URL = 'https://origami-digital.co.za'

export function OrganisationJsonLd() {
  const schema: OrganisationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Origami Digital',
    url: BASE_URL,
    logo: `${BASE_URL}/images/logo/origami-digital-logo.png`,
    description:
      'AI-augmented digital agency in Johannesburg offering web development, SEO, and AI automation solutions for South African businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bedfordview',
      addressRegion: 'Gauteng',
      addressCountry: 'ZA',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@origami-digital.co.za',
      contactType: 'customer service',
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function ServiceJsonLd({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  const schema: ServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${BASE_URL}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Origami Digital',
      url: BASE_URL,
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[]
}) {
  const schema: BreadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
