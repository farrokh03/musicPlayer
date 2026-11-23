import { useCallback, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
import type {
  Artist,
  ArtistActivityItem,
  Track,
} from "../../types/artist.types";

export default function ArtistProfilePage() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<ArtistTab>("Overview");
  const [activeArtistId, setActiveArtistId] = useState(() => {
    const requestedArtistId = searchParams.get("artist");
    return (
      MOCK_ARTISTS.find((item) => item.id === requestedArtistId)?.id ??
      MOCK_ARTISTS[0]?.id ??
      ""
    );
  });
  const artist =
    MOCK_ARTISTS.find((item) => item.id === activeArtistId) ?? MOCK_ARTISTS[0];
  const {
    track: currentTrack,
    playing,
    playTrack,
    togglePlay,
    setShuffle,
  } = usePlayer();

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
  const featuredTrack = useMemo(() => {
    if (!featuredRelease) return undefined;
    return (
      artistTracks.find((item) => item.title === featuredRelease.title) ??
      artistTracks[0]
    );
  }, [artistTracks, featuredRelease]);

  const handleArtistChange = useCallback((selectedArtist: Artist) => {
    setActiveArtistId(selectedArtist.id);
  }, []);

  const handleArtistClick = useCallback((artistId: string) => {
    setActiveArtistId(artistId);
    setActiveTab("Overview");
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
  }, [featuredTrack, handleTrackToggle]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="space-y-4">
            <div className={`grid grid-cols-1 gap-4 ${featuredRelease ? "xl:grid-cols-[1.2fr_1fr]" : ""}`}>
              {featuredRelease && (
                <FeaturedRelease
                  release={featuredRelease}
                  isPlaying={Boolean(
                    featuredTrack &&
                      currentTrack.id === featuredTrack.id &&
                      playing,
                  )}
                  onPlay={handleFeaturedPlay}
                  onPause={togglePlay}
                />
              )}
              <PopularTracks
                tracks={artistTracks.slice(0, 5)}
                currentTrackId={currentTrack.id}
                isPlaying={playing}
                onToggleTrack={handleTrackToggle}
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
            currentTrackId={currentTrack.id}
            isPlaying={playing}
            onToggleTrack={handleTrackToggle}
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
        onArtistClick={handleArtistClick}
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
