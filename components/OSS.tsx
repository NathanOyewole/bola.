import { ossActivity } from "../data/oss";
import { Globe } from "lucide-react";

export default function OSS() {
  return (
    <section className="space-y-8">
      <h2 className="text-white font-semibold text-lg flex items-center gap-2">
        <span className="w-8 h-[1px] bg-zinc-800"></span>
        Ecosystem Interest
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ossActivity.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            className="p-5 rounded-xl border border-zinc-900 bg-zinc-950/20 hover:border-zinc-800 transition-all group"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-zinc-200 font-medium group-hover:text-blue-400">{item.name}</h3>
              <Globe size={14} className="text-zinc-600" />
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed mb-4">
              {item.description}
            </p>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-600 border border-zinc-800">
              {item.role}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
