export function TrackRow({
  index,
  artwork,
  title,
  artist,
  featured,
  album,
  duration,
  plays,
  state = "default",
  compact,
  showPlays = true,
  explicit,
  quality,
}: {
  index: number;
  artwork: string;
  title: string;
  artist: string;
  featured?: string;
  album: string;
  duration: string;
  plays?: string;
  state?: TrackState;
  compact?: boolean;
  showPlays?: boolean;
  explicit?: boolean;
  quality?: "LOSSLESS" | "HI-RES";
}) {
  const [favorite, setFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className={`track-row ${state} ${compact ? "compact" : ""}`}>
      <div className="track-index">
        {state === "playing" ? (
          <span className="equalizer">
            <i />
            <i />
            <i />
          </span>
        ) : (
          String(index).padStart(2, "0")
        )}
      </div>
      <div className="track-art-wrap">
        <img alt={`${album} artwork`} className="track-art" src={artwork} />
        <span className="row-play">
          <Icon name="play" size={15} />
        </span>
      </div>
      <div className="track-primary">
        <div className="track-title-line">
          <span className="track-title">{title}</span>
          {explicit && <ExplicitContentBadge />}
          {quality && <AudioQualityBadge label={quality} />}
        </div>
        <ArtistCreditList artist={artist} featured={featured} />
      </div>
      <div className="track-album">{album}</div>
      {showPlays && <div className="track-plays">{plays || "—"}</div>}
      <div className="track-duration">{duration}</div>
      <div className="track-actions">
        <Control
          active={favorite}
          icon="heart"
          label={favorite ? "Remove from favorites" : "Add to favorites"}
          onClick={() => setFavorite(!favorite)}
        />
        <Control icon="queue" label="Add to queue" />
        <div className="menu-anchor">
          <Control
            icon="more"
            label="More actions"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ContextMenu open={menuOpen} />
        </div>
      </div>
    </div>
  );
}
