export function ArtistCard({
  portrait,
  name,
  genre,
  verified,
  following,
  editorial,
}: {
  portrait: string;
  name: string;
  genre?: string;
  verified?: boolean;
  following?: boolean;
  editorial?: boolean;
}) {
  const [isFollowing, setFollowing] = useState(Boolean(following));
  return (
    <article className={`artist-card ${editorial ? "editorial" : ""}`}>
      <div className="artist-image-wrap">
        <img alt={`${name} portrait`} className="artist-image" src={portrait} />
        <PlayOverlay />
      </div>
      <div className="artist-card-row">
        <div>
          <div className="artist-name">
            {name} {verified && <VerifiedBadge />}
          </div>
          {genre && <div className="artist-genre">{genre}</div>}
        </div>
        <div
          className={`follow-control ${isFollowing ? "following" : ""}`}
          onClick={() => setFollowing(!isFollowing)}
          role="button"
          tabIndex={0}
        >
          {isFollowing ? "FOLLOWING" : "FOLLOW"}
        </div>
      </div>
    </article>
  );
}
