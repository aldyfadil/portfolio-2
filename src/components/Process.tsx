import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data';
import { CheckCircle2, ChevronRight, Milestone } from 'lucide-react';

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Decorative vertical lines and ambient mesh */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em]">
            // PROSES KERJA KAMI
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Dari Ide Hingga Website Siap Digunakan
          </h2>
          <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto">
            Kami menggunakan proses yang jelas dan transparan agar setiap proyek selesai tepat waktu, sesuai kebutuhan bisnis, dan mudah dikembangkan di masa depan.
          </p>
        </div>

        {/* Horizontal & Vertical Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-6 relative">
          
          {/* Subtle line across items on desktop */}
          <div className="absolute top-1/3 left-0 w-full h-[1px] bg-white/5 hidden lg:block -z-10" />

          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.phase}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-bg-card border border-white/5 p-6 rounded-3xl flex flex-col justify-between space-y-6 hover:border-yellow-500/20 transition-all duration-300 group"
            >
              
              {/* Outer floating numbers / tags */}
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className={`text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r ${step.color}`}>
                    FASE_0{index + 1}
                  </span>
                  {step.timeline && (
                    <span className="text-[10px] font-mono text-white/40 tracking-wider bg-white/5 border border-white/5 rounded-full px-2 py-0.5">
                      {step.timeline}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-bold text-white text-base md:text-lg group-hover:text-brand-gold transition-colors">
                    {step.title}
                  </h3>
                  {step.subtitle && (
                    <p className="font-mono text-[10px] text-brand-gold/70 lowercase">
                      ~ {step.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Subtext explanation */}
              <p className="text-white/60 text-xs leading-relaxed font-sans flex-1">
                {step.description}
              </p>

              {/* deliverables checklist */}
              <div className="space-y-3 pt-4 border-t border-white/5">
                <div className="flex items-center space-x-1.5 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                  <Milestone className="w-3.5 h-3.5" />
                  <span>Yang Anda Dapatkan:</span>
                </div>
                <div className="space-y-1.5">
                  {step.deliverables.map((out, oIdx) => (
                    <div key={oIdx} className="flex items-start space-x-1.5 text-[11px] text-white/75 font-sans leading-tight">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Client Workflow Note */}
        <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-semibold text-white">Siap Memulai Proyek Anda?</h4>
            <p className="text-xs text-white/50">Konsultasikan kebutuhan website bisnis Anda melalui WhatsApp. Saya akan membantu menentukan solusi yang sesuai dengan tujuan dan anggaran bisnis Anda.</p>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%2520Aldi%252C%2520saya%2520tertarik%2520untuk%2520mengkonsultasikan%2520pembuatan%2520website%2520company%2520profile%2520%252F%2520landing%2520page."
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center space-x-1.5 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10"
          >
            <span>Hubungi via WhatsApp</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
