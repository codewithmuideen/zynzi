/**
 * Small uppercase eyebrow label used above section headings.
 * variant: 'light' (sky blue) | 'dark' (used on dark backgrounds)
 */
export default function SectionLabel({ children, variant = 'light', className = '' }) {
  const colors = {
    light: 'text-brand-sky bg-brand-sky/10 border-brand-sky/20',
    dark:  'text-brand-sky-light bg-brand-sky-light/10 border-brand-sky-light/20',
  }

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-1.5 rounded-full border
        text-xs font-bold tracking-[0.22em] uppercase font-roboto
        ${colors[variant]} ${className}
      `}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {children}
    </span>
  )
}
