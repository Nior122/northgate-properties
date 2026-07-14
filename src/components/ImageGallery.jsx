import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';

export default function ImageGallery({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const goTo = (dir) => {
    setActiveIndex((prev) => (prev + dir + images.length) % images.length);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 rounded-sm overflow-hidden">
        <div className="md:col-span-3 relative aspect-[16/10] bg-mist">
          <img
            src={images[activeIndex]}
            alt={`${title} — Photo ${activeIndex + 1}`}
            className="w-full h-full object-cover"
            loading={activeIndex === 0 ? 'eager' : 'lazy'}
          />
          <button
            onClick={() => setLightboxOpen(true)}
            className="absolute bottom-3 right-3 bg-ink/70 text-white p-2 rounded-sm backdrop-blur-sm border-none cursor-pointer hover:bg-ink transition-colors duration-200"
            aria-label="Open lightbox"
          >
            <Expand className="w-4 h-4" />
          </button>
        </div>
        <div className="hidden md:grid grid-rows-3 gap-2">
          {images.slice(1, 4).map((img, i) => (
            <button
              key={i}
              onClick={() => { setActiveIndex(i + 1); setLightboxOpen(true); }}
              className="relative overflow-hidden bg-mist border-none p-0 cursor-pointer group"
            >
              <img
                src={img}
                alt={`${title} — Photo ${i + 2}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                style={{ aspectRatio: '16/9' }}
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-4 right-4 text-white bg-transparent border-none cursor-pointer p-2 hover:text-gold transition-colors duration-200"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); goTo(-1); }}
              className="absolute left-4 text-white bg-white/10 border-none cursor-pointer p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              src={images[activeIndex]}
              alt={`${title} — Photo ${activeIndex + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); goTo(1); }}
              className="absolute right-4 text-white bg-white/10 border-none cursor-pointer p-3 rounded-full hover:bg-white/20 transition-colors duration-200"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 text-white/60 text-sm font-medium">
              {activeIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
