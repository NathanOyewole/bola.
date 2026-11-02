export const projects = [
  {
    title: "Prologue",
    description:
      "Professional screenplay writing app with industry formatting, cloud sync, AI-assisted writing via OpenRouter, and password-protected sharing.",
    tech: ["Expo", "TypeScript", "Supabase", "OpenRouter"],
    link: "https://github.com/NathanOyewole/prologue",
    status: "Shipped",
  },
  {
    title: "GitForge",
    description:
      "Scan any public GitHub repo and get a structured LLM-assisted report: tech stack, walkthrough, key files, and how-to-run.",
    tech: ["Rust", "Axum", "Next.js", "Postgres", "OpenRouter"],
    link: "https://github.com/NathanOyewole/gitforge",
    status: "Shipped",
  },
  {
    title: "Grok Desk",
    description:
      "Autonomous AI trading desk on Solana. 5-agent pipeline (Scanner, Auditor, Analyst, Executor, Risk) that scans PumpFun migrations, runs 8-layer safety audits, scores with LLM, and executes trades via Telegram. PAPER/LIVE modes with stop-loss, trailing stop, and PnL tracking.",
    tech: ["Python", "Solana", "OpenRouter", "Telegram Bot", "SQLite"],
    link: "https://github.com/NathanOyewole/grok-desk",
    status: "Shipped",
  },
  {
    title: "WIF Desk",
    description:
      "AI trading agent on Robinhood Chain for the World is Flat Hackathon. Scans Uniswap V3 pools, audits ERC-20 contracts, scores with LLM, pushes alerts via Telegram.  burn flywheel on every trade.",
    tech: ["Python", "Robinhood Chain", "EVM", "Uniswap V3", "OpenRouter"],
    link: "https://github.com/NathanOyewole/wif-desk",
    status: "In Progress",
  },
  {
    title: "Scout",
    description:
      "Private Rust contract-hunting engine for finding vulnerabilities in deployed EVM contracts. Radar → surface → prove → report pipeline. Includes Immunefi bounty radar and local dashboard.",
    tech: ["Rust", "EVM", "Immunefi"],
    link: "https://github.com/NathanOyewole/scout",
    status: "Shipped",
  },
  {
    title: "Sol Hound",
    description:
      "Eval that tests whether AI models can identify subtle security vulnerabilities in Solana programs — CPI, signer checks, PDA validation, account ownership, and Anchor constraint bugs.",
    tech: ["Python", "Solana", "Anchor", "LLM Eval"],
    link: "https://github.com/NathanOyewole/solana-cpi-vuln-eval",
    status: "Shipped",
  },
];
