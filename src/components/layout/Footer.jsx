import { Link } from 'react-router-dom'
import { Mail, MapPin, Linkedin } from 'lucide-react'

const IconInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

const IconX = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
import { IMAGES, FOOTER_LINKS, COPYRIGHT_YEAR, COMPANY_NAME, WAITLIST_EMAIL } from '../../constants'

export default function Footer() {
  return (
    <footer className="bg-brand-text text-white">

      {/* Main footer body */}
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-16 h-16 flex items-center justify-center">
                <img src={IMAGES.whitelogo} alt="Zynzi" className="w-16 h-16 object-contain" />
              </div>
              {/* <span className="font-roboto font-black text-white text-xl tracking-[0.12em]">
                <span className="text-brand-sky font-light">—</span>
                ZYNZI
                <span className="text-brand-sky font-light">—</span>
              </span> */}
            </div>
            <p className="font-roboto text-sm font-light text-white/55 leading-relaxed max-w-xs mb-6">
              A spontaneous social platform connecting real people for real moments - dinners, walks, games, coffee. Launching in London and Sheffield.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm font-roboto mb-2">
              <MapPin size={14} className="text-brand-sky shrink-0" />
              London &amp; Sheffield, UK
            </div>
            <a
              href={`mailto:${WAITLIST_EMAIL}`}
              className="flex items-center gap-2 text-white/50 hover:text-brand-sky-light text-sm font-roboto transition-colors"
            >
              <Mail size={14} className="text-brand-sky shrink-0" />
              {WAITLIST_EMAIL}
            </a>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: IconInstagram, href: '#', label: 'Instagram' },
                { Icon: IconX,         href: '#', label: 'X' },
                { Icon: Linkedin,      href: '#', label: 'LinkedIn' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center text-white/50 hover:text-brand-sky-light hover:bg-white/12 hover:border-brand-sky/30 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="font-roboto font-bold text-white/90 text-sm tracking-widest uppercase mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'How It Works',  to: { pathname: '/', hash: '#how-it-works' } },
                { label: 'Features',      to: { pathname: '/', hash: '#features' } },
                { label: 'Safety Policy', to: { pathname: '/', hash: '#safety' } },
                { label: 'Trust Score',   to: { pathname: '/', hash: '#safety' } },
              ].map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="font-roboto text-sm text-white/50 hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-roboto font-bold text-white/90 text-sm tracking-widest uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map(({ label, href }) => (
                <li key={label}>
                  {href.startsWith('/') ? (
                    <Link
                      to={href}
                      className="font-roboto text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="font-roboto text-sm text-white/50 hover:text-white transition-colors"
                    >
                      {label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-roboto text-xs text-white/35">
            &copy; {COPYRIGHT_YEAR} {COMPANY_NAME}. All rights reserved.
          </p>
          <p className="font-roboto text-xs text-white/25">
            Designed &amp; powered by ZYNZI Team.
          </p>
        </div>
      </div>
    </footer>
  )
}
