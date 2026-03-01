/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function InsurancePlatformPage() {
  return (
    <article className="pt-28 pb-20 px-5 md:px-8 max-w-6xl mx-auto">
      <Link href="/" className="text-sm text-accent underline">
        ← Back to Work
      </Link>

      {/* Hero */}
      <header className="mt-8 mb-12">
        <h1 className="font-serif text-4xl mb-4">Multi-Insurer Platform</h1>
        <p className="italic text-lg mb-4">Standalone insurance architecture for the modern policyholder</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted mb-4">
          <span>Product Manager</span>
          <span>Research Lead</span>
          <span>InsurTech</span>
          <span>Platform Thinking</span>
          <span>2024</span>
          <span>Concept</span>
        </div>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Insurance is sold in silos. Each provider has its own app, its own documentation format, its own claims process. Users who hold multiple policies — which most businesses do — have no unified view. The result: confusion, missed renewals, and abandoned claims.
        </p>
      </header>

      <hr className="border-line my-12" />

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">The Problem</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Insurance is sold in silos. Each provider has its own app, its own documentation format, its own claims process. Users who hold multiple policies — which most businesses do — have no unified view. The result: confusion, missed renewals, and abandoned claims.
        </p>
      </section>

      {/* My Role */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">My Role</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          PM and Research Lead for a concept built to demonstrate ecosystem-level thinking, not just UI design.
        </p>
      </section>

      {/* What I Did */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">What I Did</h2>
        <ul className="list-disc list-inside mb-4 text-base" style={{ color: 'var(--muted)' }}>
          <li>Conducted market and competitor analysis across insurance platforms</li>
          <li>Defined product scope suitable for a capstone project with realistic constraints</li>
          <li>Structured a full PRD including:
            <ul className="list-disc list-inside ml-6">
              <li>User stories</li>
              <li>Functional and non-functional requirements</li>
              <li>Key features list</li>
              <li>Release planning (phased rollout)</li>
              <li>Architecture direction (standalone multi-insurer, not white-label)</li>
            </ul>
          </li>
          <li>Incorporated interview data into feature prioritisation decisions</li>
          <li>Refined positioning toward long-term scalability</li>
        </ul>
      </section>

      {/* Key Decision */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Key Design Decision</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          "The critical architectural choice was building <em>standalone</em> rather than white-label. White-label means you're always dependent on an insurer's data model. Standalone means you own the experience and can onboard any provider. It's harder to build but creates a real moat. That's the kind of thinking I wanted this project to reflect."
        </p>
      </section>

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Outcome</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Full PRD produced; demonstrates structural and ecosystem-level product thinking; concept ready for development.
        </p>
      </section>

      <div className="mt-16">
        <Link href="/" className="text-sm text-accent underline">
          ← Back to all work
        </Link>
      </div>
    </article>
  )
}
