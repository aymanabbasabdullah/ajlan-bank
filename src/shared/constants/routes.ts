export const ROUTES = {
  home: '/',
  individuals: '/individuals',
  business: '/business',
  financing: '/financing',
  about: '/about',
  branches: '/branches',
  contact: '/contact',
  security: '/security',
  news: '/news',
  careers: '/careers',
  faq: '/faq',
  privacy: '/privacy',
  terms: '/terms',
} as const

export const productPath = (section: string, slug: string) => `/${section}/${slug}`

export const newsPath = (slug: string) => `${ROUTES.news}/${slug}`
