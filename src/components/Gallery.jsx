import { useEffect, useState } from 'react'
import { galleryFilters, photos, videos } from '../data/content'
import { SectionLabel } from './ui'

function Lightbox({ photo, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      onClick={onClose}
    >
      <figure className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <img src={photo.src} alt={photo.caption} className="max-h-[80vh] w-auto" />
        <figcaption className="mt-3 flex items-center justify-between text-xs tracking-[0.16em] text-slate-300 uppercase">
          {photo.caption}
          <button onClick={onClose} className="text-white hover:text-brand">
            Close ✕
          </button>
        </figcaption>
      </figure>
    </div>
  )
}

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [open, setOpen] = useState(null)

  const matches = (item) => filter === 'All' || item.category === filter
  const shownPhotos = photos.filter(matches)
  const shownVideos = videos.filter(matches)

  return (
    <section id="gallery" className="scroll-mt-20 bg-navy-900 py-24">
      <div className="container-site">
        <SectionLabel dark>In the room</SectionLabel>
        <h2 className="headline mt-5 text-white">The first impression is not the final impression.</h2>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter gallery">
          {galleryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2 text-sm transition-colors ${
                filter === f
                  ? 'bg-brand text-white'
                  : 'border border-white/20 text-slate-300 hover:border-white/50 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {shownPhotos.map((p) => (
            <button
              key={p.src}
              onClick={() => setOpen(p)}
              className="group relative aspect-[4/3] overflow-hidden text-left"
            >
              <img
                src={p.src}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950/90 to-transparent px-3.5 pt-10 pb-3 text-[10px] font-semibold tracking-[0.16em] text-white uppercase">
                {p.caption}
              </span>
            </button>
          ))}
        </div>

        {shownVideos.length > 0 && (
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {shownVideos.map((v) => (
              <a
                key={v.src}
                href={v.href}
                target="_blank"
                rel="noreferrer"
                className="group block border border-white/10 bg-navy-800 transition-colors hover:border-white/30"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={v.src}
                    alt={`Video: ${v.caption}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                  />
                </div>
                <p className="px-4 py-4 text-[10px] tracking-[0.16em] text-slate-300 uppercase">{v.caption}</p>
              </a>
            ))}
          </div>
        )}
      </div>

      {open && <Lightbox photo={open} onClose={() => setOpen(null)} />}
    </section>
  )
}
