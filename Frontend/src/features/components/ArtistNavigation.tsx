export const artistTabs = [
  "Overview",
  "Releases",
  "Tracks",
  "Albums",
  "About",
  "Support",
] as const;

export type ArtistTab = (typeof artistTabs)[number];

export interface ArtistNavigationProps {
  activeTab: ArtistTab;
  onTabChange?: (tab: ArtistTab) => void;
  sticky?: boolean;
  direction?: "ltr" | "rtl";
}

export default function ArtistNavigation({
  activeTab,
  onTabChange,
  sticky = false,
  direction = "ltr",
}: ArtistNavigationProps) {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const last = artistTabs.length - 1;
    const forward = direction === "rtl" ? -1 : 1;
    let next = index;
    if (event.key === "Home") next = 0;
    else if (event.key === "End") next = last;
    else if (event.key === "ArrowRight")
      next = (index + forward + artistTabs.length) % artistTabs.length;
    else next = (index - forward + artistTabs.length) % artistTabs.length;
    const tab = artistTabs[next];
    onTabChange?.(tab);
    document.getElementById(`artist-tab-${tab.toLowerCase()}`)?.focus();
  };

  return (
    <nav
      className={`artist-navigation ${sticky ? "artist-navigation-sticky" : ""}`}
      aria-label="Artist sections"
      dir={direction}
    >
      <div className="artist-tabs" role="tablist">
        {artistTabs.map((tab, index) => {
          const active = tab === activeTab;
          return (
            <button
              id={`artist-tab-${tab.toLowerCase()}`}
              className={`artist-tab ${active ? "artist-tab-active" : ""}`}
              key={tab}
              role="tab"
              aria-selected={active}
              tabIndex={active ? 0 : -1}
              onClick={() => onTabChange?.(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span>{tab}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
