import { LegalDocument } from '../../components/legal-document/LegalDocument'
import { TERMS_DOCUMENT } from '../../data/terms.ar'

export function TermsPage() {
  return <LegalDocument document={TERMS_DOCUMENT} />
}
