import { useEffect, useRef, useState } from 'react'
import { records, titles } from '../data/content'
import { SectionLabel } from './ui'

const PITCH = 2.4 // px between dots — the same for every card, so audiences are to scale

/** Draws `count` dots on a fixed pitch, wrapping to the width of the container. */
function DotPlot({ count, highlighted }) {
  const ref = useRef(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    const draw = () => {
      const dpr = window.devicePixelRatio || 1
      const width = canvas.parentElement.clientWidth
      const cols = Math.max(1, Math.floor(width / PITCH))
      const rows = Math.ceil(count / cols)
      const h = rows * PITCH
      setHeight(h)
      canvas.width = width * dpr
      canvas.height = h * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, h)
      ctx.fillStyle = highlighted ? 'rgba(227, 30, 36, 0.75)' : 'rgba(148, 163, 184, 0.55)'
      for (let i = 0; i < count; i++) {
        const x = (i % cols) * PITCH
        const y = Math.floor(i / cols) * PITCH
        ctx.fillRect(x, y, 1.4, 1.4)
      }
    }

    draw()
    const ro = new ResizeObserver(draw)
    ro.observe(canvas.parentElement)
    return () => ro.disconnect()
  }, [count, highlighted])

  return (
    <div className="w-full overflow-hidden" style={{ minHeight: height }}>
      <canvas
        ref={ref}
        role="img"
        aria-label={`${count.toLocaleString('en-IN')} dots, one per listener`}
        className="block transition-colors"
      />
    </div>
  )
}

export function Records() {
  const [hovered, setHovered] = useState(0)

  return (
    <section id="records" className="scroll-mt-20 bg-navy-900 py-24">
      <div className="container-site">
        <SectionLabel dark>Guinness World Records</SectionLabel>
        <div className="mt-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
          <h2 className="headline max-w-[760px] text-white">Four record lessons, drawn to scale.</h2>
          <p className="flex shrink-0 items-center gap-2 text-[10px] lg:mb-2 tracking-[0.18em] text-slate-400 uppercase">
            <span className="size-1.5 bg-brand" aria-hidden="true" />
            One point = one person
          </p>
        </div>
        <p className="mt-6 max-w-[720px] text-lg leading-relaxed text-slate-300">
          I was the instructing speaker on three approved Guinness World Record attempts and coordinator on a fourth.
          Each audience below is plotted at the same scale.
        </p>

        <div className="mt-11 grid border border-white/10 md:grid-cols-2">
          {records.map((r, i) => (
            <article
              key={r.title}
              onMouseEnter={() => setHovered(i)}
              onFocus={() => setHovered(i)}
              tabIndex={0}
              className={`flex min-w-0 flex-col gap-6 px-7 py-8 outline-none focus-visible:bg-white/5 ${
                i % 2 === 1 ? 'md:border-l md:border-white/10' : ''
              } ${i > 0 ? 'border-t border-white/10' : ''} ${i === 1 ? 'md:border-t-0' : ''}`}
            >
              <header>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">{r.title}</h3>
                  <time className="shrink-0 text-[10px] tracking-[0.15em] text-slate-400">{r.date}</time>
                </div>
                <p className="mt-2 text-[10px] tracking-[0.16em] text-slate-500 uppercase">{r.place}</p>
              </header>
              <DotPlot count={r.listeners} highlighted={hovered === i} />
              <p className="mt-auto flex items-baseline gap-2">
                <span className="text-3xl font-bold tracking-tight text-brand">
                  {r.listeners.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] tracking-[0.18em] text-slate-400 uppercase">Listeners</span>
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
