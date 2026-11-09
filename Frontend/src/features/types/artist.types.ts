export type ArtistSocialPlatform =
  | "instagram"
  | "youtube"
  | "tiktok"
  | "spotify"
  | "soundcloud"
  | "website";

export type ArtistSocialLink = {
  platform: ArtistSocialPlatform;
  label: string;
  href: string;
};

export type Artist = {
  id: string;
  name: string;
  avatar: string;
  cover: string;
  genres: string[];
  bio: string;
  followers: string;
  monthlyListeners: string;
  trackCount: number;
  verified: boolean;
  socialLinks?: ArtistSocialLink[];
};

export type Track = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
};

export type Playlist = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  owner: string;
};

export type Release = {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  artist?: string;
  releaseType?: "Single" | "EP" | "Album";
  year?: number;
};

export type FeaturedRelease = {
  id: string;
  title: string;
  artist: string;
  releaseType: "Single" | "EP" | "Album";
  year: number;
  trackCount: number;
  genre: string;
  cover: string;
};

export type ArtistCollaboration = {
  id: string;
  artistName: string;
  trackTitle: string;
  artwork?: string;
};

export type ArtistActivityItem = {
  id: string;
  title: string;
  description: string;
  date: string;
  kind: "release" | "milestone" | "announcement";
};

export type ArtistHeroProps = {
  autoPlay?: boolean;
  interval?: number;
  onPlay?: (artistId: string) => void;
  onShuffle?: (artistId: string) => void;
  onArtistClick?: (artistId: string) => void;
  onArtistChange?: (artist: Artist) => void;
};
