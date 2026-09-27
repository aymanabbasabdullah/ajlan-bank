import { SITE } from '@/shared/data/site.ar'
import { MAIN_CONTENT_ID } from '../layout.constants'
import { skipLinkStyles } from './skip-link.styles'

export function SkipLink() {
  return (
    <a href={`#${MAIN_CONTENT_ID}`} className={skipLinkStyles.link}>
      {SITE.ui.skipToContent}
    </a>
  )
}
