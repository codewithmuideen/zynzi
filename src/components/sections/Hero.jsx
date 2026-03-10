import { Star, ArrowRight } from 'lucide-react'
import WaitlistForm from '../ui/WaitlistForm'
import { IMAGES, HERO_BADGE, HERO_TITLE_1, HERO_TITLE_2, HERO_TITLE_HL, HERO_SUB } from '../../constants'

const socialProofImages = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
]

export default function Hero() {
  return (
    <section id="hero-waitlist" className="relative min-h-screen bg-[#0B0F17] overflow-hidden flex items-center pt-24 pb-16">
      
      {/* ── Background Elements ─────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* ═══ LEFT CONTENT ══════════════════════════════════════ */}
        <div className="flex flex-col space-y-8">
          
          {/* Badge */}
          <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
              {HERO_BADGE}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-bold leading-[1.1] tracking-tight text-5xl md:text-6xl lg:text-7xl">
            {HERO_TITLE_1} <br />
            {HERO_TITLE_2} <br />
            <span className="text-blue-500">{HERO_TITLE_HL}</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-lg md:text-xl max-w-lg leading-relaxed font-light">
            {HERO_SUB}
          </p>

          {/* CTA / Form - Increased Width Here */}
          <div className="w-full max-w-xl"> 
            <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <WaitlistForm 
                theme="dark" 
                id="hero" 
                ctaLabel="Start Chatting Now" 
                icon={<ArrowRight size={18} />}
              />
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="flex flex-wrap items-center gap-10 pt-4">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {socialProofImages.map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    className="w-12 h-12 rounded-full border-4 border-[#0B0F17] object-cover" 
                    alt="User" 
                  />
                ))}
              </div>
              <div>
                <p className="text-white font-bold text-xl">500+</p>
                <p className="text-white/40 text-sm leading-snug">People on<br/>the waitlist</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-10 bg-white/10" />

            <div>
              <p className="text-white font-bold text-xl">4.8/5</p>
              <div className="flex gap-1 items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                ))}
                <span className="text-white/40 text-sm ml-2">Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ RIGHT VISUAL ══════════════════════════════════════ */}
        <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full scale-75" />
          <div className="relative w-full h-full flex items-center justify-center">
            
            <div className="absolute z-10 transform -translate-x-12 translate-y-8 -rotate-[15deg]">
              <div className="w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[3rem] border-[6px] border-white/10 bg-black shadow-2xl overflow-hidden ring-1 ring-white/20">
                <img src={IMAGES.mobileApp} alt="App Preview" className="w-full h-full object-cover opacity-80" />
              </div>
            </div>

            <div className="absolute z-20 transform translate-x-16 -translate-y-8 rotate-[5deg]">
              <div className="w-[260px] md:w-[280px] aspect-[9/19.5] rounded-[3rem] border-[6px] border-white/20 bg-black shadow-2xl overflow-hidden ring-1 ring-white/30">
                <img src={IMAGES.mobileApp} alt="App Interface" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <p className="text-[10px] text-white tracking-[0.2em] uppercase font-bold">Explore</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  )
}