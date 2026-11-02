import type { MockUser } from "../features/types/artist.types";

export const MOCK_USERS: MockUser[] = [
  { id: "user-001", displayName: "Jordan Lee", email: "jordan@example.test", role: "listener", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&auto=format", membershipIds: ["neon-supporter"] },
  { id: "artist-001", displayName: "Alex Cole", email: "alex@example.test", role: "artist", avatar: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&auto=format", membershipIds: [] },
];
