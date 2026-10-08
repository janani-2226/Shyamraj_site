import DotField from './DotField'
import { Button } from './ui'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900">
      <DotField />

      <div className="container-site relative grid items-center gap-14 pt-16 pb-12 md:pt-20 lg:grid-cols-[1fr_440px] lg:gap-20 lg:pt-20">
        <div>
          <p className="eyebrow flex items-center gap-3 text-brand">
            <span className="h-px w-5 bg-brand" aria-hidden="true" />
            Professional Speaker · Communication Skills Trainer
          </p>
          <h1 className="mt-6 text-5xl leading-[1.02] font-extrabold tracking-[-0.04em] text-white sm:text-6xl lg:text-[4rem]">
            I teach people to <span className="text-brand">be heard.</span>
          </h1>
          <p className="mt-7 max-w-[500px] text-lg leading-relaxed text-slate-200">
            Spoken English and communication training for schools, colleges and corporate teams across Tamil Nadu —
            delivered through four tested programs and more than a decade on stage.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact">Request a session</Button>
            <Button href="#programs" variant="outlineDark">
              View the programs
            </Button>
          </div>
          <div className="mt-8 max-w-[420px] space-y-2 border-t border-white/10 pt-6 text-[11px] tracking-[0.16em] uppercase">
            <p className="text-slate-400">
              Founder · <span className="font-semibold text-white">Beehive Communication Club</span>
            </p>
            <p className="text-slate-400">
              Founder · <span className="font-semibold text-white">Virudhunagar Toastmasters</span>
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] pr-3 pb-3">
          <div className="absolute top-[46%] right-0 bottom-0 left-[47%] bg-brand" aria-hidden="true" />
          <img
            src="/images/hero.jpg"
            alt="A. Shyamraj speaking on stage"
            className="relative aspect-[4/5] w-full object-cover"
          />
          <div className="absolute bottom-6 -left-3 border-l-4 border-brand bg-white px-5 py-4 shadow-xl sm:-left-4">
            <p className="text-3xl font-bold tracking-tight text-ink">17,303</p>
            <p className="mt-1.5 max-w-[130px] text-[10px] leading-relaxed tracking-[0.14em] text-slate-500 uppercase">
              Listeners at one lesson — Guinness World Record, 2018
            </p>
          </div>
        </div>
      </div>

      <p className="container-site relative pb-10 text-[10px] tracking-[0.2em] text-slate-500 uppercase">
        Each point behind is one person in that audience — move your cursor across them
      </p>
    </section>
  )
}
