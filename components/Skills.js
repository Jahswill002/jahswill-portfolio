'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const skillsData = [
    {
      name: 'Product Management',
      items: [
        'Product Requirements Docs (PRD)',
        'User Research & Synthesis',
        'MVP Scoping',
        'Roadmap Planning',
        'User Story Writing',
        'Competitive Analysis',
        'Metrics & KPIs',
        'Stakeholder Communication',
      ],
    },
    {
      name: 'Design & UX',
      items: [
        'End-to-end UX Flows',
        'Brand Identity',
        'Emotional Design Strategy',
        'HMW Frameworks',
        'Figma',
        'Product Tone & Voice',
        'Wireframing',
        'Design Principles',
      ],
    },
    {
      name: 'Building & Execution',
      items: [
        'Technical Specification Writing',
        'AI-Assisted Development',
        'GitHub & Version Control',
        'Vercel Deployment',
        'Notion',
        'Go-to-Market Strategy',
        'Business Development',
        'Partnerships',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="skills"
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
          className="mb-16"
        >
          <div className="section-label">Skills</div>
          <h2 className="font-serif">
            What I bring to the <em>table</em>.
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="p-6 md:p-8 rounded-lg border transition-all duration-200"
              style={{
                backgroundColor: 'var(--bg)',
                borderColor: 'var(--line)',
              }}
              whileHover={{ backgroundColor: 'var(--card)' }}
            >
              <h3
                className="font-serif text-lg mb-6"
                style={{ color: 'var(--accent)' }}
              >
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3 text-sm pb-4 border-b border-line last:border-0 last:pb-0">
                    <span
                      className="text-xs mt-0.5 flex-shrink-0"
                      style={{ color: 'var(--muted)' }}
                    >
                      →
                    </span>
                    <span style={{ color: 'var(--ink)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
