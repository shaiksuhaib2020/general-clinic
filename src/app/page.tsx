import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import StatsBar from '@/components/home/StatsBar'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import FeaturedTreatments from '@/components/home/FeaturedTreatments'
import SurgeonSection from '@/components/home/SurgeonSection'
import BeforeAfterSection from '@/components/home/BeforeAfterSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import ComparisonTable from '@/components/shared/ComparisonTable'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import GoldButton from '@/components/shared/GoldButton'
import LocationSection from '@/components/home/LocationSection'
import HomeCTABanner from '@/components/home/HomeCTABanner'

export const metadata: Metadata = {
  title: 'Assure Clinic Hyderabad | Best Hair Transplant in Banjara Hills',
  description:
    "Hyderabad's #1 rated hair transplant clinic. 100% doctor-led FUE, 20,000+ successful procedures, 4.9★ rating. Located in Banjara Hills, opposite KBR Park.",
  alternates: { canonical: 'https://assureclinic.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyChooseUs />
      <FeaturedTreatments />
      <SurgeonSection />
      <BeforeAfterSection />
      <TestimonialsSection />
      <SectionWrapper background="white">
        <SectionHeading
          tag="WHY ASSURE"
          title="Assure Clinic vs Other Clinics"
          subtitle="See the difference that doctor-led care makes"
        />
        <div className="max-w-4xl mx-auto">
          <ComparisonTable />
          <div className="text-center mt-8">
            <GoldButton href="/contact" size="lg">
              Book Free Consultation
            </GoldButton>
          </div>
        </div>
      </SectionWrapper>
      <LocationSection />
      <HomeCTABanner />
    </>
  )
}
