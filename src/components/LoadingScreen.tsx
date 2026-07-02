import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('MEMULAI RUANG KERJA');

  const statements = [
    'MEMULAI RUANG KERJA',
    'MENYELARASKAN PAKET ASET',
    'MENGHITUNG HIPER-KONTRAS VISUAL',
    'KOMPILASI MODUL HOOKS',
    'SISTEM SIAP DIGUNAKAN'
  ];

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 450);
          return 100;
        }
        
        // Random incremental count for human feeling
        const increment = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    // Switch descriptive statements based on completion levels
    if (progress < 25) {
      setCurrentText(statements[0]);
    } else if (progress < 50) {
      setCurrentText(statements[1]);
    } else if (progress < 75) {
      setCurrentText(statements[2]);
    } else if (progress < 95) {
      setCurrentText(statements[3]);
    } else {
      setCurrentText(statements[4]);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 bg-bg-dark z-[9999] flex flex-col items-center justify-center font-display select-none px-6">
      <div className="w-full max-w-lg space-y-8">
        
         {/* Designer Monogram Indicator */}
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white tracking-wider">
              Vynora.id
            </h3>
          </div>
          <div className="text-right">
            <span className="text-3xl font-light text-white tracking-tighter">
              {progress}%
            </span>
          </div>
        </div>

        {/* Cinematic progress bar gauge */}
        <div className="relative h-[2px] w-full bg-white/5 overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut" }}
          />
        </div>

        {/* Technical logs subtext */}
        <div className="flex justify-between items-center text-[10px] text-white/50 tracking-wider pt-2">
          <div className="flex items-center">
            <span className="uppercase text-white">{currentText}</span>
          </div>
        </div>

      </div>
    </div>
  );
}
