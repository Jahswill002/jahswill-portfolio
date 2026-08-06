'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { DISCIPLINES } from '@/lib/data'

const STATUS_STYLES = {
  Live:          { bg: '#DCFCE7', color: '#15803D', label: 'Live' },
  'In Progress': { bg: '#FEF9C3', color: '#A16207', label: 'In Progress' },
  Concept:       { bg: '#F1F5F9', color: '#475569', label: 'Concept' },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function Section({ title, accentColor, children }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={itemVariants}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-5 h-px" style={{ backgroundColor: accentColor }} />
        <h2
          className="text-lg font-semibold uppercase tracking-wide"
          style={{ color: accentColor, fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.section>
  )
}

function BulletList({ items, accentColor }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-3 text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
          <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ backgroundColor: accentColor }} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function CaseStudyTemplate({ project }) {
  const {
    title, subtitle, discipline, disciplines, tags,
    status, year, liveUrl, screenshot,
    caseStudy,
  } = project

  const primaryDiscipline = DISCIPLINES[discipline]
  const accentColor = primaryDiscipline?.cssVar ?? 'var(--accent)'
  const statusStyle = STATUS_STYLES[status] ?? STATUS_STYLES['Concept']
  const hasScreenshot = !!screenshot
  const isComingSoon = !hasScreenshot && (status === 'In Progress' || status === 'Concept')

  return (
    <article className="pt-28 pb-24 px-5 md:px-8 max-w-4xl mx-auto">

      {/* ── Back link ── */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-60 mb-10"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={13} /> All Projects
        </Link>
      </motion.div>

      {/* ── Case study header ── */}
      <motion.header
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        {/* Discipline pills */}
        <div className="flex flex-wrap gap-2 mb-5">
          {(disciplines ?? [discipline]).map((d) => (
            <span
              key={d}
              className="text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider"
              style={{
                backgroundColor: DISCIPLINES[d]?.cssVar
                  ? `${DISCIPLINES[d].color}18`
                  : 'var(--line)',
                color: DISCIPLINES[d]?.cssVar ?? 'var(--muted)',
              }}
            >
              {DISCIPLINES[d]?.label ?? d}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1
          className="mb-3"
          style={{ fontFamily: 'var(--font-display)', borderLeft: `4px solid ${accentColor}`, paddingLeft: '1rem' }}
        >
          {title}
        </h1>

        <p className="text-lg italic mb-5" style={{ color: 'var(--muted)', paddingLeft: '1.25rem' }}>
          {subtitle}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-3 pl-5">
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{ backgroundColor: statusStyle.bg, color: statusStyle.color }}
          >
            {status}
          </span>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>{year}</span>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {tags.map((tag, i) => (
              <span key={i} className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                {tag}
              </span>
            ))}
          </div>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded transition-opacity hover:opacity-80"
              style={{ backgroundColor: accentColor, color: '#fff' }}
            >
              View live site <ExternalLink size={11} />
            </a>
          )}
        </div>
      </motion.header>

      <div className="w-full h-px mb-14" style={{ backgroundColor: 'var(--line)' }} />

      {/* ── Screenshot slot ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        {hasScreenshot ? (
          <div
            className="relative w-full rounded-xl overflow-hidden border"
            style={{ aspectRatio: '16/9', borderColor: 'var(--line)' }}
          >
            <Image
              src={screenshot}
              alt={`${title} screenshot`}
              fill
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div
            className="w-full rounded-xl border flex flex-col items-center justify-center gap-3 py-16"
            style={{
              borderColor: 'var(--line)',
              backgroundColor: 'var(--card)',
              borderStyle: isComingSoon ? 'dashed' : 'solid',
            }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
              style={{ backgroundColor: `${primaryDiscipline?.color}18`, color: accentColor }}
            >
              🖼
            </div>
            <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
              {isComingSoon ? 'Case study assets coming soon' : 'Screenshot not available'}
            </p>
            {isComingSoon && (
              <p className="text-xs text-center max-w-xs" style={{ color: 'var(--muted)' }}>
                When assets are ready, drop them in{' '}
                <code className="text-xs px-1.5 py-0.5 rounded" style={{ backgroundColor: 'var(--line)' }}>
                  public/screenshots/
                </code>{' '}
                — no other change needed.
              </p>
            )}
          </div>
        )}
      </motion.div>

      {/* ── Case study content ── */}
      {caseStudy?.problem && (
        <Section title="The Problem" accentColor={accentColor}>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {caseStudy.problem}
          </p>
        </Section>
      )}

      {caseStudy?.role && (
        <Section title="My Role" accentColor={accentColor}>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {caseStudy.role}
          </p>
        </Section>
      )}

      {caseStudy?.whatIDid && (
        <Section title="What I Did" accentColor={accentColor}>
          {/* If it's the structured PM/Design/Build breakdown (Sheltr) */}
          {typeof caseStudy.whatIDid === 'object' && !Array.isArray(caseStudy.whatIDid) ? (
            <div className="space-y-8">
              {caseStudy.whatIDid.pm && (
                <div>
                  <h3
                    className="text-sm font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: 'var(--pm)', fontFamily: 'var(--font-display)' }}
                  >
                    As PM
                  </h3>
                  <BulletList items={caseStudy.whatIDid.pm} accentColor="var(--pm)" />
                </div>
              )}
              {caseStudy.whatIDid.design && (
                <div>
                  <h3
                    className="text-sm font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: 'var(--design)', fontFamily: 'var(--font-display)' }}
                  >
                    As Designer
                  </h3>
                  <BulletList items={caseStudy.whatIDid.design} accentColor="var(--design)" />
                </div>
              )}
              {caseStudy.whatIDid.build && (
                <div>
                  <h3
                    className="text-sm font-semibold mb-3 uppercase tracking-wider"
                    style={{ color: 'var(--build)', fontFamily: 'var(--font-display)' }}
                  >
                    As Builder
                  </h3>
                  <BulletList items={caseStudy.whatIDid.build} accentColor="var(--build)" />
                </div>
              )}
            </div>
          ) : (
            <BulletList items={caseStudy.whatIDid} accentColor={accentColor} />
          )}
        </Section>
      )}

      {caseStudy?.keyDecision && (
        <Section title="Key Decision" accentColor={accentColor}>
          <blockquote
            className="pl-5 py-1 border-l-2 text-base italic leading-relaxed"
            style={{ borderColor: accentColor, color: 'var(--muted)' }}
          >
            {caseStudy.keyDecision}
          </blockquote>
        </Section>
      )}

      {caseStudy?.outcome && (
        <Section title="Outcome" accentColor={accentColor}>
          <p className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
            {caseStudy.outcome}
          </p>
        </Section>
      )}

      {/* ── Navigation ── */}
      <div className="w-full h-px mb-12" style={{ backgroundColor: 'var(--line)' }} />
      <div className="flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-60"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={13} /> All Projects
        </Link>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium transition-opacity hover:opacity-80"
            style={{ color: accentColor }}
          >
            View live site <ArrowRight size={13} />
          </a>
        )}
      </div>
    </article>
  )
}
