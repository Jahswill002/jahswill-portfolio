import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'Docket Web — Jahswill',
  description: 'UI/UX Lead on the Docket legal case management platform for Nigerian law firms.',
}

export default function DocketWebPage() {
  const project = projects.find((p) => p.slug === 'docket-web')
  return <CaseStudyTemplate project={project} />
}
