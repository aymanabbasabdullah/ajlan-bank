import { useEffect, useRef } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || !('IntersectionObserver' in window)) return
    if (window.matchMedia(REDUCED_MOTION_QUERY).matches) return

    element.dataset.reveal = 'pending'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        element.dataset.reveal = 'shown'
        observer.disconnect()
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return ref
}
