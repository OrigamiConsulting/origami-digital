import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export interface PostMeta {
  slug: string
  title: string
  description: string
  metaTitle: string
  metaDescription: string
  date: string
  category: string
  tags: string[]
  readTime: string
  image?: string
}

export interface Post extends PostMeta {
  content: string
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith('.mdx'))

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '')
    return getPostMeta(slug)
  }).filter(Boolean) as PostMeta[]

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostMeta(slug: string): PostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    metaTitle: data.metaTitle || data.title || '',
    metaDescription: data.metaDescription || data.description || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    readTime: stats.text,
    image: data.image || undefined,
  }
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    metaTitle: data.metaTitle || data.title || '',
    metaDescription: data.metaDescription || data.description || '',
    date: data.date || '',
    category: data.category || '',
    tags: data.tags || [],
    readTime: stats.text,
    image: data.image || undefined,
    content,
  }
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []

  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}
