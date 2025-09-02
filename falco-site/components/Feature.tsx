import Image from "next/image";
export function Feature({title,desc,imgAlt}:{title:string;desc:string;imgAlt:string;}){
  return (<div className="grid md:grid-cols-2 gap-8 items-center">
    <div className="card"><h3 className="text-xl font-semibold mb-2">{title}</h3><p className="text-offwhite/70">{desc}</p></div>
    <div className="card"><div className="aspect-[16/9] relative"><Image src="/logo.svg" alt={imgAlt} fill /></div></div>
  </div>);
}
