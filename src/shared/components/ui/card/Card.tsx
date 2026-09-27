import { createElement, type ReactNode } from 'react'
import { cn } from '@/shared/utils/cn'
import { cardStyles, type CardTone } from './card.styles'

interface ICardProps {
  children: ReactNode
  as?: 'div' | 'article' | 'li'
  tone?: CardTone
  interactive?: boolean
  className?: string
}

export function Card({ children, as = 'div', tone = 'surface', interactive = false, className }: ICardProps) {
  return createElement(
    as,
    { className: cn(cardStyles.base, cardStyles.tone[tone], interactive && cardStyles.interactive, className) },
    children,
  )
}
