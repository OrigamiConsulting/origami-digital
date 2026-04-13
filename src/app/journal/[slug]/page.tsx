import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getPost, getAllSlugs } from '@/lib/blog'
import { generatePageMetadata } from '@/lib/metadata'
import { ScrollReveal } from '@/components/ui/scroll-reveal'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return generatePageMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/journal/${slug}`,
    image: post.image,
  })
}

const mdxComponents = {
  h2: (props: React.ComponentProps<'h2'>) => (
    <h2
      className="mb-4 mt-10 text-2xl font-bold text-[#1E1E1E] font-[family-name:var(--font-display)] md:text-3xl"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<'h3'>) => (
    <h3
      className="mb-3 mt-8 text-xl font-bold text-[#1E1E1E] font-[family-name:var(--font-display)] md:text-2xl"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<'p'>) => (
    <p
      className="mb-5 text-lg leading-relaxed text-[#4A4A4A] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<'ul'>) => (
    <ul
      className="mb-5 ml-6 list-disc space-y-2 text-lg text-[#4A4A4A] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<'ol'>) => (
    <ol
      className="mb-5 ml-6 list-decimal space-y-2 text-lg text-[#4A4A4A] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<'li'>) => (
    <li className="leading-relaxed" {...props} />
  ),
  a: (props: React.ComponentProps<'a'>) => (
    <a
      className="font-semibold text-[#0A8FBF] underline decoration-[#0A8FBF]/30 underline-offset-2 transition-colors hover:text-[#087CA7] hover:decoration-[#087CA7]"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentProps<'blockquote'>) => (
    <blockquote
      className="my-6 border-l-4 border-[#0A8FBF] bg-[#F5F5F5] py-4 pl-6 pr-4 italic text-[#4A4A4A]"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<'strong'>) => (
    <strong className="font-bold text-[#1E1E1E]" {...props} />
  ),
  table: (props: React.ComponentProps<'table'>) => (
    <div className="my-6 overflow-x-auto">
      <table className="w-full border-collapse text-left text-[#4A4A4A]" {...props} />
    </div>
  ),
  th: (props: React.ComponentProps<'th'>) => (
    <th className="border-b-2 border-[#DEDEDE] bg-[#F5F5F5] px-4 py-3 font-bold text-[#1E1E1E]" {...props} />
  ),
  td: (props: React.ComponentProps<'td'>) => (
    <td className="border-b border-[#DEDEDE] px-4 py-3" {...props} />
  ),
  hr: () => <hr className="my-10 border-t border-[#DEDEDE]" />,
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="noise-texture bg-[#141414] py-24 md:py-32 px-6">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <div className="mb-4 flex items-center justify-center gap-3">
              <Link
                href="/journal"
                className="text-sm font-medium text-[#B0B0B0] transition-colors hover:text-white"
              >
                Journal
              </Link>
              <span className="text-[#B0B0B0]">/</span>
              <span className="rounded-full bg-[#0A8FBF]/20 px-3 py-0.5 text-xs font-semibold text-[#0A8FBF]">
                {post.category}
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl font-[family-name:var(--font-display)]">
              {post.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex items-center justify-center gap-4 text-sm text-[#B0B0B0]">
              <span>Tinashe Munyaka</span>
              <span className="h-1 w-1 rounded-full bg-[#B0B0B0]" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString('en-ZA', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
              <span className="h-1 w-1 rounded-full bg-[#B0B0B0]" />
              <span>{post.readTime}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Content */}
      <article className="bg-white py-16 md:py-24 px-6">
        <div className="prose-custom mx-auto max-w-3xl">
          <MDXRemote source={post.content} components={mdxComponents} />
        </div>
      </article>

      {/* CTA */}
      <section className="noise-texture bg-[#141414] py-16 md:py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl font-[family-name:var(--font-display)]">
              Ready to discuss your project?
            </h2>
            <p className="mb-8 text-lg text-[#B0B0B0]">
              Get in touch for a free consultation about how we can help your
              business grow online.
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

      {/* Back to Journal */}
      <section className="bg-white py-8 px-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A8FBF] transition-colors hover:text-[#087CA7]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Journal
          </Link>
        </div>
      </section>
    </>
  )
}
