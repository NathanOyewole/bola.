import { link } from "fs";
import { ExternalLink } from "lucide-react";
import { title } from "process";

interface ProjectProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  status: string;
}

export default function ProjectCard({ title, description, tech, link, status }: ProjectProps) {
  return (
    <div className="group relative p-6 rounded-2xl border border-zinc-900 bg-zinc-950/50 hover:bg-zinc-900/40 hover:border-zinc-800 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg gruop-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
            {status}
          </span>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      <p className="text-sm leading-relaxed mb-6 text-zinc-400 group-hover:text-zinc-300 transition-colors">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span
            key={item}
            className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-500 group-hover:border-zinc-700 group-hover:text-zinc-300 transition-all"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
