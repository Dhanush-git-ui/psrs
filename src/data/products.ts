import { INVENTORY } from './inventory';

export interface ProductHotspot {
  id: string;
  name: string;
  x: number; // percentage
  y: number; // percentage
  function: string;
  material: string;
  benefit: string;
  maintenance: string;
}

export interface ProductSpecs {
  holeDiameter?: string;
  drillDepth?: string;
  motorType?: string;
  rotationSpeed?: string;
  airConsumption?: string;
  weight?: string;
  feedLength?: string;
  operatingPressure?: string;
  dimensions?: string;
  compatibleAccessories?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  applications: string[];
  specs: ProductSpecs;
  hotspots: ProductHotspot[];
  faqs: { question: string; answer: string }[];
  brochureUrl: string;
  brochurePath?: string;
  datasheetUrl: string;
  image: string; 
  imageUrl: string;
}

export const CATEGORIES = [
  { name: 'Drilling Rigs & Machinery', slug: 'rigs-machinery', desc: 'Crawler drills, pneumatic and rotary wagon drills, and water well drilling rigs.' },
  { name: 'Rotation Motors', slug: 'rotation-motors', desc: 'Powerful 4-piston radial pneumatic rotation drives.' },
  { name: 'Crankcase', slug: 'crankcase', desc: 'Cast engine bodies, top covers, and counterbalance weights.' },
  { name: 'Piston Assembly', slug: 'piston-assembly', desc: 'Reciprocating pistons, wrist pins, liners, and conrods.' },
  { name: 'Valves', slug: 'valves', desc: 'Rotary air distribution valves and cylinder heads.' },
  { name: 'Bearings & Seals', slug: 'bearings-seals', desc: 'Deep groove ball bearings, O-ring grease rings, and composites.' },
  { name: 'Fasteners', slug: 'fasteners', desc: 'High-tensile hex bolts, feather keys, and snap circlips.' },
  { name: 'Air System', slug: 'air-system', desc: 'Inlet filter elements and exhaust deflector silencers.' }
];

