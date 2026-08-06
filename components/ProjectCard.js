'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { DISCIPLINES } from '@/lib/data'

const STATUS_STYLES = {
  Live:        { bg: '#DCFCE7', color: '#15803D' },
  'In Progress': { bg: '#FEF9C3', color: '#A16207' },
  Concept:     { bg: '#F1F5F9', color: '#475569' },
}

export default function ProjectCard({
  slug,
  title,
  subtitle,
  oneLiner,
  description,
  discipline,
  tags,
  contributionPills,
  status,
  year,
  href,
  liveUrl,
  variant = 'default', // 'default' | 'featured' | 'index'
}) {
  const accentColor = DISCIPLINES[discipline]?.cssVar ?? 'var(--accent)'
  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES['Concept']

  if (variant === 'featured') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-xl overflow-hidden border transition-all duration-200 group"
        style={{
          backgroundColor: 'var(--card)',
          borderColor: 'var(--line)',
        }}
        whileHover={{ y: -3 }}
      >
        {/* Discipline colour top bar */}
        <div className="h-1" style={{ backgroundColor: accentColor }} />

        <div className="p-6 md:p-8">
          {/* Status + year */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
            >
              {status}
            </span>
            <span className="text-xs" style={{ color: 'var(--muted)' }}>{year}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            {tags.map((tag, idx) => (
              <span
                key={idx}
                className="text-xs uppercase tracking-wider"
                style={{ color: accentColor }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h3
            className="text-xl md:text-2xl font-semibold mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {title}
          </h3>

          <p className="text-sm italic mb-4" style={{ color: 'var(--muted)' }}>
            {subtitle}
          </p>

          <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
            {oneLiner}
          </p>

          <Link href={href}>
            <motion.span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-colors"
              style={{ color: 'var(--ink)' }}
              whileHover={{ x: 3 }}
            >
              View Case Study <ArrowRight size={14} />
            </motion.span>
          </Link>
        </div>
      </motion.div>
    )
  }

  // ── Index / default card ──
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-xl border overflow-hidden transition-all duration-200 group"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--line)',
      }}
      whileHover={{ y: -3 }}
    >
      {/* Discipline accent left border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: accentColor }}
      />

      <div className="pl-6 pr-6 py-6 md:pl-8 md:pr-8 md:py-7">
        {/* Status + year */}
        <div className="flex items-center gap-3 mb-3">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
          >
            {status}
          </span>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>{year}</span>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-3">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs uppercase tracking-wider"
              style={{ color: accentColor }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className="text-xl font-semibold mb-1.5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>

        <p className="text-sm italic mb-3" style={{ color: 'var(--muted)' }}>
          {subtitle}
        </p>

        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)' }}>
          {description}
        </p>

        {/* Contribution pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(contributionPills ?? []).slice(0, 4).map((pill, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-1 rounded border"
              style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link href={href}>
            <motion.span
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
              style={{ color: 'var(--ink)' }}
              whileHover={{ x: 3 }}
            >
              View Case Study <ArrowRight size={13} />
            </motion.span>
          </Link>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-60"
              style={{ color: 'var(--muted)' }}
            >
              Live site <ExternalLink size={11} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
