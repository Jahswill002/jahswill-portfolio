'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(247, 245, 240, 0.92)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto w-full md:px-8">
        {/* Logo with profile picture */}
        <a
          href="#hero"
          className="flex items-center text-xl font-serif font-normal transition-colors hover:text-accent"
        >
          {/*
            Drop your profile photo (e.g. from LinkedIn) into `public/profile.jpg`
            or update the `src` below with the direct LinkedIn image URL.
          */}
          <img
            src="/profile.jpg"
            alt="Jahswill"
            width={32}
            height={32}
            className="rounded-full mr-2"
          />
          Jahswill
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider transition-colors hover:text-accent"
              style={{ color: 'var(--muted)' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 bg-bg md:hidden flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xl uppercase font-serif transition-colors hover:text-accent"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
