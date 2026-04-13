import Link from 'next/link'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { generatePageMetadata } from '@/lib/metadata'
import { getAllPosts } from '@/lib/blog'

export const metadata = generatePageMetadata({
  title: 'Journal',
  description:
    'Insights, tutorials, and thoughts on web development, SEO, AI automation, and digital strategy for South African businesses.',
  path: '/journal',
})

const categoryColours: Record<string, string> = {
  'Web Design': 'bg-[#0A8FBF]/10 text-[#0A8FBF]',
  'SEO': 'bg-[#297373]/10 text-[#297373]',
  'AI & Automation': 'bg-[#E8503E]/10 text-[#E8503E]',
  'Business Insights': 'bg-[#4A4A4A]/10 text-[#4A4A4A]',
}

export default function JournalPage() {
  const posts = getAllPosts()

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
              <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl font-[family-name:var(--font-display)]">
                Journal
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto max-w-2xl text-lg text-[#B0B0B0] font-[family-name:var(--font-body)]">
                Insights on web development, SEO, AI automation, and digital
                strategy for South African businesses.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Posts */}
      {posts.length > 0 ? (
        <section className="bg-white py-24 md:py-32 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Featured post (first post) */}
            {posts.length > 0 && (
              <ScrollReveal>
                <Link
                  href={`/journal/${posts[0].slug}`}
                  className="group mb-16 block overflow-hidden rounded-2xl bg-[#F5F5F5] transition-all duration-300 hover:shadow-xl md:flex"
                >
                  <div className="flex flex-1 flex-col justify-center p-8 md:p-12">
                    <span
                      className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                        categoryColours[posts[0].category] ||
                        'bg-[#0A8FBF]/10 text-[#0A8FBF]'
                      }`}
                    >
                      {posts[0].category}
                    </span>
                    <h2 className="mb-3 text-2xl font-bold leading-tight text-[#1E1E1E] transition-colors group-hover:text-[#0A8FBF] md:text-3xl font-[family-name:var(--font-display)]">
                      {posts[0].title}
                    </h2>
                    <p className="mb-6 text-lg leading-relaxed text-[#4A4A4A] font-[family-name:var(--font-body)]">
                      {posts[0].description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-[#8A8A8A]">
                      <time dateTime={posts[0].date}>
                        {new Date(posts[0].date).toLocaleDateString('en-ZA', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <span className="h-1 w-1 rounded-full bg-[#8A8A8A]" />
                      <span>{posts[0].readTime}</span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            )}

            {/* Remaining posts grid */}
            {posts.length > 1 && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.slice(1).map((post, index) => (
                  <ScrollReveal key={post.slug} delay={100 * index}>
                    <Link
                      href={`/journal/${post.slug}`}
                      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-[#F5F5F5] transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
                    >
                      <div className="flex flex-1 flex-col p-6">
                        <span
                          className={`mb-4 inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
                            categoryColours[post.category] ||
                            'bg-[#0A8FBF]/10 text-[#0A8FBF]'
                          }`}
                        >
                          {post.category}
                        </span>
                        <h3 className="mb-3 text-lg font-bold leading-snug text-[#1E1E1E] transition-colors group-hover:text-[#0A8FBF] font-[family-name:var(--font-display)]">
                          {post.title}
                        </h3>
                        <p className="mb-6 flex-1 text-sm leading-relaxed text-[#4A4A4A] font-[family-name:var(--font-body)]">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between border-t border-[#DEDEDE] pt-4 text-xs text-[#8A8A8A]">
                          <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-ZA', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                            })}
                          </time>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      ) : (
        /* Coming soon fallback */
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
                <h2 className="mb-4 text-2xl font-bold text-[#1E1E1E] md:text-3xl font-[family-name:var(--font-display)]">
                  We&apos;re preparing our first articles
                </h2>
                <p className="text-lg leading-relaxed text-[#4A4A4A] font-[family-name:var(--font-body)]">
                  Check back soon for insights on web development, SEO, AI
                  automation, and digital strategy.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="noise-texture bg-[#141414] py-16 md:py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl font-[family-name:var(--font-display)]">
              Have a project in mind?
            </h2>
            <p className="mb-8 text-lg text-[#B0B0B0] font-[family-name:var(--font-body)]">
              Let&apos;s chat about how we can bring your vision to life.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#E8503E] px-8 py-4 text-lg font-bold text-white transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-[#D14535] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E8503E] focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              Get in Touch
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
