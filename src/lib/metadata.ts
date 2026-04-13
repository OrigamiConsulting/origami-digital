import type { Metadata } from 'next'

const siteConfig = {
  name: 'Origami Digital',
  description:
    'AI-augmented digital agency in Johannesburg. We build websites, grow your digital presence, and automate business processes.',
  url: 'https://origami-digital.co.za',
  ogImage: '/images/og/default.jpg',
  locale: 'en_ZA',
}

export function generatePageMetadata(page: {
  title: string
  description: string
  path: string
  image?: string
}): Metadata {
  const url = `${siteConfig.url}${page.path}`
  return {
    title: `${page.title} | ${siteConfig.name}`,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: 'website',
      images: [
        {
          url: page.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
    },
  }
}

export { siteConfig }
