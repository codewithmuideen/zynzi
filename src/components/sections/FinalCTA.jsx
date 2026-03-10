import WaitlistForm from '../ui/WaitlistForm'

export default function FinalCTA() {
  return (
    <section className="relative bg-gradient-brand py-28 overflow-hidden">

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-white/10 blur-[80px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-brand-navy/30 blur-[80px] pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-5 text-center">

        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="font-roboto font-semibold text-xs text-white/90 tracking-wide">
            London &amp; Sheffield - Coming 2025
          </span>
        </div>

        <h2 className="font-roboto font-black text-white text-[clamp(2.2rem,5vw,4rem)] leading-[1.05] tracking-tight mb-5">
          London &amp; Sheffield<br /> are waiting.<br />
          <span className="text-brand-sky-pale">Are you?</span>
        </h2>

        <p className="font-roboto font-light text-white/70 text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Join the waitlist today and be the first to access Zynzi when we launch. Your city is full of people. Go meet them.
        </p>

        <div id="final-waitlist" className="mb-6">
          <WaitlistForm
            theme="dark"
            showTypeSelect={false}
            id="final"
            ctaLabel="Claim Your Spot"
          />
        </div>

        <p className="font-roboto text-xs text-white/40">
          No spam. No nonsense. Just a heads-up when we go live in your city.
        </p>

        {/* City badges */}
        <div className="flex items-center justify-center gap-4 mt-10">
          {['London', 'Sheffield'].map((city) => (
            <div
              key={city}
              className="glass rounded-full px-5 py-2 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="font-roboto font-semibold text-sm text-white/85">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
