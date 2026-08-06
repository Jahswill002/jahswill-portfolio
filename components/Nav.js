'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Work',   href: '/work' },
  { label: 'Skills', href: '/skills' },
  { label: 'Tools',  href: '/tools' },
  { label: 'Contact', href: '/#contact' },
]

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [pathname])

  const isActive = (href) => {
    if (href === '/work') return pathname.startsWith('/work')
    return pathname === href
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
      style={{
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(247, 245, 240, 0.94)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="flex items-center justify-between px-5 py-4 max-w-6xl mx-auto w-full md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-display font-semibold tracking-tight transition-opacity hover:opacity-70"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Jahswill
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = isActive(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                className="relative text-xs uppercase tracking-widest font-medium transition-colors duration-200"
                style={{
                  color: active ? 'var(--ink)' : 'var(--muted)',
                  fontFamily: 'var(--font-body)',
                }}
              >
                {link.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px"
                    style={{ backgroundColor: 'var(--ink)' }}
                  />
                )}
              </Link>
            )
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 rounded transition-colors hover:bg-line"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden border-t"
            style={{
              backgroundColor: 'rgba(247, 245, 240, 0.98)',
              borderColor: 'var(--line)',
            }}
          >
            <div className="flex flex-col px-5 py-6 gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="py-3 text-sm uppercase tracking-widest font-medium border-b transition-colors"
                    style={{
                      color: active ? 'var(--ink)' : 'var(--muted)',
                      borderColor: 'var(--line)',
                    }}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
