'use client';

import Hero from '@/components/Hero';
import InteractiveMap from '@/components/InteractiveMap';
import GlobeScene from '@/components/GlobeScene';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, DollarSign, Clock, Wrench, Truck } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* 3D Globe Scene - Fixed Background that transitions */}
      <GlobeScene targetRef={mapContainerRef} />

      <Hero />

      {/* Global Vision, Localized Service (Interactive Map Section) */}
      <section className="py-32 bg-transparent relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-[#1d1d1f] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
              Our Reach
            </h2>
            <h2 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] mb-8 leading-tight tracking-tight">
              Global Operations.
            </h2>
            <p className="text-[#1d1d1f] text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-6 leading-tight tracking-tight">
              Headquartered in Hong Kong.
            </p>
            <p className="text-[#86868b] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
              We operate regional centers in Shenzhen and Chengdu, with overseas offices in Malaysia, Poland, Russia, the USA, and Australia to serve you better.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
             {/* Pass the ref to the placeholder inside InteractiveMap */}
             <InteractiveMap ref={mapContainerRef} />
          </div>
        </div>
      </section>

      {/* Strategic Partner Section */}
      <section className="py-32 bg-[#f5f5f7] relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-[#1d1d1f] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
                 Collaboration
              </h2>
              <h2 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] mb-8 leading-tight tracking-tight">
                 Strategic Innovation Partner.
              </h2>
              <p className="text-[#86868b] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
                 Collaborating with a leading photonic technology company specializing in advanced opto-chips and optical transceivers for hyperscale AI computing.
              </p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
              <div className="apple-card p-10 flex flex-col h-full">
                 <h3 className="text-2xl font-semibold mb-4 text-[#0066cc]">R&D Leadership</h3>
                 <p className="text-[#86868b] leading-relaxed text-lg">
                    Guided by Silicon Valley optoelectronics pioneers and award-winning scientists. The company holds a strong track record in cutting-edge optical chips, including multiple world-first innovations.
                 </p>
              </div>
              <div className="apple-card p-10 flex flex-col h-full">
                 <h3 className="text-2xl font-semibold mb-4 text-[#0066cc]">Advanced Portfolio</h3>
                 <p className="text-[#86868b] leading-relaxed text-lg">
                    A full portfolio of 200G–1.6T ultra-low-power modules for AI data centers, national supercomputing centers, and cloud data centers.
                 </p>
              </div>
              <div className="apple-card p-10 flex flex-col h-full">
                 <h3 className="text-2xl font-semibold mb-4 text-[#0066cc]">Industry Recognition</h3>
                 <p className="text-[#86868b] leading-relaxed text-lg">
                    Ranked 1st among 15,500+ enterprises in the China Innovation & Entrepreneurship Competition and recognized as a Hidden Champion Enterprise in Guangzhou.
                 </p>
              </div>
           </div>
           
           {/* Tech Partners Logos or Text List */}
           <div className="text-center">
              <p className="text-xs font-semibold tracking-widest text-[#86868b] uppercase mb-8">Joint Technical Cooperation With</p>
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-[#1d1d1f] font-medium text-lg">
                 <span>Hamamatsu</span>
                 <span>Samsung Semiconductor</span>
                 <span>Semtech</span>
                 <span>China Unicom Research Institute</span>
                 <span>National Supercomputing Center (NSCC)</span>
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us - Apple Style Cards */}
      <section className="py-32 bg-[#f5f5f7] relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-20">
              <h2 className="text-[#1d1d1f] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
                 Our Advantage
              </h2>
              <h2 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] mb-8 leading-tight tracking-tight">
                 Why Choose Us.
              </h2>
              <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
                  Excellence in every connection.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
               {[
                   { icon: <ShieldCheck />, title: 'Reliable Certified Products', desc: 'Sourced from authorized original manufacturers. ISO, RoHS, UL, FCC compliant.' },
                   { icon: <DollarSign />, title: 'Competitive Pricing', desc: 'Optimized costs through global supply chain economies of scale.' },
                   { icon: <Clock />, title: 'Fast-Responsive Service', desc: 'Localized support from our five global regional offices.' },
                   { icon: <Wrench />, title: 'Professional Support', desc: 'Comprehensive technical guidance for compliance and integration.' },
                   { icon: <Truck />, title: 'Stable Supply Chain', desc: 'Long-term strategic cooperation ensuring business continuity.' }
               ].map((item, i) => (
                   <div key={i} className="apple-card p-8 flex flex-col items-center text-center h-full">
                       <div className="w-12 h-12 text-[#0066cc] mb-6">
                           {item.icon}
                       </div>
                       <h3 className="text-lg font-semibold mb-3 text-[#1d1d1f]">{item.title}</h3>
                       <p className="text-sm text-[#86868b] leading-relaxed">{item.desc}</p>
                   </div>
               ))}
           </div>
        </div>
      </section>

      {/* Core Products & Solutions */}
      <section className="py-32 bg-white relative z-10">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                  <div className="mb-8 md:mb-0">
                      <h2 className="text-[#1d1d1f] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
                         Portfolio
                      </h2>
                      <h2 className="text-5xl md:text-7xl font-semibold text-[#1d1d1f] mb-4 leading-tight tracking-tight">
                         Core Products.
                      </h2>
                      <p className="text-[#86868b] text-lg md:text-xl leading-relaxed font-normal">
                         Premium High-Speed Optical Transceivers.
                      </p>
                  </div>
                  <Link href="/products" className="hidden md:flex items-center gap-2 text-[#0066cc] hover:underline font-medium text-lg group">
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
                       <Link href="/products" key={i} className="apple-card p-8 flex flex-col h-full group cursor-pointer hover:border-blue-100">
                          <div className="mb-8 relative h-64 w-full bg-[#fbfbfd] rounded-2xl flex items-center justify-center overflow-hidden">
                              <Image 
                                src={item.image} 
                                alt={item.title}
                                fill
                                className="object-contain p-8 transition-transform duration-700 group-hover:scale-110"
                              />
                          </div>
                          <div>
                              <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-2">{item.title}</h3>
                              <p className="text-[#0066cc] text-sm font-medium mb-3 tracking-wide">{item.subtitle}</p>
                              <p className="text-[#86868b] text-base leading-relaxed mb-6">{item.desc}</p>
                          </div>
                          <div className="mt-auto flex items-center text-[#0066cc] text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                              Learn more <ArrowRight className="w-4 h-4 ml-1" />
                          </div>
                      </Link>
                  ))}
              </div>
              
              <div className="mt-16 text-center md:hidden">
                  <Link href="/products" className="inline-flex items-center gap-2 text-[#0066cc] font-medium text-lg">
                      View All Products <ArrowRight className="w-5 h-5" />
                  </Link>
              </div>
          </div>
      </section>

      {/* Partners - Minimalist */}
      <section className="py-32 bg-[#f5f5f7] relative z-10">
          <div className="container mx-auto px-6 text-center">
              <h2 className="text-sm font-semibold tracking-widest text-[#86868b] uppercase mb-16">Trusted by Industry Leaders</h2>
              <div className="flex flex-wrap justify-center items-center gap-16 opacity-50 hover:opacity-100 transition-opacity duration-500">
                  {['Partner-huawei.png', 'Partner-intel.png', 'Broadcom.png', 'NVIDIA.png', 'Mellanox.png'].map((logo) => (
                      <div key={logo} className="relative h-12 w-36 grayscale hover:grayscale-0 transition-all duration-500">
                          <Image src={`/images/${logo}`} alt="Partner" fill className="object-contain" />
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* CTA - Simple & Direct */}
      <section className="py-40 bg-white text-center relative z-10">
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
