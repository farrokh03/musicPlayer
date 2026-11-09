import { useCallback, useMemo, useState } from "react";
import GlobalHeader from "../../../components/layout/GlobalHeader";
import ArtistHero from "../../components/ArtistHero";
import ArtistNavigation, {
  type ArtistTab,
} from "../../components/ArtistNavigation";
import ArtistActivity from "../../components/ArtistActivity";
import ArtistBiography from "../../components/ArtistBiography";
import ArtistCollaborations from "../../components/ArtistCollaborations";
import ArtistDiscography from "../../components/ArtistDiscography";
import ArtistMembership from "../../components/ArtistMembership";
import ArtistPlaylists from "../../components/ArtistPlaylists";
import ArtistPublicStats from "../../components/ArtistPublicStats";
import ArtistSocialLinks from "../../components/ArtistSocialLinks";
import FeaturedRelease from "../../components/FeaturedRelease";
import PopularTracks from "../../components/PopularTracks";
import { usePlayer } from "../../player/context/PlayerContext";
import {
  MOCK_ARTIST_COLLABORATIONS,
  MOCK_ARTISTS,
  MOCK_FEATURED_RELEASE,
  MOCK_PLAYLISTS,
  MOCK_RELEASES,
  MOCK_TRACKS,
} from "../../../mocks/catalog.mock";
import type { Artist, ArtistActivityItem } from "../../types/artist.types";

export default function ArtistProfilePage() {
  const [activeTab, setActiveTab] = useState<ArtistTab>("Overview");
  const [activeArtistId, setActiveArtistId] = useState(
    MOCK_ARTISTS[0]?.id ?? "",
  );
  const artist = MOCK_ARTISTS.find((item) => item.id === activeArtistId) ?? MOCK_ARTISTS[0];
  const { playTrack, togglePlay, setShuffle } = usePlayer();

  const artistTracks = useMemo(
    () => MOCK_TRACKS.filter((track) => track.artist === artist.name),
    [artist.name],
  );
  const artistReleases = useMemo(
    () => MOCK_RELEASES.filter((release) => release.artist === artist.name),
    [artist.name],
  );
  const artistPlaylists = useMemo(
    () =>
      MOCK_PLAYLISTS.filter(
        (playlist) => playlist.owner.toLowerCase() === artist.name.toLowerCase(),
      ),
    [artist.name],
  );
  const artistCollaborations =
    MOCK_ARTIST_COLLABORATIONS[artist.id] ?? [];
  const artistActivity = useMemo<ArtistActivityItem[]>(
    () =>
      artistReleases.map((release) => ({
        id: release.id,
        title: `New release: ${release.title}`,
        description: [
          release.releaseType ?? "Release",
          release.year ? String(release.year) : undefined,
        ]
          .filter(Boolean)
          .join(" · "),
        date: release.year ? String(release.year) : "Recently",
        kind: "release" as const,
      })),
    [artistReleases],
  );
  const featuredRelease =
    MOCK_FEATURED_RELEASE.artist === artist.name ? MOCK_FEATURED_RELEASE : null;

  const handleArtistChange = useCallback((selectedArtist: Artist) => {
    setActiveArtistId(selectedArtist.id);
  }, []);

  const handlePlayArtist = useCallback(
    (artistId: string) => {
      const selectedArtist = MOCK_ARTISTS.find((item) => item.id === artistId);
      const firstTrack = MOCK_TRACKS.find(
        (track) => track.artist === selectedArtist?.name,
      );
      if (firstTrack) playTrack(firstTrack);
    },
    [playTrack],
  );

  const handleShuffleArtist = useCallback(
    (artistId: string) => {
      const selectedArtist = MOCK_ARTISTS.find((item) => item.id === artistId);
      const firstTrack = MOCK_TRACKS.find(
        (track) => track.artist === selectedArtist?.name,
      );
      if (!firstTrack) return;
      setShuffle(true);
      playTrack(firstTrack);
    },
    [playTrack, setShuffle],
  );

  const handleFeaturedPlay = useCallback(() => {
    if (!featuredRelease) return;
    const track =
      artistTracks.find((item) => item.title === featuredRelease.title) ??
      artistTracks[0];
    if (track) playTrack(track);
  }, [artistTracks, featuredRelease, playTrack]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_1fr]">
              {featuredRelease && (
                <FeaturedRelease
                  release={featuredRelease}
                  onPlay={handleFeaturedPlay}
                  onPause={togglePlay}
                />
              )}
              <PopularTracks
                tracks={artistTracks.slice(0, 5)}
                onPlayTrack={playTrack}
                onPauseTrack={togglePlay}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
              <ArtistBiography artist={artist} />
              <ArtistPublicStats artist={artist} />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <ArtistDiscography releases={artistReleases} />
              <ArtistPlaylists playlists={artistPlaylists} />
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <ArtistCollaborations collaborations={artistCollaborations} />
              <ArtistActivity items={artistActivity} />
            </div>

            <ArtistSocialLinks links={artist.socialLinks ?? []} />
          </div>
        );

      case "Releases":
        return <ArtistDiscography releases={artistReleases} />;

      case "Tracks":
        return (
          <PopularTracks
            tracks={artistTracks}
            onPlayTrack={playTrack}
            onPauseTrack={togglePlay}
          />
        );

      case "Albums":
        return (
          <ArtistDiscography releases={artistReleases} releaseType="Album" />
        );

      case "About":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
              <ArtistBiography artist={artist} />
              <ArtistPublicStats artist={artist} />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              <ArtistCollaborations collaborations={artistCollaborations} />
              <ArtistActivity items={artistActivity} />
            </div>
            <ArtistSocialLinks links={artist.socialLinks ?? []} />
          </div>
        );

      case "Support":
        return <ArtistMembership artist={artist} />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#090709] p-2 text-white">
      <GlobalHeader />
      <ArtistHero
        onArtistChange={handleArtistChange}
        onPlay={handlePlayArtist}
        onShuffle={handleShuffleArtist}
      />
      <ArtistNavigation
        activeTab={activeTab}
        onTabChange={setActiveTab}
        sticky
      />
      <main className="mx-auto max-w-350 space-y-4 p-3 sm:p-4">
        <div
          id={`artist-panel-${activeTab.toLowerCase()}`}
          role="tabpanel"
          aria-labelledby={`artist-tab-${activeTab.toLowerCase()}`}
        >
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
}
