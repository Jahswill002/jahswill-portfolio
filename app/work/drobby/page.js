import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'Drobby — Jahswill',
  description: 'Logistics aggregation platform for African SMEs. Product direction and business development.',
}

export default function DrobbyPage() {
  const project = projects.find((p) => p.slug === 'drobby')
  return <CaseStudyTemplate project={project} />
}
