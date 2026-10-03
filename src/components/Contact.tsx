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

    fetch("https://formsubmit.co/ajax/aldifadilla883@gmail.com", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        "Nama Pengirim": formData.name,
        "Email Kontak": formData.email,
        "Draft Kebutuhan / Pesan": formData.message,
        "_subject": `Formulir Portfolio Baru: ${formData.name}`,
        "_honey": "", // Honeypot to prevent spam
      })
    })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error("HTTP error " + res.status);
    })
    .then((data) => {
      setFormState('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    })
    .catch((err) => {
      console.error(err);
      setFormState('error');
      setErrorMessage('Gagal mengirimkan data karena kendala jaringan. Silakan hubungi langsung via WhatsApp.');
    });
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-slate-50/50 border-t border-sky-100 overflow-hidden">
      
      {/* Visual background matrix */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-sky-200/20 rounded-full filter blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-12 w-[1px] h-full bg-sky-100 hidden md:block" />
      <div className="absolute top-0 right-12 w-[1px] h-full bg-sky-100 hidden md:block" />

      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-blue-600 uppercase tracking-[0.25em] block font-bold">
            GERBANG AMAN KLIEN BISNIS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-slate-900 leading-tight">
            Mari luncurkan profil web premium Anda.
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto font-sans">
            Punya proyek impian? Isi formulir klien yang aman di bawah ini, atau hubungi saya langsung via WhatsApp untuk konsultasi instan 15 menit.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* LEFT PANEL: Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-sky-100 p-8 rounded-3xl space-y-6 shadow-sm">
              <div className="space-y-2">
                <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block font-bold">HOTLINE LANGSUNG KLIEN</span>
                <h3 className="font-display font-semibold text-lg text-slate-900">Hubungi langsung</h3>
                <p className="text-slate-500 text-xs font-sans">Lewati formulir sepenuhnya jika Anda lebih menyukai komunikasi langsung. Saya online setiap hari.</p>
              </div>

              <div className="space-y-4">
                {/* Whatsapp direct anchor */}
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-4 bg-sky-50/60 hover:bg-sky-100/70 border border-sky-200 rounded-2xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase">WhatsApp Chat</h4>
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">+62 812-3456-7890</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold tracking-wider">CHAT_WA</span>
                </a>

                 {/* Email direct anchor */}
                <a
                  href="mailto:aldifadilla883@gmail.com"
                  className="group flex items-center justify-between p-4 bg-sky-50/60 hover:bg-sky-100/70 border border-sky-200 rounded-2xl transition-all"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-mono text-slate-500 uppercase">Email Bisnis</h4>
                      <p className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">aldifadilla883@gmail.com</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-blue-600 font-bold tracking-wider">KIRIM_EMAIL</span>
                </a>

              </div>
            </div>

            {/* Indonesia localization note */}
            <div className="p-6 bg-white border border-sky-100 rounded-2xl space-y-2 shadow-sm">
              <div className="flex items-center space-x-2">
                <MessageSquareCode className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs font-mono font-bold text-slate-900 tracking-wider">SPESIFIKASI LOKALISASI PROYEK</h4>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed font-sans">
                Cakupan wilayah layanan mencakup Makassar, Sidoarjo, Surabaya, dan kontrak pengerjaan jarak jauh (remote) di seluruh Indonesia. Semua pembayaran diproses dengan aman melalui transfer bank standar Indonesia atau QRIS/E-Wallet lokal.
              </p>
            </div>

          </div>

          {/* RIGHT PANEL: Custom Contact Form */}
          <div className="lg:col-span-12 xl:col-span-7 bg-white border border-sky-100 p-8 rounded-3xl shadow-sm">
            
            <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-2 border-b border-sky-100 pb-4">
                <span className="font-mono text-[9px] text-blue-600 uppercase tracking-widest block font-bold">FORMULIR PENGUNJUNG TERENKRIPSI</span>
                <h3 className="font-display font-semibold text-lg text-slate-900">Ruang Diskusi Pembuatan Proyek</h3>
                <p className="text-slate-500 text-xs font-sans">Berikan kontak bisnis yang benar untuk meminta penawaran instan dan membuat draf rancangan awal.</p>
              </div>

              {/* Success Notification element */}
              <AnimatePresence>
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-blue-50 border border-blue-200 text-blue-900 rounded-xl flex items-start space-x-3 text-xs"
                  >
                    <CheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-blue-600" />
                    <div>
                      <p className="font-bold uppercase tracking-wider">Pesan Berhasil Terkirim!</p>
                      <p className="opacity-90 mt-1">Draf formulir Anda telah dikirimkan langsung ke email <strong>aldifadilla883@gmail.com</strong> secara instan di latar belakang tanpa membuka aplikasi eksternal.</p>
                    </div>
                  </motion.div>
                )}

                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start space-x-3 text-xs"
                  >
                    <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-red-500" />
                    <div>
                      <p className="font-bold uppercase">Koordinat Tidak Lengkap</p>
                      <p className="opacity-80 mt-1">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Input name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
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
                  className="w-full bg-white text-slate-900 text-sm border border-sky-200 hover:border-sky-300 focus:border-blue-600 rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Form Input Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
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
                  className="w-full bg-white text-slate-900 text-sm border border-sky-200 hover:border-sky-300 focus:border-blue-600 rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-slate-400"
                />
              </div>

              {/* Form Input Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold">
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
                  className="w-full bg-white text-slate-900 text-sm border border-sky-200 hover:border-sky-300 focus:border-blue-600 rounded-xl px-4 py-3.5 outline-none transition-colors placeholder:text-slate-400 resize-none"
                />
              </div>

              {/* Action and verification feedback */}
              <div className="pt-2 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Enkripsi TLS Aman Aktif</span>
                </span>

                <button
                  id="send_btn"
                  type="submit"
                  disabled={formState === 'sending'}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-blue-600 hover:bg-blue-700 px-8 py-4 text-xs font-bold tracking-widest uppercase text-white transition-all duration-300 shadow-md shadow-blue-500/20 transform hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                >
                  <span className="flex items-center space-x-2">
                    <Send className="w-4 h-4 text-white" />
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
