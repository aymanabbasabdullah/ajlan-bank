import { useEffect, useRef, useState } from 'react'

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'

export function usePinnedScroll(steps: number) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [index, setIndex] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY)
    const syncReduced = () => setReduced(media.matches)
    syncReduced()
    media.addEventListener('change', syncReduced)

    const track = trackRef.current
    if (!track || media.matches) {
      return () => media.removeEventListener('change', syncReduced)
    }

    let frame = 0
    const update = () => {
      frame = 0
      const total = track.offsetHeight - window.innerHeight
      if (total <= 0) return
      const scrolled = Math.min(Math.max(-track.getBoundingClientRect().top, 0), total)
      const next = Math.min(steps - 1, Math.floor((scrolled / total) * steps))
      setIndex((current) => (current === next ? current : next))
    }

    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      media.removeEventListener('change', syncReduced)
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [steps])

  return { trackRef, index, reduced }
}
