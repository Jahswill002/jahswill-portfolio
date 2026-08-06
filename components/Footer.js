'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Mail, Linkedin, MessageCircle } from 'lucide-react'

const socialLinks = [
  { label: 'Email',    icon: Mail,          href: 'mailto:Jahswilljacobdlp23@gmail.com' },
  { label: 'LinkedIn', icon: Linkedin,      href: 'https://www.linkedin.com/in/jah-swill-jacob-b571332b9/' },
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/2348086944210' },
]

export default function Footer() {
  return (
    <footer className="border-t py-10 px-5 md:px-8" style={{ borderColor: 'var(--line)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* Left — Logo + tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="text-base font-semibold tracking-tight hover:opacity-70 transition-opacity"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Jahswill
            </Link>
            <p
              className="text-xs uppercase tracking-wider mt-1"
              style={{ color: 'var(--muted)' }}
            >
              Product Builder · PM · Designer · Lagos, Nigeria 🌍
            </p>
          </motion.div>

          {/* Center — Nav links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="flex gap-6"
          >
            {[
              { label: 'Work',   href: '/work' },
              { label: 'Skills', href: '/skills' },
              { label: 'Tools',  href: '/tools' },
            ].map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-wider transition-opacity hover:opacity-60"
                style={{ color: 'var(--muted)' }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>

          {/* Right — Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={link.label}
                className="p-2 rounded-md transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--muted)' }}
              >
                <link.icon size={16} />
              </a>
            ))}
          </motion.div>

        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-xs mt-8 pt-6 border-t"
          style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
        >
          © {new Date().getFullYear()} Jahswill. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}
