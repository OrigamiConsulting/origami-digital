'use client'

import { useEffect, useRef, useState } from 'react'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  staggerDelay?: number
}

export function TextReveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'span',
  staggerDelay = 40,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const words = children.split(' ')

  return (
    <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement & HTMLParagraphElement>} className={`${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.3em] last:mr-0">
          <span
            className="inline-block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(110%)',
              transitionDelay: `${delay + i * staggerDelay}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </Tag>
  )
}

interface LineRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function LineReveal({ children, className = '', delay = 0 }: LineRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        className="transition-transform duration-800 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(100%)',
          transitionDelay: `${delay}ms`,
        }}
      >
        {children}
      </div>
    </div>
  )
}
