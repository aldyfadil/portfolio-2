import { Project, Service, Testimonial, ProcessStep } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'amanttara',
    title: 'amanttara.co.id',
    category: 'Profil Perusahaan',
    description: 'Showroom virtual grup arsitektur dan konstruksi vila kelas atas yang menampilkan tata letak minimalis modern dengan sistem transisi media premium.',
    fullStory: 'Amanttara adalah konsultan arsitektur dan konstruksi bangunan mewah. Mereka membutuhkan katalog digital indah yang dapat langsung mengomunikasikan kemewahan, presisi, dan eksekusi yang andal kepada calon klien bernilai tinggi.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    role: 'Pimpinan Pengembang & Desainer UI',
    duration: '4 Minggu',
    url: 'https://amanttara.co.id',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    scope: ['Desain Editorial Minimalis', 'Galeri Arsitektur Interaktif', 'Sistem Pemuatan Media Responsif', 'Audit Kinerja & SEO Kustom'],
    challenge: 'Katalog arsitektur menyertakan foto beresolusi sangat tinggi yang awalnya menyebabkan pergeseran tata letak yang parah dan waktu pemuatan melebihi 6 detik pada perangkat seluler kelas atas.',
    solution: 'Dioptimalkan melalui saluran format gambar kustom, blur hashing progresif, dan animasi seret Framer Motion kustom untuk menggeser gambar, menurunkan waktu pemuatan menjadi 1,2 detik.'
  },
  {
    id: 'tridayamanunggal',
    title: 'tridayamanunggalsejahtera.com',
    category: 'Platform Korporat',
    description: 'Situs web perusahaan struktural berorientasi logistik berat untuk pemasok jasa konstruksi industri dan logistik yang berbasis di Indonesia.',
    fullStory: 'PT Tridaya Manunggal Sejahtera melayani perusahaan pertambangan dan konstruksi besar, serta membutuhkan kehadiran yang sangat kuat, fungsional, dan dioptimalkan untuk pencarian guna memenuhi audit penyaringan vendor internasional.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Lucide Icons'],
    role: 'Pengembang Full-stack',
    duration: '5 Minggu',
    url: 'https://tridayamanunggalsejahtera.com',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    scope: ['Penstrukturan Konten Jasa Teknis', 'Keamanan Infrastruktur Perusahaan', 'Formulir Generator Kutipan Otomatis', 'Pembuatan Lembar Data PDF Interaktif'],
    challenge: 'Menerjemahkan alur kerja logistik yang kompleks dan spesifikasi mesin berat menjadi format web yang mudah dipahami yang dapat dipahami oleh staf pengadaan korporat dalam waktu 10 detik.',
    solution: 'Merancang tata letak inventaris peralatan yang sangat terorganisir dengan spesifikasi langsung, unduhan brosur PDF instan, dan saluran WhatsApp pengadaan langsung.'
  },
  {
    id: 'kantamasolusi',
    title: 'kantamasolusi.com',
    category: 'SaaS / Portal Agensi',
    description: 'Situs web konsultasi manajemen bisnis yang bersih, menampilkan fitur pemesanan layanan konsultasi digital, model harga dinamis, dan modul penjadwalan tim.',
    fullStory: 'Kantama Solusi Indonesia adalah konsultan pelatihan profesional dan manajemen bisnis yang inovatif. Mereka ingin beralih dari halaman pendaratan tradisional yang padat teks dan menawarkan portal konsultasi modern.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'State Hooks'],
    role: 'Desainer UI & Arsitek Web',
    duration: '3 Minggu',
    url: 'https://kantamasolusi.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    scope: ['Integrasi Strategi Merek', 'Selektor Modul Pelatihan Interaktif', 'Dasbor Hubungan Konsultan Langsung', 'Aset Web yang Dioptimalkan Kecepatannya'],
    challenge: 'Menarik perhatian para eksekutif perusahaan memerlukan kedewasaan korporat tanpa terlihat tradisional. Bahasa visual membutuhkan keseimbangan yang baik antara interaktivitas yang menyenangkan dan otoritas industri.',
    solution: 'Merumuskan sistem kisi slate-navy yang elegan dengan mikro-interaksi yang bersih, keanggunan mode gelap, dan integrasi widget penjadwalan sisi klien.'
  },
  {
    id: 'karanganbunga',
    title: 'karanganbungamks.com',
    category: 'E-Commerce / Katalog',
    description: 'Galeri toko bunga lokal bergaya e-commerce dan pusat pemesanan di Makassar, memfasilitasi alur checkout WhatsApp yang mulus dan pembaruan karangan bunga musiman.',
    fullStory: 'Seorang perajin bunga lokal meminta etalase toko yang ringan. Karena pelanggan Indonesia sangat menyukai komunikasi obrolan instan, keranjang belanja database standar diganti dengan generator checkout WhatsApp respon cepat.',
    techStack: ['React', 'Tailwind CSS', 'WhatsApp Api Integration'],
    role: 'Pengembang Web Tunggal',
    duration: '2 Minggu',
    url: 'https://karanganbungamks.com',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
    scope: ['Presentasi Katalog Artisanal', 'Kompiler WhatsApp Faktur Otomatis', 'Pencarian Pintar Kategori Cepat', 'Arsitektur Ringan Tanpa Database'],
    challenge: 'Alur e-commerce standar dengan dinding daftar/masuk menyebabkan 45% pengabaian keranjang belanja. Pelanggan hanya ingin mengirim foto produk dan memesan langsung ke alamat pengiriman mereka.',
    solution: 'Membangun checkout langsung 2 langkah di mana pengisian rincian pengiriman secara otomatis menyusun faktur artisanal dan mentransfernya dengan aman ke WhatsApp toko bunga.'
  },
  {
    id: 'bioskop-online',
    title: 'pemesanan-bioskop-online.vercel.app',
    category: 'Aplikasi Web',
    description: 'Aplikasi web responsif kaya fitur untuk agen pemesanan kursi bioskop. Dibangun meniru jaringan pemesanan tiket bioskop utama dengan status transaksi penyimpanan lokal (local storage).',
    fullStory: 'Etalase aplikasi digital yang menunjukkan pola status komponen dengan fidelitas tinggi. Menyimulasikan kisi kursi teater waktu nyata, variabel pemilihan suara, checkout makanan ringan kustom, dan ringkasan faktur dinamis.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Local Storage Persistence'],
    role: 'Pimpinan Rekayasa UI',
    duration: '3 Minggu',
    url: 'https://pemesanan-bioskop-online.vercel.app/',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    scope: ['Kisi Koordinat Kursi SVG Dinamis', 'Hook Selektor Tiket Interaktif', 'Pemicu Suasana Sinematik Halus', 'Voucher Faktur Lokal yang Disimulasikan'],
    challenge: 'Menangani pemilihan kisi yang rumit dengan tingkatan tiket yang bervariasi dalam kerangka kerja yang responsif secara efisien agar pengguna seluler dapat mengoordinasikan pemilihan kursi tanpa cubit-zoom.',
    solution: 'Merancang hamparan kanvas zoom-dan-geser interaktif yang digabungkan dengan simpul sentuh responsif sederhana yang memberikan sensasi taktil yang jelas.'
  },
  {
    id: 'cafe-website',
    title: 'cafe-website-481p.vercel.app',
    category: 'Situs Pemasaran Kreatif',
    description: 'Portal kopi barista dan restoran modern yang sangat interaktif, menampilkan animasi biji kopi organik, navigasi menu responsif, dan integrasi pesanan langsung.',
    fullStory: 'Konsep visual modern yang dikembangkan untuk rantai kedai kopi lokal. Dirancang dengan estetika sensoris yang kaya, termasuk ilustrasi mikro yang bercahaya, gulir horizontal paralaks, dan menu kustom yang dilokalkan.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Micro-Interactions'],
    role: 'Desainer Web Kreatif',
    duration: '3 Minggu',
    url: 'https://cafe-website-481p.vercel.app/',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    scope: ['Tema Paralaks Aroma Kopi Barista', 'Komidi Putar Kartu Responsif dengan Geser', 'Simulasi Pemesanan Virtual', 'SVG Kustom untuk Tahap Penuangan Kopi'],
    challenge: 'Menu kafe statis terasa dingin dan kurang menarik, kehilangan kehangatan taktil dan aroma ruang seduh barista fisik.',
    solution: 'Mengintegrasikan partikel aroma dinamis yang dipicu gulir, serat kayu bertekstur, tinggi tata letak tampilan yang elegan, dan tombol panggilan aksi langsung untuk cabang terdekat.'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'starter',
    title: '🚀 Starter',
    priceRange: 'Rp 1.650.000',
    description: 'Cocok untuk UMKM, personal brand, freelancer, dan bisnis yang baru mulai online.',
    deliverables: [
      'Hingga 3 Halaman Website',
      'Desain Modern & Profesional',
      'Tampilan Responsif (Desktop, Tablet & Mobile)',
      'Integrasi WhatsApp Langsung',
      'SEO Dasar',
      'Domain .web.id / .my.id Gratis 1 Tahun',
      'Revisi Hingga 2 Kali',
      'Panduan Penggunaan Website'
    ]
  },
  {
    id: 'business',
    title: '⭐ Business',
    priceRange: 'Rp 3.500.000',
    description: 'Cocok untuk kontraktor, perusahaan, properti, travel, klinik, dan bisnis yang ingin tampil lebih profesional.',
    popular: true,
    extraTitle: 'Semua Fitur Starter +',
    deliverables: [
      'Hingga 8 Halaman Website',
      'Desain Custom Sesuai Branding',
      'SEO Lanjutan (Open Graph & Sitemap Dinamis)',
      'Domain .com / .web.id Gratis 1 Tahun',
      'Hosting Premium Gratis 1 Tahun',
      'Revisi Hingga 5 Kali',
      'Optimasi Performa Web (Google Lighthouse 90+)',
      'Hosting Server Premium & Keamanan Lanjutan (SSL, Rate Limiting, & DDoS protection)',
      'Custom Ilustrasi & Animasi',
      'Garansi Dukungan 1 Bulan Setelah Peluncuran',
      'SSL Grade A'
    ]
  },
  {
    id: 'professional',
    title: '💎 Professional',
    priceRange: 'Rp 5.990.000',
    description: 'Untuk perusahaan yang membutuhkan website premium dengan fitur yang lebih lengkap dan siap berkembang.',
    extraTitle: 'Semua Fitur Business +',
    deliverables: [
      'Halaman Tanpa Batas',
      'Revisi Tanpa Batas Selama Masa Pengerjaan',
      'Tampilan Responsif di Tablet dan Smartphone',
      'SEO Lanjutan (Open Graph & Sitemap Dinamis)',
      'Integrasi WhatsApp atau Email',
      'Dokumentasi Panduan Penggunaan',
      'Gratis Domain .com/.id/.co.id + Server (1 Tahun)',
      'Garansi Dukungan Prioritas 3 Bulan',
      'Custom Ilustrasi, Aset 3D & Animasi Lanjutan',
      'CMS Lanjutan dengan Role & Permission',
      'Marketing Analytics (GA4 + GTM + Meta Pixel)',
      'Optimasi Performa Web (Google Lighthouse 90+)',
      'Hosting Server Premium & Keamanan Lanjutan (SSL, Rate Limiting, & DDoS protection)',
      'SSL Keamanan Grade A',
      'Sesi Diskusi & Audit Brand di Awal Proyek',
      'Custom Modul Sesuai Kebutuhan Bisnis',
      'Booking/Reservasi/Katalog Produk Dinamis',
      'Integrasi Email Automation & CRM',
      'Multi-Bahasa (ID/EN) Siap Pakai',
      'Dokumentasi Design System'
    ]
  },
  {
    id: 'custom-solution',
    title: '⚙️ Custom Solution',
    priceRange: 'Mulai Rp 8.000.000',
    description: 'Untuk kebutuhan khusus dan sistem yang lebih kompleks.',
    extraTitle: 'Contoh Proyek:',
    deliverables: [
      'Booking & Reservasi Online',
      'Dashboard Admin',
      'Sistem Membership',
      'Marketplace',
      'CRM Internal',
      'ERP Sederhana',
      'Sistem Manajemen Data',
      'Integrasi API Pihak Ketiga',
      'Payment Gateway',
      'SaaS Platform'
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Adrian Amanttara',
    role: 'Direktur Pengelola & Rekanan',
    company: 'Amanttara Architectural Group',
    content: 'Kami mendekati beberapa studio, tetapi portofolio dan komitmen mutlak terhadap performa murni yang ditulis manual langsung menonjol. Situs web yang ia bangun dimuat kurang dari 2 detik tetapi terlihat seperti karya seni sinematik. Klien-klien bernilai tinggi kami sering memuji presentasi digital kami.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Ir. Farida Kusuma',
    role: 'Pimpinan Komunikasi Korporat',
    company: 'PT Tridaya Manunggal Sejahtera',
    content: 'Inventarisasi mesin kami yang rumit berantakan di situs lama kami. Ia mengatur semuanya menjadi tabel elegan yang dapat dicari dengan lembar kerja PDF yang dapat diunduh langsung oleh staf pengadaan kami. Audit keamanan berjalan lancar sejak saat itu.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Rezza Akbar',
    role: 'Pendiri & Kepala Barista',
    company: 'Brew & Bloom Cafe Makassar',
    content: 'Saya membutuhkan halaman pendaratan yang dapat menceritakan kisah kopi artisanal kami tetapi juga mengarahkan orang langsung ke daftar pemesanan WhatsApp kami. Desainnya sangat cocok dengan estetika kayu dan logam dari cabang fisik kami tanpa cela. Ini bukan hanya CSS mewah, pemesanan meja kami tumbuh 35% di bulan pertama!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: '01',
    title: 'Konsultasi & Analisis Kebutuhan',
    subtitle: '',
    description: 'Kami memahami bisnis, target pelanggan, dan tujuan website Anda sebelum memulai pengerjaan.',
    timeline: '',
    deliverables: ['Diskusi kebutuhan bisnis', 'Analisis target pelanggan', 'Rencana pengerjaan proyek'],
    color: 'from-amber-400 to-amber-600'
  },
  {
    phase: '02',
    title: 'Desain Tampilan Website',
    subtitle: '',
    description: 'Membuat desain modern yang profesional, mudah digunakan, dan sesuai identitas bisnis Anda.',
    timeline: '',
    deliverables: ['Desain responsif desktop & mobile', 'Struktur halaman yang jelas', 'Tampilan sesuai branding bisnis'],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    phase: '03',
    title: 'Pengembangan Website',
    subtitle: '',
    description: 'Website dibangun dengan teknologi modern yang cepat, aman, dan mudah diakses di semua perangkat.',
    timeline: '',
    deliverables: ['Website cepat dan responsif', 'Optimasi performa', 'Integrasi formulir & WhatsApp'],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    phase: '04',
    title: 'Optimasi SEO Dasar',
    subtitle: '',
    description: 'Website dipersiapkan agar mudah ditemukan oleh Google dan memiliki fondasi SEO yang baik.',
    timeline: '',
    deliverables: ['Meta title & description', 'Sitemap XML', 'Google Search Console setup'],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    phase: '05',
    title: 'Launching & Pendampingan',
    subtitle: '',
    description: 'Setelah website selesai, kami membantu proses publikasi dan memberikan panduan penggunaan.',
    timeline: '',
    deliverables: ['Website online dengan domain sendiri', 'Panduan penggunaan', 'Dukungan setelah website aktif'],
    color: 'from-purple-400 to-purple-600'
  }
];


