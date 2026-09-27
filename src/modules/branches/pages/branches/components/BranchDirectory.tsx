import { useId } from 'react'
import { Section, SectionHeading } from '@/shared/components/ui'
import { BRANCHES_CONTENT } from '../../../data/branches-page.ar'
import { CITIES } from '../../../data/cities.ar'
import { getBranches } from '../../../utils/branches'
import { useCityFilter } from '../hooks/useCityFilter'
import { BranchCard } from './BranchCard'
import { branchDirectoryStyles as styles } from './branch-directory.styles'
import { CityFilter } from './CityFilter'

export function BranchDirectory() {
  const content = BRANCHES_CONTENT
  const headingId = useId()
  const { city, selectCity } = useCityFilter()
  const branches = getBranches(city)

  return (
    <Section labelledBy={headingId} id="directory">
      <SectionHeading id={headingId} title={content.listHeader.title} className={styles.heading} />
      <div className={styles.toolbar}>
        <CityFilter
          label={content.filterLabel}
          allLabel={content.allCitiesLabel}
          cities={CITIES}
          selected={city}
          onSelect={selectCity}
        />
        <p className={styles.count} aria-live="polite">
          {content.resultsLabel(branches.length)}
        </p>
      </div>
      <ul className={styles.grid}>
        {branches.map((branch) => (
          <li key={branch.id}>
            <BranchCard branch={branch} />
          </li>
        ))}
      </ul>
    </Section>
  )
}
