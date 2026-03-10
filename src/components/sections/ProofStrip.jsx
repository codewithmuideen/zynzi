import { Users, MapPin, Shield, MousePointerClick } from 'lucide-react'
import { PROOF_STATS } from '../../constants'

const ICONS = {
  users:    Users,
  'map-pin': MapPin,
  shield:   Shield,
  'x-circle': MousePointerClick,
}

export default function ProofStrip() {
  return (
    <div className="relative bg-white border-y border-brand-border overflow-hidden">
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-brand opacity-30" />

      <div className="max-w-7xl mx-auto px-5 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {PROOF_STATS.map(({ number, label, icon }) => {
            const Icon = ICONS[icon] ?? Users
            return (
              <div
                key={number}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-3 text-center sm:text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-navy/8 flex items-center justify-center shrink-0 group-hover:bg-gradient-brand group-hover:shadow-brand-sm transition-all duration-300">
                  <Icon size={20} className="text-brand-navy group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-roboto font-black text-3xl text-brand-navy leading-none mb-1">
                    {number}
                  </div>
                  <div className="font-roboto text-xs text-brand-muted leading-snug whitespace-pre-line">
                    {label}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
