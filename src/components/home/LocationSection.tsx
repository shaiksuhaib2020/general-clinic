'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'
import { CLINIC } from '@/data/clinic'

export default function LocationSection() {
  return (
    <section className="bg-navy-section section-py">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Clinic info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div>
              <span className="text-gold text-xs font-body font-semibold uppercase tracking-widest">Find Us</span>
              <h2 className="font-heading font-bold text-display-sm text-white mt-2">Visit Our Hyderabad Clinic</h2>
            </div>

            {/* Address card */}
            <div className="bg-white/10 rounded-2xl p-5 flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-body text-sm font-semibold mb-1">Clinic Address</p>
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  {CLINIC.address.line1}<br />
                  {CLINIC.address.line2}<br />
                  {CLINIC.address.line3}<br />
                  {CLINIC.address.city}, {CLINIC.address.state} – {CLINIC.address.pincode}
                </p>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-gold text-xs font-body font-semibold mt-2 inline-block hover:underline">
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Timings card */}
            <div className="bg-white/10 rounded-2xl p-5 flex items-center gap-4">
              <Clock className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-white font-body text-sm font-semibold">Clinic Hours</p>
                <p className="text-white/60 text-sm font-body mt-0.5">{CLINIC.timings}</p>
              </div>
            </div>

            {/* Phone card */}
            <div className="bg-white/10 rounded-2xl p-5 flex items-center gap-4">
              <Phone className="w-5 h-5 text-gold flex-shrink-0" />
              <div>
                <p className="text-white font-body text-sm font-semibold">Call / WhatsApp</p>
                <a href={`tel:${CLINIC.phone}`} className="text-gold text-sm font-body hover:underline mt-0.5 block">
                  {CLINIC.phone}
                </a>
              </div>
            </div>

            {/* Nearby areas */}
            <div>
              <p className="text-white/60 text-xs font-body font-semibold uppercase tracking-widest mb-3">Serving patients from</p>
              <div className="flex flex-wrap gap-2">
                {CLINIC.nearbyAreas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-body">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl overflow-hidden bg-navy-800 h-80 lg:h-full min-h-[320px] flex items-center justify-center border border-white/10"
          >
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gold/40 mx-auto mb-3" />
              <p className="text-white/30 text-sm font-body">Google Maps</p>
              <p className="text-white/20 text-xs font-body mt-1">Banjara Hills, Hyderabad</p>
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-gold text-xs font-body font-semibold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
