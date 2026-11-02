import { MOCK_PLAYLISTS } from "../../mocks/catalog.mock";
import { AlbumArt, SectionHeading } from "./DashboardPrimitives";

export default function FeaturedPlaylists() {
  return (
    <section className="min-w-0">
      <SectionHeading title="Featured Playlists" />
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 xl:grid-cols-5">
        {MOCK_PLAYLISTS.map((playlist) => (
          <button
            key={playlist.id}
            className="flex min-w-0 items-center gap-1.5 rounded-md border border-[#32151e] bg-[#120a0e] p-1.5 text-left transition hover:border-[#652333]"
          >
            <AlbumArt className="h-10 w-10" symbol="♫" />
            <span className="min-w-0">
              <span className="block truncate text-[7px] font-medium text-[#eee1eb]">
                {playlist.title}
              </span>
              <span className="mt-1 block truncate text-[6px] text-[#968393]">
                Curated by {playlist.owner} · {playlist.subtitle}
              </span>
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
