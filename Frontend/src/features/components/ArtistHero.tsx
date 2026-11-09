import { useEffect, useState } from "react";
import {
  Play,
  Shuffle,
  UserRound,
  Share2,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
  BadgeCheck,
} from "lucide-react";
import { MOCK_ARTISTS } from "../../mocks/catalog.mock";
import type { ArtistHeroProps } from "../types/artist.types";

// Keep the original three-slide experience while reading all artist details
// from the centralized catalog.
const FEATURED_ARTISTS = MOCK_ARTISTS.slice(0, 3);

export default function ArtistHero({
  autoPlay = true,
  interval = 6000,
  onPlay,
  onShuffle,
  onArtistClick,
  onArtistChange,
}: ArtistHeroProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const artist = FEATURED_ARTISTS[activeIndex] ?? FEATURED_ARTISTS[0];

  useEffect(() => {
    if (!autoPlay || FEATURED_ARTISTS.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % FEATURED_ARTISTS.length);
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval]);

  useEffect(() => {
    if (artist) onArtistChange?.(artist);
  }, [artist, onArtistChange]);

  if (!artist) return null;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % FEATURED_ARTISTS.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + FEATURED_ARTISTS.length) % FEATURED_ARTISTS.length,
    );
  };

  const toggleFollow = () => {
    setFollowing((current) => ({
      ...current,
      [artist.id]: !current[artist.id],
    }));
  };

  const shareArtist = async () => {
    const artistUrl = `${window.location.origin}/artist/${artist.id}`;

    try {
      if (navigator.share) {
        await navigator.share({ title: artist.name, url: artistUrl });
      } else {
        await navigator.clipboard.writeText(artistUrl);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      // Sharing was canceled or is unavailable in this browser.
    }
  };

  return (
    <section className="artist-hero">
      {FEATURED_ARTISTS.map((item, index) => (
        <div
          key={item.id}
          className={`artist-hero__background ${index === activeIndex ? "is-active" : ""}`}
          style={{ backgroundImage: `url("${item.cover}")` }}
          aria-hidden="true"
        />
      ))}

      <div className="artist-hero__overlay" />

      <div className="artist-hero__content" key={artist.id}>
        <button
          className="artist-hero__avatar-button"
          onClick={() => onArtistClick?.(artist.id)}
          aria-label={`Open ${artist.name} profile`}
        >
          <img className="artist-hero__avatar" src={artist.avatar} alt={artist.name} />
        </button>

        <div className="artist-hero__info">
          <span className="artist-hero__eyebrow">
            FEATURED ARTIST <span>♦</span>
          </span>

          <button
            className="artist-hero__name-button"
            onClick={() => onArtistClick?.(artist.id)}
          >
            <h1>{artist.name}</h1>
            {artist.verified && (
              <BadgeCheck size={18} fill="#E31837" color="#E31837" stroke="#fff" />
            )}
          </button>

          <div className="artist-hero__genres">
            {artist.genres.map((genre, index) => (
              <span key={genre}>
                {index > 0 && <i>·</i>}
                {genre}
              </span>
            ))}
          </div>

          <p className="artist-hero__bio">{artist.bio}</p>

          <div className="artist-hero__stats">
            <div>
              <strong>{artist.followers}</strong>
              <span>Followers</span>
            </div>
            <div>
              <strong>{artist.monthlyListeners}</strong>
              <span>Monthly Listeners</span>
            </div>
            <div>
              <strong>{artist.trackCount}</strong>
              <span>Tracks</span>
            </div>
          </div>

          <div className="artist-hero__actions">
            <button
              className="artist-btn artist-btn--primary"
              onClick={() => onPlay?.(artist.id)}
            >
              <Play size={15} fill="currentColor" />
              Play
            </button>

            <button className="artist-btn" onClick={() => onShuffle?.(artist.id)}>
              <Shuffle size={15} />
              Shuffle
            </button>

            <button
              className={`artist-btn ${following[artist.id] ? "is-following" : ""}`}
              onClick={toggleFollow}
            >
              <UserRound size={15} />
              {following[artist.id] ? "Following" : "Follow"}
            </button>

            <button
              className="artist-btn artist-btn--icon"
              aria-label="More artist actions"
              title="More actions"
            >
              <MoreHorizontal size={19} />
            </button>
          </div>
        </div>
      </div>

      <button className="artist-hero__share" onClick={shareArtist} aria-label="Share artist">
        <Share2 size={13} />
        {copied ? "Copied!" : "Share"}
      </button>

      <div className="artist-hero__navigation">
        <button onClick={previousSlide} aria-label="Previous artist">
          <ChevronLeft size={17} />
        </button>
        <button onClick={nextSlide} aria-label="Next artist">
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="artist-hero__pagination">
        {FEATURED_ARTISTS.map((item, index) => (
          <button
            key={item.id}
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${item.name}`}
            aria-current={index === activeIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
