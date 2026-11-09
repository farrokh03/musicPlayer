import { Globe, Instagram, Music2, Youtube } from "lucide-react";
import type {
  ArtistSocialLink,
  ArtistSocialPlatform,
} from "../types/artist.types";

const platformIcons = {
  instagram: Instagram,
  youtube: Youtube,
  tiktok: Music2,
  spotify: Music2,
  soundcloud: Music2,
  website: Globe,
} satisfies Record<ArtistSocialPlatform, typeof Instagram>;

export default function ArtistSocialLinks({ links }: { links: ArtistSocialLink[] }) {
  if (links.length === 0) return null;

  return (
    <section className="rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <h2 className="text-[11px] font-semibold text-[#f5edf2]">Find the artist</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((link) => {
          const Icon = platformIcons[link.platform];

          return (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] text-[#d6c2cb] transition hover:border-[#e31837]/60 hover:text-white"
            >
              <Icon size={13} aria-hidden="true" />
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
}
