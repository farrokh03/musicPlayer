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

// import "./ArtistHeroSlider.css";

type ArtistSlide = {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  genres: string[];
  bio: string;
  followers: string;
  monthlyListeners: string;
  trackCount: number;
  verified: boolean;
};

const ARTISTS: ArtistSlide[] = [
  {
    id: "alex-cole",
    name: "Alex Cole",
    avatar:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format",
    cover:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format",
    genres: ["Alternative", "Electronic", "Indie"],
    bio: "Alex Cole is a genre-blending artist known for atmospheric soundscapes and emotional storytelling. His music explores the space between light and darkness.",
    followers: "124.5K",
    monthlyListeners: "583.2K",
    trackCount: 24,
    verified: true,
  },
  {
    id: "vale",
    name: "Vale",
    avatar:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop&auto=format",

    cover:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop&auto=format",

    genres: ["Dark Pop", "Electronic", "Alternative"],
    bio: "Explore immersive soundscapes, dark melodies, and a new perspective on alternative electronic music.",
    followers: "98.2K",
    monthlyListeners: "412.8K",
    trackCount: 18,
    verified: true,
  },
  {
    id: "cassian",
    name: "Cassian",
    avatar:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop&auto=format",

    cover:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop&auto=format",

    genres: ["Electronic", "Melodic Techno", "Indie"],
    bio: "A sonic journey through atmospheric rhythms, cinematic textures, and unforgettable melodies.",
    followers: "76.8K",
    monthlyListeners: "325.4K",
    trackCount: 31,
    verified: false,
  },
];

type Props = {
  autoPlay?: boolean;
  interval?: number;
  onPlay?: (artistId: string) => void;
  onShuffle?: (artistId: string) => void;
  onArtistClick?: (artistId: string) => void;
};

export default function ArtistHeroSlider({
  autoPlay = true,
  interval = 6000,
  onPlay,
  onShuffle,
  onArtistClick,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [following, setFollowing] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const artist = ARTISTS[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % ARTISTS.length);
  };

  const previousSlide = () => {
    setActiveIndex(
      (current) => (current - 1 + ARTISTS.length) % ARTISTS.length,
    );
  };

  useEffect(() => {
    if (!autoPlay) return;

    const timer = window.setInterval(nextSlide, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, interval]);

  const toggleFollow = () => {
    setFollowing((current) => ({
      ...current,
      [artist.id]: !current[artist.id],
    }));
  };

  const shareArtist = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: artist.name,
          url: `${window.location.origin}/artist/${artist.id}`,
        });
      } else {
        await navigator.clipboard.writeText(
          `${window.location.origin}/artist/${artist.id}`,
        );
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    } catch {
      // Sharing canceled or unavailable.
    }
  };

  return (
    <section className="artist-hero">
      {ARTISTS.map((item, index) => (
        <div
          key={item.id}
          className={`artist-hero__background ${
            index === activeIndex ? "is-active" : ""
          }`}
          style={{
            backgroundImage: `url("${item.cover}")`,
          }}
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
          <img
            className="artist-hero__avatar"
            src={artist.avatar}
            alt={artist.name}
          />
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
              <BadgeCheck
                size={18}
                fill="#E31837"
                color="#E31837"
                stroke="#fff"
              />
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

            <button
              className="artist-btn"
              onClick={() => onShuffle?.(artist.id)}
            >
              <Shuffle size={15} />
              Shuffle
            </button>

            <button
              className={`artist-btn ${
                following[artist.id] ? "is-following" : ""
              }`}
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

      <button
        className="artist-hero__share"
        onClick={shareArtist}
        aria-label="Share artist"
      >
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
        {ARTISTS.map((item, index) => (
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
