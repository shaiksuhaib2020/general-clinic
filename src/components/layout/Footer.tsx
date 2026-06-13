import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Camera, Users, Video, MessageCircle } from 'lucide-react'
import { CLINIC } from '@/data/clinic'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Hair Transplant', href: '/treatments/hair-transplant' },
  { label: 'PRP Therapy', href: '/treatments/prp-therapy' },
  { label: 'Skin Treatments', href: '/treatments/skin-treatments' },
  { label: 'Results Gallery', href: '/results' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const treatments = [
  { label: 'Hair Transplant', href: '/treatments/hair-transplant' },
  { label: 'Beard Transplant', href: '/treatments' },
  { label: 'PRP Therapy', href: '/treatments/prp-therapy' },
  { label: 'Hair Fall Treatment', href: '/treatments' },
  { label: 'Acne Treatment', href: '/treatments/skin-treatments' },
  { label: 'Pigmentation', href: '/treatments/skin-treatments' },
  { label: 'Chemical Peels', href: '/treatments/skin-treatments' },
  { label: 'Laser Treatments', href: '/treatments/skin-treatments' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-section text-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="font-heading font-bold text-2xl text-white">Assure Clinic</h3>
              <p className="text-gold text-sm mt-1 font-body">{CLINIC.tagline}</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Hyderabad&apos;s most trusted hair transplant and skin clinic. 100% doctor-led procedures,
              20,000+ successful transformations, and a commitment to natural results.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Instagram"
              >
                <Camera className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="Facebook"
              >
                <Users className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-200"
                aria-label="YouTube"
              >
                <Video className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-gold text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold text-sm font-body transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h4 className="text-gold text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Treatments
            </h4>
            <ul className="space-y-2.5">
              {treatments.map((t) => (
                <li key={t.label}>
                  <Link
                    href={t.href}
                    className="text-white/60 hover:text-gold text-sm font-body transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-gold text-xs font-body font-semibold uppercase tracking-widest mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${CLINIC.phone}`} className="flex items-start gap-3 group">
                  <Phone className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm font-body transition-colors duration-200">
                    {CLINIC.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${CLINIC.whatsapp}?text=${CLINIC.whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MessageCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm font-body transition-colors duration-200">
                    WhatsApp Us
                  </span>
                </a>
              </li>
              <li>
                <a href={`mailto:${CLINIC.email}`} className="flex items-start gap-3 group">
                  <Mail className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm font-body transition-colors duration-200">
                    {CLINIC.email}
                  </span>
                </a>
              </li>
              <li>
                <a href={CLINIC.mapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 group-hover:text-gold text-sm font-body transition-colors duration-200 leading-relaxed">
                    {CLINIC.address.line1}<br />
                    {CLINIC.address.line2}<br />
                    {CLINIC.address.line3}<br />
                    {CLINIC.address.city} – {CLINIC.address.pincode}
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-white/70 text-sm font-body">{CLINIC.timings}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs font-body text-center sm:text-left">
            © 2026 Assure Clinic. All Rights Reserved.
          </p>
          <p className="text-white/40 text-xs font-body">
            Made with <span className="text-gold">♥</span> in Hyderabad
          </p>
        </div>
      </div>
    </footer>
  )
}
