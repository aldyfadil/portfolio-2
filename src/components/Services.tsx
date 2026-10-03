import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Sparkles, Coins, ClipboardCheck, Terminal, ArrowRight, Check } from 'lucide-react';

export default function Services() {
  // Map decorative accents individually to guarantee "Every section feels unique and not repetitive"
  const layouts = [
    {
      borderColor: 'hover:border-blue-300',
      accentColor: 'text-blue-600 bg-sky-100',
      badge: 'STARTER KIT',
      icon: Terminal
    },
    {
      borderColor: 'border-blue-500 hover:border-blue-600 bg-gradient-to-b from-sky-50/50 to-white',
      accentColor: 'text-blue-700 bg-blue-100',
      badge: 'PALING POPULER',
      icon: Sparkles
    },
    {
      borderColor: 'hover:border-blue-300',
      accentColor: 'text-blue-600 bg-sky-100',
      badge: 'PREMIUM ENTERPRISE',
      icon: Coins
    },
    {
      borderColor: 'hover:border-blue-300',
      accentColor: 'text-sky-600 bg-sky-100',
      badge: 'BESPOKE SYSTEM',
      icon: ClipboardCheck
    }
  ];

  return (
    <section id="services" className="py-24 px-6 relative bg-slate-50/50 border-t border-sky-100 overflow-hidden">
      
      {/* Dynamic graphic lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-sky-100 hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-sky-100 hidden md:block" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-20">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-sky-100">
          <div className="space-y-4 max-w-2xl">
            <span className="font-mono text-xs text-blue-600 uppercase tracking-[0.25em] block font-bold">
              SKEMA INVESTASI TRANSPARAN
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
              Pilihan Paket Website Sesuai Kebutuhan Bisnis Anda
            </h2>
          </div>
          
          <p className="text-slate-600 text-xs md:text-sm max-w-sm font-sans leading-relaxed">
            Tanpa pengerjaan lambat, tanpa sampah kode. Pilih paket yang paling cocok dengan model bisnis Anda saat ini atau diskusikan kustomisasi eksklusif bersama kami.
          </p>
        </div>

        {/* 2x2 Grid Layout for 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {SERVICES_DATA.map((service, index) => {
            const layout = layouts[index] || layouts[0];
            const SvcIcon = layout.icon;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-white border p-8 rounded-3xl flex flex-col justify-between space-y-8 transition-all duration-300 group relative shadow-sm ${
                  service.popular 
                    ? 'border-2 border-blue-600 shadow-xl shadow-blue-500/10 scale-[1.02] md:scale-[1.03]' 
                    : 'border-sky-100 hover:border-blue-300 hover:shadow-md'
                } ${layout.borderColor}`}
              >
                
                {/* Popular / Standard Badge */}
                {service.popular ? (
                  <div className="absolute top-6 right-6 font-mono text-[9px] font-bold text-white bg-blue-600 tracking-widest rounded-full px-3 py-1 shadow-sm">
                    PALING DIPILIH
                  </div>
                ) : (
                  <div className="absolute top-6 right-6 font-mono text-[9px] text-slate-500 tracking-widest border border-sky-200 bg-sky-50 rounded-full px-2.5 py-0.5 font-medium">
                    {layout.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Service icon shape */}
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${layout.accentColor} transition-transform group-hover:rotate-6`}>
                    <SvcIcon className="w-5 h-5" />
                  </div>

                  {/* Title, price & description */}
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="text-2xl font-bold font-display text-slate-900 transition-colors group-hover:text-blue-600">
                        {service.title}
                      </h3>
                      <div className="flex items-baseline space-x-1">
                        <span className="text-2xl font-mono font-bold text-slate-900 tracking-tight">
                          {service.priceRange}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-slate-600 text-xs leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>

                  {/* Extra inclusion header if specified */}
                  {service.extraTitle && (
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-blue-600 tracking-wider uppercase block font-bold">
                        {service.extraTitle}
                      </span>
                    </div>
                  )}

                  {/* Deliverables checklists */}
                  <div className={`space-y-3 pt-4 border-t ${service.extraTitle ? 'border-sky-100' : 'border-sky-100'}`}>
                    <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase block">
                      Yang Anda Dapatkan:
                    </span>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom guidance / fine print and action button */}
                <div className="pt-6 border-t border-sky-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {service.id === 'custom-solution' ? (
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-blue-600 tracking-lighter uppercase block font-bold">
                        SKEMA CUSTOM
                      </span>
                      <span className="text-[11px] text-slate-500 block leading-tight font-sans">
                        Harga Menyesuaikan Scope Proyek
                      </span>
                    </div>
                  ) : (
                    <div className="space-y-0.5">
                      <span className="text-[9px] font-mono text-slate-400 tracking-wider uppercase block">
                        ESTIMASI INVESTASI
                      </span>
                      <span className="text-xs font-mono font-medium text-slate-800">
                        Sesuai Fitur & Scope
                      </span>
                    </div>
                  )}
                  
                  <a
                    href="https://wa.me/6281234567890?text=Halo%2520Aldi%252C%2520saya%2520tertarik%2520untuk%2520mengkonsultasikan%2520pembuatan%2520website%2520paket%2520"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-5 py-2.5 font-mono text-[10px] font-extrabold uppercase tracking-widest rounded-xl transition-all duration-300 gap-1.5 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-500/20"
                  >
                    <span>Pesan Paket</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
