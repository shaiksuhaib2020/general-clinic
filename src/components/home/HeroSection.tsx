'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Star, CheckCircle } from 'lucide-react'
import AppointmentForm from '@/components/shared/AppointmentForm'
import { CLINIC } from '@/data/clinic'

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] as const },
})

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-navy-section flex items-center overflow-hidden">
      {/* Pattern overlay */}
      <div className="hero-pattern absolute inset-0 opacity-60" />
      {/* Gold accent gradient */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy/60 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 md:px-8 max-w-7xl py-28 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 text-white text-xs font-body font-semibold">
                <span className="text-gold">🏆</span>
                #1 Best Hair Transplant Clinic in Hyderabad
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.1)}
              className="font-heading font-bold text-display-lg md:text-display-xl text-white leading-[1.1]"
            >
              Best Hair Transplant in{' '}
              <span className="font-heading italic text-gold-gradient relative inline-block">
                Hyderabad
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold/50 rounded-full" />
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p {...fadeUp(0.2)} className="text-white/70 text-body-lg max-w-xl">
              {CLINIC.subTagline}
            </motion.p>

            {/* Trust signals */}
            <motion.div {...fadeUp(0.25)} className="flex items-center gap-1.5 flex-wrap">
              <div className="flex items-center gap-0.5">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <span className="text-gold font-body font-semibold text-sm">4.9</span>
              <span className="text-white/50 text-sm">·</span>
              <span className="text-white/70 text-sm font-body">500+ Reviews</span>
              <span className="text-white/50 text-sm">·</span>
              <span className="text-white/70 text-sm font-body">Banjara Hills</span>
            </motion.div>

            {/* CTA row */}
            <motion.div {...fadeUp(0.3)} className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gold text-navy font-body font-semibold rounded-xl px-7 py-3.5 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 transition-all duration-200"
              >
                Book Free Consultation
              </Link>
              <a
                href={`tel:${CLINIC.phone}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-body font-semibold rounded-xl px-7 py-3.5 text-sm hover:border-gold hover:text-gold active:scale-95 transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div {...fadeUp(0.35)} className="flex flex-wrap gap-4">
              {['100% Doctor-Led', 'No Scarring', 'EMI Available'].map((f) => (
                <span key={f} className="flex items-center gap-1.5 text-white/70 text-xs font-body">
                  <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  {f}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: Appointment form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="bg-white rounded-3xl shadow-large p-6 md:p-7 border-t-4 border-gold">
              <div className="mb-5">
                <h2 className="font-heading font-bold text-[1.375rem] text-navy">Book Free Consultation</h2>
                <p className="text-gray-400 text-xs font-body mt-1">
                  Get expert assessment at our Hyderabad clinic
                </p>
              </div>
              <AppointmentForm compact />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
