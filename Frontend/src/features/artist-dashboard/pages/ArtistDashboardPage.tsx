import ArtistAnalytics from "../components/ArtistAnalytics";
import MembershipAnalytics from "../components/MembershipAnalytics";
import RevenueOverview from "../components/RevenueOverview";

export default function ArtistDashboardPage() {
  return (
    <main className="min-h-screen bg-[#090709] px-4 py-8 text-white sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-violet-300">Artist workspace</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight">Dashboard</h1>
            <p className="mt-2 max-w-2xl text-sm text-white/50">Understand your audience, track supporter growth, and review your earnings.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-right">
            <p className="text-xs text-white/40">Signed in as</p>
            <p className="mt-1 text-sm font-medium">Neon Collapse</p>
          </div>
        </header>

        <div className="grid gap-5">
          <ArtistAnalytics monthlyListeners={583200} totalStreams={1842500} streamsByDay={[1200, 1450, 1320, 1800, 2100, 1950, 2400, 2250, 2800, 2600, 3100, 2950, 3400, 3800]} />
          <MembershipAnalytics activeSupporters={328} newSupporters={42} churnRate={2.8} />
          <RevenueOverview availableBalance={1240.5} pendingBalance={385.25} lifetimeEarnings={12840.75} />
        </div>
        <p className="mt-6 text-xs text-white/35">Demo dashboard data only. Replace these values with authenticated artist API responses before launch.</p>
      </div>
    </main>
  );
}
