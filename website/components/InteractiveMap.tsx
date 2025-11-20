'use client';

import { motion } from 'framer-motion';
import { useState, forwardRef } from 'react';

interface Location {
  id: string;
  name: string;
  details: string;
  type: 'hq' | 'office';
}

const locations: Location[] = [
  { id: 'hk', name: 'Hong Kong (HQ)', details: 'Global Headquarters', type: 'hq' },
  { id: 'sz', name: 'Shenzhen', details: 'Operations Center', type: 'office' },
  { id: 'cd', name: 'Chengdu', details: 'R&D Support', type: 'office' },
  { id: 'my', name: 'Malaysia', details: 'Southeast Asia Hub', type: 'office' },
  { id: 'us', name: 'Phoenix, USA', details: 'North American Sales', type: 'office' },
  { id: 'au', name: 'Brisbane, Australia', details: 'Oceania Office', type: 'office' },
  { id: 'pl', name: 'Poland', details: 'European Center', type: 'office' },
  { id: 'ru', name: 'Russia', details: 'CIS Regional Office', type: 'office' },
];

interface InteractiveMapProps {
  children?: React.ReactNode;
}

const InteractiveMap = forwardRef<HTMLDivElement, InteractiveMapProps>((props, ref) => {
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 bg-[#0f172a]/40 backdrop-blur-md rounded-3xl border border-white/5 shadow-lg overflow-hidden p-8 relative z-10">
      {/* Globe Placeholder - The GlobeScene will position the actual globe over this area */}
      <div 
        ref={ref} 
        className="relative w-full lg:w-1/2 aspect-square max-w-[600px] rounded-2xl bg-[#030712]/30 border border-white/5 overflow-hidden"
      >
        {/* Optional: Add a static placeholder or loading state here if needed */}
        <div className="absolute inset-0 flex items-center justify-center text-[#94a3b8] text-sm pointer-events-none">
            {/* Globe lands here */}
        </div>
        {/* Render children (StaticGlobe) if provided */}
        {props.children && (
            <div className="absolute inset-0 z-20">
                {props.children}
            </div>
        )}
      </div>

      {/* Locations List */}
      <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-30">
        {locations.map((loc) => (
          <motion.div
            key={loc.id}
            className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
              activeLocation === loc.id
                ? 'bg-[#2997ff]/20 border-[#2997ff]/50 shadow-[0_0_15px_rgba(41,151,255,0.2)]'
                : 'bg-[#0f172a]/50 border-white/5 hover:border-[#2997ff]/30 hover:bg-[#1e293b]'
            }`}
            onMouseEnter={() => setActiveLocation(loc.id)}
            onMouseLeave={() => setActiveLocation(null)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center gap-3 mb-2">
                <span className={`w-2 h-2 rounded-full shadow-[0_0_8px_currentColor] ${loc.type === 'hq' ? 'bg-[#2997ff] text-[#2997ff]' : 'bg-[#94a3b8] text-[#94a3b8]'}`} />
                <h4 className={`font-semibold text-sm ${activeLocation === loc.id ? 'text-[#2997ff]' : 'text-[#f8fafc]'}`}>
                    {loc.name}
                </h4>
            </div>
            <p className="text-xs text-[#94a3b8] pl-5">{loc.details}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
});

InteractiveMap.displayName = 'InteractiveMap';
export default InteractiveMap;
