import { associations, stats } from '../data/content'
import { SectionLabel } from './ui'

export function Associations() {
  return (
    <div className="bg-navy-800">
      <div className="container-site flex flex-wrap items-center gap-x-11 gap-y-4 py-7 text-[11px] tracking-[0.18em] uppercase">
        <span className="text-slate-500">Associated with</span>
        {associations.map((a) => (
          <span key={a} className="font-medium text-slate-300">
            {a}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Stats() {
  return (
    <section className="bg-white py-14">
      <div className="container-site grid grid-cols-2 border border-slate-200 lg:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`px-6 py-6 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${
              i === 2 ? 'lg:border-l' : ''
            } border-slate-200`}
          >
            <p className="text-4xl font-bold tracking-tight text-ink">{s.value}</p>
            <p className="mt-2 text-sm text-slate-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-paper py-24">
      <div className="container-site grid gap-14 lg:grid-cols-[1fr_460px] lg:gap-16">
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="headline mt-5 text-ink">I start with the fear, not the grammar.</h2>
          <p className="mt-8 text-lg leading-relaxed text-slate-700">
            I teach English as a foreign language — to school students, to teachers, and to people at work who read a
            sentence perfectly well but freeze before saying it aloud.
          </p>
          <p className="mt-6 text-[15px] leading-[1.75] text-slate-600">
            In 2015 I chartered the Virudhunagar Toastmasters Club and founded Beehive Communication Club. Since then:
            four District 82 titles, three Guinness World Record lessons as instructing speaker, and Odyssey — a school
            programme now delivered by around forty-five trainers across more than thirty-five schools in Tamil Nadu.
          </p>
          <blockquote className="mt-10 border-l-4 border-brand pl-6">
            <p className="text-2xl leading-snug font-bold tracking-tight text-ink">
              Fear is good. Fear alone commands preparation and sincerity.
            </p>
            <footer className="mt-4 text-[11px] tracking-[0.18em] text-slate-500 uppercase">A. Shyamraj</footer>
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-2.5 self-start">
          <img
            src="/images/about-1.jpg"
            alt="Shyamraj on stage at a Toastmasters conference"
            className="col-span-2 aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/about-2.jpg"
            alt="Shyamraj greeting the audience"
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
          <img
            src="/images/about-3.jpg"
            alt="Toastmasters event backdrop"
            className="aspect-square w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
