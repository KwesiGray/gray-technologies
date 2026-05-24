// import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

//   const links = [
//     { label: 'Home', path: '/' },
//     { label: 'Projects', path: '/projects' },
//     { label: 'Blog', path: '/blog' },
//     { label: 'Contact', path: '/#contact' },
//   ]

  return (
    <footer className="bg-navy-light border-t border-gold border-opacity-20">

      <div className="max-w-6xl mx-auto px-6 py-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* ── LOGO & TAGLINE ── */}
          <div className="flex flex-col items-center md:items-start gap-2">

            <div className="flex items-center gap-3">
              <span className="text-gold font-serif font-bold text-xl tracking-wider">
                GRAY
              </span>
              <span className="text-offwhite font-serif text-sm tracking-widest uppercase">
                Technologies
              </span>
            </div>

            <p className="text-offwhite text-opacity-50 text-xs text-center md:text-left font-serif italic">
              Crafting the future of technology, one solution at a time.
            </p>

          </div>

          {/* ── NAV LINKS ── */}
          {/* <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-offwhite text-opacity-60 text-sm hover:text-gold transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul> */}

          {/* ── SOCIAL LINKS ── */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/KwesiGray"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite text-opacity-60 text-sm hover:text-gold transition-colors duration-200"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/david-graham-8b9307233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-offwhite text-opacity-60 text-sm hover:text-gold transition-colors duration-200"
            >
              LinkedIn
            </a>

            <a
              href="mailto:grahamdavid0899@gmail.com"
              className="text-offwhite text-opacity-60 text-sm hover:text-gold transition-colors duration-200"
            >
              Email
            </a>

          </div>

        </div>

        {/* ── COPYRIGHT ── */}
        <div className="mt-8 pt-6 border-t border-offwhite border-opacity-10 text-center">
          <p className="text-offwhite text-opacity-40 text-xs">
            © {currentYear} Gray Technologies. All rights reserved. Built by David Gyandoh Graham.
          </p>
        </div>

      </div>

    </footer>
  )
}

export default Footer