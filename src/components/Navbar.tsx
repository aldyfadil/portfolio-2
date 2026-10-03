import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Code2, MessageCircle } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'all-projects';
  onNavigateHome?: () => void;
  onNavigateToProjects?: () => void;
}

export default function Navbar({ currentPage = 'home', onNavigateHome, onNavigateToProjects }: NavbarProps) {
  const [scrollActive, setScrollActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Beranda', href: '#home', id: 'home' },
    { name: 'Tentang', href: '#about', id: 'about' },
    { name: 'Proyek', href: '#projects', id: 'projects' },
    { name: 'Alur Kerja', href: '#process', id: 'process' },
    { name: 'Layanan', href: '#services', id: 'services' },
    { name: 'Testimoni', href: '#testimonials', id: 'testimonials' },
    { name: 'Kontak', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (linkId: string, href: string) => {
    setMobileMenuOpen(false);
    if (currentPage === 'all-projects') {
      if (linkId === 'projects') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      onNavigateHome?.();
      setTimeout(() => {
        const el = document.getElementById(linkId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollActive(window.scrollY > 40);

      // Section tracker loop
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPos = window.scrollY + 120;

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(navLinks[i].id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrollActive 
          ? 'py-3 bg-white/85 backdrop-blur-md border-b border-sky-100 shadow-sm' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Elegant Monogram Logo */}
        <a 
          href="#home" 
          onClick={(e) => {
            if (currentPage === 'all-projects') {
              e.preventDefault();
              onNavigateHome?.();
            }
          }}
          className="group flex items-center font-display text-lg tracking-tight select-none focus:outline-none cursor-pointer"
        >
          <span className="font-extrabold text-slate-900 text-base md:text-lg">
            Vynora.id
          </span>
        </a>

        {/* Desktop floating capsules */}
        <nav className="hidden lg:flex items-center space-x-1 bg-sky-50/80 p-1 rounded-full border border-sky-200/80 backdrop-blur-sm shadow-sm">
          {navLinks.map((link) => {
            const isActive = currentPage === 'all-projects' 
              ? link.id === 'projects'
              : activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  if (currentPage === 'all-projects') {
                    e.preventDefault();
                    handleNavClick(link.id, link.href);
                  }
                }}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 rounded-full cursor-pointer ${
                  isActive ? 'text-white font-bold' : 'text-slate-600 hover:text-blue-600'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-blue-600 rounded-full -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Direct connect button */}
        <div className="hidden lg:flex items-center">
          <a
            href="https://wa.me/6281234567890?text=Halo%2520Aldi%252C%2520saya%2520tertarik%2520untuk%2520mengkonsultasikan%2520pembuatan%2520website%2520company%2520profile%2520%252F%2520landing%2520page."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-5 py-2 text-xs font-bold tracking-widest uppercase text-white shadow-sm transition-all duration-300 focus:outline-none"
          >
            <span className="flex items-center space-x-1.5">
              <span>WhatsApp Kami</span>
              <MessageCircle className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-800 hover:text-blue-600 hover:bg-sky-50 rounded-full transition-colors relative z-50 focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Screen-overlay mobile transition panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white border-b border-sky-100 shadow-xl overflow-hidden lg:hidden"
          >
            <div className="p-8 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    if (currentPage === 'all-projects') {
                      e.preventDefault();
                    }
                    handleNavClick(link.id, link.href);
                  }}
                  className={`text-sm tracking-widest uppercase font-mono py-2 transition-all duration-200 border-b border-sky-100 cursor-pointer ${
                    (currentPage === 'all-projects' ? link.id === 'projects' : activeSection === link.id) 
                      ? 'text-blue-600 pl-2 font-bold' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  // {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center space-x-2 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-xs tracking-widest font-bold uppercase transition-all rounded-full shadow-sm"
              >
                <span>ADA PROYEK? CHAT SEKARANG</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
