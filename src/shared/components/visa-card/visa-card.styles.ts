import type { VisaCardTone } from '@/shared/types'

export const visaCardFaceStyles = {
  card: 'absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border p-4 shadow-sm [backface-visibility:hidden] lg:p-6',
  motion: 'origin-center transition-[transform,opacity] duration-500 ease-out-soft motion-reduce:transition-none',
  active: 'z-10 opacity-100 [transform:rotateY(0deg)]',
  passed: 'z-0 opacity-0 [transform:rotateY(-80deg)]',
  next: 'z-0 opacity-0 [transform:rotateY(80deg)]',
  tone: {
    classic: 'border-brand-700 bg-brand-900 text-white',
    gold: 'border-sand-200 bg-sand-100 text-ink',
    travel: 'border-brand-700 bg-ink text-white',
    business: 'border-brand-500 bg-brand-700 text-white',
  } satisfies Record<VisaCardTone, string>,
  top: 'flex min-w-0 items-start justify-between gap-3',
  brand: 'min-w-0 truncate text-[13px] font-semibold lg:text-[15px]',
  network: 'shrink-0 text-[11px] font-bold tracking-[0.16em] uppercase lg:text-sm lg:tracking-[0.2em]',
  chipRow: 'mt-3 flex items-center gap-2.5 lg:mt-5',
  chip: 'relative h-7 w-10 overflow-hidden rounded-md border border-current/25 bg-current/15 lg:h-9 lg:w-12',
  chipLines: 'absolute inset-1 grid grid-cols-3 grid-rows-2 gap-px opacity-50',
  chipCell: 'rounded-[1px] bg-current',
  waves: 'h-4 w-4 opacity-55 lg:h-5 lg:w-5',
  number:
    'mt-3 min-w-0 truncate font-mono text-[14px] tracking-[0.12em] whitespace-nowrap lg:mt-5 lg:text-[17px] lg:tracking-[0.18em]',
  meta: 'flex min-w-0 items-end justify-between gap-3 text-[11px] lg:text-[12px]',
  metaName: 'min-w-0 flex-1',
  metaExpiry: 'shrink-0 text-end',
  metaLabel: 'opacity-60',
  metaValue: 'mt-0.5 line-clamp-2 font-semibold leading-tight tracking-normal',
  ornament: 'pointer-events-none absolute end-4 top-[42%] size-14 -translate-y-1/2 opacity-15 lg:end-5 lg:size-20 lg:opacity-20',
} as const
