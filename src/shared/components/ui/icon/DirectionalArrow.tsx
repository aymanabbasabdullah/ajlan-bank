import { ArrowRightIcon } from '@phosphor-icons/react'
import { cn } from '@/shared/utils/cn'

interface IDirectionalArrowProps {
  size?: number
  className?: string
}

/** Points in the reading direction: left in RTL, right in LTR. */
export function DirectionalArrow({ size = 18, className }: IDirectionalArrowProps) {
  return (
    <ArrowRightIcon
      size={size}
      weight="regular"
      aria-hidden
      className={cn('shrink-0 rtl:-scale-x-100', className)}
    />
  )
}
