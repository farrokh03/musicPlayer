import { useCallback } from "react";
import { Disc3, Headphones } from "lucide-react";
import FeaturedPlaylists from "../../features/components/FeaturedPlaylists";
import FeaturedRelease from "../../features/components/FeaturedRelease";
import MadeForYou from "../../features/components/MadeForYou";
import NewReleases from "../../features/components/NewReleases";
import PopularTracks from "../../features/components/PopularTracks";
import TopArtists from "../../features/components/TopArtists";
import { usePlayer } from "../../features/player/context/PlayerContext";
import { MOCK_FEATURED_RELEASE, MOCK_TRACKS } from "../../mocks/catalog.mock";
import type { Track } from "../../features/types/artist.types";

const featuredTrack = MOCK_TRACKS.find(
  (track) => track.title === MOCK_FEATURED_RELEASE.title,
);

export default function MusicDashboard() {
  const {
    track: currentTrack,
    playing,
    playTrack,
    togglePlay,
  } = usePlayer();

  const handleTrackToggle = useCallback(
    (selectedTrack: Track) => {
      if (currentTrack.id === selectedTrack.id) {
        togglePlay();
        return;
      }
      playTrack(selectedTrack);
    },
    [currentTrack.id, playTrack, togglePlay],
  );

  const handleFeaturedPlay = useCallback(() => {
    if (featuredTrack) handleTrackToggle(featuredTrack);
  }, [handleTrackToggle]);

  return (
    <main className="min-h-screen bg-[#090709] p-3 font-sans text-white sm:p-4">
      <div className="mx-auto max-w-350 space-y-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
          <FeaturedRelease
            isPlaying={Boolean(
              featuredTrack &&
                currentTrack.id === featuredTrack.id &&
                playing,
            )}
            onPlay={handleFeaturedPlay}
            onPause={togglePlay}
          />
          <PopularTracks
            currentTrackId={currentTrack.id}
            isPlaying={playing}
            onToggleTrack={handleTrackToggle}
          />
        </div>

        <MadeForYou />
        <NewReleases />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]">
          <FeaturedPlaylists />
          <TopArtists />
        </div>

        <div className="flex justify-center pb-3 pt-1">
          <div className="flex items-center gap-2 text-[#6c5260]">
            <Disc3 size={12} />
            <Headphones size={12} />
          </div>
        </div>
      </div>
    </main>
  );
}
