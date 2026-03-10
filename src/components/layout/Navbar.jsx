import { useEffect, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { IMAGES, NAV_CTA_LABEL } from '../../constants'

const NAV_LINKS = [
  { label: 'How it works', to: { pathname: '/', hash: '#how-it-works' } },
  { label: 'Features',     to: { pathname: '/', hash: '#features' } },
  { label: 'Safety',       to: { pathname: '/', hash: '#safety' } },
  { label: 'For Venues',   to: { pathname: '/', hash: '#for-venues' } },
]

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToWaitlist = () => {
    setMobileOpen(false)
    if (location.pathname === '/') {
      document.getElementById('hero-waitlist')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate({ pathname: '/', hash: '#hero-waitlist' })
    }
  }

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-brand-navy-darker/95 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-brand-navy-darker/70 backdrop-blur-lg border-b border-white/5 py-4'}
      `}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-brand flex items-center justify-center shadow-glow-sm group-hover:shadow-glow transition-all duration-300">
            <img src={IMAGES.logo} alt="Zynzi" className="w-9 h-9 object-contain" />
          </div>
          <span className="font-roboto font-black text-white text-xl tracking-[0.12em]">
            <span className="text-brand-sky-light font-light">—</span>
            ZYNZI
            <span className="text-brand-sky-light font-light">—</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="font-roboto text-sm font-medium text-white/70 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={scrollToWaitlist}
          className="hidden md:inline-flex items-center gap-2 bg-white text-brand-navy font-roboto font-bold text-sm px-5 py-2.5 rounded-full cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] active:translate-y-0"
        >
          {NAV_CTA_LABEL}
        </button>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white p-1"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy-darker/98 border-t border-white/10 px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="font-roboto text-sm font-medium text-white/75 hover:text-white transition-colors"
            >
              {label}
            </Link>
          ))}
          <button
            onClick={scrollToWaitlist}
            className="mt-2 w-full bg-gradient-brand text-white font-roboto font-bold text-sm px-5 py-3 rounded-xl cursor-pointer"
          >
            {NAV_CTA_LABEL}
          </button>
        </div>
      )}
    </nav>
  )
}
