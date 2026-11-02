import { useState } from "react";
import { Heart, ListPlus, MoreHorizontal, Play } from "lucide-react";

type TrackState = "default" | "playing" | "queued";
type TrackRowProps = {
  index: number; artwork: string; title: string; artist: string; featured?: string;
  album: string; duration: string; plays?: string; state?: TrackState;
  compact?: boolean; showPlays?: boolean; explicit?: boolean;
  quality?: "LOSSLESS" | "HI-RES"; onPlay?: () => void; onAddToQueue?: () => void;
};

export function TrackRow({
  index, artwork, title, artist, featured, album, duration, plays,
  state = "default", compact = false, showPlays = true, explicit = false,
  quality, onPlay, onAddToQueue,
}: TrackRowProps) {
  const [favorite, setFavorite] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={`track-row ${state} ${compact ? "compact" : ""}`}>
      <div className="track-index">{state === "playing" ? "♫" : String(index).padStart(2, "0")}</div>
      <div className="track-art-wrap">
        <img alt={`${album} artwork`} className="track-art" src={artwork} />
        <button className="row-play" type="button" onClick={onPlay} aria-label={`Play ${title}`}><Play size={15} fill="currentColor" /></button>
      </div>
      <div className="track-primary">
        <div className="track-title-line">
          <span className="track-title">{title}</span>
          {explicit && <span className="rounded border border-current px-1 text-[9px]">E</span>}
          {quality && <span className="rounded border border-current px-1 text-[9px]">{quality}</span>}
        </div>
        <div className="track-artist">{artist}{featured ? ` feat. ${featured}` : ""}</div>
      </div>
      <div className="track-album">{album}</div>
      {showPlays && <div className="track-plays">{plays || "—"}</div>}
      <div className="track-duration">{duration}</div>
      <div className="track-actions">
        <button type="button" aria-label={favorite ? "Remove from favorites" : "Add to favorites"} aria-pressed={favorite} onClick={() => setFavorite((current) => !current)}><Heart size={15} fill={favorite ? "currentColor" : "none"} /></button>
        <button type="button" aria-label="Add to queue" onClick={onAddToQueue}><ListPlus size={15} /></button>
        <div className="menu-anchor">
          <button type="button" aria-label="More actions" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)}><MoreHorizontal size={17} /></button>
          {menuOpen && <div className="track-context-menu" role="menu"><button type="button" role="menuitem" onClick={() => setFavorite(true)}>Add to favorites</button><button type="button" role="menuitem" onClick={onAddToQueue}>Add to queue</button></div>}
        </div>
      </div>
    </div>
  );
}
