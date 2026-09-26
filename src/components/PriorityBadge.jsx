function PriorityBadge({ priority }) {
  const styles = {
    Low: "bg-slate-100 text-slate-600",
    Medium: "bg-orange-100 text-orange-700",
    High: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
        styles[priority] || "bg-slate-100 text-slate-600"
      }`}
    >
      {priority}
    </span>
  );
}

export default PriorityBadge;