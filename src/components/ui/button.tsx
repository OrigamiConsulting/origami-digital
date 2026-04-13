import Link from 'next/link'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
  href?: string
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#EF6351] text-white hover:bg-[#D94F3F] focus-visible:ring-[#EF6351]',
  secondary:
    'bg-[#0A8FBF] text-white hover:bg-[#087CA7] focus-visible:ring-[#0A8FBF]',
  outline:
    'bg-transparent border-2 border-[#0A8FBF] text-[#0A8FBF] hover:bg-[#0A8FBF] hover:text-white focus-visible:ring-[#0A8FBF]',
  ghost:
    'bg-transparent text-current hover:bg-white/10 focus-visible:ring-white/30',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...buttonProps
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-200 ease-out',
    'hover:scale-[1.02] active:scale-[0.98]',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ')

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
