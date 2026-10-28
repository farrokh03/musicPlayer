import { useState } from "react";

const bars = [
  15, 25, 13, 31, 39, 18, 11, 28, 14, 37, 17, 23, 44, 16, 52, 29, 18, 36,
];

export default function ListeningActivity() {
  const [period, setPeriod] = useState<"Week" | "Month">("Week");

  return (
    <section className="w-full rounded-xl border border-[#352027] bg-[#100b0e] p-3 text-white">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-xs font-medium text-[#f5eaf0]">
          Listening Activity
        </h2>
        <button
          onClick={() => setPeriod(period === "Week" ? "Month" : "Week")}
          className="text-[10px] text-[#a99aa6] hover:text-white"
        >
          {period === "Week" ? "See All" : "This Week"}
        </button>
      </div>

      <div className="mb-4 flex items-end gap-2">
        <div
          className="flex h-13.25 min-w-0 flex-1 items-end justify-between gap-0.75"
          aria-label="Listening activity bar chart"
        >
          {bars.map((height, index) => (
            <div
              key={index}
              className={`w-full max-w-1.75 rounded-t-xs transition-colors ${
                [1, 3, 8, 9].includes(index)
                  ? "bg-[#ff2854]"
                  : index === 14
                    ? "bg-[#57404f]"
                    : "bg-linear-to-t from-[#26141f] to-[#5b4055]"
              }`}
              style={{
                height: `${period === "Month" ? height * 0.8 : height}px`,
              }}
            />
          ))}
        </div>

        <div className="w-22 shrink-0 pb-0.5">
          <p className="text-sm font-semibold tracking-tight">2h 34m</p>
          <p className="text-[9px] text-[#a99aa6]">Listening time</p>
        </div>
      </div>

      <div className="rounded-lg border border-[#38212b] bg-[#130c11] p-2.5">
        <p className="mb-2 text-[11px] text-[#d9cbd5]">Top Genre</p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10px] text-[#e8dce5]">Electronic</p>
            <p className="mt-1 text-[9px] text-[#887785]">
              Playlist · 58 tracks
            </p>
          </div>

          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[5px] border-[#32121f]">
            <div className="absolute -inset-1.25 -rotate-45 rounded-full border-[5px] border-transparent border-t-[#ff2854] border-r-[#ff2854]" />
            <div className="h-5 w-5 rounded-full bg-[#1b0c14]" />
          </div>
        </div>
      </div>
    </section>
  );
}
