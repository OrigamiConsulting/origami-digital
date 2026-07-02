'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

/**
 * Mounts Lenis smooth scrolling globally. Renders nothing — safe to drop
 * anywhere in the tree. Skips entirely for reduced-motion users.
 */
export function SmoothScrollProvider() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      anchors: true,
    })
    ;(window as unknown as { lenis?: Lenis }).lenis = lenis

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      delete (window as unknown as { lenis?: Lenis }).lenis
    }
  }, [])

  return null
}
