import { cn } from '@/lib/utils'
import Link from 'next/link'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface GoldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  children: React.ReactNode
  className?: string
}

const GoldButton = forwardRef<HTMLButtonElement, GoldButtonProps>(
  ({ href, size = 'md', fullWidth = false, children, className, ...props }, ref) => {
    const base = cn(
      'inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-200',
      'bg-gold text-navy hover:bg-gold-500 hover:shadow-gold active:scale-95',
      'animate-pulse-gold',
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

GoldButton.displayName = 'GoldButton'
export default GoldButton
