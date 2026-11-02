import { useState } from "react";
import { MoreHorizontal, Play } from "lucide-react";

type PlaylistCardProps = {
  artwork: string; title: string; creator: string; tracks?: number;
  creatorType: "artist" | "platform"; onPlay?: () => void;
};

export function PlaylistCard({ artwork, title, creator, tracks, creatorType, onPlay }: PlaylistCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <article className="media-card playlist-card">
      <div className="artwork-wrap">
        <img alt={`${title} cover`} className="media-artwork" src={artwork} />
        <button className="artwork-play" type="button" onClick={onPlay} aria-label={`Play ${title}`}><Play size={18} fill="currentColor" /></button>
        <div className="artwork-menu">
          <button type="button" aria-label="Playlist actions" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}><MoreHorizontal size={18} /></button>
          {menuOpen && <div className="playlist-context-menu" role="menu"><button type="button" role="menuitem" onClick={onPlay}>Play playlist</button><button type="button" role="menuitem" onClick={() => setMenuOpen(false)}>Close</button></div>}
        </div>
        <span className={`curator-tag ${creatorType}`}>{creatorType === "platform" ? "CRIMSON SELECT" : "ARTIST PICK"}</span>
      </div>
      <div className="card-copy">
        <div className="card-title">{title}</div>
        <div className="card-meta">By {creator}{tracks ? ` · ${tracks} tracks` : ""}</div>
      </div>
    </article>
  );
}
