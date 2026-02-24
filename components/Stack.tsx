import { group } from "console";

export default function Stack() {
  const stack = [
    { category: "Languages", items: ["Javascript", "TypeScript", "Rust", "Go"] },
    { category: "Frontend", items: ["React.js", "Next.js", "Tailwind"] },
    { category: "Backend", items: ["Node.js", "Supabase", "PostgreSQL"] },
    { category: "Workflow", items: ["Neovim", "Tmux", "Arc"] },
  ];

  return (
    <section className="space-y-8">
      <h2 className="text-white font-semibold text-lg flex items-center gap-2">
        <span className="w-8 h-[1px] bg-zinc-800"></span>
        mi Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stack.map((group) => (
          <div key={group.category} className="space-y-3">
            <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm text-zinc-400 hover:text-blue-400 transition-colors cursor-default">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
