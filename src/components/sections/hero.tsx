'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const headlineWords = ['We', 'Build', 'Digital', 'Products', 'That', 'Perform'];

const trustIndicators = [
  'Next.js',
  'React',
  'AI-Powered',
  'Johannesburg',
];

export function Hero() {
  return (
    <section className="noise-texture relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-darker">
      {/* ===== BACKGROUND VISUAL LAYERS ===== */}

      {/* Layer 1: Animated dot grid */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg className="hero-dot-grid absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="hero-dots"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.06)" />
            </pattern>
            <linearGradient id="dot-pulse-mask" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="white" stopOpacity="0">
                <animate
                  attributeName="stopOpacity"
                  values="0;0.6;0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="30%" stopColor="white" stopOpacity="0.5">
                <animate
                  attributeName="offset"
                  values="0.1;0.5;0.9;0.5;0.1"
                  dur="8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stopOpacity"
                  values="0.3;0.7;0.3"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="white" stopOpacity="0">
                <animate
                  attributeName="stopOpacity"
                  values="0;0.4;0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
            <mask id="dot-wave-mask">
              <rect width="100%" height="100%" fill="url(#dot-pulse-mask)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-dots)" opacity="0.5" />
          <rect
            width="100%"
            height="100%"
            fill="url(#hero-dots)"
            mask="url(#dot-wave-mask)"
            opacity="0.8"
          />
        </svg>
      </div>

      {/* Layer 2: Gradient orbs (slightly more prominent) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #0A8FBF, transparent 70%)' }}
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.15, 0.95, 1],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
          style={{ background: 'radial-gradient(circle, #297373, transparent 70%)' }}
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 50, -30, 0],
            scale: [1, 0.9, 1.1, 1],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/3 top-2/3 h-[350px] w-[350px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #0A8FBF, transparent 70%)' }}
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Layer 3: Geometric origami horse */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center md:justify-end md:pr-[8%]"
        aria-hidden="true"
      >
        <motion.svg
          viewBox="0 0 500 500"
          className="h-[320px] w-[320px] md:h-[450px] md:w-[450px] lg:h-[500px] lg:w-[500px]"
          style={{ opacity: 0 }}
          animate={{
            opacity: 0.07,
            y: [0, -12, 0],
            rotate: [0, 1.5, -1, 0],
          }}
          transition={{
            opacity: { duration: 1.5, delay: 0.3 },
            y: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 14, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Head and ears */}
          <polygon points="320,80 350,30 360,90" fill="#0A8FBF" opacity="0.9" />
          <polygon points="350,30 380,25 360,90" fill="#297373" opacity="0.85" />
          <polygon points="290,120 320,80 360,90" fill="#0A8FBF" opacity="0.8" />
          <polygon points="360,90 390,70 380,130" fill="#297373" opacity="0.7" />
          <polygon points="290,120 360,90 380,130" fill="#0A8FBF" opacity="0.75" />

          {/* Neck */}
          <polygon points="250,180 290,120 380,130" fill="#297373" opacity="0.8" />
          <polygon points="250,180 380,130 340,200" fill="#0A8FBF" opacity="0.7" />
          <polygon points="220,220 250,180 340,200" fill="#297373" opacity="0.75" />

          {/* Body - upper */}
          <polygon points="220,220 340,200 380,260" fill="#0A8FBF" opacity="0.65" />
          <polygon points="220,220 380,260 350,310" fill="#297373" opacity="0.7" />
          <polygon points="160,280 220,220 350,310" fill="#0A8FBF" opacity="0.6" />

          {/* Body - lower */}
          <polygon points="160,280 350,310 320,360" fill="#297373" opacity="0.65" />
          <polygon points="160,280 320,360 200,370" fill="#0A8FBF" opacity="0.55" />
          <polygon points="350,310 380,260 400,320" fill="#297373" opacity="0.6" />

          {/* Tail */}
          <polygon points="130,250 160,280 120,310" fill="#0A8FBF" opacity="0.7" />
          <polygon points="100,230 130,250 120,310" fill="#297373" opacity="0.65" />
          <polygon points="80,270 100,230 120,310" fill="#0A8FBF" opacity="0.5" />

          {/* Front legs */}
          <polygon points="320,360 350,310 360,400" fill="#0A8FBF" opacity="0.6" />
          <polygon points="360,400 350,310 400,320" fill="#297373" opacity="0.55" />
          <polygon points="340,430 320,360 360,400" fill="#0A8FBF" opacity="0.65" />
          <polygon points="355,430 360,400 370,460" fill="#297373" opacity="0.6" />

          {/* Back legs */}
          <polygon points="200,370 230,400 180,420" fill="#297373" opacity="0.6" />
          <polygon points="200,370 160,280 180,420" fill="#0A8FBF" opacity="0.5" />
          <polygon points="180,420 200,460 165,450" fill="#297373" opacity="0.55" />
          <polygon points="230,400 250,460 215,445" fill="#0A8FBF" opacity="0.6" />

          {/* Geometric detail lines (wireframe effect) */}
          <g stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" fill="none">
            <line x1="250" y1="180" x2="380" y2="130" />
            <line x1="220" y1="220" x2="380" y2="260" />
            <line x1="160" y1="280" x2="350" y2="310" />
            <line x1="290" y1="120" x2="380" y2="130" />
            <line x1="320" y1="360" x2="200" y2="370" />
          </g>
        </motion.svg>
      </div>

      {/* Layer 4: Animated gradient sweep lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Line 1 — sweeps top-left to bottom-right */}
        <div
          className="hero-sweep-line absolute h-[1px] w-[140%] -left-[20%] top-[25%] -rotate-12"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #0A8FBF 30%, #297373 70%, transparent 100%)',
            opacity: 0.04,
          }}
        />
        {/* Line 2 — sweeps across the middle */}
        <div
          className="hero-sweep-line hero-sweep-line--delay-1 absolute h-[1px] w-[130%] -left-[15%] top-[55%] rotate-6"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #297373 40%, #0A8FBF 60%, transparent 100%)',
            opacity: 0.035,
          }}
        />
        {/* Line 3 — sweeps lower third */}
        <div
          className="hero-sweep-line hero-sweep-line--delay-2 absolute h-[1px] w-[120%] -left-[10%] top-[78%] -rotate-3"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, #0A8FBF 50%, #297373 80%, transparent 100%)',
            opacity: 0.045,
          }}
        />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
          className="mb-8 inline-flex"
        >
          <span className="inline-flex items-center rounded-full border border-accent-blue/30 bg-accent-blue/10 px-4 py-1.5 text-sm font-medium text-accent-blue shadow-[0_0_15px_rgba(10,143,191,0.15)]">
            AI-Augmented Digital Agency
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="mb-6 font-display font-bold text-neutral-100">
          <span className="sr-only">We Build Digital Products That Perform</span>
          <span aria-hidden="true" className="flex flex-wrap items-center justify-center gap-x-[0.3em] gap-y-1 text-5xl md:text-6xl lg:text-7xl">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.08,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mx-auto mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl"
        >
          From websites and apps to SEO and AI automation — we help South African
          businesses build, grow, and automate their digital presence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button href="/contact" variant="primary" size="lg">
            Get a Free Consultation
          </Button>
          <Button
            href="/work"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            See Our Work
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex flex-wrap items-center justify-center gap-x-2 text-sm text-neutral-400/60"
        >
          {trustIndicators.map((item, i) => (
            <span key={item} className="flex items-center">
              {i > 0 && (
                <span className="mr-2 text-neutral-400/30" aria-hidden="true">
                  &bull;
                </span>
              )}
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-neutral-400/50"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </motion.div>
      </motion.div>

      {/* CSS animations for sweep lines and reduced-motion */}
      <style jsx>{`
        .hero-sweep-line {
          animation: hero-sweep 12s ease-in-out infinite;
        }
        .hero-sweep-line--delay-1 {
          animation-delay: -4s;
        }
        .hero-sweep-line--delay-2 {
          animation-delay: -8s;
        }
        @keyframes hero-sweep {
          0%,
          100% {
            transform: translateX(-15%) rotate(var(--tw-rotate, 0deg));
            opacity: 0.02;
          }
          50% {
            transform: translateX(10%) rotate(var(--tw-rotate, 0deg));
            opacity: 0.06;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-sweep-line {
            animation: none;
          }
          .hero-dot-grid * {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
