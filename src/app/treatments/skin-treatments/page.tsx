import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import FAQAccordion from '@/components/shared/FAQAccordion'
import AppointmentForm from '@/components/shared/AppointmentForm'
import { TREATMENTS } from '@/data/treatments'

export const metadata: Metadata = {
  title: 'Skin Treatments in Hyderabad',
  description: 'Advanced skin treatments at Assure Clinic Hyderabad — acne, pigmentation, laser, chemical peels and more by board-certified dermatologists. Book free consultation.',
  alternates: { canonical: 'https://assureclinic.com/treatments/skin-treatments' },
}

const treatment = TREATMENTS.find((t) => t.slug === 'skin-treatments')!

export default function SkinTreatmentsPage() {
  return (
    <>
      <PageHero
        title={treatment.heroTitle}
        subtitle={treatment.heroSubtitle}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Treatments', href: '/treatments' },
          { label: 'Skin Treatments' },
        ]}
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeading tag="OVERVIEW" title="Advanced Skin Care" align="left" />
            <p className="text-gray-600 font-body text-body-md leading-relaxed">{treatment.whatIsIt}</p>
            <div className="mt-6">
              <p className="text-navy font-body font-semibold text-sm mb-2">Who is it for?</p>
              <p className="text-gray-500 font-body text-sm leading-relaxed">{treatment.whoIsItFor}</p>
            </div>
          </div>
          <div className="bg-cream-100 rounded-2xl p-6 space-y-4">
            <h3 className="font-heading font-semibold text-lg text-navy">Available Treatments</h3>
            {[
              { label: 'Acne & Acne Scars', value: 'Medical management + laser' },
              { label: 'Pigmentation', value: 'Chemical peels + laser toning' },
              { label: 'Anti-Aging', value: 'Injectables + PRP + laser' },
              { label: 'Laser Treatments', value: 'Nd:YAG, diode, CO2' },
              { label: 'Chemical Peels', value: 'Light, medium, deep' },
              { label: 'Skin Tightening', value: 'RF + ultrasound' },
            ].map((f) => (
              <div key={f.label} className="flex justify-between items-center py-2.5 border-b border-cream-200 last:border-0">
                <span className="text-sm font-body font-medium text-navy">{f.label}</span>
                <span className="text-sm font-body text-gold font-semibold">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="cream">
        <SectionHeading tag="BENEFITS" title="Why Choose Assure Clinic for Skin?" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {treatment.benefits.map((b) => (
            <div key={b} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-soft">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-sm font-body text-gray-700">{b}</span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <SectionHeading tag="THE PROCESS" title="Your Treatment Journey" />
        <div className="max-w-2xl mx-auto">
          {treatment.procedure.map((step, i) => (
            <div key={i} className="flex gap-4 mb-6 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-navy font-body font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                {i < treatment.procedure.length - 1 && (
                  <div className="w-0.5 bg-gold/20 flex-1 mt-2" style={{ minHeight: '24px' }} />
                )}
              </div>
              <div className="pb-6 pt-1 last:pb-0">
                <p className="text-sm font-body text-gray-700 leading-relaxed">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="cream">
        <SectionHeading tag="RECOVERY" title="What to Expect" />
        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 shadow-soft border-l-4 border-gold">
          <p className="text-gray-600 font-body text-body-md leading-relaxed">{treatment.recovery}</p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <SectionHeading tag="FAQ" title="Common Questions" />
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={treatment.faqs} />
        </div>
      </SectionWrapper>

      <SectionWrapper background="navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              tag="BOOK NOW"
              title="Book Your Skin Consultation"
              subtitle="Get a personalised skin assessment from our expert dermatologists — at no cost."
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
