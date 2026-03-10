import { MapPin, Camera, Star, ShieldCheck } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { TRUST_CARDS } from '../../constants'

const ICONS = {
  'map-pin':     MapPin,
  camera:        Camera,
  star:          Star,
  'shield-check': ShieldCheck,
}

export default function TrustSection() {
  return (
    <section id="safety" className="relative bg-gradient-hero py-24 overflow-hidden">

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" aria-hidden="true" />

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-sky/15 blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-navy/40 blur-[80px] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-5">

        {/* Section head */}
        <div className="text-center mb-16 reveal">
          <SectionLabel variant="dark" className="mb-4">Safety Promise</SectionLabel>
          <h2 className="font-roboto font-black text-white text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            Your safety isn't a feature.<br className="hidden sm:block" /> It's the foundation.
          </h2>
          <p className="font-roboto font-light text-white/60 text-lg leading-relaxed max-w-md mx-auto">
            Every decision we've made in building Zynzi starts with one question: is this safe?
          </p>
        </div>

        {/* Trust cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_CARDS.map(({ icon, title, desc }, idx) => {
            const Icon = ICONS[icon] ?? ShieldCheck
            return (
              <div
                key={title}
                className={`reveal reveal-delay-${(idx % 4) + 1} group glass rounded-2xl p-6
                  hover:bg-white/12 hover:border-brand-sky/25
                  transition-all duration-300 cursor-default`}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center mb-5 shadow-glow-sm group-hover:shadow-glow transition-shadow duration-300">
                  <Icon size={22} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="font-roboto font-bold text-white text-base mb-2.5">{title}</h3>
                <p className="font-roboto font-light text-white/60 text-sm leading-relaxed">{desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom reassurance bar */}
        <div className="mt-14 flex flex-wrap justify-center gap-8 reveal">
          {[
            { stat: '100%',  label: 'Public-first for new users' },
            { stat: '24/7',  label: 'Moderation active' },
            { stat: '< 1hr', label: 'Response to reports' },
          ].map(({ stat, label }) => (
            <div key={stat} className="text-center">
              <div className="font-roboto font-black text-brand-sky-light text-2xl mb-1">{stat}</div>
              <div className="font-roboto text-xs text-white/45 tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
