'use client'

import { memo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Scissors, Droplets, Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ElementType> = {
  Scissors,
  Droplets,
  Sparkles,
}

interface TreatmentCardProps {
  title: string
  shortDesc: string
  icon: string
  slug: string
  className?: string
}

const TreatmentCard = memo(function TreatmentCard({ title, shortDesc, icon, slug, className }: TreatmentCardProps) {
  const Icon = ICON_MAP[icon] ?? Sparkles

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-white rounded-2xl p-6 border border-cream-200 hover:border-gold hover:shadow-soft transition-all duration-300 flex flex-col gap-4 group',
        className
      )}
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
        <Icon className="w-6 h-6 text-gold" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-heading font-semibold text-lg text-navy mb-2">{title}</h3>
        <p className="text-gray-500 text-sm font-body leading-relaxed line-clamp-2">{shortDesc}</p>
      </div>

      {/* Link */}
      <Link
        href={`/treatments/${slug}`}
        className="flex items-center gap-1.5 text-gold text-sm font-body font-semibold group-hover:gap-2.5 transition-all duration-200"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  )
})

export default TreatmentCard
