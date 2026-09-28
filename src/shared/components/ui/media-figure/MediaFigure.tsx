import type { IMediaAsset, MediaRatio } from '@/shared/data/media'
import { cn } from '@/shared/utils/cn'
import { mediaFigureStyles as styles } from './media-figure.styles'

interface IMediaFigureProps {
  media: IMediaAsset
  alt: string
  caption?: string
  ratio?: MediaRatio
  priority?: boolean
  className?: string
  showCredit?: boolean
}

export function MediaFigure({
  media,
  alt,
  caption,
  ratio = '16/10',
  priority = false,
  className,
  showCredit = true,
}: IMediaFigureProps) {
  return (
    <figure className={cn(styles.figure, className)}>
      <div className={styles.frame(ratio)}>
        <img
          src={media.src}
          alt={alt}
          width={media.width}
          height={media.height}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          className={styles.image}
        />
      </div>
      {(caption || showCredit) && (
        <figcaption className={styles.caption}>
          {caption && <span>{caption}</span>}
          {showCredit && <span className={styles.credit}>{media.credit}</span>}
        </figcaption>
      )}
    </figure>
  )
}
