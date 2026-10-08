import { testimonials } from '../data/content'
import { SectionLabel } from './ui'

const avatarColors = ['bg-orange-400', 'bg-rose-400']

export default function Testimonials() {
  return (
    <section className="bg-paper py-24">
      <div className="container-site">
        <SectionLabel>Client feedback</SectionLabel>
        <h2 className="headline mt-5 text-ink">From the principals who engaged us.</h2>

        <div className="mt-11 grid border border-slate-200 bg-white md:grid-cols-2">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`flex flex-col gap-7 px-9 py-11 ${i > 0 ? 'border-t border-slate-200 md:border-t-0 md:border-l' : ''}`}
            >
              <blockquote className="text-lg leading-[1.6] font-semibold text-ink">{t.quote}</blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-slate-200 pt-5">
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold text-white ${avatarColors[i % 2]}`}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-[11px] font-semibold tracking-[0.16em] text-ink uppercase">{t.name}</span>
                  <span className="mt-1 block text-[10px] tracking-[0.14em] text-slate-500 uppercase">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
