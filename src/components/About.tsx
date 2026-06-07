import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Timer, Rocket, UserCheck } from 'lucide-react';
// @ts-ignore
import seoIllustration from '../assets/images/seo_illustration_1780572122223.png';

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Custom counter animation mechanism
  const [counts, setCounts] = useState({ projects: 0, performance: 0, launch: 0, speed: 0 });

  useEffect(() => {
    if (isInView) {
      let run = true;
      const duration = 1500;
      const steps = 60;
      const stepDuration = duration / steps;
      let stepCounter = 0;

      const timer = setInterval(() => {
        if (!run) return;
        stepCounter++;
        
        setCounts({
          projects: Math.min(Math.round((36 / steps) * stepCounter), 36),
          performance: Math.min(Math.round((99 / steps) * stepCounter), 99),
          launch: Math.min(Math.round((2 / steps) * stepCounter), 2),
          speed: Math.min(Math.round((95 / steps) * stepCounter), 95),
        });

        if (stepCounter >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => {
        run = false;
        clearInterval(timer);
      };
    }
  }, [isInView]);



  return (
    <section id="about" className="py-24 px-6 relative bg-bg-dark grid-overlay overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.015] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.015] hidden md:block" />

      <div ref={containerRef} className="max-w-7xl mx-auto space-y-12 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT COLUMN: Story */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
                Masih Mengandalkan Instagram atau WhatsApp untuk Meyakinkan Calon Pelanggan?
              </h2>
            </div>

            <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Banyak bisnis kehilangan peluang karena belum memiliki website profesional yang mampu menunjukkan kualitas dan kredibilitas mereka secara maksimal.
              </p>
              <p className="border-l-2 border-brand-gold pl-4 text-white/95 italic font-medium bg-white/[0.01] py-2 pr-2">
                Saya membantu UMKM, perusahaan, kontraktor, dan bisnis jasa membangun website yang cepat, modern, dan responsif untuk meningkatkan kepercayaan pelanggan serta memperkuat citra profesional di dunia digital.
              </p>
              <p>
                Dengan desain yang elegan, performa cepat, dan pengalaman pengguna yang optimal, website Anda akan menjadi aset digital yang siap bekerja untuk bisnis Anda setiap hari.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Professional SEO & Digital Core Illustration */}
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-bg-card/40 shadow-2xl group hover:border-brand-gold/30 transition-all duration-500"
            >
              <img 
                src={seoIllustration}
                alt="Website SEO Optimization & Professional Performance Illustration" 
                className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Soft Ambient Gold Outer Shadow Glow */}
              <div className="absolute -inset-10 bg-brand-gold/5 blur-3xl rounded-full opacity-50 pointer-events-none group-hover:opacity-75 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>

        {/* Animated counter widgets - Full Width Side-by-Side (1 Row filled with 4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <div className="bg-bg-card p-6 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-yellow-500/20 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
            <div className="flex justify-between items-start">
              <Rocket className="w-5 h-5 text-brand-gold mb-3" />
              <span className="font-mono text-[9px] text-white/30">KLIEN_SUKSES</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-white">{counts.projects}+</h4>
            <p className="text-xs text-white/50 font-mono uppercase tracking-wider mt-1">
              Proyek Kustom Diluncurkan
            </p>
          </div>

          <div className="bg-bg-card p-6 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-cyan-500/20 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-cyan" />
            <div className="flex justify-between items-start">
              <Timer className="w-5 h-5 text-brand-cyan mb-3" />
              <span className="font-mono text-[9px] text-white/30">PERFORMA_INTI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-white">{counts.performance}%</h4>
            <p className="text-xs text-white/50 font-mono uppercase tracking-wider mt-1">
              Skor Rata-rata Kecepatan Seluler
            </p>
          </div>

          <div className="bg-bg-card p-6 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-brand-emerald" />
            <div className="flex justify-between items-start">
              <Award className="w-5 h-5 text-brand-emerald mb-3" />
              <span className="font-mono text-[9px] text-white/30">GARANSI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-white">{counts.launch} Tahun</h4>
            <p className="text-xs text-white/50 font-mono uppercase tracking-wider mt-1">
              Pemeliharaan Teknis Gratis
            </p>
          </div>

          <div className="bg-bg-card p-6 border border-white/5 rounded-2xl relative overflow-hidden group hover:border-indigo-500/20 transition-colors">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <div className="flex justify-between items-start">
              <UserCheck className="w-5 h-5 text-indigo-400 mb-3" />
              <span className="font-mono text-[9px] text-white/30">RETENSI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-white">{counts.speed}%+</h4>
            <p className="text-xs text-white/50 font-mono uppercase tracking-wider mt-1">
              Pertumbuhan Konversi Langsung
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
