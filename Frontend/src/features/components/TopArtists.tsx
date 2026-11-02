import { MOCK_TOP_ARTISTS } from "../../mocks/catalog.mock";
import { AlbumArt, SectionHeading } from "./DashboardPrimitives";

export default function TopArtists() {
  return (
    <section className="min-w-0">
      <SectionHeading title="Top Artists" />
      <div className="space-y-1">
        {MOCK_TOP_ARTISTS.map((artist, index) => (
          <div key={artist.artistId} className="flex items-center gap-1.5">
            <span className="w-2 text-[7px] text-[#9a8795]">{index + 1}</span>
            <AlbumArt className="h-4 w-4 rounded-full" symbol="♫" />
            <p className="min-w-0 flex-1 truncate text-[7px] text-[#e6d9e3]">
              {artist.name}
            </p>
            <span className="text-[7px] text-[#998795]">
              {artist.listeners}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
