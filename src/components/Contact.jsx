import { contact, programs } from '../data/content'
import { Button, SectionLabel } from './ui'

const fieldClass =
  'w-full border-0 border-b border-white/20 bg-transparent px-1 py-3 text-white placeholder:text-slate-500 focus:border-brand focus:ring-0 focus:outline-none'
const labelClass = 'text-[10px] tracking-[0.18em] text-slate-400 uppercase'

function Field({ label, name, type = 'text', placeholder, required }) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input name={name} type={type} placeholder={placeholder} required={required} className={`${fieldClass} mt-2`} />
    </label>
  )
}

function SocialIcon({ label }) {
  const paths = {
    Facebook: 'M14 8h2V5h-2.5C11 5 10 6.6 10 9v2H8v3h2v7h3v-7h2.4l.6-3h-3V9.2c0-.8.3-1.2 1-1.2z',
    Instagram:
      'M12 8.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5zM7.5 4h9A3.5 3.5 0 0 1 20 7.5v9a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 16.5v-9A3.5 3.5 0 0 1 7.5 4zm9.8 2.2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z',
    YouTube: 'M21 8.2a2.6 2.6 0 0 0-1.8-1.8C17.6 6 12 6 12 6s-5.6 0-7.2.4A2.6 2.6 0 0 0 3 8.2 27 27 0 0 0 3 12a27 27 0 0 0 .4 3.8 2.6 2.6 0 0 0 1.8 1.8C6.4 18 12 18 12 18s5.6 0 7.2-.4a2.6 2.6 0 0 0 1.8-1.8A27 27 0 0 0 21 12a27 27 0 0 0 0-3.8zM10.2 14.5v-5L14.8 12z',
    LinkedIn:
      'M6.5 9H4v11h2.5zM5.2 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM20 13.6c0-3-1.6-4.6-3.8-4.6a3.3 3.3 0 0 0-3 1.6V9H10.8v11h2.5v-6c0-1.5.8-2.5 2-2.5s1.9.9 1.9 2.5v6H20z',
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={paths[label]} />
    </svg>
  )
}

export default function Contact({ program, onProgramChange }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget))
    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `School / organisation: ${data.organisation}`,
      `Program of interest: ${data.program}`,
      `Approximate group size: ${data.size}`,
      `Preferred timeframe: ${data.timeframe}`,
      '',
      'What we would like to achieve:',
      data.goal,
    ].join('\n')
    const subject = `Programme enquiry — ${data.program}${data.organisation ? ` · ${data.organisation}` : ''}`
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-navy-900 pt-24 pb-24">
      <div className="container-site">
        <SectionLabel dark>Contact</SectionLabel>
        <h2 className="headline mt-5 text-white">Bring a program to your campus or team.</h2>

        <div className="mt-11 grid gap-14 lg:grid-cols-[1fr_560px] lg:gap-10">
          <address className="space-y-9 not-italic">
            <div>
              <p className="eyebrow text-brand">Office</p>
              <p className="mt-3 leading-relaxed text-slate-300">
                {contact.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <div>
              <p className="eyebrow text-brand">Direct lines</p>
              <ul className="mt-3 space-y-2">
                {contact.phones.map((p) => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="text-white underline-offset-4 underline decoration-white/30 hover:decoration-brand">
                      {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${contact.email}`} className="text-white underline-offset-4 underline decoration-white/30 hover:decoration-brand">
                    {contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-brand">Elsewhere</p>
              <ul className="mt-3 flex gap-2">
                {contact.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      aria-label={s.label}
                      className="grid size-10 place-items-center border border-white/20 text-white transition-colors hover:border-brand hover:bg-brand"
                    >
                      <SocialIcon label={s.label} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </address>

          <form onSubmit={handleSubmit} className="grid gap-x-4 gap-y-7 sm:grid-cols-2">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="School or organisation" name="organisation" />
            <label className="block">
              <span className={labelClass}>Program of interest</span>
              <select
                name="program"
                value={program}
                onChange={(e) => onProgramChange(e.target.value)}
                className={`${fieldClass} mt-2 cursor-pointer [&>option]:text-ink`}
              >
                {programs.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
                <option>Not sure yet</option>
              </select>
            </label>
            <Field label="Approximate group size" name="size" />
            <Field label="Preferred timeframe" name="timeframe" placeholder="e.g. next term" />
            <label className="block sm:col-span-2">
              <span className={labelClass}>What would you like to achieve?</span>
              <textarea name="goal" rows={4} className={`${fieldClass} mt-2 resize-y`} />
            </label>
            <div className="sm:col-span-2">
              <Button as="button" type="submit">
                Send enquiry
              </Button>
              <p className="mt-3 text-[11px] tracking-wide text-slate-500">
                Opens your mail application with the details filled in.
              </p>
            </div>
          </form>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 bg-brand px-9 py-11 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-white">Abacus of English, delivered home</h3>
            <p className="mt-2 max-w-[520px] leading-relaxed text-white/90">
              Registered learners get the full 32-hour story-based course online. Sign in to continue, or create an
              account to begin.
            </p>
          </div>
          <Button href={contact.courseUrl} variant="navy" className="shrink-0">
            Register or sign in
          </Button>
        </div>
      </div>
    </section>
  )
}
