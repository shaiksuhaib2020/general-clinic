import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import AppointmentForm from '@/components/shared/AppointmentForm'
import BlogPostCard from '@/components/shared/BlogPostCard'
import { BLOG_POSTS } from '@/data/blogPosts'

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://assureclinic.com/blog/${post.slug}` },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2)
  const otherRelated = related.length < 2
    ? BLOG_POSTS.filter((p) => p.slug !== slug && !related.includes(p)).slice(0, 2 - related.length)
    : []
  const popularPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 4)

  const formattedDate = new Date(post.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <PageHero
        title={post.title}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog', href: '/blog' },
          { label: post.category },
        ]}
        tag={post.category}
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          {/* Main article */}
          <article>
            {/* Article meta */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 font-body mb-8 pb-6 border-b border-cream-200">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{formattedDate}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime}</span>
            </div>

            {/* Article content */}
            <div className="prose prose-navy max-w-none font-body text-gray-700 leading-relaxed space-y-5">
              {post.content ? (
                post.content.trim().split('\n').map((line, i) => {
                  if (line.startsWith('## ')) {
                    return <h2 key={i} className="font-heading font-bold text-2xl text-navy mt-8 mb-3">{line.slice(3)}</h2>
                  }
                  if (line.startsWith('### ')) {
                    return <h3 key={i} className="font-heading font-semibold text-xl text-navy mt-6 mb-2">{line.slice(4)}</h3>
                  }
                  if (line.startsWith('- ')) {
                    return <li key={i} className="ml-5 list-disc text-gray-600">{line.slice(2)}</li>
                  }
                  if (line.startsWith('| ')) {
                    return null
                  }
                  if (line.startsWith('**') && line.endsWith('**')) {
                    return <p key={i} className="font-semibold text-navy">{line.slice(2, -2)}</p>
                  }
                  if (line.trim() === '') return null
                  return <p key={i} className="text-gray-600 text-body-md">{line}</p>
                })
              ) : (
                <p className="text-gray-500">Full article content coming soon.</p>
              )}
            </div>

            {/* Back link */}
            <div className="mt-10 pt-6 border-t border-cream-200">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </div>

            {/* Related posts */}
            {[...related, ...otherRelated].length > 0 && (
              <div className="mt-12">
                <h2 className="font-heading font-bold text-xl text-navy mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[...related, ...otherRelated].map((p) => (
                    <BlogPostCard
                      key={p.slug}
                      slug={p.slug}
                      title={p.title}
                      excerpt={p.excerpt}
                      date={p.date}
                      readTime={p.readTime}
                      category={p.category}
                      author={p.author}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* CTA at bottom of article */}
            <div className="mt-12 bg-navy-section rounded-2xl p-8 text-white text-center">
              <p className="font-heading font-bold text-xl mb-2">Ready for Your Consultation?</p>
              <p className="text-white/70 text-sm font-body mb-5">Get expert assessment at Assure Clinic — no cost, no obligation.</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-body font-semibold rounded-xl px-6 py-3 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 transition-all duration-200"
              >
                Book Free Consultation
              </Link>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-8">
              {/* Popular articles */}
              <div>
                <h3 className="font-heading font-semibold text-lg text-navy mb-4">Popular Articles</h3>
                <div className="space-y-4">
                  {popularPosts.map((p) => (
                    <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                      <p className="text-sm font-body font-medium text-navy group-hover:text-gold transition-colors duration-200 line-clamp-2 leading-snug">
                        {p.title}
                      </p>
                      <p className="text-xs text-gray-400 font-body mt-1">{p.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Sidebar form */}
              <div className="bg-cream-100 rounded-2xl p-5">
                <h3 className="font-heading font-semibold text-lg text-navy mb-2">Book a Consultation</h3>
                <p className="text-gray-500 text-xs font-body mb-4">Free assessment — no obligation.</p>
                <AppointmentForm compact />
              </div>
            </div>
          </aside>
        </div>
      </SectionWrapper>
    </>
  )
}
