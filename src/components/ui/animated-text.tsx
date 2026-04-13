'use client'

import { motion } from 'framer-motion'
import { type ElementType, useState, useEffect } from 'react'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  tag?: 'h1' | 'h2' | 'h3' | 'p'
}

export function AnimatedText({
  text,
  className = '',
  delay = 0,
  tag = 'h2',
}: AnimatedTextProps) {
  const Tag = tag as ElementType
  const words = text.split(' ')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Before hydration, render fully visible
  if (!mounted) {
    return <Tag className={className}>{text}</Tag>
  }

  return (
    <Tag className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className="inline-block mr-[0.25em]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.08,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  )
}
