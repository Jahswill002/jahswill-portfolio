'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function ProjectCard({
  index,
  title,
  subtitle,
  description,
  tags,
  contributionPills,
  status,
  year,
  href,
  featured = false,
})
{
  if (featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full rounded-lg overflow-hidden"
        style={{ backgroundColor: 'var(--ink)' }}
      >
        <div className="p-8 md:p-12 text-white">
          {/* Badge */}
          <div className="inline-block px-3 py-1 rounded text-xs font-medium mb-6" style={{ backgroundColor: 'var(--accent)' }}>
            Featured
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-xs uppercase tracking-wider opacity-75">
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl mb-3">
            {title} — Conceived. Designed. <em>Shipped.</em>
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base mb-6 italic opacity-90">{subtitle}</p>

          {/* Status & Year */}
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-block px-3 py-1 rounded text-xs font-medium" style={{ backgroundColor: '#2D8A4E', color: 'white' }}>
              {status}
            </span>
            <span className="text-xs opacity-75">{year}</span>
          </div>

          {/* Description */}
          <p className="text-base leading-relaxed mb-8 opacity-90 max-w-2xl">{description}</p>

          {/* Role Tags */}
          <div className="flex flex-wrap gap-2 mb-8 text-xs uppercase tracking-wider opacity-75">
            {tags.map((tag, idx) => (
              <span key={idx}>{tag}</span>
            ))}
          </div>

          {/* Contribution Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {contributionPills.map((pill, idx) => (
              <span key={idx} className="px-3 py-1 rounded text-xs border border-white opacity-50">
                {pill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link href={href}>
            <motion.button
              className="flex items-center gap-2 text-sm uppercase tracking-widest font-medium"
              whileHover={{ x: 4 }}
            >
              View Case Study <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </motion.div>
    )
  }

  // Regular card
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="p-6 md:p-8 rounded-lg border transition-all duration-200 group"
      style={{
        backgroundColor: 'var(--card)',
        borderColor: 'var(--line)',
      }}
      whileHover={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Index */}
      <div className="text-xs uppercase tracking-wider mb-4" style={{ color: 'var(--muted)' }}>
        {index}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, idx) => (
          <span key={idx} className="text-xs" style={{ color: 'var(--muted)' }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h3 className="font-serif text-2xl mb-2">{title}</h3>

      {/* Subtitle */}
      <p className="text-sm italic mb-4" style={{ color: 'var(--muted)' }}>
        {subtitle}
      </p>

      {/* Status & Year */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'var(--line)', color: 'var(--ink)' }}>
          {status}
        </span>
        <span className="text-xs" style={{ color: 'var(--muted)' }}>
          {year}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
        {description}
      </p>

      {/* Contribution Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {contributionPills.slice(0, 3).map((pill, idx) => (
          <span key={idx} className="text-xs px-2 py-1 rounded border" style={{ borderColor: 'var(--line)', color: 'var(--muted)' }}>
            {pill}
          </span>
        ))}
      </div>

      {/* CTA */}
      <Link href={href}>
        <motion.button
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-medium"
          whileHover={{ x: 2 }}
        >
          View Case Study <ArrowRight size={14} />
        </motion.button>
      </Link>
    </motion.div>
  )
}
