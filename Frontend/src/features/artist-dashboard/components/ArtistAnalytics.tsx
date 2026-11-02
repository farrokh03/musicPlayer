type ArtistAnalyticsProps = {
  monthlyListeners: number;
  totalStreams: number;
  streamsByDay: number[];
};

const formatCompact = (value: number) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);

export default function ArtistAnalytics({ monthlyListeners, totalStreams, streamsByDay }: ArtistAnalyticsProps) {
  const max = Math.max(...streamsByDay, 1);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold text-white">Audience & streaming</h2>
          <p className="mt-1 text-sm text-white/50">A snapshot of your recent performance</p>
        </div>
        <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">Last 30 days</span>
      </div>
      <div className="mb-6 grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-xs text-white/50">Monthly listeners</p>
          <p className="mt-2 text-2xl font-semibold text-white">{formatCompact(monthlyListeners)}</p>
        </div>
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-xs text-white/50">Total streams</p>
          <p className="mt-2 text-2xl font-semibold text-white">{formatCompact(totalStreams)}</p>
        </div>
      </div>
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-medium text-white">Daily streams</h3>
          <span className="text-xs text-white/40">Last 14 days</span>
        </div>
        <div className="flex h-28 items-end gap-1.5" role="img" aria-label="Daily streams bar chart">
          {streamsByDay.map((value, index) => (
            <div key={index} className="flex h-full flex-1 items-end">
              <div className="w-full rounded-t bg-violet-400/80" style={{ height: `${Math.max(6, (value / max) * 100)}%` }} title={`${value.toLocaleString()} streams`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
