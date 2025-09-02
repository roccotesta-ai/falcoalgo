'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu } from "lucide-react";
export function Navbar(){
  const [open,setOpen]=useState(false);
  return (<header className="sticky top-0 z-50 bg-midnight/80 backdrop-blur">
    <div className="container-2xl flex items-center justify-between py-4">
      <Link href="/" className="flex items-center gap-3"><Image src="/logo.svg" alt="Falco logo" width={36} height={36}/><span className="font-semibold">Falco</span></Link>
      <nav className="hidden md:flex items-center gap-6">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/product" className="nav-link">Product</Link>
        <Link href="/pricing" className="nav-link">Pricing</Link>
        <Link href="/academy" className="nav-link">Academy</Link>
        <div className="group relative">
          <button className="nav-link">Resources</button>
          <div className="absolute opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto bg-graphite rounded-xl p-3 mt-2 w-56 shadow-soft">
            <div className="flex flex-col gap-2">
              <Link href="/resources" className="nav-link">Overview</Link>
              <Link href="/resources/blog" className="nav-link">Blog</Link>
              <Link href="/resources/case-studies" className="nav-link">Case Studies</Link>
              <Link href="/resources/changelog" className="nav-link">Changelog</Link>
              <Link href="/resources/downloads" className="nav-link">Downloads</Link>
            </div>
          </div>
        </div>
        <Link href="/docs" className="nav-link">Docs</Link>
        <Link href="/about" className="nav-link">About</Link>
      </nav>
      <div className="hidden md:flex items-center gap-3">
        <Link href="/contact" className="btn-secondary">Login</Link>
        <Link href="/pricing" className="btn-primary">Get Started</Link>
      </div>
      <button onClick={()=>setOpen(v=>!v)} className="md:hidden p-2 rounded-xl border border-slate/50"><Menu size={20}/></button>
    </div>
    {open && (
      <div className="md:hidden border-t border-slate/50 bg-midnight">
        <div className="container-2xl py-4 grid gap-3">
          {['/','/product','/pricing','/academy','/resources','/docs','/about','/contact'].map(h=>(
            <Link key={h} href={h} className="nav-link" onClick={()=>setOpen(false)}>{h=='/'?'Home':h.slice(1)}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/contact" className="btn-secondary">Login</Link>
            <Link href="/pricing" className="btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
    )}
  </header>);
}
