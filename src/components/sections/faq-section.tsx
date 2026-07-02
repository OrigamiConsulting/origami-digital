'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

const faqs = [
  {
    question: 'How long does a typical website project take?',
    answer:
      'Most website projects are completed within 4-8 weeks, depending on complexity. A simple business website might take 3-4 weeks, while a complex web application or e-commerce platform could take 8-12 weeks. We’ll provide a detailed timeline during our initial consultation.',
  },
  {
    question: 'Do you work with businesses outside of Johannesburg?',
    answer:
      'Absolutely. While we’re based in Bedfordview, Johannesburg, we work with clients across South Africa and beyond. All our communication and project management happens digitally, so location is never a barrier.',
  },
  {
    question: 'What makes you different from other web agencies?',
    answer:
      'We’re an AI-augmented agency, meaning we use artificial intelligence tools throughout our workflow — from design to development to content creation. This allows us to deliver enterprise-quality results faster and more cost-effectively than traditional agencies, without the overhead of a large team.',
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
      'AI automation uses artificial intelligence to handle repetitive tasks, process documents, respond to customer enquiries, and streamline workflows. For example, we can set up AI-powered chatbots, automated email responses, intelligent document processing, and custom dashboards — saving your team hours of manual work every week.',
  },
]

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-[#1E1E1E]/10">
      <button
        className="flex w-full items-center justify-between gap-4 py-6 text-left focus-visible:ring-2 focus-visible:ring-[#0A8FBF] focus-visible:ring-offset-2 focus-visible:outline-none md:py-7"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="flex items-baseline gap-4 md:gap-6">
          <span className="font-[family-name:var(--font-mono)] text-xs text-[#E8503E]">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="font-[family-name:var(--font-display)] text-lg font-semibold text-[#1E1E1E] md:text-xl">
            {question}
          </span>
        </span>
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xl transition-all duration-300 ${
            isOpen
              ? 'rotate-45 border-[#E8503E] bg-[#E8503E] text-white'
              : 'border-[#1E1E1E]/15 text-[#4A4A4A]'
          }`}
          aria-hidden="true"
        >
          +
        </span>
      </button>

      <div
        className="grid transition-all duration-300 ease-out"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pl-8 text-base leading-relaxed text-[#4A4A4A] md:pl-12">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-[#F5F2EC] py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-16">
        <div className="mb-12 flex items-center gap-4">
          <span className="font-[family-name:var(--font-mono)] text-[11px] tracking-[0.24em] uppercase text-[#8A8A8A]">
            06 — FAQ
          </span>
          <div className="h-px flex-1 bg-[#1E1E1E]/10" />
        </div>

        <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:gap-16">
          <ScrollReveal>
            <div className="md:sticky md:top-32 md:self-start">
              <h2 className="display-xl text-[clamp(2.4rem,5vw,4rem)] text-[#1E1E1E]">
                Straight
                <br />
                <span className="text-outline-ink">answers.</span>
              </h2>
              <p className="mt-6 max-w-sm text-[#4A4A4A]">
                Everything you need to know about working with us. Can&apos;t
                find what you&apos;re looking for? Get in touch.
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex items-center gap-3 font-[family-name:var(--font-display)] text-lg font-semibold text-[#1E1E1E] transition-colors hover:text-[#0A8FBF]"
              >
                Ask us anything
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1E1E1E]/15 transition-all duration-300 group-hover:border-[#0A8FBF] group-hover:bg-[#0A8FBF] group-hover:text-white">
                  <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="border-t border-[#1E1E1E]/10">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  index={index}
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
