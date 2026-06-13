'use client'

import { motion } from 'framer-motion'
import { UserCheck, Award, Zap, Heart, Shield, Headphones } from 'lucide-react'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'

const WHY_CARDS = [
  {
    icon: UserCheck,
    title: '100% Doctor-Led Procedures',
    desc: 'Every step from extraction to implantation is performed by qualified doctors. No technicians, no nurses.',
  },
  {
    icon: Award,
    title: 'Qualified Doctors',
    desc: 'All surgeons are qualified doctors with extensive training. Board-certified experts ensuring the highest standards.',
  },
  {
    icon: Zap,
    title: 'Advanced Micro FUE',
    desc: 'Ultra-fine 0.6–0.8mm punches for maximum density, minimal scarring, and fastest recovery.',
  },
  {
    icon: Heart,
    title: 'Natural Hairline Design',
    desc: 'Custom hairline designed to match your facial features, age, and hair pattern.',
  },
  {
    icon: Shield,
    title: 'Transparent Pricing',
    desc: 'No hidden charges. Complete cost breakdown upfront. 0% EMI options available.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Post-Care',
    desc: 'Follow-up consultations, dedicated support line, and guidance throughout your journey.',
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
}

export default function WhyChooseUs() {
  return (
    <SectionWrapper background="white">
      <SectionHeading
        tag="WHY CHOOSE US"
        title="Rated #1 in Hyderabad"
        subtitle="What makes Assure Clinic the best choice for hair transplant"
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {WHY_CARDS.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 border border-cream-200 hover:border-gold hover:shadow-soft transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-navy mb-2">{title}</h3>
            <p className="text-gray-500 text-sm font-body leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
