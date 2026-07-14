import { Phone, MessageCircle } from 'lucide-react';
import { agencyInfo } from '../data/propertiesConfig';

export default function AgentCard({ agent, propertyTitle }) {
  const whatsappMessage = encodeURIComponent(
    `Hello ${agent.name}, I'm interested in ${propertyTitle || 'a property'}. I'd like to schedule a viewing.`
  );

  return (
    <div className="bg-white rounded-sm p-5 sm:p-6 border border-mist/60 shadow-sm">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={agent.photo}
          alt={agent.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gold/20"
          loading="lazy"
        />
        <div>
          <h4 className="font-display text-lg font-semibold text-ink m-0">{agent.name}</h4>
          <p className="text-xs text-slate-soft m-0 uppercase tracking-wider">{agent.role}</p>
          <p className="text-xs text-gold m-0 mt-1">{agent.experience} experience</p>
        </div>
      </div>
      <p className="text-sm text-slate-soft leading-relaxed mb-5">{agent.bio}</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={`https://wa.me/${agencyInfo.whatsapp}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2.5 rounded-sm text-sm font-semibold no-underline hover:bg-green-700 transition-colors duration-200"
        >
          <MessageCircle className="w-4 h-4" />
          Schedule a Viewing
        </a>
        <a
          href={`tel:${agent.phone}`}
          className="flex items-center justify-center gap-2 bg-stone-light text-ink px-4 py-2.5 rounded-sm text-sm font-semibold no-underline hover:bg-mist transition-colors duration-200"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
      </div>
    </div>
  );
}
