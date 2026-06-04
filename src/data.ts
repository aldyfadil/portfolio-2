import { Project, Service, Testimonial, ProcessStep, TechItem } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'amanttara',
    title: 'amanttara.co.id',
    category: 'Company Profile',
    description: 'High-end architecture and villa construction group virtual showroom featuring modern minimalist layouts with premium media transition systems.',
    fullStory: 'Amanttara is an architectural and luxury building construction consultant. They required an exquisite digital catalog that would instantly communicate luxury, precision, and reliable execution to prospective high-net-worth clients.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    role: 'Lead Developer & UI Designer',
    duration: '4 Weeks',
    url: 'https://amanttara.co.id',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    scope: ['Minimalist Editorial Design', 'Interactive Architectural Gallery', 'Responsive Media Loading System', 'Custom SEO & Performance Audit'],
    challenge: 'Architectural catalogs include extremely high-resolution photos that initially caused severe layout shift and loading times exceeding 6 seconds on high-end mobile devices.',
    solution: 'Optimized via custom picture format pipelines, progressive blur hashing, and custom Framer Motion drag animations for image swiping, dropping the loading time to 1.2s.'
  },
  {
    id: 'tridayamanunggal',
    title: 'tridayamanunggalsejahtera.com',
    category: 'Corporate Platform',
    description: 'A structural, logistics-heavy enterprise website for an industrial construction and logistics service supplier based in Indonesia.',
    fullStory: 'PT Tridaya Manunggal Sejahtera serves major mining and building outfits and required an extremely robust, functional, and search-optimized presence to handle international vendor screening audits.',
    techStack: ['React', 'Tailwind CSS', 'Node.js', 'Lucide Icons'],
    role: 'Full-stack Developer',
    duration: '5 Weeks',
    url: 'https://tridayamanunggalsejahtera.com',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
    scope: ['Technical Content Structuring', 'Enterprise Infrastructure Security', 'Automated Quote Generator Form', 'Interactive PDF Datasheet Generation'],
    challenge: 'Translating complex logistics workflows and high-weight heavy machinery specs into a web-digestible format that corporate procurement officers can understand within 10 seconds.',
    solution: 'Engineered a highly categorized equipment inventory layout with live specifications, instant PDF flyer downloads, and direct procurement WhatsApp channels.'
  },
  {
    id: 'kantamasolusi',
    title: 'kantamasolusi.com',
    category: 'SaaS / Agency Portal',
    description: 'Clean business management consulting website featuring digital consulting services booking, dynamic pricing models, and team scheduling modules.',
    fullStory: 'Kantama Solusi Indonesia is an innovative professional training and business management consultant. They wanted to move away from text-heavy traditional landing pages and offer a modern consultancy portal.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'State Hooks'],
    role: 'UI Designer & Web Architect',
    duration: '3 Weeks',
    url: 'https://kantamasolusi.com',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    scope: ['Brand Strategy Integration', 'Interactive Training Modules Selector', 'Direct Consultant Connect Dashboard', 'Speed-optimized Web Assets'],
    challenge: 'Attracting enterprise executives require corporate maturity without looking traditional. The visual language needed a fine balance of playful interactivity and industrial authority.',
    solution: 'Formulated an elegant navy-slate grid system loaded with clean micro-interactions, dark mode elegance, and client-side scheduling widget integrations.'
  },
  {
    id: 'karanganbunga',
    title: 'karanganbungamks.com',
    category: 'E-Commerce / Catalog',
    description: 'E-commerce style local florist gallery and ordering hub in Makassar, facilitating seamless WhatsApp checkout flow and seasonal bouquet updates.',
    fullStory: 'A local artisanal florist requested a lightweight shop showcase. Because Indonesian customers overwhelmingly prefer instant chat communication, a full standard database shopping cart was replaced with a quick-response custom WhatsApp checkout builder.',
    techStack: ['React', 'Tailwind CSS', 'WhatsApp Api Integration'],
    role: 'Solo Web Developer',
    duration: '2 Weeks',
    url: 'https://karanganbungamks.com',
    image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&w=1200&q=80',
    scope: ['Artisanal Catalog Presentation', 'Automated Invoice WhatsApp Compiler', 'Quick Category Smart Search', 'Lightweight Database-Free Architecture'],
    challenge: 'A standard standard e-commerce flow with register/login walls was causing 45% cart abandonment. Customers simply wanted to snap a picture and order directly to their delivery address.',
    solution: 'Built a 2-step direct checkout where inputting delivery details automatically compiles an artisanal invoice and transfers it safely to florist WhatsApp.'
  },
  {
    id: 'bioskop-online',
    title: 'pemesanan-bioskop-online.vercel.app',
    category: 'Web Application',
    description: 'Fully responsive rich web app mock seat reserving agent. Built mimicking major movie theater ticketing networks with local-storage transaction state.',
    fullStory: 'A digital application showcase showing high-fidelity component state patterns. Simulates real-time theater grids, sound selection variables, custom snack checkouts, and dynamic invoice summaries.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Local Storage Persistence'],
    role: 'Lead UI Engineer',
    duration: '3 Weeks',
    url: 'https://pemesanan-bioskop-online.vercel.app/',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=80',
    scope: ['Dynamic SVG Seat Coordinate Grid', 'Interactive Ticket Selector Hooks', 'Subtle Cinematic Soundscape Trigger', 'Simulated Local Invoice Voucher'],
    challenge: 'Efficiently handling complex grid selections with varying ticket tiers in a purely responsive framework so mobile users can coordinate seat selections without pinch-zooming.',
    solution: 'Designed an interactive zoom-and-pan canvas overlay block coupled with simple responsive touch nodes that provide clear tactile haptic sensations.'
  },
  {
    id: 'cafe-website',
    title: 'cafe-website-481p.vercel.app',
    category: 'Creative Marketing Site',
    description: 'Hyper-interactive, modern restaurant and barista coffee portal featuring organic grain animations, responsive menu navigation, and direct order integrations.',
    fullStory: 'A modern visual concept developed for local coffee house chains. Designed with rich sensory aesthetics, including glowing micro-illustrations, parallax horizontal scrolls, and localized custom menus.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion', 'Micro-Interactions'],
    role: 'Creative Web Designer',
    duration: '3 Weeks',
    url: 'https://cafe-website-481p.vercel.app/',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
    scope: ['Barista Scent Parallax Theme', 'Responsive Card Carousel with Swipe', 'Virtual Ordering Simulation', 'Custom SVGs for Coffee Pour Stages'],
    challenge: 'Static cafe menus feel detached and unengaging, missing the tactile warmth and smells of a physical barista brew room.',
    solution: 'Integrated dynamic scroll-triggered aroma particles, textured wood grains, elegant display layout heights, and direct call-to-action buttons for nearby branches.'
  }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'company-profile',
    title: 'Company Profile Website',
    description: 'Establish ultimate prestige and corporate authority. Best suited for real estate builders, industrial suppliers, consultants, and premium service firms.',
    priceRange: 'Rp 4,500,000 - Rp 7,500,000',
    deliverables: ['Custom Designer Layout', 'High Performance Audit (95+ score)', 'Dynamic Portfolio Management', 'Interactive Query Forms'],
    features: ['Direct Owner Sync Consultation', 'Fully Responsive UI', '100% Handcoded (No slow WordPress themes)', '1-Year Maintenance Guarantee']
  },
  {
    id: 'landing-page',
    title: 'High-Converting Landing Page',
    description: 'Precision engineered to turn paid traffic into active clients. Optimized for marketing funnels, product launches, event registration, and digital validation.',
    priceRange: 'Rp 3,000,000 - Rp 4,500,000',
    deliverables: ['Psychological Copy Integration', 'A/B Test Structured Grid', 'Lightweight 1-Second Speed Launch', 'Direct CRM and Leads Push'],
    features: ['Custom Visual Assets', 'Micro-Interactions', 'Webhook Leads Tracker', 'SEO Search Engine Crawler Indexing']
  },
  {
    id: 'ecommerce',
    title: 'Eco-System E-Commerce',
    description: 'Custom retail experiences prioritizing swift shopping checkouts. Say goodbye to heavy standard commerce templates and welcome lightning-fast checkouts.',
    priceRange: 'Rp 6,500,000 - Rp 10,000,000',
    deliverables: ['Tailored Catalog Showcase', 'Seamless Cart Engine & WhatsApp Integration', 'Automated PDF Business Receipts', 'Multi-payment Merchant Displays'],
    features: ['No Monthly Subscription Bills', 'Secure Client Payments Flow', 'Intuitive Shop Inventory Panel', 'Disaster Safe Daily Backups']
  },
  {
    id: 'custom-web-app',
    title: 'Custom Web Application',
    description: 'Solve complex corporate issues with tailormade utility platforms. Ideal for reservation platforms, member vaults, and localized cloud dashboards.',
    priceRange: 'Rp 8,000,000 - Rp 15,000,000+',
    deliverables: ['Advanced Interactive Frontends', 'Secure Authorization Controls', 'Robust Client-Server State Engines', 'Rest API Hook integration'],
    features: ['Clean Modular Codebase', 'Complete Database System Config', 'State Synchronization Loops', 'High scale cloud infrastructure plan']
  },
  {
    id: 'maintenance',
    title: 'Website VIP Maintenance',
    description: 'Peace of mind knowing your digital machine is running perfectly 24/7. Keep your business platform fast, updated, and invulnerable to external cyber attacks.',
    priceRange: 'Rp 500,000 - Rp 1,500,000 / month',
    deliverables: ['Bi-Weekly Performance Audits', 'Immediate Node / Library Patch Updates', 'Regular Design Alignment Tweaks', 'Daily Multi-Region Cold Storage Backup'],
    features: ['Priority 4-Hour Support SLA', 'Direct Developer Call Hotline', 'Monthly Traffic Analysis Reports', 'Emergency Patch Fix Protection']
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Adrian Amanttara',
    role: 'Managing Director & Partner',
    company: 'Amanttara Architectural Group',
    content: 'We approached several studios, but the portfolio and absolute commitment to pure, hand-coded performance stood out immediately. The website he built loaded in less than 2 seconds but looks like a cinematic artwork. Our high-net-worth clients frequently commend our digital presentation.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: '2',
    name: 'Ir. Farida Kusuma',
    role: 'Corporate Communications Lead',
    company: 'PT Tridaya Manunggal Sejahtera',
    content: 'Our complex machinery inventory was a mess on our old site. He organized everything into an elegant searchable table with PDF worksheets that our procurement officers can download instant details from. Security audits have been smooth since.',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  },
  {
    id: '3',
    name: 'Rezza Akbar',
    role: 'Founder & Head Barista',
    company: 'Brew & Bloom Cafe Makassar',
    content: 'I needed a landing page that could tell our artisanal coffee coffee story but also direct people directly to our WhatsApp booking list. The design matches the wood and metal aesthetics of our physical branches flawlessly. It is not just fancy CSS, our table bookings grew 35% in month one!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    rating: 5
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    phase: '01',
    title: 'Discovery & Direct Dialogue',
    subtitle: 'Extracting client core truth',
    description: 'We meet via dynamic Google Meet. Rather than ticking standard feature checklists, we dive deep into your commercial target audience, existing client pain points, brand tone, and exact budgetary parameters.',
    timeline: 'Days 1 - 3',
    deliverables: ['Custom Business Briefing Workspace', 'Visual Styleboards Selection', 'Definitive Milestone Work Plan'],
    color: 'from-amber-400 to-amber-600'
  },
  {
    phase: '02',
    title: 'Strategic Architecture & Planning',
    subtitle: 'Structuring the digital system blueprint',
    description: 'Designing the comprehensive user flow. We formulate high-fidelity typography options, state hierarchies, navigation paths, and outline exact client checkout points before laying down a single line of markup.',
    timeline: 'Days 4 - 7',
    deliverables: ['Interactive Wireframe System Map', 'Performance & Loading Speed Blueprint', 'Content and Image Architecture Asset Map'],
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    phase: '03',
    title: 'High-Prestige UI/UX Design',
    subtitle: 'Meticulous vector layout crafting',
    description: 'We ignore generic AI templates and build custom CSS grid mockups in Figma. Every pixel, card rhythm, typography hierarchy and hover state is tailored to establish absolute elite business reputation.',
    timeline: 'Days 8 - 14',
    deliverables: ['Pixel-Perfect High Fidelity Presentation', 'Modular Design System Specification', 'Micro-Interaction Animation Blueprint'],
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    phase: '04',
    title: 'Modern Front-End Development',
    subtitle: 'Clean, lightning-fast React coding',
    description: 'Handcrafting your code in modular, type-safe React paired with optimized Tailwind classes. Fully responsive for all platforms, equipped with progressive asset-loading pipelines.',
    timeline: 'Days 15 - 24',
    deliverables: ['Git Repository access with clean modular hooks', 'Vite-bundled ultra responsive application engine', 'Advanced local storage tracking state systems'],
    color: 'from-indigo-400 to-indigo-600'
  },
  {
    phase: '05',
    title: 'SEO Audit, Launch & Handover',
    subtitle: 'Flawless server deployment & testing',
    description: 'Subjecting the applet to Google Lighthouse tests. Once we score 95+ across all performance metrics, we safely deploy your site to secure setups like Vercel or Cloud Run and supply a screen-recorded tutorial video.',
    timeline: 'Days 25 - 28',
    deliverables: ['Live verified URL and Domain redirection', 'Detailed Google Lighthouse Performance Audit', '10-Minute Custom Client Maintenance Guide Video'],
    color: 'from-purple-400 to-purple-600'
  }
];

export const TECH_ITEMS: TechItem[] = [
  { name: 'HTML5', category: 'frontend', iconName: 'Html5', level: 'Expert / Semantic markup' },
  { name: 'CSS3', category: 'frontend', iconName: 'Css3', level: 'Expert / Custom layouts' },
  { name: 'JavaScript', category: 'frontend', iconName: 'Js', level: 'Expert / ESNext standards' },
  { name: 'React', category: 'frontend', iconName: 'React', level: 'Expert / Hooks & Complex States' },
  { name: 'TypeScript', category: 'frontend', iconName: 'Ts', level: 'Advanced / Fully modular schemas' },
  { name: 'Tailwind CSS', category: 'frontend', iconName: 'Tailwind', level: 'Expert / Fluid sizing grids' },
  { name: 'Node.js', category: 'backend', iconName: 'Node', level: 'Intermediate / Express routing' },
  { name: 'Git', category: 'tools', iconName: 'Git', level: 'Expert / Version branch merges' },
  { name: 'GitHub', category: 'tools', iconName: 'Github', level: 'Expert / Pull requests workflows' },
  { name: 'Figma', category: 'tools', iconName: 'Figma', level: 'Advanced / Aesthetic design prototyping' }
];
