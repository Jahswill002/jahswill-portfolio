'use client'

import { motion } from 'framer-motion'
import { projects } from '@/lib/data'
import ProjectCard from '@/components/ProjectCard'

export default function WorkPage() {
  return (
    <div className="pt-28 pb-24 px-5 md:px-8 w-full" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">Work</div>
          <h1 style={{ fontFamily: 'var(--font-display)' }}>
            Products I&apos;ve shaped &amp; shipped.
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-xl" style={{ color: 'var(--muted)' }}>
            Six projects across product management, design, and full-stack building.
            Each one reflects a different hat — sometimes all three at once.
          </p>
        </motion.div>

        {/* All projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
            >
              <ProjectCard {...project} variant="default" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
