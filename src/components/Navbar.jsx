import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Blog', path: '/blog' },
    { label: 'Contact', path: '/#contact' },
  ]

  const navBg = scrolled
    ? 'bg-navy/90 backdrop-blur-md border-b border-white/5 shadow-2xl py-3'
    : 'bg-transparent py-5'

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navBg}`}>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 rounded-2xl border border-transparent">

          <NavLink to="/" className="flex items-center gap-2 sm:gap-3 shrink-0">
            <span className="text-gold font-serif font-bold text-lg sm:text-xl tracking-[0.25em]">
              GRAY
            </span>
            <span className="hidden sm:inline text-offwhite/80 font-serif text-xs sm:text-sm tracking-[0.28em] uppercase">
              Technologies
            </span>
          </NavLink>

          <div className="hidden md:flex items-center gap-2 rounded-full border border-white/8 bg-white/5 px-2 py-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) => (
                  `rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-gold text-navy font-semibold shadow-sm'
                      : 'text-offwhite/75 hover:bg-white/8 hover:text-offwhite'
                  }`
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="mailto:grahamdavid0899@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-gold/10 px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold hover:text-navy"
            >
              Hire Me
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-offwhite/90 transition-colors hover:bg-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {isOpen && (
          <div className="md:hidden mt-3 overflow-hidden rounded-2xl border border-white/8 bg-navy/95 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col p-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className={({ isActive }) => (
                    `rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                      isActive
                        ? 'bg-gold text-navy'
                        : 'text-offwhite/80 hover:bg-white/6 hover:text-offwhite'
                    }`
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              ))}

              <a
                href="mailto:grahamdavid0899@gmail.com"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>

    </nav>
  )
}

export default Navbar