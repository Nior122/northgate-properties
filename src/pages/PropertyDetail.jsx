import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bed, Bath, Maximize, Calendar, Car, MapPin, Check, ArrowLeft, MessageCircle, Phone } from 'lucide-react';
import ImageGallery from '../components/ImageGallery';
import LocationStrip from '../components/LocationStrip';
import AgentCard from '../components/AgentCard';
import PropertyCard from '../components/PropertyCard';
import { properties, locations, agents, agencyInfo } from '../data/propertiesConfig';

export default function PropertyDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = properties.find((p) => p.id === id);
  if (!property) {
    return (
      <main className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold text-ink m-0 mb-4">Property Not Found</h1>
          <p className="text-slate-soft mb-6">The property you're looking for doesn't exist or has been removed.</p>
          <Link
            to="/properties"
            className="inline-flex items-center gap-2 bg-gold text-ink px-6 py-3 rounded-sm text-sm font-semibold uppercase tracking-wider no-underline hover:bg-clay transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Properties
          </Link>
        </div>
      </main>
    );
  }

  const agent = agents.find((a) => a.id === property.agentId);
  const location = locations.find((l) => l.id === property.locationId);
  const similar = properties
    .filter((p) => p.id !== property.id && (p.locationId === property.locationId || p.listingType === property.listingType))
    .slice(0, 3);

  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in ${property.title} at ${property.address}. Listed at ${property.priceLabel}. I'd like to schedule a viewing.`
  );

  return (
    <main className="pt-16 sm:pt-20 min-h-screen bg-stone-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-slate-soft hover:text-gold transition-colors duration-200 bg-transparent border-none cursor-pointer mb-6 p-0"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`px-3 py-1 text-xs font-semibold uppercase tracking-widest-xl ${
                property.listingType === 'sale' ? 'bg-gold text-ink' : 'bg-sage text-white'
              }`}>
                {property.listingType === 'sale' ? 'For Sale' : 'For Rent'}
              </span>
              {property.type && (
                <span className="px-3 py-1 text-xs font-semibold uppercase tracking-widest-xl bg-mist text-slate-soft">
                  {property.type}
                </span>
              )}
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink m-0 mb-1">{property.title}</h1>
            <p className="flex items-center gap-1 text-slate-soft text-sm m-0">
              <MapPin className="w-3.5 h-3.5" />
              {property.address}
            </p>
          </div>
          <p className="font-display text-2xl sm:text-3xl font-bold text-gold m-0">{property.priceLabel}</p>
        </div>

        <ImageGallery images={property.images} title={property.title} />

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          {[
            { icon: Bed, label: `${property.bedrooms} Bedrooms`, show: property.bedrooms > 0 },
            { icon: Bath, label: `${property.bathrooms} Bathrooms`, show: property.bathrooms > 0 },
            { icon: Maximize, label: `${property.squareMeters} sqm`, show: true },
            { icon: Car, label: `${property.garage} Garage`, show: property.garage > 0 },
            ...(property.yearBuilt ? [{ icon: Calendar, label: `Built ${property.yearBuilt}`, show: true }] : []),
          ]
            .filter((item) => item.show)
            .map((item, i) => (
              <div key={i} className="bg-white rounded-sm p-4 border border-mist/60 text-center">
                <item.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="text-sm font-semibold text-ink m-0">{item.label}</p>
              </div>
            ))}
          {property.furnished && (
            <div className="bg-white rounded-sm p-4 border border-mist/60 text-center">
              <Check className="w-5 h-5 text-gold mx-auto mb-2" />
              <p className="text-sm font-semibold text-ink m-0">Furnished</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          <div className="lg:col-span-2 space-y-10">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-ink m-0 mb-4">Description</h2>
              <p className="text-slate-soft leading-relaxed m-0">{property.description}</p>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="font-display text-2xl font-bold text-ink m-0 mb-4">Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {property.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white rounded-sm p-3 border border-mist/60">
                    <Check className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                    <span className="text-sm text-ink">{h}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <h2 className="font-display text-2xl font-bold text-ink m-0 mb-4">Location Context</h2>
              <p className="text-sm text-slate-soft mb-4 m-0">
                {location ? `${location.name}, ${location.city}` : ''} — Nearby landmarks and amenities
              </p>
              <LocationStrip landmarks={property.landmarks} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="font-display text-2xl font-bold text-ink m-0 mb-4">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map((a, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white border border-mist/60 rounded-sm text-sm text-ink font-medium">
                    {a}
                  </span>
                ))}
              </div>
            </motion.section>

            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              <h2 className="font-display text-2xl font-bold text-ink m-0 mb-4">Location on Map</h2>
              <div className="rounded-sm overflow-hidden border border-mist/60 bg-mist aspect-video">
                <iframe
                  src={property.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '350px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${property.title}`}
                />
              </div>
            </motion.section>
          </div>

          <div className="lg:col-span-1 space-y-6">
            <div className="sticky top-24">
              {agent && <AgentCard agent={agent} propertyTitle={property.title} />}

              <div className="mt-4 bg-white rounded-sm p-5 border border-mist/60 shadow-sm">
                <h4 className="font-display text-base font-semibold text-ink m-0 mb-3">Quick Actions</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href={`https://wa.me/${agencyInfo.whatsapp}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-sm text-sm font-semibold no-underline hover:bg-green-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire via WhatsApp
                  </a>
                  <a
                    href={`tel:${agencyInfo.phone}`}
                    className="flex items-center justify-center gap-2 bg-stone-light text-ink px-4 py-2.5 rounded-sm text-sm font-semibold no-underline hover:bg-mist transition-colors duration-200"
                  >
                    <Phone className="w-4 h-4" />
                    Call {agencyInfo.name}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <section className="mt-16 sm:mt-20">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink m-0 mb-8">Similar Properties</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {similar.map((p, i) => (
                <PropertyCard key={p.id} property={p} index={i} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
