'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '@/components/ui/section-wrapper';
import { FadeIn } from '@/components/ui/fade-in';

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
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#DEDEDE]">
      <button
        className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#0A8FBF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A8FBF] focus-visible:ring-offset-2"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#DEDEDE] text-xl transition-transform duration-200"
          aria-hidden="true"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 leading-relaxed text-[#4A4A4A]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="border-t border-[#DEDEDE]">
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
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
