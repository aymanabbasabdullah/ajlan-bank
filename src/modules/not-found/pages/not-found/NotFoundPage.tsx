import { Seo } from '@/shared/components/layout'
import { ButtonLink, Container, TextLink } from '@/shared/components/ui'
import { NOT_FOUND_CONTENT } from '../../data/not-found.ar'
import { notFoundStyles } from './not-found.styles'

export function NotFoundPage() {
  const content = NOT_FOUND_CONTENT

  return (
    <>
      <Seo meta={content.seo} />
      <meta name="robots" content="noindex" />
      <section className={notFoundStyles.section}>
        <Container className={notFoundStyles.inner}>
          <p className={notFoundStyles.code} aria-hidden>
            {content.code}
          </p>
          <h1 className={notFoundStyles.title}>{content.title}</h1>
          <p className={notFoundStyles.description}>{content.description}</p>
          <ButtonLink href={content.primary.href} size="lg" className={notFoundStyles.primary}>
            {content.primary.label}
          </ButtonLink>
          <h2 className={notFoundStyles.suggestionsTitle}>{content.suggestionsTitle}</h2>
          <ul className={notFoundStyles.suggestions}>
            {content.suggestions.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href}>{link.label}</TextLink>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  )
}
