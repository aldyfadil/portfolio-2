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
          launch: Math.min(Math.round((1 / steps) * stepCounter), 1),
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
    <section id="about" className="py-24 px-6 relative bg-slate-50/60 border-t border-sky-100 grid-overlay overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-sky-100 hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-sky-100 hidden md:block" />

      <div ref={containerRef} className="max-w-7xl mx-auto space-y-12 relative z-20">
        
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* LEFT COLUMN: Story */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
                Masih Mengandalkan Instagram atau WhatsApp untuk Meyakinkan Calon Pelanggan?
              </h2>
            </div>

            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed font-sans">
              <p>
                Banyak bisnis kehilangan peluang karena belum memiliki website profesional yang mampu menunjukkan kualitas dan kredibilitas mereka secara maksimal.
              </p>
              <p className="border-l-4 border-blue-600 pl-4 text-slate-800 italic font-medium bg-blue-50/50 py-3 pr-3 rounded-r-xl">
                Kami membantu UMKM, perusahaan, kontraktor, dan bisnis jasa membangun website yang cepat, modern, dan responsif untuk meningkatkan kepercayaan pelanggan serta memperkuat citra profesional di dunia digital.
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
              className="relative w-full rounded-2xl overflow-hidden border border-sky-200 bg-white shadow-xl group hover:border-blue-300 transition-all duration-500"
            >
              <img 
                src={seoIllustration}
                alt="Website SEO Optimization & Professional Performance Illustration" 
                className="w-full h-auto object-cover group-hover:scale-[1.015] transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Soft Ambient Outer Shadow Glow */}
              <div className="absolute -inset-10 bg-sky-400/10 blur-3xl rounded-full opacity-60 pointer-events-none group-hover:opacity-80 transition-opacity duration-700" />
            </motion.div>
          </div>
        </div>

        {/* Animated counter widgets - Full Width Side-by-Side (1 Row filled with 4 cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          <div className="bg-white p-6 border border-sky-100 rounded-2xl relative overflow-hidden group hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <div className="flex justify-between items-start">
              <Rocket className="w-5 h-5 text-blue-600 mb-3" />
              <span className="font-mono text-[9px] text-slate-400 font-semibold">KLIEN_SUKSES</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-slate-900">{counts.projects}+</h4>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
              Proyek Kustom Diluncurkan
            </p>
          </div>

          <div className="bg-white p-6 border border-sky-100 rounded-2xl relative overflow-hidden group hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <div className="flex justify-between items-start">
              <Timer className="w-5 h-5 text-blue-600 mb-3" />
              <span className="font-mono text-[9px] text-slate-400 font-semibold">PERFORMA_INTI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-slate-900">{counts.performance}%</h4>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
              Skor Rata-rata Kecepatan Seluler
            </p>
          </div>

          <div className="bg-white p-6 border border-sky-100 rounded-2xl relative overflow-hidden group hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <div className="flex justify-between items-start">
              <Award className="w-5 h-5 text-blue-600 mb-3" />
              <span className="font-mono text-[9px] text-slate-400 font-semibold">GARANSI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-slate-900">{counts.launch} Tahun</h4>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
              Pemeliharaan Teknis Gratis
            </p>
          </div>

          <div className="bg-white p-6 border border-sky-100 rounded-2xl relative overflow-hidden group hover:border-blue-300 transition-all shadow-sm hover:shadow-md">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
            <div className="flex justify-between items-start">
              <UserCheck className="w-5 h-5 text-blue-600 mb-3" />
              <span className="font-mono text-[9px] text-slate-400 font-semibold">RETENSI</span>
            </div>
            <h4 className="text-4xl font-extrabold font-display text-slate-900">{counts.speed}%+</h4>
            <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">
              Pertumbuhan Konversi Langsung
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
