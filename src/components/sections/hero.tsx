'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const stats = [
  { metric: '10+', label: 'Years Experience' },
  { metric: '50+', label: 'Projects Delivered' },
  { metric: '95+', label: 'Lighthouse Scores' },
  { metric: 'AI', label: 'Powered Workflow' },
];

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="noise-texture dot-grid relative min-h-screen bg-[#141414] overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse at left, rgba(10,143,191,0.08), transparent 70%)',
        }}
      />

      {/* Content grid */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-8 lg:px-12 xl:px-20">
        {/* ===== TEXT COLUMN (left) ===== */}
        <div className="flex flex-col justify-center">
          {/* Overline badge */}
          <div
            className={`mb-8 transition-all duration-700 ease-out ${
              mounted
                ? 'translate-y-0 opacity-100'
                : 'translate-y-0 opacity-100'
            }`}
            style={{
              transitionDelay: mounted ? '0ms' : '0ms',
              ...(mounted ? {} : {}),
            }}
          >
            <span
              className={`inline-flex items-center rounded-full border border-[#0A8FBF]/30 bg-[#0A8FBF]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#0A8FBF] transition-all duration-700 ease-out ${
                mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '0ms' }}
            >
              AI-Augmented Digital Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`hero-headline mb-6 transition-all duration-700 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="hidden lg:block">
              We Build
              <br />
              Digital Products
              <br />
              That Perform
            </span>
            <span className="lg:hidden">
              We Build Digital Products That Perform
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`mb-10 max-w-lg text-lg text-[#B8B8B8] font-[family-name:var(--font-body)] transition-all duration-700 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '500ms' }}
          >
            From websites and apps to SEO and AI automation — we help South
            African businesses build, grow, and automate their digital presence.
          </p>

          {/* CTAs */}
          <div
            className={`mb-0 flex flex-wrap items-center gap-4 transition-all duration-700 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '700ms' }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-[#EF6351] px-8 py-4 text-base font-semibold text-white shadow-[0_0_30px_rgba(239,99,81,0.2)] transition-colors duration-200 hover:bg-[#D94F3F]"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-transparent px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              See Our Work
            </Link>
          </div>

          {/* Stats row */}
          <div
            className={`mt-12 flex flex-wrap items-start gap-8 transition-all duration-700 ease-out ${
              mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                  {stat.metric}
                </span>
                <span className="mt-1 text-xs uppercase tracking-wider text-[#8A8A8A]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ===== IMAGE COLUMN (right) ===== */}
        <div
          className={`relative transition-all duration-700 ease-out ${
            mounted ? 'scale-100 opacity-100' : 'scale-[0.97] opacity-0'
          }`}
          style={{ transitionDelay: '300ms' }}
        >
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
            {/* Gradient overlay on left edge */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[30%] bg-gradient-to-r from-[#141414] to-transparent"
              aria-hidden="true"
            />

            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
              alt="Modern development workspace"
              width={1200}
              height={800}
              className="aspect-[4/3] h-full w-full object-cover lg:aspect-auto lg:min-h-[500px] xl:min-h-[600px]"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
