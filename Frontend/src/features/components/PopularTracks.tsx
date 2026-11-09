import { useState } from "react";
import { Heart, MoreHorizontal } from "lucide-react";
import { MOCK_TRACKS } from "../../mocks/catalog.mock";
import { SectionHeading } from "./DashboardPrimitives";
import type { Track } from "../types/artist.types";

function formatDuration(durationInSeconds: number) {
  const minutes = Math.floor(durationInSeconds / 60);
  const seconds = durationInSeconds % 60;
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

type PopularTracksProps = {
  tracks?: Track[];
  onPlayTrack?: (track: Track) => void;
  onPauseTrack?: (track: Track) => void;
};

export default function PopularTracks({
  tracks = MOCK_TRACKS,
  onPlayTrack,
  onPauseTrack,
}: PopularTracksProps) {
  const [favorites, setFavorites] = useState<number[]>([]);
  const [playingTrackId, setPlayingTrackId] = useState<number | null>(null);

  return (
    <section className="min-w-0 h-40 overflow-y-auto text-[14px]">
      <SectionHeading title="Popular Tracks" />
      <div className="rounded-lg border border-[#35151e] bg-[#100a0e] px-2">
        {tracks.length === 0 ? (
          <p className="px-3 py-8 text-center text-[11px] text-[#9b8998]">
            No tracks have been published here yet.
          </p>
        ) : tracks.map((track, index) => {
          const isFavorite = favorites.includes(track.id);
          const isPlaying = playingTrackId === track.id;

          return (
            <div
              key={track.id}
              className="flex h-14 items-center gap-2 border-b border-white/4.5 last:border-0"
            >
              <span className="w-4 text-center text-[12px] text-[#a18e9d]">
                {index + 1}
              </span>
              <button
                aria-label={`${isPlaying ? "Pause" : "Play"} ${track.title}`}
                onClick={() => {
                  if (isPlaying) onPauseTrack?.(track);
                  else onPlayTrack?.(track);
                  setPlayingTrackId(isPlaying ? null : track.id);
                }}
                className="relative shrink-0"
              >
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={track.cover}
                  alt={`${track.album} artwork`}
                />
                {isPlaying && (
                  <span className="absolute inset-0 flex items-center justify-center rounded-full bg-black/55 text-sm text-white">
                    ♫
                  </span>
                )}
              </button>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12px] text-[#eee2eb]">
                  {track.title}
                </p>
                <p className="truncate text-[10px] text-[#8f7d8c]">
                  {track.artist}
                </p>
              </div>
              <span className="w-8 text-right text-[12px] text-[#9b8998]">
                {formatDuration(track.duration)}
              </span>
              <button
                aria-label={`${isFavorite ? "Remove from" : "Add to"} favorites: ${track.title}`}
                onClick={() =>
                  setFavorites((current) =>
                    isFavorite
                      ? current.filter((id) => id !== track.id)
                      : [...current, track.id],
                  )
                }
                className={isFavorite ? "text-[#ff3155]" : "text-[#ff3155]/80 hover:text-[#ff3155]"}
              >
                <Heart size={10} fill={isFavorite ? "currentColor" : "none"} />
              </button>
              <button
                aria-label={`More options for ${track.title}`}
                className="text-[#8f7d8c] hover:text-white"
              >
                <MoreHorizontal size={12} />
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
