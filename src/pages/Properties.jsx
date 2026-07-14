import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, LayoutGroup } from 'framer-motion';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';
import { properties, locations, priceRanges } from '../data/propertiesConfig';

export default function Properties() {
  const [searchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    location: searchParams.get('location') || '',
    type: searchParams.get('type') || '',
    priceRange: 0,
    bedrooms: searchParams.get('bedrooms') || '',
    listingType: searchParams.get('listingType') || '',
  });

  const [showCount, setShowCount] = useState(9);

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.location) {
        const loc = locations.find((l) => l.name === filters.location);
        if (loc && p.locationId !== loc.id) return false;
      }
      if (filters.type && p.type !== filters.type) return false;
      if (filters.bedrooms) {
        const bedNum = parseInt(filters.bedrooms, 10);
        if (filters.bedrooms === '5+') {
          if (p.bedrooms < 5) return false;
        } else {
          if (p.bedrooms !== bedNum) return false;
        }
      }
      if (filters.priceRange > 0) {
        const pr = priceRanges[filters.priceRange];
        if (p.price < pr.min || p.price > pr.max) return false;
      }
      if (filters.listingType && p.listingType !== filters.listingType) return false;
      return true;
    });
  }, [filters]);

  const visible = filtered.slice(0, showCount);

  return (
    <main className="pt-16 sm:pt-20 min-h-screen">
      <div className="bg-ink py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white m-0 mb-2">All Properties</h1>
          <p className="text-white/60 m-0">{filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6 flex gap-2">
          <button
            onClick={() => setFilters((f) => ({ ...f, listingType: '' }))}
            className={`px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider border-none cursor-pointer transition-colors duration-200 ${
              !filters.listingType ? 'bg-ink text-white' : 'bg-mist text-slate-soft hover:bg-mist/80'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilters((f) => ({ ...f, listingType: 'sale' }))}
            className={`px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider border-none cursor-pointer transition-colors duration-200 ${
              filters.listingType === 'sale' ? 'bg-ink text-white' : 'bg-mist text-slate-soft hover:bg-mist/80'
            }`}
          >
            For Sale
          </button>
          <button
            onClick={() => setFilters((f) => ({ ...f, listingType: 'rent' }))}
            className={`px-4 py-2 rounded-sm text-sm font-semibold uppercase tracking-wider border-none cursor-pointer transition-colors duration-200 ${
              filters.listingType === 'rent' ? 'bg-ink text-white' : 'bg-mist text-slate-soft hover:bg-mist/80'
            }`}
          >
            For Rent
          </button>
        </div>
        <FilterBar filters={filters} onFilterChange={setFilters} />
        <LayoutGroup>
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-8"
          >
            {visible.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </motion.div>
        </LayoutGroup>
        {visible.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-soft text-lg m-0">No properties match your current filters.</p>
            <button
              onClick={() => setFilters({ location: '', type: '', priceRange: 0, bedrooms: '', listingType: '' })}
              className="mt-4 px-6 py-2.5 bg-gold text-ink text-sm font-semibold uppercase tracking-wider rounded-sm border-none cursor-pointer hover:bg-clay transition-colors duration-200"
            >
              Reset Filters
            </button>
          </div>
        )}
        {showCount < filtered.length && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowCount((c) => c + 9)}
              className="px-8 py-3 bg-ink text-white text-sm font-semibold uppercase tracking-wider rounded-sm border-none cursor-pointer hover:bg-charcoal transition-colors duration-200"
            >
              Load More Properties
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
