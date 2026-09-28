import { islamicPatternStyles as styles } from './islamic-pattern.styles'

interface IIslamicPatternProps {
  className?: string
  patternId?: string
}

/** Repeating eight-pointed star lattice. Decorative only. */
export function IslamicPattern({ className, patternId = 'ajlan-islamic-star' }: IIslamicPatternProps) {
  return (
    <div className={className ?? styles.wrap} aria-hidden>
      <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="72" height="72" patternUnits="userSpaceOnUse">
            <path
              d="M36 6 L42 24 L60 30 L42 36 L36 54 L30 36 L12 30 L30 24 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.7"
            />
            <path
              d="M36 18 L40 28 L50 32 L40 36 L36 46 L32 36 L22 32 L32 28 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.55"
            />
            <circle cx="36" cy="30" r="2.2" fill="none" stroke="currentColor" strokeWidth="0.55" />
            <path d="M0 30 H12 M60 30 H72 M36 0 V6 M36 54 V72" fill="none" stroke="currentColor" strokeWidth="0.45" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}
