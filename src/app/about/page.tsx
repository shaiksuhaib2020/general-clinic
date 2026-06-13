import type { Metadata } from 'next'
import { CheckCircle, Star } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import StatCounter from '@/components/shared/StatCounter'
import AppointmentForm from '@/components/shared/AppointmentForm'
import { CLINIC, DOCTOR } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'About Assure Clinic',
  description: "Learn about Assure Clinic Hyderabad — founded by Dr. Abhishek Pilani, India's most trusted hair transplant specialist. 20,000+ procedures, 4.9★ rated.",
  alternates: { canonical: 'https://assureclinic.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Assure Clinic"
        subtitle="Hyderabad's most trusted name in hair restoration and dermatology"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'About' }]}
        tag="Our Story"
      />

      {/* Clinic Story */}
      <SectionWrapper background="cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Story text */}
          <div>
            <SectionHeading
              tag="OUR STORY"
              title="Built on a Single Conviction"
              align="left"
            />
            <div className="space-y-4 text-gray-600 font-body text-body-md leading-relaxed">
              <p>
                Assure Clinic was founded with a single conviction: every patient deserves doctor-led
                care, not technician-performed procedures. When Dr. Abhishek Pilani established the
                clinic in Banjara Hills, Hyderabad, the hair transplant industry was largely dominated
                by clinics where qualified surgeons were absent during the actual procedure.
              </p>
              <p>
                Dr. Pilani changed that. By insisting that qualified doctors perform every step — from
                follicle extraction to implantation — Assure Clinic achieved graft survival rates of
                95–98%, far above the industry average of 70–85%.
              </p>
              <p>
                Today, Assure Clinic has performed over 20,000 successful hair transplants and trained
                hundreds of doctors in advanced hair restoration techniques. Our patented UFME
                (Ultra-Fine Micro Extraction) and DSHI (Direct Slit Hair Implantation) techniques have
                set a new benchmark for the specialty.
              </p>
              <p>
                Located opposite KBR Park in the heart of Banjara Hills, our clinic serves patients
                from across Hyderabad, India, and internationally — all seeking the same thing: natural
                results they can trust.
              </p>
            </div>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-5">
            {CLINIC.stats.map((stat) => (
              <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-soft text-center border border-cream-200">
                <StatCounter value={stat.value} suffix={stat.suffix} label={stat.label} isDecimal={stat.isDecimal} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Doctor Profile */}
      <SectionWrapper background="white">
        <SectionHeading
          tag="OUR FOUNDER"
          title="Meet Dr. Abhishek Pilani"
          subtitle="Gold medalist dermatologist and pioneer of advanced hair restoration in India"
        />
        <div className="bg-white rounded-3xl shadow-large border border-cream-200 p-8 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Doctor image placeholder */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-navy-200 to-navy-700 flex-shrink-0 flex items-center justify-center border-2 border-gold/30 mx-auto md:mx-0">
              <span className="text-white/40 text-5xl font-heading font-bold">AP</span>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h3 className="font-heading font-bold text-display-sm text-navy">{DOCTOR.name}</h3>
              <p className="text-gold font-body font-semibold mt-1">{DOCTOR.credentials}</p>
              <p className="text-gray-500 text-sm font-body mt-1">{DOCTOR.title}</p>
              <p className="text-gray-500 text-sm font-body mt-0.5">{DOCTOR.experience}</p>
              <p className="text-gray-500 text-sm font-body">{DOCTOR.procedures}</p>

              {/* Memberships */}
              <div className="flex flex-wrap gap-2 mt-4">
                {DOCTOR.memberships.map((m) => (
                  <span key={m} className="text-xs font-body font-semibold px-3 py-1 rounded-full border border-navy/20 text-navy bg-navy/5">
                    {m}
                  </span>
                ))}
              </div>

              {/* Specialties */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-5">
                {DOCTOR.specialties.map((s) => (
                  <div key={s} className="flex items-start gap-2 text-sm font-body text-gray-600">
                    <CheckCircle className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              {/* Practo rating */}
              <div className="flex items-center gap-1.5 mt-5">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-gold text-gold" />)}
                <span className="text-gold font-body font-semibold text-sm">{CLINIC.practoRating} on Practo</span>
                <span className="text-gray-400 text-sm">({CLINIC.practoReviews}+ reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Vision & Values */}
      <SectionWrapper background="cream">
        <SectionHeading
          tag="OUR VALUES"
          title="What We Stand For"
          subtitle="Three principles guide every decision we make"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: '✦', title: 'Excellence', desc: 'We hold ourselves to the highest standards of medical practice. Every procedure, every consultation, every follow-up — done right.' },
            { icon: '◈', title: 'Transparency', desc: "No hidden costs, no surprises — just honest care. You'll know your exact treatment plan and pricing before anything begins." },
            { icon: '♡', title: 'Compassion', desc: "Every patient is a person, not a procedure. We take time to understand your concerns and treat you with the dignity you deserve." },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-8 shadow-soft text-center border border-cream-200">
              <div className="text-4xl text-gold mb-4">{v.icon}</div>
              <h3 className="font-heading font-semibold text-xl text-navy mb-3">{v.title}</h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA with Form */}
      <SectionWrapper background="navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              tag="BOOK NOW"
              title="Start Your Journey Today"
              subtitle="Free consultation with our expert team. No obligation."
              align="left"
              light
            />
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8">
            <AppointmentForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
