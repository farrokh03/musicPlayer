import { usePlayer } from "./../../features/player/context/PlayerContext";
import { useState } from "react";
import { ALL_TRACKS } from "./../../mocks/tracks";
import { Shuffle } from "lucide-react";
export function GlobalMiniPlayer({ props }: any) {
  const [libraryTracks, setLibraryTracks] = useState(ALL_TRACKS.slice(0, 5));

  const {
    volume,
    track,
    playing,
    progress,
    shuffle,
    repeat,
    liked,
    setRepeat,
    setLiked,
    setShuffle,
    setProgress,
    setPlaying,
    setVolume,
    previousTrack,
    nextTrack,
  } = usePlayer();

  const elapsed = Math.floor((track.duration * progress) / 100);
  const fmt = (seconds: number) =>
    `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;

  const paths: Record<string, React.ReactNode> = {
    home: (
      <>
        <path d="M3 11 12 3l9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    explore: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    library: (
      <>
        <path d="M4 4h5v16H4zM11 4h9v6h-9zM11 12h9v8h-9z" />
      </>
    ),
    radio: (
      <>
        <circle cx="12" cy="12" r="2" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 7.8a6 6 0 0 1 0 8.4M4.9 4.9a10 10 0 0 0 0 14.2M19.1 4.9a10 10 0 0 1 0 14.2" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5a5.5 5.5 0 0 0 1-8.9Z" />
    ),
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5M12 7v5l3 2" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8M10 20h4" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1A1.7 1.7 0 0 0 9 4.6a1.7 1.7 0 0 0 1-1.6v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    share: (
      <>
        <circle cx="18" cy="5" r="2" />
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="19" r="2" />
        <path d="m8 11 8-5M8 13l8 5" />
      </>
    ),
    download: (
      <>
        <path d="M12 3v12m-4-4 4 4 4-4" />
        <path d="M4 19h16" />
      </>
    ),
    plus: <path d="M12 5v14M5 12h14" />,
    shuffle: (
      <>
        <path d="M4 7h2c5 0 7 10 12 10h2M18 15l2 2-2 2M4 17h2c1.5 0 2.7-.8 3.8-2M14.2 9C15.3 7.8 16.5 7 18 7h2M18 5l2 2-2 2" />
      </>
    ),
    repeat: (
      <>
        <path d="M17 2l3 3-3 3M3 11V9a4 4 0 0 1 4-4h13M7 22l-3-3 3-3M21 13v2a4 4 0 0 1-4 4H4" />
      </>
    ),
    volume: (
      <>
        <path d="M11 5 6 9H3v6h3l5 4V5Z" />
        <path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" />
      </>
    ),
    queue: (
      <>
        <path d="M4 6h12M4 12h10M4 18h8" />
        <path d="m17 15 4 3-4 3v-6Z" />
      </>
    ),
    lyrics: (
      <>
        <path d="M5 5h14M5 10h10M5 15h12M5 20h7" />
      </>
    ),
    expand: (
      <>
        <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    device: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  };
  function Icon({
    name,
    size = 18,
    fill = "none",
  }: {
    name: string;
    size?: number;
    fill?: string;
  }) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill={fill}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {paths[name]}
      </svg>
    );
  }

  function IconButton({
    icon,
    label,
    active,
    onClick,
    className = "",
  }: {
    icon: string;
    label: string;
    active?: boolean;
    onClick?: () => void;
    className?: string;
  }) {
    return (
      <button
        type="button"
        title={label}
        aria-label={label}
        onClick={onClick}
        className={`icon-button ${active ? "is-active" : ""} ${className}`}
      >
        <Icon name={icon} />
      </button>
    );
  }
  return (
    <section className="studio panel">
      <div className="section-kicker">
        <span>NOW PLAYING</span>
        <button>
          <Icon name="more" />
        </button>
      </div>
      {/* <div className="artwork-wrap">
        <img className="artwork-glow" src={track.cover} alt="" />
        <img
          className="artwork"
          src={track.cover}
          alt={`${track.album} cover`}
        />
        <div className="quality-badge">
          <span /> LOSSLESS · 24-BIT
        </div>
        <button className="art-play" onClick={() => setPlaying(!playing)}>
          {playing ? (
            <span className="pause-shape">
              <i />
              <i />
            </span>
          ) : (
            <span className="play-shape" />
          )}
        </button>
      </div> */}
      <div className="track-heading">
        <div>
          <h1>{track.title}</h1>
          <p>{track.artist}</p>
        </div>
        <IconButton
          icon="heart"
          label={liked ? "Remove from favorites" : "Add to favorites"}
          active={liked}
          onClick={() => setLiked(!liked)}
        />
      </div>
      {/* <p className="metadata">
        {track.album} <span>·</span> {track.id} <span>·</span> {track.duration}
      </p> */}
      {/* <div className="tags">
        <span>Electronic</span>
        <span>Atmospheric</span>
        <span>Late night</span>
      </div> */}
      {/* <div className="quick-actions">
        <button
          onClick={() => {
            if (!libraryTracks.some((t) => t.id === track.id))
              setLibraryTracks((list) => [...list, track]);
            props.setplaylistopen(true);
          }}
        >
          <Icon name="plus" /> Playlist
        </button>
        <button>
          <Icon name="share" /> Share
        </button>
        <button>
          <Icon name="download" /> Offline
        </button>
        <button>
          <Icon name="more" />
        </button>
      </div> */}
      <div className="visualizer" aria-label="Audio visualization">
        {Array.from({ length: 28 }, (_, i) => (
          <span
            key={i}
            className={playing ? "moving" : ""}
            style={{ "--i": i } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="player-controls">
        <IconButton
          icon="shuffle"
          label="Shuffle"
          active={shuffle}
          onClick={() => setShuffle(!Shuffle)}
        />
        <button
          className="skip"
          onClick={previousTrack}
          aria-label="Previous track"
        >
          <span className="prev-icon" />
        </button>
        <button
          className="main-play"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <span className="pause-shape">
              <i />
              <i />
            </span>
          ) : (
            <span className="play-shape" />
          )}
        </button>
        <button className="skip" onClick={nextTrack} aria-label="Next track">
          <span className="next-icon" />
        </button>
        <IconButton
          icon="repeat"
          label="Repeat"
          active={repeat}
          onClick={() => setRepeat(!repeat)}
        />
      </div>
      {/* <div className="timeline compact">
        <span>{fmt(elapsed)}</span>
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(e) => setProgress(+e.target.value)}
          style={{ "--value": `${progress}%` } as React.CSSProperties}
        />
        <span>-{fmt(track.duration - elapsed)}</span>
      </div>
      <div className="utility-row">
        <div>
          <Icon name="volume" size={16} />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(+e.target.value)}
            style={{ "--value": `${volume}%` } as React.CSSProperties}
          />
        </div>
        <button>1.0×</button>
        <button title="Sleep timer">
          <Icon name="clock" size={15} /> 30m
        </button>
        <button>
          <Icon name="device" size={15} /> Studio Display
        </button>
      </div> */}
    </section>
  );
}
