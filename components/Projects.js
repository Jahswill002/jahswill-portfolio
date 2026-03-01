'use client'
/* eslint-disable react/no-unescaped-entities */

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'Sheltr',
      subtitle: 'Risk assessment & insurance guidance for Nigerian SMEs',
      description:
        'Sheltr is a product I conceived, designed, and shipped — a risk assessment and insurance guidance tool for Nigerian SME owners who have historically been underserved by the insurance industry. I led the full process: from market research and problem framing, through brand and UX design, to technical specification and live deployment. Sheltr represents my ability to own a product end-to-end — thinking like a PM, designing like a designer, and building like a founder.',
      tags: ['Featured', 'Fintech · InsurTech', 'Nigeria'],
      contributionPills: [
        'Defined problem statement',
        'Scoped full MVP',
        'Competitive landscape',
        '4-week sprint roadmap',
        'Monetisation strategy',
        'Rule-based recommendation engine',
        'Shipped to production',
      ],
      status: 'Live',
      year: 2024,
      href: '/work/sheltr',
      featured: true,
    },
    {
      index: '01',
      title: 'Drobby',
      subtitle: 'Logistics Aggregation Platform for African SMEs',
      description:
        'African SMEs were juggling multiple delivery apps, inconsistent pricing, and zero visibility across logistics providers. Drobby solves this with a unified platform to manage all delivery partners in one place. I led Business Development and Product Direction — from user research interviews with SMEs to PRD authorship, MVP scope definition, and end-to-end user flow design.',
      tags: ['Logistics · Africa', 'B2B SaaS'],
      contributionPills: [
        'User research interviews',
        'PRD authorship',
        'MVP scope definition',
        'End-to-end user flows',
        'Go-to-market thinking',
        'Biz Dev & Partnerships',
      ],
      status: 'In Progress',
      year: 2024,
      href: '/work/drobby',
    },
    {
      index: '02',
      title: 'Multi-Insurer Platform',
      subtitle: 'Standalone Insurance Architecture Concept',
      description:
        'Insurance processes are fragmented — users struggle with policy comparison, documentation, claims tracking, and transparency. I designed a standalone multi-insurer platform built for scalability. As Product Manager and Research Lead, I ran market and competitor analysis, structured the full PRD with user stories and release roadmap, and set the architecture direction.',
      tags: ['InsurTech', 'Platform Thinking'],
      contributionPills: [
        'Market analysis',
        'Full PRD',
        'User stories',
        'Release roadmap',
        'Architecture direction',
        'Scalability thinking',
      ],
      status: 'Concept',
      year: 2024,
      href: '/work/insurance-platform',
    },
  ]

  return (
    <section
      id="projects"
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
          <div className="section-label">Projects</div>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h2 className="font-serif">Products I've shaped & shipped.</h2>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
              3 case studies
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
