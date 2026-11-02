type MembershipAnalyticsProps = {
  activeSupporters: number;
  newSupporters: number;
  churnRate: number;
};

export default function MembershipAnalytics({ activeSupporters, newSupporters, churnRate }: MembershipAnalyticsProps) {
  const metrics = [
    { label: "Active supporters", value: activeSupporters.toLocaleString(), detail: "Current monthly members" },
    { label: "New this month", value: `+${newSupporters.toLocaleString()}`, detail: "New supporters" },
    { label: "Monthly churn", value: `${churnRate.toFixed(1)}%`, detail: "Supporters who cancelled" },
  ];

  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <h2 className="text-lg font-semibold text-white">Memberships</h2>
      <p className="mt-1 text-sm text-white/50">Your community's monthly support</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="rounded-xl bg-black/20 p-4">
            <p className="text-xs text-white/50">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
            <p className="mt-1 text-xs text-white/40">{metric.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
