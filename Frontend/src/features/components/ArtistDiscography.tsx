import { Disc3 } from "lucide-react";
import { AlbumArt, SectionHeading } from "./DashboardPrimitives";
import type { Release } from "../types/artist.types";

type ArtistDiscographyProps = {
  releases: Release[];
  releaseType?: "Single" | "EP" | "Album";
};

export default function ArtistDiscography({
  releases,
  releaseType,
}: ArtistDiscographyProps) {
  const visibleReleases = releaseType
    ? releases.filter((release) => release.releaseType === releaseType)
    : releases;

  return (
    <section className="min-w-0">
      <SectionHeading title={releaseType ? `${releaseType}s` : "Discography"} />
      {visibleReleases.length === 0 ? (
        <div className="rounded-xl border border-[#35151e] bg-[#100a0e] px-4 py-8 text-center">
          <Disc3 size={20} className="mx-auto text-[#704452]" aria-hidden="true" />
          <p className="mt-3 text-[11px] text-[#9b8998]">
            No {releaseType ? releaseType.toLowerCase() + "s" : "releases"} listed yet.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-4">
          {visibleReleases.map((release) => (
            <article
              key={release.id}
              className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-3"
            >
              <AlbumArt className={`aspect-square w-full ${release.cover}`} />
              <h3 className="mt-3 truncate text-[11px] font-semibold text-[#f0e4ec]">
                {release.title}
              </h3>
              <p className="mt-1 text-[10px] text-[#9b8998]">
                {[release.releaseType, release.year].filter(Boolean).join(" · ") || release.subtitle}
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
