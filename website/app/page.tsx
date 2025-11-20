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

      {/* Core Value Proposition (formerly Global Operations / Why Choose Us) */}
      <section className="py-32 bg-white relative z-10">
        <div className="container mx-auto px-6">
           <div className="text-center mb-24">
              <h2 className="section-title mb-6">Core Value Proposition</h2>
              <p className="section-desc max-w-3xl mx-auto">
                  Connecting the world with ultra-low-power, ultra-high-bandwidth optical technology.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
               <div className="apple-card p-10 flex flex-col justify-center h-full bg-[#f5f5f7]">
                   <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Unmatched Power Efficiency</h3>
                   <p className="text-[#86868b] leading-relaxed text-lg">
                       Our 200G through 1.6T modules deliver up to 70% lower power consumption versus legacy solutions, significantly reducing operational costs.
                   </p>
               </div>
               <div className="apple-card p-10 flex flex-col justify-center h-full bg-[#f5f5f7]">
                   <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">National-Grade Qualification</h3>
                   <p className="text-[#86868b] leading-relaxed text-lg">
                       Sole supplier to a national supercomputing centre, demonstrating industry-leading credibility and performance stability.
                   </p>
               </div>
               <div className="apple-card p-10 flex flex-col justify-center h-full bg-[#f5f5f7]">
                   <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Full Stack Portfolio</h3>
                   <p className="text-[#86868b] leading-relaxed text-lg">
                       From 200G to 1.6T, supporting AI clusters, cloud hyperscale, telecom backbone & FTTx with seamless integration.
                   </p>
               </div>
               <div className="apple-card p-10 flex flex-col justify-center h-full bg-[#f5f5f7]">
                   <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Global Reach, Local Service</h3>
                   <p className="text-[#86868b] leading-relaxed text-lg">
                       HQ in Hong Kong plus regional hubs in Shenzhen, Chengdu, Malaysia, Poland, USA and Australia ensure rapid response and regional support.
                   </p>
               </div>
           </div>
        </div>
      </section>

      {/* Core Products & Solutions */}
      <section className="py-32 bg-white relative z-10">
          <div className="container mx-auto px-6">
              <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                  <div className="mb-8 md:mb-0">
                      <h2 className="section-title mb-4">Core Products</h2>
                      <p className="section-desc">Premium High-Speed Optical Transceivers.</p>
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
                          desc: 'Designed for next-gen AI clusters, offering ultra-high bandwidth and ultra-low latency to power the hyperscale architectures of tomorrow.', 
                          image: '/images/optical module-1.png' 
                      },
                      { 
                          title: '800G Optical Modules', 
                          subtitle: 'OSFP & QSFP-DD',
                          desc: 'OSFP & QSFP-DD form-factors optimized for high-density cloud interconnects. Next-level performance in compact footprint.', 
                          image: '/images/optical module-2.png' 
                      },
                      { 
                          title: '400G Optical Modules', 
                          subtitle: 'Mainstream High-Performance',
                          desc: 'The mainstream high-performance backbone solution—delivering enterprise-grade reliability and industry-standard compatibility.', 
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

      {/* Technology Excellence Section */}
      <section className="py-32 bg-[#f5f5f7] relative z-10">
          <div className="container mx-auto px-6">
             <div className="text-center mb-24">
                <h2 className="section-title mb-6">Technology Excellence</h2>
                <p className="section-desc max-w-3xl mx-auto">
                   Engineering team comprised of Silicon Valley pioneers and award-winning scientists.
                </p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto text-center">
                 <div>
                     <div className="text-5xl font-bold text-[#0066cc] mb-6">First</div>
                     <h3 className="text-xl font-semibold mb-4 text-[#1d1d1f]">Commercial 1577 nm BH-DML</h3>
                     <p className="text-[#86868b] leading-relaxed">Setting a new industry benchmark for performance and reliability.</p>
                 </div>
                 <div>
                     <div className="text-5xl font-bold text-[#0066cc] mb-6">Low</div>
                     <h3 className="text-xl font-semibold mb-4 text-[#1d1d1f]">Ultra-low TDECQ Design</h3>
                     <p className="text-[#86868b] leading-relaxed">Achieving industry-leading signal integrity for critical data transmission.</p>
                 </div>
                 <div>
                     <div className="text-5xl font-bold text-[#0066cc] mb-6">98%</div>
                     <h3 className="text-xl font-semibold mb-4 text-[#1d1d1f]">Production Yield Rate</h3>
                     <p className="text-[#86868b] leading-relaxed">Class 1K-100K cleanrooms with field-failure rates below 0.1%.</p>
                 </div>
             </div>
          </div>
      </section>

      {/* Industry Validation & Partner Network */}
      <section className="py-32 bg-white relative z-10">
          <div className="container mx-auto px-6">
             <div className="bg-[#1d1d1f] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
                 <div className="relative z-10">
                     <h2 className="text-3xl md:text-5xl font-semibold mb-8">Industry Validation & Partner Network</h2>
                     <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed">
                         Ranked #1 out of 15,500+ enterprises in the China Innovation & Entrepreneurship Competition. Recognized as a “Hidden Champion” in Guangzhou.
                     </p>
                     <p className="text-gray-400 max-w-3xl mx-auto mb-16">
                         We partner with global leaders—including Hamamatsu Photonics, Semtech Corporation, Samsung Semiconductor and China Unicom Research Institute—as well as supplying modules into national supercomputing centres.
                     </p>
                     
                     <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
                        {/* Use white logos or filter existing ones to white/light */}
                        {['Partner-huawei.png', 'Partner-intel.png', 'Broadcom.png', 'NVIDIA.png', 'Mellanox.png'].map((logo) => (
                            <div key={logo} className="relative h-10 w-32 brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-500">
                                <Image src={`/images/${logo}`} alt="Partner" fill className="object-contain" />
                            </div>
                        ))}
                     </div>
                 </div>
             </div>
          </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-32 bg-[#f5f5f7] relative z-10">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                 <h2 className="section-title mb-6">Real-World Use Cases</h2>
                 <p className="section-desc max-w-3xl mx-auto">
                    Powering the infrastructure of the future.
                 </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  <div className="apple-card p-10 bg-white">
                      <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Hyperscale AI Data Centres</h3>
                      <p className="text-[#86868b] leading-relaxed">
                          Deploy our 1.6T modules in high-density racks to accelerate next-gen training and inference workloads.
                      </p>
                  </div>
                  <div className="apple-card p-10 bg-white">
                      <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Cloud & Colocation Operators</h3>
                      <p className="text-[#86868b] leading-relaxed">
                          Leverage 800G solutions for low-latency, high-throughput interconnects with minimal power and space cost.
                      </p>
                  </div>
                  <div className="apple-card p-10 bg-white">
                      <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">Telecom Backbone & 5G Edge</h3>
                      <p className="text-[#86868b] leading-relaxed">
                          Our 400G and 200G modules offer hardened performance with global telecom compliance.
                      </p>
                  </div>
                  <div className="apple-card p-10 bg-white">
                      <h3 className="text-2xl font-semibold mb-4 text-[#1d1d1f]">FTTx & PON Networks</h3>
                      <p className="text-[#86868b] leading-relaxed">
                          Pioneering the 1577 nm BH-DML solution for seamless fibre-to-the-home and edge connectivity.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Manufacturing & QA */}
      <section className="py-32 bg-white relative z-10">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                  <div>
                      <h2 className="section-title mb-8">Manufacturing & Quality Assurance</h2>
                      <p className="section-desc mb-8">
                          With an integrated operations centre in Shenzhen and regional production and R&D in Chengdu, our manufacturing footprint spans &gt; 50,000 m² of Class-1,000/10,000/100,000 cleanroom facilities.
                      </p>
                      <p className="section-desc mb-12">
                          We adhere to ISO 9001, RoHS, UL and FCC standards, with a resilient global supply-chain ensuring continuity in large-scale deployments.
                      </p>
                      <ul className="space-y-4 text-[#86868b] font-medium text-lg">
                          <li className="flex items-center gap-3"><ShieldCheck className="text-[#0066cc]" /> ISO 9001 Certified</li>
                          <li className="flex items-center gap-3"><ShieldCheck className="text-[#0066cc]" /> RoHS Compliant</li>
                          <li className="flex items-center gap-3"><ShieldCheck className="text-[#0066cc]" /> UL & FCC Approved</li>
                      </ul>
                  </div>
                  <div className="bg-[#f5f5f7] rounded-[40px] p-12 flex flex-col justify-center h-full min-h-[400px] text-center">
                      <Wrench className="w-24 h-24 text-[#0066cc] mx-auto mb-8 opacity-80" />
                      <div className="text-6xl font-bold text-[#1d1d1f] mb-4">50,000+ m²</div>
                      <div className="text-xl text-[#86868b]">Cleanroom Facilities</div>
                  </div>
              </div>
          </div>
      </section>

      {/* About Us & Contact - Simple & Direct */}
      <section className="py-40 bg-[#f5f5f7] text-center relative z-10">
          <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto mb-24">
                  <h2 className="section-title mb-8">About Us</h2>
                  <p className="section-desc mb-12">
                      Founded in Hong Kong, with operations and R&D hubs across China, Southeast Asia, Europe, USA and Australia, we serve clients in more than 30 countries. Our executive leadership includes former Fortune 500 technologists, Silicon Valley engineers and award-winning scientists. Together, we are building the optical-foundation of the AI era.
                  </p>
              </div>

              <div className="max-w-4xl mx-auto bg-white rounded-[40px] p-16 shadow-xl">
                  <h2 className="text-4xl font-semibold mb-8 text-[#1d1d1f]">Ready to elevate your connectivity?</h2>
                  <p className="text-xl text-[#86868b] mb-12 font-light">
                      Contact our global team for customised optical solutions.
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 text-lg font-medium text-[#1d1d1f]">
                      <div>HK (HQ): <span className="text-[#0066cc]">+852 609 0287</span></div>
                      <div>USA: <span className="text-[#0066cc]">+1 (223) 267-7777</span></div>
                      <div>Email: <a href="mailto:info@flygtl-ict.com" className="text-[#0066cc] hover:underline">info@flygtl-ict.com</a></div>
                  </div>
                  <Link href="/contact" className="apple-button text-lg px-12 py-4 shadow-lg hover:shadow-xl">
                      Get in Touch
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
