/**
 * Single source of truth for frontend mock content.
 * Keep entity IDs stable; UI components should import from this module
 * instead of declaring their own sample content.
 */

import type {
  Artist,
  ArtistCollaboration,
  FeaturedRelease,
  Playlist,
  Release,
  Track,
} from "../features/types/artist.types";
export type {
  Artist,
  ArtistActivityItem,
  ArtistCollaboration,
  ArtistCollaboration,
  ArtistHeroProps,
  ArtistSocialLink,
  FeaturedRelease,
  Playlist,
  Release,
  Track,
} from "../features/types/artist.types";

const artwork = {
  crimson: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format",
  vale: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop&auto=format",
  pale: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop&auto=format",
  cassian: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop&auto=format",
  mirror: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop&auto=format",
  halo: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop&auto=format",
  feral: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=600&fit=crop&auto=format",
  corvo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop&auto=format",
  aeon: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop&auto=format",
};

export const MOCK_ARTISTS: Artist[] = [
  {
    id: "alex-cole",
    name: "Alex Cole",
    avatar: artwork.crimson,
    cover: artwork.crimson,
    genres: ["Alternative", "Electronic", "Indie"],
    bio: "Alex Cole is a genre-blending artist known for atmospheric soundscapes and emotional storytelling. His music explores the space between light and darkness.",
    followers: "124.5K",
    monthlyListeners: "583.2K",
    trackCount: 24,
    verified: true,
  },
  {
    id: "vale",
    name: "VALE",
    avatar: artwork.vale,
    cover: artwork.vale,
    genres: ["Dark Pop", "Electronic", "Alternative"],
    bio: "Explore immersive soundscapes, dark melodies, and a new perspective on alternative electronic music.",
    followers: "98.2K",
    monthlyListeners: "412.8K",
    trackCount: 18,
    verified: true,
  },
  {
    id: "cassian",
    name: "Cassian",
    avatar: artwork.pale,
    cover: artwork.pale,
    genres: ["Electronic", "Melodic Techno", "Indie"],
    bio: "A sonic journey through atmospheric rhythms, cinematic textures, and unforgettable melodies.",
    followers: "76.8K",
    monthlyListeners: "325.4K",
    trackCount: 31,
    verified: false,
  },
  {
    id: "pale-signal",
    name: "Pale Signal",
    avatar: artwork.mirror,
    cover: artwork.mirror,
    genres: ["Ambient", "Electronic", "Alternative"],
    bio: "Minimal textures, distant vocals, and cinematic electronic sound.",
    followers: "76.3K",
    monthlyListeners: "298.1K",
    trackCount: 16,
    verified: true,
  },
];

export const MOCK_TRACKS: Track[] = [
  { id: 1, title: "Crimson Tide", artist: "Alex Cole", album: "Fracture", duration: 224, cover: artwork.crimson },
  { id: 2, title: "Dark Matter", artist: "VALE", album: "Voidwalk", duration: 198, cover: artwork.vale },
  { id: 3, title: "Hollow Echo", artist: "Pale Signal", album: "Dusk Protocol", duration: 261, cover: artwork.pale },
  { id: 4, title: "Burning Slow", artist: "Cassian", album: "Periphery", duration: 183, cover: artwork.cassian },
  { id: 5, title: "Nocturne 9", artist: "Mirror Teeth", album: "Low Signal", duration: 307, cover: artwork.mirror },
  { id: 6, title: "Glass Veins", artist: "Hλlo", album: "Spectral", duration: 215, cover: artwork.halo },
  { id: 7, title: "Undertow", artist: "Feral Lux", album: "Depths", duration: 243, cover: artwork.feral },
  { id: 8, title: "Ritual Static", artist: "Corvo", album: "Hexfield", duration: 189, cover: artwork.corvo },
  { id: 9, title: "Pale Frequency", artist: "AEON", album: "Stasis", duration: 272, cover: artwork.aeon },
  { id: 10, title: "Blood Circuit", artist: "Alex Cole", album: "Fracture", duration: 201, cover: artwork.crimson },
];

export const MOCK_FEATURED_RELEASE: FeaturedRelease = {
  id: "crimson-tide-single",
  title: "Crimson Tide",
  artist: "Alex Cole",
  releaseType: "Single",
  year: 2025,
  trackCount: 3,
  genre: "Alternative / Electronic",
  cover: artwork.crimson,
};

