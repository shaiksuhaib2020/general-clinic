'use client'

import { Phone } from 'lucide-react'
import { CLINIC } from '@/data/clinic'

export default function CallFAB() {
  return (
    <div className="fixed bottom-6 right-24 md:bottom-8 md:right-28 z-50">
      <a
        href={`tel:${CLINIC.phone}`}
        aria-label="Call Assure Clinic"
        className="flex items-center justify-center w-12 h-12 bg-navy rounded-full shadow-large hover:scale-110 active:scale-95 transition-transform duration-200 border-2 border-gold/30"
      >
        <Phone className="w-5 h-5 text-white" />
      </a>
    </div>
  )
}
