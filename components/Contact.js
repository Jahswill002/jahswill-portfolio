'use client'
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const formPayload = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/mzdaqger', {
        method: 'POST',
        body: formPayload,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const socialLinks = [
    {
      label: 'Email',
      icon: Mail,
      href: 'mailto:Jahswilljacobdlp23@gmail.com',
      color: 'var(--design)',
    },
    {
      label: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jah-swill-jacob-b571332b9/',
      color: 'var(--pm)',
    },
    {
      label: 'WhatsApp',
      icon: MessageCircle,
      href: 'https://wa.me/2348086944210',
      color: 'var(--build)',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  }

  const inputStyle = {
    borderColor: 'var(--line)',
    backgroundColor: 'var(--card)',
    color: 'var(--ink)',
    fontFamily: 'var(--font-body)',
  }

  return (
    <section
      id="contact"
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
          <div className="section-label">Contact</div>
          <h2 style={{ fontFamily: 'var(--font-display)' }}>
            Let's build something <em>real</em>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left — Intro & Social */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-10"
              style={{ color: 'var(--muted)' }}
            >
              If you're working on a problem worth solving and need someone who can think, design,
              and build — I'd love to talk.
            </motion.p>

            <div className="flex flex-col gap-3">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="flex items-center gap-3 px-5 py-4 rounded-lg border text-sm font-medium transition-all duration-200"
                  style={{
                    backgroundColor: 'var(--card)',
                    borderColor: 'var(--line)',
                    color: 'var(--ink)',
                  }}
                  whileHover={{ x: 3 }}
                >
                  <link.icon size={16} style={{ color: link.color }} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-5"
          >
            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-name"
                className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: 'var(--muted)' }}
              >
                Name
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="What should I call you?"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-sm"
                style={inputStyle}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-email"
                className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: 'var(--muted)' }}
              >
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors text-sm"
                style={inputStyle}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label
                htmlFor="contact-message"
                className="block text-xs uppercase tracking-wider mb-2"
                style={{ color: 'var(--muted)' }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about the problem you're working on..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors resize-none text-sm"
                style={inputStyle}
              />
            </motion.div>

            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full px-6 py-3 text-xs uppercase tracking-widest font-medium flex items-center justify-center gap-3 rounded-lg transition-all duration-200"
              style={{
                backgroundColor:
                  status === 'success' ? '#15803D'
                  : status === 'error' ? '#DC2626'
                  : 'var(--ink)',
                color: 'var(--bg)',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
              whileHover={status === 'idle' ? { y: -2 } : {}}
            >
              {status === 'idle' && <><span>Send Message</span><ArrowRight size={15} /></>}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'success' && <span>✓ Message sent — I'll be in touch!</span>}
              {status === 'error' && <span>Something went wrong. Try again.</span>}
            </motion.button>

            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-center"
                style={{ color: 'var(--muted)' }}
              >
                You can also reach me at{' '}
                <a href="mailto:Jahswilljacobdlp23@gmail.com" style={{ color: 'var(--design)' }}>
                  Jahswilljacobdlp23@gmail.com
                </a>
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
