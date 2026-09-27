import { Card, IconTile, Reveal, Section } from '@/shared/components/ui'
import type { IconName } from '@/shared/types'
import type { IStatement } from '../../../../types/about.types'
import { visionMissionStyles as styles } from './vision-mission.styles'

interface IVisionMissionProps {
  vision: IStatement
  mission: IStatement
}

export function VisionMission({ vision, mission }: IVisionMissionProps) {
  const statements: { icon: IconName; statement: IStatement }[] = [
    { icon: 'eye', statement: vision },
    { icon: 'target', statement: mission },
  ]

  return (
    <Section tone="sand" spacing="compact">
      <Reveal stagger className={styles.grid}>
        {statements.map(({ icon, statement }) => (
          <Card key={statement.title} as="article" className={styles.card}>
            <IconTile name={icon} />
            <h2 className={styles.title}>{statement.title}</h2>
            <p className={styles.text}>{statement.text}</p>
          </Card>
        ))}
      </Reveal>
    </Section>
  )
}
