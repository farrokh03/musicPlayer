import type { Track } from "../features/types/artist.types";

const artwork = {
  neon: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format",
  vale: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop&auto=format",
  pale: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop&auto=format",
  cassian: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop&auto=format",
  mirror: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop&auto=format",
  halo: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop&auto=format",
  feral: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=600&fit=crop&auto=format",
  corvo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop&auto=format",
  aeon: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop&auto=format",
};

export const MOCK_TRACKS: Track[] = [
  { id: 1, title: "Crimson Tide", artist: "Neon Collapse", album: "Fracture", duration: 224, cover: artwork.neon, artistId: "neon-collapse", albumId: "fracture", releaseDate: "2025-06-14" },
  { id: 2, title: "Dark Matter", artist: "VALE", album: "Voidwalk", duration: 198, cover: artwork.vale, artistId: "vale", albumId: "voidwalk", releaseDate: "2024-10-03" },
  { id: 3, title: "Hollow Echo", artist: "Pale Signal", album: "Dusk Protocol", duration: 261, cover: artwork.pale, artistId: "pale-signal", albumId: "dusk-protocol", releaseDate: "2025-02-21" },
  { id: 4, title: "Burning Slow", artist: "Cassian", album: "Periphery", duration: 183, cover: artwork.cassian, artistId: "cassian", albumId: "periphery", releaseDate: "2025-04-18" },
  { id: 5, title: "Nocturne 9", artist: "Mirror Teeth", album: "Low Signal", duration: 307, cover: artwork.mirror, artistId: "mirror-teeth", albumId: "low-signal", releaseDate: "2024-12-09" },
  { id: 6, title: "Glass Veins", artist: "Hλlo", album: "Spectral", duration: 215, cover: artwork.halo, artistId: "halo", albumId: "spectral", releaseDate: "2025-08-01" },
  { id: 7, title: "Undertow", artist: "Feral Lux", album: "Depths", duration: 243, cover: artwork.feral, artistId: "feral-lux", albumId: "depths", releaseDate: "2025-03-11" },
  { id: 8, title: "Ritual Static", artist: "Corvo", album: "Hexfield", duration: 189, cover: artwork.corvo, artistId: "corvo", albumId: "hexfield", releaseDate: "2025-01-30" },
  { id: 9, title: "Pale Frequency", artist: "AEON", album: "Stasis", duration: 272, cover: artwork.aeon, artistId: "aeon", albumId: "stasis", releaseDate: "2024-11-17" },
  { id: 10, title: "Blood Circuit", artist: "Neon Collapse", album: "Fracture", duration: 201, cover: artwork.neon, artistId: "neon-collapse", albumId: "fracture", releaseDate: "2025-06-14" },
];
