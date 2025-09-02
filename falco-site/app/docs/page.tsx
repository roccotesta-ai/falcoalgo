export const metadata = { title: "Docs — Falco", description: "Getting Started, Install, Configuration, Signals, Risk Controls, Troubleshooting" };
const nav = ["Getting Started","Install","Configuration","Signals","Risk Controls","Troubleshooting","Release Notes"];
export default function DocsPage(){
  return (<section className="w-full py-16"><div className="container-2xl grid md:grid-cols-[260px_1fr] gap-8">
    <aside className="card sticky top-24 h-fit"><nav className="space-y-2">{nav.map(i=><a key={i} href={"#"+i.toLowerCase().replace(/\s+/g,'-')} className="footer-link block">{i}</a>)}</nav></aside>
    <article className="card prose prose-invert"><h1>Documentation</h1>
      {nav.map(i=>(<section key={i} id={i.toLowerCase().replace(/\s+/g,'-')}><h2>{i}</h2><p>[PLACEHOLDER] Section content for {i}.</p></section>))}
    </article>
  </div></section>);
}
