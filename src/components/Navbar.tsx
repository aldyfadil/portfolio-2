import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Code2, MessageCircle } from 'lucide-react';

export default function Navbar() {
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
          ? 'py-3 bg-bg-dark/80 backdrop-blur-md border-b border-white/5' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Elegant Monogram Logo */}
        <a 
          href="#home" 
          className="group flex items-center space-x-2 font-display text-lg tracking-tight select-none focus:outline-none"
        >
          <Code2 className="w-5 h-5 text-brand-gold group-hover:rotate-12 transition-transform duration-300" />
          <span className="font-extrabold text-white text-base md:text-lg">
            VYNORA<span className="text-brand-gold font-light tracking-widest text-sm ml-1.5 uppercase">.ID</span>
          </span>
        </a>

        {/* Desktop floating capsules */}
        <nav className="hidden lg:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-sm shadow-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide uppercase transition-all duration-300 rounded-full ${
                  isActive ? 'text-bg-dark font-semibold' : 'text-white/70 hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-brand-gold rounded-full -z-10"
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
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand-gold px-5 py-2 text-xs font-medium tracking-widest uppercase text-white transition-all duration-300 focus:outline-none"
          >
            <span className="absolute inset-x-0 h-0 bg-brand-gold transition-all duration-300 group-hover:h-full top-0 left-0 -z-10" />
            <span className="flex items-center space-x-1.5 transition-colors duration-300 group-hover:text-bg-dark">
              <span>WhatsApp Kami</span>
              <MessageCircle className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/80 hover:text-white hover:bg-white/5 rounded-full transition-colors relative z-50 focus:outline-none"
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
            className="absolute top-full left-0 w-full bg-bg-dark border-b border-white/10 overflow-hidden lg:hidden"
          >
            <div className="p-8 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm tracking-widest uppercase font-mono py-2 transition-all duration-200 border-b border-white/5 ${
                    activeSection === link.id ? 'text-brand-gold pl-2 font-bold' : 'text-white/60 hover:text-white'
                  }`}
                >
                  // {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 flex items-center justify-center space-x-2 w-full py-3 border border-brand-gold text-brand-gold text-xs tracking-widest font-bold uppercase hover:bg-brand-gold hover:text-bg-dark transition-all rounded-full"
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