export const BASE_PRODUCTS: Product[] = [
  {
    id: 'psr-c300-crawler',
    name: 'PSR-C300 Heavy Hydraulic Crawler Drill',
    slug: 'psr-c300-heavy-hydraulic-crawler-drill',
    category: 'Drilling Rigs & Machinery',
    categorySlug: 'rigs-machinery',
    tagline: 'Heavy Strata Crawler Platform. 450 RPM Rotation.',
    description: 'A diesel-hydraulic crawler drill rig designed for mining blast holes, anchoring, and geothermal applications.',
    longDescription: 'The PSR-C300 represents our premier crawler drilling platform. Built on standard heavy-duty structural crawler tracks with independent high-torque traction gearboxes, it operates reliably on extreme 30-degree slopes. Equipped with a robust guide mast, automated rod handling, and a high-frequency hydraulic rotation head, it is optimized for high productivity quarrying.',
    features: [
      'Heavy-duty crawlers with independent track oscillation controls',
      'Dual hydraulic rod clamping and guide break system',
      'Integrated high-pressure dust collection system',
      'Ergonomic pilot valve operating deck'
    ],
    benefits: [
      'Commanding traction limits in muddy or fractured quarry terrain',
      'Drastically reduced drill rod replacement cycles',
      'Sub-micron air filtration for maximum crew safety'
    ],
    applications: [
      'Iron ore and limestone open pit blast holes',
      'Civil anchoring and micro-piling',
      'Geothermal loop boring'
    ],
    specs: {
      holeDiameter: '102 – 165 mm',
      drillDepth: '30 meters (continuous)',
      motorType: 'Caterpillar C7.1 Diesel Engine (225 HP)',
      rotationSpeed: '0 – 120 RPM',
      weight: '12,500 kg',
      feedLength: '6.8 meters'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'crawler',
    imageUrl: '/images/products/crawler_drill_rig.png'
  },
  {
    id: 'psr-w100-wagon',
    name: 'PSR-W100 Pneumatic Wagon Drill',
    slug: 'psr-w100-pneumatic-wagon-drill',
    category: 'Drilling Rigs & Machinery',
    categorySlug: 'rigs-machinery',
    tagline: 'Top-Hammer Wagon System. SG Casting Guide Mast.',
    description: 'A versatile pneumatic wagon drill for high-speed shallow blast hole drilling in granite and limestone quarries.',
    longDescription: 'The PSR-W100 Wagon Drill is designed for cost-efficient vertical, horizontal, or angular boring. Mounted on a three-wheel pneumatic tire chassis with manual tow bars, it features a heavy structural guide mast and high-torque Airtech rotation motor.',
    features: [
      'Robust three-wheel chassis with dual anchor leveling jacks',
      'Pneumatic mast cylinder feed mechanism',
      'High-rigidity guide mast supporting 3-meter drill rods',
      'Line oiler lubrication system'
    ],
    benefits: [
      'Easy to tow and reposition manually on tight benches',
      'Simple mechanics allow fast field maintenance',
      'Low operating fuel costs utilizing standard mobile compressors'
    ],
    applications: [
      'Quarry dimensional stone splitting',
      'Road cutting anchoring',
      'Grout hole boring'
    ],
    specs: {
      holeDiameter: '50 – 76 mm',
      drillDepth: '15 meters',
      motorType: 'Pneumatic Feed Motor (4 HP)',
      rotationSpeed: '0 – 150 RPM',
      weight: '980 kg',
      feedLength: '3.6 meters'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'wagon',
    imageUrl: '/images/products/wagon_drill.png'
  },
  {
    id: 'psr-h6-waterwell',
    name: 'PSR-H6 Water Well Drilling Rig',
    slug: 'psr-h6-water-well-boring-rig',
    category: 'Drilling Rigs & Machinery',
    categorySlug: 'rigs-machinery',
    tagline: 'Deep Aquifer Core Rig. Double Spindle Guide.',
    description: 'A truck-mounted heavy hydraulic rotary well rig for tapping deep agricultural and residential aquifers.',
    longDescription: 'The PSR-H6 is a heavy-duty rotary derrick drilling rig designed to fit standard multi-axle truck platforms. Utilizing a dual-motor hydraulic rotation head and heavy pull-up cylinders, it can easily handle massive casing weights to drill deep well boreholes.',
    features: [
      'High-pressure hydraulic top drive rotation head',
      'Heavy structural guide mast with 6.5-meter travel limits',
      'Onboard heavy injection soap / foam lubricator',
      'High capacity hydraulic pull-down feed force'
    ],
    benefits: [
      'Tap groundwater aquifers at depths over 300 meters',
      'High road transit speeds between agricultural boring jobs',
      'Handles standard 6-meter drill pipes easily'
    ],
    applications: [
      'Deep aquifer agricultural well boring',
      'Industrial aquifer dewatering',
      'Geotechnical casing boring'
    ],
    specs: {
      holeDiameter: '150 – 250 mm',
      drillDepth: '350 meters',
      motorType: 'Onboard Deck Diesel Engine (160 HP)',
      rotationSpeed: '0 – 80 RPM',
      weight: '6,200 kg (mast & deck assembly)',
      feedLength: '6.5 meters'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'inwell',
    imageUrl: '/images/products/inwell_drill.png'
  },
  {
    id: 'at-pneumatic-rock-drill',
    name: 'Airtech Pneumatic Rock Drill',
    slug: 'airtech-pneumatic-rock-drill',
    category: 'Drilling Rigs & Machinery',
    categorySlug: 'rigs-machinery',
    tagline: 'Cast Iron Percussion. High-Frequency Blast Hole Tool.',
    description: 'Robust percussion tools manufactured from cast iron, commonly used for blast-hole rock drilling.',
    longDescription: 'The Airtech Pneumatic Rock Drill is a premier percussion drill designed for high penetration rates in hard rock quarries. Its cast iron main body provides outstanding shock dampening, while the internal piston transmits maximum kinetic energy to the drill steel.',
    features: [
      'High-frequency impact piston mechanism',
      'Heavy-duty cast iron body casting',
      'Dual flushing air-water tube inlet',
      'Anti-vibration side handle mounts'
    ],
    benefits: [
      'Unmatched drilling speed in hard quartz or basalt',
      'Reduced operator fatigue from integrated dampening',
      'Easy disassembly and maintenance in the field'
    ],
    applications: [
      'Blast-hole rock drilling in quarries',
      'Civil highway anchoring',
      'Micro-pile boring'
    ],
    specs: {
      holeDiameter: '32 – 45 mm',
      drillDepth: '6 meters',
      motorType: 'Pneumatic Hammer (3.2 kW)',
      weight: '24 kg',
      dimensions: '580 x 220 x 180 mm'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'rock_drill',
    imageUrl: '/images/products/rock_drill.png'
  },
  {
    id: 'slim-drill-ld4',
    name: 'Slim Drill LD4 Machine',
    slug: 'slim-drill-ld4-machine',
    category: 'Drilling Rigs & Machinery',
    categorySlug: 'rigs-machinery',
    tagline: 'Narrow Space Drilling. Compact LD4 Guide Mast.',
    description: 'Compact units optimized for narrow workspace conditions, including models like the Slim Drill LD4.',
    longDescription: 'The Slim Drill LD4 is a highly compact, lightweight drilling unit engineered specifically for narrow mining galleries and confined construction benches. Mounted on a lightweight aluminum frame with manual leveling anchors, it provides stable drilling operations in hard-to-reach locations.',
    features: [
      'Ultra-compact sliding guide mast profile',
      'Lightweight structural aluminum alloy frame',
      'Pneumatic feed feed screw mechanism',
      'High power-to-weight ratio rotation motor'
    ],
    benefits: [
      'Operates in tight spaces down to 1.2 meters clearance',
      'Extremely easy manual transportation and set up',
      'High boring accuracy in vertical and angular configurations'
    ],
    applications: [
      'Narrow mining gallery bolt installations',
      'Foundation anchoring in basements',
      'Confined quarry benches'
    ],
    specs: {
      holeDiameter: '90 – 115 mm',
      drillDepth: '30 meters',
      motorType: 'Pneumatic Feed Screw (2.8 HP)',
      weight: '180 kg',
      dimensions: '1100 x 480 x 780 mm'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'slim_drill',
    imageUrl: '/images/products/slim_drill.png'
  },
  {
    id: 'at-70l4r-std',
    name: 'Airtech 70L4R Standard Pneumatic Motor',
    slug: 'airtech-70l4r-standard-pneumatic-motor',
    category: 'Rotation Motors',
    categorySlug: 'rotation-motors',
    tagline: 'Standard Rotary Force. 4-Piston Heavy Duty.',
    description: 'A 4-cylinder radial piston air motor designed for robust rotation in core borewells and surface quarry drills.',
    longDescription: 'The Airtech 70L4R Standard is the industry benchmark for pneumatic drill string rotation. Utilizing 70mm diameter pistons acting on a single forged crankshaft throw, it delivers continuous high torque. It is self-lubricating via a built-in sump reservoir and features a reversible air chest, letting operators switch drilling directions instantly.',
    features: [
      'Four radial cylinder configuration with 70mm piston bores',
      'Dual bearing supported front drive shaft case',
      'Integrated rotary timing valve for synchronous air flow',
      'Heavy cast iron casing with dual anchor mounting foot',
      'High power-to-weight ratio'
    ],
    benefits: [
      'Capable of vertical or horizontal operations on any drill guide mast',
      'High start-up torque allows rotation of locked rods',
      'Minimal air leak bypass due to precision cross-hatch sleeve liners',
      'Low mechanical noise discharge with built-in exhaust caps'
    ],
    applications: [
      'Limestone blast hole drilling rigs',
      'Standard construction anchoring systems',
      'Shallow aquifer water boring'
    ],
    specs: {
      motorType: 'Piston Radial Air Motor (70mm Bore)',
      rotationSpeed: '0 – 1500 RPM',
      airConsumption: '450 CFM at 12 bar',
      weight: '48.5 kg (106 lbs)',
      dimensions: '650 x 280 x 290 mm',
      compatibleAccessories: '6210 Bearings, M10 Bolt Flanges'
    },
    hotspots: [
      {
        id: 'hs1',
        name: 'Rotary Timing Valve',
        x: 75,
        y: 35,
        function: 'Synchronizes air intake and exhaust with crankshaft rotations.',
        material: 'Case-Hardened Tool Steel.',
        benefit: 'Ensures zero power lag on stroke reversals.',
        maintenance: 'Check air filter seals every 100 hours of boring.'
      },
      {
        id: 'hs2',
        name: 'Cast Iron Crankcase',
        x: 45,
        y: 50,
        function: 'Supports the cylinders and holds oil lubricant sump.',
        material: 'SG Ductile Iron.',
        benefit: 'Extremely high rigidity preventing casing cracks under drill pipe vibration.',
        maintenance: 'Drain and refill gear lubrication oil every 500 operating hours.'
      }
    ],
    faqs: [
      {
        question: 'What is the required air supply line pressure?',
        answer: 'The standard motor operates efficiently at 12 bar (174 PSI). It can function down to 7 bar with reduced torque, but should not exceed 15 bar to prevent bearing seal fatigue.'
      }
    ],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'wagon',
    imageUrl: '/images/products/pneumatic_motor.png'
  },
  {
    id: 'at-70l4r-t',
    name: 'Airtech 70L4R-T High-Torque Pneumatic Motor',
    slug: 'airtech-70l4r-t-high-torque-pneumatic-motor',
    category: 'Rotation Motors',
    categorySlug: 'rotation-motors',
    tagline: 'Premium Gear Breakdown Torque. Tapered Nose Case.',
    description: 'An upgraded 70L4R pneumatic motor optimized for hard strata rock breaking where torque limits are pushed.',
    longDescription: 'The 70L4R-T variant features a heavy-duty tapered bearing nose cap housing and custom high-pressure cylinder liners. Rated up to 15 bar operating pressure, it delivers 20% higher start-up torque, ensuring continuous rotation in hard granite or basalt layers.',
    features: [
      'Tapered front spindle cap with dual steel thrust shims',
      'High-pressure carbon composite cylinder liner sleeve inserts',
      'Reversible rotary Timing valve with enlarged bypass ports',
      'Heavy-duty cast bronze casing coat for thermal resistance'
    ],
    benefits: [
      'Eliminates rotation stalls in binding clay or fractured rock strata',
      'Extended bearing life due to dual-groove 6210 2RS bearings layout',
      'Highly resistant to abrasive sand slurry backflow'
    ],
    applications: [
      'Hard granite quarrying blast holes',
      'Deep rock micro-piling anchoring',
      'Down-the-hole hammer rotation drives'
    ],
    specs: {
      motorType: 'Piston Radial Air Motor (70mm Bore)',
      rotationSpeed: '0 – 1200 RPM',
      airConsumption: '520 CFM at 15 bar',
      weight: '52.0 kg (114 lbs)',
      dimensions: '675 x 280 x 290 mm',
      compatibleAccessories: '6210 Bearings, Valve Head Gaskets'
    },
    hotspots: [
      {
        id: 'hs1',
        name: 'Tapered Nose bearing cap',
        x: 25,
        y: 40,
        function: 'Supports the output shaft under heavy axial thrust.',
        material: 'High-alloy machined steel.',
        benefit: 'Reduces runout tolerances, protecting the internal gear coupling.',
        maintenance: 'Inject high-pressure grease daily via the front nipple.'
      }
    ],
    faqs: [
      {
        question: 'Does this model require a separate inline lubricator?',
        answer: 'Yes, like all pneumatic motors, a line oiler delivering rock drill oil (ISO 100 or equivalent) at a rate of 2-3 drops per minute is essential.'
      }
    ],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'crawler',
    imageUrl: '/images/products/pneumatic_motor.png'
  },
  {
    id: 'at-70l4r-l',
    name: 'Airtech 70L4R-L Deep Borewell Pneumatic Motor',
    slug: 'airtech-70l4r-l-deep-borewell-pneumatic-motor',
    category: 'Rotation Motors',
    categorySlug: 'rotation-motors',
    tagline: 'Deep Spindle Extension. High Backpressure Rating.',
    description: 'Designed specifically for deep aquifer borewell drilling, featuring a long splined output shaft.',
    longDescription: 'The 70L4R-L is engineered for deep water well boring rigs where casing weights are massive. Equipped with an extended front API drive spindle and double-lipped oil seals, it operates reliably under high backpressure and wet water injection operations.',
    features: [
      'Extended front drive spindle with thread keyway locks',
      'Double NBR rubber grease seal rings preventing water ingress',
      'Cast-bronze valve chest with custom exhaust silencing baffles',
      'Integrated oil separator casing'
    ],
    benefits: [
      'Prevents water and sand slurry from entering the crankcase sump',
      'Exceptional performance at depths exceeding 200 meters',
      'Reduces exhaust air noise level down to OSHA limits'
    ],
    applications: [
      'Deep agricultural aquifer boring',
      'Geothermal loop installations',
      'Dewatering shafts in open cast mines'
    ],
    specs: {
      motorType: 'Piston Radial Air Motor (70mm Bore)',
      rotationSpeed: '0 – 1000 RPM',
      airConsumption: '580 CFM at 18 bar',
      weight: '56.5 kg (124 lbs)',
      dimensions: '710 x 280 x 290 mm',
      compatibleAccessories: '6210 Bearings, Bronze Crank Bush'
    },
    hotspots: [
      {
        id: 'hs1',
        name: 'API Spindle Thread Lock',
        x: 20,
        y: 45,
        function: 'Connects output rotation directly to the water swivel rod strings.',
        material: 'Heat-treated 40Cr steel.',
        benefit: 'Ensures no spindle spin-offs on rotational shock load changes.',
        maintenance: 'Apply thread copper grease before coupling rods.'
      }
    ],
    faqs: [
      {
        question: 'Can this motor handle detergent/foam injection drilling?',
        answer: 'Yes. The double-lip front seals are designed to resist soap and foam chemicals, keeping the internal oil sump clean.'
      }
    ],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'inwell',
    imageUrl: '/images/products/pneumatic_motor.png'
  },
  {
    id: 'heavy-drilling-spares',
    name: 'Heavy Drilling Machine Spares Package',
    slug: 'heavy-drilling-machine-spares-package',
    category: 'Crankcase',
    categorySlug: 'crankcase',
    tagline: 'OEM Drivetrain Spares. Precision Machined Gears.',
    description: 'Precision drivetrain parts such as worm gear wheels, main shaft gear assemblies, idler gear shafts, and output gears.',
    longDescription: 'Ensure maximum torque transfer and zero power loss with our heavy drilling machine drivetrain spares package. Made from high-grade case-hardened steel alloys and precision hobbed to sub-micron tolerances, these gears guarantee silent and smooth operation under the most severe drilling loads.',
    features: [
      'Case-hardened steel gear surfaces (58-62 HRC)',
      'Precision hobbed profiles for optimal tooth contact',
      'High-tensile steel idler shafts',
      'Compatible with major wagon and crawler rigs'
    ],
    benefits: [
      'Eliminates gear stripping under peak torque loads',
      'Improves overall mechanical drivetrain efficiency',
      'Extends rotation head life-cycles'
    ],
    applications: [
      'Wagon drill rotation head refits',
      'Crawler drill gearbox maintenance',
      'Heavy rotary head overhauls'
    ],
    specs: {
      motorType: 'Drivetrain Gears Set',
      dimensions: 'Various sizing packages',
      weight: '15.4 kg (combined package)',
      compatibleAccessories: 'NSK Bearings, Gear Oil ISO 150'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'spares',
    imageUrl: '/images/products/drivetrain_spares.png'
  },
  {
    id: 'drilling-tools-pkg',
    name: 'Drilling Tools Package',
    slug: 'heavy-duty-drilling-tools-package',
    category: 'Air System',
    categorySlug: 'air-system',
    tagline: 'High-Strength Drill Steel. Tungsten Button Bits.',
    description: 'High-strength drill rods (ranging from 2-metre to 3-metre configurations), hammer assemblies, thread button bits, and pneumatic distributor valves.',
    longDescription: 'A complete high-performance drilling toolset containing premium 2m to 3m carburized steel drill rods, DTH hammer assemblies, tungsten-carbide thread button bits, and line distributor valves. Designed for abrasive rock formations.',
    features: [
      'Carburized hollow steel alloy drill rods',
      'Hard-faced tungsten carbide button bit inserts',
      'High-efficiency pneumatic flushing valves',
      'Heavy impact hammer pistons'
    ],
    benefits: [
      'Increases penetration speed by up to 25%',
      'Reduces drill rod wear in highly abrasive granite',
      'Provides superior hole cleaning efficiency'
    ],
    applications: [
      'Basalt and granite blast hole drilling',
      'Deep aquifer water well boring',
      'Mining extraction benches'
    ],
    specs: {
      motorType: 'Boring Tools Package',
      dimensions: '2m & 3m rod lengths, 4" & 5" bits',
      weight: '38.0 kg (combined package)',
      compatibleAccessories: 'Thread lubricant, seal rings'
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'tools',
    imageUrl: '/images/products/drilling_tools.png'
  }
];

// Helper to convert InventoryItem to Product
export function convertInventoryToProduct(item: any): Product {
  const categorySlugMap: Record<string, string> = {
    'Rotation Motors': 'rotation-motors',
    'Crankcase': 'crankcase',
    'Piston Assembly': 'piston-assembly',
    'Valves': 'valves',
    'Bearings & Seals': 'bearings-seals',
    'Fasteners': 'fasteners',
    'Air System': 'air-system'
  };

  return {
    id: item.sku.toLowerCase(),
    name: item.name,
    slug: item.sku.toLowerCase(),
    category: item.category,
    categorySlug: categorySlugMap[item.category] || 'spare-parts',
    tagline: `OEM Part | Code: ${item.productCode} | Sanath Nagar Forging`,
    description: item.description,
    longDescription: item.longDescription || item.description,
    features: [
      `Material Structure: ${item.material}`,
      `Precision Dimensions: ${item.dimensions}`,
      `Overall Weight: ${item.weight}`,
      `Warehouse Storage: ${item.warehouse} (Rack: ${item.rack}, Pos: ${item.rackPosition || 'N/A'})`
    ],
    benefits: [
      'High metallurgy resilience',
      'Matches exact OEM fittings'
    ],
    applications: item.compatibleMachine ? item.compatibleMachine.split(',') : ['Industrial Drilling'],
    specs: {
      dimensions: item.dimensions,
      weight: item.weight,
      motorType: item.subCategory
    },
    hotspots: [],
    faqs: [],
    brochureUrl: '#',
    datasheetUrl: '#',
    image: 'bit',
    imageUrl: item.images[0] || '/images/inventory/IMG_3086.jpg'
  };
}

// Map the items from INVENTORY (excluding the full assembly rotation motor, which is represented by at-70l4r-std)
const inventoryProducts = INVENTORY.filter(item => item.sku !== 'PRM-AT-70L4R').map(convertInventoryToProduct);

export const PRODUCTS: Product[] = [
  ...BASE_PRODUCTS,
  ...inventoryProducts
];

export const COMPARISONS = [
  {
    feature: 'Piston Diameter',
    '70L4R Standard': '70 mm',
    '70L4R-T (High-Torque)': '70 mm',
    '70L4R-L (Deep Borewell)': '70 mm'
  },
  {
    feature: 'Air Pressure Rating',
    '70L4R Standard': '12 bar (174 PSI)',
    '70L4R-T (High-Torque)': '15 bar (217 PSI)',
    '70L4R-L (Deep Borewell)': '18 bar (261 PSI)'
  },
  {
    feature: 'Max Speed',
    '70L4R Standard': '1500 RPM',
    '70L4R-T (High-Torque)': '1200 RPM',
    '70L4R-L (Deep Borewell)': '1000 RPM'
  },
  {
    feature: 'Shaft Profile',
    '70L4R Standard': 'Keyed Cylinder (38mm)',
    '70L4R-T (High-Torque)': 'Tapered Spline Nose',
    '70L4R-L (Deep Borewell)': 'API Long Spindle Thread'
  },
  {
    feature: 'Operating Weight',
    '70L4R Standard': '48.5 kg',
    '70L4R-T (High-Torque)': '52.0 kg',
    '70L4R-L (Deep Borewell)': '56.5 kg'
  },
  {
    feature: 'Air Consumption',
    '70L4R Standard': '450 CFM',
    '70L4R-T (High-Torque)': '520 CFM',
    '70L4R-L (Deep Borewell)': '580 CFM'
  }
];
