'use client'

import { MessageCircle } from 'lucide-react'
import { CLINIC } from '@/data/clinic'

export default function WhatsAppFAB() {
  const whatsappUrl = `https://wa.me/${CLINIC.whatsapp}?text=${CLINIC.whatsappMsg}`

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none" />
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-large hover:scale-110 active:scale-95 transition-transform duration-200"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </div>
  )
}
