import { useId } from 'react'
import { Reveal, Section, SectionHeading } from '@/shared/components/ui'
import type { ISectionHeader } from '@/shared/types'
import type { ICareersContent, IJobOpening } from '../../../types/careers.types'
import { JobCard } from './JobCard'
import { jobOpeningsStyles as styles } from './job-openings.styles'

interface IJobOpeningsProps {
  header: ISectionHeader
  jobs: IJobOpening[]
  labels: ICareersContent['labels']
  email: string
}

export function JobOpenings({ header, jobs, labels, email }: IJobOpeningsProps) {
  const headingId = useId()

  return (
    <Section tone="sand" labelledBy={headingId} id="openings">
      <SectionHeading id={headingId} title={header.title} description={header.description} />
      <Reveal as="ul" stagger className={styles.list}>
        {jobs.map((job) => (
          <li key={job.id}>
            <JobCard job={job} labels={labels} email={email} />
          </li>
        ))}
      </Reveal>
    </Section>
  )
}
