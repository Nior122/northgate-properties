import { motion } from 'framer-motion';
import { Award, Shield, Users, MapPin } from 'lucide-react';
import { agencyInfo, agents } from '../data/propertiesConfig';

export default function About() {
  return (
    <main className="pt-16 sm:pt-20 min-h-screen">
      <div className="bg-ink py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">Our Story</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white m-0">About {agencyInfo.name}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink m-0 mb-6">
              Built on Trust, Driven by Expertise
            </h2>
            <div className="space-y-4 text-slate-soft leading-relaxed">
              <p>
                {agencyInfo.name} was founded in {agencyInfo.founded} with a clear mission: to bring transparency,
                professionalism, and genuine care to Nigeria's real estate market. In an industry where trust is
                everything, we've built our reputation one successful transaction at a time.
              </p>
              <p>
                Over the past {agencyInfo.yearsActive} years, we've helped {agencyInfo.propertiesSold}+ families and
                investors find their ideal properties across Lagos and Abuja. Our team combines deep local knowledge
                with an unwavering commitment to client satisfaction — because we understand that property decisions
                involve real money and real trust.
              </p>
              <p>
                Whether you're looking for a family home in Lekki, an investment property in Abuja, or a commercial
                space on Victoria Island, our team brings the same level of dedication and market expertise to every
                engagement.
              </p>
            </div>

            <blockquote className="border-l-2 border-gold pl-5 py-3 italic text-slate-soft leading-relaxed mt-8 mb-0">
              "{agencyInfo.founderNote}"
            </blockquote>
            <div className="flex items-center gap-3 mt-4">
              <img
                src={agents.find((a) => a.id === 'adaeze')?.photo}
                alt={agencyInfo.founderName}
                className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
              />
              <div>
                <p className="text-sm font-semibold text-ink m-0">{agencyInfo.founderName}</p>
                <p className="text-xs text-slate-soft m-0">{agencyInfo.founderRole}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Award, label: `${agencyInfo.yearsActive}+ Years`, desc: 'In the market' },
              { icon: Shield, label: `${agencyInfo.propertiesSold}+`, desc: 'Properties sold' },
              { icon: Users, label: 'Expert Team', desc: 'Licensed agents' },
              { icon: MapPin, label: '2 Cities', desc: 'Lagos & Abuja' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-sm p-6 border border-mist/60 text-center shadow-sm">
                <stat.icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="font-display text-xl font-bold text-ink m-0">{stat.label}</p>
                <p className="text-xs text-slate-soft uppercase tracking-wider mt-1 m-0">{stat.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <section className="mt-16 sm:mt-24">
          <div className="text-center mb-10">
            <p className="text-gold text-sm font-semibold uppercase tracking-widest-xl mb-2">The Team</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink m-0">Meet Our Agents</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, i) => (
              <motion.div
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-sm overflow-hidden border border-mist/60 shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={agent.photo}
                    alt={agent.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-ink m-0 mb-0.5">{agent.name}</h3>
                  <p className="text-xs text-gold uppercase tracking-wider font-semibold m-0 mb-2">{agent.role}</p>
                  <p className="text-xs text-slate-soft m-0">{agent.experience} experience</p>
                  <p className="text-sm text-slate-soft leading-relaxed mt-3 m-0">{agent.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mt-16 sm:mt-20">
          <div className="bg-ink rounded-sm p-8 sm:p-12 text-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white m-0 mb-4">
              Our Offices
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <h4 className="text-white font-semibold m-0">Lagos</h4>
                </div>
                <p className="text-white/60 text-sm m-0">{agencyInfo.address}</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-gold" />
                  <h4 className="text-white font-semibold m-0">Abuja</h4>
                </div>
                <p className="text-white/60 text-sm m-0">{agencyInfo.secondaryAddress}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
