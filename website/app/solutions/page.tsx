import { Network, Cpu, Server, Wifi, Zap, Activity, BarChart3, ShieldCheck, CheckCircle2, Settings, Layers, Database, Globe2, Home, Radio } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

export default function SolutionsPage() {
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
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 tracking-tight text-[#f8fafc]">
            Future-Ready Optical Solutions
          </h1>
          <p className="text-[#94a3b8] max-w-3xl mx-auto text-xl font-light leading-relaxed">
            High-performance, low-power optical connectivity engineered for AI computing, cloud fabrics, mobile networks, and national-scale infrastructure.
          </p>
          <p className="text-[#94a3b8] max-w-3xl mx-auto text-lg font-light mt-4">
            Our solutions combine next-generation optical hardware with deep system-level engineering—ensuring unmatched performance, reliability, and scalability across diverse network environments.
          </p>
        </div>

        <div className="space-y-24 mb-32">
          {/* AI & Intelligent Computing */}
          <div className="apple-card p-12 bg-[#0f172a]/40 border border-[#2997ff]/20 relative overflow-hidden group hover:border-[#2997ff]/40 transition-all duration-500">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#2997ff]/5 blur-[100px] rounded-full pointer-events-none" />
             <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                   <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.3)]">
                       <Cpu className="w-10 h-10 text-[#2997ff]" />
                   </div>
                   <h2 className="text-3xl font-semibold mb-4 text-[#f8fafc]">AI & Intelligent Computing</h2>
                   <p className="text-[#2997ff] font-medium mb-6 tracking-wide">High-Bandwidth, Low-Latency Interconnects for AI Clusters</p>
                   <p className="text-[#94a3b8] leading-relaxed mb-6">
                      AI training clusters demand extreme throughput, deterministic latency, and stable optical links under full computational load. Our optical modules are engineered specifically for GPU interconnect, AI fabrics, and large-scale model training.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {['Large GPU Farms', 'HPC Fabrics', 'AI Training Clusters', 'Inference Supernodes'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-xs text-[#2997ff]">{tag}</span>
                      ))}
                   </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-[#2997ff]" /> 800G / 1.6T Interconnect</h4>
                        <p className="text-sm text-[#94a3b8]">Next-gen optical interconnect optimized for massive AI clusters and hyperscale fabrics.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-[#2997ff]" /> Ultra-Low BER</h4>
                        <p className="text-sm text-[#94a3b8]">Engineered for large-batch, long-duration workloads requiring zero-error transmission.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-[#2997ff]" /> 30–70% Power Reduction</h4>
                        <p className="text-sm text-[#94a3b8]">Significantly lower power consumption for dense server racks and sustainable computing.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Settings className="w-4 h-4 text-[#2997ff]" /> Custom Tuning</h4>
                        <p className="text-sm text-[#94a3b8]">Optional optimization for NVIDIA / Huawei systems and custom backplane requirements.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* F5.5G / F6G Fixed Network Solutions */}
          <div className="apple-card p-12 bg-[#0f172a]/40 border border-[#2997ff]/20 relative overflow-hidden group hover:border-[#2997ff]/40 transition-all duration-500">
             <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                   <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.3)]">
                       <Home className="w-10 h-10 text-[#2997ff]" />
                   </div>
                   <h2 className="text-3xl font-semibold mb-4 text-[#f8fafc]">F5.5G / F6G Fixed Network</h2>
                   <p className="text-[#2997ff] font-medium mb-6 tracking-wide">Ultra-Broadband Access for Homes, Enterprises & Cloud Edge</p>
                   <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Our PON optical solutions deliver stable, high-power, high-sensitivity performance for next-generation fixed networks.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {['FTTH', 'Enterprise Access', 'Industrial IoT', 'Smart Cities'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-xs text-[#2997ff]">{tag}</span>
                      ))}
                   </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Network className="w-4 h-4 text-[#2997ff]" /> Multi-Gen PON Support</h4>
                        <p className="text-sm text-[#94a3b8]">10G EPON / XG-PON / Combo-PON optics for seamless network evolution.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Globe2 className="w-4 h-4 text-[#2997ff]" /> Long-Distance Optimized</h4>
                        <p className="text-sm text-[#94a3b8]">DML & APD solutions engineered for extended reach and high-sensitivity reception.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Layers className="w-4 h-4 text-[#2997ff]" /> High-Density Design</h4>
                        <p className="text-sm text-[#94a3b8]">Low-power ONU / OLT optics designed for high-density chassis platforms.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Settings className="w-4 h-4 text-[#2997ff]" /> Parameter Tuning</h4>
                        <p className="text-sm text-[#94a3b8]">Custom wavelength, power, and sensitivity tuning available for specific deployment scenarios.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* 5G-A / 6G Mobile Transport */}
          <div className="apple-card p-12 bg-[#0f172a]/40 border border-[#2997ff]/20 relative overflow-hidden group hover:border-[#2997ff]/40 transition-all duration-500">
             <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                   <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.3)]">
                       <Radio className="w-10 h-10 text-[#2997ff]" />
                   </div>
                   <h2 className="text-3xl font-semibold mb-4 text-[#f8fafc]">5G-A / 6G Mobile Transport</h2>
                   <p className="text-[#2997ff] font-medium mb-6 tracking-wide">Future-Proof Optical Infrastructure for Mobile Networks</p>
                   <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Next-gen wireless networks require optical infrastructure capable of supporting extreme fronthaul, midhaul, and backhaul requirements.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {['5G-A Fronthaul', '6G Backhaul', 'Mobile Edge', 'C-RAN Cloudification'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-xs text-[#2997ff]">{tag}</span>
                      ))}
                   </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Wifi className="w-4 h-4 text-[#2997ff]" /> High Capacity</h4>
                        <p className="text-sm text-[#94a3b8]">200G / 400G / 800G mobile transport optics for massive data throughput.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-[#2997ff]" /> URLLC Ready</h4>
                        <p className="text-sm text-[#94a3b8]">Low-latency optical paths optimized for Ultra-Reliable Low-Latency Communication.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#2997ff]" /> Robust Reliability</h4>
                        <p className="text-sm text-[#94a3b8]">High-temperature, high-stress reliability engineering for harsh outdoor environments.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Network className="w-4 h-4 text-[#2997ff]" /> CPRI / eCPRI</h4>
                        <p className="text-sm text-[#94a3b8]">Optimized optical performance for mobile fronthaul protocols.</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Supercomputing Connectivity */}
          <div className="apple-card p-12 bg-[#0f172a]/40 border border-[#2997ff]/20 relative overflow-hidden group hover:border-[#2997ff]/40 transition-all duration-500">
             <div className="flex flex-col lg:flex-row gap-12">
                <div className="lg:w-1/3">
                   <div className="w-16 h-16 rounded-2xl bg-[#2997ff]/10 flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(41,151,255,0.3)]">
                       <Server className="w-10 h-10 text-[#2997ff]" />
                   </div>
                   <h2 className="text-3xl font-semibold mb-4 text-[#f8fafc]">Supercomputing Connectivity</h2>
                   <p className="text-[#2997ff] font-medium mb-6 tracking-wide">Extreme-Performance Links for National Supercomputing Systems</p>
                   <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Supercomputing environments require optical links with the lowest jitter, lowest BER, and maximum reliability under sustained load. Our modules are certified and deployed in national-level supercomputing centers.
                   </p>
                   <div className="flex flex-wrap gap-2 mt-4">
                      {['National HPC Centers', 'Scientific Computing', 'Meteorology', 'Simulation Clusters'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-xs text-[#2997ff]">{tag}</span>
                      ))}
                   </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-[#2997ff]" /> Lowest Jitter</h4>
                        <p className="text-sm text-[#94a3b8]">Industry-leading TDECQ and jitter control for stable high-speed links.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><BarChart3 className="w-4 h-4 text-[#2997ff]" /> 2–4 Orders Better BER</h4>
                        <p className="text-sm text-[#94a3b8]">Ultra-low Bit Error Rate validated for extreme performance requirements.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Zap className="w-4 h-4 text-[#2997ff]" /> 30% Lower Latency</h4>
                        <p className="text-sm text-[#94a3b8]">Packet-level latency reduction optimized for HPC workload synchronization.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#030712]/50 border border-white/5 hover:border-[#2997ff]/30 transition-colors">
                        <h4 className="text-[#f8fafc] font-semibold mb-3 flex items-center gap-2"><Database className="w-4 h-4 text-[#2997ff]" /> Extreme Duty Cycles</h4>
                        <p className="text-sm text-[#94a3b8]">Stability validated under long-term thermal and electrical stress tests.</p>
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Custom Engineering Section - Full Width */}
        <div className="mb-32 bg-[#0f172a]/40 border border-white/5 backdrop-blur-md p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2997ff] to-transparent opacity-50" />
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#f8fafc]">Custom Optical Transceiver Engineering</h2>
                <p className="text-[#94a3b8] text-lg max-w-3xl mx-auto">
                    Every network environment is different. We provide full customization capabilities to align optical transceivers with your system, platform, and performance requirements.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="space-y-6">
                    <h3 className="text-[#2997ff] font-semibold text-lg border-b border-[#2997ff]/20 pb-3">Electrical / Optical Tuning</h3>
                    <ul className="space-y-3 text-sm text-[#94a3b8]">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Host interface tuning (NVIDIA / Huawei / Cisco)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> DSP-less or DSP-enabled variants</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> PAM4 / NRZ optimization</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Custom equalization & driver settings</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-[#2997ff] font-semibold text-lg border-b border-[#2997ff]/20 pb-3">Optical Characteristics</h3>
                    <ul className="space-y-3 text-sm text-[#94a3b8]">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Custom wavelength (LAN-WDM, CWDM, DWDM)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Custom transmit power & sensitivity</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Custom ER / OMA / TDECQ targets</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Short, long, and extended reach variants</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-[#2997ff] font-semibold text-lg border-b border-[#2997ff]/20 pb-3">Mechanical & Thermal</h3>
                    <ul className="space-y-3 text-sm text-[#94a3b8]">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Heat-sink customization</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Cage & connector compatibility</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Advanced thermal optimization</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> High-density cluster adaptations</li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h3 className="text-[#2997ff] font-semibold text-lg border-b border-[#2997ff]/20 pb-3">Reliability & Environment</h3>
                    <ul className="space-y-3 text-sm text-[#94a3b8]">
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Industrial-temp versions (-40°C to +85°C)</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Ruggedized designs</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Custom burn-in profiles</li>
                        <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-[#2997ff] shrink-0 mt-0.5" /> Stress-testing protocols</li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 text-center">
                <p className="text-[#f8fafc] text-lg font-medium italic">"If it’s optical, we can build it."</p>
            </div>
        </div>

        {/* Technical Advantages & Comparison */}
        <div className="border-t border-white/10 pt-24">
            <h2 className="text-3xl md:text-4xl font-semibold mb-16 text-center text-[#f8fafc]">AIDC Optical Transceiver Advantages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="p-8 text-center apple-card bg-[#0f172a]/30 hover:scale-105 transition-transform duration-500 border border-white/5">
                    <Zap className="w-12 h-12 text-[#2997ff] mx-auto mb-6 drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]" />
                    <h3 className="text-xl font-semibold mb-2 text-[#f8fafc]">Ultra-Low Power</h3>
                    <p className="text-5xl font-bold text-[#f8fafc] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">30-70%</p>
                    <p className="text-sm text-[#94a3b8]">Reduction compared to conventional solutions</p>
                </div>
                <div className="p-8 text-center apple-card bg-[#0f172a]/30 hover:scale-105 transition-transform duration-500 border border-white/5">
                    <BarChart3 className="w-12 h-12 text-[#2997ff] mx-auto mb-6 drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]" />
                    <h3 className="text-xl font-semibold mb-2 text-[#f8fafc]">Ultra-Low BER</h3>
                    <p className="text-5xl font-bold text-[#f8fafc] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">2-4 Orders</p>
                    <p className="text-sm text-[#94a3b8]">Magnitude improvement across all speeds</p>
                </div>
                <div className="p-8 text-center apple-card bg-[#0f172a]/30 hover:scale-105 transition-transform duration-500 border border-white/5">
                    <Activity className="w-12 h-12 text-[#2997ff] mx-auto mb-6 drop-shadow-[0_0_10px_rgba(41,151,255,0.5)]" />
                    <h3 className="text-xl font-semibold mb-2 text-[#f8fafc]">Ultra-Low Latency</h3>
                    <p className="text-5xl font-bold text-[#f8fafc] mb-2 tracking-tighter drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">30%</p>
                    <p className="text-sm text-[#94a3b8]">Lower latency for training workloads</p>
                </div>
            </div>

            <div className="bg-[#0f172a]/40 border border-white/5 backdrop-blur-md p-12 rounded-3xl">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-8 flex items-center gap-3 text-[#f8fafc]">
                            <ShieldCheck className="w-8 h-8 text-[#2997ff]" />
                            Proven in Mission-Critical Environments
                        </h3>
                        <ul className="space-y-6 text-[#94a3b8]">
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-[#2997ff] rounded-full mt-2.5 shrink-0 shadow-[0_0_5px_#2997ff]" />
                                <span><strong className="text-[#f8fafc]">Sole Supplier:</strong> Designated as a single-source supplier for China's highest-level National Supercomputing Center.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-[#2997ff] rounded-full mt-2.5 shrink-0 shadow-[0_0_5px_#2997ff]" />
                                <span><strong className="text-[#f8fafc]">Superior Performance:</strong> Outperformed NVIDIA modules in Pre-FEC BER and write bandwidth in direct comparisons.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-2 h-2 bg-[#2997ff] rounded-full mt-2.5 shrink-0 shadow-[0_0_5px_#2997ff]" />
                                <span><strong className="text-[#f8fafc]">High Reliability:</strong> &gt;98% factory yield and &lt;0.5% field failure rate.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="bg-[#1e293b]/50 border border-white/5 p-8 rounded-2xl shadow-lg">
                            <h4 className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mb-6 text-center">Power Consumption Comparison (200G SR4)</h4>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium text-[#94a3b8]">
                                        <span>Competitor (A/I/H)</span>
                                        <span>4.5W</span>
                                    </div>
                                    <div className="h-4 bg-[#334155] rounded-full overflow-hidden">
                                        <div className="h-full bg-[#64748b] w-[100%]" />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2 font-medium text-[#2997ff]">
                                        <span>Huamao Technology</span>
                                        <span>2.4W</span>
                                    </div>
                                    <div className="h-4 bg-[#2997ff]/20 rounded-full overflow-hidden border border-[#2997ff]/30">
                                        <div className="h-full bg-gradient-to-r from-[#2997ff] to-[#00f0ff] w-[53%] shadow-[0_0_15px_#2997ff]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}
