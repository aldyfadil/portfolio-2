/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code2, Github } from 'lucide-react';

import CustomCursor from './components/CustomCursor';
import MouseSpotlight from './components/MouseSpotlight';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AllProjectsPage from './components/AllProjectsPage';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'all-projects'>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash === '#proyek-lainnya' || hash === '#all-projects') {
        return 'all-projects';
      }
    }
    return 'home';
  });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Synchronize hash changes for back/forward browser button support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#proyek-lainnya' || hash === '#all-projects') {
        setCurrentPage('all-projects');
      } else if (hash === '#home' || hash === '' || hash === '#projects') {
        setCurrentPage('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleNavigateToAllProjects = (projectId?: string) => {
    setSelectedProjectId(projectId || null);
    setCurrentPage('all-projects');
    window.location.hash = '#proyek-lainnya';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    setSelectedProjectId(null);
    window.location.hash = '#projects';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

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
          <Navbar 
            currentPage={currentPage}
            onNavigateHome={handleBackToHome}
            onNavigateToProjects={() => handleNavigateToAllProjects()}
          />

          {/* Structured Sections Deck / Page view switcher */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              {currentPage === 'home' ? (
                <motion.div
                  key="home-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Hero />
                  <About />
                  <Projects onNavigateToAllProjects={handleNavigateToAllProjects} />
                  <Process />
                  <Services />
                  <Testimonials />
                  <Contact />
                </motion.div>
              ) : (
                <motion.div
                  key="all-projects-page"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <AllProjectsPage 
                    onBackToHome={handleBackToHome} 
                    selectedProjectId={selectedProjectId}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </main>

          {/* Premium Handcrafted Footer representation */}
          <footer className="bg-bg-dark border-t border-white/5 pt-16 pb-12 px-6 relative overflow-hidden">
            {/* Fine grid design lines elements to give developer feel */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            <div className="max-w-7xl mx-auto relative z-20 space-y-12">
              
              {/* Top Section: Structured Columns */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
                
                {/* Brand Column */}
                <div className="md:col-span-6 space-y-4">
                  <a 
                    href="#home" 
                    onClick={(e) => {
                      if (currentPage === 'all-projects') {
                        e.preventDefault();
                        handleBackToHome();
                      }
                    }}
                    className="flex items-center font-display select-none cursor-pointer"
                  >
                    <span className="font-extrabold text-white text-lg tracking-tight">
                      Vynora.id
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
                <div className="md:col-span-3 space-y-4 md:text-left">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">NAVIGASI</h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                    <li>
                      <a 
                        href="#home" 
                        onClick={(e) => {
                          if (currentPage === 'all-projects') {
                            e.preventDefault();
                            handleBackToHome();
                          }
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Beranda
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#about" 
                        onClick={(e) => {
                          if (currentPage === 'all-projects') {
                            e.preventDefault();
                            handleBackToHome();
                            setTimeout(() => {
                              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Tentang
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#proyek-lainnya" 
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavigateToAllProjects();
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Semua Proyek
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#process" 
                        onClick={(e) => {
                          if (currentPage === 'all-projects') {
                            e.preventDefault();
                            handleBackToHome();
                            setTimeout(() => {
                              document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Alur Kerja
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#services" 
                        onClick={(e) => {
                          if (currentPage === 'all-projects') {
                            e.preventDefault();
                            handleBackToHome();
                            setTimeout(() => {
                              document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Layanan
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#testimonials" 
                        onClick={(e) => {
                          if (currentPage === 'all-projects') {
                            e.preventDefault();
                            handleBackToHome();
                            setTimeout(() => {
                              document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }}
                        className="text-white/50 hover:text-brand-gold transition-colors block cursor-pointer"
                      >
                        Testimoni
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Contacts & Availability Column */}
                <div className="md:col-span-3 space-y-4 md:text-right">
                  <h4 className="font-mono text-xs font-bold text-white uppercase tracking-widest">HUBUNGI KAMI</h4>
                  <div className="space-y-2 text-xs text-white/60 flex flex-col md:items-end">
                    <p className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping shrink-0" />
                      <span>Tersedia Diskusi</span>
                    </p>
                    <p className="hover:text-brand-gold transition-colors">
                      <a href="mailto:aldifadilla883@gmail.com">aldifadilla883@gmail.com</a>
                    </p>
                    <p className="hover:text-brand-gold transition-colors">
                      <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">+62 812-3456-7890</a>
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Section: Copyright */}
              <div className="flex justify-center text-[11px] font-mono text-white/40">
                <span>© {new Date().getFullYear()} Vynora.id. ALL RIGHTS RESERVED.</span>
              </div>

            </div>
          </footer>

        </motion.div>
      )}

    </div>
  );
}
