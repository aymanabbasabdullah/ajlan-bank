import { SITE_URL } from '@/shared/constants/site'
import { SITE } from '@/shared/data/site.ar'
import type { ILink } from '@/shared/types'

export type JsonLd = Record<string, unknown>

export function serializeJsonLd(data: JsonLd) {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}

export function bankJsonLd(): JsonLd {
  const { brand, contact } = SITE
  return {
    '@context': 'https://schema.org',
    '@type': 'BankOrCreditUnion',
    name: brand.name,
    alternateName: brand.latinName,
    description: brand.description,
    url: SITE_URL,
    logo: `${SITE_URL}/favicon.svg`,
    foundingDate: String(brand.foundedYear),
    telephone: contact.internationalPhone,
    email: contact.email,
    areaServed: contact.countryCode,
    address: {
      '@type': 'PostalAddress',
      streetAddress: contact.streetAddress,
      addressLocality: contact.city,
      addressCountry: contact.countryCode,
    },
  }
}

export function breadcrumbJsonLd(items: ILink[]): JsonLd {
  const trail = [{ label: SITE.ui.home, href: '/' }, ...items]
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${SITE_URL}${item.href === '/' ? '' : item.href}`,
    })),
  }
}
