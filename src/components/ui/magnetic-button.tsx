'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'

interface MagneticButtonProps {
  children: React.ReactNode
  href?: string
  className?: string
  strength?: number
  onClick?: () => void
  external?: boolean
}

export function MagneticButton({
  children,
  href,
  className = '',
  strength = 0.3,
  onClick,
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const style = {
    transform: `translate(${position.x}px, ${position.y}px)`,
    transition: position.x === 0 && position.y === 0
      ? 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      : 'transform 0.15s ease-out',
  }

  const inner = (
    <div
      ref={ref}
      className={`inline-block ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )

  if (href && !external) {
    return (
      <Link href={href} className="inline-block" onClick={onClick}>
        {inner}
      </Link>
    )
  }

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block" onClick={onClick}>
        {inner}
      </a>
    )
  }

  return inner
}
