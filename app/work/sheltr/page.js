/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'

export default function SheltrPage() {
  return (
    <article className="pt-28 pb-20 px-5 md:px-8 max-w-6xl mx-auto">
      <Link href="/" className="text-sm text-accent underline">
        ← Back to Work
      </Link>

      {/* Hero */}
      <header className="mt-8 mb-12">
        <h1 className="font-serif text-4xl mb-4">Sheltr</h1>
        <p className="italic text-lg mb-4">A risk assessment and insurance guidance tool for Nigerian SMEs</p>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-wider text-muted mb-4">
          <span>Product Manager</span>
          <span>Product Designer</span>
          <span>Builder</span>
          <span>InsurTech</span>
          <span>Nigeria</span>
          <span>2024</span>
          <span>
            <a href="https://sheltrng.vercel.app" target="_blank" rel="noopener noreferrer" className="text-accent underline">
              Live
            </a>
          </span>
        </div>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Insurance processes in Nigeria are fragmented and opaque. SME owners — who face real business risk —
          largely avoid insurance due to distrust, complexity, and lack of relevant guidance. The market had
          aggregators and marketplaces, but no product focused on helping SMEs <em>understand their risk first</em>
          before being sold a product.
        </p>
      </header>

      <hr className="border-line my-12" />

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">The Problem</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Insurance processes in Nigeria are fragmented and opaque. SME owners — who face real business risk —
          largely avoid insurance due to distrust, complexity, and lack of relevant guidance. The market had
          aggregators and marketplaces, but no product focused on helping SMEs <em>understand their risk first</em>
          before being sold a product.
        </p>
      </section>

      {/* My Role */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">My Role</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          End-to-end ownership across three dimensions: PM, Designer, and Builder.
        </p>
      </section>

      {/* What I Did */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">What I Did</h2>
        <h3 className="font-serif text-xl mb-2">As PM</h3>
        <ul className="list-disc list-inside mb-4 text-base" style={{ color: 'var(--muted)' }}>
          <li>Defined the problem statement for the Nigerian SME insurance gap</li>
          <li>Identified root causes behind SME insurance avoidance through market research</li>
          <li>Set and documented full product scope (and wrote an explicit out-of-scope document to protect the team's timeline)</li>
          <li>Defined use cases and mapped the competitive landscape</li>
          <li>Built the release roadmap across a 4-week sprint</li>
          <li>Identified the monetisation strategy</li>
          <li>Made the strategic call to build a <strong>guidance tool</strong> rather than a marketplace</li>
        </ul>
        <h3 className="font-serif text-xl mb-2">As Designer</h3>
        <ul className="list-disc list-inside mb-4 text-base" style={{ color: 'var(--muted)' }}>
          <li>Established the brand identity and product personality</li>
          <li>Defined the emotional design goal: <strong>relief</strong> (not sales pressure)</li>
          <li>Designed the full 6-screen user flow</li>
          <li>Wrote the design principle that guides every decision</li>
          <li>Built HMW (How Might We) statements that shaped creative direction</li>
          <li>Made tone and copy decisions aligned with a trust-first experience</li>
        </ul>
        <h3 className="font-serif text-xl mb-2">As Builder</h3>
        <ul className="list-disc list-inside text-base" style={{ color: 'var(--muted)' }}>
          <li>Wrote two production-grade technical specifications</li>
          <li>Built with AI-assisted development tools (Claude Code)</li>
          <li>Managed the GitHub repository</li>
          <li>Deployed to production on Vercel</li>
          <li>Key technical decisions: rule-based recommendation engine (over AI), localStorage (over backend), web-first (over native)</li>
        </ul>
      </section>

      {/* Key Decision */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Key Strategic Decision</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          "The most important product decision I made on Sheltr was choosing to build a <em>guidance tool</em> rather than a marketplace. Most insurtechs go straight to marketplace — compare and buy. But our research showed that SME owners didn't trust the category at all. They needed to understand their risk first. That insight changed the entire product direction."
        </p>
      </section>

      {/* Outcome */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl mb-4">Outcome</h2>
        <p className="text-base" style={{ color: 'var(--muted)' }}>
          Shipped from concept to live URL; full product strategy, brand, UX, and technical spec produced; demonstrates end-to-end product ownership rarely seen in PM or design portfolios.
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
