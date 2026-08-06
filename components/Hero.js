'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const chips = [
  { icon: '🔍', label: 'Approach',  value: 'Research-first, always' },
  { icon: '🏗️', label: 'Strength',  value: 'Zero-to-one product building' },
  { icon: '🌍', label: 'Focus',     value: 'African & emerging markets' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-5 md:px-8 w-full"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ── Left — Text ── */}
          <motion.div
            className="flex flex-col justify-center order-2 md:order-1"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="section-label">
              Product Builder · PM · Designer
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mb-5"
              style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}
            >
              Thinking like a PM, designing like a designer, building like a{' '}
              <em>founder</em>.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-8 text-base md:text-lg leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              I turn real business problems into structured, usable solutions —
              from the first research interview to the live URL.
            </motion.p>

            <motion.div variants={itemVariants}>
              <Link href="/work">
                <motion.span
                  className="inline-flex items-center gap-3 px-6 py-3 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-80"
                  style={{ backgroundColor: 'var(--ink)', color: 'var(--bg)' }}
                  whileHover={{ y: -2 }}
                >
                  View My Work <ArrowRight size={15} />
                </motion.span>
              </Link>
            </motion.div>

            {/* Approach chips */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 gap-3 mt-10"
            >
              {chips.map((chip, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex items-center gap-4 px-5 py-4 rounded-md transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--card)',
                    border: '1px solid var(--line)',
                  }}
                  whileHover={{ backgroundColor: 'var(--bg)', x: 2 }}
                >
                  <span className="text-2xl flex-shrink-0">{chip.icon}</span>
                  <div>
                    <div
                      className="text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: 'var(--muted)' }}
                    >
                      {chip.label}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {chip.value}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — Photo ── */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div
              className="relative w-72 h-72 md:w-96 md:h-[480px] rounded-2xl overflow-hidden"
              style={{ border: '1px solid var(--line)' }}
            >
              <Image
                src="/headshot.jpg"
                alt="Jahswill — Product Builder, PM & Designer"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Subtle discipline accent strip at bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 flex"
                aria-hidden="true"
              >
                <div className="flex-1" style={{ backgroundColor: 'var(--pm)' }} />
                <div className="flex-1" style={{ backgroundColor: 'var(--design)' }} />
                <div className="flex-1" style={{ backgroundColor: 'var(--build)' }} />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
