'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Trailing cursor ring for fine-pointer devices. The native cursor stays
 * visible — this is an accent that grows over interactive elements and can
 * show a label via [data-cursor-label] on the hovered element (or ancestor).
 */
export function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const ring = ringRef.current
    const dot = dotRef.current
    const label = labelRef.current
    if (!ring || !dot || !label) return

    let mx = -100
    let my = -100
    let rx = -100
    let ry = -100
    let rafId = 0
    let hoverScale = 1
    let currentScale = 1
    let visible = false

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (!visible) {
        visible = true
        ring.style.opacity = '1'
        dot.style.opacity = '1'
      }
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target || typeof target.closest !== 'function') return
      const labelled = target.closest<HTMLElement>('[data-cursor-label]')
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, summary')
      if (labelled) {
        label.textContent = labelled.dataset.cursorLabel ?? ''
        label.style.opacity = '1'
        hoverScale = 3.2
        ring.style.backgroundColor = 'rgba(232, 80, 62, 0.95)'
        ring.style.borderColor = 'transparent'
        dot.style.opacity = '0'
      } else if (interactive) {
        label.style.opacity = '0'
        hoverScale = 1.8
        ring.style.backgroundColor = 'transparent'
        ring.style.borderColor = 'rgba(255, 255, 255, 0.9)'
        dot.style.opacity = '1'
      } else {
        label.style.opacity = '0'
        hoverScale = 1
        ring.style.backgroundColor = 'transparent'
        ring.style.borderColor = 'rgba(255, 255, 255, 0.55)'
        dot.style.opacity = '1'
      }
    }

    const onLeave = () => {
      visible = false
      ring.style.opacity = '0'
      dot.style.opacity = '0'
    }

    const tick = () => {
      rx += (mx - rx) * 0.16
      ry += (my - ry) * 0.16
      currentScale += (hoverScale - currentScale) * 0.18
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${currentScale})`
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    document.documentElement.addEventListener('mouseleave', onLeave)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[90] hidden lg:block">
      {/* Trailing ring — blends over light & dark sections */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border transition-[background-color,border-color] duration-300"
        style={{
          opacity: 0,
          borderColor: 'rgba(255,255,255,0.55)',
          mixBlendMode: 'difference',
          willChange: 'transform',
        }}
      >
        <span
          ref={labelRef}
          className="text-[8px] font-semibold tracking-[0.18em] uppercase text-white"
          style={{ opacity: 0, transition: 'opacity 0.2s ease' }}
        >
          View
        </span>
      </div>
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 h-1.5 w-1.5 rounded-full bg-white"
        style={{ opacity: 0, mixBlendMode: 'difference', willChange: 'transform' }}
      />
    </div>
  )
}
