import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';

export default function PropertyCard({ property, index = 0, large = false }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        to={`/properties/${property.id}`}
        className={`group block no-underline bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${
          large ? 'col-span-2 row-span-2' : ''
        }`}
      >
        <div className={`relative overflow-hidden ${large ? 'aspect-[4/3]' : 'aspect-[3/2]'}`}>
          {!imgLoaded && (
            <div className="absolute inset-0 bg-mist animate-pulse" />
          )}
          <img
            src={property.images[0]}
            alt={property.title}
            loading="lazy"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ aspectRatio: large ? '4/3' : '3/2' }}
          />
          <div className="absolute top-3 left-3">
            <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-widest-xl ${
              property.listingType === 'sale'
                ? 'bg-gold text-ink'
                : 'bg-sage text-white'
            }`}>
              {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
            </span>
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-1 text-slate-soft text-xs mb-2">
            <MapPin className="w-3 h-3" />
            <span className="uppercase tracking-wider">{property.address.split(',').slice(-2).join(',')}</span>
          </div>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-ink m-0 mb-2 group-hover:text-gold transition-colors duration-200">
            {property.title}
          </h3>
          <p className="text-gold font-semibold text-lg sm:text-xl mb-3">
            {property.priceLabel}
          </p>
          <div className="flex items-center gap-4 text-slate-soft text-xs">
            {property.bedrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bed className="w-3.5 h-3.5" />
                <span>{property.bedrooms} Beds</span>
              </div>
            )}
            {property.bathrooms > 0 && (
              <div className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" />
                <span>{property.bathrooms} Baths</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Maximize className="w-3.5 h-3.5" />
              <span>{property.squareMeters} sqm</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
