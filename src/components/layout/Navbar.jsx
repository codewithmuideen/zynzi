import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { IMAGES, NAV_CTA_LABEL } from "../../constants";

const NAV_LINKS = [
  { label: "How it works", to: { pathname: "/", hash: "#how-it-works" } },
  { label: "Features", to: { pathname: "/", hash: "#features" } },
  { label: "Safety", to: { pathname: "/", hash: "#safety" } },
  { label: "For Venues", to: { pathname: "/", hash: "#for-venues" } },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToWaitlist = () => {
    setMobileOpen(false);

    if (location.pathname === "/") {
      document
        .getElementById("hero-waitlist")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate({ pathname: "/", hash: "#hero-waitlist" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-brand-navy-darker/90 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-gradient-to-b from-brand-navy-darker/90 to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          
          {/* PURE LOGO (NO BACKGROUND) */}
          <img
            src={IMAGES.whitelogo}
            alt="Zynzi"
            className="w-16 h-16 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_6px_12px_rgba(0,0,0,0.6)]"
          />

          {/* Brand name */}
          {/* <span className="font-roboto font-black text-white text-xl tracking-widest">
            ZYNZI
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="relative font-roboto text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {label}

              {/* hover underline */}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-brand-sky-light transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={scrollToWaitlist}
          className="hidden md:inline-flex items-center bg-gradient-brand text-white font-roboto font-bold text-sm px-6 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(0,0,0,0.4)]"
        >
          {NAV_CTA_LABEL}
        </button>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white/80 hover:text-white"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-navy-darker/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">

          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMobileOpen(false)}
              className="text-white/80 hover:text-white font-medium"
            >
              {label}
            </Link>
          ))}

          <button
            onClick={scrollToWaitlist}
            className="mt-3 w-full bg-gradient-brand text-white font-bold py-3 rounded-xl"
          >
            {NAV_CTA_LABEL}
          </button>
        </div>
      )}
    </nav>
  );
}