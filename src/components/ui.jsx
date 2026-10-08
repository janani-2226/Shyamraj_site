export function SectionLabel({ children, dark = false, className = '' }) {
  return (
    <p className={`eyebrow flex items-center gap-3 ${dark ? 'text-white' : 'text-brand'} ${className}`}>
      <span className="h-px w-5 bg-brand" aria-hidden="true" />
      {children}
    </p>
  )
}

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  outlineDark: 'border border-white/25 text-white hover:border-white hover:bg-white/5',
  outlineLight: 'border border-slate-300 text-ink hover:border-ink',
  navy: 'bg-navy-900 text-white hover:bg-navy-950',
}

export function Button({ as: Tag = 'a', variant = 'primary', className = '', children, ...props }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
