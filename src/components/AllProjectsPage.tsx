import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ExternalLink, 
  Eye, 
  Layers, 
  Search, 
  Sparkles, 
  Calendar, 
  User, 
  X, 
  ArrowUpRight, 
  Filter,
  CheckCircle2
} from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface AllProjectsPageProps {
  onBackToHome: () => void;
  selectedProjectId?: string | null;
}

export default function AllProjectsPage({ onBackToHome, selectedProjectId }: AllProjectsPageProps) {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Extract all categories dynamically
  const categories = ['Semua', ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];

  // Scroll to targeted project or top on initial mount
  useEffect(() => {
    if (selectedProjectId) {
      const element = document.getElementById(`all-project-${selectedProjectId}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedProjectId]);

  // Filter projects by category and search keyword
  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchCategory = selectedCategory === 'Semua' || project.category === selectedCategory;
    const matchQuery = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchQuery;
  });

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-24 pb-20 px-6 relative overflow-hidden">
      
      {/* Background ambient radial spots */}
      <div className="absolute top-20 left-10 w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-yellow-500/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      {/* Fine architectural decorative grid lines */}
      <div className="absolute top-0 left-8 md:left-12 w-[1px] h-full bg-white/[0.02] pointer-events-none" />
      <div className="absolute top-0 right-8 md:right-12 w-[1px] h-full bg-white/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-20">
        
        {/* Top Navigation & Breadcrumbs Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-brand-gold transition-colors focus:outline-none w-fit cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-gold/40 group-hover:bg-brand-gold/10 transition-colors">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-white group-hover:text-brand-gold" />
            </div>
            <span>Kembali ke Beranda</span>
          </button>

          <div className="flex items-center space-x-2 text-xs font-mono text-white/40">
            <span className="hover:text-white cursor-pointer" onClick={onBackToHome}>Beranda</span>
            <span>/</span>
            <span className="text-brand-gold font-bold">Katalog Semua Proyek ({PROJECTS_DATA.length})</span>
          </div>
        </div>

        {/* Page Hero Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-brand-gold/10 border border-brand-gold/20 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            <span className="font-mono text-[10px] tracking-widest text-brand-gold uppercase font-bold">
              Katalog Lengkap Proyek Portofolio
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight text-white leading-tight">
            Semua Karya & Arsitektur Website Pilihan
          </h1>
          
          <p className="text-white/60 text-sm sm:text-base leading-relaxed font-sans">
            Menampilkan seluruh 6 karya proyek kustom yang telah dibangun. Mulai dari profil perusahaan arsitektur kelas atas, katalog digital e-commerce, portal korporat terintegrasi, hingga aplikasi web kustom.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="p-6 bg-bg-card border border-white/10 rounded-3xl space-y-6">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari proyek, teknologi (React, Node.js...), atau kategori..."
                className="w-full bg-white/5 border border-white/10 hover:border-white/20 focus:border-brand-gold rounded-xl pl-11 pr-4 py-3 text-xs text-white placeholder:text-white/30 outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Total Results Counter */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/60">
              <Filter className="w-3.5 h-3.5 text-brand-gold" />
              <span>Menampilkan: </span>
              <span className="font-bold text-white bg-white/10 px-2 py-0.5 rounded-md">
                {filteredProjects.length} dari {PROJECTS_DATA.length} Proyek
              </span>
            </div>

          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
            {categories.map((category) => {
              const count = category === 'Semua' 
                ? PROJECTS_DATA.length 
                : PROJECTS_DATA.filter(p => p.category === category).length;
              const isActive = selectedCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-200 cursor-pointer flex items-center space-x-1.5 ${
                    isActive
                      ? 'border-brand-gold text-bg-dark bg-brand-gold font-bold shadow-lg shadow-brand-gold/10'
                      : 'border-white/10 text-white/70 hover:text-white hover:border-white/30 bg-white/[0.02]'
                  }`}
                >
                  <span>{category}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-bg-dark/20 text-bg-dark font-extrabold' : 'bg-white/10 text-white/60'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Projects Cards Grid Showcase */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-bg-card border border-white/5 rounded-3xl space-y-4">
            <p className="text-white/40 font-mono text-sm">Tidak ada proyek yang sesuai dengan kata kunci "{searchQuery}".</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('Semua'); }}
              className="text-xs font-mono text-brand-gold hover:underline uppercase tracking-wider cursor-pointer"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const isTargeted = selectedProjectId === project.id;

                return (
                  <motion.div
                    id={`all-project-${project.id}`}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={project.id}
                    className={`group relative bg-bg-card rounded-3xl overflow-hidden shadow-2xl flex flex-col transition-all duration-300 ${
                      isTargeted 
                        ? 'border-2 border-brand-gold shadow-brand-gold/10 ring-4 ring-brand-gold/10' 
                        : 'border border-white/10 hover:border-brand-gold/40'
                    }`}
                  >
                    
                    {/* Project Image Frame */}
                    <div className="relative aspect-video w-full overflow-hidden bg-bg-dark select-none">
                      <img
                        alt={project.title}
                        src={project.image}
                        referrerPolicy="no-referrer"
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Category Tag pill */}
                      <div className="absolute top-3 left-3 bg-bg-dark/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center space-x-1.5 z-10">
                        <Layers className="w-3.5 h-3.5 text-brand-gold" />
                        <span className="font-mono text-[9px] tracking-wider text-white/90 uppercase">
                          {project.category}
                        </span>
                      </div>

                      {/* Selected project badge if targeted from homepage */}
                      {isTargeted && (
                        <div className="absolute top-3 right-3 bg-brand-gold text-bg-dark font-mono text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider z-10 flex items-center space-x-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Dipilih</span>
                        </div>
                      )}

                      {/* Dark gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    </div>

                    {/* Content Block */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-display">
                          {project.title}
                        </h3>
                        
                        <p className="text-white/70 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                          {project.description}
                        </p>
                      </div>

                      {/* Technology Badges */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
                          Teknologi Terintegrasi:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <span 
                              key={tech} 
                              className="text-[10px] font-mono text-white/60 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Meta Info */}
                      <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/5 text-[11px] font-mono text-white/50">
                        <div>
                          <span className="block text-white/30 text-[9px] uppercase">Durasi:</span>
                          <span className="text-white/80 font-medium">{project.duration}</span>
                        </div>
                        <div>
                          <span className="block text-white/30 text-[9px] uppercase">Peran:</span>
                          <span className="text-white/80 font-medium line-clamp-1">{project.role}</span>
                        </div>
                      </div>

                      {/* Action buttons footer */}
                      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                        
                        {/* Live Website Demo Link */}
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 hover:border-white/20"
                        >
                          <span>Kunjungi</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>

                        {/* Case Study Modal Trigger */}
                        <button
                          onClick={() => setActiveProject(project)}
                          className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-bg-dark font-mono text-xs uppercase tracking-wider rounded-xl transition-colors border border-brand-gold/30 hover:border-brand-gold cursor-pointer"
                        >
                          <span>Studi Kasus</span>
                          <Eye className="w-3.5 h-3.5" />
                        </button>

                      </div>
                    </div>

                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Bottom Call to Action Banner */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-bg-card via-bg-panel to-bg-card border border-brand-gold/20 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-gold/5 rounded-full filter blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl">
              <span className="font-mono text-xs text-brand-gold uppercase tracking-widest font-bold">
                SIAP MEMULAI WEBSITE ANDA?
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
                Ingin Memiliki Website Seperti Proyek di Atas?
              </h2>
              <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed">
                Konsultasikan kebutuhan bisnis Anda bersama kami. Kami rancang arsitektur website modern, responsif, dan siap mengonversi pengunjung menjadi klien setia.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="https://wa.me/6281234567890?text=Halo%20Aldi%2C%20saya%20tertarik%20untuk%20mengkonsultasikan%20pembuatan%20website%20company%20profile%20/%20landing%20page."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-brand-gold hover:bg-yellow-400 text-bg-dark px-8 py-3.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-brand-gold/10"
              >
                <span>Konsultasi WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={onBackToHome}
                className="inline-flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Kembali ke Beranda</span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* CASE STUDY OVERLAY MODAL */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-bg-dark/85 backdrop-blur-md p-4 sm:p-6 md:p-10">
            
            {/* Outer boundary dismissal spacer */}
            <div 
              className="absolute inset-0 cursor-zoom-out" 
              onClick={() => setActiveProject(null)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative bg-bg-panel border border-white/10 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-20 scrollbar-thin"
            >
              
              {/* Header Cover Image */}
              <div className="relative aspect-video max-h-80 w-full overflow-hidden bg-bg-dark select-none">
                <img
                  alt={activeProject.title}
                  src={activeProject.image}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-panel via-bg-panel/40 to-transparent" />
                
                {/* Close modal controls */}
                <button
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 p-2.5 bg-bg-dark/80 backdrop-blur-md text-white/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 transition-all focus:outline-none cursor-pointer"
                  aria-label="Close Case Study"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="font-mono text-xs text-brand-gold bg-bg-dark/70 border border-brand-gold/20 px-3 py-1 rounded-full uppercase tracking-widest leading-none">
                    {activeProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black font-display text-white tracking-tight mt-3">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Case details grids */}
              <div className="p-6 sm:p-8 space-y-8">
                
                {/* Scope & Role Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-white/40 flex items-center gap-1.5 uppercase">
                      <User className="w-3.5 h-3.5" />
                      <span>PERAN FREELANCE</span>
                    </div>
                    <p className="text-white text-xs font-semibold">{activeProject.role}</p>
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-white/40 flex items-center gap-1.5 uppercase">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>DURASI PROYEK</span>
                    </div>
                    <p className="text-white text-xs font-semibold">{activeProject.duration}</p>
                  </div>
                  <div className="space-y-1 col-span-2">
                    <div className="text-[10px] font-mono text-white/40 flex items-center gap-1.5 uppercase">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>SISTEM INTEGRASI</span>
                    </div>
                    <p className="text-white text-xs font-semibold line-clamp-1">
                      {activeProject.techStack.join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Narrative story */}
                <div className="space-y-3">
                  <h4 className="font-display font-extrabold text-white text-base md:text-lg uppercase tracking-wide">
                    KISAH KLIEN
                  </h4>
                  <p className="text-white/75 text-sm leading-relaxed font-sans">
                    {activeProject.fullStory}
                  </p>
                </div>

                {/* Challenge vs Solution layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 bg-red-500/5 border border-red-500/10 rounded-2xl space-y-2">
                    <h5 className="font-mono text-xs text-red-400 font-extrabold uppercase tracking-widest">
                      [ TANTANGAN ]
                    </h5>
                    <p className="text-white/80 text-xs leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>
                  <div className="p-5 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl space-y-2">
                    <h5 className="font-mono text-xs text-emerald-400 font-extrabold uppercase tracking-widest">
                      [ SOLUSI ARSITEKTUR ULANG ]
                    </h5>
                    <p className="text-white/80 text-xs leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Scope checklist */}
                <div className="space-y-4">
                  <h4 className="font-display font-extrabold text-white text-base uppercase tracking-wide">
                    CAKUPAN PROYEK YANG DIKIRIM
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeProject.scope.map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-white/70">
                        <span className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* External Trigger live link */}
                <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-4">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-brand-gold text-bg-dark font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 hover:scale-[1.01] block text-center"
                  >
                    <span>KUNJUNGI SITUS INTEGRASI</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  
                  <button
                    onClick={() => setActiveProject(null)}
                    className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-colors border border-white/10 hover:border-white/20 focus:outline-none cursor-pointer"
                  >
                    Tutup Ringkasan
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
