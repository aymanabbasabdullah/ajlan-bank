interface ILogoMarkProps {
  className?: string
}

export function LogoMark({ className }: ILogoMarkProps) {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden className={className}>
      <rect width="40" height="40" rx="10" className="fill-brand-600" />
      <circle cx="20" cy="20" r="11" className="stroke-canvas" strokeWidth="3" />
      <path d="M20 9v22M9 20h22" className="stroke-canvas" strokeWidth="2" strokeLinecap="round" opacity=".55" />
      <circle cx="20" cy="20" r="4" className="fill-sand-200" />
    </svg>
  )
}
