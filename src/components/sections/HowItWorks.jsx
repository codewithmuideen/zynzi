import { Smartphone, UserPlus, Award } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { HOW_IT_WORKS } from '../../constants'

const ICONS = {
  smartphone: Smartphone,
  'user-plus': UserPlus,
  award:      Award,
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section head */}
        <div className="text-center mb-16 reveal">
          <SectionLabel className="mb-4">How it works</SectionLabel>
          <h2 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            Three steps to a real night out
          </h2>
          <p className="font-roboto font-light text-brand-body text-lg leading-relaxed max-w-md mx-auto">
            No endless profile building. No algorithm. Just real people doing real things nearby.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">

          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-[52px] left-[calc(16.66%+44px)] right-[calc(16.66%+44px)] h-px bg-gradient-to-r from-brand-sky via-brand-sky-pale to-brand-sky"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map(({ step, icon, title, desc }, idx) => {
            const Icon = ICONS[icon] ?? Smartphone
            return (
              <div
                key={step}
                className={`reveal reveal-delay-${idx + 1} flex flex-col items-center text-center relative z-10`}
              >
                {/* Number bubble */}
                <div className="relative mb-6">
                  <div className="w-[88px] h-[88px] rounded-full bg-gradient-brand shadow-brand flex items-center justify-center">
                    <Icon size={32} className="text-white" strokeWidth={1.8} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-brand-sky-pale border-2 border-white flex items-center justify-center">
                    <span className="font-roboto font-black text-brand-navy text-xs">{step}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-roboto font-bold text-brand-text text-xl mb-3">{title}</h3>
                <p className="font-roboto font-light text-brand-body text-base leading-relaxed max-w-xs">{desc}</p>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA nudge */}
        <div className="text-center mt-16 reveal">
          <p className="font-roboto text-brand-muted text-sm">
            Ready to try it?{' '}
            <button
              onClick={() => document.getElementById('hero-waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
              className="text-brand-sky font-semibold hover:underline cursor-pointer"
            >
              Join the waitlist now
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
