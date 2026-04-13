import {
  Hero,
  ServicesOverview,
  PortfolioPreview,
  Testimonials,
  CTASection,
  FAQSection,
} from '@/components/sections'
import { OrganisationJsonLd } from '@/components/seo'

export default function HomePage() {
  return (
    <>
      <OrganisationJsonLd />
      <Hero />
      <ServicesOverview />
      <PortfolioPreview />
      <Testimonials />
      <FAQSection />
      <CTASection />
    </>
  )
}
