import { useState } from "react";
import { MoreHorizontal, Play, Plus, Share2, Shuffle } from "lucide-react";
import { MOCK_FEATURED_RELEASE } from "../../mocks/catalog.mock";
import { AlbumArt, SectionHeading } from "./DashboardPrimitives";

export default function FeaturedRelease() {
  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState(false);
  const release = MOCK_FEATURED_RELEASE;

  return (
    <section className="min-w-0">
      <SectionHeading title="Featured Release" />
      <div className="flex h-31.25 gap-3 rounded-lg border border-[#391720] bg-linear-to-br from-[#1b0c12] to-[#10090d] p-2.5">
        <AlbumArt
          className="h-full w-27 rounded-md border border-[#59202d]"
          image={release.cover}
          symbol="♫"
        />
        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-[6px] font-semibold uppercase tracking-wider text-[#ff435e]">
            New Release
          </p>
          <h3 className="mt-1 truncate text-[11px] font-semibold text-white">
            {release.title}
          </h3>
          <p className="mt-1 text-[8px] text-[#a997a4]">
            {release.releaseType} · {release.year} · {release.trackCount} tracks
          </p>
          <p className="mt-1 text-[8px] text-[#b9a9b6]">{release.artist}</p>
          <p className="mt-1 truncate text-[8px] text-[#c8b6c3]">
            {release.genre}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setPlaying((current) => !current)}
              className="flex h-5 items-center gap-1 rounded-full bg-[#f32648] px-3 text-[8px] font-medium text-white hover:bg-[#ff4561]"
            >
              <Play size={9} fill="currentColor" />
              {playing ? "Pause" : "Play"}
            </button>
            <button className="flex h-5 items-center gap-1 rounded-full border border-[#42202c] px-2 text-[8px] text-[#c6b4c1] hover:bg-white/5">
              <Shuffle size={9} /> Shuffle
            </button>
            <button
              onClick={() => setSaved((current) => !current)}
              className="flex h-5 items-center gap-1 rounded-full border border-[#42202c] px-2 text-[8px] text-[#c6b4c1] hover:text-[#ff4561]"
            >
              <Plus size={9} /> {saved ? "Saved" : "Save"}
            </button>
            <button
              aria-label="Share release"
              className="rounded-full border border-[#42202c] p-1.5 text-[#c6b4c1] hover:text-white"
            >
              <Share2 size={9} />
            </button>
            <button
              aria-label="More release options"
              className="p-1 text-[#a997a4]"
            >
              <MoreHorizontal size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
