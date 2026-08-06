'use client'

import { motion } from 'framer-motion'
import { toolsData, DISCIPLINES } from '@/lib/data'

export default function ToolsPage() {
  return (
    <div className="pt-28 pb-24 px-5 md:px-8 w-full" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="section-label">Tools &amp; Stack</div>
          <h1 style={{ fontFamily: 'var(--font-display)' }}>
            Software &amp; Stack
          </h1>
          <p className="mt-4 text-base leading-relaxed max-w-xl" style={{ color: 'var(--muted)' }}>
            The exact tools and technologies I use to take products from zero to shipped URL.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {toolsData.map((tool, idx) => {
            const disciplineConfig = DISCIPLINES[tool.category]
            const accentColor = disciplineConfig?.cssVar || 'var(--line)'

            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="p-6 rounded-xl border flex flex-col justify-between transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--line)',
                }}
                whileHover={{ y: -2 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{tool.emoji}</span>
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: 'var(--font-display)', color: 'var(--ink)' }}
                      >
                        {tool.name}
                      </h3>
                    </div>
                    {disciplineConfig && (
                      <span
                        className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-medium"
                        style={{
                          backgroundColor: `${disciplineConfig.color}15`,
                          color: accentColor,
                        }}
                      >
                        {disciplineConfig.label}
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {tool.note}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
