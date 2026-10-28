const SideMenu = ({ props }: any) => {
  const navItems = [
    ["home", "Home"],
    ["explore", "Explore"],
    ["search", "Search"],
    ["library", "Library"],
    ["queue", "Playlists"],
    ["radio", "Radio"],
    ["heart", "Favorites"],
    ["history", "History"],
  ];
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

  return (
    <aside className="nav-rail">
      <button
        className="brand"
        onClick={() => props.setMenu((v: any) => !v)}
        title="Collapse navigation"
      >
        <span className="brand-mark">
          <span />
        </span>
        <strong>CRIMSON</strong>
      </button>
      <nav className="nav-list" aria-label="Primary navigation">
        {navItems.map(([icon, label], i) => (
          <button
            key={label}
            onClick={() => label === "Playlists" && props.playlistOpen(true)}
            className={`nav-item ${i === 0 ? "active" : ""}`}
            title={label}
          >
            <Icon name={icon} />
            <span>{label}</span>
          </button>
        ))}
      </nav>
      <div className="rail-playlist">
        <p>YOUR MUSIC</p>
        <button>
          <span className="playlist-dot red" />
          After Dark
        </button>
        <button>
          <span className="playlist-dot violet" />
          Slow Signal
        </button>
        <button>
          <span className="playlist-dot sand" />
          Sunday AM
        </button>
      </div>
      <button className="nav-item rail-settings">
        <Icon name="settings" />
        <span>Settings</span>
      </button>
    </aside>
  );
};

export default SideMenu;
