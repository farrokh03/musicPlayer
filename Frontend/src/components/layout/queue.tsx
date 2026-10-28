import { MoreHorizontal } from "lucide-react";
import { ALL_TRACKS as tracks } from "../../mocks/tracks";

export default function Queue() {
  return (
    <section className="w-full rounded-xl border border-[#352027] bg-[#100b0e] p-2.5 text-white">
      <div className="mb-2 flex items-center justify-between px-1">
        <h2 className="text-xs font-medium text-[#f5eaf0]">
          Queue <span className="ml-1 text-[10px] text-[#9d8c99]">12</span>
        </h2>
        <button className="text-[10px] text-[#a99aa6] transition hover:text-white">
          See All
        </button>
      </div>

      <div className="space-y-0.5 overflow-y-scroll h-30">
        {tracks.map((track, index) => (
          <div
            key={track.title}
            className={`group flex items-center gap-2 rounded-lg px-1.5 py-1.5 transition ${
              index === 0
                ? "bg-linear-to-r from-[#351019] to-[#211015]"
                : "hover:bg-white/4"
            }`}
          >
            <span className="w-2 text-[10px] text-[#8e7c89]">{index + 1}</span>

            <div
              className={`relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-linear-to-br ${track.cover}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_30%,rgba(255,255,255,0.28),transparent_45%)]" />
              <div className="absolute -bottom-2 -right-1 h-6 w-4 rotate-12 rounded-full bg-black/30 blur-[2px]" />
              {index === 0 && (
                <div className="absolute inset-0 flex items-center justify-center text-[13px] text-rose-200">
                  ♫
                </div>
              )}
            </div>

            <span className="min-w-0 flex-1 truncate text-[11px] text-[#e7dce4]">
              {track.title}
            </span>

            <span className="text-[10px] tabular-nums text-[#a99aa6]">
              {track.duration}
            </span>

            <button
              aria-label={`More options for ${track.title}`}
              className="rounded p-0.5 text-[#8e7c89] hover:text-white"
            >
              <MoreHorizontal size={15} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
