import { ChartDemo } from "@/components/ChartDemo";
import { ValueTiles } from "@/components/ValueTiles";
import { Feature } from "@/components/Feature";
import { CTA } from "@/components/CTA";
import Link from "next/link";

export default function HomePage(){
  return (<>
    <section className="w-full bg-gradient-to-b from-midnight to-graphite">
      <div className="container-2xl grid md:grid-cols-2 gap-8 py-20 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Algorithmic Trading Tools That Work While You Sleep.</h1>
          <p className="text-offwhite/70 mb-6">Falco delivers automated futures strategies and pro‑grade indicators to help you analyze, act, and improve — without babysitting the markets.</p>
          <div className="flex gap-3"><Link href="/pricing" className="btn-primary">Get Started</Link><Link href="/product" className="btn-secondary">View Demo</Link></div>
          <div className="mt-6 text-offwhite/50 text-sm">[Broker/Partner Logos Placeholder]</div>
        </div>
        <ChartDemo />
      </div>
    </section>
    <section className="w-full py-16"><ValueTiles /></section>
    <section className="w-full bg-slate/10 py-16">
      <div className="container-2xl grid gap-10">
        <Feature title="Automated Futures Bot" desc="Fully automated execution with broker integrations. Configure risk parameters and let the system work." imgAlt="Automated bot preview"/>
        <Feature title="Indicators Suite" desc="Trend, momentum, and volatility filters to clarify market regimes." imgAlt="Indicators preview"/>
        <Feature title="Risk & Journaling" desc="Position sizing templates, drawdown guards, and PnL journaling keep you consistent." imgAlt="Risk tools preview"/>
      </div>
    </section>
    <section className="w-full py-16">
      <div className="container-2xl"><div className="card"><h3 className="text-xl font-semibold mb-2">What traders say</h3><p className="text-offwhite/70">“Falco helps me focus on risk while automating the rest.” — [Name]</p></div></div>
    </section>
    <CTA />
  </>);
}
