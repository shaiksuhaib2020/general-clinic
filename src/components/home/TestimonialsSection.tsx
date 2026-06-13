'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import ReviewCard from '@/components/shared/ReviewCard'
import { TESTIMONIALS } from '@/data/testimonials'

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 4000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    startAutoplay()
    return stopAutoplay
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SectionWrapper background="cream">
      <SectionHeading
        tag="PATIENT REVIEWS"
        title="What Our Patients Say"
        subtitle="★★★★★ 4.8 rating across all Assure Clinics"
      />
      {/* Desktop: horizontal scrolling carousel */}
      <div
        className="hidden md:grid md:grid-cols-3 gap-6"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <ReviewCard
              name={t.name}
              rating={t.rating}
              treatment={t.treatment}
              review={t.review}
              badge={t.badge}
            />
          </motion.div>
        ))}
      </div>

      {/* Mobile: single card with dots */}
      <div className="md:hidden">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <ReviewCard
            name={TESTIMONIALS[activeIndex].name}
            rating={TESTIMONIALS[activeIndex].rating}
            treatment={TESTIMONIALS[activeIndex].treatment}
            review={TESTIMONIALS[activeIndex].review}
            badge={TESTIMONIALS[activeIndex].badge}
          />
        </motion.div>
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === activeIndex ? 'bg-gold w-5' : 'bg-gray-300'}`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
