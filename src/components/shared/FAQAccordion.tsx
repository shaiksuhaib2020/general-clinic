'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  q: string
  a: string
}

interface FAQAccordionProps {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className={cn('space-y-0', className)}>
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div
            key={i}
            className={cn(
              'border-b border-cream-200 last:border-b-0',
              isOpen && 'border-b-gold/20'
            )}
          >
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className={cn(
                'font-body font-semibold text-base transition-colors duration-200',
                isOpen ? 'text-gold' : 'text-navy group-hover:text-gold'
              )}>
                {item.q}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className="flex-shrink-0"
              >
                <ChevronDown className={cn(
                  'w-5 h-5 transition-colors duration-200',
                  isOpen ? 'text-gold' : 'text-gray-400 group-hover:text-gold'
                )} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-5 border-l-4 border-gold pl-4">
                    <p className="text-gray-500 text-[0.9375rem] leading-[1.7] font-body">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
