import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
  title: 'Journal',
  description:
    'Insights, tutorials, and thoughts on web development, SEO, AI automation, and digital strategy for South African businesses.',
  path: '/journal',
});

const upcomingArticles = [
  {
    title: 'Why Every SA Business Needs a Modern Website in 2024',
    description:
      'Your website is your most important salesperson. We explore why outdated sites cost businesses real revenue and what a modern web presence looks like.',
    readTime: '6 min read',
    date: 'Coming soon',
    category: 'Web Design',
  },
  {
    title: 'Introduction to AI Automation for Small Businesses',
    description:
      'AI is not just for enterprise. Discover practical ways small and mid-sized businesses can use automation to save time and reduce costs.',
    readTime: '8 min read',
    date: 'Coming soon',
    category: 'AI & Automation',
  },
  {
    title: 'SEO vs GEO: Optimising for Google and AI Search',
    description:
      'Search is evolving. Learn the difference between traditional SEO and Generative Engine Optimisation, and why you need both.',
    readTime: '7 min read',
    date: 'Coming soon',
    category: 'SEO',
  },
];

export default function JournalPage() {
  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <ScrollReveal>
              <div className="mb-4 flex items-center justify-center gap-4">
                <span className="block h-px w-12 bg-[#0A8FBF]" />
                <span className="text-sm font-semibold uppercase tracking-widest text-[#0A8FBF]">
                  Insights
                </span>
                <span className="block h-px w-12 bg-[#0A8FBF]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">Journal</h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto max-w-2xl text-lg text-[#B0B0B0]">
                Insights, tutorials, and thoughts on building for the web.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Coming soon message + newsletter */}
      <section className="bg-white py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#0A8FBF]/20 bg-[#0A8FBF]/5 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#0A8FBF]" />
                <span className="text-sm font-medium text-[#0A8FBF]">
                  Coming Soon
                </span>
              </div>
              <h2 className="mb-4 text-2xl font-bold text-[#1E1E1E] md:text-3xl">
                We&apos;re preparing our first articles
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-[#4A4A4A]">
                Check back soon for insights on web development, SEO, AI
                automation, and digital strategy. In the meantime, subscribe to be
                notified when we publish.
              </p>

              {/* Newsletter signup placeholder */}
              <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="you@company.co.za"
                  className="flex-1 rounded-xl border border-[#DEDEDE] bg-white px-4 py-3 font-[family-name:var(--font-body)] text-[#1E1E1E] placeholder-[#8A8A8A] transition-all duration-200 focus:border-[#0A8FBF] focus:outline-none focus:ring-2 focus:ring-[#0A8FBF]"
                  disabled
                />
                <button
                  disabled
                  className="rounded-xl bg-[#0A8FBF] px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-[#087CA7] disabled:opacity-50"
                >
                  Subscribe
                </button>
              </div>
              <p className="mt-3 text-xs text-[#8A8A8A]">
                No spam. Unsubscribe at any time.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Placeholder article cards */}
      <section className="bg-[#F5F5F5] py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="mb-10 text-center text-2xl font-bold text-[#1E1E1E] md:text-3xl">
              On the Horizon
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {upcomingArticles.map((article, index) => (
              <ScrollReveal key={index} delay={100 * index}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md">
                  {/* Coming Soon badge */}
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[#0A8FBF]/10 px-3 py-1 text-xs font-semibold text-[#0A8FBF]">
                    {article.category}
                  </span>
                  <h3 className="mb-3 text-lg font-bold leading-snug text-[#1E1E1E]">
                    {article.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-[#4A4A4A]">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between border-t border-[#DEDEDE] pt-4 text-xs text-[#8A8A8A]">
                    <span>{article.readTime}</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#F5F5F5] px-2 py-0.5 font-medium">
                      {article.date}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
