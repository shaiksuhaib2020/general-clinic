import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import BeforeAfterSlider from '@/components/shared/BeforeAfterSlider'
import ReviewCard from '@/components/shared/ReviewCard'
import HomeCTABanner from '@/components/home/HomeCTABanner'
import { TESTIMONIALS } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Patient Results Gallery',
  description: 'Real hair transplant before and after results from Assure Clinic Hyderabad. 20,000+ successful procedures. View patient transformations.',
  alternates: { canonical: 'https://assureclinic.com/results' },
}

const ALL_RESULTS = [
  { label: 'Norwood Grade 5 → Full Coverage', category: 'Hair Transplant' },
  { label: 'Hairline Restoration — 2,800 grafts', category: 'Hair Transplant' },
  { label: 'Crown Coverage — 3,200 grafts', category: 'Hair Transplant' },
  { label: 'Temple Recession Correction', category: 'Hair Transplant' },
  { label: 'Female Pattern Hair Loss — 1,800 grafts', category: 'Hair Transplant' },
  { label: 'Beard Density Restoration', category: 'Beard Transplant' },
  { label: 'Acne Scar — 6 sessions combined protocol', category: 'Acne Scars' },
  { label: 'Pigmentation — melasma treatment', category: 'Pigmentation' },
  { label: 'Hair Recovery — PRP + topicals', category: 'Hair Loss Recovery' },
]

export default function ResultsPage() {
  return (
    <>
      <PageHero
        title="Real Patient Results"
        subtitle="All images used with patient consent. Individual results may vary."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Results' }]}
        tag="Transformations"
      />

      {/* Results grid */}
      <SectionWrapper background="white">
        <SectionHeading
          tag="BEFORE & AFTER"
          title="Patient Transformations"
          subtitle="Drag the slider to compare before and after results"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_RESULTS.map((r) => (
            <BeforeAfterSlider key={r.label} label={r.label} category={r.category} />
          ))}
        </div>
      </SectionWrapper>

      {/* Success stories */}
      <SectionWrapper background="cream">
        <SectionHeading
          tag="SUCCESS STORIES"
          title="In Their Own Words"
          subtitle="Real experiences from real patients"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t) => (
            <ReviewCard
              key={t.id}
              name={t.name}
              rating={t.rating}
              treatment={t.treatment}
              review={t.review}
              badge={t.badge}
            />
          ))}
        </div>
      </SectionWrapper>

      <HomeCTABanner />
    </>
  )
}
