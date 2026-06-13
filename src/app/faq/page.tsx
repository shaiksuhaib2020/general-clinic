import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import FAQAccordion from '@/components/shared/FAQAccordion'
import AppointmentForm from '@/components/shared/AppointmentForm'
import { FAQS } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Find answers to common questions about hair transplant, PRP therapy, and skin treatments at Assure Clinic Hyderabad.',
  alternates: { canonical: 'https://assureclinic.com/faq' },
}

export default function FAQPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking your consultation"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}
      />

      {/* Hair FAQs */}
      <SectionWrapper background="white">
        <SectionHeading
          tag="HAIR TREATMENTS"
          title="Hair Transplant & PRP Questions"
          subtitle="Answers to the most common hair restoration questions"
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS.hair} />
        </div>
      </SectionWrapper>

      {/* Skin FAQs */}
      <SectionWrapper background="cream">
        <SectionHeading
          tag="SKIN TREATMENTS"
          title="Skin & Dermatology Questions"
          subtitle="Common questions about our skin treatment services"
        />
        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={FAQS.skin} />
        </div>
      </SectionWrapper>

      {/* Still have questions CTA */}
      <SectionWrapper background="navy">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              tag="STILL HAVE QUESTIONS?"
              title="Talk to Our Experts"
              subtitle="Can't find what you're looking for? Our team is happy to answer any questions during a free consultation."
              align="left"
              light
            />
          </div>
          <div className="bg-white rounded-3xl p-6 md:p-8">
            <AppointmentForm compact />
          </div>
        </div>
      </SectionWrapper>
    </>
  )
}
