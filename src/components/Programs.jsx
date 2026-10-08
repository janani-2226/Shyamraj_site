import { useState } from 'react'
import { programs } from '../data/content'
import { Button, SectionLabel } from './ui'

function ScreenIcon() {
  return (
    <svg width="44" height="30" viewBox="0 0 44 30" aria-hidden="true">
      <rect x="3" y="1" width="38" height="24" rx="1.5" fill="#0b192f" />
      <rect x="5.5" y="3.5" width="33" height="19" fill="#c7d2fe" />
      <circle cx="22" cy="11" r="3" fill="#0b192f" />
      <path d="M17 22.5c0-3.5 2.2-6 5-6s5 2.5 5 6z" fill="#0b192f" />
      <rect x="0" y="26" width="44" height="2.5" rx="1" fill="#0b192f" />
    </svg>
  )
}

export default function Programs({ onRequest }) {
  const [active, setActive] = useState(0)
  const program = programs[active]

  return (
    <section id="programs" className="scroll-mt-20 bg-white py-24">
      <div className="container-site">
        <SectionLabel>Programs</SectionLabel>
        <h2 className="headline mt-5 text-ink">Four programs, each with a defined format.</h2>

        <div className="mt-11 grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-[50px]">
          <div role="tablist" aria-label="Programs" className="border-t border-slate-200">
            {programs.map((p, i) => {
              const isActive = i === active
              return (
                <button
                  key={p.name}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="program-panel"
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center gap-4 border-b border-slate-200 py-5 text-left"
                >
                  <span className={`text-[10px] tracking-wider ${isActive ? 'text-brand' : 'text-slate-400'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 text-xl font-semibold tracking-tight transition-colors ${
                      isActive ? 'text-ink' : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  >
                    {p.name}
                  </span>
                  <span
                    className={`h-0.5 w-5 bg-brand transition-opacity ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    aria-hidden="true"
                  />
                </button>
              )
            })}
          </div>

          <div id="program-panel" role="tabpanel" key={program.name} className="animate-[fade_.35s_ease]">
            <ScreenIcon />
            <p className="mt-7 max-w-[570px] text-base leading-[1.75] text-slate-600">{program.description}</p>

            <dl className="mt-7 grid border border-slate-200 sm:grid-cols-3">
              {[
                ['Duration', program.duration],
                ['Audience', program.audience],
                ['Format', program.format],
              ].map(([label, value], i) => (
                <div
                  key={label}
                  className={`px-4 py-5 ${i > 0 ? 'border-t border-slate-200 sm:border-t-0 sm:border-l' : ''}`}
                >
                  <dt className="text-[10px] tracking-[0.18em] text-slate-500 uppercase">{label}</dt>
                  <dd className="mt-2 text-sm font-medium text-ink">{value}</dd>
                </div>
              ))}
            </dl>

            <Button
              href="#contact"
              variant="outlineLight"
              className="mt-6"
              onClick={() => onRequest?.(program.name)}
            >
              Request this program
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
