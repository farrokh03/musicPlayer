import { HeartHandshake } from "lucide-react";
import type { Artist } from "../types/artist.types";

export default function ArtistMembership({ artist }: { artist: Artist }) {
  return (
    <section className="mx-auto max-w-2xl rounded-2xl border border-[#51202d] bg-linear-to-br from-[#1b0c12] to-[#10090d] p-6 text-center sm:p-8">
      <HeartHandshake size={28} className="mx-auto text-[#f04460]" aria-hidden="true" />
      <h2 className="mt-4 text-xl font-semibold text-white">
        Support {artist.name}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#b9aab1]">
        Artist memberships are not configured for this profile yet. When they are
        available, you will be able to support {artist.name} directly here.
      </p>
      <button
        type="button"
        disabled
        className="mt-6 cursor-not-allowed rounded-full border border-[#51202d] px-5 py-2 text-xs font-semibold text-[#806b77] opacity-70"
      >
        Memberships coming soon
      </button>
    </section>
  );
}
