import { useId } from 'react'
import { getLatestNews, NewsGrid } from '@/modules/news'
import { Section, SectionHeading, TextLink } from '@/shared/components/ui'
import type { ILink, ISectionHeader } from '@/shared/types'

interface ILatestNewsProps {
  header: ISectionHeader
  link: ILink
}

export function LatestNews({ header, link }: ILatestNewsProps) {
  const headingId = useId()

  return (
    <Section labelledBy={headingId}>
      <SectionHeading
        id={headingId}
        title={header.title}
        description={header.description}
        action={<TextLink href={link.href}>{link.label}</TextLink>}
      />
      <NewsGrid articles={getLatestNews(3)} />
    </Section>
  )
}
