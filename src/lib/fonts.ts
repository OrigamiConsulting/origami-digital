import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google'

export const fontDisplay = Syne({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

export const fontBody = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
})

export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

export const fontVariables = `${fontDisplay.variable} ${fontBody.variable} ${fontMono.variable}`
