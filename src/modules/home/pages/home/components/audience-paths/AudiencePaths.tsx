import { useId } from 'react'
import { Link } from 'react-router'
import { Reveal, Section, SectionHeading, TextLink } from '@/shared/components/ui'
import { MEDIA } from '@/shared/data/media'
import { MEDIA_COPY } from '@/shared/data/media.ar'
import type { ISectionHeader } from '@/shared/types'
import type { IAudiencePath } from '../../../../types/home.types'
import { audiencePathsStyles as styles } from './audience-paths.styles'

interface IAudiencePathsProps {
  header: ISectionHeader
  paths: IAudiencePath[]
}

export function AudiencePaths({ header, paths }: IAudiencePathsProps) {
  const headingId = useId()
  const [featured, ...rest] = paths

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal className={styles.layout}>
        {featured && <PathTile path={featured} featured />}
        <div className={styles.stack}>
          {rest.map((path) => (
            <PathTile key={path.title} path={path} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

interface IPathTileProps {
  path: IAudiencePath
  featured?: boolean
}

function PathTile({ path, featured = false }: IPathTileProps) {
  const media = MEDIA[path.mediaId]
  const copy = MEDIA_COPY[path.mediaId]

  return (
    <article className={featured ? `${styles.tile} ${styles.featured}` : styles.tile}>
      <Link to={path.link.href} className={styles.photo} tabIndex={-1} aria-hidden>
        <img
          src={media.src}
          alt=""
          width={media.width}
          height={media.height}
          loading="lazy"
          decoding="async"
          className={featured ? styles.image : styles.compactImage}
        />
      </Link>
      <div className={styles.body}>
        <h3 className={styles.title}>{path.title}</h3>
        <p className={styles.description}>{path.description}</p>
        <ul className={styles.highlights}>
          {path.highlights.map((link) => (
            <li key={link.href}>
              <Link to={link.href} className={styles.highlight}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <TextLink href={path.link.href} className={styles.more}>
          {path.link.label}
        </TextLink>
        <p className="sr-only">{copy.caption}</p>
      </div>
    </article>
  )
}
