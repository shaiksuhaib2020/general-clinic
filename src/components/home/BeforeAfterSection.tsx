'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider'

const PAIRS = [
  { label: 'Norwood Grade 5 → Full Coverage', category: 'Hair Transplant' },
  { label: 'Hairline Restoration — 2,800 grafts', category: 'Hair Transplant' },
  { label: 'Crown Coverage — 3,200 grafts', category: 'Hair Transplant' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function BeforeAfterSection() {
  return (
    <SectionWrapper background="white">
      <SectionHeading
        tag="REAL RESULTS"
        title="Patient Transformations"
        subtitle="Results may vary. All images used with patient consent."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {PAIRS.map((pair) => (
          <motion.div key={pair.label} variants={itemVariants}>
            <BeforeAfterSlider label={pair.label} category={pair.category} />
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Link
          href="/results"
          className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          See All Results
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
