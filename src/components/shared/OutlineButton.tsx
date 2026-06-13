import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  variant?: 'gold' | 'white' | 'navy'
  children: React.ReactNode
  className?: string
}

const OutlineButton = forwardRef<HTMLButtonElement, OutlineButtonProps>(
  ({ href, size = 'md', fullWidth = false, variant = 'gold', children, className, ...props }, ref) => {
    const base = cn(
      'inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-200 active:scale-95',
      {
        'border-2 border-gold text-gold hover:bg-gold hover:text-navy': variant === 'gold',
        'border-2 border-white text-white hover:bg-white hover:text-navy': variant === 'white',
        'border-2 border-navy text-navy hover:bg-navy hover:text-white': variant === 'navy',
      },
      {
        'px-4 py-2 text-xs': size === 'sm',
        'px-6 py-3 text-sm': size === 'md',
        'px-8 py-4 text-base': size === 'lg',
        'w-full': fullWidth,
      },
      className
    )

    if (href) {
      return (
        <Link href={href} className={base}>
          {children}
        </Link>
      )
    }

    return (
      <button ref={ref} className={base} {...props}>
        {children}
      </button>
    )
  }
)

OutlineButton.displayName = 'OutlineButton'
export default OutlineButton
