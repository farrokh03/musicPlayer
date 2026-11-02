import { Play } from "lucide-react";
import { MOCK_MIXES } from "../../mocks/catalog.mock";
import { AlbumArt, SectionHeading } from "./DashboardPrimitives";

export default function MadeForYou() {
  return (
    <section>
      <SectionHeading title="Made for You" action="‹   ›" />
      <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
        {MOCK_MIXES.map((mix) => (
          <button
            key={mix.id}
            className="group flex h-14.25 min-w-0 items-center gap-2 rounded-lg border border-[#30151d] bg-linear-to-br from-[#1b0d13] to-[#10090d] p-1.5 text-left transition hover:border-[#682333]"
          >
            <AlbumArt className="h-11 w-11" symbol="♫" />
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[8px] font-medium text-[#f0e4ec]">
                {mix.title}
              </span>
              <span className="mt-0.5 block truncate text-[7px] text-[#948291]">
                {mix.subtitle}
              </span>
            </span>
            <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/6 text-[#cbb8c6] transition group-hover:bg-[#f32648] group-hover:text-white">
              <Play size={8} fill="currentColor" />
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
