import { Check, Award, Eye, Flame } from 'lucide-react';

export default function About() {
  const milestones = [
    { year: '1998', title: 'Founding & Pneumatics', desc: 'PSR was established with a focus on hand-held pneumatic rock drills and service parts.' },
    { year: '2005', title: 'DTH Hammer Expansion', desc: 'Launched the first line of 4" and 6" Down-the-Hole hammers, serving domestic mining blocks.' },
    { year: '2012', title: 'Wagon Drill Launch', desc: 'Developed the PSR-W100 Pneumatic Wagon Drill, establishing PSR as an OEM rig manufacturer.' },
    { year: '2018', title: 'Smart Factory Transition', desc: 'Moved operations to a modern 12,000 sqm smart forging plant equipped with Japanese CNC networks.' },
    { year: '2022', title: 'Global Export Push', desc: 'Expanded export networks across Latin America, South Africa, and Southeast Asia, logging 35+ countries.' }
  ];

  return (
    <div className="select-text">
      {/* Cinematic Hero */}
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
            Corporate Profile
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight max-w-2xl leading-tight">
            Forging Heavy Machinery Since 1998.
          </h1>
          <p className="font-sans text-sm text-white/70 max-w-xl leading-relaxed">
            From humble pneumatic beginnings to heavy hydraulic crawler platforms, PSR'S Rock Drills supplies engineering power across the globe.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Our Foundations
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              An Engineering Spirit Rooted in Hard Rock
            </h2>
            <p className="font-sans text-sm text-brand-graphite leading-relaxed">
              At PSR'S Rock Drills, we believe that mining and infrastructure development shouldn't be stalled by tool failure. The extreme mechanical stresses of down-the-hole drilling demand flawless metallurgy. That is why we manage 100% of our manufacturing cycle in-house. 
            </p>
            <p className="font-sans text-sm text-brand-graphite leading-relaxed">
              Every outer cylinder sleeve, every tungsten carbide button insert, and every thread connection is designed, forged, tempered, and quality-tested in our Bangalore headquarters. This rigorous control loop is what sets our systems apart.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite space-y-3">
              <Eye className="text-brand-red" size={24} />
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">Our Vision</h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                To stand as the absolute global benchmark for heavy-duty drilling systems, combining long tool-life with low fuel consumption.
              </p>
            </div>

            <div className="p-6 border border-brand-bordergray rounded-2xl bg-brand-softwhite space-y-3">
              <Flame className="text-brand-red" size={24} />
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-brand-charcoal">Our Mission</h4>
              <p className="font-sans text-xs text-brand-graphite leading-relaxed">
                Provide robust, easily maintainable, and high-performance rock drill solutions that maximize extraction profitability and worker safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Infrastructure */}
      <section className="py-24 bg-brand-softwhite border-y border-brand-bordergray">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="max-w-2xl space-y-4 mb-16">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Advanced Infrastructure
            </span>
            <h2 className="font-display text-4xl font-extrabold text-brand-charcoal tracking-tight">
              A Smart Plant Built for Scale
            </h2>
            <p className="font-sans text-sm text-brand-graphite">
              Our 12,000+ sqm manufacturing facility handles all operations from forging raw high-nickel billets to high-frequency pneumatic testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'High-Speed CNC Bay',
                desc: 'Equipped with Japanese multi-axis machining centers. Billets are turned and threads are ground to sub-micron accuracy, ensuring seamless rods alignment and zero friction wear.',
                metric: '0.02 mm tolerance limit'
              },
              {
                title: 'Carburization Furnace',
                desc: 'Controlled-atmosphere tempering processes case-harden alloy steel surfaces. This creates an extremely rigid skin shell while retaining a resilient core to absorb piston impacts.',
                metric: '850°C carburizing cycles'
              },
              {
                title: 'Live Air Test Bench',
                desc: 'Every wagon drill and hammer is mounted on our static pressure test rig. Live sensor arrays log impact frequencies, backpressures, and check valve seals before shipping.',
                metric: '100% units blow-tested'
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
              Company Journey
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

      {/* Certifications & Quality */}
      <section className="py-24 bg-brand-charcoal text-white">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-red">
              Quality Standards
            </span>
            <h2 className="font-display text-4xl font-extrabold tracking-tight leading-tight">
              Certified Manufacturing Excellence
            </h2>
            <p className="font-sans text-sm text-white/70 leading-relaxed">
              Quality is not a post-inspection variable. It is a systematic design condition. Our manufacturing facilities are fully certified and compliant with global industrial safety and performance frameworks.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">ISO 9001:2015 Registered Facilities</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">API Thread Profile Complicance</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="text-brand-red" size={18} />
                <span className="font-heading text-xs font-bold uppercase tracking-wider">DGMS Safety Standards Compliant</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: 'ISO 9001 Certification',
                subtitle: 'Quality Management Matrices',
                desc: 'Audited process workflows tracking raw alloy forging chemistry, heat-treat cycles, and physical tolerance limits.'
              },
              {
                title: 'API Spec standards',
                subtitle: 'American Petroleum Institute Specs',
                desc: 'Certifies that our drill rod thread profiles match global rotary drill string requirements, avoiding bind-ups.'
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
