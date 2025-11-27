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
              <h2 className="text-[#2997ff] font-semibold tracking-widest uppercase mb-6 text-sm">
                 Optical Technology Leadership
              </h2>
              <h2 className="text-5xl md:text-7xl font-bold text-[#f8fafc] mb-8 leading-tight tracking-tight">
                 Redefining <br className="hidden md:block" />
                 <span className="text-gradient">High-Speed Optical Connectivity.</span>
              </h2>
              <p className="text-[#94a3b8] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light">
                 We develop advanced optical transceiver technologies for next-generation AI, cloud, and telecom networks. Our work spans the entire opto-electrical chain—from high-speed optical chips to ultra-low-power module architectures and system-level optimization.
              </p>
           </div>

           {/* Technical Indicators Banner - Modernized */}
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 relative">
               {/* Glass background container */}
               <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md -z-10" />
               
               <div className="p-8 text-center relative group">
                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">30-70%</div>
                   <div className="text-xs md:text-sm text-[#94a3b8] uppercase tracking-widest font-medium group-hover:text-[#2997ff] transition-colors">Lower Power Consumption</div>
               </div>
               <div className="p-8 text-center relative border-l border-white/5 group">
                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">2-4 Orders</div>
                   <div className="text-xs md:text-sm text-[#94a3b8] uppercase tracking-widest font-medium group-hover:text-[#2997ff] transition-colors">Lower Bit Error Rate</div>
               </div>
               <div className="p-8 text-center relative border-l border-white/5 group">
                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">&lt; 0.5%</div>
                   <div className="text-xs md:text-sm text-[#94a3b8] uppercase tracking-widest font-medium group-hover:text-[#2997ff] transition-colors">Field Failure Rate</div>
               </div>
               <div className="p-8 text-center relative border-l border-white/5 group">
                   <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300">1.6 Tbps</div>
                   <div className="text-xs md:text-sm text-[#94a3b8] uppercase tracking-widest font-medium group-hover:text-[#2997ff] transition-colors">Max Bandwidth</div>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Next-Generation Optical Architecture */}
              <div className="apple-card p-10 hover:border-[#2997ff]/50 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100" />
                 
                 <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                     <Layers className="w-8 h-8 text-[#2997ff]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f8fafc]">Next-Gen Optical Architecture</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed text-lg">
                    Integrating optimized electrical and optical paths to deliver industry-leading performance in high-speed interconnects.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Ultra-low-power signal processing',
                        'Precision optical coupling and alignment',
                        'High-linearity modulation and photodetection',
                        'High-density OSFP / QSFP-DD designs',
                        'Thermal-optimized housings'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* High-Speed Optical Performance Engineering */}
              <div className="apple-card p-10 hover:border-[#2997ff]/50 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100" />

                 <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                     <Gauge className="w-8 h-8 text-[#2997ff]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f8fafc]">Performance Engineering</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed text-lg">
                    Full-link signal optimization for cleaner eye diagrams, lower jitter, and superior pre- and post-FEC performance.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Ultra-low-jitter SERDES tuning',
                        'Enhanced TDECQ control',
                        'Ultra-low BER across 400G / 800G / 1.6T',
                        'Optimized for long-reach optics'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* Thermal & Reliability Engineering */}
              <div className="apple-card p-10 hover:border-[#2997ff]/50 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100" />

                 <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                     <Thermometer className="w-8 h-8 text-[#2997ff]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f8fafc]">Thermal & Reliability</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed text-lg">
                    Exceptional thermal stability and extremely low failure rates for mission-critical infrastructure.
                 </p>
                 <ul className="space-y-4">
                    {[
                        'Advanced heat-spreader design',
                        'Temperature-aware bias control',
                        'Accelerated stress testing',
                        'Optical-grade inspection processes'
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#94a3b8] group-hover:text-[#f8fafc] transition-colors">
                            <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                            <span>{item}</span>
                        </li>
                    ))}
                 </ul>
              </div>

              {/* Ultra-Low-Power Optical Module Technology */}
              <div className="apple-card p-10 hover:border-[#2997ff]/50 group relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-[#2997ff]/5 rounded-full blur-3xl -mr-32 -mt-32 transition-opacity opacity-0 group-hover:opacity-100" />

                 <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.15)] group-hover:scale-110 transition-transform duration-500">
                     <Zap className="w-8 h-8 text-[#2997ff]" />
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold mb-6 text-[#f8fafc]">High-Density Efficiency</h3>
                 <p className="text-[#94a3b8] mb-8 leading-relaxed text-lg">
                    Designed for hyperscale AI clusters, cloud fabrics, and high-density switching environments.
                 </p>
                 <ul className="space-y-4">
                    {[
                        '30%–70% lower power consumption',
                        'Optimized driver & TIA architectures',
                        'Thermal balancing for dense racks',
                        'DSP-less optical link designs'
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
           <div className="apple-card p-10 md:p-12 mb-24 hover:border-[#2997ff]/50 group relative overflow-hidden">
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2997ff]/5 rounded-full blur-3xl -mr-64 -mt-64 pointer-events-none" />
               
               <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                   <div className="lg:w-1/3">
                       <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 border border-[#2997ff]/20 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.15)]">
                           <Cpu className="w-8 h-8 text-[#2997ff]" />
                       </div>
                       <h3 className="text-3xl font-bold mb-6 text-[#f8fafc]">System Integration Excellence</h3>
                       <p className="text-[#94a3b8] leading-relaxed text-lg">
                          Beyond module-level design, we ensure end-to-end system compatibility and performance, resulting in a true plug-and-perform experience across diverse infrastructures.
                       </p>
                   </div>
                   <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {[
                            'Host-platform tuning for leading compute systems',
                            'PAM4 and NRZ optical-link optimization',
                            'Backplane signal-integrity engineering',
                            'Retimer / CDR interface optimization',
                            'EMI / EMC system-wide compliance tuning',
                            'Interoperability with major switch vendors'
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-5 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors group/item">
                                <div className="w-8 h-8 rounded-full bg-[#2997ff]/20 flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-4 h-4 text-[#2997ff]" />
                                </div>
                                <span className="text-[#94a3b8] text-base font-medium group-hover/item:text-white transition-colors">{item}</span>
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
                          image: '/images/1. 1.6T OSFP DR8 (LO1600-DR8M2C).jpg' 
                      },
                      { 
                          title: '800G Optical Modules', 
                          subtitle: 'OSFP & QSFP-DD',
                          desc: 'High-density, low-latency solutions optimized for cloud computing and massive data throughput.', 
                          image: '/images/2. 800G OSFP SR8 (LO800-SR8M2C).jpg' 
                      },
                      { 
                          title: '400G Optical Modules', 
                          subtitle: 'Mainstream High-Performance',
                          desc: 'Industry-standard high-speed interconnects delivering reliable performance for enterprise and telecom networks.', 
                          image: '/images/5. 400G QSFP112 DR4 (LQ400-DR4MC).jpg' 
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

      {/* CTA - Premium Gradient Card */}
      <section className="py-24 relative z-10">
          <div className="container mx-auto px-6">
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0f172a] border border-white/10 text-center px-6 py-24 md:py-32">
                  {/* Animated Background Glows */}
                  <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#2997ff]/20 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none animate-pulse" />
                  <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00f0ff]/10 rounded-full blur-[120px] translate-y-1/2 pointer-events-none" />
                  
                  <div className="relative z-10 max-w-4xl mx-auto">
                      <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight drop-shadow-lg">
                          Ready to <span className="text-gradient">upgrade?</span>
                      </h2>
                      <p className="text-[#94a3b8] text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                          Join the world's leading hyperscalers and telecom providers. Experience the future of optical connectivity today.
                      </p>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                          <Link href="/contact" className="apple-button text-lg px-10 py-4 shadow-[0_0_30px_rgba(41,151,255,0.4)] hover:shadow-[0_0_50px_rgba(41,151,255,0.6)] flex items-center gap-2 group">
                              Get in Touch <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          <Link href="/products" className="px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white text-lg font-medium transition-all hover:scale-105 backdrop-blur-sm">
                              View Portfolio
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
