import { steps } from '../data/content'
import { SectionLabel } from './ui'

export default function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-paper py-24">
      <div className="container-site">
        <SectionLabel>How we work together</SectionLabel>
        <h2 className="headline mt-5 text-ink">Three steps from enquiry to delivery.</h2>

        <ol className="mt-11 grid border border-slate-200 bg-white md:grid-cols-3">
          {steps.map((step, i) => (
            <li
              key={step.title}
              className={`px-8 py-9 ${i > 0 ? 'border-t border-slate-200 md:border-t-0 md:border-l' : ''}`}
            >
              <span className="text-[11px] font-semibold tracking-[0.15em] text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-slate-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
