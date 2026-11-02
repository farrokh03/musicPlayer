import type { Artist } from "../features/types/artist.types";

const artwork = {
  alex: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop&auto=format",
  vale: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop&auto=format",
  cassian: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=600&fit=crop&auto=format",
  pale: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop&auto=format",
  mirror: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop&auto=format",
  halo: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=600&h=600&fit=crop&auto=format",
  feral: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=600&h=600&fit=crop&auto=format",
  corvo: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop&auto=format",
  aeon: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=600&h=600&fit=crop&auto=format",
};

export const MOCK_ARTISTS: Artist[] = [
  { id: "alex-cole", name: "Alex Cole", avatar: artwork.alex, cover: artwork.alex, genres: ["Alternative", "Electronic", "Indie"], bio: "Alex Cole blends atmospheric electronic production with emotional storytelling.", followers: "124.5K", monthlyListeners: "583.2K", trackCount: 0, verified: true },
  { id: "vale", name: "VALE", avatar: artwork.vale, cover: artwork.vale, genres: ["Dark Pop", "Electronic"], bio: "Dark melodies and immersive alternative electronic soundscapes.", followers: "98.2K", monthlyListeners: "412.8K", trackCount: 0, verified: true },
  { id: "cassian", name: "Cassian", avatar: artwork.cassian, cover: artwork.cassian, genres: ["Electronic", "Melodic Techno"], bio: "Cinematic textures, atmospheric rhythms, and memorable melodies.", followers: "76.8K", monthlyListeners: "325.4K", trackCount: 0, verified: false },
  { id: "pale-signal", name: "Pale Signal", avatar: artwork.pale, cover: artwork.pale, genres: ["Ambient", "Electronic"], bio: "Minimal textures, distant vocals, and cinematic electronic sound.", followers: "76.3K", monthlyListeners: "298.1K", trackCount: 0, verified: true },
  { id: "neon-collapse", name: "Neon Collapse", avatar: artwork.alex, cover: artwork.alex, genres: ["Alternative", "Electronic"], bio: "A high-energy electronic project built around fractured rhythms and bold synths.", followers: "98.2K", monthlyListeners: "410.0K", trackCount: 0, verified: true },
  { id: "mirror-teeth", name: "Mirror Teeth", avatar: artwork.mirror, cover: artwork.mirror, genres: ["Alternative", "Indie"], bio: "Guitar-driven alternative music with atmospheric production.", followers: "41.2K", monthlyListeners: "120.5K", trackCount: 0, verified: false },
  { id: "halo", name: "Hλlo", avatar: artwork.halo, cover: artwork.halo, genres: ["Electronic", "Ambient"], bio: "Electronic music shaped by texture, space, and melody.", followers: "38.4K", monthlyListeners: "105.2K", trackCount: 0, verified: false },
  { id: "feral-lux", name: "Feral Lux", avatar: artwork.feral, cover: artwork.feral, genres: ["Electronic", "Experimental"], bio: "Experimental electronic compositions and deep rhythmic structures.", followers: "29.1K", monthlyListeners: "88.7K", trackCount: 0, verified: false },
  { id: "corvo", name: "Corvo", avatar: artwork.corvo, cover: artwork.corvo, genres: ["Electronic", "Darkwave"], bio: "Darkwave textures and club-focused electronic production.", followers: "34.8K", monthlyListeners: "97.4K", trackCount: 0, verified: false },
  { id: "aeon", name: "AEON", avatar: artwork.aeon, cover: artwork.aeon, genres: ["Ambient", "Electronic"], bio: "Long-form ambient soundscapes and minimal electronic arrangements.", followers: "52.6K", monthlyListeners: "166.9K", trackCount: 0, verified: true },
];

export const getArtistById = (id: string) => MOCK_ARTISTS.find((artist) => artist.id === id);
