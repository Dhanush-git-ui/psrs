import { useState } from 'react';
import type { ProductHotspot } from '@/data/products';
import { Info, ShieldCheck, Settings, Wrench } from 'lucide-react';

interface HotspotExplorerProps {
  hotspots: ProductHotspot[];
  productType: string;
}

export default function HotspotExplorer({ hotspots, productType }: HotspotExplorerProps) {
  const [activeHotspot, setActiveHotspot] = useState<ProductHotspot | null>(null);

  // Generate a premium dynamic schematic SVG based on the product type as a high-tech backdrop
  const renderSchematicBackdrop = () => {
    return (
      <svg
        className="w-full h-full text-brand-bordergray stroke-current"
        viewBox="0 0 800 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Engineering grid lines */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(229, 229, 229, 0.4)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Stylized industrial design drafts */}
        <g strokeWidth="1.5" opacity="0.85" className="stroke-brand-graphite/40">
          {productType === 'wagon' ? (
            <>
              {/* Wagon Drill Chassis */}
              <circle cx="250" cy="400" r="45" strokeDasharray="5,5" />
              <circle cx="550" cy="400" r="45" strokeDasharray="5,5" />
              <line x1="250" y1="400" x2="550" y2="400" />
              {/* Feed Tower */}
              <rect x="360" y="80" width="80" height="320" rx="4" />
              <line x1="400" y1="80" x2="400" y2="400" strokeWidth="3" />
              <line x1="375" y1="120" x2="425" y2="120" />
              <line x1="375" y1="200" x2="425" y2="200" />
              <line x1="375" y1="280" x2="425" y2="280" />
              {/* Hydraulic cylinder */}
              <line x1="320" y1="400" x2="360" y2="250" strokeWidth="2" />
              {/* Drill bit extension */}
              <line x1="400" y1="400" x2="400" y2="460" strokeWidth="4" className="stroke-brand-red" />
            </>
          ) : productType === 'crawler' ? (
            <>
              {/* Crawler Drill Tracks */}
              <rect x="200" y="380" width="400" height="60" rx="30" strokeWidth="2" />
              <circle cx="240" cy="410" r="25" />
              <circle cx="370" cy="410" r="20" />
              <circle cx="500" cy="410" r="20" />
              <circle cx="560" cy="410" r="25" />
              <line x1="200" y1="410" x2="600" y2="410" />
              {/* Cab */}
              <path d="M 280 380 L 280 260 L 380 260 L 420 320 L 420 380 Z" />
              <rect x="300" y="280" width="60" height="50" rx="4" />
              {/* Mast/Boom */}
              <line x1="420" y1="380" x2="520" y2="160" strokeWidth="3" />
              <rect x="490" y="60" width="60" height="280" transform="rotate(15, 490, 60)" rx="5" />
              <line x1="535" y1="130" x2="535" y2="350" strokeWidth="4" className="stroke-brand-red" />
            </>
          ) : productType === 'inwell' ? (
            <>
              {/* Truck Frame */}
              <rect x="150" y="320" width="500" height="80" rx="8" />
              <circle cx="230" cy="400" r="35" />
              <circle cx="520" cy="400" r="35" />
              <circle cx="590" cy="400" r="35" />
              {/* Cabin */}
              <path d="M 150 320 L 150 220 L 220 220 L 260 320 Z" />
              {/* Heavy Mast */}
              <rect x="360" y="60" width="100" height="260" rx="4" />
              <line x1="410" y1="60" x2="410" y2="320" strokeWidth="4" />
              <path d="M 370 120 L 450 200 M 450 120 L 370 200" />
              <path d="M 370 200 L 450 280 M 450 200 L 370 280" />
            </>
          ) : (
            <>
              {/* Generic bit/cylindrical schematic */}
              <rect x="320" y="100" width="160" height="300" rx="10" />
              <path d="M 320 250 L 480 250 M 320 320 L 480 320" />
              <path d="M 350 400 L 320 450 L 480 450 L 450 400 Z" className="fill-brand-lightgray" />
              <circle cx="360" cy="425" r="10" className="fill-brand-red" />
              <circle cx="400" cy="425" r="10" className="fill-brand-red" />
              <circle cx="440" cy="425" r="10" className="fill-brand-red" />
            </>
          )}
        </g>
      </svg>
    );
  };

  return (
    <div className="relative w-full border border-brand-bordergray rounded-2xl overflow-hidden bg-brand-softwhite p-4 md:p-8 flex flex-col items-center">
      <div className="absolute top-4 left-6 z-10">
        <h4 className="font-heading text-xs font-semibold uppercase tracking-widest text-brand-graphite">
          Interactive Design Draft
        </h4>
        <span className="font-sans text-[10px] text-brand-graphite/60">
          Hover points to inspect engineering specifications
        </span>
      </div>

      {/* Main Schematic Wrapper */}
      <div className="relative w-full max-w-[800px] aspect-[8/5] select-none">
        {renderSchematicBackdrop()}

        {/* Hotspot Dots */}
        {hotspots.map((hs) => {
          const isActive = activeHotspot?.id === hs.id;
          return (
            <div
              key={hs.id}
              className="absolute hotspot-dot cursor-pointer z-20 group"
              style={{ left: `${hs.x}%`, top: `${hs.y}%` }}
              onMouseEnter={() => setActiveHotspot(hs)}
              onClick={() => setActiveHotspot(hs)}
            >
              {/* Glowing Trigger */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isActive 
                    ? 'bg-brand-red scale-110 shadow-lg ring-4 ring-brand-red/30' 
                    : 'bg-brand-charcoal hover:bg-brand-red ring-2 ring-white'
                }`}
              >
                <span className="text-[10px] font-bold text-white font-mono">
                  {hs.id.replace('hs', '')}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Display Overlay */}
      <div className="w-full mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-brand-bordergray pt-6">
        {activeHotspot ? (
          <>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-brand-red text-white font-mono text-xs font-bold">
                  {activeHotspot.id.replace('hs', '')}
                </span>
                <h5 className="font-heading text-base font-bold text-brand-charcoal">
                  {activeHotspot.name}
                </h5>
              </div>
              <p className="font-sans text-sm text-brand-graphite leading-relaxed">
                {activeHotspot.function}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 bg-white rounded-xl border border-brand-bordergray/50 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-red">
                  <ShieldCheck size={14} />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider">Material</span>
                </div>
                <p className="font-sans text-xs text-brand-graphite font-medium">
                  {activeHotspot.material}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-brand-bordergray/50 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-red">
                  <Settings size={14} />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider">Benefit</span>
                </div>
                <p className="font-sans text-xs text-brand-graphite font-medium">
                  {activeHotspot.benefit}
                </p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-brand-bordergray/50 space-y-1">
                <div className="flex items-center gap-1.5 text-brand-red">
                  <Wrench size={14} />
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider">Maintenance</span>
                </div>
                <p className="font-sans text-xs text-brand-graphite font-medium">
                  {activeHotspot.maintenance || 'Standard periodic inspection'}
                </p>
              </div>
            </div>
          </>
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center py-6 text-center text-brand-graphite/60 bg-white/40 border border-dashed border-brand-bordergray rounded-xl">
            <Info size={24} className="mb-2 text-brand-graphite/40" />
            <h6 className="font-heading text-sm font-semibold">No Component Selected</h6>
            <p className="font-sans text-xs mt-1">
              Select or hover a glowing hotspot index above to view technical design breakdowns.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
