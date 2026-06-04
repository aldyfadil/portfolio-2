import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, X, Calendar, User, Eye, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Derive unique categories dynamically
  const categories = ['Semua', ...Array.from(new Set(PROJECTS_DATA.map((p) => p.category)))];

  const filteredProjects = selectedCategory === 'Semua'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Handcrafted ambient decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-16 relative z-20">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 pb-6 border-b border-white/5 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block">
            My Project
          </span>
          <p className="text-white/60 text-sm md:text-base leading-relaxed font-sans">
            Berikut adalah beberapa projek yang telah dikerjakan, mulai dari website perusahaan, landing page, hingga aplikasi web custom
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex flex-wrap gap-2 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full border transition-all duration-300 relative focus:outline-none ${
                selectedCategory === category
                  ? 'border-brand-gold text-bg-dark bg-brand-gold font-bold'
                  : 'border-white/10 text-white/60 hover:text-white hover:border-white/30 bg-white/[0.02]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Showcase Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-bg-card border border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col hover:border-yellow-500/20 transition-colors"
              >
                
                {/* Project Image Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-bg-dark select-none">
                  <img
                    alt={project.title}
                    src={project.image}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Top Accent bar */}
                  <div className="absolute top-3 left-3 bg-bg-dark/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center space-x-1.5 z-10">
                    <Layers className="w-3.5 h-3.5 text-brand-gold" />
                    <span className="font-mono text-[9px] tracking-wider text-white/90 uppercase">
                      {project.category}
                    </span>
                  </div>

                  {/* Aesthetic hover overlay spotlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Domain title */}
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-brand-gold transition-colors font-display">
                      {project.title}
                    </h3>
                    
                    {/* Tiny excerpt */}
                    <p className="text-white/60 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology tokens */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono text-white/50 bg-white/5 border border-white/[0.05] rounded-full px-2.5 py-0.5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    
                    {/* Live Demo Trigger */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all border border-white/10 hover:border-white/20"
                    >
                      <span>Kunjungi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Case Study Trigger Modal */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-brand-gold/10 hover:bg-brand-gold text-brand-gold hover:text-bg-dark font-mono text-xs uppercase tracking-wider rounded-xl transition-colors border border-brand-gold/30 hover:border-brand-gold"
                    >
                      <span>Studi Kasus</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CASE STUDY OVERLAY MODAL */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-bg-dark/80 backdrop-blur-md p-4 sm:p-6 md:p-10">
              
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
                    className="absolute top-4 right-4 p-2.5 bg-bg-dark/80 backdrop-blur-md text-white/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 transition-all focus:outline-none"
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
                      className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white font-mono text-xs uppercase tracking-widest rounded-xl transition-colors border border-white/10 hover:border-white/20 focus:outline-none"
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
    </section>
  );
}
