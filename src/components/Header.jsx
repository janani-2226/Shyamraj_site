import { useEffect, useState } from 'react'
import { contact, navLinks } from '../data/content'

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}

const sectionIds = navLinks.map((l) => l.href.slice(1))

export default function Header() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  return (
    <>
      {/* Top info bar */}
      {/* <div className="hidden border-b border-white/10 bg-navy-800 md:block">
        <div className="container-site flex items-center justify-between py-2.5 text-[11px]">
          <p className="tracking-[0.18em] text-slate-400 uppercase">
            Beehive Communication Club · Virudhunagar Toastmasters
          </p>
          <p className="text-xs text-slate-300">
            <a href={`tel:${contact.phones[0].replace(/\s/g, '')}`} className="hover:text-white">
              {contact.phones[0]}
            </a>
            <span className="mx-2 text-slate-500">·</span>
            <a href={`mailto:${contact.email}`} className="hover:text-white">
              {contact.email}
            </a>
          </p>
        </div>
      </div> */}

      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-900/95 backdrop-blur">
        <div className="container-site flex items-center justify-between py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid size-8 place-items-center bg-brand text-sm font-bold text-white">S</span>
            <span className="leading-tight">
              <span className="block text-[15px] font-semibold text-white">A. Shyamraj</span>
              <span className="block text-[9px] tracking-[0.2em] text-slate-400 uppercase">
                Speaker &amp; Communication Trainer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-0 -bottom-0.5 h-0.5 bg-brand transition-transform ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              )
            })}
            <a
              href={contact.courseUrl}
              className="bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Abacus of English
            </a>
          </nav>

          <button
            className="grid size-10 place-items-center text-white lg:hidden"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="border-t border-white/10 bg-navy-900 lg:hidden" aria-label="Mobile">
            <div className="container-site flex flex-col py-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-slate-200 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a href={contact.courseUrl} className="mt-2 bg-brand px-4 py-3 text-center font-medium text-white">
                Abacus of English
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  )
}
