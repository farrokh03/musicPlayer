import { MoreHorizontal } from "lucide-react";
import { ALL_TRACKS as tracks } from "../../mocks/tracks";

const formatDuration = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;

export default function Queue() {
  return (
    <section className="w-full rounded-xl border border-[#352027] bg-[#100b0e] p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between px-1">
        <h2 className="text-xs font-medium text-[#f5eaf0]">
          Queue <span className="ml-1 text-[10px] text-[#9d8c99]">{tracks.length}</span>
        </h2>
        <button type="button" className="text-[10px] text-[#a99aa6] transition hover:text-white">See All</button>
      </div>

      <div className="h-30 space-y-0.5 overflow-y-auto">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className={`group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition ${index === 0 ? "bg-linear-to-r from-[#351019] to-[#211015]" : "hover:bg-white/4"}`}
          >
            <span className="w-2 text-[10px] text-[#8e7c89]">{index + 1}</span>
            <img alt={`${track.title} artwork`} className="h-7 w-7 shrink-0 rounded-md object-cover" src={track.cover} />
            <span className="min-w-0 flex-1 truncate text-[11px] text-[#e7dce4]">{track.title}</span>
            <span className="text-[10px] tabular-nums text-[#a99aa6]">{formatDuration(track.duration)}</span>
            <button type="button" aria-label={`More options for ${track.title}`} className="rounded p-0.5 text-[#8e7c89] hover:text-white">
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
