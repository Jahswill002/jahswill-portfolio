'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { skillsData, DISCIPLINES } from '@/lib/data'

export default function SkillsPage() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (disciplineIndex, skillIndex) => {
    const key = `${disciplineIndex}-${skillIndex}`
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <div className="pt-28 pb-24 px-5 md:px-8 w-full" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">Skills Hub</div>
          <h1 style={{ fontFamily: 'var(--font-display)' }}>
            Capabilities &amp; Spectrum
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-xl" style={{ color: 'var(--muted)' }}>
            Every discipline carried forward with clear intent. Click or tap any skill to see how it was applied in a real project.
          </p>
        </motion.div>

        {/* Discipline Groups */}
        <div className="space-y-12">
          {skillsData.map((group, groupIdx) => {
            const disciplineConfig = DISCIPLINES[group.discipline]
            const accentColor = disciplineConfig?.cssVar || 'var(--accent)'
            const rawColor = disciplineConfig?.color || '#D85A30'

            return (
              <motion.section
                key={group.discipline}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: groupIdx * 0.1 }}
                className="rounded-xl border overflow-hidden"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--line)',
                }}
              >
                {/* Discipline Header */}
                <div
                  className="px-6 py-5 md:px-8 flex items-center justify-between border-b"
                  style={{
                    backgroundColor: `${rawColor}0D`,
                    borderColor: 'var(--line)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full flex-shrink-0"
                      style={{ backgroundColor: accentColor }}
                    />
                    <h2
                      className="text-lg md:text-xl font-semibold"
                      style={{ color: accentColor, fontFamily: 'var(--font-display)' }}
                    >
                      {group.label}
                    </h2>
                  </div>
                  <span
                    className="text-xs uppercase tracking-wider px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: `${rawColor}1A`,
                      color: accentColor,
                    }}
                  >
                    {group.skills.length} Skills
                  </span>
                </div>

                {/* Skill Accordion Rows */}
                <div className="divide-y" style={{ borderColor: 'var(--line)' }}>
                  {group.skills.map((skill, skillIdx) => {
                    const isOpen = !!openItems[`${groupIdx}-${skillIdx}`]
                    return (
                      <div key={skillIdx} className="transition-colors hover:bg-bg/50">
                        <button
                          onClick={() => toggleItem(groupIdx, skillIdx)}
                          className="w-full px-6 py-4 md:px-8 flex items-center justify-between text-left focus:outline-none"
                          aria-expanded={isOpen}
                        >
                          <span
                            className="text-sm md:text-base font-medium pr-4"
                            style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)' }}
                          >
                            {skill.name}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="flex-shrink-0"
                            style={{ color: 'var(--muted)' }}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: 'easeInOut' }}
                              className="overflow-hidden"
                            >
                              <div
                                className="px-6 pb-5 pt-1 md:px-8 space-y-3 border-t border-dashed"
                                style={{ borderColor: 'var(--line)' }}
                              >
                                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                                  {skill.description}
                                </p>
                                {skill.project && (
                                  <div className="pt-1">
                                    <Link
                                      href={`/work/${skill.project}`}
                                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold transition-opacity hover:opacity-75"
                                      style={{ color: accentColor }}
                                    >
                                      <span>Applied in: {skill.projectLabel}</span>
                                      <ArrowRight size={13} />
                                    </Link>
                                  </div>
                                )}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>
              </motion.section>
            )
          })}
        </div>
      </div>
    </div>
  )
}
