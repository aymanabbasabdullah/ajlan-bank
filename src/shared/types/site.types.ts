import type { ILink, INavGroup, IStat } from './content.types'

export interface IBrand {
  name: string
  latinName: string
  tagline: string
  description: string
  foundedYear: number
}

export interface IContactInfo {
  callCenter: string
  callCenterHref: string
  internationalPhone: string
  internationalPhoneHref: string
  email: string
  fraudEmail: string
  headOffice: string
  streetAddress: string
  city: string
  countryCode: string
  workingHours: string
}

export interface ILegalInfo {
  regulator: string
  regulatorStatement: string
  licenseNumber: string
  commercialRegistration: string
  swiftCode: string
  copyright: string
}

export interface ISiteUiStrings {
  skipToContent: string
  mainNavLabel: string
  footerNavLabel: string
  breadcrumbLabel: string
  home: string
  openMenu: string
  closeMenu: string
  menuTitle: string
  callCenterLabel: string
  learnMore: string
  readMore: string
  licenseLabel: string
  swiftLabel: string
  commercialRegistrationLabel: string
  contactHeading: string
  onThisPage: string
}

export interface ISiteContent {
  brand: IBrand
  mainNav: ILink[]
  utilityNav: ILink[]
  headerCta: ILink
  footerGroups: INavGroup[]
  legalLinks: ILink[]
  contact: IContactInfo
  legal: ILegalInfo
  keyFigures: IStat[]
  ui: ISiteUiStrings
}
