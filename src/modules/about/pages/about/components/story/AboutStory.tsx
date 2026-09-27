import { useId } from 'react'
import { Reveal, Section } from '@/shared/components/ui'
import type { IAboutContent } from '../../../../types/about.types'
import { aboutStoryStyles as styles } from './about-story.styles'

interface IAboutStoryProps {
  story: IAboutContent['story']
}

export function AboutStory({ story }: IAboutStoryProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <div className={styles.grid}>
        <div className={styles.text}>
          <h2 id={headingId} className={styles.title}>
            {story.title}
          </h2>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        <Reveal as="dl" stagger className={styles.facts}>
          {story.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt className={styles.factLabel}>{fact.label}</dt>
              <dd className={styles.factValue}>{fact.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  )
}
