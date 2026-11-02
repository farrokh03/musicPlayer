export interface Artist {
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
  website?: string;
  instagram?: string;
  spotify?: string;
}

export interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  cover: string;
  artistId?: string;
  albumId?: string;
  releaseDate?: string;
}

export interface Album {
  id: string;
  title: string;
  artistId: string;
  artist: string;
  type: "album" | "ep" | "single";
  releaseDate: string;
  cover: string;
  trackIds: number[];
}

export interface Playlist {
  id: string;
  title: string;
  subtitle: string;
  cover: string;
  owner: string;
  trackIds?: number[];
}

export interface MembershipPlan {
  id: string;
  artistId: string;
  name: string;
  monthlyPrice: number;
  currency: "USD" | "IRR";
  benefits: string[];
  featured?: boolean;
}

export interface MockUser {
  id: string;
  displayName: string;
  email: string;
  role: "listener" | "artist" | "admin";
  avatar: string;
  membershipIds: string[];
}
