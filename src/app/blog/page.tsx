import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import BlogPostCard from '@/components/shared/BlogPostCard'
import { BLOG_POSTS } from '@/data/blogPosts'

export const metadata: Metadata = {
  title: 'Hair & Skin Insights Blog',
  description: 'Expert articles on hair transplant, PRP therapy, skincare, and hair health from the doctors at Assure Clinic Hyderabad.',
  alternates: { canonical: 'https://assureclinic.com/blog' },
}

const CATEGORIES = ['Hair Health', 'Hair Transplant', 'Hair Treatment', 'Skincare']

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS

  const featuredDate = new Date(featured.date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <PageHero
        title="Insights & Guides"
        subtitle="Expert advice on hair restoration, skincare, and the science behind your treatments"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
      />

      <SectionWrapper background="white">
        {/* Featured post */}
        <div className="mb-14">
          <SectionHeading tag="FEATURED" title="Latest Article" align="left" className="mb-8" />
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-3xl border border-cream-200 shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300">
              <div className="h-56 lg:h-full bg-gradient-to-br from-navy-200 to-navy-600 flex items-center justify-center min-h-[220px]">
                <div className="text-center">
                  <span className="text-xs font-body font-semibold px-3 py-1.5 rounded-full bg-gold text-navy mb-3 inline-block">
                    {featured.category}
                  </span>
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto">
                    <span className="text-3xl">✦</span>
                  </div>
                </div>
              </div>
              <div className="p-7 flex flex-col justify-center gap-4">
                <h2 className="font-heading font-bold text-xl md:text-2xl text-navy group-hover:text-gold transition-colors duration-200 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 font-body text-sm leading-relaxed line-clamp-3">{featured.excerpt}</p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-body">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" />{featured.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{featuredDate}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-gold font-body font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* All posts grid + categories sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-10">
          {/* Posts grid */}
          <div>
            <SectionHeading tag="ALL ARTICLES" title="More from Our Blog" align="left" className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {rest.map((post) => (
                <BlogPostCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  readTime={post.readTime}
                  category={post.category}
                  author={post.author}
                />
              ))}
            </div>
          </div>

          {/* Sidebar: categories */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <h3 className="font-heading font-semibold text-lg text-navy mb-4">Categories</h3>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <div
                    key={cat}
                    className="flex items-center justify-between px-4 py-3 rounded-xl bg-cream-100 hover:bg-gold/10 cursor-pointer transition-colors duration-200 group"
                  >
                    <span className="text-sm font-body font-medium text-navy group-hover:text-gold transition-colors duration-200">
                      {cat}
                    </span>
                    <span className="text-xs font-body text-gray-400">
                      {BLOG_POSTS.filter((p) => p.category === cat).length}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
