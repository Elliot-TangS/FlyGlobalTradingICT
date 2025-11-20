import Image from 'next/image';
import { Globe, Award, Users, Zap, GraduationCap, Briefcase } from 'lucide-react';
import InteractiveMap from '@/components/InteractiveMap';
import StaticGlobe from '@/components/StaticGlobe';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-12 overflow-hidden">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24 relative">
        <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight text-black">
                Global Vision. <br/>
                <span className="text-gray-500">Localized Service.</span>
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed mb-6 font-light">
                Founded and led by a team of professionals with experience in Fortune Global 500 companies, Shenzhen Huamao Technology Co., Ltd. provides comprehensive, end-to-end distribution services for cutting-edge ICT components.
            </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="container mx-auto px-6 mb-32">
          <div className="max-w-6xl mx-auto">
              <InteractiveMap>
                  <StaticGlobe />
              </InteractiveMap>
          </div>
      </section>

      {/* International Elite Team */}
      <section className="py-32 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="section-title mb-8">International Elite Team</h2>
                      <p className="section-desc mb-8">
                          Huamao Technology has a core team of 20+ members and global partners. Most members graduated from well-known universities and hold MBA or EMBA degrees, possessing a broad international outlook and strong cross-cultural management capabilities.
                      </p>
                      <ul className="space-y-8">
                          <li className="flex items-start gap-6">
                              <div className="p-4 bg-white rounded-full shadow-sm">
                                <GraduationCap className="w-6 h-6 text-[#0066cc]" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-[#1d1d1f] text-xl mb-2">Top Universities</h4>
                                  <p className="text-[#86868b] leading-relaxed">Huazhong University of Science and Technology, Sichuan University, USTB, Arizona State University, The University of Sydney.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-6">
                              <div className="p-4 bg-white rounded-full shadow-sm">
                                <Briefcase className="w-6 h-6 text-[#0066cc]" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-[#1d1d1f] text-xl mb-2">Fortune Global 500 Experience</h4>
                                  <p className="text-[#86868b] leading-relaxed">Extensive experience in business operations with international enterprises such as Shell, IBM, and Hyundai Group.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="relative h-[600px] bg-white rounded-[40px] shadow-[0_24px_60px_rgba(0,0,0,0.05)] p-12 flex flex-col items-center justify-center text-center">
                      <Users className="w-24 h-24 text-[#0066cc] mb-8 opacity-80" />
                      <h3 className="text-8xl font-bold text-[#1d1d1f] mb-4 tracking-tighter">20+</h3>
                      <p className="text-[#86868b] uppercase tracking-[0.2em] font-medium text-sm">Core Team Members</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Technical Leadership - AIDC */}
      <section className="py-32 bg-white">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                  <h2 className="section-title mb-6">Technical Leadership</h2>
                  <p className="section-desc max-w-3xl mx-auto">
                      Pioneering AIDC Optical Transceivers with ultra-low power consumption, latency, and bit error rates.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  <div className="p-10 bg-[#f5f5f7] rounded-[32px] text-center hover:scale-105 transition-transform duration-500">
                      <h3 className="text-6xl font-bold text-[#0066cc] mb-4 tracking-tight">30-70%</h3>
                      <p className="font-semibold text-[#1d1d1f] mb-3 text-xl">Lower Power Consumption</p>
                      <p className="text-[#86868b]">Compared to competing solutions, significantly reducing operational costs for data centers.</p>
                  </div>
                  <div className="p-10 bg-[#f5f5f7] rounded-[32px] text-center hover:scale-105 transition-transform duration-500">
                      <h3 className="text-6xl font-bold text-[#0066cc] mb-4 tracking-tight">&gt; 2 Orders</h3>
                      <p className="font-semibold text-[#1d1d1f] mb-3 text-xl">BER Improvement</p>
                      <p className="text-[#86868b]">Ultra-low Bit Error Rate improved by 2–4 orders of magnitude vs competitors.</p>
                  </div>
                  <div className="p-10 bg-[#f5f5f7] rounded-[32px] text-center hover:scale-105 transition-transform duration-500">
                      <h3 className="text-6xl font-bold text-[#0066cc] mb-4 tracking-tight">30%</h3>
                      <p className="font-semibold text-[#1d1d1f] mb-3 text-xl">Lower Latency</p>
                      <p className="text-[#86868b]">Industry-leading performance for latency-sensitive AI and supercomputing workloads.</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="apple-card p-12">
                       <h3 className="text-3xl font-semibold mb-12 text-[#1d1d1f]">Performance Benchmark</h3>
                       <div className="space-y-12">
                           <div>
                               <div className="flex justify-between text-base mb-4 font-medium text-[#86868b]">
                                   <span>Power Consumption (200G SR4)</span>
                                   <span className="text-[#28cd41] font-bold">-47%</span>
                               </div>
                               <div className="relative w-full h-16 bg-[#f5f5f7] rounded-full overflow-hidden">
                                   <div className="absolute top-0 left-0 h-full bg-[#0071e3] flex items-center pl-6 text-white text-sm font-bold shadow-lg" style={{ width: '53%' }}>
                                       Ours: 2.4W
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-6 text-[#86868b] text-sm font-bold">
                                       Competitor: 4.5W
                                   </div>
                               </div>
                           </div>
                           <div>
                               <div className="flex justify-between text-base mb-4 font-medium text-[#86868b]">
                                   <span>Pre-FEC BER (Lower is better)</span>
                                   <span className="text-[#28cd41] font-bold">100x Better</span>
                               </div>
                               <div className="relative w-full h-16 bg-[#f5f5f7] rounded-full overflow-hidden">
                                   <div className="absolute top-0 left-0 h-full bg-[#0071e3] flex items-center pl-6 text-white text-sm font-bold shadow-lg" style={{ width: '15%' }}>
                                       E-14
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-6 text-[#86868b] text-sm font-bold">
                                       Competitor: E-12
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>
                  <div className="bg-[#1d1d1f] text-white rounded-[40px] p-12 flex flex-col justify-center shadow-2xl">
                      <h3 className="text-3xl font-semibold mb-10">Why Our Modules Stand Out</h3>
                      <ul className="space-y-8">
                          <li className="flex gap-6">
                              <div className="bg-[#2997ff]/20 p-3 rounded-xl h-fit">
                                  <Award className="w-6 h-6 text-[#2997ff]" />
                              </div>
                              <div>
                                  <strong className="block text-xl mb-2 font-semibold">National Supercomputing Standard</strong>
                                  <p className="text-gray-400 text-lg leading-relaxed">The only 200G optical transceiver in China meeting National Supercomputing Center requirements.</p>
                              </div>
                          </li>
                          <li className="flex gap-6">
                              <div className="bg-[#2997ff]/20 p-3 rounded-xl h-fit">
                                  <Award className="w-6 h-6 text-[#2997ff]" />
                              </div>
                              <div>
                                  <strong className="block text-xl mb-2 font-semibold">Outperforming Giants</strong>
                                  <p className="text-gray-400 text-lg leading-relaxed">In CAS tests, our 400G/800G modules surpassed NVIDIA in pre-FEC BER and write bandwidth.</p>
                              </div>
                          </li>
                          <li className="flex gap-6">
                              <div className="bg-[#2997ff]/20 p-3 rounded-xl h-fit">
                                  <Award className="w-6 h-6 text-[#2997ff]" />
                              </div>
                              <div>
                                  <strong className="block text-xl mb-2 font-semibold">Global Compatibility</strong>
                                  <p className="text-gray-400 text-lg leading-relaxed">Compatible with mainstream brands like NVIDIA, Huawei, and Cisco.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      {/* Strategic Partner */}
      <section className="container mx-auto px-6 py-32">
          <div className="bg-white border border-gray-100 shadow-sm p-12 md:p-16 rounded-3xl">
              <h2 className="text-3xl font-semibold mb-12 text-center text-black">Strategic Partner Profile</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                      <p className="text-gray-500 mb-6 leading-relaxed text-lg">
                          Our strategic partner, founded in December 2017 and headquartered in Guangzhou, is a leading photonic technology company specializing in advanced opto-chips and optical transceivers for hyperscale AI computing clusters.
                      </p>
                      <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                          Guided by a team of Silicon Valley optoelectronics pioneers and award-winning scientists, the company operates a Silicon Valley Branch and an R&D Center in Idaho. They have achieved multiple world-first innovations in 200G–1.6T ultra-low-power modules.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Guangzhou HQ</span>
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Silicon Valley Branch</span>
                          <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">Idaho R&D Center</span>
                      </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold mb-6 text-black">Technology Leadership & Awards</h3>
                      <ul className="space-y-4">
                          {[
                              "Leading Optical Transceiver Enterprise (Guangdong Provincial Gov)",
                              "Founding Architect of Opto-Chip Innovation Initiative",
                              "National First Prize: 10th MOST China Innovation Competition",
                              "Top 10 Pre-IPO Leading High-tech Enterprises",
                              "Hidden Champion Enterprise in Guangzhou",
                              "Guangzhou's AI Enterprise with Highest Growth Potential"
                          ].map((award, i) => (
                              <li key={i} className="flex items-start gap-3 text-gray-600">
                                  <Award className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                  {award}
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
