import { useState } from "react";
import {
  Play,
  Shuffle,
  Plus,
  Share2,
  MoreHorizontal,
  Heart,
  Disc3,
  Headphones,
} from "lucide-react";
import { ALL_TRACKS as songs } from "../../mocks/tracks";

const mixes = [
  {
    title: "Daily Mix 1",
    subtitle: "Made for you",
    art: "from-rose-950 via-red-700 to-black",
  },
  {
    title: "Chill Vibes",
    subtitle: "Playlist · 72 tracks",
    art: "from-slate-700 via-sky-900 to-black",
  },
  {
    title: "Focus Flow",
    subtitle: "Playlist · 46 tracks",
    art: "from-cyan-950 via-blue-800 to-black",
  },
  {
    title: "Alternative Mix",
    subtitle: "Playlist · 94 tracks",
    art: "from-fuchsia-950 via-pink-700 to-indigo-950",
  },
];

const releases = [
  {
    title: "Neon Collapse",
    subtitle: "Alex Cole · Album · 2025",
    art: "from-red-950 via-rose-700 to-black",
  },
  {
    title: "Midnight Bloom",
    subtitle: "The Lost Frequencies · Single",
    art: "from-fuchsia-950 via-pink-600 to-black",
  },
  {
    title: "Afterglow",
    subtitle: "Sofia Lane · Single · 2025",
    art: "from-amber-950 via-yellow-800 to-slate-950",
  },
  {
    title: "Voidwalk",
    subtitle: "VALE · Album · 2024",
    art: "from-blue-950 via-indigo-700 to-black",
  },
  {
    title: "Dusk Protocol",
    subtitle: "Pale Signal · EP · 2025",
    art: "from-sky-950 via-cyan-800 to-black",
  },
];

const playlists = [
  {
    title: "Electronic Essentials",
    by: "Curated by CRIMSON",
    art: "from-red-950 via-red-600 to-black",
  },
  {
    title: "Indie Dreams",
    by: "Curated by CRIMSON",
    art: "from-cyan-950 via-teal-700 to-black",
  },
  {
    title: "Late Night",
    by: "Curated by Alex Cole",
    art: "from-indigo-950 via-violet-700 to-black",
  },
  {
    title: "Ambient Focus",
    by: "Curated by CRIMSON",
    art: "from-slate-800 via-blue-900 to-black",
  },
  {
    title: "Workout Energy",
    by: "Curated by CRIMSON",
    art: "from-orange-950 via-red-800 to-black",
  },
];

const artists = [
  {
    name: "Alex Cole",
    listeners: "124.5K",
    art: "from-red-950 via-rose-700 to-black",
  },
  {
    name: "Neon Collapse",
    listeners: "98.2K",
    art: "from-purple-950 via-violet-700 to-black",
  },
  {
    name: "VALE",
    listeners: "87.6K",
    art: "from-blue-950 via-indigo-700 to-black",
  },
  {
    name: "Pale Signal",
    listeners: "76.3K",
    art: "from-slate-700 via-sky-900 to-black",
  },
];

function SectionHeading({
  title,
  action = "View All",
}: {
  title: string;
  action?: string;
}) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <h2 className="text-[10px] font-semibold text-[#f5edf2]">{title}</h2>
      <button className="text-[8px] text-[#92808f] transition hover:text-white">
        {action}
      </button>
    </div>
  );
}

