import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Layers, X, Calendar, User, Eye, Sparkles, ArrowRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

interface ProjectsProps {
  onNavigateToAllProjects?: (projectId?: string) => void;
}

export default function Projects({ onNavigateToAllProjects }: ProjectsProps) {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Only display the 3 main cards on the homepage
  const mainProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-6 relative bg-white border-t border-sky-100 overflow-hidden">
      
      {/* Handcrafted ambient decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-sky-200/20 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto space-y-14 relative z-20">
        
        {/* Header Block */}
        <div className="flex flex-col items-center text-center gap-4 pb-6 border-b border-sky-100 max-w-3xl mx-auto">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-[0.25em] block font-bold">
            PROJEK UNGGULAN
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Portofolio Utama Pilihan
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-sans">
            Menampilkan 3 karya website utama yang telah dikerjakan. Seluruh koleksi proyek dan rincian studi kasus lengkap dapat dilihat pada tombol di bawah.
          </p>
        </div>

        {/* Showcase Grid (3 Main Cards) */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {mainProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group relative bg-white border border-sky-100 rounded-3xl overflow-hidden shadow-sm hover:border-blue-300 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                
                {/* Project Image Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-100 select-none">
                  <img
                    alt={project.title}
                    src={project.image}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle Top Accent bar */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-sky-200 px-3 py-1 rounded-full flex items-center space-x-1.5 z-10 shadow-sm">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-mono text-[9px] tracking-wider text-slate-800 uppercase font-semibold">
                      {project.category}
                    </span>
                  </div>

                  {/* Aesthetic hover overlay spotlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent opacity-30 group-hover:opacity-10 transition-opacity" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {/* Domain title */}
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-display">
                      {project.title}
                    </h3>
                    
                    {/* Tiny excerpt */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology tokens */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-[10px] font-mono text-blue-900 bg-sky-50 border border-sky-100 rounded-full px-2.5 py-0.5 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions buttons footer */}
                  <div className="flex items-center gap-3 pt-4 border-t border-sky-100">
                    {/* Live Demo Trigger */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <span>Kunjungi</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* Case Study Trigger Modal */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs uppercase tracking-wider rounded-xl transition-colors shadow-sm cursor-pointer"
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

        {/* Menu Lihat Lainnya Jelas Berada di Bawah 3 Card */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-4">
          <div className="relative group">
            {/* Ambient glow behind button */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-sky-400 rounded-2xl blur-md opacity-30 group-hover:opacity-60 transition duration-300 pointer-events-none" />
            
            <button
              onClick={() => onNavigateToAllProjects?.()}
              className="relative inline-flex items-center justify-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-mono text-sm font-extrabold uppercase tracking-widest px-10 py-4.5 rounded-2xl transition-all duration-300 shadow-xl shadow-blue-500/20 hover:scale-[1.03] cursor-pointer"
            >
              <span>Lihat Lainnya</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </button>
          </div>

          <p className="text-slate-500 font-mono text-xs tracking-wider">
            Klik untuk melihat katalog lengkap dan dokumentasi seluruh proyek kami
          </p>
        </div>

        {/* CASE STUDY OVERLAY MODAL */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 sm:p-6 md:p-10">
              
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
                className="relative bg-white border border-sky-200 rounded-3xl max-w-4xl w-full max-h-[85vh] overflow-y-auto shadow-2xl z-20 scrollbar-thin text-slate-900"
              >
                
                {/* Header Cover Image */}
                <div className="relative aspect-video max-h-80 w-full overflow-hidden bg-slate-100 select-none">
                  <img
                    alt={activeProject.title}
                    src={activeProject.image}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
                  
                  {/* Close modal controls */}
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 p-2.5 bg-white/90 backdrop-blur-md text-slate-700 hover:text-slate-950 rounded-full border border-sky-200 hover:border-blue-400 transition-all focus:outline-none cursor-pointer shadow-sm"
                    aria-label="Close Case Study"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="font-mono text-xs text-blue-700 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full uppercase tracking-widest leading-none font-bold">
                      {activeProject.category}
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black font-display text-slate-900 tracking-tight mt-3">
                      {activeProject.title}
                    </h3>
                  </div>
                </div>

                {/* Case details grids */}
                <div className="p-6 sm:p-8 space-y-8">
                  
                  {/* Scope & Role Metadata */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-sky-50/60 border border-sky-100 rounded-2xl">
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 uppercase font-medium">
                        <User className="w-3.5 h-3.5 text-blue-600" />
                        <span>PERAN FREELANCE</span>
                      </div>
                      <p className="text-slate-900 text-xs font-semibold">{activeProject.role}</p>
                    </div>
                    <div className="space-y-1">
                      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 uppercase font-medium">
                        <Calendar className="w-3.5 h-3.5 text-blue-600" />
                        <span>DURASI PROYEK</span>
                      </div>
                      <p className="text-slate-900 text-xs font-semibold">{activeProject.duration}</p>
                    </div>
                    <div className="space-y-1 col-span-2">
                      <div className="text-[10px] font-mono text-slate-500 flex items-center gap-1.5 uppercase font-medium">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>SISTEM INTEGRASI</span>
                      </div>
                      <p className="text-slate-900 text-xs font-semibold line-clamp-1">
                        {activeProject.techStack.join(' • ')}
                      </p>
                    </div>
                  </div>

                  {/* Narrative story */}
                  <div className="space-y-3">
                    <h4 className="font-display font-extrabold text-slate-900 text-base md:text-lg uppercase tracking-wide">
                      KISAH KLIEN
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed font-sans">
                      {activeProject.fullStory}
                    </p>
                  </div>

                  {/* Challenge vs Solution layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-5 bg-red-50/80 border border-red-200 rounded-2xl space-y-2">
                      <h5 className="font-mono text-xs text-red-600 font-extrabold uppercase tracking-widest">
                        [ TANTANGAN ]
                      </h5>
                      <p className="text-slate-700 text-xs leading-relaxed">
                        {activeProject.challenge}
                      </p>
                    </div>
                    <div className="p-5 bg-emerald-50/80 border border-emerald-200 rounded-2xl space-y-2">
                      <h5 className="font-mono text-xs text-emerald-700 font-extrabold uppercase tracking-widest">
                        [ SOLUSI ARSITEKTUR ULANG ]
                      </h5>
                      <p className="text-slate-700 text-xs leading-relaxed">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Scope checklist */}
                  <div className="space-y-4">
                    <h4 className="font-display font-extrabold text-slate-900 text-base uppercase tracking-wide">
                      CAKUPAN PROYEK YANG DIKIRIM
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeProject.scope.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-xs text-slate-600">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* External Trigger live link */}
                  <div className="pt-6 border-t border-sky-100 flex flex-col sm:flex-row gap-4">
                    <a
                      href={activeProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-all duration-300 shadow-md shadow-blue-500/20 block text-center"
                    >
                      <span>KUNJUNGI SITUS INTEGRASI</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    
                    <button
                      onClick={() => setActiveProject(null)}
                      className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-xl transition-colors shadow-sm focus:outline-none cursor-pointer"
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
