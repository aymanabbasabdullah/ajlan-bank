import { Outlet, ScrollRestoration } from 'react-router'
import { Footer, Header, MAIN_CONTENT_ID, SkipLink, UtilityBar } from '@/shared/components/layout'
import { rootLayoutStyles } from './root-layout.styles'

export function RootLayout() {
  return (
    <div className={rootLayoutStyles.shell}>
      <SkipLink />
      <UtilityBar />
      <Header />
      <main id={MAIN_CONTENT_ID} tabIndex={-1} className={rootLayoutStyles.main}>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
