import { useState } from "react";
import { Play, BadgeCheck } from "lucide-react";

type ArtistCardProps = {
  portrait: string;
  name: string;
  genre?: string;
  verified?: boolean;
  following?: boolean;
  editorial?: boolean;
  onPlay?: () => void;
};

export function ArtistCard({
  portrait,
  name,
  genre,
  verified = false,
  following = false,
  editorial = false,
  onPlay,
}: ArtistCardProps) {
  const [isFollowing, setFollowing] = useState(following);

  return (
    <article className={`artist-card ${editorial ? "editorial" : ""}`}>
      <div className="artist-image-wrap">
        <img alt={`${name} portrait`} className="artist-image" src={portrait} />
        <button className="artist-play-overlay" type="button" onClick={onPlay} aria-label={`Play ${name}`}>
          <Play size={18} fill="currentColor" />
        </button>
      </div>
      <div className="artist-card-row">
        <div>
          <div className="artist-name">
            {name} {verified && <BadgeCheck aria-label="Verified artist" size={14} />}
          </div>
          {genre && <div className="artist-genre">{genre}</div>}
        </div>
        <button
          className={`follow-control ${isFollowing ? "following" : ""}`}
          type="button"
          onClick={() => setFollowing((current) => !current)}
          aria-pressed={isFollowing}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </button>
      </div>
    </article>
  );
}
