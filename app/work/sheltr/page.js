import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'Sheltr — Jahswill',
  description: 'Risk assessment and insurance guidance tool for Nigerian SMEs. Conceived, designed, and shipped end-to-end.',
}

export default function SheltrPage() {
  const project = projects.find((p) => p.slug === 'sheltr')
  return <CaseStudyTemplate project={project} />
}
