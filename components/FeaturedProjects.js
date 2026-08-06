'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { featuredProjects } from '@/lib/data'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 px-5 md:px-8 w-full"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="section-label">Selected Work</div>
            <h2 style={{ fontFamily: 'var(--font-display)' }}>
              Products I&apos;ve shaped &amp; shipped.
            </h2>
          </div>
          <Link href="/work">
            <motion.span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-60 whitespace-nowrap"
              style={{ color: 'var(--muted)' }}
              whileHover={{ x: 2 }}
            >
              All 6 projects <ArrowRight size={13} />
            </motion.span>
          </Link>
        </motion.div>

        {/* Featured project cards — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
            >
              <ProjectCard {...project} variant="featured" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/work">
            <motion.span
              className="inline-flex items-center gap-3 px-6 py-3 border text-xs uppercase tracking-widest font-medium transition-all duration-200 hover:opacity-80"
              style={{
                borderColor: 'var(--ink)',
                color: 'var(--ink)',
              }}
              whileHover={{ y: -2 }}
            >
              View All Projects <ArrowRight size={14} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
