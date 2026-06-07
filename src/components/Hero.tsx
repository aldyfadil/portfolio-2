import { motion } from 'motion/react';
import { Mail, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-6 grid-overlay"
    >
      {/* Decorative handcrafted lines for top-agency layouts */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.025] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.025] hidden md:block" />
      <div className="absolute top-44 left-0 w-full h-[1px] bg-white/[0.015]" />
      
      <div className="max-w-5xl w-full relative z-20 space-y-10 text-center flex flex-col items-center mx-auto mt-6">
        
        {/* Designer Badge Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
            Buat Website Impianmu Hari ini!
          </span>
        </motion.div>

        {/* High architectural Typography headline */}
        <div className="space-y-4 w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-display text-white max-w-3xl mx-auto"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 font-extrabold block md:inline">
              Semua Pasti Bisa
            </span>{' '}
            Punya Website Profesional!
          </motion.h1>
        </div>

        {/* Dynamic professional description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl text-xs sm:text-sm leading-relaxed font-sans mx-auto space-y-3"
        >
          <p className="font-medium text-white text-sm sm:text-base">
            Website Cepat, Modern, dan Siap Mendukung Pertumbuhan Bisnis Anda. Mulai dari Rp1.750.000 🚀
          </p>
          <p className="text-white/60 text-xs sm:text-sm">
            Solusi website custom untuk UMKM, perusahaan, dan bisnis jasa yang ingin tampil lebih profesional di era digital ✨
          </p>
        </motion.div>

        {/* Creative CTAs blocks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
        >
          {/* Main action CTA */}
          <a
            href="#projects"
            className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand-gold px-8 py-4 text-xs font-bold tracking-widest uppercase text-bg-dark transition-all duration-300 transform hover:scale-[1.02]"
          >
            <span className="absolute inset-x-0 h-0 bg-white transition-all duration-300 group-hover:h-full top-0 left-0 -z-10" />
            <span className="flex items-center space-x-2">
              <Briefcase className="w-4 h-4" />
              <span>Lihat Proyek</span>
            </span>
          </a>

          {/* Secondary action CTA */}
          <a
            href="#contact"
            className="w-full sm:w-auto group inline-flex items-center justify-center rounded-full border border-white/20 hover:border-brand-gold px-8 py-4 text-xs font-bold tracking-widest uppercase text-white hover:text-brand-gold transition-colors duration-200"
          >
            <span className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Hubungi Saya</span>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
