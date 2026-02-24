import { ArrowRight } from "lucide-react";
import StatusBadge from "./StatusBadge";
export default function Hero() {
  return (
    <section className="py-20 flex flex-col items-start gap-4">
      <StatusBadge />

      <h1 className="text-5xl font-bold tracking-tight text-white">
        Building the <span className="text-zinc-500">future</span> of the web.
      </h1>
      <p className="text-lg text-zinc-400 max-w-md">
        Creative Engineer focused on building minimalist, high-perfomance tools and interface.
      </p>
      <button className="flex items-center gap-2 text-sm font-medium hover:text-blue-400 transition-colors">
        View Projects <ArrowRight size={16} />
      </button>
    </section>
  );
}
