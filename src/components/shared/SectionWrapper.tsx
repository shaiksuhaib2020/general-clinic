import { cn } from '@/lib/utils'

interface SectionWrapperProps {
  children: React.ReactNode
  background?: 'white' | 'cream' | 'navy'
  className?: string
  id?: string
}

export default function SectionWrapper({
  children,
  background = 'white',
  className,
  id,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        'section-py',
        {
          'bg-white': background === 'white',
          'bg-cream-100': background === 'cream',
          'bg-navy-section text-white': background === 'navy',
        },
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  )
}
