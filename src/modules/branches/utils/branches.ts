import { BRANCHES } from '../data/branches.ar'
import { CITIES } from '../data/cities.ar'
import type { CityId, IBranch } from '../types/branch.types'

export function isCityId(value: string | null): value is CityId {
  return CITIES.some((city) => city.id === value)
}

export function getBranches(city?: CityId): IBranch[] {
  return city ? BRANCHES.filter((branch) => branch.city === city) : BRANCHES
}

export function getCityLabel(city: CityId): string {
  return CITIES.find((item) => item.id === city)?.label ?? ''
}

export function getMapHref(branch: IBranch): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`بنك عجلان ${branch.address}`)}`
}

export function toTelHref(phone: string): string {
  return `tel:+967${phone.replace(/\s/g, '').replace(/^0/, '')}`
}
