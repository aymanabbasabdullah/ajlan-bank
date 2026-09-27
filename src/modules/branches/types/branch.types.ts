import type { ICta, IFeature, ILink, IPageHeader, ISectionHeader, ISeoMeta } from '@/shared/types'

export type CityId = 'sanaa' | 'aden' | 'taiz' | 'mukalla' | 'hodeidah' | 'ibb'

export type BranchService = 'atm' | 'women' | 'remittances' | 'trade' | 'business' | 'cards'

export interface ICity {
  id: CityId
  label: string
}

export interface IBranch {
  id: string
  name: string
  city: CityId
  address: string
  phone: string
  hours: string
  services: BranchService[]
  isHeadOffice?: boolean
}

export interface IBranchesContent {
  seo: ISeoMeta
  header: IPageHeader
  breadcrumbs: ILink[]
  listHeader: ISectionHeader
  filterLabel: string
  allCitiesLabel: string
  resultsLabel: (count: number) => string
  headOfficeLabel: string
  addressLabel: string
  phoneLabel: string
  hoursLabel: string
  servicesLabel: string
  mapLabel: string
  serviceLabels: Record<BranchService, string>
  facilitiesHeader: ISectionHeader
  facilities: IFeature[]
  cta: ICta
}
