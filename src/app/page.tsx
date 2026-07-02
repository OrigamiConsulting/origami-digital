import {
  Hero,
  Manifesto,
  PillarsStack,
  AIShowcase,
  WorkShowcase,
  CraftProof,
  CTASection,
  FAQSection,
} from '@/components/sections'
import { OrganisationJsonLd } from '@/components/seo'

export default function HomePage() {
  return (
    <>
      <OrganisationJsonLd />
      <Hero />
      <Manifesto />
      <PillarsStack />
      <AIShowcase />
      <WorkShowcase />
      <CraftProof />
      <FAQSection />
      <CTASection />
    </>
  )
}
