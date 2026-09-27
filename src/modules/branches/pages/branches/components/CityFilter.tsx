import { cn } from '@/shared/utils/cn'
import type { CityId, ICity } from '../../../types/branch.types'
import { cityFilterStyles as styles } from './city-filter.styles'

interface ICityFilterProps {
  label: string
  allLabel: string
  cities: ICity[]
  selected?: CityId
  onSelect: (city?: CityId) => void
}

export function CityFilter({ label, allLabel, cities, selected, onSelect }: ICityFilterProps) {
  const options: { id?: CityId; label: string }[] = [{ label: allLabel }, ...cities]

  return (
    <div role="group" aria-label={label} className={styles.group}>
      {options.map((option) => {
        const isActive = option.id === selected
        return (
          <button
            key={option.id ?? 'all'}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(option.id)}
            className={cn(styles.chip, isActive && styles.chipActive)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
