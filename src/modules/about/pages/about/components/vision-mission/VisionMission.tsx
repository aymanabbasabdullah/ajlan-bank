import { Card, Reveal, Section } from '@/shared/components/ui'
import type { IStatement } from '../../../../types/about.types'
import { visionMissionStyles as styles } from './vision-mission.styles'

interface IVisionMissionProps {
  vision: IStatement
  mission: IStatement
}

export function VisionMission({ vision, mission }: IVisionMissionProps) {
  const statements = [vision, mission]

  return (
    <Section spacing="compact">
      <Reveal stagger className={styles.grid}>
        {statements.map((statement) => (
          <Card key={statement.title} as="article" className={styles.card}>
            <h2 className={styles.title}>{statement.title}</h2>
            <p className={styles.text}>{statement.text}</p>
          </Card>
        ))}
      </Reveal>
    </Section>
  )
}
