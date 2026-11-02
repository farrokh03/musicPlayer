import type { Playlist } from "../features/types/artist.types";

export const MOCK_PLAYLISTS: Playlist[] = [
  { id: "electronic-essentials", title: "Electronic Essentials", subtitle: "58 tracks", cover: "from-red-950 via-red-600 to-black", owner: "CRIMSON", trackIds: [1, 2, 8] },
  { id: "indie-dreams", title: "Indie Dreams", subtitle: "42 tracks", cover: "from-cyan-950 via-teal-700 to-black", owner: "CRIMSON", trackIds: [3, 5, 7] },
  { id: "late-night-vibes", title: "Late Night Vibes", subtitle: "58 tracks", cover: "from-indigo-950 via-violet-700 to-black", owner: "Alex Cole", trackIds: [4, 6, 9] },
  { id: "ambient-focus", title: "Ambient Focus", subtitle: "46 tracks", cover: "from-slate-800 via-blue-900 to-black", owner: "CRIMSON", trackIds: [3, 6, 9] },
  { id: "workout-energy", title: "Workout Energy", subtitle: "36 tracks", cover: "from-orange-950 via-red-800 to-black", owner: "CRIMSON", trackIds: [1, 2, 10] },
];
