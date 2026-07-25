export default function StatusBadge() {
  const status = "In the Lab"; // imma toggle this to "Open for Work" later on tho!

  return (
    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 w-fit">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
      </span>
      <span className="text-[11px] font-medium tracking-wide text-zinc-300 uppercase">
        {status}
      </span>
    </div>
  );
}
