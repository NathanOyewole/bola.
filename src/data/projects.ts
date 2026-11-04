export const projects = [
  {
    title: "Rampart",
    description:
      "On-chain policy vaults for trading agents on Solana. Immutable binaries, renounced upgrade authorities, PDA-enforced spending limits. Custom error 6004 proves policy blocks unauthorized transfers.",
    tech: ["Rust", "Solana", "Anchor", "TypeScript"],
    link: "https://github.com/hqBrimax/rampart",
    status: "Shipped",
  },
  {
    title: "Sentinel",
    description:
      "AI payment security layer. Policy engine with spending caps, allowlists, human approval thresholds, TEE attestation, and audit trails. Default-deny: no policy = no payments.",
    tech: ["Python", "FastAPI", "Ed25519", "HashiCorp Vault", "SQLite"],
    link: "https://github.com/hqBrimax/sentinel",
    status: "Shipped",
  },
  {
    title: "SolAudit",
    description:
      "Solana vulnerability detection eval. 10-task suite covering CPI, signer checks, PDA validation, account ownership, reentrancy. Tests whether frontier AI models can find real bugs.",
    tech: ["Python", "Solana", "Anchor", "LLM Eval"],
    link: "https://github.com/hqBrimax/solaudit",
    status: "Shipped",
  },
  {
    title: "Intel (Crypto Research)",
    description:
      "AI research and writing workspace. Research pipeline with citation validation, knowledge base with full-text search, X writing style engine, and personalized content generation.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "RelayStation"],
    link: "https://github.com/hqBrimax/intel",
    status: "Shipped",
  },
  {
    title: "PayGuard",
    description:
      "Agent payment security with on-chain policy enforcement. Guards AI agent transactions before signing. Spending limits, allowlists, and audit trails.",
    tech: ["TypeScript", "Solana", "Policy Engine"],
    link: "https://github.com/hqBrimax/payguard",
    status: "Shipped",
  },
  {
    title: "BoxOS",
    description:
      "Go modular monolith. Stages 0-3 complete with persistent storage pending. Clean architecture with dependency injection and domain-driven design.",
    tech: ["Go", "PostgreSQL", "Modular Monolith"],
    link: "https://github.com/hqBrimax/boxos",
    status: "In Progress",
  },
  {
    title: "Scout",
    description:
      "Private Rust contract-hunting engine for finding vulnerabilities in deployed EVM contracts. Radar → surface → prove → report pipeline with Immunefi bounty radar.",
    tech: ["Rust", "EVM", "Immunefi"],
    link: "https://github.com/NathanOyewole/scout",
    status: "Shipped",
  },
  {
    title: "Prologue",
    description:
      "Professional screenplay writing app with industry formatting, cloud sync, AI-assisted writing, and password-protected sharing.",
    tech: ["Expo", "TypeScript", "Supabase", "OpenRouter"],
    link: "https://github.com/NathanOyewole/prologue",
    status: "Shipped",
  },
];