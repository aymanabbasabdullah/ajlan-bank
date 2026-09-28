import type { MediaRatio } from '@/shared/data/media'
import { cn } from '@/shared/utils/cn'

const ratioClass: Record<MediaRatio, string> = {
  '16/10': 'aspect-16/10',
  '4/5': 'aspect-4/5',
  '3/2': 'aspect-3/2',
  '1/1': 'aspect-square',
}

export const mediaFigureStyles = {
  figure: 'min-w-0',
  frame: (ratio: MediaRatio) => cn('overflow-hidden rounded-xl bg-sand-100', ratioClass[ratio]),
  image: 'size-full object-cover',
  caption: 'mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[13px] leading-[1.6] text-muted',
  credit: 'text-[12px]',
} as const
