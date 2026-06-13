'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Star } from 'lucide-react'
import { DOCTOR, CLINIC } from '@/data/clinic'

export default function SurgeonSection() {
  return (
    <section className="bg-navy-section section-py">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <span className="text-gold text-xs font-body font-semibold uppercase tracking-widest">
              Meet Your Surgeon
            </span>
            <h2 className="font-heading font-bold text-display-md text-white">{DOCTOR.name}</h2>
            <p className="text-gold font-body font-semibold text-base">{DOCTOR.credentials}</p>

            {/* Quote */}
            <blockquote className="relative pl-6 border-l-4 border-gold">
              <span className="absolute -left-3 -top-2 text-gold text-5xl font-heading leading-none opacity-40">&ldquo;</span>
              <p className="font-heading italic text-white/80 text-base leading-relaxed">
                {DOCTOR.quote}
              </p>
            </blockquote>

            {/* Membership badges */}
            <div className="flex flex-wrap gap-2">
              {DOCTOR.memberships.map((m) => (
                <span key={m} className="text-xs font-body font-semibold px-3 py-1.5 rounded-full border border-white/20 text-white/80 bg-white/5">
                  {m}
                </span>
              ))}
            </div>

            {/* Specialties */}
            <ul className="space-y-2.5">
              {DOCTOR.specialties.map((s) => (
                <li key={s} className="flex items-start gap-2.5 text-sm font-body text-white/70">
                  <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  {s}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-body font-semibold rounded-xl px-6 py-3 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 transition-all duration-200"
              >
                Book With Dr. Pilani&apos;s Team
              </Link>
            </div>

            {/* Practo rating */}
            <div className="flex items-center gap-1.5">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              <span className="text-gold font-body font-semibold text-sm">{CLINIC.practoRating} on Practo</span>
              <span className="text-white/40 text-sm">({CLINIC.practoReviews}+ reviews)</span>
            </div>
          </motion.div>

          {/* Right: Doctor image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center"
          >
            <div className="w-full max-w-sm h-[420px] md:h-[500px] rounded-3xl bg-navy-800 border-2 border-gold/30 flex flex-col items-center justify-center gap-4 shadow-large">
              <div className="w-28 h-28 rounded-full bg-navy-700 border-2 border-gold/40 flex items-center justify-center">
                <span className="text-white/30 text-4xl font-heading font-bold">AP</span>
              </div>
              <div className="text-center">
                <p className="text-white/60 text-sm font-body">Dr. Abhishek Pilani</p>
                <p className="text-gold/60 text-xs font-body mt-1">Founder & Celebrity Dermatologist</p>
              </div>
              <p className="text-white/20 text-xs font-body italic">[Doctor photo — replace in production]</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
