import type { Metadata } from 'next'
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppFAB from '@/components/layout/WhatsAppFAB'
import CallFAB from '@/components/layout/CallFAB'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Assure Clinic Hyderabad | Best Hair Transplant in Banjara Hills',
    template: '%s | Assure Clinic Hyderabad',
  },
  description:
    "Hyderabad's #1 rated hair transplant clinic. 100% doctor-led FUE, 20,000+ successful procedures, 4.9★ rating. Located in Banjara Hills, opposite KBR Park. Book your free consultation today.",
  keywords: [
    'hair transplant hyderabad',
    'best hair transplant clinic hyderabad',
    'fue hair transplant banjara hills',
    'hair transplant cost hyderabad',
    'assure clinic hyderabad',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://assureclinic.com',
    siteName: 'Assure Clinic Hyderabad',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'Assure Clinic',
              description: "Hyderabad's #1 Hair Transplant Clinic",
              telephone: '+91-8976877587',
              email: 'info@assureclinic.com',
              url: 'https://assureclinic.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Unit No 2 & 3, Shanti Kiran Apartments, HSR Eden Tower, Road No. 2',
                addressLocality: 'Banjara Hills',
                addressRegion: 'Telangana',
                postalCode: '500034',
                addressCountry: 'IN',
              },
              openingHours: 'Mo-Sa 10:00-19:00',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '500',
              },
              medicalSpecialty: 'Dermatology',
              employee: {
                '@type': 'Physician',
                name: 'Dr. Abhishek Pilani',
                description: 'MBBS, MD Dermatology (Gold Medalist)',
                medicalSpecialty: 'Dermatology',
              },
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFAB />
        <CallFAB />
      </body>
    </html>
  )
}
