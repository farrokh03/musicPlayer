/**
 * Backwards-compatible catalog entry point.
 * Domain data lives in one file per entity under src/mocks.
 */
export type { Artist, Track, Album, Playlist, MembershipPlan, MockUser } from "../features/types/artist.types";
export { MOCK_ARTISTS, getArtistById } from "./artist.mock";
export { MOCK_TRACKS } from "./tracks.mock";
export { MOCK_ALBUMS } from "./albums.mock";
export { MOCK_PLAYLISTS } from "./playlists.mock";
export { MOCK_MEMBERSHIP_PLANS } from "./memberships.mock";
export { MOCK_USERS } from "./users.mock";

import { MOCK_TRACKS } from "./tracks.mock";

export const MOCK_FEATURED_RELEASE = {
  id: "crimson-tide-single",
  title: "Crimson Tide",
  artist: "Neon Collapse",
  releaseType: "Single",
  year: 2025,
  trackCount: 2,
  genre: "Alternative / Electronic",
  cover: MOCK_TRACKS[0].cover,
};

export const MOCK_MIXES = [
  { id: "daily-mix-1", title: "Daily Mix 1", subtitle: "Made for you", cover: "from-rose-950 via-red-700 to-black" },
  { id: "chill-vibes", title: "Chill Vibes", subtitle: "Playlist · 72 tracks", cover: "from-slate-700 via-sky-900 to-black" },
  { id: "focus-flow", title: "Focus Flow", subtitle: "Playlist · 46 tracks", cover: "from-cyan-950 via-blue-800 to-black" },
  { id: "alternative-mix", title: "Alternative Mix", subtitle: "Playlist · 94 tracks", cover: "from-fuchsia-950 via-pink-700 to-indigo-950" },
];

export const MOCK_RELEASES = [
  { id: "fracture", title: "Fracture", subtitle: "Neon Collapse · Album · 2025", cover: MOCK_TRACKS[0].cover },
  { id: "midnight-bloom", title: "Midnight Bloom", subtitle: "The Lost Frequencies · Single", cover: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=600&h=600&fit=crop&auto=format" },
  { id: "afterglow", title: "Afterglow", subtitle: "Sofia Lane · Single · 2025", cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=600&h=600&fit=crop&auto=format" },
  { id: "voidwalk", title: "Voidwalk", subtitle: "VALE · Album · 2024", cover: MOCK_TRACKS[1].cover },
  { id: "dusk-protocol", title: "Dusk Protocol", subtitle: "Pale Signal · EP · 2025", cover: MOCK_TRACKS[2].cover },
];

export const MOCK_RECENT_ITEMS = [
  { id: "recent-alex-cole", title: "Alex Cole", subtitle: "Artist · 24 tracks", cover: "from-red-950 via-rose-700 to-black", symbol: "♫" },
  { id: "recent-fracture", title: "Fracture", subtitle: "Album · 2025", cover: "from-indigo-950 via-violet-600 to-fuchsia-950", symbol: "✦" },
  { id: "recent-late-night", title: "Late Night Vibes", subtitle: "Playlist · 58 tracks", cover: "from-cyan-950 via-pink-800 to-indigo-950", symbol: "≋" },
];

export const MOCK_TOP_ARTISTS = [
  { artistId: "neon-collapse", name: "Neon Collapse", listeners: "98.2K" },
  { artistId: "alex-cole", name: "Alex Cole", listeners: "124.5K" },
  { artistId: "vale", name: "VALE", listeners: "87.6K" },
  { artistId: "pale-signal", name: "Pale Signal", listeners: "76.3K" },
];

export const MOCK_LISTENING_ACTIVITY = {
  weekBars: [15, 25, 13, 31, 39, 18, 11, 28, 14, 37, 17, 23, 44, 16, 52, 29, 18, 36],
  totalTime: "2h 34m",
  topGenre: "Electronic",
  topGenrePlaylist: "Playlist · 58 tracks",
};
