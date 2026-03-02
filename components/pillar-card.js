import * as LucideIcons from "lucide-react";

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
  // @ts-ignore
  const Icon = LucideIcons[iconName] || LucideIcons.Database;

  const colorClasses: Record<string, string> = {
    indigo: "text-indigo-400 bg-indigo-600/20 border-indigo-500/30",
    amber: "text-amber-400 bg-amber-600/20 border-amber-500/30",
    emerald: "text-emerald-400 bg-emerald-600/20 border-emerald-500/30",
    purple: "text-purple-400 bg-purple-600/20 border-purple-500/30",
    rose: "text-rose-400 bg-rose-600/20 border-rose-500/30",
    cyan: "text-cyan-400 bg-cyan-600/20 border-cyan-500/30",
  };

  const selectedColor = colorClasses[color] || colorClasses.indigo;

  return (
    <div className="glass-card rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group border border-white/10">
      <div className={`${selectedColor.split(' ')[0]} text-4xl font-bold mb-2 opacity-50`}>
        {number}
      </div>
      <div className={`w-12 h-12 rounded-xl ${selectedColor.split(' ').slice(1).join(' ')} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className={`w-6 h-6 ${selectedColor.split(' ')[0]}`} />
      </div>
      <h3 className="text-xl font-display font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
