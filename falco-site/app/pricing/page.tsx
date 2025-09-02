import { PricingTable } from "@/components/Pricing";
export const metadata = { title: "Pricing — Falco", description: "Choose a plan that fits your setup" };
export default function PricingPage(){
  return (<section className="w-full py-16">
    <div className="container-2xl grid gap-8">
      <h1 className="text-3xl font-bold">Pricing</h1>
      <PricingTable />
      <p className="container-2xl text-offwhite/60 text-sm max-w-3xl mx-auto">Educational use only. Not investment advice. Past performance is not indicative of future results.</p>
    </div>
  </section>);
}
