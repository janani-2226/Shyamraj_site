import { records, titles } from '../data/content'
import { SectionLabel } from './ui'

export function Records() {
  return (
    <section id="records" className="scroll-mt-20 bg-navy-900 py-24">
      <div className="container-site">
        <SectionLabel dark>Guinness World Records</SectionLabel>
        <h2 className="headline mt-5 max-w-[760px] text-white">Four record lessons.</h2>
        <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-slate-300">
          I was the instructing speaker on three approved Guinness World Record attempts and coordinator on a fourth.
        </p>

        <div className="mt-11 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {records.map((r) => (
            <article key={r.title} className="min-w-0 border-t-2 border-brand bg-navy-800 p-7">
              <p className="text-4xl leading-none font-bold tracking-tight text-white">
                {r.listeners.toLocaleString('en-IN')}
              </p>
              <p className="mt-2 text-[10px] tracking-[0.18em] text-slate-400 uppercase">Listeners</p>
              <h3 className="mt-6 text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-2 text-[10px] leading-relaxed tracking-[0.16em] text-slate-500 uppercase">
                {r.date} · {r.place}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Recognition() {
  return (
    <section className="bg-white py-24">
      <div className="container-site">
        <SectionLabel>Recognition</SectionLabel>
        <h2 className="headline mt-5 text-ink">Four District 82 titles, in order.</h2>

        <ul className="mt-11 border-t border-slate-200">
          {titles.map((t) => (
            <li
              key={t.name}
              className="grid grid-cols-[80px_1fr] items-center gap-x-6 gap-y-1 border-b border-slate-200 py-5 sm:grid-cols-[130px_1fr_auto]"
            >
              <span className="text-[11px] font-semibold tracking-[0.15em] text-brand uppercase">{t.year}</span>
              <span className="text-lg text-ink">{t.name}</span>
              <span className="col-start-2 text-[10px] tracking-[0.16em] text-slate-500 uppercase sm:col-start-auto">
                {t.note}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
