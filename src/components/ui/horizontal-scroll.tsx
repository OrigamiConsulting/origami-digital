'use client'

import { useRef, useEffect, useState } from 'react'

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className = '' }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    const scrollEl = scrollRef.current
    const containerEl = containerRef.current
    if (!scrollEl || !containerEl) return

    const updateScrollWidth = () => {
      setScrollWidth(scrollEl.scrollWidth - window.innerWidth)
    }
    updateScrollWidth()

    const handleScroll = () => {
      const rect = containerEl.getBoundingClientRect()
      const containerHeight = containerEl.offsetHeight
      const windowHeight = window.innerHeight

      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        const scrollProgress = -rect.top / (containerHeight - windowHeight)
        const translateX = scrollProgress * scrollWidth
        scrollEl.style.transform = `translateX(-${translateX}px)`
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateScrollWidth)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateScrollWidth)
    }
  }, [scrollWidth])

  // Calculate container height: each card ~600px wide, we want smooth scrolling
  const heightMultiplier = 2.5

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      style={{ height: `${heightMultiplier * 100}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div ref={scrollRef} className="flex gap-8 pl-6 md:pl-16 will-change-transform">
          {children}
        </div>
      </div>
    </div>
  )
}
