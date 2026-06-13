'use client'

import { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Clock, User } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BlogPostCardProps {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  author: string
  className?: string
}

const BlogPostCard = memo(function BlogPostCard({
  slug,
  title,
  excerpt,
  date,
  readTime,
  category,
  author,
  className,
}: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-white rounded-2xl shadow-soft overflow-hidden hover:shadow-medium transition-shadow duration-300 flex flex-col',
        className
      )}
    >
      {/* Image placeholder */}
      <div className="h-44 bg-gradient-to-br from-cream-200 to-navy-100 relative flex items-center justify-center">
        <span className="text-xs font-body font-semibold px-3 py-1.5 rounded-full bg-gold text-navy absolute top-4 left-4">
          {category}
        </span>
        <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
          <span className="text-3xl">✦</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="font-heading font-semibold text-[1.0625rem] text-navy leading-snug line-clamp-2 hover:text-gold transition-colors duration-200">
          <Link href={`/blog/${slug}`}>{title}</Link>
        </h3>
        <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-3 flex-1">{excerpt}</p>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-cream-200 text-xs text-gray-400 font-body">
          <span className="flex items-center gap-1">
            <User className="w-3 h-3" />
            {author}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readTime}
          </span>
        </div>
      </div>
    </motion.article>
  )
})

export default BlogPostCard
