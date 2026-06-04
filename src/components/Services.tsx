import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Sparkles, Coins, ClipboardCheck, Terminal, Smartphone } from 'lucide-react';

export default function Services() {
  // Map decorative accents individually to guarantee "Every section feels unique and not repetitive"
  const layouts = [
    {
      borderColor: 'hover:border-yellow-500/25',
      accentColor: 'text-brand-gold bg-brand-gold/10',
      badge: 'PRESTISE / VISUAL TINGGI',
      icon: Terminal
    },
    {
      borderColor: 'hover:border-cyan-500/25',
      accentColor: 'text-brand-cyan bg-brand-cyan/10',
      badge: 'PEMASARAN / FUNNEL',
      icon: Sparkles
    },
    {
      borderColor: 'hover:border-emerald-500/25',
      accentColor: 'text-brand-emerald bg-brand-emerald/10',
      badge: 'ALUR CHECKOUT / CHAT LANGSUNG',
      icon: Coins
    },
    {
      borderColor: 'hover:border-indigo-500/25',
      accentColor: 'text-indigo-400 bg-indigo-500/10',
      badge: 'LOGIKA KOMPLEKS / SAAS',
      icon: ClipboardCheck
    },
    {
      borderColor: 'hover:border-purple-500/25',
      accentColor: 'text-purple-400 bg-purple-500/10',
      badge: 'JAMINAN UPTIME & KEAMANAN',
      icon: Smartphone
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Dynamic graphic lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-white/5">
          <div className="space-y-4 max-w-xl">
            <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block">
              // SOLUSI DESAIN CERDAS
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Kemampuan web kustom yang terstruktur untuk konversi bisnis klien.
            </h2>
          </div>
          
          <p className="text-white/60 text-xs md:text-sm max-w-sm font-sans leading-relaxed">
            Saya menghindari mesin web generik murah yang memperlambat tingkat respons Anda. Setiap item dibuat dengan cermat, terindeks di mesin pencari, dan dioptimalkan dengan React dari nol.
          </p>
        </div>

        {/* Asymmetrical Bento-style Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const layout = layouts[index] || layouts[0];
            const SvcIcon = layout.icon;
            
            // Render third and fourth items as slightly different sizing styles
            const isLarge = index === 2 || index === 3;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-bg-card border border-white/5 p-8 rounded-3xl flex flex-col justify-between space-y-8 transition-colors ${layout.borderColor} group relative`}
              >
                
                {/* Floating graphic node inside card */}
                <div className="absolute top-6 right-6 font-mono text-[9px] text-white/20 tracking-widest border border-white/5 rounded-full px-2.5 py-0.5">
                  {layout.badge}
                </div>

                <div className="space-y-6">
                  {/* Service icon shape */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${layout.accentColor} transition-transform group-hover:rotate-6`}>
                    <SvcIcon className="w-5 h-5" />
                  </div>

                  {/* Title & description */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold font-display text-white transition-colors group-hover:text-brand-gold">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-xs leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables checklists */}
                  <div className="space-y-3 pt-4 border-t border-white/[0.05]">
                    <span className="text-[10px] font-mono text-white/30 tracking-wider uppercase block">
                      Cakupan pengiriman inti:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-[11px] md:text-xs text-white/80">
                          <span className="w-1 h-1 bg-brand-gold rounded-full shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features blocks */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono text-white/30 tracking-wider uppercase block">
                      Keunggulan kualitas:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feat, fidx) => (
                        <span 
                          key={fidx} 
                          className="text-[9px] font-mono font-medium text-brand-gold bg-brand-gold/5 border border-brand-gold/15 rounded-full px-2 py-0.5"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price block and actionable guide */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-mono text-white/40 tracking-wider uppercase block">
                      RENTANG INVESTASI
                    </span>
                    <span className="text-xs font-mono font-bold text-white tracking-tight">
                      {service.priceRange}
                    </span>
                  </div>
                  
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-4 py-2 bg-white/5 group-hover:bg-brand-gold text-white group-hover:text-bg-dark font-mono text-[9px] font-extrabold uppercase tracking-widest rounded-lg transition-colors border border-white/10 group-hover:border-brand-gold"
                  >
                    <span>Tanya</span>
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
