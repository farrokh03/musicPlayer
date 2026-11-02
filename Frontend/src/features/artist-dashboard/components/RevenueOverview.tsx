type RevenueOverviewProps = {
  availableBalance: number;
  pendingBalance: number;
  lifetimeEarnings: number;
  currency?: string;
};

export default function RevenueOverview({ availableBalance, pendingBalance, lifetimeEarnings, currency = "USD" }: RevenueOverviewProps) {
  const formatMoney = (value: number) => new Intl.NumberFormat("en-US", { style: "currency", currency, maximumFractionDigits: 2 }).format(value);

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-white">Revenue overview</h2>
        <p className="mt-1 text-sm text-white/50">Illustrative mock figures — connect payment reporting before production use</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-xs text-white/50">Available balance</p>
          <p className="mt-2 text-xl font-semibold text-white">{formatMoney(availableBalance)}</p>
        </div>
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-xs text-white/50">Pending</p>
          <p className="mt-2 text-xl font-semibold text-white">{formatMoney(pendingBalance)}</p>
        </div>
        <div className="rounded-xl bg-black/20 p-4">
          <p className="text-xs text-white/50">Lifetime earnings</p>
          <p className="mt-2 text-xl font-semibold text-white">{formatMoney(lifetimeEarnings)}</p>
        </div>
      </div>
    </section>
  );
}
