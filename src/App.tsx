/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Github } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="bg-bg-dark text-white selection:bg-brand-gold/20 selection:text-white min-h-screen relative font-sans antialiased overflow-x-hidden">
      
      {/* 1. Loading Entrance Animations screen */}
      <AnimatePresence mode="wait">
        {!loadingComplete && (
          <LoadingScreen onComplete={() => setLoadingComplete(true)} />
        )}
      </AnimatePresence>

      {/* Main app assets wrapper, visible after loader dismisses */}
      {loadingComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex flex-col"
        >
          {/* Aesthetic background mesh spot followings */}
          <MouseSpotlight />
          
          {/* Custom tracking cursor ball */}
          <CustomCursor />

          {/* Floating client navigation hubs */}
          <Navbar />

          {/* Structured Sections Deck */}
          <main className="flex-1">
            <Hero />
            <About />
            <Projects />
            <Process />
            <Services />
            <Testimonials />
            <Contact />
          </main>

          {/* Premium Handcrafted Footer representation */}
          <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-12 px-6 relative overflow-hidden">
            {/* Fine grid design lines elements to give developer feel */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-20 space-y-12">
              
              {/* Top Section: Structured Columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
                
                {/* Brand Column */}
                <div className="md:col-span-4 space-y-4">
                  <a href="#home" className="flex items-center space-x-2 font-display select-none">
                    <Code2 className="w-5 h-5 text-brand-gold animate-pulse" />
                    <span className="font-extrabold text-white text-lg tracking-tight">
                      VYNORA<span className="text-brand-gold font-light tracking-widest text-sm ml-1.5 uppercase">.ID</span>
                    </span>
                  </a>
                  <p className="text-white/60 text-xs leading-relaxed max-w-sm">
                    Arsitektur website premium konversi tinggi untuk entitas bisnis, inovator, dan korporat berkualitas tinggi. 100% kustom berbasis React dari nol.
                  </p>
                  <p className="text-brand-gold text-[10px] font-mono tracking-widest uppercase block">
                    // ARCHITECTURE & INTERACTION
                  </p>
                </div>

                {/* Quick Navigation Column */}
                <div className="md:col-span-3 space-y-4">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">// NAVIGASI</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <li><a href="#home" className="text-white/50 hover:text-brand-gold transition-colors block">Beranda</a></li>
                    <li><a href="#about" className="text-white/50 hover:text-brand-gold transition-colors block">Tentang</a></li>
                    <li><a href="#projects" className="text-white/50 hover:text-brand-gold transition-colors block">Proyek</a></li>
                    <li><a href="#process" className="text-white/50 hover:text-brand-gold transition-colors block">Alur Kerja</a></li>
                    <li><a href="#services" className="text-white/50 hover:text-brand-gold transition-colors block">Layanan</a></li>
                    <li><a href="#testimonials" className="text-white/50 hover:text-brand-gold transition-colors block">Testimoni</a></li>
                  </ul>
                </div>

                {/* Contacts & Availability Column */}
                <div className="md:col-span-3 space-y-4">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">// HUBUNGI KAMI</h4>
                  <div className="space-y-2 text-xs text-white/60">
                    <p className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                      <span>Online / Tersedia Diskusi</span>
                    </p>
                    <p className="hover:text-brand-gold transition-colors">
                      <a href="mailto:aldifadilla883@gmail.com">aldifadilla883@gmail.com</a>
                    </p>
                    <p className="hover:text-brand-gold transition-colors">
                      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">+62 812-3456-7890</a>
                    </p>
                  </div>
                </div>

                {/* Specification Column */}
                <div className="md:col-span-2 space-y-4">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">// SPESIFIKASI</h4>
                  <div className="space-y-1 text-[10px] font-mono text-white/40">
                    <p>ENGINE: VITE + REACT</p>
                    <p>STYLING: TAILWIND CSS</p>
                    <p>DEPLOY: CLOUD INSTANCE</p>
                    <p>LOCATION: INDONESIA</p>
                  </div>
                </div>

              </div>

              {/* Bottom Section: Copyright */}
              <div className="flex justify-end text-[11px] font-mono text-white/40">
                <span>© {new Date().getFullYear()} VYNORA.ID. ALL RIGHTS RESERVED.</span>
              </div>

            </div>
          </footer>

        </motion.div>
      )}

    </div>
  );
}
