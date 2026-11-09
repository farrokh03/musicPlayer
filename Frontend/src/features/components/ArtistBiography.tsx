import { SectionHeading } from "./DashboardPrimitives";
import type { Artist } from "../types/artist.types";

export default function ArtistBiography({ artist }: { artist: Artist }) {
  return (
    <section className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <SectionHeading title="About the Artist" action="Artist bio" />
      <h2 className="text-lg font-semibold text-[#f5edf2]">{artist.name}</h2>
      <p className="mt-3 text-sm leading-7 text-[#b9aab1]">{artist.bio}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {artist.genres.map((genre) => (
          <span
            key={genre}
            className="rounded-full border border-[#51202d] bg-[#1a0d13] px-3 py-1 text-[10px] text-[#d6c2cb]"
          >
            {genre}
          </span>
        ))}
      </div>
    </section>
  );
}
