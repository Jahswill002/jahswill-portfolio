import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'Docket Mobile — Jahswill',
  description: 'Touch-first mobile companion app for the Docket legal platform. UI/UX Lead.',
}

export default function DocketMobilePage() {
  const project = projects.find((p) => p.slug === 'docket-mobile')
  return <CaseStudyTemplate project={project} />
}
