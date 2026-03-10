/**
 * Reusable Button component
 * variant: 'primary' | 'secondary' | 'ghost' | 'outline'
 * size:    'sm' | 'md' | 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-roboto font-700 tracking-wide transition-all duration-200 cursor-pointer select-none rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-sky focus-visible:ring-offset-2'

  const variants = {
    primary:
      'bg-gradient-brand text-white shadow-brand-sm hover:-translate-y-0.5 hover:shadow-brand active:translate-y-0',
    secondary:
      'bg-white text-brand-navy shadow-brand-sm hover:-translate-y-0.5 hover:shadow-brand active:translate-y-0',
    ghost:
      'bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40',
    outline:
      'bg-transparent text-brand-navy border-2 border-brand-navy hover:bg-brand-navy hover:text-white',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const disabledClass = disabled ? 'opacity-50 pointer-events-none' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
