import { useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { locations } from '../data/propertiesConfig';

const propertyTypes = ['All Types', 'House', 'Apartment', 'Land'];
const priceRanges = [
  { label: 'Any Price', min: 0, max: Infinity },
  { label: 'Under ?50M', min: 0, max: 50000000 },
  { label: '?50M – ?150M', min: 50000000, max: 150000000 },
  { label: '?150M – ?300M', min: 150000000, max: 300000000 },
  { label: 'Above ?300M', min: 300000000, max: Infinity },
];
const bedroomOptions = ['Any', '1', '2', '3', '4', '5+'];

export default function FilterBar({ filters, onFilterChange }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const updateFilter = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const uniqueLocations = [...new Set(locations.map((l) => l.name))];

  return (
    <div className="bg-white rounded-sm shadow-sm border border-mist/60">
      <div className="flex items-center justify-between p-4 md:hidden">
        <span className="text-sm font-semibold text-ink uppercase tracking-wider flex items-center gap-2">
          <SlidersHorizontal className="w-4 h-4" />
          Filters
        </span>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-gold text-sm font-semibold bg-transparent border-none cursor-pointer"
        >
          {mobileOpen ? 'Hide' : 'Show'}
        </button>
      </div>

      <div className={`${mobileOpen ? 'block' : 'hidden'} md:block`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 p-4 pt-0 md:pt-4">
          <div>
            <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1 font-medium">Location</label>
            <select
              value={filters.location}
              onChange={(e) => updateFilter('location', e.target.value)}
              className="w-full px-3 py-2.5 bg-stone-light border border-mist rounded-sm text-sm text-ink appearance-none cursor-pointer focus:outline-none focus:border-gold"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1 font-medium">Property Type</label>
            <select
              value={filters.type}
              onChange={(e) => updateFilter('type', e.target.value)}
              className="w-full px-3 py-2.5 bg-stone-light border border-mist rounded-sm text-sm text-ink appearance-none cursor-pointer focus:outline-none focus:border-gold"
            >
              {propertyTypes.map((t) => (
                <option key={t} value={t === 'All Types' ? '' : t.toLowerCase()}>{t}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1 font-medium">Price Range</label>
            <select
              value={filters.priceRange}
              onChange={(e) => updateFilter('priceRange', Number(e.target.value))}
              className="w-full px-3 py-2.5 bg-stone-light border border-mist rounded-sm text-sm text-ink appearance-none cursor-pointer focus:outline-none focus:border-gold"
            >
              {priceRanges.map((pr, i) => (
                <option key={i} value={i}>{pr.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs text-slate-soft uppercase tracking-wider mb-1 font-medium">Bedrooms</label>
            <select
              value={filters.bedrooms}
              onChange={(e) => updateFilter('bedrooms', e.target.value)}
              className="w-full px-3 py-2.5 bg-stone-light border border-mist rounded-sm text-sm text-ink appearance-none cursor-pointer focus:outline-none focus:border-gold"
            >
              {bedroomOptions.map((b) => (
                <option key={b} value={b === 'Any' ? '' : b}>{b === 'Any' ? 'Any' : b === '5+' ? '5+' : `${b} Bedroom${b === '1' ? '' : 's'}`}</option>
              ))}
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => onFilterChange({ location: '', type: '', priceRange: 0, bedrooms: '' })}
              className="w-full px-4 py-2.5 bg-gold text-ink text-sm font-semibold uppercase tracking-wider rounded-sm border-none cursor-pointer hover:bg-clay transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
