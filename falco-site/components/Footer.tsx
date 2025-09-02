import Link from "next/link";
export function Footer(){
  return (<footer className="bg-graphite mt-16">
    <div className="container-2xl grid md:grid-cols-4 gap-8 py-12">
      <div><h4 className="text-offwhite/80 font-semibold mb-3">Product</h4><ul className="space-y-2">
        <li><Link href="/product" className="footer-link">Overview</Link></li>
        <li><Link href="/pricing" className="footer-link">Pricing</Link></li>
        <li><Link href="/docs" className="footer-link">Docs</Link></li>
      </ul></div>
      <div><h4 className="text-offwhite/80 font-semibold mb-3">Company</h4><ul className="space-y-2">
        <li><Link href="/about" className="footer-link">About</Link></li>
        <li><Link href="/contact" className="footer-link">Contact</Link></li>
        <li><Link href="/resources/case-studies" className="footer-link">Case Studies</Link></li>
      </ul></div>
      <div><h4 className="text-offwhite/80 font-semibold mb-3">Resources</h4><ul className="space-y-2">
        <li><Link href="/resources/blog" className="footer-link">Blog</Link></li>
        <li><Link href="/resources/downloads" className="footer-link">Downloads</Link></li>
        <li><Link href="/resources/changelog" className="footer-link">Changelog</Link></li>
      </ul></div>
      <div><h4 className="text-offwhite/80 font-semibold mb-3">Legal</h4><ul className="space-y-2">
        <li><Link href="/legal/terms" className="footer-link">Terms</Link></li>
        <li><Link href="/legal/privacy" className="footer-link">Privacy</Link></li>
        <li><Link href="/legal/risk-disclosure" className="footer-link">Risk Disclosure</Link></li>
        <li><Link href="/legal/earnings-disclaimer" className="footer-link">Earnings Disclaimer</Link></li>
      </ul></div>
    </div>
    <div className="border-t border-slate/40 py-6 text-center text-offwhite/60 text-sm">© {new Date().getFullYear()} FalcoAlgo LLC. All rights reserved.</div>
  </footer>);
}
