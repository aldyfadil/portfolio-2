import { motion } from 'motion/react';
import { 
  Code2, 
  Paintbrush, 
  Braces, 
  Atom, 
  Wind, 
  Server, 
  GitBranch, 
  Github, 
  Cpu, 
  Wrench 
} from 'lucide-react';
import { TECH_ITEMS } from '../data';

export default function TechStack() {
  // Gracefully map matching Lucide icons to avoid generic placeholders
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Html5':
        return <Code2 className="w-6 h-6 text-orange-500" />;
      case 'Css3':
        return <Paintbrush className="w-6 h-6 text-blue-400" />;
      case 'Js':
        return <Braces className="w-6 h-6 text-yellow-400" />;
      case 'React':
        return <Atom className="w-6 h-6 text-cyan-400" />;
      case 'Tailwind':
        return <Wind className="w-6 h-6 text-cyan-300" />;
      case 'Node':
        return <Server className="w-6 h-6 text-emerald-500" />;
      case 'Git':
        return <GitBranch className="w-6 h-6 text-red-500" />;
      case 'Github':
        return <Github className="w-6 h-6 text-white" />;
      default:
        return <Cpu className="w-6 h-6 text-brand-gold" />;
    }
  };

  return (
    <section id="tech-stack" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden grid-overlay">
      
      {/* Handcrafted grids background layout lines */}
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />

      <div className="max-w-5xl mx-auto space-y-16 relative z-20">
        
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block">
            // HARDENGINEERED TECHNOLOGY DECK
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Our optimized technology suite for custom deployments.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto">
            Each component is chosen carefully to maximize user interactions, SEO index readability, and millisecond paint intervals.
          </p>
        </div>

        {/* Tech Grid Display */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {TECH_ITEMS.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-bg-card border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-between text-center space-y-4 hover:border-yellow-500/20 group relative overflow-hidden active:scale-98 transition-all"
            >
              
              {/* Top ambient dot glow depending on category */}
              <div className="absolute top-3 right-3 flex items-center space-x-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${
                  item.category === 'frontend' ? 'bg-cyan-400' :
                  item.category === 'backend' ? 'bg-emerald-400' : 'bg-white/30'
                }`} />
              </div>

              {/* Animated visual icon block */}
              <div className="w-12 h-12 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/[0.04] transition-all duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Core Name & categorization */}
              <div className="space-y-1">
                <h3 className="text-sm font-bold text-white group-hover:text-brand-gold transition-colors">
                  {item.name}
                </h3>
                <span className="font-mono text-[9px] text-white/40 tracking-wider uppercase block">
                  {item.category}
                </span>
              </div>

              <div className="pt-2 border-t border-white/5 w-full">
                <p className="font-mono text-[9px] text-white/50 leading-tight">
                  {item.level}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* System parameters checklist details */}
        <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 max-w-3xl mx-auto text-center md:text-left">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
              <Wrench className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <h4 className="text-xs font-mono text-white tracking-wider uppercase">CLEAN CODE PRINCIPLE SPECIFICATION</h4>
              <p className="text-[11px] text-white/40 font-mono mt-0.5">// No bloated framework runtimes or unrequested library dependencies.</p>
            </div>
          </div>
          <span className="shrink-0 text-[10px] font-mono border border-white/10 rounded-full px-3 py-1 text-white/60 bg-white/5">
            READY_FOR_COMMERCE
          </span>
        </div>

      </div>
    </section>
  );
}
