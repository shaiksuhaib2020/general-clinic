'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { CLINIC } from '@/data/clinic'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Treatments',
    href: '/treatments',
    children: [
      { label: 'Hair Transplant', href: '/treatments/hair-transplant', description: 'Permanent FUE with 95–98% graft survival' },
      { label: 'PRP Therapy', href: '/treatments/prp-therapy', description: 'Natural growth stimulation with your own plasma' },
      { label: 'Skin Treatments', href: '/treatments/skin-treatments', description: 'Acne, pigmentation, laser & more' },
    ],
  },
  { label: 'Results', href: '/results' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [treatmentOpen, setTreatmentOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <span className={cn(
                'font-heading font-bold text-xl md:text-2xl tracking-tight transition-colors duration-300',
                scrolled ? 'text-navy' : 'text-white'
              )}>
                Assure Clinic
              </span>
              <span className="absolute -bottom-0.5 left-0 w-8 h-0.5 bg-gold rounded-full"></span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              if (link.children) {
                return (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setTreatmentOpen(true)}
                    onMouseLeave={() => setTreatmentOpen(false)}
                  >
                    <button className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200',
                      scrolled
                        ? isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                        : isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                    )}>
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className={cn(
                      'absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200',
                      treatmentOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    )}>
                      <div className="bg-white rounded-2xl shadow-large border border-cream-200 p-2 w-72">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex flex-col px-4 py-3 rounded-xl hover:bg-cream-50 transition-colors duration-150 group/item"
                          >
                            <span className="text-sm font-semibold text-navy group-hover/item:text-gold transition-colors duration-150">
                              {child.label}
                            </span>
                            {child.description && (
                              <span className="text-xs text-gray-500 mt-0.5">{child.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-3 py-2 text-sm font-body font-medium rounded-lg transition-colors duration-200 group',
                    scrolled
                      ? isActive ? 'text-gold' : 'text-charcoal hover:text-gold'
                      : isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                  )}
                >
                  {link.label}
                  <span className={cn(
                    'absolute bottom-0.5 left-3 right-3 h-0.5 bg-gold rounded-full transition-transform duration-200 origin-left',
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )} />
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CLINIC.phone}`}
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium transition-colors duration-200',
                scrolled ? 'text-charcoal hover:text-gold' : 'text-white/80 hover:text-gold'
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{CLINIC.phone}</span>
            </a>
            <Link
              href="/contact"
              className="bg-gold text-navy font-body font-semibold rounded-lg px-5 py-2.5 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 transition-all duration-200 animate-pulse-gold"
            >
              Book Free Consult
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors duration-200',
              scrolled ? 'text-charcoal hover:bg-cream-100' : 'text-white hover:bg-white/10'
            )}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        'lg:hidden fixed inset-0 top-[64px] bg-white z-40 transition-all duration-300 overflow-y-auto',
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      )}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
            if (link.children) {
              return (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 text-base font-body font-semibold rounded-xl transition-colors duration-200',
                      isActive ? 'text-gold bg-gold/5' : 'text-navy hover:bg-cream-100'
                    )}
                  >
                    {link.label}
                  </Link>
                  <div className="ml-4 mt-1 flex flex-col gap-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gold hover:bg-cream-100 rounded-lg transition-colors duration-200"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'block px-4 py-3 text-base font-body font-semibold rounded-xl transition-colors duration-200',
                  isActive ? 'text-gold bg-gold/5' : 'text-navy hover:bg-cream-100'
                )}
              >
                {link.label}
              </Link>
            )
          })}
          <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-cream-200">
            <a
              href={`tel:${CLINIC.phone}`}
              className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-xl hover:bg-navy hover:text-white transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-gold text-navy font-body font-semibold rounded-xl px-6 py-3 text-base hover:bg-gold-500 transition-all duration-200"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
