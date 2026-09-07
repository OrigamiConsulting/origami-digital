'use client'

import { useSyncExternalStore } from 'react'

const subscribe = () => () => {}

/**
 * `false` on the server and during hydration, `true` once the component is
 * running on the client. The React-endorsed replacement for the
 * `useEffect(() => setMounted(true), [])` pattern, which the
 * `react-hooks/set-state-in-effect` rule rejects.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  )
}
