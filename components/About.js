'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'

export default function About() {
  const roles = [
    {
      number: '01',
      role: 'Product Manager',
      description:
        'PRDs, user research, MVP scoping, roadmaps, and release planning. I shape ambiguous problems into buildable solutions.',
    },
    {
      number: '02',
      role: 'Product Designer',
      description:
        'End-to-end UX flows, brand identity, emotional design goals, and experience strategy grounded in user insight.',
    },
    {
      number: '03',
      role: 'Product Builder',
      description:
        'Technical specs, AI-assisted development, version control, and live deployment. I ship things that actually work.',
    },
    {
      number: '04',
      role: 'Biz Dev & Strategy',
      description:
        'Partnerships, go-to-market thinking, competitive analysis, and positioning for early-stage products.',
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
      id="about"
      className="py-20 px-5 md:px-8 w-full"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Section Label */}
            <div className="section-label">About</div>

            {/* H2 */}
            <h2 className="mb-8 font-serif">
              I design systems that make <em>sense</em>.
            </h2>

            {/* Paragraphs */}
            <div className="space-y-6 mb-8">
              <p className="leading-relaxed">
                I'm Jahswill — a product builder who lives at the intersection of strategy, design,
                and execution. I've worked on logistics platforms, insurance products, and fintech
                tools, always with the same approach:{' '}
                <strong>understand the real problem first, then build the right thing.</strong>
              </p>

              <p className="leading-relaxed">
                My strength lies in connecting user needs with business direction and shaping them
                into realistic MVPs. I don't just design screens. I define scope, write PRDs, map
                user flows, and ship working products.
              </p>
            </div>

            {/* Philosophy Quote */}
            <blockquote
              className="pl-6 py-4 border-l-2 italic"
              style={{
                borderColor: 'var(--accent)',
                color: 'var(--ink)',
              }}
            >
              "I don't just design screens. I design systems that make sense."
            </blockquote>
          </motion.div>

          {/* Right Column - Roles Grid */}
          <motion.div
            className="grid grid-cols-1 gap-px bg-line rounded-sm overflow-hidden"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {roles.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card)',
                }}
                whileHover={{ backgroundColor: 'var(--bg)' }}
              >
                <div className="text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                  {item.number}
                </div>
                <h3 className="font-serif text-lg mb-3">{item.role}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
