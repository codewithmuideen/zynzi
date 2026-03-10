import { CheckCircle, Loader2, AlertCircle, ArrowRight } from 'lucide-react'
import useWaitlistForm from '../../hooks/useWaitlistForm'
import { USER_TYPE_OPTIONS } from '../../constants'

/**
 * Reusable waitlist signup form.
 * theme: 'dark' (hero/finalCTA) | 'light'
 * showTypeSelect: whether to show the "I am a…" dropdown
 */
export default function WaitlistForm({
  theme = 'dark',
  showTypeSelect = true,
  id = 'waitlist',
  ctaLabel = 'Get Early Access',
}) {
  const { email, setEmail, userType, setUserType, status, handleSubmit } = useWaitlistForm()

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

  if (status === 'success') {
    return (
      <div
        className={`
          flex items-center gap-3 px-5 py-4 rounded-xl border font-roboto font-semibold text-sm
          ${isDark
            ? 'bg-brand-green/10 border-brand-green/30 text-brand-green'
            : 'bg-brand-navy/5 border-brand-navy/20 text-brand-navy'}
        `}
      >
        <CheckCircle className="shrink-0" size={20} />
        <span>You're on the list! We'll be in touch before our London &amp; Sheffield launch.</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3">
        {showTypeSelect && (
          <select
            id={`${id}-type`}
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className={`${inputBase} ${isDark ? inputDark : inputLight} sm:w-48 shrink-0 cursor-pointer appearance-none`}
            aria-label="I am a…"
            style={{ backgroundImage: 'none' }}
          >
            {USER_TYPE_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}
                className={isDark ? 'bg-[#1a3468] text-white' : 'bg-white text-brand-text'}
              >
                {opt.label}
              </option>
            ))}
          </select>
        )}

        <input
          id={`${id}-email`}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          autoComplete="email"
          aria-label="Email address"
          className={`
            ${inputBase} flex-1
            ${isDark ? inputDark : inputLight}
            ${status === 'error' ? '!border-red-400' : ''}
          `}
        />

        <button
          type="submit"
          disabled={status === 'loading'}
          className={`
            inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
            font-roboto font-bold text-sm tracking-wide whitespace-nowrap
            transition-all duration-200 cursor-pointer shrink-0
            ${isDark
              ? 'bg-white text-brand-navy hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(255,255,255,0.2)] active:translate-y-0'
              : 'bg-gradient-brand text-white shadow-brand-sm hover:-translate-y-0.5 hover:shadow-brand active:translate-y-0'}
            disabled:opacity-60 disabled:pointer-events-none
          `}
        >
          {status === 'loading' ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <>
              {ctaLabel}
              <ArrowRight size={16} />
            </>
          )}
        </button>
      </div>

      {status === 'error' && (
        <p className="flex items-center gap-1.5 text-red-400 text-xs font-roboto">
          <AlertCircle size={13} />
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}
