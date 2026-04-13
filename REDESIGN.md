# REDESIGN.md — Origami Digital Complete Visual Overhaul

> **CRITICAL: Read this entire document before writing ANY code.**
> This is a design execution brief from a Senior UI/UX Designer who is not happy with the current output. The current site looks like a wireframe with colours applied. It needs to look like an Awwwards-nominated agency site. Every instruction here overrides any conflicting instruction in CLAUDE.md regarding visual implementation.

---

## THE CORE PROBLEMS (Do Not Skip This)

1. **BROKEN ANIMATIONS — FIX FIRST.** Every Framer Motion `whileInView` animation is broken. All content below the hero is permanently stuck at `opacity: 0; transform: translateY(30px)`. This means 80% of the site is literally invisible. The hero text itself also has near-zero opacity. THIS IS THE #1 PRIORITY.

2. **No images anywhere.** The entire site is text on flat backgrounds. No hero imagery, no portfolio screenshots, no about section photos, no visual elements beyond tiny SVG icons. A design agency website without images is like a restaurant without food on the menu.

3. **Typography is generic.** Space Grotesk was explicitly banned in CLAUDE.md. It was used anyway. The type has no character, no hierarchy drama, no visual impact.

4. **Contrast failures.** Dark grey text on dark backgrounds throughout the hero. Text is nearly invisible.

5. **No visual texture or depth.** Flat solid colour backgrounds with no atmosphere, no grain, no gradients, no visual interest.

6. **Generic card layouts.** The services cards look like Bootstrap defaults — thin borders, tiny icons, predictable grid. No personality.

7. **Fake testimonials.** Made-up client quotes damage credibility.

---

## ANIMATION FIX — DO THIS BEFORE ANYTHING ELSE

The Framer Motion `whileInView` animations are not triggering after server-side render. Every animated element renders with inline `style="opacity:0;transform:translateY(30px)"` and stays that way forever.

### The Fix

**Option A (Recommended): CSS-first animations with JS enhancement**

Remove Framer Motion from all section-level animations. Use CSS `@keyframes` with Intersection Observer for scroll reveals. This is more reliable with SSR:

```tsx
// components/ui/ScrollReveal.tsx
'use client';
import { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
```

**CRITICAL FALLBACK:** Add this CSS to `globals.css` so content is ALWAYS visible even if JavaScript fails:

```css
/* Ensure content is visible without JS */
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}

/* Fallback: if JS hasn't loaded after 3 seconds, show everything */
.js-loading * {
  opacity: 1 !important;
  transform: none !important;
}
```

**Option B: If keeping Framer Motion**, set `initial` to `false` on the server and only animate on the client:

```tsx
'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function AnimatedSection({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ opacity: 1 }}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
```

**DO NOT ship any element with a default inline style of `opacity: 0`.** If the animation hasn't triggered, content must still be visible.

---

## TYPOGRAPHY OVERHAUL

### Remove Space Grotesk and DM Sans immediately.

### Use these fonts (available on Google Fonts):

```typescript
// src/lib/fonts.ts
import { Syne, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

export const fontDisplay = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const fontBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
});
```

### Why these fonts:
- **Syne** is bold, geometric, and distinctive — it has character and authority. It screams "design-forward tech company". It is NOT generic.
- **Plus Jakarta Sans** is clean, modern, and highly readable — perfect for body text. It has warmth without being soft.
- **JetBrains Mono** for any code/tech references — industry standard.

### Type Scale — Create Drama

