import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { properties, locations, agencyInfo } from '../data/propertiesConfig';

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchPrice, setSearchPrice] = useState('');
  const navigate = useNavigate();

  const featured = useMemo(
    () => properties.filter((p) => p.featured).slice(0, 6),
    []
  );

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (searchLocation) params.set('location', searchLocation);
    if (searchType) params.set('type', searchType);
    if (searchPrice) params.set('price', searchPrice);
    navigate(`/properties?${params.toString()}`);
  };

  return (
    <main className="pt-16 sm:pt-20">
      {/* Hero */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=80"
            alt="Luxury home exterior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-4">
              Lagos &bull; Abuja
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white m-0 mb-4 leading-tight max-w-3xl">
              {agencyInfo.tagline}
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-10">
              Premium properties for sale and rent across Nigeria's most sought-after neighbourhoods.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSearch}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-sm p-2 flex flex-col sm:flex-row gap-2 max-w-4xl border border-white/10"
          >
            <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-sm px-3 py-2.5">
              <MapPin className="w-4 h-4 text-white/50 shrink-0" />
              <select
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none appearance-none cursor-pointer [&>option]:text-ink"
              >
                <option value="">All Locations</option>
                {locations.map((loc) => (
                  <option key={loc.id} value={loc.name}>{loc.name}, {loc.city}</option>
                ))}
              </select>
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-sm px-3 py-2.5">
              <select
                value={searchType}
                onChange={(e) => setSearchType(e.target.value)}
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none appearance-none cursor-pointer [&>option]:text-ink"
              >
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="flex-1 flex items-center gap-2 bg-white/10 rounded-sm px-3 py-2.5">
              <select
                value={searchPrice}
                onChange={(e) => setSearchPrice(e.target.value)}
                className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none appearance-none cursor-pointer [&>option]:text-ink"
              >
                <option value="">Any Price</option>
                <option value="0-50000000">Under ?50M</option>
                <option value="50000000-150000000">?50M – ?150M</option>
                <option value="150000000-300000000">?150M – ?300M</option>
                <option value="300000000-999999999">Above ?300M</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-gold text-ink px-6 py-2.5 rounded-sm text-sm font-semibold uppercase tracking-wider border-none cursor-pointer hover:bg-clay transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              Search
            </button>
          </motion.form>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">Handpicked</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink m-0">Featured Properties</h2>
          </div>
          <Link
            to="/properties"
            className="hidden sm:flex items-center gap-1 text-sm font-semibold text-gold no-underline hover:text-clay transition-colors duration-200 uppercase tracking-wider"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((p, i) => (
            <PropertyCard key={p.id} property={p} index={i} large={i === 0} />
          ))}
        </div>
        <div className="sm:hidden mt-8 text-center">
          <Link
            to="/properties"
            className="inline-flex items-center gap-1 text-sm font-semibold text-gold no-underline uppercase tracking-wider"
          >
            View All Properties <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Browse by Location */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">Explore</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white m-0">Browse by Location</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Link
                  to={`/properties?location=${encodeURIComponent(loc.name)}`}
                  className="group block no-underline relative rounded-sm overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-display text-lg font-semibold m-0 mb-0.5">
                      {loc.name}
                    </h3>
                    <p className="text-white/60 text-xs m-0 uppercase tracking-wider">
                      {loc.listingCount} {loc.listingCount === 1 ? 'property' : 'properties'}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-3">Why Northgate</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink m-0 mb-6">
              A Decade of Trust in Nigerian Real Estate
            </h2>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold m-0">{agencyInfo.yearsActive}+</p>
                <p className="text-xs text-slate-soft uppercase tracking-wider mt-1 m-0">Years Active</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold m-0">{agencyInfo.propertiesSold}+</p>
                <p className="text-xs text-slate-soft uppercase tracking-wider mt-1 m-0">Properties Sold</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-gold m-0">{agencyInfo.activeListings}</p>
                <p className="text-xs text-slate-soft uppercase tracking-wider mt-1 m-0">Active Listings</p>
              </div>
            </div>
            <blockquote className="border-l-2 border-gold pl-5 py-2 italic text-slate-soft leading-relaxed m-0">
              "{agencyInfo.founderNote}"
            </blockquote>
            <p className="text-sm font-semibold text-ink mt-3 m-0">— {agencyInfo.founderName}, {agencyInfo.founderRole}</p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80"
              alt="Professional real estate agent"
              className="rounded-sm w-full aspect-[4/3] object-cover shadow-lg"
              loading="lazy"
            />
            <div className="absolute -bottom-4 -left-4 bg-gold text-ink px-5 py-3 rounded-sm shadow-md">
              <p className="text-sm font-bold m-0">Est. {agencyInfo.founded}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