export const MOCK_PLAYLISTS: Playlist[] = [
  { id: "electronic-essentials", title: "Electronic Essentials", subtitle: "58 tracks", cover: "from-red-950 via-red-600 to-black", owner: "CRIMSON" },
  { id: "indie-dreams", title: "Indie Dreams", subtitle: "42 tracks", cover: "from-cyan-950 via-teal-700 to-black", owner: "CRIMSON" },
  { id: "late-night-vibes", title: "Late Night Vibes", subtitle: "58 tracks", cover: "from-indigo-950 via-violet-700 to-black", owner: "Alex Cole" },
  { id: "ambient-focus", title: "Ambient Focus", subtitle: "46 tracks", cover: "from-slate-800 via-blue-900 to-black", owner: "CRIMSON" },
  { id: "workout-energy", title: "Workout Energy", subtitle: "36 tracks", cover: "from-orange-950 via-red-800 to-black", owner: "CRIMSON" },
];

export const MOCK_MIXES = [
  { id: "daily-mix-1", title: "Daily Mix 1", subtitle: "Made for you", cover: "from-rose-950 via-red-700 to-black" },
  { id: "chill-vibes", title: "Chill Vibes", subtitle: "Playlist · 72 tracks", cover: "from-slate-700 via-sky-900 to-black" },
  { id: "focus-flow", title: "Focus Flow", subtitle: "Playlist · 46 tracks", cover: "from-cyan-950 via-blue-800 to-black" },
  { id: "alternative-mix", title: "Alternative Mix", subtitle: "Playlist · 94 tracks", cover: "from-fuchsia-950 via-pink-700 to-indigo-950" },
];

export const MOCK_RELEASES: Release[] = [
  { id: "neon-collapse", title: "Neon Collapse", subtitle: "Alex Cole · Album · 2025", artist: "Alex Cole", releaseType: "Album", year: 2025, cover: "from-red-950 via-rose-700 to-black" },
  { id: "midnight-bloom", title: "Midnight Bloom", subtitle: "The Lost Frequencies · Single", artist: "The Lost Frequencies", releaseType: "Single", cover: "from-fuchsia-950 via-pink-600 to-black" },
  { id: "afterglow", title: "Afterglow", subtitle: "Sofia Lane · Single · 2025", artist: "Sofia Lane", releaseType: "Single", year: 2025, cover: "from-amber-950 via-yellow-800 to-slate-950" },
  { id: "voidwalk", title: "Voidwalk", subtitle: "VALE · Album · 2024", artist: "VALE", releaseType: "Album", year: 2024, cover: "from-blue-950 via-indigo-700 to-black" },
  { id: "dusk-protocol", title: "Dusk Protocol", subtitle: "Pale Signal · EP · 2025", artist: "Pale Signal", releaseType: "EP", year: 2025, cover: "from-sky-950 via-cyan-800 to-black" },
];

export const MOCK_RECENT_ITEMS = [
  { id: "recent-alex-cole", title: "Alex Cole", subtitle: "Artist · 24 tracks", cover: "from-red-950 via-rose-700 to-black", symbol: "♫" },
  { id: "recent-neon-collapse", title: "Neon Collapse", subtitle: "Album · 2025", cover: "from-indigo-950 via-violet-600 to-fuchsia-950", symbol: "✦" },
  { id: "recent-late-night", title: "Late Night Vibes", subtitle: "Playlist · 58 tracks", cover: "from-cyan-950 via-pink-800 to-indigo-950", symbol: "≋" },
];

export const MOCK_TOP_ARTISTS = [
  { artistId: "alex-cole", name: "Alex Cole", listeners: "124.5K" },
  { artistId: "neon-collapse", name: "Neon Collapse", listeners: "98.2K" },
  { artistId: "vale", name: "VALE", listeners: "87.6K" },
  { artistId: "pale-signal", name: "Pale Signal", listeners: "76.3K" },
];

export const MOCK_LISTENING_ACTIVITY = {
  weekBars: [15, 25, 13, 31, 39, 18, 11, 28, 14, 37, 17, 23, 44, 16, 52, 29, 18, 36],
  totalTime: "2h 34m",
  topGenre: "Electronic",
  topGenrePlaylist: "Playlist · 58 tracks",
};


// Add collaboration entries here when they are available from the artist catalog.
export const MOCK_ARTIST_COLLABORATIONS: Record<string, ArtistCollaboration[]> = {};
