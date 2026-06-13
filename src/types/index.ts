export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export interface StatItem {
  value: number
  suffix: string
  label: string
  isDecimal?: boolean
}

export interface ContactFormData {
  name: string
  phone: string
  email?: string
  treatment: string
  message?: string
  preferredDate?: string
}

export interface TreatmentCardProps {
  title: string
  shortDesc: string
  icon: string
  slug: string
}

export interface ReviewCardProps {
  name: string
  rating: number
  treatment: string
  review: string
  badge: string
}
