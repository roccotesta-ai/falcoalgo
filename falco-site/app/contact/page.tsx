export const metadata = { title: "Contact — Falco", description: "Get in touch" };
export default function ContactPage(){
  return (<section className="w-full py-16"><div className="container-2xl grid gap-8 max-w-3xl">
    <h1 className="text-3xl font-bold">Contact</h1>
    <form className="card grid gap-4" action="/api/contact" method="post">
      <div><label htmlFor="name">Name</label><input id="name" name="name" placeholder="Your name" required /></div>
      <div><label htmlFor="email">Email</label><input id="email" type="email" name="email" placeholder="you@example.com" required /></div>
      <div><label htmlFor="usecase">Use‑case</label><input id="usecase" name="usecase" placeholder="What are you building?" /></div>
      <div><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} placeholder="How can we help?" /></div>
      <button className="btn-primary">Send</button>
    </form>
    <div className="text-offwhite/60 text-sm">Support: support@falco.example — SLA: 2 business days.</div>
  </div></section>);
}
