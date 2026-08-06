import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedProjects from '@/components/FeaturedProjects'
import Contact from '@/components/Contact'

export const metadata = {
  title: 'Jahswill — Product Builder, PM & Designer',
  description:
    'Product Builder, Product Manager, and UI/UX Designer. Thinking like a PM, designing like a designer, building like a founder.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedProjects />
      <Contact />
    </>
  )
}
