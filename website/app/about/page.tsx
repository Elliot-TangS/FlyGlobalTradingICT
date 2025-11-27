import Image from 'next/image';
import { Award, Users, Zap, GraduationCap, Briefcase, MapPin, Phone, Mail, Globe2 } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-12 overflow-hidden relative">
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

      {/* Hero */}
      <section className="container mx-auto px-6 pt-20 mb-24 relative z-10">
        {/* Decorative background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#2997ff]/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-[#2997ff]/30 bg-[#2997ff]/10 backdrop-blur-sm">
              <span className="text-[#2997ff] text-sm font-medium tracking-wide uppercase">Global Pioneer in Optical Connectivity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                About Us
            </h1>
            <p className="text-xl text-[#94a3b8] leading-relaxed mb-6 font-light max-w-3xl mx-auto">
                Fly Global Trading Limited builds the optical foundation of tomorrow’s digital world. With global offices and a multidisciplinary engineering team, we design and manufacture ultra-low-power optical transceivers that enable hyperscale AI clusters, cloud fabrics, and next-generation telecom networks.
            </p>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="container mx-auto px-6 mb-32 relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-title mb-6 text-[#f8fafc]">Our Global Network</h2>
            <p className="section-desc max-w-2xl mx-auto text-[#94a3b8]">
              Strategically positioned across key markets to serve our partners worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {locations.map((loc, index) => (
                <div key={index} className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10 hover:border-[#2997ff]/50 transition-all duration-500 shadow-2xl">
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
                  
                  <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                    <div className="mb-auto">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-4 shadow-lg">
                            <Globe2 className="w-3.5 h-3.5 text-[#2997ff]" />
                            <span className="text-xs font-medium tracking-wider text-white uppercase">
                                {loc.coordinate}
                            </span>
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
      </section>

      {/* Global Team */}
      <section className="py-32 bg-transparent relative z-10">
          <div className="container mx-auto px-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="section-title mb-8 text-[#f8fafc]">A Global Team with Deep Industry Expertise</h2>
                      <div className="section-desc mb-8 text-[#94a3b8] space-y-6">
                          <p>
                            Our 20+ member leadership and engineering team combines semiconductor knowledge, optical-communication research, and enterprise-level operational experience.
                          </p>
                          <p>
                            We bring together talent from top universities and Fortune Global 500 companies, with proven track records in building scalable ICT infrastructure across continents.
                          </p>
                      </div>
                      <ul className="space-y-8">
                          <li className="flex items-start gap-6">
                              <div className="p-4 bg-[#2997ff]/10 rounded-full shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                                <GraduationCap className="w-6 h-6 text-[#2997ff]" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-[#f8fafc] text-xl mb-2">Top Universities</h4>
                                  <p className="text-[#94a3b8] leading-relaxed">Huazhong University of Science and Technology, Sichuan University, USTB, Arizona State University, The University of Sydney.</p>
                              </div>
                          </li>
                          <li className="flex items-start gap-6">
                              <div className="p-4 bg-[#2997ff]/10 rounded-full shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                                <Briefcase className="w-6 h-6 text-[#2997ff]" />
                              </div>
                              <div>
                                  <h4 className="font-semibold text-[#f8fafc] text-xl mb-2">Fortune Global 500 Experience</h4>
                                  <p className="text-[#94a3b8] leading-relaxed">Extensive experience in business operations with international enterprises such as Shell, IBM, and Hyundai Group.</p>
                              </div>
                          </li>
                      </ul>
                  </div>
                  <div className="relative h-[600px] bg-[#0f172a]/40 border border-white/5 backdrop-blur-xl rounded-[40px] shadow-2xl p-12 flex flex-col items-center justify-center text-center hover:border-[#2997ff]/30 transition-all duration-500 group">
                      <Users className="w-24 h-24 text-[#2997ff] mb-8 opacity-80 group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(41,151,255,0.5)]" />
                      <h3 className="text-8xl font-bold text-[#f8fafc] mb-4 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">20+</h3>
                      <p className="text-[#94a3b8] uppercase tracking-[0.2em] font-medium text-sm">Core Team Members</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Engineering Excellence */}
      <section className="py-32 bg-transparent relative z-10">
          <div className="container mx-auto px-6">
              <div className="text-center mb-24">
                  <h2 className="section-title mb-6 text-[#f8fafc]">Engineering Excellence at Scale</h2>
                  <p className="section-desc max-w-3xl mx-auto text-[#94a3b8]">
                      Our optical modules consistently outperform industry benchmarks and deliver measurable improvements in power efficiency, BER, and latency.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                  <div className="p-10 bg-[#0f172a]/40 border border-white/5 rounded-[32px] text-center hover:scale-105 transition-transform duration-500 hover:border-[#2997ff]/30 hover:shadow-[0_0_20px_rgba(41,151,255,0.1)]">
                      <h3 className="text-6xl font-bold text-[#2997ff] mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(41,151,255,0.4)]">30-70%</h3>
                      <p className="font-semibold text-[#f8fafc] mb-3 text-xl">Lower Power Consumption</p>
                      <p className="text-[#94a3b8]">Compared to competing solutions, significantly reducing operational costs for data centers.</p>
                  </div>
                  <div className="p-10 bg-[#0f172a]/40 border border-white/5 rounded-[32px] text-center hover:scale-105 transition-transform duration-500 hover:border-[#2997ff]/30 hover:shadow-[0_0_20px_rgba(41,151,255,0.1)]">
                      <h3 className="text-6xl font-bold text-[#2997ff] mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(41,151,255,0.4)]">&gt; 2 Orders</h3>
                      <p className="font-semibold text-[#f8fafc] mb-3 text-xl">BER Improvement</p>
                      <p className="text-[#94a3b8]">Ultra-low Bit Error Rate improved by 2–4 orders of magnitude vs competitors.</p>
                  </div>
                  <div className="p-10 bg-[#0f172a]/40 border border-white/5 rounded-[32px] text-center hover:scale-105 transition-transform duration-500 hover:border-[#2997ff]/30 hover:shadow-[0_0_20px_rgba(41,151,255,0.1)]">
                      <h3 className="text-6xl font-bold text-[#2997ff] mb-4 tracking-tight drop-shadow-[0_0_10px_rgba(41,151,255,0.4)]">30%</h3>
                      <p className="font-semibold text-[#f8fafc] mb-3 text-xl">Lower Latency</p>
                      <p className="text-[#94a3b8]">Industry-leading performance for latency-sensitive AI and supercomputing workloads.</p>
                  </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="apple-card p-12 bg-[#0f172a]/50 border border-white/5">
                       <h3 className="text-3xl font-semibold mb-12 text-[#f8fafc]">Performance Benchmark</h3>
                       <div className="space-y-12">
                           <div>
                               <div className="flex justify-between text-base mb-4 font-medium text-[#94a3b8]">
                                   <span>Power Consumption (200G SR4)</span>
                                   <span className="text-[#28cd41] font-bold drop-shadow-[0_0_8px_rgba(40,205,65,0.5)]">-47%</span>
                               </div>
                               <div className="relative w-full h-16 bg-[#1e293b] rounded-full overflow-hidden border border-white/5">
                                   <div className="absolute top-0 left-0 h-full bg-[#2997ff] flex items-center pl-6 text-white text-sm font-bold shadow-[0_0_15px_#2997ff]" style={{ width: '53%' }}>
                                       Ours: 2.4W
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-6 text-[#94a3b8] text-sm font-bold">
                                       Competitor: 4.5W
                                   </div>
                               </div>
                           </div>
                           <div>
                               <div className="flex justify-between text-base mb-4 font-medium text-[#94a3b8]">
                                   <span>Pre-FEC BER (Lower is better)</span>
                                   <span className="text-[#28cd41] font-bold drop-shadow-[0_0_8px_rgba(40,205,65,0.5)]">100x Better</span>
                               </div>
                               <div className="relative w-full h-16 bg-[#1e293b] rounded-full overflow-hidden border border-white/5">
                                   <div className="absolute top-0 left-0 h-full bg-[#2997ff] flex items-center pl-6 text-white text-sm font-bold shadow-[0_0_15px_#2997ff]" style={{ width: '15%' }}>
                                       E-14
                                   </div>
                                   <div className="absolute top-0 right-0 h-full flex items-center pr-6 text-[#94a3b8] text-sm font-bold">
                                       Competitor: E-12
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>
                  <div className="bg-[#030712] text-white rounded-[40px] p-12 flex flex-col justify-center shadow-2xl border border-white/10">
                      <h3 className="text-3xl font-semibold mb-8 text-[#f8fafc]">Core Technologies</h3>
                      <p className="text-[#94a3b8] mb-8">We focus on the technologies that matter most to future networks:</p>
                      <ul className="space-y-4 mb-10">
                          {[
                            "Ultra-efficient optical architectures",
                            "High-bandwidth PAM4/NRZ link engineering",
                            "System-level signal integrity optimization",
                            "Advanced thermal & reliability design",
                            "AI/HPC-grade performance validation"
                          ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className="mt-1 p-1 bg-[#2997ff]/20 rounded-full">
                                  <Zap className="w-4 h-4 text-[#2997ff]" />
                                </div>
                                <span className="text-lg text-[#f8fafc]">{item}</span>
                            </li>
                          ))}
                      </ul>
                      
                      <div className="pt-8 border-t border-white/10">
                        <h4 className="text-xl font-semibold mb-4 text-[#f8fafc]">Built for Global Compatibility</h4>
                        <p className="text-[#94a3b8] leading-relaxed">
                          Our products are designed to integrate seamlessly with major computing and networking ecosystems used in AI, enterprise, cloud, and telecom environments worldwide.
                        </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Strategic Partner */}
      <section className="container mx-auto px-6 py-32 relative z-10">
          <div className="bg-[#0f172a]/40 border border-white/5 shadow-lg p-12 md:p-16 rounded-3xl backdrop-blur-md">
              <h2 className="text-3xl font-semibold mb-12 text-center text-[#f8fafc]">Strategic Partner Profile</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                  <div>
                      <p className="text-[#94a3b8] mb-6 leading-relaxed text-lg">
                          Our strategic partner, founded in December 2017 and headquartered in Guangzhou, is a leading photonic technology company specializing in advanced opto-chips and optical transceivers for hyperscale AI computing clusters.
                      </p>
                      <p className="text-[#94a3b8] mb-8 leading-relaxed text-lg">
                          Guided by a team of Silicon Valley optoelectronics pioneers and award-winning scientists, the company operates a Silicon Valley Branch and an R&D Center in Idaho. They have achieved multiple world-first innovations in 200G–1.6T ultra-low-power modules.
                      </p>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-[#2997ff]/10 text-[#2997ff] border border-[#2997ff]/20 text-sm font-medium rounded-full shadow-[0_0_10px_rgba(41,151,255,0.1)]">Guangzhou HQ</span>
                          <span className="px-4 py-2 bg-[#2997ff]/10 text-[#2997ff] border border-[#2997ff]/20 text-sm font-medium rounded-full shadow-[0_0_10px_rgba(41,151,255,0.1)]">Silicon Valley Branch</span>
                          <span className="px-4 py-2 bg-[#2997ff]/10 text-[#2997ff] border border-[#2997ff]/20 text-sm font-medium rounded-full shadow-[0_0_10px_rgba(41,151,255,0.1)]">Idaho R&D Center</span>
                      </div>
                  </div>
                  <div>
                      <h3 className="text-xl font-semibold mb-6 text-[#f8fafc]">Technology Leadership & Awards</h3>
                      <ul className="space-y-4">
                          {[
                              "Leading Optical Transceiver Enterprise (Guangdong Provincial Gov)",
                              "Founding Architect of Opto-Chip Innovation Initiative",
                              "National First Prize: 10th MOST China Innovation Competition",
                              "Top 10 Pre-IPO Leading High-tech Enterprises",
                              "Hidden Champion Enterprise in Guangzhou",
                              "Guangzhou's AI Enterprise with Highest Growth Potential"
                          ].map((award, i) => (
                              <li key={i} className="flex items-start gap-3 text-[#94a3b8]">
                                  <Award className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5 drop-shadow-[0_0_5px_#2997ff]" />
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
