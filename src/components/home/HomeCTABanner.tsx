'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { CLINIC } from '@/data/clinic'

export default function HomeCTABanner() {
  return (
    <section className="bg-gold py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-heading font-bold text-display-sm md:text-display-md text-navy">
            Ready to Restore Your Confidence?
          </h2>
          <p className="text-navy/70 text-body-lg max-w-xl">
            Join 20,000+ satisfied patients. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-navy text-white font-body font-semibold rounded-xl px-8 py-3.5 text-sm hover:bg-navy-800 active:scale-95 transition-all duration-200"
            >
              Book Free Consultation
            </Link>
            <a
              href={`tel:${CLINIC.phone}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-navy text-navy font-body font-semibold rounded-xl px-8 py-3.5 text-sm hover:bg-navy hover:text-white active:scale-95 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call: {CLINIC.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
