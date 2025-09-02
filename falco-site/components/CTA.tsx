import Link from "next/link";
export function CTA(){
  return (<section className="w-full bg-slate/20">
    <div className="container-2xl py-16 text-center">
      <h3 className="text-2xl font-semibold mb-3">Ready to trade smarter?</h3>
      <p className="text-offwhite/70 mb-6">Automate workflows, visualize regimes, and manage risk responsibly.</p>
      <div className="flex items-center gap-3 justify-center">
        <Link href="/pricing" className="btn-primary">Get Started</Link>
        <Link href="/product" className="btn-secondary">View Demo</Link>
      </div>
    </div>
  </section>);
}
