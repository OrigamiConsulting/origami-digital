'use client'

interface MarqueeProps {
  children: React.ReactNode
  speed?: number
  className?: string
  reverse?: boolean
  pauseOnHover?: boolean
}

export function Marquee({
  children,
  speed = 30,
  className = '',
  reverse = false,
  pauseOnHover = false,
}: MarqueeProps) {
  return (
    <div
      className={`group flex overflow-hidden ${className}`}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      {[0, 1].map((i) => (
        <div
          key={i}
          className={`flex shrink-0 items-center gap-8 ${
            pauseOnHover ? 'group-hover:[animation-play-state:paused]' : ''
          }`}
          style={{
            animation: `marquee ${speed}s linear infinite ${reverse ? 'reverse' : ''}`,
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
