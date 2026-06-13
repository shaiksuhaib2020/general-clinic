'use client'

import { motion } from 'framer-motion'
import StatCounter from '@/components/shared/StatCounter'
import { CLINIC } from '@/data/clinic'

export default function StatsBar() {
  return (
    <section className="bg-cream-100 py-14 md:py-16">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {CLINIC.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex flex-col items-center"
            >
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isDecimal={stat.isDecimal}
              />
              {/* Divider (desktop only, not last) */}
              {i < CLINIC.stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
