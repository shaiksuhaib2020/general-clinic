'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewCardProps {
  name: string
  rating: number
  treatment: string
  review: string
  badge: string
  className?: string
}

const ReviewCard = memo(function ReviewCard({ name, rating, treatment, review, badge, className }: ReviewCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'relative bg-white rounded-2xl shadow-soft p-6 flex flex-col gap-4 hover:shadow-medium transition-shadow duration-300',
        className
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-5 right-5 w-8 h-8 text-gold/20" fill="currentColor" />

      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-gold text-lg">★</span>
        ))}
      </div>

      {/* Review text */}
      <p className="font-heading italic text-[0.9375rem] text-charcoal leading-[1.8] flex-1">
        &ldquo;{review}&rdquo;
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-2 border-t border-cream-200">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
          <span className="text-sm font-body font-medium text-charcoal">{name}</span>
        </div>
        <span className="text-xs font-body font-semibold px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 flex-shrink-0">
          {badge}
        </span>
      </div>
    </motion.div>
  )
})

export default ReviewCard
