'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-5 md:px-8 w-full"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* ── Left — Bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="section-label">About</div>

            <h2 className="mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              I design systems that make <em>sense</em>.
            </h2>

            <p className="leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              I&apos;m Jahswill — a product builder who lives at the intersection of strategy, design,
              and execution. I&apos;ve worked on logistics platforms, insurance products, and legal tech,
              always with the same approach:{' '}
              <strong style={{ color: 'var(--ink)' }}>
                understand the real problem first, then build the right thing.
              </strong>
            </p>

            <p className="leading-relaxed mb-8" style={{ color: 'var(--muted)' }}>
              I don&apos;t just design screens — I define scope, write PRDs, map user flows, and ship
              working products. Based in Lagos, building for African and emerging markets.
            </p>

            <blockquote
              className="pl-5 py-1 border-l-2 text-sm italic"
              style={{ borderColor: 'var(--design)', color: 'var(--muted)' }}
            >
              &quot;I don&apos;t just design screens. I design systems that make sense.&quot;
            </blockquote>
          </motion.div>

          {/* ── Right — Three discipline cards ── */}
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {[
              {
                disciplineKey: 'pm',
                color: 'var(--pm)',
                label: 'Product Management',
                desc: 'PRDs, user research, MVP scoping, roadmaps, and release planning. I shape ambiguous problems into buildable solutions.',
              },
              {
                disciplineKey: 'design',
                color: 'var(--design)',
                label: 'Design & UX',
                desc: 'End-to-end UX flows, brand identity, emotional design goals, and experience strategy grounded in user insight.',
              },
              {
                disciplineKey: 'build',
                color: 'var(--build)',
                label: 'Building & Execution',
                desc: 'Technical specs, AI-assisted development, version control, and live deployment. I ship things that actually work.',
              },
            ].map((item) => (
              <motion.div
                key={item.disciplineKey}
                className="p-5 rounded-lg border flex gap-4 transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--line)',
                }}
                whileHover={{ backgroundColor: 'var(--bg)' }}
              >
                {/* Colour swatch */}
                <div
                  className="w-1 rounded-full flex-shrink-0 self-stretch"
                  style={{ backgroundColor: item.color }}
                />
                <div>
                  <h3
                    className="text-sm font-semibold mb-1"
                    style={{ color: item.color, fontFamily: 'var(--font-display)' }}
                  >
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
