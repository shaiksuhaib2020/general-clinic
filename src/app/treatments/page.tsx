import type { Metadata } from 'next'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import TreatmentCard from '@/components/shared/TreatmentCard'
import HomeCTABanner from '@/components/home/HomeCTABanner'

export const metadata: Metadata = {
  title: 'Hair & Skin Treatments',
  description: 'Explore all hair and skin treatments at Assure Clinic Hyderabad — hair transplant, PRP therapy, acne, pigmentation, laser treatments and more.',
  alternates: { canonical: 'https://assureclinic.com/treatments' },
}

const HAIR_TREATMENTS = [
  { title: 'Hair Transplant', shortDesc: '100% doctor-led FUE with 95–98% graft survival rate. Permanent, natural results.', icon: 'Scissors', slug: 'hair-transplant' },
  { title: 'PRP Therapy', shortDesc: 'Platelet-Rich Plasma therapy to stimulate hair growth and slow hair fall.', icon: 'Droplets', slug: 'prp-therapy' },
  { title: 'Hair Fall Treatment', shortDesc: 'Medical management of hair fall using evidence-based protocols and dermatologist consultation.', icon: 'Sparkles', slug: 'hair-transplant' },
  { title: 'Beard Transplant', shortDesc: 'Restore beard density and coverage with advanced FUE transplantation.', icon: 'Scissors', slug: 'hair-transplant' },
  { title: 'Scalp Treatment', shortDesc: 'Treat dandruff, seborrheic dermatitis, and other scalp conditions causing hair loss.', icon: 'Sparkles', slug: 'hair-transplant' },
]

const SKIN_TREATMENTS = [
  { title: 'Acne Treatment', shortDesc: 'Medical-grade acne management for clear, healthy skin.', icon: 'Sparkles', slug: 'skin-treatments' },
  { title: 'Acne Scar Treatment', shortDesc: 'Fractional laser, microneedling, and subcision for visible scar reduction.', icon: 'Sparkles', slug: 'skin-treatments' },
  { title: 'Pigmentation', shortDesc: 'Targeted treatment for melasma, sun spots, and post-acne hyperpigmentation.', icon: 'Sparkles', slug: 'skin-treatments' },
  { title: 'Chemical Peels', shortDesc: 'Medical-grade peels for exfoliation, brightening, and skin renewal.', icon: 'Sparkles', slug: 'skin-treatments' },
  { title: 'Laser Treatments', shortDesc: 'Advanced laser for resurfacing, toning, and targeted skin concerns.', icon: 'Sparkles', slug: 'skin-treatments' },
  { title: 'Anti-Aging', shortDesc: 'Injectables, PRP, and collagen-stimulating treatments for youthful skin.', icon: 'Sparkles', slug: 'skin-treatments' },
]

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Hair & Skin Treatments"
        subtitle="Comprehensive medical care for hair restoration and skin health — all under one roof"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Treatments' }]}
      />

      {/* Hair Treatments */}
      <SectionWrapper background="white">
        <SectionHeading
          tag="HAIR TREATMENTS"
          title="Hair Restoration & Care"
          subtitle="From permanent surgical solutions to non-invasive therapies"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {HAIR_TREATMENTS.map((t) => (
            <TreatmentCard key={t.title} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* Skin Treatments */}
      <SectionWrapper background="cream">
        <SectionHeading
          tag="SKIN TREATMENTS"
          title="Advanced Dermatology"
          subtitle="Board-certified dermatologists. Medical-grade technology. Visible results."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKIN_TREATMENTS.map((t) => (
            <TreatmentCard key={t.title} {...t} />
          ))}
        </div>
      </SectionWrapper>

      <HomeCTABanner />
    </>
  )
}
