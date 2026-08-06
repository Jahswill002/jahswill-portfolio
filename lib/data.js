/**
 * lib/data.js
 * Single source of truth for all portfolio content.
 * Projects, skills, and tools are defined here and imported across all pages.
 */

// ── Discipline colour map ────────────────────────────────────────────────────
export const DISCIPLINES = {
  pm:     { label: 'Product Management', color: '#1D9E75', cssVar: 'var(--pm)' },
  design: { label: 'Design & UX',        color: '#D85A30', cssVar: 'var(--design)' },
  build:  { label: 'Building & Execution', color: '#EF9F27', cssVar: 'var(--build)' },
}

// ── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    slug: 'sheltr',
    title: 'Sheltr',
    subtitle: 'Risk assessment & insurance guidance for Nigerian SMEs',
    oneLiner: 'Built end-to-end: from market research to live URL.',
    description:
      'Sheltr is a product I conceived, designed, and shipped — a risk assessment and insurance guidance tool for Nigerian SME owners who have historically been underserved by the insurance industry. I led the full process: from market research and problem framing, through brand and UX design, to technical specification and live deployment.',
    discipline: 'build', // primary discipline Jahswill led
    disciplines: ['pm', 'design', 'build'],
    tags: ['InsurTech', 'Nigeria', 'Fintech'],
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
    liveUrl: 'https://sheltrng.vercel.app',
    screenshot: '/screenshots/sheltr.png',
    featured: true,
    caseStudy: {
      problem:
        'Insurance processes in Nigeria are fragmented and opaque. SME owners — who face real business risk — largely avoid insurance due to distrust, complexity, and lack of relevant guidance. The market had aggregators and marketplaces, but no product focused on helping SMEs understand their risk first before being sold a product.',
      role: 'End-to-end ownership across three dimensions: PM, Designer, and Builder.',
      whatIDid: {
        pm: [
          'Defined the problem statement for the Nigerian SME insurance gap',
          'Identified root causes behind SME insurance avoidance through market research',
          'Set and documented full product scope (including explicit out-of-scope document)',
          'Defined use cases and mapped the competitive landscape',
          'Built the release roadmap across a 4-week sprint',
          'Identified the monetisation strategy',
          'Made the strategic call to build a guidance tool rather than a marketplace',
        ],
        design: [
          'Established the brand identity and product personality',
          'Defined the emotional design goal: relief (not sales pressure)',
          'Designed the full 6-screen user flow',
          'Wrote the design principle that guides every decision',
          'Built HMW (How Might We) statements that shaped creative direction',
          'Made tone and copy decisions aligned with a trust-first experience',
        ],
        build: [
          'Wrote two production-grade technical specifications',
          'Built with AI-assisted development tools (Claude Code)',
          'Managed the GitHub repository',
          'Deployed to production on Vercel',
          'Key technical decisions: rule-based recommendation engine (over AI), localStorage (over backend), web-first (over native)',
        ],
      },
      keyDecision:
        '"The most important product decision I made on Sheltr was choosing to build a guidance tool rather than a marketplace. Most insurtechs go straight to marketplace — compare and buy. But our research showed that SME owners didn\'t trust the category at all. They needed to understand their risk first. That insight changed the entire product direction."',
      outcome:
        'Shipped from concept to live URL. Full product strategy, brand, UX, and technical spec produced. Demonstrates end-to-end product ownership rarely seen in PM or design portfolios.',
    },
  },
  {
    slug: 'drobby',
    title: 'Drobby',
    subtitle: 'Logistics Aggregation Platform for African SMEs',
    oneLiner: 'Unified logistics management for African SMEs.',
    description:
      'African SMEs were juggling multiple delivery apps, inconsistent pricing, and zero visibility across logistics providers. Drobby solves this with a unified platform to manage all delivery partners in one place. I led Business Development and Product Direction — from user research interviews with SMEs to PRD authorship, MVP scope definition, and end-to-end user flow design.',
    discipline: 'pm',
    disciplines: ['pm', 'build'],
    tags: ['Logistics', 'Africa', 'B2B SaaS'],
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
    screenshot: null, // coming soon
    featured: true,
    caseStudy: {
      problem:
        'African SMEs are at the mercy of unreliable logistics providers. They use multiple apps, get inconsistent pricing, and have zero visibility into delivery status across providers. The coordination overhead is a hidden tax on their operations.',
      role: 'Business Development and Product Direction — the bridge between market reality and product execution.',
      whatIDid: [
        'Conducted user research interviews with SME owners to validate pain points',
        'Synthesised research insights into clear product requirements',
        'Built the PRD and defined MVP scope',
        'Designed the end-to-end user flow',
        'Worked with UI/UX designers to align the experience with real SME workflows',
        'Defined positioning and go-to-market thinking',
        'Led partnership conversations with logistics providers',
      ],
      keyDecision:
        '"SMEs didn\'t just want cheaper delivery. They wanted predictability. The core insight from interviews was that uncertainty — not cost — was the main reason SMEs avoided certain providers. That shifted our MVP priority from price comparison to real-time tracking and reliability scoring."',
      outcome:
        'Validated product concept with real user research. Full PRD and MVP scope defined. Active development ongoing.',
    },
  },
  {
    slug: 'insurance-platform',
    title: 'Multi-Insurer Platform',
    subtitle: 'Standalone Insurance Architecture Concept',
    oneLiner: 'A unified multi-insurer platform built for real scalability.',
    description:
      'Insurance processes are fragmented — users struggle with policy comparison, documentation, claims tracking, and transparency. I designed a standalone multi-insurer platform built for scalability. As Product Manager and Research Lead, I ran market and competitor analysis, structured the full PRD, and set the architecture direction.',
    discipline: 'pm',
    disciplines: ['pm'],
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
    screenshot: null, // coming soon
    featured: false,
    caseStudy: {
      problem:
        'Insurance is sold in silos. Each provider has its own app, its own documentation format, its own claims process. Users who hold multiple policies — which most businesses do — have no unified view. The result: confusion, missed renewals, and abandoned claims.',
      role: 'PM and Research Lead for a concept built to demonstrate ecosystem-level thinking, not just UI design.',
      whatIDid: [
        'Conducted market and competitor analysis across insurance platforms',
        'Defined product scope suitable for a capstone project with realistic constraints',
        'Structured a full PRD including user stories, functional and non-functional requirements, key features list, and phased release planning',
        'Incorporated interview data into feature prioritisation decisions',
        'Set architecture direction: standalone multi-insurer (not white-label)',
        'Refined positioning toward long-term scalability',
      ],
      keyDecision:
        '"The critical architectural choice was building standalone rather than white-label. White-label means you\'re always dependent on an insurer\'s data model. Standalone means you own the experience and can onboard any provider. It\'s harder to build but creates a real moat."',
      outcome:
        'Full PRD produced. Demonstrates structural and ecosystem-level product thinking. Concept ready for development.',
    },
  },
  {
    slug: 'the-eye-doctors',
    title: 'The Eye Doctors',
    subtitle: 'Expert eye care clinic website — Lagos',
    oneLiner: 'Full solo build — design to deployment, no handoff.',
    description:
      'Built the full website for The Eye Doctors, a Lagos-based eye care clinic, as a solo project to test and demonstrate my end-to-end building skills. From design decisions to deployment — no team, no handoff. A proof of what I can ship independently.',
    discipline: 'build',
    disciplines: ['design', 'build'],
    tags: ['Web Development', 'Healthcare', 'Solo Build'],
    contributionPills: [
      'Solo build',
      'Full website',
      'Vercel deployment',
      'UI design',
      'Responsive layout',
      'Client-ready',
    ],
    status: 'Live',
    year: 2025,
    href: '/work/the-eye-doctors',
    liveUrl: 'https://the-eye-doctors.vercel.app/',
    screenshot: '/screenshots/the-eye-doctors.png',
    featured: false,
    caseStudy: {
      problem:
        'The Eye Doctors, a Lagos-based eye care clinic, needed a professional web presence that communicated expertise and made it easy for patients to find information and book appointments.',
      role: 'Solo builder — sole owner of every decision from design to deployment.',
      whatIDid: [
        'Designed the full website layout and visual identity',
        'Built responsive layouts for mobile and desktop',
        'Made all design decisions: typography, colour, hierarchy',
        'Deployed to production on Vercel',
        'Delivered a client-ready site with zero external handoff',
      ],
      keyDecision:
        '"This project was deliberately a proof of concept — I wanted to show that I can ship a complete, professional product from scratch with no team. The constraint of working solo forces clarity: every decision has to be correct the first time."',
      outcome:
        'Live site shipped and deployed. Demonstrates full solo build capability across design and development.',
    },
  },
  {
    slug: 'docket-web',
    title: 'Docket — Web',
    subtitle: 'Legal case management platform for Nigerian law firms',
    oneLiner: 'UI/UX lead on a 7-person team that shipped a live legal platform.',
    description:
      'UI/UX Lead on the TechCrush program capstone project. Led a 7-person design team to build Docket — a legal case management platform for Nigerian law firms. I owned the full design system, role-based user flows across three roles (Senior Partner, Associate, Secretary), and key screen designs.',
    discipline: 'design',
    disciplines: ['design', 'pm'],
    tags: ['Legal Tech', 'UI/UX Lead', 'Team Project', 'TechCrush Capstone'],
    contributionPills: [
      'UI/UX Lead',
      'Full design system',
      'Role-based flows',
      '7-person design team',
      'Figma',
      'Design handoff',
    ],
    status: 'Live',
    year: 2025,
    href: '/work/docket-web',
    liveUrl: 'https://niimie.github.io/Group_1-DOCKET-legal-case-management-platform/login/index.html',
    screenshot: '/screenshots/docket-web.png',
    featured: true,
    caseStudy: {
      problem:
        'Nigerian law firms rely on spreadsheets, email chains, and physical files to manage cases. This creates data silos, missed deadlines, and zero transparency across roles. Senior Partners, Associates, and Secretaries have completely different information needs — and no existing tool addressed all three.',
      role: 'UI/UX Lead — responsible for the entire design output of a 7-person design team.',
      whatIDid: [
        'Led a 7-person design team across the full capstone sprint',
        'Designed and maintained the complete Figma design system',
        'Mapped role-based user flows for Senior Partner, Associate, and Secretary',
        'Designed key screens across all three role experiences',
        'Managed design handoff to the development team',
        'Coordinated design decisions to ensure consistency across screens',
      ],
      keyDecision:
        '"The biggest design challenge was the role system. Three roles, three completely different information architectures — but one product. I made the call to build a unified design system first, then layer role-specific views on top. That kept the visual language coherent while each role still felt tailored."',
      outcome:
        'Live site shipped by the development team. Full design system and role-based flows delivered. Led the design function of the TechCrush capstone project.',
    },
  },
  {
    slug: 'docket-mobile',
    title: 'Docket — Mobile',
    subtitle: 'Mobile companion app for the Docket legal platform',
    oneLiner: 'Touch-first mobile UX for lawyers managing cases on the go.',
    description:
      'The mobile experience for Docket, designed as part of the same TechCrush capstone sprint. I led UI/UX design for the mobile flows — translating the role-based case management system into a touch-first experience for lawyers on the go. Built by the development team on Expo and deployed to production.',
    discipline: 'design',
    disciplines: ['design'],
    tags: ['Legal Tech', 'Mobile', 'UI/UX Lead', 'TechCrush Capstone'],
    contributionPills: [
      'UI/UX Lead',
      'Mobile UX flows',
      'Role-based design',
      'Expo',
      'Touch-first experience',
      'Design to dev handoff',
    ],
    status: 'Live',
    year: 2025,
    href: '/work/docket-mobile',
    liveUrl: 'https://expo.dev/accounts/frankifeanyi/projects/Docket/builds/9fecac2b-f7e9-4eee-bef6-e0773ee6bdda',
    screenshot: '/screenshots/docket-mobile.png',
    featured: false,
    caseStudy: {
      problem:
        'The web Docket platform was not suitable for lawyers who needed to check case status, review documents, and log updates while in court or between meetings. A mobile-first approach was needed that prioritised quick actions and glanceable information.',
      role: 'UI/UX Lead for the mobile experience — translating the web system into a touch-first product.',
      whatIDid: [
        'Designed mobile UX flows for all three roles (Partner, Associate, Secretary)',
        'Adapted the web design system for touch-first interaction patterns',
        'Prioritised navigation for quick access to case status and documents',
        'Designed the mobile-specific component set in Figma',
        'Handed off to development team for Expo build',
      ],
      keyDecision:
        '"Mobile is not a smaller version of web. I restructured the information architecture completely — what\'s primary on desktop is often secondary on mobile. The navigation model changed, the hierarchy changed. Same design system, completely different UX logic."',
      outcome:
        'Live mobile app built on Expo. Touch-first experience for lawyers on the move. Full design handoff delivered to the development team.',
    },
  },
]

