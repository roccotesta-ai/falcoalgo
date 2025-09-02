export const metadata = { title: "Product — Falco", description: "Falco Bot and Indicators overview" };
export default function ProductPage(){
  return (<section className="w-full py-16">
    <div className="container-2xl grid gap-8">
      <h1 className="text-3xl font-bold">Product</h1>
      <div className="card overflow-x-auto">
        <table>
          <thead><tr><th>Feature</th><th>Falco Bot</th><th>Falco Indicators</th></tr></thead>
          <tbody>
            <tr><td>Purpose</td><td>Automated execution</td><td>Signal visualization</td></tr>
            <tr><td>Markets</td><td>E‑mini S&P (and more)</td><td>TradingView markets</td></tr>
            <tr><td>Risk</td><td>Position sizing, drawdown guards</td><td>Regime & momentum filters</td></tr>
            <tr><td>Setup</td><td>Connect broker → configure risk → go live</td><td>Add to chart → configure inputs</td></tr>
          </tbody>
        </table>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="card"><h3 className="font-semibold mb-2">Platforms</h3><p className="text-offwhite/70">TradingView visuals and optional MT5 integration.</p></div>
        <div className="card"><h3 className="font-semibold mb-2">Compliance</h3><p className="text-offwhite/70">Educational use only. No guarantees. Past performance isn’t indicative of future results.</p></div>
      </div>
    </div>
  </section>);
}
