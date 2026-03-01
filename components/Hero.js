'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const statCards = [
    {
      icon: '🔍',
      label: 'Approach',
      value: 'Research-first, always',
    },
    {
      icon: '🏗️',
      label: 'Strength',
      value: 'Zero-to-one product building',
    },
    {
      icon: '🌍',
      label: 'Focus',
      value: 'African & emerging markets',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const handleScroll = (e) => {
    e.preventDefault()
    const element = document.getElementById('projects')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-5 md:px-8 w-full"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column - Text */}
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Section Label */}
            <motion.div variants={itemVariants} className="section-label">
              Product Builder · PM · Designer
            </motion.div>

            {/* H1 */}
            <motion.h1 variants={itemVariants} className="mb-6 font-serif">
              Thinking like a PM, designing like a designer, building like a{' '}
              <em>founder</em>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="mb-8 text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              I turn real business problems into structured, usable solutions — from the first
              research interview to the live URL.
            </motion.p>

            {/* CTA Button */}
            <motion.button
              variants={itemVariants}
              onClick={handleScroll}
              className="w-fit px-6 py-3 uppercase text-xs font-medium tracking-widest flex items-center gap-3 transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: 'var(--ink)',
                color: 'var(--bg)',
              }}
              whileHover={{ y: -2 }}
            >
              View My Work <ArrowRight size={16} />
            </motion.button>
          </motion.div>

          {/* Right Column - Stat Cards */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {statCards.map((card, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex items-center gap-4 p-6 rounded-md transition-all duration-200"
                style={{
                  backgroundColor: 'var(--card)',
                  border: '1px solid var(--line)',
                }}
                whileHover={{ backgroundColor: 'var(--bg)' }}
              >
                <span className="text-3xl">{card.icon}</span>
                <div>
                  <div className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                    {card.label}
                  </div>
                  <div className="font-serif text-base mt-1">{card.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
