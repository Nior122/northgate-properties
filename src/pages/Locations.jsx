import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, ChevronRight } from 'lucide-react';
import { locations } from '../data/propertiesConfig';

export default function Locations() {
  return (
    <main className="pt-16 sm:pt-20 min-h-screen">
      <div className="bg-ink py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">Explore</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white m-0 mb-2">Browse by Location</h1>
          <p className="text-white/60 m-0 max-w-xl">
            Discover properties in Lagos and Abuja's most desirable neighbourhoods. Each location offers a distinct lifestyle and investment opportunity.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/properties?location=${encodeURIComponent(loc.name)}`}
                className="group block no-underline bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 bg-gold text-ink text-xs font-semibold uppercase tracking-wider rounded-sm">
                      {loc.city}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-xl font-semibold text-ink m-0 group-hover:text-gold transition-colors duration-200">
                      {loc.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-mist group-hover:text-gold transition-colors duration-200" />
                  </div>
                  <p className="text-sm text-slate-soft leading-relaxed m-0 mb-3">{loc.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gold font-semibold uppercase tracking-wider">
                    <MapPin className="w-3 h-3" />
                    {loc.listingCount} {loc.listingCount === 1 ? 'property' : 'properties'} available
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
