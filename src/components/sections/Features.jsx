import { Zap, Shield, Target, TrendingUp, Globe, Gift } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { FEATURES } from '../../constants'

const ICONS = {
  zap:         Zap,
  shield:      Shield,
  target:      Target,
  'trending-up': TrendingUp,
  globe:       Globe,
  gift:        Gift,
}

export default function Features() {
  return (
    <section id="features" className="bg-brand-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section head */}
        <div className="text-center mb-16 reveal">
          <SectionLabel className="mb-4">Why Zynzi</SectionLabel>
          <h2 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            Built for real life. Not swipes.
          </h2>
          <p className="font-roboto font-light text-brand-body text-lg leading-relaxed max-w-md mx-auto">
            Every feature in Zynzi is designed around one goal: getting real people into the same room, safely.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map(({ icon, title, desc }, idx) => {
            const Icon = ICONS[icon] ?? Zap
            const isEven = idx % 2 === 0
            return (
              <div
                key={title}
                className={`reveal reveal-delay-${(idx % 3) + 1} group bg-white rounded-2xl p-7 border border-brand-border
                  hover:-translate-y-1.5 hover:shadow-brand hover:border-brand-sky/40
                  transition-all duration-300 cursor-default`}
              >
                {/* Icon box */}
                <div className={`
                  w-14 h-14 rounded-2xl mb-5 flex items-center justify-center
                  shadow-brand-sm transition-all duration-300
                  ${isEven
                    ? 'bg-gradient-brand group-hover:shadow-glow-sm'
                    : 'bg-gradient-brand-r group-hover:shadow-glow-sm'}
                `}>
                  <Icon size={26} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="font-roboto font-bold text-brand-text text-lg mb-3 leading-snug">
                  {title}
                </h3>
                <p className="font-roboto font-light text-brand-body text-sm leading-relaxed">
                  {desc}
                </p>

                {/* Bottom accent line */}
                <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-gradient-brand rounded-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
