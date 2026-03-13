import { Star, ArrowRight } from "lucide-react";
import WaitlistForm from "../ui/WaitlistForm";
import {
  IMAGES,
  HERO_BADGE,
  HERO_TITLE_1,
  HERO_TITLE_2,
  HERO_TITLE_HL,
  HERO_SUB,
} from "../../constants";

const socialProofImages = [
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
];

export default function Hero() {
  return (
    <section
      id="hero-waitlist"
      className="relative min-h-screen bg-[#0B0F17] overflow-hidden flex items-center pt-24 pb-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="flex flex-col space-y-8">

          {/* Badge */}
          <div className="inline-flex self-start items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-white/80 tracking-wide uppercase">
              {HERO_BADGE}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-bold leading-[1.1] tracking-tight text-4xl md:text-6xl lg:text-7xl">
            {HERO_TITLE_1} <br />
            {HERO_TITLE_2} <br />
            <span className="text-blue-500">{HERO_TITLE_HL}</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/60 text-base md:text-xl max-w-lg leading-relaxed font-light">
            {HERO_SUB}
          </p>

          {/* Waitlist Form */}
          <div className="w-full max-w-xl">
            <div className="p-1.5 rounded-2xl bg-white/5 border border-white/10">
              <WaitlistForm
                theme="dark"
                id="hero"
                ctaLabel="Join Waitlist"
                icon={<ArrowRight size={18} />}
              />
            </div>
          </div>

          {/* Social Proof */}
          <div className="flex flex-nowrap items-center justify-between sm:justify-start gap-6 pt-2">

            {/* Avatars + Waitlist */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {socialProofImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    className="w-7 h-7 rounded-full border-4 border-[#0B0F17] object-cover"
                    alt="User"
                  />
                ))}
              </div>

              <div className="leading-tight">
                <p className="text-white font-semibold text-sm">500+</p>
                <p className="text-white/40 text-xs">
                  People on the waitlist
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-8 bg-white/10 hidden sm:block" />

            {/* Rating */}
            <div className="flex items-center gap-2">
              <p className="text-white font-semibold text-sm">4.8/5</p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-yellow-500 text-yellow-500"
                  />
                ))}
              </div>

              <span className="text-white/40 text-xs">Rating</span>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE (hidden on mobile) */}
        <div className="hidden lg:flex items-center justify-center">
          <img
            src={IMAGES.App1}
            alt="Zynzi App Preview"
            className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
        <p className="text-[10px] text-white tracking-[0.2em] uppercase font-bold">
          Explore
        </p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}