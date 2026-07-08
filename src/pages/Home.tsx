import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Drill, Shield, Zap, Globe, Compass, Check } from 'lucide-react';
import Drill3DViewer from '@/components/ui/Drill3DViewer';
import MagneticButton from '@/components/ui/MagneticButton';
import { CATEGORIES } from '@/data/products';

export default function Home() {
  const [activeTab, setActiveTab] = useState('raw');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Background Images
  const heroSlides = [
    {
      img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1920',
      title: 'Built to Break Rocks.',
      accent: 'Made to Last.'
    },
    {
      img: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=1920',
      title: 'Precision Forged Parts.',
      accent: 'Zero Defects.'
    },
    {
      img: 'https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?q=80&w=1920',
      title: 'Global Heavy Duty.',
      accent: 'Mining Experts.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const manufacturingStages = [
    {
      id: 'raw',
      title: 'Steel Selection',
      desc: 'We choose only strong steel bars that can handle heavy impact loads.',
      detail: 'Chemical tests ensure the steel has high quality before forging.'
    },
    {
      id: 'cnc',
      title: 'CNC Machining',
      desc: 'Our advanced CNC machines shape the metal with extreme accuracy.',
      detail: 'Threads are cut carefully to prevent friction and wear under load.'
    },
    {
      id: 'heat',
      title: 'Heat Treatment',
      desc: 'We heat-treat the steel to make the outer surface hard and durable.',
      detail: 'This makes the tool last longer and absorb heavy impacts.'
    },
    {
      id: 'assembly',
      title: 'Careful Assembly',
      desc: 'All cylinders, pistons, and chucks are assembled by hand with tight fits.',
      detail: 'We check clearances to prevent air leaks and maintain high power.'
    },
    {
      id: 'testing',
      title: 'Blow Testing',
      desc: 'Every rock drill is tested under pressure on our test bench.',
      detail: 'We check impact speeds and valve seals before shipping.'
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-brand-charcoal text-white flex items-center">
        {/* Cinematic Backdrop Slider */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroSlides[currentSlide].img})` }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent z-10" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-red/10 blur-3xl pointer-events-none z-10" />
        </div>

        {/* Content */}
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 w-full z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <span className="font-heading text-[10px] font-bold tracking-widest uppercase text-white/90">
                Pioneering Drilling Tech
              </span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight leading-tight select-text">
              {heroSlides[currentSlide].title}
              <br />
              <span className="text-brand-red">{heroSlides[currentSlide].accent}</span>
            </h1>

            <p className="font-sans text-lg text-white/70 max-w-xl leading-relaxed">
              High-performance drilling machines built for mining, construction, and water well operations worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton>
                <Link
                  to="/products"
                  className="px-8 py-4 bg-brand-red hover:bg-brand-crimson text-white font-heading text-xs font-semibold uppercase tracking-widest rounded-full flex items-center gap-2 group transition-all duration-300 shadow-lg shadow-brand-red/20"
                >
                  Explore Products
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              
              <Link
                to="/contact"
                className="px-8 py-4 border border-white/30 hover:border-white/95 text-white font-heading text-xs font-semibold uppercase tracking-widest rounded-full transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          {/* Floating Statistics on Hero */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-4 hidden lg:grid">
            {[
              { num: '35+', label: 'Countries Supplied' },
              { num: '450+', label: 'Active Mine Sites' },
              { num: 'High Precision', label: 'CNC Engineering Spec' },
              { num: '99.8%', label: 'Quality Acceptance' }
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex flex-col justify-end min-h-[140px] hover:bg-white/10 transition-colors"
              >
                <span className="font-mono text-2xl font-bold text-white tracking-tight">
                  {stat.num}
                </span>
                <span className="font-sans text-[11px] font-medium text-white/50 uppercase tracking-wider mt-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-6 md:left-12 flex items-center gap-3 pointer-events-none select-none z-20">
          <span className="w-1.5 h-12 bg-white/20 rounded-full relative overflow-hidden">
            <span className="absolute top-0 left-0 w-full h-1/2 bg-brand-red rounded-full animate-bounce" />
          </span>
          <span className="font-heading text-[9px] font-bold tracking-widest text-white/50 uppercase">
            Scroll to Explore
          </span>
        </div>
      </section>

      {/* 2. COMPANY OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Strength
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              We design machines that drill through hard rocks easily.
            </h2>
            <p className="font-sans text-base text-brand-graphite leading-relaxed">
              PSR manufactures durable, global-standard drilling systems. From DTH hammers to heavy crawler rigs, our equipment works reliably in tough mines and quarries across Asia, Africa, and South America.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-brand-charcoal uppercase tracking-wider">ISO Certified</h4>
                  <p className="font-sans text-xs text-brand-graphite mt-1">Our factory follows strict global quality checks.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-brand-red/10 flex items-center justify-center text-brand-red shrink-0">
                  <Zap size={20} />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-bold text-brand-charcoal uppercase tracking-wider">Efficient Design</h4>
                  <p className="font-sans text-xs text-brand-graphite mt-1">Designed to use less air and cut down fuel costs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-brand-lightgray group shadow-2xl">
            <img
              src="/images/products/factory_plant.png"
              alt="PSR Mining Operations"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white space-y-1">
              <span className="font-mono text-2xl font-bold">12,000+ sqm</span>
              <p className="font-heading text-[10px] uppercase font-bold tracking-widest text-white/70">
                Drill Production Plant
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CATEGORIES */}
      <section className="py-24 bg-brand-softwhite border-y border-brand-bordergray">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
                Drill Catalog
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
                Our Drilling Equipment
              </h2>
            </div>
            <Link
              to="/products"
              className="font-heading text-xs font-semibold uppercase tracking-widest text-brand-red flex items-center gap-2 hover:text-brand-crimson"
            >
              View Full Catalog <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.slice(0, 6).map((cat) => (
              <Link
                key={cat.slug}
                to={`/products?category=${cat.slug}`}
                className="group p-8 bg-white border border-brand-bordergray rounded-2xl hover:border-brand-red transition-all duration-300 hover:-translate-y-1 shadow-sm flex flex-col justify-between min-h-[220px]"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-lightgray flex items-center justify-center text-brand-charcoal group-hover:bg-brand-red group-hover:text-white transition-colors">
                    <Drill size={22} className="rotate-45" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-charcoal group-hover:text-brand-red transition-colors">
                    {cat.name}
                  </h3>
                  <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-heading font-bold uppercase tracking-widest text-brand-graphite/60 group-hover:text-brand-red pt-4">
                  Explore Models <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT INNOVATION & 3D VIEWER */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Interactive 3D Model
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight leading-tight">
              Virtual Assembly Lab
            </h2>
            <p className="font-sans text-sm text-brand-graphite leading-relaxed">
              Explore the detailed design of our Pneumatic Rock Drill. Rotate the 3D model to inspect the iron housing, control valves, side handles, and the air inlet connection. We test every design to ensure optimal power transfer.
            </p>
            <div className="space-y-4 pt-4">
              <div className="p-4 bg-brand-lightgray rounded-xl flex gap-3 border border-brand-bordergray/60">
                <Check size={18} className="text-brand-red shrink-0" />
                <div>
                  <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">High Power Transfer</h5>
                  <p className="font-sans text-[11px] text-brand-graphite mt-0.5">Piston weight is matched to maximize hammer impacts.</p>
                </div>
              </div>
              <div className="p-4 bg-brand-lightgray rounded-xl flex gap-3 border border-brand-bordergray/60">
                <Check size={18} className="text-brand-red shrink-0" />
                <div>
                  <h5 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">Tungsten Carbide Bits</h5>
                  <p className="font-sans text-[11px] text-brand-graphite mt-0.5">Hard button bit inserts ensure long-lasting wear defense.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 h-[320px] sm:h-[450px] lg:h-[550px] relative border border-brand-bordergray rounded-2xl bg-brand-softwhite">
            <Drill3DViewer />
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING STEPS */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Drill Forging
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Timeline of Precision Forging
            </h2>
            <p className="font-sans text-sm text-white/60">
              See how we select high-grade steel, machine it, and harden the parts to build our robust rock drills.
            </p>
          </div>

          {/* Stepper Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-2.5">
              {manufacturingStages.map((stage, index) => {
                const isActive = activeTab === stage.id;
                return (
                  <button
                    key={stage.id}
                    onClick={() => setActiveTab(stage.id)}
                    className={`p-5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between ${
                      isActive
                        ? 'bg-brand-red border-brand-red text-white shadow-lg'
                        : 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold opacity-60">0{index + 1}</span>
                      <span className="font-heading text-xs font-bold uppercase tracking-wider">{stage.title}</span>
                    </div>
                    <ArrowRight size={14} className={`transform transition-transform ${isActive ? 'rotate-90 md:rotate-0' : ''}`} />
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8 p-8 md:p-12 bg-white/5 border border-white/10 rounded-2xl min-h-[300px] flex flex-col justify-between">
              {manufacturingStages.map((stage) => {
                if (stage.id !== activeTab) return null;
                return (
                  <div key={stage.id} className="space-y-6 animate-fade-in">
                    <span className="font-heading text-[10px] font-bold uppercase tracking-widest text-brand-red px-2 py-1 rounded bg-brand-red/10 border border-brand-red/20 inline-block">
                      Production Phase
                    </span>
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {stage.title}
                    </h3>
                    <p className="font-sans text-base text-white/80 leading-relaxed max-w-xl">
                      {stage.desc}
                    </p>
                    <div className="p-4 rounded-xl bg-white/5 border-l-4 border-brand-red font-sans text-xs text-white/60 leading-relaxed italic">
                      {stage.detail}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTORS WE SERVE */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Sectors Served
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-brand-charcoal tracking-tight">
              Commanding Global Industries
            </h2>
            <p className="font-sans text-sm text-brand-graphite">
              PSR provides high-performance machinery for key construction, water well, and mining operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Infrastructure & Construction',
                img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600',
                desc: 'Drills for anchor holes, tunnels, and highways.'
              },
              {
                title: 'Open-Cast Mining',
                img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600',
                desc: 'Heavy DTH crawler platforms for open-pit mines.'
              },
              {
                title: 'Water Well Drilling',
                img: 'https://images.unsplash.com/photo-1535813547-99c456a41d4a?q=80&w=600',
                desc: 'Truck rigs to drill deep water wells up to 350 meters.'
              },
              {
                title: 'Hard Rock Quarrying',
                img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=600',
                desc: 'High-speed DTH hammers to break granite and basalt.'
              }
            ].map((ind, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] bg-brand-charcoal shadow-md flex flex-col justify-end p-6 border border-brand-bordergray/20 hover:border-brand-red transition-all duration-500"
              >
                <div className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-30 transition-all duration-700" style={{ backgroundImage: `url(${ind.img})` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/50 to-transparent z-10" />
                
                <div className="relative z-20 space-y-2">
                  <h3 className="font-heading text-base font-bold text-white uppercase tracking-wider">
                    {ind.title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-[80px] transition-all duration-500 overflow-hidden">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER TESTIMONIALS */}
      <section className="py-24 bg-brand-softwhite border-t border-brand-bordergray">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Testimonials
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Trusted by Mining Directors
            </h2>
            <p className="font-sans text-sm text-brand-graphite">
              See what our customers say about using PSR rock drills in tough quarry environments.
            </p>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                quote: "We switched to PSR Gold-Series 6\" Hammers. Our drilling speed increased by 18%, and the sleeves lasted much longer than other brands.",
                author: "M. Radhakrishnan",
                role: "Operations Director, SRK Aggregates"
              },
              {
                quote: "PSR crawler drills are very reliable on muddy grounds. The automatic controls saved our workers a lot of heavy lifting.",
                author: "Federico Martinez",
                role: "Senior Manager, GoldCorp Chile"
              }
            ].map((test, i) => (
              <div key={i} className="p-8 bg-white border border-brand-bordergray rounded-2xl flex flex-col justify-between shadow-sm">
                <p className="font-sans text-sm text-brand-graphite italic leading-relaxed">
                  "{test.quote}"
                </p>
                <div className="mt-6 pt-4 border-t border-brand-lightgray flex flex-col">
                  <span className="font-heading text-xs font-bold text-brand-charcoal uppercase tracking-wider">{test.author}</span>
                  <span className="font-sans text-[11px] text-brand-graphite/60 mt-0.5">{test.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GLOBAL FOOTPRINT */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Global Sales
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold tracking-tight">
              Supplying Across 5 Continents
            </h2>
            <p className="font-sans text-sm text-white/60 leading-relaxed">
              We ship hammers, bits, and rigs quickly from our hubs in India, Chile, South Africa, and Dubai directly to your site.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 font-heading text-xs font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Globe className="text-brand-red" size={16} />
                <span>Asia-Pacific Network</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-brand-red" size={16} />
                <span>African Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-brand-red" size={16} />
                <span>Latin America</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="text-brand-red" size={16} />
                <span>Middle East Centers</span>
              </div>
            </div>
          </div>

          {/* Map Mock */}
          <div className="lg:col-span-7 p-6 border border-white/10 rounded-2xl bg-white/5 relative aspect-video flex items-center justify-center">
            <svg viewBox="0 0 1000 500" className="w-full h-full stroke-current text-white/10 opacity-70 fill-none">
              <path d="M150 150 Q 250 100 350 150 T 450 150 T 550 100 T 650 150" strokeWidth="1" strokeDasharray="3,3" />
              <path d="M100 350 Q 200 300 350 420 T 500 380 T 650 400" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="200" cy="180" r="4" className="fill-brand-red" />
              <circle cx="350" cy="350" r="4" className="fill-brand-red animate-ping" />
              <circle cx="350" cy="350" r="4" className="fill-brand-red" />
              <circle cx="520" cy="180" r="4" className="fill-brand-red" />
              <circle cx="620" cy="320" r="4" className="fill-brand-red animate-ping" />
              <circle cx="620" cy="320" r="4" className="fill-brand-red" />
              <circle cx="720" cy="220" r="6" className="fill-brand-red animate-pulse" />
              <circle cx="720" cy="220" r="10" stroke="rgba(200, 16, 46, 0.4)" strokeWidth="1" />
              <circle cx="850" cy="350" r="4" className="fill-brand-red" />
            </svg>
            <div className="absolute bottom-4 left-6 flex items-center gap-1.5 text-[9px] font-heading font-bold uppercase tracking-widest text-white/40">
              <Compass size={12} />
              <span>Direct shipping active worldwide</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONTACT CTA SECTION */}
      <section className="relative py-24 bg-brand-red overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-crimson/50 blur-3xl pointer-events-none rounded-full" />
        
        <div className="relative max-w-4xl mx-auto px-6 text-center space-y-8 z-10">
          <h2 className="font-display text-4xl md:text-6xl font-black text-white tracking-tight leading-tight">
            Ready to Upgrade Your Drilling?
          </h2>
          <p className="font-sans text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team to configure your rigs, request a quote, or ask about spare parts.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <MagneticButton>
              <Link
                to="/quote"
                className="px-8 py-4 bg-brand-charcoal hover:bg-black text-white font-heading text-xs font-semibold uppercase tracking-widest rounded-full flex items-center gap-2 group transition-colors shadow-xl"
              >
                Assemble Quote List
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </MagneticButton>
            <Link
              to="/contact"
              className="px-8 py-4 border border-white/40 hover:border-white text-white font-heading text-xs font-semibold uppercase tracking-widest rounded-full transition-colors"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
