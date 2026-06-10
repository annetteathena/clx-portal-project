interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  accent?: string;
}

export default function StatCard({ title, value, icon, accent = "border-navy" }: StatCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border-l-4 ${accent} p-6 flex items-center gap-4`}>
      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-2xl">
        {icon}
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-slate-800 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
