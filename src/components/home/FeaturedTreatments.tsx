'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import TreatmentCard from '@/components/shared/TreatmentCard'
import { TREATMENTS } from '@/data/treatments'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function FeaturedTreatments() {
  return (
    <SectionWrapper background="cream">
      <SectionHeading
        tag="OUR TREATMENTS"
        title="Comprehensive Hair & Skin Care"
        subtitle="From permanent hair restoration to advanced dermatology — all under one roof"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {TREATMENTS.map((treatment) => (
          <motion.div key={treatment.slug} variants={itemVariants}>
            <TreatmentCard
              title={treatment.title}
              shortDesc={treatment.shortDesc}
              icon={treatment.icon}
              slug={treatment.slug}
              className="h-full"
            />
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-10">
        <Link
          href="/treatments"
          className="inline-flex items-center gap-2 text-gold font-body font-semibold text-sm hover:gap-3 transition-all duration-200"
        >
          View All Treatments
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionWrapper>
  )
}
