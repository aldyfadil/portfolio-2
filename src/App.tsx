/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, ArrowUp, Github } from 'lucide-react';

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
import TechStack from './components/TechStack';
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
            <Projects />
            <About />
            <Process />
            <Services />
            <Testimonials />
            <TechStack />
            <Contact />
          </main>

          {/* Premium Handcrafted Footer representation */}
          <footer className="bg-bg-dark border-t border-white/5 py-12 px-6 grid-overlay relative overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-20">
              
              <div className="space-y-2 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 font-display">
                  <Code2 className="w-5 h-5 text-brand-gold" />
                  <span className="font-extrabold text-sm uppercase tracking-wider text-white">ALDI FADILLA</span>
                </div>
                <p className="text-white/40 text-[11px] font-mono">// ARSITEK WEB FREELANCE TERPERCAYA // INDONESIA</p>
              </div>

              {/* Back to top button */}
              <div className="flex items-center space-x-6 text-xs text-white/50 font-mono">
                <a href="#home" className="hover:text-brand-gold transition-colors block uppercase tracking-widest">// KEMBALI KE ATAS [↑]</a>
                <span>© {new Date().getFullYear()} HAK CIPTA DILINDUNGI</span>
              </div>

              {/* Fine disclaimer credits */}
              <div className="text-[10px] font-mono text-white/30 text-center md:text-right">
                <span>Didesain untuk Pelaku Usaha & Enterprise Berkualitas.</span>
                <p className="mt-1">// 100% Kustom React SPA Tanpa Menggunakan Template Pasaran.</p>
              </div>

            </div>
          </footer>

        </motion.div>
      )}

    </div>
  );
}
