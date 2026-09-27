import { useId } from 'react'
import { Link } from 'react-router'
import { Card, DirectionalArrow, IconTile, Reveal, Section, SectionHeading, TextLink } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'
import type { IAudiencePath } from '../../../../types/home.types'
import { audiencePathsStyles as styles } from './audience-paths.styles'

interface IAudiencePathsProps {
  header: ISectionHeader
  paths: IAudiencePath[]
}

export function AudiencePaths({ header, paths }: IAudiencePathsProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal as="ul" stagger className={styles.grid}>
        {paths.map((path) => (
          <li key={path.title}>
            <Card className={styles.card}>
              <IconTile name={path.icon} />
              <h3 className={styles.title}>{path.title}</h3>
              <p className={styles.description}>{path.description}</p>
              <ul className={styles.highlights}>
                {path.highlights.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className={styles.highlight}>
                      <span>{link.label}</span>
                      <DirectionalArrow size={16} className={styles.highlightArrow} />
                    </Link>
                  </li>
                ))}
              </ul>
              <TextLink href={path.link.href} className={styles.more}>
                {path.link.label}
              </TextLink>
            </Card>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
