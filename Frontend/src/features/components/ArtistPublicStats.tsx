import { Headphones, Music2, Users } from "lucide-react";
import type { Artist } from "../types/artist.types";

export default function ArtistPublicStats({ artist }: { artist: Artist }) {
  const stats = [
    { label: "Followers", value: artist.followers, icon: Users },
    { label: "Monthly listeners", value: artist.monthlyListeners, icon: Headphones },
    { label: "Tracks", value: artist.trackCount.toLocaleString(), icon: Music2 },
  ];

  return (
    <section className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <h2 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f5edf2]">
        Public stats
      </h2>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-lg border border-white/5 bg-white/[0.025] p-3"
          >
            <Icon size={16} className="text-[#f04460]" aria-hidden="true" />
            <p className="mt-3 text-lg font-semibold text-white">{value}</p>
            <p className="mt-1 text-[10px] text-[#9b8998]">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
