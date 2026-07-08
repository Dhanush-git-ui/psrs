import { Check, Award, Eye, Flame } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1998', title: 'Company Start', desc: 'PSR started by making hand-held rock drills and spare parts.' },
    { year: '2005', title: 'New Hammer Line', desc: 'Launched our first 4" and 6" DTH hammers for local mines.' },
    { year: '2012', title: 'Wagon Drill Launch', desc: 'Built the PSR-W100 Pneumatic Wagon Drill and started making full drill rigs.' },
    { year: '2018', title: 'Smart Factory', desc: 'Moved to a modern 12,000 sqm plant with advanced CNC machines.' },
    { year: '2022', title: 'Global Sales', desc: 'Started exporting to over 35 countries in South Africa, Latin America, and Asia.' }
  ];

  return (
    <div className="select-text">
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-brand-charcoal text-white flex items-center">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1920')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/80 to-transparent z-10" />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 w-full z-20 space-y-6">
          <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Making Heavy Drilling Machines Since 1998.
          </h1>
          <p className="font-sans text-sm text-white/70 max-w-xl leading-relaxed">
            From simple pneumatic tools to heavy hydraulic crawler rigs, we supply drilling power worldwide.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Story
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Drilling Tools Built for Hard Rocks
            </h2>
            <p className="font-sans text-sm text-brand-graphite leading-relaxed">
              At PSR, we make sure your work does not stop due to tool failures. The high stress of drilling requires strong metal parts. That is why we make all our products inside our own factory.
            </p>
            <p className="font-sans text-sm text-brand-graphite leading-relaxed">
              Every cylinder sleeve, button bit, and thread connection is designed, forged, and tested in our Hyderabad head office. This keeps our quality high.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite space-y-3">
              <Eye className="text-brand-red" size={24} />
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">Our Vision</h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                To be the global leader in heavy drilling tools, offering long tool life and low fuel use.
              </p>
            </div>

            <div className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite space-y-3">
              <Flame className="text-brand-red" size={24} />
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">Our Mission</h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                Provide durable, simple-to-use, and powerful drilling solutions that keep workers safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24 bg-brand-softwhite border-y border-brand-bordergray">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Factory
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              A Modern Plant Built for Scale
            </h2>
            <p className="font-sans text-sm text-brand-graphite">
              Our 12,000+ sqm factory handles everything from forging raw steel to testing finished drills under high pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'High-Precision CNC Bay',
                desc: 'Equipped with Japanese machining centers. Steel bars are turned and threads are cut with high accuracy, ensuring parts fit perfectly and do not wear out fast.',
                metric: 'High Accuracy Machining'
              },
              {
                title: 'Heat Treatment Furnace',
                desc: 'We heat steel parts to make them strong. This creates a hard outer surface that protects the tool, while keeping the core flexible to absorb heavy hammer impacts.',
                metric: 'Advanced Steel Hardening'
              },
              {
                title: 'Live Air Test Bench',
                desc: 'Every wagon drill and hammer is tested on our pressure test rig before shipping. We check impact speeds and valve seals to ensure they work perfectly.',
                metric: '100% Tested Before Shipping'
              }
            ].map((inf, i) => (
              <div key={i} className="p-8 bg-white border border-brand-bordergray rounded-2xl space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <h4 className="font-heading text-base font-bold text-brand-charcoal uppercase tracking-wider">
                    {inf.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                    {inf.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-brand-lightgray font-mono text-sm font-bold text-brand-red">
                  {inf.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Journey
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              Milestones of Growth
            </h2>
          </div>

          <div className="relative border-l border-brand-bordergray ml-4 md:ml-32 space-y-12">
            {milestones.map((mil, i) => (
              <div key={i} className="relative pl-8 md:pl-12">
                {/* Bullet */}
                <div className="absolute -left-2.5 top-1.5 w-5 h-5 rounded-full bg-white border-4 border-brand-red shadow-sm" />
                
                {/* Year Label */}
                <div className="space-y-2 max-w-2xl">
                  <span className="font-mono text-xs font-bold text-brand-red block">
                    {mil.year}
                  </span>
                  <h4 className="font-heading text-base font-bold text-brand-charcoal uppercase tracking-wider">
                    {mil.title}
                  </h4>
                  <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                    {mil.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Quality Standards
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight leading-tight">
              Certified Quality
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              We check quality at every step of our design. Our factory is fully certified and follows global industrial safety and performance rules.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">ISO 9001:2015 Certified Plant</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">API Thread Profile Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">Mine Safety Standards Compliant</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'ISO 9001 Certification',
                subtitle: 'Quality Management',
                desc: 'We trace steel quality, heat treatments, and size tolerance limits step-by-step.'
              },
              {
                title: 'API Standards',
                subtitle: 'Thread Alignment',
                desc: 'Certifies that our drill rod thread profiles match standard drilling systems to prevent bind-ups.'
              }
            ].map((cert, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl space-y-4">
                <Award className="text-brand-red" size={28} />
                <div className="space-y-1">
                  <h4 className="font-heading text-sm font-bold uppercase tracking-wider">{cert.title}</h4>
                  <span className="font-sans text-[10px] text-white/50">{cert.subtitle}</span>
                </div>
                <p className="font-sans text-xs text-white/70 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
