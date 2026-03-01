/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function DrobbyPage() {
  return (
    <article className="pt-28 pb-20 px-5 md:px-8 max-w-6xl mx-auto">
      <Link href="/" className="text-sm text-accent underline">
        ← Back to Work
      </Link>

      {/* Hero */}
      <header className="mt-8 mb-12">
        <h1 className="font-serif text-4xl mb-4">Drobby</h1>
        <p className="italic text-lg mb-4">Logistics aggregation platform for African SMEs</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted mb-4">
          <span>Product Direction</span>
          <span>Biz Dev</span>
          <span>Logistics</span>
          <span>Africa</span>
          <span>2024</span>
          <span>In Progress</span>
        </div>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          African SMEs are at the mercy of unreliable logistics providers. They use multiple apps, get inconsistent pricing, and have zero visibility into delivery status across providers. The coordination overhead is a hidden tax on their operations.
        </p>
      </header>

      <hr className="border-line my-12" />

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">The Problem</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          African SMEs are at the mercy of unreliable logistics providers. They use multiple apps, get inconsistent pricing, and have zero visibility into delivery status across providers. The coordination overhead is a hidden tax on their operations.
        </p>
      </section>

      {/* My Role */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">My Role</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Business Development and Product Direction — the bridge between market reality and product execution.
        </p>
      </section>

      {/* What I Did */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">What I Did</h2>
        <ul className="list-disc list-inside mb-4 text-base" style={{ color: 'var(--muted)' }}>
          <li>Conducted user research interviews with SME owners to validate pain points</li>
          <li>Synthesised research insights into clear product requirements</li>
          <li>Built the PRD and defined MVP scope</li>
          <li>Designed the end-to-end user flow</li>
          <li>Worked with UI/UX designers to align the experience with real SME workflows</li>
          <li>Defined positioning and go-to-market thinking</li>
          <li>Led partnership conversations with logistics providers</li>
        </ul>
      </section>

      {/* Key Insight */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Key Insight from Research</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          "SMEs didn't just want cheaper delivery. They wanted <em>predictability</em>. The core insight from interviews was that uncertainty — not cost — was the main reason SMEs avoided certain providers. That shifted our MVP priority from price comparison to real-time tracking and reliability scoring."
        </p>
      </section>

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Outcome</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Validated product concept with real user research; full PRD and MVP scope defined; active development ongoing.
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
