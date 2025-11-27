import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import { products, Product } from '@/lib/products';

interface CategoryData {
  title: string;
  description: string;
  image: string; // Category hero image
  items: (string | Product)[];
}

export default function ProductsPage() {
  // Helper to find a product by partial name match or ID, or return the string if not found
  const findProduct = (name: string) => {
    return products.find(p => p.name === name || p.id === name) || name;
  };

  const categories: CategoryData[] = [
    {
      title: '1.6T / 800G High-Speed',
      description: 'Next-generation interconnects for AI Training Clusters and Hyperscale Cloud.',
      image: '/images/2. 800G OSFP SR8 (LO800-SR8M2C).jpg', // Use one of the real images as hero
      items: [
        findProduct('1.6T OSFP DR8'),
        findProduct('800G OSFP SR8'),
        findProduct('800G OSFP DR8'),
        '1.6T CPO',
        'Ultra-Low Power 800G Transceiver'
      ],
    },
    {
      title: '400G / 200G Data Center',
      description: 'High-density, low-power solutions for Spine-Leaf architectures.',
      image: '/images/5. 400G QSFP112 DR4 (LQ400-DR4MC).jpg',
      items: [
        findProduct('400G QSFP112 VR4'),
        findProduct('400G QSFP112 DR4'),
        findProduct('400G OSFP-RHS SR4'),
        findProduct('400G OSFP-RHS DR4'),
        findProduct('200G QSFP56 SR4'),
        '400G QSFP-DD SR8',
        '400G QSFP-DD DR4', 
        '400G OSFP DR4',
      ],
    },
    {
      title: '100G Transceiver (QSFP28)',
      description: 'Industry standard connectivity for enterprise and telecom.',
      image: '/images/optical module-1.png', // Fallback or generic
      items: ['100G QSFP28 SR4', '100G QSFP28 LR4 (10KM)', '100G QSFP28 CWDM4 (2KM)', '100G QSFP28 ZR4 (80KM)', '100G QSFP28 AOC (<100M)'],
    },
    {
      title: 'Legacy & Access (40G/25G/10G)',
      description: 'Reliable connectivity for edge and access networks.',
      image: '/images/optical module-3.png',
      items: [
        '40G QSFP+ SR4', '40G QSFP+ LR4',
        '25G SFP28 SR', '25G SFP28 LR',
        '10G SFP+ SR', '10G SFP+ LR'
      ],
    },
    {
      title: 'PON Optical Transceiver',
      description: 'FTTH and broadband access solutions.',
      image: '/images/optical module-5.png',
      items: ['10G EPON OLT/ONU', '10G Combo PON OLT', 'GPON OLT', 'XGS PON OLT'],
    },
  ];

  // Type guard to check if item is a Product object
  const isProduct = (item: string | Product): item is Product => {
    return (item as Product).id !== undefined;
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
        <div className="mb-24 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#f8fafc]">Product Portfolio</h1>
          <p className="text-[#94a3b8] max-w-2xl mx-auto text-xl font-light">
            Comprehensive range of high-speed optical transceivers from 1.6T to 10G, compatible with mainstream brands like NVIDIA, Huawei, and Cisco.
          </p>
        </div>

        <div className="space-y-32 mb-32">
          {categories.map((category, idx) => (
            <div key={category.title} className="group scroll-mt-32" id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Category Header & Image - Sticky on large screens */}
                <div className="lg:w-1/3 lg:sticky lg:top-32">
                  <div className="relative aspect-video w-full overflow-hidden rounded-3xl bg-[#0f172a]/50 mb-8 border border-white/10 shadow-lg group-hover:border-[#2997ff]/30 transition-colors duration-500">
                     <div className="absolute inset-0 flex items-center justify-center p-8 bg-transparent">
                        <Image
                          src={category.image}
                          alt={category.title}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_0_20px_rgba(255,255,255,0.05)]"
                        />
                     </div>
                     {/* Glow effect */}
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
                  </div>
                  <h2 className="text-3xl font-semibold text-[#f8fafc] mb-3">{category.title}</h2>
                  <p className="text-[#94a3b8] mb-6 leading-relaxed">{category.description}</p>
                </div>

                {/* Product Grid */}
                <div className="lg:w-2/3 w-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.items.map((item, i) => {
                      if (isProduct(item)) {
                        // Render full product card
                        return (
                          <Link href={`/products/${item.id}`} key={item.id} className="block h-full">
                            <div className="h-full p-6 bg-[#1e293b]/40 border border-white/5 rounded-2xl hover:shadow-[0_0_20px_rgba(41,151,255,0.15)] transition-all duration-300 flex flex-col justify-between group/card hover:border-[#2997ff]/40 hover:bg-[#1e293b]/80">
                              <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 relative rounded-lg bg-black/20 p-1">
                                    <Image src={item.image} alt={item.name} fill className="object-contain" />
                                </div>
                                <div className="p-2 bg-[#2997ff]/10 rounded-full text-[#2997ff] opacity-0 group-hover/card:opacity-100 transition-opacity">
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                              </div>
                              <div>
                                <h3 className="font-semibold text-[#f8fafc] text-lg mb-1 group-hover/card:text-[#2997ff] transition-colors">{item.name}</h3>
                                <p className="text-xs text-[#94a3b8] font-mono mb-3">{item.model}</p>
                                <ul className="space-y-1">
                                    {Object.entries(item.specs).slice(0, 2).map(([k, v]) => (
                                        <li key={k} className="text-xs text-gray-500 flex items-center gap-2">
                                            <span className="w-1 h-1 rounded-full bg-gray-600" /> {v}
                                        </li>
                                    ))}
                                </ul>
                              </div>
                            </div>
                          </Link>
                        );
                      } else {
                        // Render simple string item
                        return (
                          <div key={i} className="p-5 bg-[#0f172a]/30 border border-white/5 rounded-xl flex items-center justify-between group/item hover:border-[#2997ff]/20 hover:bg-[#1e293b]/30 transition-all">
                            <span className="font-medium text-[#94a3b8] group-hover/item:text-gray-200 transition-colors">{item}</span>
                            <CheckCircle2 className="w-4 h-4 text-[#2997ff]/50 group-hover/item:text-[#2997ff] transition-colors" />
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              {idx !== categories.length - 1 && <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mt-24" />}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
