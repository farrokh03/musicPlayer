export function PlaylistCard({
  artwork,
  title,
  creator,
  tracks,
  creatorType,
}: {
  artwork: string;
  title: string;
  creator: string;
  tracks?: number;
  creatorType: "artist" | "platform";
}) {
  const [menu, setMenu] = useState(false);
  return (
    <article className="media-card playlist-card">
      <div className="artwork-wrap">
        <img alt={`${title} cover`} className="media-artwork" src={artwork} />
        <PlayOverlay />
        <div className="artwork-menu">
          <Control
            icon="more"
            label="Playlist actions"
            onClick={() => setMenu(!menu)}
          />
          <ContextMenu open={menu} />
        </div>
        <span className={`curator-tag ${creatorType}`}>
          {creatorType === "platform" ? "CRIMSON SELECT" : "ARTIST PICK"}
        </span>
      </div>
      <div className="card-copy">
        <div className="card-title">{title}</div>
        <div className="card-meta">
          By {creator}
          {tracks ? ` · ${tracks} tracks` : ""}
        </div>
      </div>
    </article>
  );
}
