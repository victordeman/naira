import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface PillarProps {
  number: string;
  title: string;
  description: string;
  iconName: string;
  color?: string;
}

export default function PillarCard({
  number,
  title,
  description,
  iconName,
  color = "indigo",
}: PillarProps) {
  // Type-safe dynamic icon lookup
  const Icon = (Icons[iconName as keyof typeof Icons] as LucideIcon) || Icons.Database;

  const colorClasses: Record<string, { text: string; bg: string; border: string }> = {
    indigo: { text: "text-indigo-400", bg: "bg-indigo-600/20", border: "border-indigo-500/30" },
    amber: { text: "text-amber-400", bg: "bg-amber-600/20", border: "border-amber-500/30" },
    emerald: { text: "text-emerald-400", bg: "bg-emerald-600/20", border: "border-emerald-500/30" },
    purple: { text: "text-purple-400", bg: "bg-purple-600/20", border: "border-purple-500/30" },
    rose: { text: "text-rose-400", bg: "bg-rose-600/20", border: "border-rose-500/30" },
    cyan: { text: "text-cyan-400", bg: "bg-cyan-600/20", border: "border-cyan-500/30" },
  };

  const selectedColor = colorClasses[color] || colorClasses.indigo;

  return (
    <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10">
      <div className={`${selectedColor.text} text-4xl font-bold mb-2 opacity-50`}>
        {number}
      </div>
      <div className={`w-12 h-12 rounded-xl ${selectedColor.bg} ${selectedColor.border} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${selectedColor.text}`} />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
