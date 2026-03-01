'use client'
/* eslint-disable react/no-unescaped-entities */

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Mail, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
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
    { label: 'Email', icon: Mail, href: 'mailto:Jahswilljacobdlp23@gmail.com' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/jah-swill-jacob-b571332b9/' },
    { label: 'WhatsApp', icon: Twitter, href: 'https://wa.me/2348086944210' },
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
          <h2 className="font-serif">
            Let's build something <em>real</em>.
          </h2>
        </motion.div>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {/* Left - Intro & Social Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={itemVariants}
              className="text-base leading-relaxed mb-8"
              style={{ color: 'var(--muted)' }}
            >
              If you're working on a problem worth solving and need someone who can think, design,
              and build — I'd love to talk.
            </motion.p>

            {/* Social Links */}
            <div className="space-y-4">
              {socialLinks.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.href}
                  variants={itemVariants}
                  className="flex items-center gap-3 text-sm uppercase tracking-widest transition-colors duration-200"
                  style={{ color: 'var(--ink)' }}
                  whileHover={{ color: 'var(--accent)' }}
                >
                  <link.icon size={16} />
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="What should I call you?"
                className="w-full px-4 py-3 border rounded transition-colors focus:outline-none"
                style={{
                  borderColor: 'var(--line)',
                  backgroundColor: 'var(--card)',
                  color: 'var(--ink)',
                }}
              />
            </motion.div>

            {/* Email Input */}
            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 border rounded transition-colors focus:outline-none"
                style={{
                  borderColor: 'var(--line)',
                  backgroundColor: 'var(--card)',
                  color: 'var(--ink)',
                }}
              />
            </motion.div>

            {/* Message Textarea */}
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-xs uppercase tracking-wider mb-2" style={{ color: 'var(--muted)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell me about the problem you're working on..."
                className="w-full px-4 py-3 border rounded transition-colors focus:outline-none resize-none"
                style={{
                  borderColor: 'var(--line)',
                  backgroundColor: 'var(--card)',
                  color: 'var(--ink)',
                }}
              ></textarea>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full px-6 py-3 uppercase text-xs font-medium tracking-widest flex items-center justify-center gap-3 transition-all duration-200"
              style={{
                backgroundColor:
                  status === 'success' ? '#2D8A4E' :
                  status === 'error' ? '#C8552A' :
                  'var(--ink)',
                color: 'var(--bg)',
                opacity: status === 'sending' ? 0.7 : 1,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
              }}
              whileHover={status === 'idle' ? { y: -2 } : {}}
            >
              {status === 'idle' && <><span>Send Message</span> <ArrowRight size={16} /></>}
              {status === 'sending' && <span>Sending...</span>}
              {status === 'success' && <span>✓ Message sent — I'll be in touch!</span>}
              {status === 'error' && <span>Something went wrong. Try again.</span>}
            </motion.button>

            {/* Error fallback */}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xs text-center"
                style={{ color: 'var(--muted)' }}
              >
                You can also reach me directly at{' '}
                <a href="mailto:Jahswilljacobdlp23@gmail.com" style={{ color: 'var(--accent)' }}>
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
