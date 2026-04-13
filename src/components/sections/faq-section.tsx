'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const faqs = [
  {
    question: 'How long does a typical website project take?',
    answer:
      'Most website projects are completed within 4-8 weeks, depending on complexity. A simple business website might take 3-4 weeks, while a complex web application or e-commerce platform could take 8-12 weeks. We\u2019ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'Do you work with businesses outside of Johannesburg?',
    answer:
      'Absolutely. While we\u2019re based in Bedfordview, Johannesburg, we work with clients across South Africa and beyond. All our communication and project management happens digitally, so location is never a barrier.',
  },
  {
    question: 'What makes you different from other web agencies?',
    answer:
      'We\u2019re an AI-augmented agency, meaning we use artificial intelligence tools throughout our workflow \u2014 from design to development to content creation. This allows us to deliver enterprise-quality results faster and more cost-effectively than traditional agencies, without the overhead of a large team.',
  },
  {
    question: 'How much does a website cost?',
    answer:
      'Website projects typically range from R30,000 to R150,000 depending on scope and complexity. We provide detailed proposals after understanding your specific requirements during a free consultation. We believe in transparent pricing with no hidden costs.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes. We offer monthly maintenance and support packages that include security updates, content changes, performance monitoring, and priority support. We also provide SEO and digital marketing services to help your site continue to grow after launch.',
  },
  {
    question: 'What is AI automation and how can it help my business?',
    answer:
      'AI automation uses artificial intelligence to handle repetitive tasks, process documents, respond to customer enquiries, and streamline workflows. For example, we can set up AI-powered chatbots, automated email responses, intelligent document processing, and custom dashboards \u2014 saving your team hours of manual work every week.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[#DEDEDE] py-5">
      <button
        className="w-full text-left flex justify-between items-center gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8FBF] focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="font-[family-name:var(--font-display)] font-semibold text-[#1E1E1E] text-base md:text-lg">
          {question}
        </span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center text-xl text-[#4A4A4A] transition-transform duration-200"
          aria-hidden="true"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
        }}
      >
        <div className="overflow-hidden">
          <p className="text-[#4A4A4A] text-base leading-relaxed pt-3 pb-1">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-16">
          <ScrollReveal>
            <div className="md:sticky md:top-32 md:self-start">
              <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                FAQ
              </span>
              <h2 className="section-heading text-[#1E1E1E] mt-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#4A4A4A] mt-4">
                Everything you need to know about working with us. Can&apos;t find what you&apos;re looking for? Get in touch.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-[#0A8FBF] font-semibold mt-4 transition-colors hover:text-[#087CA7]"
              >
                Contact us &rarr;
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div>
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onToggle={() => handleToggle(index)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
