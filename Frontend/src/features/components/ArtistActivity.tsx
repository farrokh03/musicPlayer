import { Disc3, Megaphone, Star } from "lucide-react";
import type { ArtistActivityItem } from "../types/artist.types";

export default function ArtistActivity({ items }: { items: ArtistActivityItem[] }) {
  return (
    <section className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <h2 className="text-[11px] font-semibold text-[#f5edf2]">Recent activity</h2>
      {items.length === 0 ? (
        <p className="py-7 text-center text-[11px] text-[#9b8998]">
          No recent activity to show yet.
        </p>
      ) : (
        <ol className="mt-3 space-y-3">
          {items.map((item) => {
            const Icon =
              item.kind === "release"
                ? Disc3
                : item.kind === "milestone"
                  ? Star
                  : Megaphone;

            return (
              <li key={item.id} className="flex items-start gap-3">
                <span className="mt-0.5 rounded-lg border border-[#51202d] bg-[#1a0d13] p-2 text-[#f04460]">
                  <Icon size={14} aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-medium text-[#eee2eb]">{item.title}</p>
                  <p className="mt-1 text-[10px] text-[#9b8998]">{item.description}</p>
                </div>
                <time className="shrink-0 text-[10px] text-[#806b77]">{item.date}</time>
              </li>
            );
          })}
        </ol>
      )}
    </section>
  );
}
