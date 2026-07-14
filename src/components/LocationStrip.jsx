import { useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Store, Waves, GraduationCap, Building, Route, Hospital,
  Users, ShoppingBag, Landmark, Anchor, Scale, Plane,
  TreePine, Mountain, Factory, Palette, UtensilsCrossed, School,
} from 'lucide-react';

const iconMap = {
  Store, Waves, GraduationCap, Building, Route, Hospital,
  Users, ShoppingBag, Landmark, Anchor, Scale, Plane,
  TreePine, Mountain, Factory, Palette, UtensilsCrossed, School,
};

export default function LocationStrip({ landmarks }) {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 250, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {landmarks.map((lm, i) => {
          const Icon = iconMap[lm.icon] || Building;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex-shrink-0 w-48 bg-white rounded-sm p-4 border border-mist/60 text-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="w-10 h-10 rounded-full bg-stone-light flex items-center justify-center mx-auto mb-3">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <p className="text-sm font-semibold text-ink m-0 mb-1 leading-tight">{lm.name}</p>
              <p className="text-xs text-slate-soft m-0">{lm.distance}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
