'use client';

import { FadeIn } from '@/components/ui/fade-in';
import { SectionWrapper } from '@/components/ui/section-wrapper';

const testimonials = [
  {
    quote:
      'Origami Digital transformed our online presence completely. The new website has driven a 40% increase in enquiries.',
    author: 'Sarah M.',
    role: 'Managing Director',
    company: 'Professional Services',
  },
  {
    quote:
      'The AI automation solutions saved our team hours of manual work every week. Highly recommend.',
    author: 'James K.',
    role: 'Operations Manager',
    company: 'Manufacturing',
  },
  {
    quote:
      'Professional, responsive, and technically excellent. They delivered exactly what we needed.',
    author: 'Nomsa T.',
    role: 'Founder',
    company: 'Tech Startup',
  },
];

function StarRating() {
  return (
    <div className="mb-4 flex gap-0.5 text-[#EF6351]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="text-lg" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="bg-[#F5F5F5]">
      <FadeIn>
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
        </div>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.author} delay={index * 0.15}>
            <div className="relative h-full rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              {/* Decorative quote mark */}
              <span
                className="pointer-events-none absolute right-6 top-4 select-none font-display text-7xl leading-none text-[#DEDEDE]/50"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <div className="relative">
                <StarRating />

                <blockquote className="mb-6 text-lg italic leading-relaxed text-[#4A4A4A]">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                <div className="border-t border-[#DEDEDE] pt-4">
                  <p className="font-semibold text-[#1E1E1E]">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#8A8A8A]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </SectionWrapper>
  );
}
