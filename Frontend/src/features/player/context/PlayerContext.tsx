import { createContext, useContext, useState, type ReactNode } from "react";

import { TRACKS } from "../data/tracks.mock";

type Track = (typeof TRACKS)[number];

type PlayerContextType = {
  queue: Track[];
  trackIndex: number;
  track: Track;
  playing: boolean;
  progress: number;
  volume: number;
  shuffle: boolean;
  repeat: boolean;
  liked: boolean;

  setProgress: (value: number) => void;
  setVolume: (value: number) => void;
  setShuffle: (value: boolean) => void;
  setRepeat: (value: boolean) => void;
  setLiked: (value: boolean) => void;
  togglePlay: () => void;
  playTrack: (track: Track) => void;
  nextTrack: () => void;
  previousTrack: () => void;
  setPlaying: (value: boolean) => void;
};

const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [queue, setQueue] = useState<Track[]>(TRACKS);
  const [trackIndex, setTrackIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(38);
  const [volume, setVolume] = useState(72);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const [liked, setLiked] = useState(true);

  const track = queue[trackIndex] ?? TRACKS[0];

  const togglePlay = () => {
    setPlaying((current) => !current);
  };

  const playTrack = (selectedTrack: Track) => {
    let index = queue.findIndex((item) => item.id === selectedTrack.id);

    if (index === -1) {
      setQueue((current) => [...current, selectedTrack]);
      index = queue.length;
    }

    setTrackIndex(index);
    setProgress(0);
    setPlaying(true);
  };

  const nextTrack = () => {
    setTrackIndex((current) => (current + 1 < queue.length ? current + 1 : 0));
    setProgress(0);
  };

  const previousTrack = () => {
    if (progress > 3) {
      setProgress(0);
      return;
    }

    setTrackIndex((current) => (current > 0 ? current - 1 : queue.length - 1));
    setProgress(0);
  };

  return (
    <PlayerContext.Provider
      value={{
        queue,
        trackIndex,
        track,
        playing,
        progress,
        volume,
        shuffle,
        repeat,
        liked,
        setProgress,
        setVolume,
        setShuffle,
        setRepeat,
        setLiked,
        togglePlay,
        playTrack,
        nextTrack,
        previousTrack,
        setPlaying,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }

  return context;
}