```css
/* Display headings — Syne, bold, tight tracking */
.hero-headline {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: clamp(3rem, 7vw, 5.5rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #FFFFFF;
}

/* Section headings */
.section-heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

/* Body text */
.body-text {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 1.0625rem; /* 17px — slightly larger than default for readability */
  line-height: 1.7;
  color: #4A4A4A;
}

/* Overline/label text */
.overline {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 0.8125rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

---

## COLOUR CONTRAST FIX

### The Rules (Non-Negotiable):

1. **On dark backgrounds (#1E1E1E, #141414):** Text must be `#FFFFFF` or `#F5F5F5` for headings, `#B0B0B0` minimum for body text. NEVER use grey darker than #999 on dark backgrounds.
2. **On light backgrounds (#FFFFFF, #F5F5F5):** Text must be `#1E1E1E` for headings, `#4A4A4A` for body text.
3. **Accent text (#0A8FBF blue):** Only use on dark backgrounds or as small labels on light backgrounds. Never as body text.
4. **The coral (#EF6351):** Only on buttons and CTAs. Maximum 2 instances per viewport.
5. **Test every text element** against WCAG AA (4.5:1 for body, 3:1 for large text). If in doubt, make it whiter on dark or blacker on light.

---

## PLACEHOLDER IMAGES — MANDATORY

The site MUST have images. Use Unsplash placeholder images for now. These will be replaced with real content later, but the site must demonstrate that it's designed with imagery in mind.

### How to add placeholder images:

Use `next/image` with Unsplash URLs via the `unoptimized` prop, or download and place images in `/public/images/`:

```tsx
// For development/placeholder use:
<Image
  src="https://images.unsplash.com/photo-XXXXX?w=1200&q=80"
  alt="Description"
  width={1200}
  height={800}
  className="object-cover"
  unoptimized
/>
```

Add to `next.config.ts`:
```typescript
images: {
  remotePatterns: [
    { protocol: 'https', hostname: 'images.unsplash.com' },
    { protocol: 'https', hostname: 'images.pexels.com' },
    { protocol: 'https', hostname: 'picsum.photos' },
  ],
},
```

### Specific Images Needed:

1. **Hero section:** A high-quality image showing a modern workspace, screen with code/design, or abstract tech visual. Dark-toned to work with the dark hero. Suggestions:
   - `photo-1498050108023-c5249f4df085` (laptop code on desk, dark)
   - `photo-1551434678-e076c223a692` (developer workspace)
   - `photo-1460925895917-afdab827c52f` (dashboard on screen)

2. **About section:** Professional but approachable — modern office/workspace or abstract architecture. 
   - `photo-1497366216548-37526070297c` (modern architecture, clean)
   - `photo-1497215842964-222b430dc094` (geometric architecture)

3. **Services section:** Use relevant imagery per pillar:
   - Build: screens with code or app interfaces
   - Grow: analytics dashboards, growth charts
   - Automate: abstract AI/tech visuals, circuit patterns

4. **Portfolio section:** TAKE ACTUAL SCREENSHOTS of the live sites:
   - Visit https://origami-finance.co.za and screenshot the homepage
   - Visit https://origami-pay.co.za and screenshot the homepage
   - Visit https://www.origamievconnect.com and screenshot the homepage
   - Visit https://www.impactroots.co.za and screenshot the homepage
   - If you cannot take screenshots programmatically, use placeholder images with proper project descriptions and link to the live sites.

5. **CTA section background:** Abstract geometric or tech-themed dark image with overlay.

---

## SECTION-BY-SECTION REDESIGN

### 1. NAVIGATION

**Current:** Basic horizontal nav, functional but unremarkable.

**Redesign:**
- Keep the structure but add: backdrop-blur glass effect when scrolled (`bg-[#141414]/80 backdrop-blur-xl`)
- Logo: Replace the generic diamond SVG with the text "Origami" in Syne Bold + "Digital" in Syne Regular (until the real horse logo is provided)
- Nav links: `font-body`, weight 500, 14px, tracking slightly wider
- Active state: Small dot below active link instead of underline
- "Get Started" CTA button: Solid coral with rounded-full (pill shape), not rounded-lg
- On scroll: Add subtle border-bottom `border-white/5` for separation
- Mobile: Full-screen overlay menu with large type (Syne, 2rem+), staggered animation on open

### 2. HERO SECTION — Complete Redesign

**Current:** Centred text on dark background. Nearly invisible. No imagery. Generic.

**Redesign — Split Layout with Visual Impact:**

```
┌─────────────────────────────────────────────────────┐
│ [Nav]                                                │
│                                                      │
│  ┌──────────────────┐  ┌──────────────────────────┐  │
│  │                  │  │                          │  │
│  │  Overline badge  │  │    HERO IMAGE            │  │
│  │                  │  │    (Laptop with code      │  │
│  │  We Build        │  │     or modern workspace   │  │
│  │  Digital         │  │     with slight gradient  │  │
│  │  Products        │  │     overlay on left edge) │  │
│  │  That Perform    │  │                          │  │
│  │                  │  │                          │  │
│  │  Subheading      │  │                          │  │
│  │                  │  │                          │  │
│  │  [CTA] [CTA]     │  │                          │  │
│  │                  │  │                          │  │
│  └──────────────────┘  └──────────────────────────┘  │
│                                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│  │ 10+  │ │ 50+  │ │ 95+  │ │ AI   │               │
│  │ Yrs  │ │ Proj │ │ Perf │ │ Pwr'd│               │
│  └──────┘ └──────┘ └──────┘ └──────┘               │
└─────────────────────────────────────────────────────┘
```

**Specific implementation:**
- Two-column layout: 45% text (left-aligned) / 55% image (right)
- Text column: Left-aligned, not centred. Headline in white (#FFFFFF), NOT grey.
- Overline: "AI-Augmented Digital Agency" — small pill badge with subtle blue glow
- Headline: Syne, 800 weight, clamp(3rem, 7vw, 5.5rem). Each word on its own line for dramatic vertical rhythm. Pure white.
- Subheading: Plus Jakarta Sans, 400 weight, 1.125rem, colour `#B8B8B8` (light enough to read on dark!)
- CTAs: Primary = coral (#EF6351), pill-shaped, large (px-8 py-4). Secondary = ghost/outline with white border
- Image: Full-height of the hero area, with a gradient overlay fading from the dark background into the image on the left edge. Rounded corners (rounded-2xl or rounded-3xl). Add a subtle `ring-1 ring-white/10` for definition.
- Below CTAs: A row of 4 small stat counters: "10+ Years Experience" • "50+ Projects Delivered" • "95+ Performance Scores" • "AI-Powered Workflow" — small text, subtle, adds credibility without being loud.
- Background: Dark (#141414) with a very subtle radial gradient glow (blue, low opacity, positioned behind the text column)
- Add a subtle animated grid/dot pattern overlay at ~3% opacity across the entire hero for texture

**Hero animation sequence (on page load, not on scroll):**
1. Badge fades in (0ms delay)
2. Headline words appear one by one (200ms intervals, slide up from 20px)
3. Subheading fades in (after headline completes)
4. CTAs fade in together (200ms after subheading)
5. Stats fade in (200ms after CTAs)
6. Image scales from 0.95 to 1.0 with fade (concurrent with headline)

### 3. SERVICES SECTION

**Current:** Three white cards with thin borders, tiny icons, bullet point lists. Generic.

**Redesign — Bento Grid Layout:**

Instead of three equal cards, use an asymmetric bento grid:

```
┌────────────────────────────────────────────────────┐
│ Section label: "What We Do"                        │
│ Section heading: Large, bold, Syne                 │
│                                                    │
│ ┌──────────────────────────┐ ┌───────────────────┐ │
│ │                          │ │                   │ │
│ │  BUILD                   │ │  GROW             │ │
│ │  Digital Product Dev     │ │  Search &         │ │
│ │                          │ │  Digital          │ │
│ │  [Image: code/screens]   │ │  Visibility       │ │
│ │                          │ │                   │ │
│ │  • Websites              │ │  [Image: charts]  │ │
│ │  • Mobile Apps           │ │                   │ │
│ │  • Custom Software       │ │  • SEO & GEO      │ │
│ │  • UI/UX Design          │ │  • Google Ads     │ │
│ │                          │ │  • Content        │ │
│ │  [Arrow link →]          │ │  [Arrow link →]   │ │
│ └──────────────────────────┘ └───────────────────┘ │
│ ┌──────────────────────────────────────────────────┐│
│ │  AUTOMATE                                        ││
│ │  AI-Powered Business Solutions                   ││
│ │                                                  ││
│ │  [Full-width card with image on right side]      ││
│ │  • Workflow Automation  • AI Chatbots            ││
│ │  • Document Processing  • Custom Tools           ││
│ │  [Arrow link →]                                  ││
│ └──────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────┘
```

**Card styling:**
- Background: `#F8F8F8` (very light grey, NOT pure white — creates subtle depth)
- Border: `border border-neutral-200/50` — barely visible, just enough definition
- Border-radius: `rounded-3xl` (generous, modern)
- Padding: `p-8 md:p-10` (generous)
- Each card has a coloured accent: top-left corner gradient blob (blue for Build, teal for Grow, coral for Automate) at low opacity
- Each card has a relevant image or illustration at the top
- Pillar label: Overline style, coloured (blue/teal/coral), uppercase, tracked wide
- Card heading: Syne, bold, 1.5rem
- Service list: Small dots as bullets, not default list styling
- Hover: Subtle lift (`hover:-translate-y-1`) + shadow increase + border colour shifts to pillar colour

**The Automate card spans full width** and uses a two-column internal layout (text left, image right) to make it visually distinct as the differentiator.

### 4. PORTFOLIO / WORK SECTION

**Current:** Gradient placeholder boxes with text. Looks unfinished.

**Redesign:**

- Dark background section (#1E1E1E) for contrast rhythm
- Section heading in white
- 2-column grid of project cards
- Each card: Screenshot image (aspect-video) + project info below
- Card background: `#2A2A2A` with `rounded-2xl overflow-hidden`
- Image: Full-width, actual screenshot of the live site or a high-quality placeholder
- Below image: Project name (white, Syne, bold), description (grey), tech tags (small pills with `bg-white/5 border border-white/10`)
- Hover: Image scales up slightly (`group-hover:scale-105` with `overflow-hidden` on parent), subtle overlay appears with "View Project →" text
- Add a subtle gradient or glow behind the grid for depth

**If actual screenshots cannot be captured programmatically, use browser mockup frames:**
Create a simple browser window frame (grey bar with 3 dots) around a gradient placeholder that shows the project name prominently. This looks 100x better than a plain gradient box.

### 5. SOCIAL PROOF SECTION — Replace Testimonials

**Remove the fake testimonials entirely.** Replace with a "Why Work With Us" section:

```
┌────────────────────────────────────────────────────┐
│ Light background (#F5F5F5)                         │
│                                                    │
│ "Why Origami Digital"                              │
│                                                    │
│ ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌─────┐ │
│ │ 10+       │ │ 50+       │ │ 95+       │ │ 24h │ │
│ │ Years of  │ │ Projects  │ │ Lighthouse│ │ Avg │ │
│ │ Design &  │ │ Delivered │ │ Scores    │ │ Turn│ │
│ │ Dev Exp.  │ │           │ │ Average   │ │     │ │
│ └───────────┘ └───────────┘ └───────────┘ └─────┘ │
│                                                    │
│ ┌──────────────────────────────────────────────────┐│
│ │ "No bloated agency overhead. Direct access to    ││
│ │  a senior designer & developer who builds with   ││
│ │  the same AI tools used by teams at ServiceNow,  ││
│ │  Shopify, and Notion."                           ││
│ └──────────────────────────────────────────────────┘│
└────────────────────────────────────────────────────┘
```

- Four metric cards in a row
- Large numbers (Syne, 3rem+, bold, coloured — blue/teal)
- Description below each number (small, grey)
- Below the metrics: A single powerful statement (large, italic, centred) that positions you
- Below the statement: A row of technology logos (Next.js, React, Tailwind, Vercel, Claude/AI) as small grey icons — shows your tech stack credibility

### 6. FAQ SECTION

**Current:** Invisible (broken animations). 

**Redesign:**
- Keep the accordion structure but style it properly
- Left-align the section heading, not centred
- Two-column layout: heading + intro text on the left (sticky), FAQ items on the right
- FAQ items: Clean dividers, Syne for questions, Plus Jakarta for answers
- Open/close icon: Animated rotation of a plus/minus or chevron
- On open: Smooth height animation, answer text fades in
- Background: White

### 7. CTA SECTION (Bottom)

**Current:** Invisible.

**Redesign:**
- Full-width dark section with a large background image (dark abstract/geometric) with a colour overlay
- Alternatively: A gradient from `#0A8FBF` (blue) to `#297373` (teal) at maybe 90% opacity over a subtle pattern
- Large headline: "Ready to Build Something Exceptional?" — Syne, white, 3rem+
- Subheading: One line about getting started
- Single coral CTA button, large, pill-shaped, with a subtle glow/shadow effect (`shadow-[0_0_30px_rgba(239,99,81,0.3)]`)
- Below button: "Or email us at hello@origami-digital.co.za" with blue link
- This section should feel like a moment — a deliberate pause that says "let's work together"

### 8. FOOTER

**Current:** Actually decent structure-wise. Tweaks needed:

- Increase padding (more breathing room)
- Logo + tagline + description column should be wider
- Add a subtle top border or gradient divider between CTA section and footer
- Social icons: Slightly larger (w-10 h-10), more visible hover state
- Add a "Back to top" button (small, top-right of footer)
- Copyright text: Very small, light grey, with a thin divider line above

---

## GLOBAL STYLING ADDITIONS

### Add these to `globals.css`:

```css
/* Noise texture overlay */
.noise-texture::before {
  content: '';
  position: absolute;
  inset: 0;
  opacity: 0.03;
  pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  z-index: 1;
}

/* Subtle dot grid pattern */
.dot-grid {
  background-image: radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px);
  background-size: 24px 24px;
}

/* Smooth scroll */
html {
  scroll-behavior: smooth;
}

/* Selection colour */
::selection {
  background-color: rgba(10, 143, 191, 0.3);
  color: white;
}

/* Focus visible styles */
:focus-visible {
  outline: 2px solid #0A8FBF;
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Apply `noise-texture` class:
- Hero section (dark)
- Footer (dark)
- CTA section (dark)
- Any dark background section

### Apply `dot-grid` class:
- Hero section (very subtle, adds texture to the dark background)

---

## PAGE-LEVEL IMPROVEMENTS

### Services Page (`/services`)

**Current:** The page title "Our Services" is buried. Cards are generic.

**Redesign:**
- Hero: Dark, compact (not full-screen), with the headline "Our Services" in large Syne type
- Below hero: Three pillar sections, each with a distinct visual treatment
- Each pillar section: Full-width, alternating light/dark backgrounds
- Each service card within a pillar links to its detail page
- Add relevant imagery to each card

### About Page (`/about`)

- Tell Tinashe's story with a personal photo placeholder (Unsplash professional portrait)
- Include the Origami metaphor — precision, transformation, craft
- Timeline or milestone section showing the journey
- "How I Work" section explaining the AI-augmented approach
- Tech stack visual — logos of tools used

### Contact Page (`/contact`)

- Two-column: Form on the left, contact info + map on the right
- Form fields: Clean, generous padding, subtle focus states (blue border glow)
- Include a Calendly-style "Book a call" option or link
- Add the physical location (Bedfordview, Johannesburg) with context

---

## QUALITY CHECKLIST — Before Deploying

- [ ] ALL text is readable — check contrast on every section, light AND dark
- [ ] NO element has a default/initial opacity of 0 without a working animation
- [ ] Scroll through the ENTIRE page and verify every section is VISIBLE
- [ ] Images load on every section that should have images
- [ ] Hero headline is pure white (#FFFFFF) on dark background
- [ ] Typography uses Syne + Plus Jakarta Sans, NOT Space Grotesk
- [ ] Hover states work on all cards, buttons, and links
- [ ] Mobile responsive — test at 375px width
- [ ] Lighthouse Performance: 90+, Accessibility: 95+
- [ ] No horizontal scroll on any viewport size
- [ ] Footer is visible and properly styled
- [ ] All internal links work (Services, About, Work, Journal, Contact)
- [ ] Page title in browser tab is correct for each page
- [ ] Favicon loads

---

## DESIGN PHILOSOPHY — Read Before Every Decision

This website is for a company that SELLS design and development. Every pixel is a portfolio piece. Every interaction is a demonstration of capability. If a section looks like it could have come from a free template, it's wrong. 

The aesthetic direction is: **Refined modern dark** — confident, clean, with moments of warmth (the coral), technical credibility (the blue/teal), and human craft (the typography, the spacing, the attention to detail). Think: the confidence of a Stripe or Linear website, but with the warmth and personality of a smaller, more personal studio.

Reference sites for visual calibre (don't copy, draw inspiration):
- stripe.com — Clean, spacious, confident use of gradients and imagery
- linear.app — Dark theme done right, beautiful typography, purposeful animation
- vercel.com — Developer-focused but beautifully designed, great section rhythm
- raycast.com — Dark, modern, great use of imagery and subtle effects

The goal: When a potential client lands on this site, within 3 seconds they should think "This company knows what they're doing. I want to work with them."

That's the bar. Build to that bar.
