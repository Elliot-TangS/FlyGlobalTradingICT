'use client';

import Image from 'next/image';
import { Globe2, Mail, Phone, MapPin, Copy, Check } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const locations = [
  {
    city: "Hong Kong, China",
    role: "Asia Headquarters",
    address: "RM 3, Unit P, 1/F, Kaiser Estate, Phase 3, Nos. 9-11 Hok Yuen Street, Hunghom, Kowloon, HK",
    phone: "+852 4609 0287",
    email: "info@flygtl-ict.com",
    coordinate: "Asia Pacific",
    image: "/images/Hongkong.jpg"
  },
  {
    city: "Arizona, USA",
    role: "North America Business Headquarters",
    address: "4539 N 22ND ST, STE N, PHOENIX, AZ 85016",
    phone: "+1 (223) 267-7777",
    email: "info@flygtl-ict.com",
    coordinate: "North America",
    image: "/images/USA Arizona .jpeg"
  },
  {
    city: "Selangor, Malaysia",
    role: "Southeast Asia Market Operations Center",
    address: "Sky Park One City, Jalan USJ 25/1B, 47650 Subang Jaya, Selangor, Malaysia",
    email: "info@flygtl-ict.com",
    coordinate: "Southeast Asia",
    image: "/images/Malaysia Johor.jpg"
  },
  {
    city: "Brisbane, Australia",
    role: "Oceania Strategic Base",
    address: "Sunnybank Hills, Queensland 4109, Australia",
    email: "info@flygtl-ict.com",
    coordinate: "Oceania",
    image: "/images/Australia Sydney.jpeg"
  },
  {
    city: "Warsaw, Poland",
    role: "East-West Europe Hub",
    coordinate: "Europe",
    image: "/images/Poland Warsaw.jpeg"
  },
  {
    city: "Moscow, Russia",
    role: "Eurasian Market Service Node",
    coordinate: "Eurasia",
    image: "/images/Russia Moscow.jpeg"
  }
];

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (loc: typeof locations[0], index: number) => {
    const textToCopy = `
City: ${loc.city}
Role: ${loc.role}
${loc.address ? `Address: ${loc.address}` : ''}
${loc.phone ? `Phone: ${loc.phone}` : ''}
${loc.email ? `Email: ${loc.email}` : ''}
    `.trim();

    navigator.clipboard.writeText(textToCopy);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-12 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]",
            "fill-gray-300/40"
          )}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight text-[#f8fafc]">
              Get in Touch
            </h1>
            <p className="text-[#94a3b8] text-xl max-w-3xl mx-auto leading-relaxed font-light mb-8">
              Ready to upgrade your infrastructure? Our global team is here to provide premium optical solutions tailored to your needs.
            </p>
             <p className="text-[#94a3b8] max-w-2xl mx-auto">
              Strategically positioned across key markets to serve our partners worldwide.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {locations.map((loc, index) => (
              <div 
                key={index} 
                className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10 hover:border-[#2997ff]/50 transition-all duration-500 shadow-2xl cursor-pointer"
                onClick={() => handleCopy(loc, index)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    src={loc.image}
                    alt={loc.city}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500" />
                </div>
                
                {/* Copy Overlay Feedback */}
                <AnimatePresence>
                  {copiedIndex === index && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                    >
                      <div className="flex flex-col items-center text-white">
                        <div className="w-16 h-16 rounded-full bg-[#2997ff] flex items-center justify-center mb-4 shadow-[0_0_20px_#2997ff]">
                          <Check className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-xl font-medium tracking-wide">Info Copied</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <div className="mb-auto flex justify-between items-start">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-4 shadow-lg">
                          <Globe2 className="w-3.5 h-3.5 text-[#2997ff]" />
                          <span className="text-xs font-medium tracking-wider text-white uppercase">
                              {loc.coordinate}
                          </span>
                      </div>
                      <div className="p-2 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
                         <Copy className="w-4 h-4 text-white" />
                      </div>
                  </div>

                  <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-[#2997ff] transition-colors duration-300">{loc.city}</h3>
                  <p className="text-gray-300 font-medium mb-6 text-lg border-l-2 border-[#2997ff] pl-4">{loc.role}</p>
                  
                  {(loc.address || loc.email || loc.phone) && (
                    <div className="space-y-3 pt-6 border-t border-white/10 bg-black/20 -mx-8 px-8 pb-0 backdrop-blur-sm">
                      {loc.address && (
                        <div className="flex items-start gap-3 group/item">
                          <MapPin className="w-4 h-4 text-[#2997ff] mt-1 shrink-0" />
                          <p className="text-sm text-gray-400 group-hover/item:text-white transition-colors line-clamp-2">{loc.address}</p>
                        </div>
                      )}
                      {loc.phone && (
                        <div className="flex items-center gap-3 group/item">
                          <Phone className="w-4 h-4 text-[#2997ff] shrink-0" />
                          <p className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{loc.phone}</p>
                        </div>
                      )}
                      {loc.email && (
                        <div className="flex items-center gap-3 group/item">
                          <Mail className="w-4 h-4 text-[#2997ff] shrink-0" />
                          <p className="text-sm text-gray-400 group-hover/item:text-white transition-colors">{loc.email}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
