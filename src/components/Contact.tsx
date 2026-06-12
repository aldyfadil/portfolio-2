import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Phone, Mail, CheckCircle, AlertTriangle, Sparkles, MessageSquareCode } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const directWhatsAppUrl = "https://wa.me/6281234567890?text=Halo%20Aldi%2C%20saya%20tertarik%20untuk%20mengkonsultasikan%20pembuatan%20website%20company%20profile%20/%20landing%20page.";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      setErrorMessage('Harap isi semua kolom yang diperlukan.');
      return;
    }

    setFormState('sending');

    // Meneruskan data formulir langsung ke email aldifadilla883@gmail.com via link mailto otomatis
    const emailTo = 'aldifadilla883@gmail.com';
    const emailSubject = `Draft Kebutuhan Proyek Website - ${formData.name}`;
    const emailBody = `Halo Aldi,%0D%0A%0D%0AAda draf kebutuhan proyek website baru yang dikirimkan via formulir portofolio:%0D%0A%0D%0A` +
      `--------------------------------------------------%0D%0A` +
      `* Nama Lengkap / Perusahaan : ${formData.name}%0D%0A` +
      `* Alamat Email Kontak       : ${formData.email}%0D%0A` +
      `* Kebutuhan / Target Sistem :%0D%0A  ${formData.message.replace(/\s+/g, ' ').replace(/\n/g, '%0D%0A  ')}%0D%0A` +
      `--------------------------------------------------%0D%0A%0D%0A` +
      `Silakan balas email ini atau hubungi kembali kontak klien di atas untuk langkah diskusi awal.`;

    const mailtoUrl = `mailto:${emailTo}?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setFormState('success');
      
      // Buka aplikasi email default pengguna dengan isi draft terisi penuh
      window.location.href = mailtoUrl;

      // Reset data input form
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-bg-dark border-t border-white/5 overflow-hidden">
      
      {/* Visual background matrix */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-brand-gold/5 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-white/[0.01] hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-brand-gold uppercase tracking-[0.25em] block">
            // GERBANG AMAN KLIEN BISNIS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-white leading-tight">
            Mari luncurkan profil web premium Anda.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed max-w-md mx-auto font-sans">
            Punya proyek impian? Isi formulir klien yang aman di bawah ini, atau hubungi saya langsung via WhatsApp untuk konsultasi instan 15 menit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* LEFT PANEL: Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-bg-card border border-white/5 p-8 rounded-3xl space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-brand-gold uppercase tracking-widest block">// HOTLINE LANGSUNG KLIEN</span>
                <h3 className="font-display font-semibold text-lg text-white">Hubungi langsung</h3>
                <p className="text-white/50 text-xs font-sans">Lewati formulir sepenuhnya jika Anda lebih menyukai komunikasi langsung. Saya online setiap hari.</p>
              </div>

              <div className="space-y-4">
                
                {/* Whatsapp direct anchor */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-emerald-500/5 hover:bg-emerald-500/10 border border-emerald-500/15 rounded-2xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/[0.12] flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-white/40 uppercase">WhatsApp Chat</h4>
                      <p className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold tracking-wider">// CHAT_WA</span>
                </a>

                 {/* Email direct anchor */}
                <a
                  href="mailto:aldifadilla883@gmail.com"
                  className="group flex items-center justify-between p-4 bg-yellow-500/5 hover:bg-yellow-500/10 border border-yellow-500/15 rounded-2xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-yellow-500/[0.12] flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-white/40 uppercase">Email Bisnis</h4>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-gold transition-colors">aldifadilla883@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-brand-gold font-bold tracking-wider">// KIRIM_EMAIL</span>
                </a>

              </div>
            </div>

            {/* Indonesia localization note */}
            <div className="p-6 bg-white/[0.01] border border-white/5 rounded-2xl space-y-2">
              <div className="flex items-center space-x-2">
                <MessageSquareCode className="w-4 h-4 text-brand-gold" />
                <h4 className="text-xs font-mono font-bold text-white tracking-wider">SPESIFIKASI LOKALISASI PROYEK</h4>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed font-sans">
                Cakupan wilayah layanan mencakup Makassar, Sidoarjo, Surabaya, dan kontrak pengerjaan jarak jauh (remote) di seluruh Indonesia. Semua pembayaran diproses dengan aman melalui transfer bank standar Indonesia atau QRIS/E-Wallet lokal.
              </p>
            </div>

          </div>

          {/* RIGHT PANEL: Custom Contact Form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-bg-card border border-white/5 p-8 rounded-3xl">
            
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-2 border-b border-white/5 pb-4">
                <span className="font-mono text-[9px] text-yellow-500/80 uppercase tracking-widest block">// FORMULIR PENGUNJUNG TERENKRIPSI</span>
                <h3 className="font-display font-semibold text-lg text-white">Ruang Diskusi Pembuatan Proyek</h3>
                <p className="text-white/50 text-xs font-sans">Berikan kontak bisnis yang benar untuk meminta penawaran instan dan membuat draf rancangan awal.</p>
              </div>

              {/* Success Notification element */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-start space-x-3 text-xs"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold uppercase tracking-wider">Membuka Aplikasi Email Anda...</p>
                      <p className="opacity-80 mt-1">Draf formulir Anda siap dikirimkan langsung ke <strong>aldifadilla883@gmail.com</strong>. Aplikasi email bawaan Anda akan terbuka otomatis.</p>
                    </div>
                  </motion.div>
                )}

                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl flex items-start space-x-3 text-xs"
                  >
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold uppercase">Koordinat Tidak Lengkap</p>
                      <p className="opacity-80 mt-1">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Input name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-white/70">
                  Nama Lengkap / Perwakilan Perusahaan *
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="misal: Pak Adrian (Amanttara Architectural)"
                  className="w-full bg-white/5 text-white/90 text-sm border border-white/10 hover:border-white/20 focus:border-brand-gold rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Form Input Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-white/70">
                  Alamat Email Kontak *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="misal: client@domain.id"
                  className="w-full bg-white/5 text-white/90 text-sm border border-white/10 hover:border-white/20 focus:border-brand-gold rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-white/20"
                />
              </div>

              {/* Form Input Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-white/70">
                  Tujuan Singkat Proyek / Target Kebutuhan Sistem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Jelaskan kebutuhan situs web Anda (misal: Company profile properti, target anggaran Rp6.500.000, tenggat waktu pengerjaan 4 minggu)..."
                  className="w-full bg-white/5 text-white/90 text-sm border border-white/10 hover:border-white/20 focus:border-brand-gold rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-white/20 resize-none"
                />
              </div>

              {/* Action and verification feedback */}
              <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] font-mono text-white/30 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                  <span>Enkripsi TLS Aman Aktif</span>
                </span>

                <button
                  id="send_btn"
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-brand-gold px-8 py-4 text-xs font-bold tracking-widest uppercase text-bg-dark transition-all duration-300 transform hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                >
                  <span className="flex items-center space-x-2">
                    <Send className="w-4 h-4" />
                    <span>{formState === 'sending' ? 'Mengirimkan...' : 'Kirim Formulir'}</span>
                  </span>
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
