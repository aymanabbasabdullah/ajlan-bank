import { cn } from '@/shared/utils/cn'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse'
export type ButtonSize = 'md' | 'lg'

const base =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-lg font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none motion-reduce:active:scale-100'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'border border-line-strong bg-surface text-ink hover:border-ink hover:bg-sand-100',
  ghost: 'text-ink hover:bg-sand-100',
  inverse: 'bg-white text-ink hover:bg-sand-100',
}

const sizes: Record<ButtonSize, string> = {
  md: 'px-5 py-2.5 text-[15px]',
  lg: 'px-6 py-3 text-base',
}

export function buttonClasses(variant: ButtonVariant = 'primary', size: ButtonSize = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className)
}