// ── Featured projects (home page preview — 3 max) ────────────────────────────
export const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

// ── Skills data ──────────────────────────────────────────────────────────────
// ⚠ Biz Dev/Strategy redistribution:
//   - Business Development → pm (confirm)
//   - Partnerships → pm (confirm)
//   - Go-to-Market Strategy → build (stays)
export const skillsData = [
  {
    discipline: 'pm',
    label: 'Product Management',
    skills: [
      {
        name: 'Product Requirements Docs (PRD)',
        description: 'Written full PRDs for Sheltr, Drobby, and Multi-Insurer Platform — covering user stories, functional requirements, release planning, and out-of-scope documentation.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'User Research & Synthesis',
        description: 'Conducted SME owner interviews for Drobby to validate pain points; synthesised findings into feature prioritisation decisions that shifted the MVP from price comparison to reliability.',
        project: 'drobby',
        projectLabel: 'Drobby',
      },
      {
        name: 'MVP Scoping',
        description: 'Defined and documented realistic MVP scope for Sheltr (4-week sprint) and Drobby, including explicit out-of-scope documents to protect timelines.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Roadmap Planning',
        description: 'Built 4-week sprint roadmaps and phased release plans; structured feature rollout sequencing based on user impact and technical feasibility.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'User Story Writing',
        description: 'Structured user stories for three distinct user roles in Docket (Senior Partner, Associate, Secretary) and multi-role insurance users.',
        project: 'insurance-platform',
        projectLabel: 'Multi-Insurer Platform',
      },
      {
        name: 'Competitive Analysis',
        description: 'Mapped the Nigerian insurtech landscape for Sheltr; conducted competitor analysis across insurance platforms for the Multi-Insurer Platform concept.',
        project: 'insurance-platform',
        projectLabel: 'Multi-Insurer Platform',
      },
      {
        name: 'Metrics & KPIs',
        description: 'Defined success metrics for Sheltr around engagement and insurance guidance completion rates; set measurable MVP success criteria.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Stakeholder Communication',
        description: 'Coordinated design and product decisions across a 7-person team on Docket; aligned business direction with user research findings on Drobby.',
        project: 'docket-web',
        projectLabel: 'Docket — Web',
      },
      {
        name: 'Business Development', // ⚠ redistributed from Biz Dev category — confirm
        description: 'Led partnership conversations with logistics providers for Drobby; developed go-to-market positioning for early-stage product concepts.',
        project: 'drobby',
        projectLabel: 'Drobby',
      },
      {
        name: 'Partnerships', // ⚠ redistributed from Biz Dev category — confirm
        description: 'Identified and approached logistics provider partnerships for Drobby; structured partnership thinking into the go-to-market plan.',
        project: 'drobby',
        projectLabel: 'Drobby',
      },
    ],
  },
  {
    discipline: 'design',
    label: 'Design & UX',
    skills: [
      {
        name: 'End-to-end UX Flows',
        description: 'Designed the complete 6-screen user flow for Sheltr; mapped role-based flows for Senior Partner, Associate, and Secretary across Docket Web and Mobile.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Brand Identity',
        description: 'Established the brand identity and product personality for Sheltr — including the emotional design goal of "relief" over sales pressure.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Emotional Design Strategy',
        description: 'Defined the emotional design goal for Sheltr (trust and relief, not anxiety); used this to guide copy, tone, and visual decisions throughout.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'HMW Frameworks',
        description: 'Built How Might We statements for Sheltr that shaped creative direction and kept the team focused on user-centred problem solving.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Figma',
        description: 'Built and maintained the complete Figma design system for Docket — components, variants, and design tokens used by a 7-person team.',
        project: 'docket-web',
        projectLabel: 'Docket — Web',
      },
      {
        name: 'Product Tone & Voice',
        description: 'Made deliberate copy and tone decisions for Sheltr to align with a trust-first experience for SME owners who are sceptical of insurance.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Wireframing',
        description: 'Created wireframes and user flow diagrams for Drobby and Multi-Insurer Platform to align teams before high-fidelity design.',
        project: 'drobby',
        projectLabel: 'Drobby',
      },
      {
        name: 'Design Systems',
        description: 'Owned the full design system for Docket (Web + Mobile) — component library, spacing, typography, and colour across all three role experiences.',
        project: 'docket-web',
        projectLabel: 'Docket — Web',
      },
    ],
  },
  {
    discipline: 'build',
    label: 'Building & Execution',
    skills: [
      {
        name: 'Technical Specification Writing',
        description: 'Wrote two production-grade technical specifications for Sheltr — covering architecture decisions, data models, and implementation constraints.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'AI-Assisted Development',
        description: 'Used Claude Code (AI-assisted dev tooling) to build and ship Sheltr — demonstrating how to use AI tools as a force multiplier for a solo builder.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'GitHub & Version Control',
        description: 'Managed the Sheltr GitHub repository throughout development; used version control to track changes and manage deployment.',
        project: 'sheltr',
        projectLabel: 'Sheltr',
      },
      {
        name: 'Vercel Deployment',
        description: 'Deployed Sheltr and The Eye Doctors to production on Vercel — including environment configuration and domain setup.',
        project: 'the-eye-doctors',
        projectLabel: 'The Eye Doctors',
      },
      {
        name: 'Next.js & React',
        description: 'Built this portfolio and The Eye Doctors site using Next.js 14 and React — handling routing, layouts, and component architecture.',
        project: 'the-eye-doctors',
        projectLabel: 'The Eye Doctors',
      },
      {
        name: 'Go-to-Market Strategy',
        description: 'Developed GTM thinking for Sheltr (monetisation model) and Drobby (positioning, partnership sequencing, and early adopter targeting).',
        project: 'drobby',
        projectLabel: 'Drobby',
      },
    ],
  },
]

