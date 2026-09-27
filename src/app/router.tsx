import { createBrowserRouter } from 'react-router'
import { ROUTES } from '@/shared/constants/routes'
import { RootLayout } from './layouts/root-layout'

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    Component: RootLayout,
    HydrateFallback: () => null,
    children: [
      { index: true, lazy: async () => ({ Component: (await import('@/modules/home')).HomePage }) },
      { path: ROUTES.individuals, lazy: async () => ({ Component: (await import('@/modules/individuals')).IndividualsPage }) },
      { path: ROUTES.business, lazy: async () => ({ Component: (await import('@/modules/business')).BusinessPage }) },
      { path: ROUTES.financing, lazy: async () => ({ Component: (await import('@/modules/financing')).FinancingPage }) },
      { path: ROUTES.about, lazy: async () => ({ Component: (await import('@/modules/about')).AboutPage }) },
      { path: ROUTES.branches, lazy: async () => ({ Component: (await import('@/modules/branches')).BranchesPage }) },
      { path: ROUTES.contact, lazy: async () => ({ Component: (await import('@/modules/contact')).ContactPage }) },
      { path: ROUTES.security, lazy: async () => ({ Component: (await import('@/modules/security')).SecurityPage }) },
      { path: ROUTES.news, lazy: async () => ({ Component: (await import('@/modules/news')).NewsListPage }) },
      { path: `${ROUTES.news}/:slug`, lazy: async () => ({ Component: (await import('@/modules/news')).NewsDetailPage }) },
      { path: ROUTES.careers, lazy: async () => ({ Component: (await import('@/modules/careers')).CareersPage }) },
      { path: ROUTES.faq, lazy: async () => ({ Component: (await import('@/modules/faq')).FaqPage }) },
      { path: ROUTES.privacy, lazy: async () => ({ Component: (await import('@/modules/legal')).PrivacyPage }) },
      { path: ROUTES.terms, lazy: async () => ({ Component: (await import('@/modules/legal')).TermsPage }) },
      { path: ':section/:slug', lazy: async () => ({ Component: (await import('@/modules/products')).ProductDetailPage }) },
      { path: '*', lazy: async () => ({ Component: (await import('@/modules/not-found')).NotFoundPage }) },
    ],
  },
])
