'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-5 md:px-8"
      style={{ borderColor: 'var(--line)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Left - Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-lg"
          >
            Jahswill
          </motion.div>

          {/* Center - Credits */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs uppercase tracking-wider"
            style={{ color: 'var(--muted)' }}
          >
            Product Builder · PM · Designer · © 2025
          </motion.p>

          {/* Right - Location */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs uppercase tracking-wider"
            style={{ color: 'var(--muted)' }}
          >
            Lagos, Nigeria 🌍
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