// ── Tools data ───────────────────────────────────────────────────────────────
export const toolsData = [
  {
    name: 'Figma',
    category: 'design',
    emoji: '🎨',
    note: 'Design system creation, UX flows, wireframing, and design handoff. Used for all design work across Docket, Drobby, and Sheltr.',
  },
  {
    name: 'Notion',
    category: 'pm',
    emoji: '📋',
    note: 'PRD writing, project documentation, sprint planning, and research synthesis. My primary workspace for all PM deliverables.',
  },
  {
    name: 'GitHub',
    category: 'build',
    emoji: '🐙',
    note: 'Version control and repository management. Used for Sheltr and this portfolio — branching, commits, and deployment triggers.',
  },
  {
    name: 'Vercel',
    category: 'build',
    emoji: '▲',
    note: 'Production deployment for Sheltr, The Eye Doctors, and this portfolio. Zero-config deploys from GitHub.',
  },
  {
    name: 'Claude (AI Dev)',
    category: 'build',
    emoji: '🤖',
    note: 'AI-assisted development tool used to accelerate coding on Sheltr. Used as a force multiplier, not a replacement for decision-making.',
  },
  {
    name: 'Next.js',
    category: 'build',
    emoji: '⚡',
    note: 'Framework for all web builds — routing, layouts, and static generation. Used for this portfolio and The Eye Doctors site.',
  },
  {
    name: 'Framer Motion',
    category: 'build',
    emoji: '✨',
    note: 'Scroll-reveal animations and hover states across this portfolio. Used with discipline — only where motion adds clarity, not decoration.',
  },
  {
    name: 'Tailwind CSS',
    category: 'build',
    emoji: '🌊',
    note: 'Utility-first CSS for rapid UI development. Used across all Next.js projects — paired with a custom design token system.',
  },
  {
    name: 'Formspree',
    category: 'build',
    emoji: '📬',
    note: 'Form handling for the contact form on this portfolio. Handles email delivery without a backend.',
  },
  {
    name: 'Expo',
    category: 'build',
    emoji: '📱',
    note: 'Mobile deployment platform used by the Docket development team to ship the mobile companion app to production.',
  },
]
