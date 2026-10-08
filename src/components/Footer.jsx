import { contact, programs } from '../data/content'

const organisations = [
  { label: 'Beehive Communication Club', href: '#about' },
  { label: 'Virudhunagar Toastmasters', href: '#about' },
  { label: 'Abacus of English online', href: contact.courseUrl },
]

export default function Footer() {
  return (
    <footer className="border-t-2 border-brand bg-navy-800">
      <div className="container-site grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-white">A. Shyamraj</p>
          <p className="mt-4 max-w-[320px] text-sm leading-relaxed text-slate-400">
            Professional speaker and communication skills trainer. Founder of Beehive Communication Club and
            Virudhunagar Toastmasters Club, Virudhunagar, Tamil Nadu.
          </p>
        </div>
        <div>
          <p className="font-semibold text-white">Programs</p>
          <ul className="mt-4 space-y-3 text-sm">
            {programs.map((p) => (
              <li key={p.name}>
                <a href="#programs" className="text-slate-400 hover:text-white">
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Organisations</p>
          <ul className="mt-4 space-y-3 text-sm">
            {organisations.map((o) => (
              <li key={o.label}>
                <a href={o.href} className="text-slate-400 hover:text-white">
                  {o.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-site flex flex-col justify-between gap-2 border-t border-white/10 py-6 text-[10px] tracking-[0.16em] text-slate-500 uppercase sm:flex-row">
        <p>© {new Date().getFullYear()} A. Shyamraj · All rights reserved</p>
        <p>Virudhunagar, Tamil Nadu, India</p>
      </div>
    </footer>
  )
}
