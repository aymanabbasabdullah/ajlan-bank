import { useId } from 'react'
import { Card, Reveal, Section, SectionHeading } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'
import type { ILeader } from '../../../../types/about.types'
import { leadershipStyles as styles } from './leadership.styles'

interface ILeadershipProps {
  header: ISectionHeader
  leaders: ILeader[]
}

export function Leadership({ header, leaders }: ILeadershipProps) {
  const headingId = useId()

  return (
    <Section tone="surface" labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal as="ul" stagger className={styles.grid}>
        {leaders.map((leader) => (
          <li key={leader.name}>
            <Card tone="tinted" className={styles.card}>
              <span className={styles.avatar} aria-hidden>
                {leader.initials}
              </span>
              <h3 className={styles.name}>{leader.name}</h3>
              <p className={styles.role}>{leader.role}</p>
              <p className={styles.bio}>{leader.bio}</p>
            </Card>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
