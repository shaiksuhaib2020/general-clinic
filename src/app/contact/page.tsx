import type { Metadata } from 'next'
import { MapPin, Phone, Clock, Mail, MessageCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import AppointmentForm from '@/components/shared/AppointmentForm'
import { CLINIC } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'Contact & Book Appointment',
  description: 'Book a free hair transplant consultation at Assure Clinic Hyderabad. Located in Banjara Hills, opposite KBR Park. Call +91 8976877587.',
  alternates: { canonical: 'https://assureclinic.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact & Book Appointment"
        subtitle="Book your free consultation or reach us through any channel"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Contact' }]}
        tag="Get in Touch"
      />

      {/* Main contact section */}
      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Left: Large form */}
          <div>
            <SectionHeading
              tag="BOOK NOW"
              title="Request a Free Consultation"
              subtitle="Fill in your details and we'll call you within 24 hours to schedule your appointment."
              align="left"
              className="mb-8"
            />
            <div className="bg-white rounded-3xl border border-cream-200 shadow-soft p-7 md:p-9">
              <AppointmentForm />
            </div>
          </div>

          {/* Right: Clinic info */}
          <div className="space-y-4">
            {/* Address */}
            <div className="bg-cream-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-navy mb-1">Clinic Address</p>
                <p className="text-gray-500 text-sm font-body leading-relaxed">
                  {CLINIC.address.line1}<br />
                  {CLINIC.address.line2}<br />
                  {CLINIC.address.line3}<br />
                  {CLINIC.address.city} – {CLINIC.address.pincode}
                </p>
                <p className="text-gold text-xs font-body mt-1">{CLINIC.address.landmark}</p>
                <a
                  href={CLINIC.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs font-body font-semibold mt-2 inline-block hover:underline"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-cream-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-navy mb-1">Phone</p>
                <a href={`tel:${CLINIC.phone}`} className="text-gold text-sm font-body hover:underline">
                  {CLINIC.phone}
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="bg-cream-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-navy mb-1">WhatsApp</p>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}?text=${CLINIC.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] text-sm font-body hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-cream-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-navy mb-1">Email</p>
                <a href={`mailto:${CLINIC.email}`} className="text-gold text-sm font-body hover:underline">
                  {CLINIC.email}
                </a>
              </div>
            </div>

            {/* Timings */}
            <div className="bg-cream-100 rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-sm font-body font-semibold text-navy mb-1">Clinic Hours</p>
                <p className="text-gray-500 text-sm font-body">{CLINIC.timings}</p>
                <p className="text-gold text-xs font-body mt-1">Walk-ins welcome, but booking ahead is recommended</p>
              </div>
            </div>

            {/* Nearby areas */}
            <div className="bg-cream-100 rounded-2xl p-5">
              <p className="text-xs font-body font-semibold text-navy uppercase tracking-widest mb-3">Serving patients from</p>
              <div className="flex flex-wrap gap-2">
                {CLINIC.nearbyAreas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full border border-gold/30 text-gold text-xs font-body">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Map section */}
      <section className="w-full h-72 bg-navy-section flex items-center justify-center border-y border-white/5 relative">
        <div className="absolute inset-0 hero-pattern opacity-30" />
        <div className="relative text-center">
          <MapPin className="w-10 h-10 text-gold/50 mx-auto mb-3" />
          <p className="text-white/40 font-body text-sm">Google Maps — Banjara Hills, Hyderabad</p>
          <p className="text-white/20 font-body text-xs mt-1">Opposite KBR Park, {CLINIC.address.city}</p>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold rounded-xl px-6 py-2.5 text-sm hover:bg-gold-500 transition-all duration-200"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </>
  )
}
