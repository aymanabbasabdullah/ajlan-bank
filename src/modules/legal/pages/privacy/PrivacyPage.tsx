import { LegalDocument } from '../../components/legal-document/LegalDocument'
import { PRIVACY_DOCUMENT } from '../../data/privacy.ar'

export function PrivacyPage() {
  return <LegalDocument document={PRIVACY_DOCUMENT} />
}
