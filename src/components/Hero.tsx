import { ArrowRight } from "lucide-react";
import StatusBadge from "./StatusBadge";
export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-start gap-4">
      <StatusBadge />

      <h1 className="text-5xl font-bold tracking-tight text-white">
        Security-first <span className="text-zinc-500">builder</span>.
      </h1>
      <p className="text-lg text-zinc-400 max-w-md">
        On-chain policy vaults, AI payment security, and Solana vulnerability research. Building security infrastructure for the AI agent economy.
      </p>
      <a
        href="#projects"
        className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors"
      >
        View Projects <ArrowRight size={16} />
      </a>
    </section>
  );
}