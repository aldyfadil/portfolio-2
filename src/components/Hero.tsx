import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowDown, Mail, Briefcase, Terminal } from 'lucide-react';

export default function Hero() {
  const [skillIndex, setSkillIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const skillsList = [
    'Pengembang Web Bersih & Rapi',
    'Desainer Kustom UI & UX',
    'Insinyur React Generasi Baru',
    'Spesialis Optimasi Kecepatan Tinggi'
  ];

  // Fine typing implementation that manages speed and flow organically
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = skillsList[skillIndex];
    
    const tick = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.slice(0, -1));
      } else {
        setTypedText((prev) => currentFullText.slice(0, prev.length + 1));
      }

      let speed = isDeleting ? 25 : 65;

      if (!isDeleting && typedText === currentFullText) {
        // Delay at peak
        speed = 1800;
        setIsDeleting(true);
      } else if (isDeleting && typedText === '') {
        setIsDeleting(false);
        setSkillIndex((prev) => (prev + 1) % skillsList.length);
        speed = 200;
      }

      timer = setTimeout(tick, speed);
    };

    timer = setTimeout(tick, 100);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, skillIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-[95vh] flex flex-col justify-center items-center overflow-hidden pt-28 pb-16 px-6 grid-overlay"
    >
      {/* Decorative handcrafted lines for top-agency layouts */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.025] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.025] hidden md:block" />
      <div className="absolute top-44 left-0 w-full h-[1px] bg-white/[0.015]" />
      
      <div className="max-w-5xl w-full relative z-20 space-y-10 text-center md:text-left mt-6">
        
        {/* Designer Badge Indicator */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="font-mono text-[10px] tracking-widest text-white/80 uppercase">
            AGENSI MANDIRI MAPAN // BERSEDIA MENERIMA PROYEK
          </span>
        </motion.div>

        {/* High architectural Typography headline */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight font-display text-white max-w-4xl"
          >
            Saya membangun profil bisnis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-yellow-600 font-extrabold block md:inline">
              berprestise tinggi
            </span>{' '}
            dengan tata letak UI kustom yang sangat berperforma.
          </motion.h1>

          {/* Typing Terminal Display */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center md:justify-start space-x-2 font-mono text-base md:text-xl text-white/60 min-h-[30px]"
          >
            <Terminal className="w-5 h-5 text-brand-gold hidden md:block" />
            <span>peran_freelance:</span>
            <span className="text-white font-medium text-glow uppercase tracking-wider">{typedText}</span>
            <span className="w-1.5 h-5 bg-brand-gold animate-pulse inline-block" />
          </motion.div>
        </div>

        {/* Dynamic professional description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-white/70 max-w-2xl text-sm md:text-base leading-relaxed font-sans"
        >
          Spesialisasi dalam pengembangan React kustom premium & skema arsitektur SEO yang terlihat buatan tangan, dimuat dalam waktu kurang dari 2 detik, serta memosisikan bisnis lokal untuk menarik proyek senilai Rp3 juta–Rp10 juta+. Tanpa tema berat atau templat pasaran.
        </motion.p>

        {/* Creative CTAs blocks */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
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

        {/* Metric widgets representing realism to clients */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="pt-12 border-t border-white/5 flex flex-wrap justify-center md:justify-start gap-y-6 gap-x-12 text-left"
        >
          <div>
            <div className="font-mono text-xs text-white/40 tracking-wider">AUDIT TERPROYEKSI</div>
            <div className="font-display font-bold text-lg text-white">SKOR KECEPATAN 99/100</div>
          </div>
          <div>
            <div className="font-mono text-xs text-white/40 tracking-wider">KOMITMEN KUALITAS</div>
            <div className="font-display font-bold text-lg text-white">100% SPA DITULIS MANUAL</div>
          </div>
          <div>
            <div className="font-mono text-xs text-white/40 tracking-wider">KONVERSI KLIEN</div>
            <div className="font-display font-bold text-lg text-white">Integrasi Chat Langsung</div>
          </div>
        </motion.div>

      </div>

      {/* Decorative arrow container on bottom */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-white/30 hover:text-white transition-colors duration-300 cursor-pointer">
        <a href="#projects" className="text-[10px] font-mono tracking-widest uppercase">Gulir ke Bawah</a>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </div>
    </section>
  );
}
