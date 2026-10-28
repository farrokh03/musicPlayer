import { Disc3 } from "lucide-react";

const items = [
  {
    title: "Alex Cole",
    subtitle: "Artist · 24 tracks",
    cover: "from-red-950 via-rose-700 to-black",
    symbol: "♫",
  },
  {
    title: "Neon Collapse",
    subtitle: "Album · 2025",
    cover: "from-indigo-950 via-violet-600 to-fuchsia-950",
    symbol: "✦",
  },
  {
    title: "Late Night Vibes",
    subtitle: "Playlist · 58 tracks",
    cover: "from-cyan-950 via-pink-800 to-indigo-950",
    symbol: "≋",
  },
];

export default function RecentlyPlayed() {
  return (
    <section className="w-full rounded-xl border border-[#352027] bg-[#100b0e] p-3 text-white">
      <h2 className="mb-3 text-xs font-medium text-[#f5eaf0]">
        Recently Played
      </h2>

      <div className="space-y-3">
        {items.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-3 rounded-lg text-left transition hover:bg-white/4"
          >
            <div
              className={`relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-linear-to-br ${item.cover}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.3),transparent_50%)]" />
              <span className="relative text-lg text-white/80">
                {item.symbol}
              </span>
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[11px] font-medium text-[#e8dce5]">
                {item.title}
              </p>
              <p className="mt-0.5 truncate text-[10px] text-[#968494]">
                {item.subtitle}
              </p>
            </div>

            <Disc3
              size={14}
              className="shrink-0 text-[#5d4354] transition group-hover:text-[#ff2854]"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
