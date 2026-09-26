function DashboardCard({
  title,
  value,
  subtitle,
  icon,
}) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="text-3xl font-bold text-slate-800 mt-2">
            {value}
          </h3>

          <p className="text-xs text-slate-400 mt-2">
            {subtitle}
          </p>
        </div>

        <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center text-xl">
          {icon}
        </div>

      </div>

    </div>
  );
}

export default DashboardCard;