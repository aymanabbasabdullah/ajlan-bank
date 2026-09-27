import { useSearchParams } from 'react-router'
import type { CityId } from '../../../types/branch.types'
import { isCityId } from '../../../utils/branches'

const CITY_PARAM = 'city'

export function useCityFilter() {
  const [searchParams, setSearchParams] = useSearchParams()
  const param = searchParams.get(CITY_PARAM)
  const city = isCityId(param) ? param : undefined

  const selectCity = (next?: CityId) => {
    setSearchParams(next ? { [CITY_PARAM]: next } : {}, { replace: true, preventScrollReset: true })
  }

  return { city, selectCity }
}
