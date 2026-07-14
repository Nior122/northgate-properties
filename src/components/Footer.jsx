import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, ExternalLink, Globe2 } from 'lucide-react';
import { agencyInfo } from '../data/propertiesConfig';

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-white no-underline mb-4">
              <MapPin className="w-5 h-5 text-gold" strokeWidth={2.5} />
              <span className="font-display text-lg font-semibold tracking-tight">
                {agencyInfo.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              {agencyInfo.tagline}. Premium real estate services across Lagos and Abuja.
            </p>
            <div className="flex gap-3">
              <a href={agencyInfo.social.instagram} aria-label="Globe" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-ink transition-colors duration-200 no-underline">
                <Globe className="w-4 h-4" />
              </a>
              <a href={agencyInfo.social.twitter} aria-label="ExternalLink" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-ink transition-colors duration-200 no-underline">
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href={agencyInfo.social.facebook} aria-label="Globe2" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:bg-gold hover:text-ink transition-colors duration-200 no-underline">
                <Globe2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest-xl mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: '/properties', label: 'All Properties' },
                { to: '/locations', label: 'Browse Locations' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white/50 hover:text-gold transition-colors duration-200 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest-xl mb-4">Property Types</h4>
            <div className="flex flex-col gap-2">
              {['Houses for Sale', 'Apartments for Rent', 'Land & Plots', 'Luxury Homes'].map((label) => (
                <Link
                  key={label}
                  to="/properties"
                  className="text-sm text-white/50 hover:text-gold transition-colors duration-200 no-underline"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white text-sm font-semibold uppercase tracking-widest-xl mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>{agencyInfo.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>{agencyInfo.secondaryAddress}</span>
              </div>
              <a href={`tel:${agencyInfo.phone}`} className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200 no-underline">
                <Phone className="w-4 h-4 shrink-0" />
                {agencyInfo.phone}
              </a>
              <a href={`mailto:${agencyInfo.email}`} className="flex items-center gap-2 text-white/50 hover:text-gold transition-colors duration-200 no-underline">
                <Mail className="w-4 h-4 shrink-0" />
                {agencyInfo.email}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <span>&copy; {new Date().getFullYear()} {agencyInfo.name}. All rights reserved.</span>
          <span>Designed for discerning property seekers.</span>
        </div>
      </div>
    </footer>
  );
}
