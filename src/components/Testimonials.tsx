import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Auto slide interval every 6 seconds
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const currentTestimonial = TESTIMONIALS_DATA[activeIndex];

  return (
    <section id="testimonials" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Decorative organic shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto space-y-12 relative z-20 text-center">
        
        {/* Header Title */}
        <div className="space-y-4">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block">
            CATATAN REKOMENDASI KLIEN
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Didukung oleh mitra korporat & para pendiri usaha.
          </h2>
        </div>

        {/* Glassmorphic Sliding Card container */}
        <div className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, scale: 0.98, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl text-left space-y-6 md:space-y-8 shadow-2xl relative"
            >
              
              {/* Giant decorative quotation mark */}
              <div className="absolute top-4 right-6 text-white/5 pointer-events-none select-none">
                <Quote className="w-24 h-24 stroke-[1px]" />
              </div>

              {/* Client rating star metrics */}
              <div className="flex items-center space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>

              {/* Quotation text */}
              <p className="text-white/90 text-sm md:text-lg leading-relaxed font-sans italic relative z-10">
                "{currentTestimonial.content}"
              </p>

              {/* User Bio Information */}
              <div className="flex items-center space-x-4 pt-4 border-t border-white/5">
                <img
                  alt={currentTestimonial.name}
                  src={currentTestimonial.avatar}
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                />
                <div className="space-y-0.5">
                  <h4 className="text-white font-bold text-sm tracking-wide">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-xs text-white/50 font-mono uppercase tracking-wider">
                    {currentTestimonial.role} — <span className="text-brand-gold">{currentTestimonial.company}</span>
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel controls & Paginations */}
        <div className="flex items-center justify-center space-x-8 pt-4">
          
          <button
            onClick={handlePrev}
            className="p-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 transition-all focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {TESTIMONIALS_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none ${
                  activeIndex === index ? 'w-6 bg-brand-gold' : 'bg-white/20 hover:bg-white/45'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-full border border-white/10 hover:border-white/20 transition-all focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
