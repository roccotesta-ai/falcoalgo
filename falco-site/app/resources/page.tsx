import Link from "next/link";
export const metadata = { title: "Resources — Falco", description: "Blog, Case Studies, Changelog, Downloads" };
const items = [
  {href:"/resources/blog", title:"Blog", desc:"Automation, risk, strategy, updates"},
  {href:"/resources/case-studies", title:"Case Studies", desc:"Anonymized outcomes & processes"},
  {href:"/resources/changelog", title:"Changelog", desc:"Release history and notes"},
  {href:"/resources/downloads", title:"Downloads", desc:"Whitepapers and PDFs"},
];
export default function ResourcesPage(){
  return (<section className="w-full py-16"><div className="container-2xl grid gap-8">
    <h1 className="text-3xl font-bold">Resources</h1>
    <div className="grid md:grid-cols-2 gap-6">{items.map(i=>(
      <Link key={i.href} href={i.href} className="card hover:scale-[1.01] transition"><h3 className="font-semibold mb-1">{i.title}</h3><p className="text-offwhite/70">{i.desc}</p></Link>
    ))}</div>
  </div></section>);
}
