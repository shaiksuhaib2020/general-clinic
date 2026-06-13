'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface StatCounterProps {
  value: number
  suffix: string
  label: string
  isDecimal?: boolean
  className?: string
}

export default function StatCounter({ value, suffix, label, isDecimal, className }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [displayValue, setDisplayValue] = useState(isDecimal ? value - 0.9 : 0)

  useEffect(() => {
    if (!isInView) return

    const startValue = isDecimal ? value - 0.9 : 0
    const duration = 2000
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = startValue + (value - startValue) * eased

      setDisplayValue(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, value, isDecimal])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, ease: 'backOut' }}
      className={cn('text-center', className)}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        <span className="font-heading font-bold text-display-sm md:text-display-md text-gold leading-none">
          {isDecimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}
        </span>
        <span className="font-heading font-bold text-2xl md:text-3xl text-gold">{suffix}</span>
      </div>
      <p className="text-navy/60 font-body text-sm md:text-body-sm mt-2 font-medium">{label}</p>
    </motion.div>
  )
}
