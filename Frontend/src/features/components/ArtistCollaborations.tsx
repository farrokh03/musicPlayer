import { Users } from "lucide-react";
import { AlbumArt } from "./DashboardPrimitives";
import type { ArtistCollaboration } from "../types/artist.types";

export default function ArtistCollaborations({
  collaborations,
}: {
  collaborations: ArtistCollaboration[];
}) {
  return (
    <section className="min-w-0 rounded-xl border border-[#35151e] bg-[#100a0e] p-4">
      <h2 className="text-[11px] font-semibold text-[#f5edf2]">Collaborations</h2>
      {collaborations.length === 0 ? (
        <div className="py-7 text-center">
          <Users size={19} className="mx-auto text-[#704452]" aria-hidden="true" />
          <p className="mt-3 text-[11px] text-[#9b8998]">
            No collaborations have been listed yet.
          </p>
        </div>
      ) : (
        <div className="mt-3 space-y-2">
          {collaborations.map((collaboration) => (
            <div key={collaboration.id} className="flex items-center gap-3">
              <AlbumArt className="h-11 w-11" image={collaboration.artwork} />
              <div className="min-w-0">
                <p className="truncate text-[11px] font-medium text-[#eee2eb]">
                  {collaboration.trackTitle}
                </p>
                <p className="truncate text-[10px] text-[#9b8998]">
                  with {collaboration.artistName}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
