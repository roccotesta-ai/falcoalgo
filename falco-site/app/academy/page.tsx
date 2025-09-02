export const metadata = { title: "Academy — Falco", description: "Learning tracks" };
const tracks = [
  { name: "Beginner", modules: ["Market Basics", "Futures 101", "Risk Foundations"] },
  { name: "Intermediate", modules: ["Journaling", "Momentum & Regimes", "Validation"] },
  { name: "Advanced", modules: ["Automation Safety", "System Tuning", "Scaling"] },
];
export default function AcademyPage(){
  return (<section className="w-full py-16"><div className="container-2xl grid gap-8">
    <h1 className="text-3xl font-bold">Academy</h1>
    <div className="grid md:grid-cols-3 gap-6">
      {tracks.map(t=>(<div key={t.name} className="card"><h3 className="font-semibold mb-2">{t.name}</h3>
        <ul className="text-offwhite/70 space-y-1">{t.modules.map(m=><li key={m}>• {m}</li>)}</ul></div>))}
    </div>
  </div></section>);
}
