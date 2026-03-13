import { CheckCircle, Loader2, AlertCircle, ArrowRight } from 'lucide-react'
import { USER_TYPE_OPTIONS } from '../../constants'

export default function WaitlistForm({
  theme = 'dark',
  showTypeSelect = true,
  id = 'waitlist',
  ctaLabel = 'Get Early Access',
}) {

  const isDark = theme === 'dark'

  const inputBase = `
    w-full font-roboto text-sm px-4 py-3.5 rounded-xl border outline-none
    transition-all duration-200
  `

  const inputDark = `
    bg-white/10 border-white/20 text-white placeholder-white/40
    focus:border-brand-sky-light focus:bg-white/15
  `

  const inputLight = `
    bg-white border-brand-border text-brand-text placeholder-brand-muted
    focus:border-brand-sky focus:ring-2 focus:ring-brand-sky/10
  `

  return (
    <form action="waitlist.php" method="post" className="flex flex-col gap-3">

      <div className="flex flex-col sm:flex-row gap-3">

        {showTypeSelect && (
          <select
            id={`${id}-type`}
            name="userType"
            required
            className={`${inputBase} ${isDark ? inputDark : inputLight} sm:w-48 shrink-0 cursor-pointer appearance-none`}
            aria-label="I am a…"
            style={{ backgroundImage: 'none' }}
          >
            <option value="">I am a...</option>

            {USER_TYPE_OPTIONS.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className={isDark ? 'bg-[#1a3468] text-white' : 'bg-white text-brand-text'}
              >
                {opt.label}
              </option>
            ))}
          </select>
        )}

        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          placeholder="Your email address"
          autoComplete="email"
          aria-label="Email address"
          className={`
            ${inputBase} flex-1
            ${isDark ? inputDark : inputLight}
          `}
        />

        <button
          type="submit"
          className={`
            inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
            font-roboto font-bold text-sm tracking-wide whitespace-nowrap
            transition-all duration-200 cursor-pointer shrink-0
            ${isDark
              ? 'bg-white text-brand-navy hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] active:translate-y-0'
              : 'bg-gradient-brand text-white shadow-brand-sm hover:-translate-y-0.5 hover:shadow-brand active:translate-y-0'}
          `}
        >
          {ctaLabel}
          <ArrowRight size={16} />
        </button>

      </div>

    </form>
  )
}