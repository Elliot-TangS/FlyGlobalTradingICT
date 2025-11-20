'use client';

import Hero from '@/components/Hero';
import InteractiveMap from '@/components/InteractiveMap';
import GlobeScene from '@/components/GlobeScene';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, DollarSign, Clock, Wrench, Truck, Cpu, Zap, Thermometer, Activity, Layers, Gauge, CheckCircle2, Network } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
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

      {/* 3D Globe Scene - Fixed Background that transitions */}
      <GlobeScene targetRef={mapContainerRef} />

      <Hero />

      {/* Global Vision, Localized Service (Interactive Map Section) */}
      <section className="py-32 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#94a3b8] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
              Our Reach
            </h2>
            <h2 className="text-5xl md:text-7xl font-semibold text-[#f8fafc] mb-8 leading-tight tracking-tight">
              Global Operations.
            </h2>
            <p className="text-[#f8fafc] text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-6 leading-tight tracking-tight">
              Headquartered in Hong Kong.
            </p>
            <p className="text-[#94a3b8] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              We operate regional centers in Shenzhen and Chengdu, with overseas offices in Malaysia, Poland, Russia, the USA, and Australia to serve you better.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
             {/* Pass the ref to the placeholder inside InteractiveMap */}
             <InteractiveMap ref={mapContainerRef} />
          </div>
        </div>
      </section>

      {/* Optical Technology Leadership */}
      <section className="py-32 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="text-[#94a3b8] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
                 Optical Technology Leadership
              </h2>
              <h2 className="text-5xl md:text-7xl font-semibold text-[#f8fafc] mb-8 leading-tight tracking-tight">
                 Redefining High-Speed Optical Connectivity.
              </h2>
              <p className="text-[#94a3b8] text-lg md:text-xl max-w-4xl mx-auto leading-relaxed font-normal">
                 We develop advanced optical transceiver technologies for next-generation AI, cloud, and telecom networks. Our work spans the entire opto-electrical chain—from high-speed optical chips to ultra-low-power module architectures and system-level optimization.
              </p>
           </div>

           {/* Technical Indicators Banner - Like Cisco/NVIDIA */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 border-y border-white/10 py-12">
               <div className="text-center border-r border-white/10 last:border-r-0">
                   <div className="text-4xl md:text-5xl font-bold text-[#2997ff] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]">30-70%</div>
                   <div className="text-sm text-[#94a3b8] uppercase tracking-wider font-medium">Lower Power Consumption</div>
               </div>
               <div className="text-center border-r border-white/10 last:border-r-0">
                   <div className="text-4xl md:text-5xl font-bold text-[#2997ff] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]">2-4 Orders</div>
                   <div className="text-sm text-[#94a3b8] uppercase tracking-wider font-medium">Lower Bit Error Rate (BER)</div>
               </div>
               <div className="text-center border-r border-white/10 last:border-r-0">
                   <div className="text-4xl md:text-5xl font-bold text-[#2997ff] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]">&lt; 0.5%</div>
                   <div className="text-sm text-[#94a3b8] uppercase tracking-wider font-medium">Field Failure Rate</div>
               </div>
               <div className="text-center">
                   <div className="text-4xl md:text-5xl font-bold text-[#2997ff] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]">1.6 Tbps</div>
                   <div className="text-sm text-[#94a3b8] uppercase tracking-wider font-medium">Max Bandwidth Per Module</div>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Next-Generation Optical Architecture */}
              <div className="apple-card p-10 hover:border-[#2997ff]/30 group">
                 <div className="w-14 h-14 rounded-2xl bg-transparent border border-[#2997ff]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(41,151,255,0.1)]">
                     <Layers className="w-8 h-8 text-[#2997ff] stroke-[1.5]" />
                 </div>
                 <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc]">Next-Generation High-Speed Optical Architecture</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed">
                    Our optical modules integrate optimized electrical and optical paths to deliver industry-leading performance in high-speed interconnects.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Ultra-low-power signal processing',
                        'Precision optical coupling and alignment',
                        'High-linearity modulation and photodetection',
                        'High-density OSFP / QSFP-DD / QSFP112 mechanical design',
                        'Thermal-optimized housings for reliable operation under load'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* High-Speed Optical Performance Engineering */}
              <div className="apple-card p-10 hover:border-[#2997ff]/30 group">
                 <div className="w-14 h-14 rounded-2xl bg-transparent border border-[#2997ff]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(41,151,255,0.1)]">
                     <Gauge className="w-8 h-8 text-[#2997ff] stroke-[1.5]" />
                 </div>
                 <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc]">High-Speed Optical Performance Engineering</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed">
                    We apply full-link signal optimization to achieve cleaner eye diagrams, lower jitter, and superior pre- and post-FEC performance across all high-speed data rates.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Ultra-low-jitter SERDES tuning',
                        'Enhanced TDECQ and extinction-ratio control',
                        'Ultra-low BER across 200G / 400G / 800G / 1.6T',
                        'Power-budget optimization for both short-reach and long-reach optics'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* Thermal & Reliability Engineering */}
              <div className="apple-card p-10 hover:border-[#2997ff]/30 group">
                 <div className="w-14 h-14 rounded-2xl bg-transparent border border-[#2997ff]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(41,151,255,0.1)]">
                     <Thermometer className="w-8 h-8 text-[#2997ff] stroke-[1.5]" />
                 </div>
                 <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc]">Advanced Optical Packaging & Architecture</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed">
                    High-speed optical modules demand exceptional thermal stability and extremely low failure rates.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Advanced thermal path and heat-spreader design',
                        'Temperature-aware bias and modulation control',
                        'Aging simulations and accelerated stress testing',
                        'Cleanroom manufacturing and optical-grade inspection processes'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* Ultra-Low-Power Optical Module Technology */}
              <div className="apple-card p-10 hover:border-[#2997ff]/30 group">
                 <div className="w-14 h-14 rounded-2xl bg-transparent border border-[#2997ff]/30 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(41,151,255,0.1)]">
                     <Zap className="w-8 h-8 text-[#2997ff] stroke-[1.5]" />
                 </div>
                 <h3 className="text-2xl font-semibold mb-6 text-[#f8fafc]">High-Density Optical Interconnect Architecture</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed">
                    Designed for hyperscale AI clusters, cloud fabrics, and high-density switching environments.
                 </p>
                 <ul className="space-y-4">
                    {[
                        '30%–70% lower power consumption versus conventional designs',
                        'Optimized driver, TIA, and power-delivery architectures',
                        'Thermal and electrical balancing for dense rack deployments',
                        'DSP-less optical link designs where applicable'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* System-Level Integration Excellence - Full Width */}
           <div className="apple-card p-10 mb-24 hover:border-[#2997ff]/30 group">
               <div className="flex flex-col md:flex-row gap-10 items-start">
                   <div className="md:w-1/3">
                       <div className="w-14 h-14 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-8 shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                           <Cpu className="w-8 h-8 text-[#2997ff]" />
                       </div>
                       <h3 className="text-2xl font-semibold mb-4 text-[#f8fafc]">System-Level Integration Excellence</h3>
                       <p className="text-[#94a3b8] leading-relaxed">
                          Beyond module-level design, we ensure end-to-end system compatibility and performance, resulting in a true plug-and-perform experience across diverse infrastructures.
                       </p>
                   </div>
                   <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            'Host-platform tuning for leading compute and networking systems',
                            'PAM4 and NRZ optical-link optimization',
                            'Backplane and midplane signal-integrity engineering',
                            'Retimer / CDR interface optimization',
                            'EMI / EMC system-wide compliance tuning'
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-[#0f172a]/30 rounded-xl border border-white/5">
                                <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                                <span className="text-[#94a3b8] text-sm group-hover:text-[#f8fafc] transition-colors">{item}</span>
                            </div>
                        ))}
                   </div>
               </div>
           </div>

           {/* Full-Speed Optical Portfolio Banner */}
           <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0f172a] to-[#1e293b] border border-white/10 p-12 mb-24">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[#2997ff]/5 blur-3xl" />
                <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <h3 className="text-3xl font-semibold mb-4 text-[#f8fafc]">Full-Speed Optical Portfolio</h3>
                        <p className="text-[#94a3b8] text-lg leading-relaxed mb-8">
                            Our technology supports the industry’s full performance roadmap, engineered for AI/HPC clusters, cloud data centers, routing and switching platforms, metro networks, and access networks.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            {['1.6T OSFP', '800G OSFP / QSFP-DD', '400G QSFP112', '200G QSFP56', '50G PON'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-[#2997ff] text-sm font-medium">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                        {/* Visual representation of portfolio */}
                         <div className="p-6 bg-[#030712]/50 rounded-2xl border border-white/5 text-center">
                             <div className="text-4xl font-bold text-[#f8fafc] mb-1">1.6T</div>
                             <div className="text-xs text-[#94a3b8] uppercase tracking-wider">Next-Gen AI</div>
                         </div>
                         <div className="p-6 bg-[#030712]/50 rounded-2xl border border-white/5 text-center">
                             <div className="text-4xl font-bold text-[#f8fafc] mb-1">800G</div>
                             <div className="text-xs text-[#94a3b8] uppercase tracking-wider">Hyperscale</div>
                         </div>
                         <div className="p-6 bg-[#030712]/50 rounded-2xl border border-white/5 text-center">
                             <div className="text-4xl font-bold text-[#f8fafc] mb-1">400G</div>
                             <div className="text-xs text-[#94a3b8] uppercase tracking-wider">Cloud Fabric</div>
                         </div>
                         <div className="p-6 bg-[#030712]/50 rounded-2xl border border-white/5 text-center">
                             <div className="text-4xl font-bold text-[#f8fafc] mb-1">PON</div>
                             <div className="text-xs text-[#94a3b8] uppercase tracking-wider">Access Network</div>
                         </div>
                    </div>
                </div>
           </div>

           {/* Joint Technical Cooperation With (Preserved & Moved) */}
           <div className="text-center">
              <p className="text-xs font-semibold tracking-widest text-[#94a3b8] uppercase mb-10">Joint Technical Cooperation With</p>
              <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 text-[#f8fafc] font-medium text-lg opacity-80">
                 <span>Hamamatsu</span>
                 <span>Samsung Semiconductor</span>
                 <span>Semtech</span>
                 <span>China Unicom Research Institute</span>
                 <span>National Supercomputing Center (NSCC)</span>
              </div>
           </div>
        </div>
      </section>

      {/* Core Products & Solutions */}
      <section className="py-32 bg-transparent relative z-10">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                  <div className="mb-8 md:mb-0">
                      <h2 className="text-[#94a3b8] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
                         Portfolio
                      </h2>
                      <h2 className="text-5xl md:text-7xl font-semibold text-[#f8fafc] mb-4 leading-tight tracking-tight">
                         Core Products.
                      </h2>
                      <p className="text-[#94a3b8] text-lg md:text-xl leading-relaxed font-normal">
                         Premium High-Speed Optical Transceivers.
                      </p>
                  </div>
                  <Link href="/products" className="hidden md:flex items-center gap-2 text-[#2997ff] hover:text-[#00f0ff] hover:underline font-medium text-lg group">
                      View All Products <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { 
                          title: '1.6T Optical Modules', 
                          subtitle: 'Next-Gen AI Clusters',
                          desc: 'Ultra-high bandwidth for next-generation AI and hyperscale data center networks. Defining the future of connectivity.', 
                          image: '/images/optical module-1.png' 
                      },
                      { 
                          title: '800G Optical Modules', 
                          subtitle: 'OSFP & QSFP-DD',
                          desc: 'High-density, low-latency solutions optimized for cloud computing and massive data throughput.', 
                          image: '/images/optical module-2.png' 
                      },
                      { 
                          title: '400G Optical Modules', 
                          subtitle: 'Mainstream High-Performance',
                          desc: 'Industry-standard high-speed interconnects delivering reliable performance for enterprise and telecom networks.', 
                          image: '/images/optical module-3.png' 
                      }
                  ].map((item, i) => (
                       <Link href="/products" key={i} className="apple-card p-8 flex flex-col h-full group cursor-pointer hover:border-[#2997ff]/30">
                          <div className="mb-8 relative h-64 w-full bg-[#0f172a]/50 rounded-2xl flex items-center justify-center overflow-hidden border border-white/5">
                              <Image 
                                src={item.image} 
                                alt={item.title}
                                fill
                                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                              />
                          </div>
                          <div>
                              <h3 className="text-2xl font-semibold text-[#f8fafc] mb-2 group-hover:text-[#2997ff] transition-colors">{item.title}</h3>
                              <p className="text-[#2997ff] text-sm font-medium mb-3 tracking-wide">{item.subtitle}</p>
                              <p className="text-[#94a3b8] text-base leading-relaxed mb-6">{item.desc}</p>
                          </div>
                          <div className="mt-auto flex items-center text-[#2997ff] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                              Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                      </Link>
                  ))}
              </div>
              
              <div className="mt-16 text-center md:hidden">
                  <Link href="/products" className="inline-flex items-center gap-2 text-[#2997ff] font-medium text-lg">
                      View All Products <ArrowRight className="w-5 h-5" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Partners - Minimalist */}
      <section className="py-32 bg-transparent relative z-10">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-sm font-semibold tracking-widest text-[#94a3b8] uppercase mb-16">Trusted by Industry Leaders</h2>
              <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                  {['Partner-huawei.png', 'Partner-intel.png', 'Broadcom.png', 'NVIDIA.png', 'Mellanox.png'].map((logo) => (
                      <div key={logo} className="relative h-12 w-36 grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition-all duration-500">
                          <Image src={`/images/${logo}`} alt="Partner" fill className="object-contain" />
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA - Simple & Direct */}
      <section className="py-40 bg-transparent text-center relative z-10">
          <div className="container mx-auto px-6">
              <h2 className="section-title mb-8">Ready to upgrade?</h2>
              <p className="section-desc mb-12 max-w-2xl mx-auto">
                  Contact our global team today for premium optical solutions tailored to your needs.
              </p>
              <Link href="/contact" className="apple-button text-lg px-12 py-4 shadow-lg hover:shadow-xl">
                  Get in Touch
              </Link>
          </div>
      </section>
    </main>
  );
}
