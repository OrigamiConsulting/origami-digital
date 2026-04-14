import type { ReactNode } from 'react'

/**
 * Stripped-down layout for Google Ads landing pages under /get-started/.
 * No Header or Footer — just the page content.
 * Each page has its own minimal nav strip with just the logo.
 */
export default function GetStartedLayout({ children }: { children: ReactNode }) {
  return <>{children}</>
}
