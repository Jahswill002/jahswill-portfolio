import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'Multi-Insurer Platform — Jahswill',
  description: 'Standalone insurance architecture concept. Product Management and Research Lead.',
}

export default function InsurancePlatformPage() {
  const project = projects.find((p) => p.slug === 'insurance-platform')
  return <CaseStudyTemplate project={project} />
}
