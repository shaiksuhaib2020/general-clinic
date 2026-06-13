import type { Metadata } from 'next'
import { Play, Star } from 'lucide-react'
import PageHero from '@/components/shared/PageHero'
import SectionWrapper from '@/components/shared/SectionWrapper'
import SectionHeading from '@/components/shared/SectionHeading'
import ReviewCard from '@/components/shared/ReviewCard'
import { TESTIMONIALS } from '@/data/testimonials'
import { CLINIC } from '@/data/clinic'

export const metadata: Metadata = {
  title: 'Patient Testimonials & Reviews',
  description: '500+ verified patient reviews for Assure Clinic Hyderabad. 4.9★ on Google. Read real hair transplant experiences.',
  alternates: { canonical: 'https://assureclinic.com/testimonials' },
}

const VIDEO_TESTIMONIALS = [
  { name: 'Patient Testimonial 1', treatment: 'Hair Transplant — Norwood 5', duration: '3:24' },
  { name: 'Patient Testimonial 2', treatment: 'Hair Transplant — Temple Restoration', duration: '2:51' },
  { name: 'Patient Testimonial 3', treatment: 'PRP Therapy — 6 Month Journey', duration: '4:07' },
]

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title="What Our Patients Say"
        subtitle="Unfiltered experiences from real patients across Hyderabad and beyond"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Testimonials' }]}
        tag="Patient Reviews"
      />

      {/* Overall rating banner */}
      <SectionWrapper background="cream">
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-3">
            <div className="flex items-baseline gap-2">
              <span className="font-heading font-bold text-[5rem] text-gold leading-none">4.9</span>
              <span className="text-gold text-2xl">★</span>
            </div>
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
            </div>
            <p className="text-gray-500 font-body text-body-md">
              Based on {CLINIC.reviewCount}+ verified Google reviews
            </p>
            <div className="flex gap-6 mt-2">
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-navy">{CLINIC.googleRating}★</p>
                <p className="text-xs font-body text-gray-400">Google</p>
              </div>
              <div className="w-px bg-cream-200" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-navy">{CLINIC.practoRating}★</p>
                <p className="text-xs font-body text-gray-400">Practo</p>
              </div>
              <div className="w-px bg-cream-200" />
              <div className="text-center">
                <p className="font-heading font-bold text-2xl text-navy">20K+</p>
                <p className="text-xs font-body text-gray-400">Procedures</p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Review grid */}
      <SectionWrapper background="white">
        <SectionHeading
          tag="WRITTEN REVIEWS"
          title="Verified Patient Experiences"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
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

      {/* Video testimonials */}
      <SectionWrapper background="cream">
        <SectionHeading
          tag="VIDEO REVIEWS"
          title="Watch Patient Stories"
          subtitle="Real journeys, in their own words"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {VIDEO_TESTIMONIALS.map((v) => (
            <div key={v.name} className="bg-navy rounded-2xl overflow-hidden shadow-large group cursor-pointer">
              <div className="h-44 bg-navy-800 flex items-center justify-center relative">
                <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center group-hover:bg-gold transition-colors duration-300">
                  <Play className="w-6 h-6 text-gold group-hover:text-navy transition-colors duration-300 ml-0.5" fill="currentColor" />
                </div>
                <span className="absolute bottom-3 right-3 text-xs font-body text-white/50 bg-black/30 px-2 py-1 rounded">
                  {v.duration}
                </span>
              </div>
              <div className="p-5">
                <p className="font-heading font-semibold text-base text-white">{v.name}</p>
                <p className="text-gold text-xs font-body mt-1">{v.treatment}</p>
                <p className="text-white/40 text-xs font-body mt-2">Click to watch on YouTube</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Google reviews CTA */}
      <SectionWrapper background="white">
        <div className="text-center">
          <p className="text-gray-500 font-body text-body-md mb-6">
            Want to read all {CLINIC.reviewCount}+ reviews?
          </p>
          <a
            href={CLINIC.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold rounded-xl px-8 py-3.5 text-sm hover:bg-gold-500 hover:shadow-gold active:scale-95 transition-all duration-200"
          >
            <Star className="w-4 h-4" fill="currentColor" />
            Read All {CLINIC.reviewCount}+ Reviews on Google
          </a>
        </div>
      </SectionWrapper>
    </>
  )
}
