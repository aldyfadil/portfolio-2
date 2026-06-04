import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, Timer, Rocket, UserCheck } from 'lucide-react';

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

  const timelineItems = [
    {
      year: '2024 - Sekarang',
      title: 'Pekerja Lepas Kreatif Senior',
      institution: 'Operasional Mandiri',
      description: 'Membuat profil perusahaan ultra-fungsional berkinerja tinggi dan antarmuka React khusus untuk startup Indonesia dan jaringan layanan lokal. Mengelola klien dengan nilai proyek Rp3 juta - Rp10 juta+.',
    },
    {
      year: '2022 - 2024',
      title: 'Desainer UI & Arsitek Web',
      institution: 'Studio Desain Regional',
      description: 'Membangun prototipe vektor dan merancang halaman pendaratan (landing page) konversi tinggi untuk katalog arsitektur premium, perusahaan logistik berat, dan jaringan toko bunga lokal.',
    },
    {
      year: '2020 - 2022',
      title: 'Magang Desain Web',
      institution: 'Core Digital Hub',
      description: 'Mengasah konfigurasi CSS responsif kustom, sistem bingkai kawat klien, struktur SEO semantik, dan matriks konten respons langsung.',
    }
  ];

  const skillVisuals = [
    { name: 'Pengembangan React (Fungsional / State)', level: '96%' },
    { name: 'Desain Tata Letak Estetis Tailwind', level: '98%' },
    { name: 'Skema Arsitektur TypeScript', level: '85%' },
    { name: 'Optimasi Kecepatan Halaman & Penerapan CDN', level: '99%' },
    { name: 'Sistem Prototipe Figma Premium', level: '90%' }
  ];

  return (
    <section id="about" className="py-24 px-6 relative bg-bg-dark grid-overlay overflow-hidden">
      
      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.015] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.015] hidden md:block" />

      <div ref={containerRef} className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start relative z-20">
        
        {/* LEFT COLUMN: Story & Animated Counters */}
        <div className="w-full lg:w-1/2 space-y-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em]">
                // KENALKAN ALDI FADILLA
              </span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
              Pengembang yang mementingkan desain, kecepatan, & komunikasi langsung dengan klien.
            </h2>
          </div>

          <div className="space-y-6 text-white/70 text-sm md:text-base leading-relaxed font-sans">
            <p>
              Saya sering melihat bisnis lokal di Indonesia membeli templat WordPress yang berat seharga Rp3 juta–5 juta, hanya untuk mendapatkan dasbor lambat yang mencetak skor 40% pada uji performa seluler, memuat lebih lambat dari lima detik, dan gagal mendatangkan prospek.
            </p>
            <p className="border-l-2 border-brand-gold pl-4 text-white/95 italic font-medium bg-white/[0.01] py-2 pr-2">
              "Misi saya sangat sederhana: membuat situs web digital premium kustom langsung dengan React. Dengan menghilangkan blok pihak ketiga dan sampah templat pasaran, situs klien saya termuat instan dan menghasilkan konversi pengunjung."
            </p>
            <p>
              Baik itu menyusun tabel teknik yang rumit untuk penyedia logistik industri, mendesain portofolio arsitektur minimalis, atau membangun sistem katalog ringan dengan integrasi pembayaran WhatsApp langsung, saya membangun setiap node dari awal untuk memastikan prestise korporat Anda.
            </p>
          </div>

          {/* Animated counter widgets */}
          <div className="grid grid-cols-2 gap-6 pt-6">
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

        {/* RIGHT COLUMN: Experience timeline & Skills meters */}
        <div className="w-full lg:w-1/2 space-y-12">
          
          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider pb-3 border-b border-white/5 flex items-center justify-between">
              <span>PENGALAMAN KERJA</span>
              <span className="font-mono text-xs text-white/40 tracking-normal normal-case">Riwayat</span>
            </h3>
            
            <div className="space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-[17px] before:w-[1px] before:bg-white/10">
              {timelineItems.map((item, index) => (
                <div key={index} className="flex gap-6 relative group">
                  <div className="w-9 h-9 rounded-full bg-bg-card border border-white/10 flex items-center justify-center relative z-10 transition-colors group-hover:border-brand-gold">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/40 group-hover:bg-brand-gold transition-colors" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                      <div>
                        <h4 className="text-white font-medium text-sm md:text-base group-hover:text-brand-gold transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-white/40 font-mono uppercase tracking-wider">{item.institution}</p>
                      </div>
                      <span className="shrink-0 text-[10px] font-mono border border-white/10 rounded-full px-2.5 py-0.5 text-white/60 bg-white/5 self-start">
                        {item.year}
                      </span>
                    </div>
                    <p className="text-xs md:text-sm text-white/60 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Skills Visualization */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider pb-3 border-b border-white/5 flex items-center justify-between">
              <span>METRIK FOKUS PROFESIONAL</span>
              <span className="font-mono text-xs text-white/40 tracking-normal normal-case">Skala</span>
            </h3>
            
            <div className="space-y-5">
              {skillVisuals.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-mono text-white/80">{skill.name}</span>
                    <span className="font-mono text-brand-gold">{skill.level}</span>
                  </div>
                  <div className="h-1 bg-white/5 w-full rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-brand-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
