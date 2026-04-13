import type { Metadata } from 'next'
import { fontVariables } from '@/lib/fonts'
import { Header, Footer } from '@/components/layout'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Origami Digital | Build. Grow. Automate.',
    template: '%s | Origami Digital',
  },
  description:
    'AI-augmented digital agency in Johannesburg. We build websites, grow your digital presence, and automate business processes.',
  metadataBase: new URL('https://origami-digital.co.za'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Origami Digital | Build. Grow. Automate.',
    description:
      'AI-augmented digital agency in Johannesburg. We build websites, grow your digital presence, and automate business processes.',
    url: 'https://origami-digital.co.za',
    siteName: 'Origami Digital',
    locale: 'en_ZA',
    type: 'website',
    images: [{ url: '/images/og/default.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Origami Digital | Build. Grow. Automate.',
    description:
      'AI-augmented digital agency in Johannesburg. We build websites, grow your digital presence, and automate business processes.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-body)]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
