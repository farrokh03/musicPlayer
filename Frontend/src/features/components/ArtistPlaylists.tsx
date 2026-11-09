import { ListMusic } from "lucide-react";
import { AlbumArt } from "./DashboardPrimitives";
import type { Playlist } from "../types/artist.types";

export default function ArtistPlaylists({ playlists }: { playlists: Playlist[] }) {
  return (
    <section className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <h2 className="text-[11px] font-semibold text-[#f5edf2]">Artist playlists</h2>
      {playlists.length === 0 ? (
        <div className="py-7 text-center">
          <ListMusic size={19} className="mx-auto text-[#704452]" aria-hidden="true" />
          <p className="mt-3 text-[11px] text-[#9b8998]">
            This artist has not shared any playlists yet.
          </p>
        </div>
      ) : (
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {playlists.map((playlist) => (
            <article
              key={playlist.id}
              className="flex min-w-0 items-center gap-3 rounded-lg border border-white/5 bg-white/[0.025] p-2"
            >
              <AlbumArt className={`h-12 w-12 ${playlist.cover}`} />
              <div className="min-w-0">
                <h3 className="truncate text-[11px] font-medium text-[#eee2eb]">
                  {playlist.title}
                </h3>
                <p className="mt-1 truncate text-[10px] text-[#9b8998]">
                  {playlist.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
