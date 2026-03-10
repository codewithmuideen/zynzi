import { Briefcase, BookOpen, Plane, Users } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import { WHO_ITS_FOR } from '../../constants'

const ICONS = {
  briefcase:   Briefcase,
  'book-open': BookOpen,
  plane:       Plane,
  users:       Users,
}

const CARD_ACCENTS = [
  'from-brand-navy to-brand-sky',
  'from-brand-sky to-brand-sky-light',
  'from-brand-navy-dark to-brand-navy',
  'from-brand-sky-light to-brand-sky',
]

export default function WhoItsFor() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">

        {/* Section head */}
        <div className="text-center mb-16 reveal">
          <SectionLabel className="mb-4">Who it's for</SectionLabel>
          <h2 className="font-roboto font-black text-brand-text text-[clamp(2rem,4vw,3rem)] leading-tight tracking-tight mb-4">
            If you're in London or Sheffield,<br className="hidden sm:block" /> Zynzi is for you
          </h2>
          <p className="font-roboto font-light text-brand-body text-lg leading-relaxed max-w-md mx-auto">
            Professionals, students, newcomers, social explorers - all welcome.
          </p>
        </div>

        {/* Cards – all using icons now */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHO_ITS_FOR.map(({ icon, name, age, desc, quote }, idx) => {
            const Icon = ICONS[icon] ?? Users
            const accent = CARD_ACCENTS[idx % CARD_ACCENTS.length]

            return (
              <div
                key={name}
                className={`reveal reveal-delay-${(idx % 4) + 1} group flex flex-col bg-brand-cream
                  rounded-2xl border border-brand-border overflow-hidden
                  hover:-translate-y-1.5 hover:shadow-brand hover:border-brand-sky/30
                  transition-all duration-300 cursor-default`}
              >
                {/* Top gradient strip */}
                <div className={`h-1.5 bg-gradient-to-r ${accent}`} />

                <div className="p-6 flex flex-col flex-1">
                  {/* Icon circle */}
                  <div className="mb-5 mx-auto">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${accent} 
                                     flex items-center justify-center shadow-brand-sm
                                     group-hover:scale-105 transition-transform duration-300`}>
                      <Icon size={32} className="text-white" strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className="font-roboto font-bold text-brand-text text-lg text-center mb-1 leading-snug">
                    {name}
                  </h3>
                  <p className="font-roboto text-sm text-brand-muted text-center mb-4 tracking-wide">
                    {age}
                  </p>
                  <p className="font-roboto font-light text-brand-body text-base leading-relaxed text-center mb-6 flex-1">
                    {desc}
                  </p>

                  {/* Quote bubble */}
                  <div className="bg-brand-navy/5 border border-brand-border rounded-xl px-4 py-3 mt-auto">
                    <p className="font-roboto text-sm text-brand-navy font-medium italic text-center leading-snug">
                      {quote}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}