function AlbumArt({
  className,
  symbol = "✦",
}: {
  className: string;
  symbol?: string;
}) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-md bg-linear-to-br ${className}`}
    >
      <img
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_35%_35%,rgba(255,45,80,0.65),transparent_45%)]"
        src={symbol}
      />
      <div className="absolute -left-1/3 top-1/3 h-px w-[170%] rotate-[-40deg] bg-white/20" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-white/3" />
      <span className="absolute inset-0 flex items-center justify-center text-xl text-white/35">
        {symbol}
      </span>
    </div>
  );
}

function FeaturedRelease() {
  const [playing, setPlaying] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <section className="min-w-0">
      <SectionHeading title="Featured Release" />

      <div className="flex h-31.25 gap-3 rounded-lg border border-[#391720] bg-linear-to-br from-[#1b0c12] to-[#10090d] p-2.5">
        <AlbumArt
          className="h-full w-27 rounded-md border border-[#59202d]"
          symbol="♫"
        />

        <div className="flex min-w-0 flex-1 flex-col justify-center">
          <p className="text-[6px] font-semibold uppercase tracking-wider text-[#ff435e]">
            New Release
          </p>
          <h3 className="mt-1 truncate text-[11px] font-semibold text-white">
            Crimson Tide
          </h3>
          <p className="mt-1 text-[8px] text-[#a997a4]">
            Single&nbsp; · &nbsp;2025&nbsp; · &nbsp;3 tracks
          </p>
          <p className="mt-1 text-[8px] text-[#b9a9b6]">Alex Cole</p>
          <p className="mt-1 truncate text-[8px] text-[#c8b6c3]">
            Alternative / Electronic
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setPlaying(!playing)}
              className="flex h-5 items-center gap-1 rounded-full bg-[#f32648] px-3 text-[8px] font-medium text-white hover:bg-[#ff4561]"
            >
              <Play size={9} fill="currentColor" />
              {playing ? "Pause" : "Play"}
            </button>

            <button className="flex h-5 items-center gap-1 rounded-full border border-[#42202c] px-2 text-[8px] text-[#c6b4c1] hover:bg-white/5">
              <Shuffle size={9} /> Shuffle
            </button>

            <button
              onClick={() => setSaved(!saved)}
              className="flex h-5 items-center gap-1 rounded-full border border-[#42202c] px-2 text-[8px] text-[#c6b4c1] hover:text-[#ff4561]"
            >
              <Plus size={9} /> {saved ? "Saved" : "Save"}
            </button>

            <button
              aria-label="Share release"
              className="rounded-full border border-[#42202c] p-1.5 text-[#c6b4c1] hover:text-white"
            >
              <Share2 size={9} />
            </button>

            <button
              aria-label="More release options"
              className="p-1 text-[#a997a4]"
            >
              <MoreHorizontal size={12} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PopularTracks() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);

  return (
    <section className="min-w-0 overflow-scroll h-40 text-[14px]">
      <SectionHeading title="Popular Tracks" />

      <div className="rounded-lg border border-[#35151e] bg-[#100a0e] px-2">
        {songs.map((song, index) => (
          <div
            key={song.title}
            className="flex h-14 items-center gap-2 border-b border-white/4.5 last:border-0"
          >
            <span className="w-4 text-center text-[12px] text-[#a18e9d]">
              {index + 1}
            </span>

            <button
              aria-label={`Play ${song.title}`}
              onClick={() =>
                setPlayingTrack(playingTrack === song.title ? null : song.title)
              }
            >
              <div className="w-12 h-12 absolute">
                {playingTrack === song.title ? "♫" : ""}
              </div>

              <img className="h-12 w-12 rounded-full" src={song.cover} alt="" />
            </button>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] text-[#eee2eb]">
                {song.title}
              </p>
              <p className="truncate text-[10px] text-[#8f7d8c]">
                {song.artist}
              </p>
            </div>

            <span className="w-7 text-right text-[12px] text-[#9b8998]">
              {song.duration}
            </span>

            <span className="hidden w-7 text-right text-[12px] text-[#8f7d8c] sm:block">
              {song.id}
            </span>

            <button
              aria-label={`Favorite ${song.title}`}
              onClick={() =>
                setFavorites((old) =>
                  old.includes(song.title)
                    ? old.filter((title) => title !== song.title)
                    : [...old, song.title],
                )
              }
              className={
                favorites.includes(song.title)
                  ? "text-[#ff3155]"
                  : "text-[#ff3155]/80 hover:text-[#ff3155]"
              }
            >
              <Heart
                size={10}
                fill={favorites.includes(song.title) ? "currentColor" : "none"}
              />
            </button>

            <button
              aria-label="Track options"
              className="text-[#8f7d8c] hover:text-white"
            >
              <MoreHorizontal size={12} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function HorizontalCards({
  items,
  variant,
}: {
  items: { title: string; subtitle: string; art: string }[];
  variant: "mix" | "release";
}) {
  return (
    <div
      className={`grid gap-2 ${variant === "mix" ? "grid-cols-2 xl:grid-cols-4" : "grid-cols-2 sm:grid-cols-3 xl:grid-cols-5"}`}
    >
      {items.map((item) => (
        <button
          key={item.title}
          className={`group flex min-w-0 items-center gap-2 rounded-lg border border-[#30151d] bg-linaer-to-br from-[#1b0d13] to-[#10090d] p-1.5 text-left transition hover:border-[#682333] ${
            variant === "mix" ? "h-14.25" : "h-10.75"
          }`}
        >
          <AlbumArt
            className={variant === "mix" ? "h-11 w-11" : "h-7.75 w-7.75"}
          />

          <div className="min-w-0 flex-1">
            <p className="truncate text-[8px] font-medium text-[#f0e4ec]">
              {item.title}
            </p>
            <p className="mt-0.5 truncate text-[7px] text-[#948291]">
              {item.subtitle}
            </p>
          </div>

          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-white/6 text-[#cbb8c6] transition group-hover:bg-[#f32648] group-hover:text-white">
            <Play size={8} fill="currentColor" />
          </span>
        </button>
      ))}
    </div>
  );
}

function MadeForYou() {
  return (
    <section>
      <SectionHeading title="Made for You" action="‹   ›" />
      <HorizontalCards items={mixes} variant="mix" />
    </section>
  );
}

function NewReleases() {
  return (
    <section>
      <SectionHeading title="New Releases" action="‹   ›" />
      <HorizontalCards items={releases} variant="release" />
    </section>
  );
}

function FeaturedPlaylists() {
  return (
    <section className="min-w-0">
      <SectionHeading title="Featured Playlists" />
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 xl:grid-cols-5">
        {playlists.map((playlist) => (
          <button
            key={playlist.title}
            className="flex min-w-0 items-center gap-1.5 rounded-md border border-[#32151e] bg-[#120a0e] p-1.5 text-left transition hover:border-[#652333]"
          >
            <AlbumArt className={`h-10 w-10`} symbol="♫" />
            <div className="min-w-0">
              <p className="truncate text-[7px] font-medium text-[#eee1eb]">
                {playlist.title}
              </p>
              <p className="mt-1 truncate text-[6px] text-[#968393]">
                {playlist.by}
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

function TopArtists() {
  return (
    <section className="min-w-0">
      <SectionHeading title="Top Artists" />

      <div className="space-y-1">
        {artists.map((artist, index) => (
          <div key={artist.name} className="flex items-center gap-1.5">
            <span className="w-2 text-[7px] text-[#9a8795]">{index + 1}</span>
            <AlbumArt className="h-4 w-4 rounded-full" symbol="♫" />
            <p className="min-w-0 flex-1 truncate text-[7px] text-[#e6d9e3]">
              {artist.name}
            </p>
            <span className="text-[7px] text-[#998795]">
              {artist.listeners}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function MusicDashboard() {
  return (
    <main className="min-h-screen bg-[#090709] p-3 font-sans text-white sm:p-4">
      <div className="mx-auto max-w-350 space-y-4">
        {/* Featured release and popular tracks */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.25fr_1fr]">
          <FeaturedRelease />
          <PopularTracks />
        </div>

        <MadeForYou />
        <NewReleases />

        {/* Playlists and artists */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[3fr_1fr]">
          <FeaturedPlaylists />
          <TopArtists />
        </div>

        <div className="flex justify-center pb-3 pt-1">
          <div className="flex items-center gap-2 text-[#6c5260]">
            <Disc3 size={12} />
            <Headphones size={12} />
          </div>
        </div>
      </div>
    </main>
  );
}
