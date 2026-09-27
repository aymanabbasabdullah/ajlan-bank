import { useId } from 'react'
import { Card, IconTile, Reveal, Section, SectionHeading, SmartLink } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'
import type { IContactChannel } from '../../../types/contact.types'
import { contactChannelsStyles as styles } from './contact-channels.styles'

interface IContactChannelsProps {
  header: ISectionHeader
  channels: IContactChannel[]
}

export function ContactChannels({ header, channels }: IContactChannelsProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal as="ul" stagger className={styles.grid}>
        {channels.map((channel) => (
          <li key={channel.title}>
            <Card className={styles.card}>
              <IconTile name={channel.icon} />
              <h3 className={styles.title}>{channel.title}</h3>
              {channel.href ? (
                <SmartLink href={channel.href} className={styles.value}>
                  <bdi>{channel.value}</bdi>
                </SmartLink>
              ) : (
                <p className={styles.value}>{channel.value}</p>
              )}
              <p className={styles.description}>{channel.description}</p>
            </Card>
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
