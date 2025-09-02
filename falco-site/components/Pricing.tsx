'use client';
import { useState } from "react";
const plans = (annual:boolean)=>[
  {name:"Starter", price: annual?19:24, features:["Indicators","Basic support"]},
  {name:"Pro", price: annual?49:59, features:["Indicators + Bot license","Priority email support"]},
  {name:"Enterprise", price: annual?129:149, features:["Custom SLAs","Dedicated support","Onboarding"]},
];
export function PricingTable(){
  const [annual,setAnnual]=useState(true);
  const data=plans(annual);
  return (<section className="container-2xl py-8">
    <div className="flex items-center justify-center gap-3 mb-6">
      <button className={`btn-secondary ${annual?'opacity-60':''}`} onClick={()=>setAnnual(false)}>Monthly</button>
      <button className={`btn-primary ${annual?'':'opacity-60'}`} onClick={()=>setAnnual(true)}>Annual</button>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {data.map(p=>(<div key={p.name} className="card">
        <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
        <div className="text-3xl font-bold mb-2">${p.price}<span className="text-offwhite/60 text-base">/{annual?'yr':'mo'}</span></div>
        <ul className="space-y-2 mb-6">{p.features.map(f=><li key={f} className="text-offwhite/70">• {f}</li>)}</ul>
        <button className="btn-primary w-full">Choose {p.name}</button>
      </div>))}
    </div>
    <div className="mt-8 max-w-3xl mx-auto">
      <details className="card"><summary className="cursor-pointer font-semibold">FAQ — Billing & Licenses</summary>
        <div className="mt-3 text-offwhite/70">Refunds are case‑by‑case. Licenses are per seat. Contact support for upgrades.</div>
      </details>
    </div>
  </section>);
}
