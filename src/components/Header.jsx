import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { agencyInfo } from '../data/propertiesConfig';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/properties', label: 'Properties' },
  { to: '/locations', label: 'Locations' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center gap-2 text-white no-underline">
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-gold" strokeWidth={2.5} />
            <span className="font-display text-lg sm:text-xl font-semibold tracking-tight">
              {agencyInfo.name}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wider uppercase no-underline transition-colors duration-200 ${
                    isActive ? 'text-gold' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href={`tel:${agencyInfo.phone}`}
              className="flex items-center gap-2 bg-gold text-ink px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider no-underline hover:bg-clay transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 bg-transparent border-none cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-ink border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-base font-medium uppercase tracking-wider no-underline py-2 border-b border-white/10 ${
                      isActive ? 'text-gold' : 'text-white/70'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <a
                href={`tel:${agencyInfo.phone}`}
                className="flex items-center justify-center gap-2 bg-gold text-ink px-4 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider no-underline mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
