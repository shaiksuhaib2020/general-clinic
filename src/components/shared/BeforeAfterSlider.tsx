'use client'

import { useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

interface BeforeAfterSliderProps {
  label?: string
  category?: string
  className?: string
}

export default function BeforeAfterSlider({ label, category, className }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const pct = Math.min(Math.max((x / rect.width) * 100, 5), 95)
    setPosition(pct)
  }, [])

  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true
    updatePosition(e.clientX)

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX)
    }
    const onMouseUp = () => {
      isDragging.current = false
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  }, [updatePosition])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    isDragging.current = true
    updatePosition(e.touches[0].clientX)

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging.current) updatePosition(e.touches[0].clientX)
    }
    const onTouchEnd = () => {
      isDragging.current = false
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }

    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)
  }, [updatePosition])

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      {/* Slider */}
      <div
        ref={containerRef}
        className="relative h-72 md:h-80 rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-soft"
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        aria-label="Before and after comparison slider"
      >
        {/* AFTER (full background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-700 via-navy-500 to-navy-300 flex items-center justify-center">
          <div className="text-white/20 text-6xl font-heading font-bold pointer-events-none">AFTER</div>
        </div>

        {/* BEFORE (clipped left portion) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <div className="text-white/30 text-6xl font-heading font-bold pointer-events-none">BEFORE</div>
        </div>

        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-body font-bold px-2.5 py-1 rounded-full pointer-events-none">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-gold/80 backdrop-blur-sm text-navy text-xs font-body font-bold px-2.5 py-1 rounded-full pointer-events-none">
          AFTER
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-large pointer-events-none"
          style={{ left: `${position}%` }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-white border-4 border-gold shadow-large flex items-center justify-center">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-gold">
              <path d="M7 1L1 6L7 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13 1L19 6L13 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Caption */}
      {(label || category) && (
        <div className="flex items-center justify-between px-1">
          {category && (
            <span className="text-xs font-body font-semibold px-2.5 py-1 rounded-full bg-gold/10 text-gold border border-gold/20">
              {category}
            </span>
          )}
          {label && (
            <span className="text-xs font-body text-gray-400 ml-auto">{label}</span>
          )}
        </div>
      )}
    </div>
  )
}
