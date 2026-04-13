import {
  Hero,
  ServicesOverview,
  PortfolioPreview,
  WhyWorkWithUs,
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
      <WhyWorkWithUs />
      <FAQSection />
      <CTASection />
    </>
  )
}
