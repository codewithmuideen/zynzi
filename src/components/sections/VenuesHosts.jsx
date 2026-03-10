import { CheckCircle, Coffee, Laptop, GraduationCap, Wine, ArrowRight } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'
import SectionLabel from '../ui/SectionLabel'
import { HOST_PERKS, HOST_TYPES } from '../../constants'

const HOST_ICONS = {
  coffee:           Coffee,
  laptop:           Laptop,
  'graduation-cap': GraduationCap,
  wine:             Wine,
}

const HOST_COLORS = [
  { bg: 'bg-amber-50',  icon: 'text-amber-600',  border: 'border-amber-100' },
  { bg: 'bg-blue-50',   icon: 'text-blue-600',   border: 'border-blue-100' },
  { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
  { bg: 'bg-rose-50',   icon: 'text-rose-600',   border: 'border-rose-100' },
]

export default function VenuesHosts() {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToFinal = () => {
    if (location.pathname === '/') {
      document.getElementById('final-waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    } else {
      navigate({ pathname: '/', hash: '#final-waitlist' })
    }
  }

  return (
    <section id="for-venues" className="bg-brand-cream py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left – copy ─────────────────────────────────── */}
          <div className="reveal">
            <SectionLabel className="mb-5">For Venues &amp; Businesses</SectionLabel>
            <h2 className="font-roboto font-black text-brand-text text-[clamp(1.8rem,3.5vw,2.8rem)] leading-tight tracking-tight mb-5">
              Turn your space into<br /> a social hub
            </h2>
            <p className="font-roboto font-light text-brand-body text-base leading-relaxed mb-8">
              Cafés, coworking spaces, universities, and lounges can become Verified Zynzi Hosts - driving footfall, community, and brand visibility.
            </p>

            {/* Perks */}
            <ul className="space-y-4 mb-9">
              {HOST_PERKS.map((perk) => (
                <li key={perk} className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-gradient-brand flex items-center justify-center shrink-0 mt-0.5 shadow-brand-sm">
                    <CheckCircle size={11} className="text-white" />
                  </div>
                  <span className="font-roboto text-brand-body text-sm leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button
              onClick={scrollToFinal}
              className="inline-flex items-center gap-2.5 bg-gradient-brand text-white font-roboto font-bold text-sm px-7 py-3.5 rounded-xl shadow-brand-sm hover:-translate-y-0.5 hover:shadow-brand active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              Apply to Host
              <ArrowRight size={16} />
            </button>
          </div>

          {/* ── Right – venue type grid ──────────────────────── */}
          <div className="reveal reveal-delay-2 grid grid-cols-2 gap-4">
            {HOST_TYPES.map(({ icon, name }, idx) => {
              const Icon = HOST_ICONS[icon] ?? Coffee
              const { bg, icon: iconColor, border } = HOST_COLORS[idx % HOST_COLORS.length]
              return (
                <div
                  key={name}
                  className={`group ${bg} border ${border} rounded-2xl p-6 text-center
                    hover:-translate-y-1 hover:shadow-brand-sm transition-all duration-300 cursor-default`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Icon size={32} className={`${iconColor} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.6} />
                  </div>
                  <p className="font-roboto font-semibold text-brand-text text-sm leading-snug">{name}</p>
                </div>
              )
            })}

            {/* Stats card spanning full width */}
            <div className="col-span-2 bg-gradient-brand rounded-2xl p-6 flex items-center justify-between text-white shadow-brand">
              <div>
                <p className="font-roboto font-black text-2xl">Free</p>
                <p className="font-roboto text-sm text-white/75 mt-0.5">during launch phase</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <p className="font-roboto font-black text-2xl">2</p>
                <p className="font-roboto text-sm text-white/75 mt-0.5">launch cities</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-right">
                <p className="font-roboto font-black text-2xl">100%</p>
                <p className="font-roboto text-sm text-white/75 mt-0.5">community-driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
