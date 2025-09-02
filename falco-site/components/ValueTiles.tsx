import { Cpu, ShieldCheck, Zap, Code } from "lucide-react";
const tiles = [
  { icon: Cpu, title: "Automated Strategies", desc: "Turn signals into executions with pre-set risk rules." },
  { icon: ShieldCheck, title: "Risk Controls", desc: "Position sizing templates and drawdown guards." },
  { icon: Zap, title: "Actionable Signals", desc: "Trend, momentum, and volatility filters." },
  { icon: Code, title: "No‑Code Setup", desc: "Connect, configure, and go live." },
];
export function ValueTiles(){
  return (<section className="container-2xl grid md:grid-cols-4 gap-6">
    {tiles.map(({icon:Icon,title,desc}) => (
      <div key={title} className="card">
        <div className="flex items-center gap-3 mb-3"><Icon className="text-electric"/><h3 className="font-semibold">{title}</h3></div>
        <p className="text-offwhite/70">{desc}</p>
      </div>
    ))}
  </section>);
}
