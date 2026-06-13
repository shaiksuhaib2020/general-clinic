import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  tag?: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export default function SectionHeading({
  tag,
  title,
  subtitle,
  align = 'center',
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' ? 'text-center' : 'text-left',
        className
      )}
    >
      {tag && (
        <span className="inline-block text-gold text-xs font-body font-semibold uppercase tracking-widest mb-3">
          {tag}
        </span>
      )}
      <h2
        className={cn(
          'font-heading font-bold text-display-sm md:text-display-md',
          light ? 'text-white' : 'text-navy'
        )}
      >
        {title}
      </h2>
      <span className={cn('gold-line', align === 'left' && 'mx-0')} />
      {subtitle && (
        <p
          className={cn(
            'text-body-lg max-w-2xl mt-2',
            light ? 'text-white/70' : 'text-gray-500',
            align === 'center' && 'mx-auto'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
