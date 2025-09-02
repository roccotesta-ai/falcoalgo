export const metadata = { title: "About — Falco", description: "Mission, values, team" };
export default function AboutPage(){
  return (<section className="w-full py-16"><div className="container-2xl grid gap-8">
    <h1 className="text-3xl font-bold">About Falco</h1>
    <div className="card"><h3 className="font-semibold mb-2">Mission</h3><p className="text-offwhite/70">Clarity, responsibility, and continuous improvement for systematic traders.</p></div>
    <div className="grid md:grid-cols-3 gap-6">{["Alice — CEO","Bob — CTO","Charlie — Quant"].map(p=>(<div className="card" key={p}><h4 className="font-semibold">{p}</h4><p className="text-offwhite/70 text-sm">[BIO PLACEHOLDER]</p></div>))}</div>
  </div></section>);
}
