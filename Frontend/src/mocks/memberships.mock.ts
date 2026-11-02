import type { MembershipPlan } from "../features/types/artist.types";

export const MOCK_MEMBERSHIP_PLANS: MembershipPlan[] = [
  { id: "neon-supporter", artistId: "neon-collapse", name: "Supporter", monthlyPrice: 4.99, currency: "USD", benefits: ["Support new releases", "Monthly behind-the-scenes update", "Supporter badge"], featured: true },
  { id: "vale-inner-circle", artistId: "vale", name: "Inner Circle", monthlyPrice: 6.99, currency: "USD", benefits: ["Early access to announcements", "Exclusive studio notes", "Community Q&A"] },
  { id: "alex-cole-fan", artistId: "alex-cole", name: "Fan Club", monthlyPrice: 3.99, currency: "USD", benefits: ["Monthly artist update", "Member-only posts"] },
];
