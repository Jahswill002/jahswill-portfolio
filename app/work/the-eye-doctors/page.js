import { projects } from '@/lib/data'
import CaseStudyTemplate from '@/components/CaseStudyTemplate'

export const metadata = {
  title: 'The Eye Doctors — Jahswill',
  description: 'Full solo build of a Lagos eye care clinic website — design to deployment, no handoff.',
}

export default function EyeDoctorsPage() {
  const project = projects.find((p) => p.slug === 'the-eye-doctors')
  return <CaseStudyTemplate project={project} />
}
