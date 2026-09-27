import { createElement, type ReactNode } from 'react'
import { useReveal } from '@/shared/hooks/useReveal'

interface IRevealProps {
  children: ReactNode
  as?: 'div' | 'ul' | 'ol' | 'dl'
  stagger?: boolean
  className?: string
}

export function Reveal({ children, as = 'div', stagger = false, className }: IRevealProps) {
  const ref = useReveal<HTMLElement>()

  return createElement(
    as,
    { ref, className, 'data-reveal-stagger': stagger ? '' : undefined },
    children,
  )
}
