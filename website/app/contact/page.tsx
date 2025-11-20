import { Mail, Phone, MapPin } from 'lucide-react';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

export default function ContactPage() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold mb-8 tracking-tight text-[#f8fafc]">
              Get in Touch
            </h1>
            <p className="text-[#94a3b8] text-xl mb-12 leading-relaxed font-light">
              Ready to upgrade your infrastructure? Our global team is here to provide premium optical solutions tailored to your needs.
            </p>

            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#2997ff]/10 rounded-2xl shrink-0 shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                  <MapPin className="w-6 h-6 text-[#2997ff]" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-[#f8fafc]">Global Offices</h3>
                  
                  <div>
                    <p className="text-[#f8fafc] font-medium text-sm mb-1">Hong Kong Headquarters</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">Flat RM 3, 1/F, Phase 3, Caesar Court, 9-11 Hung Hom Road, Kowloon, Hong Kong</p>
                  </div>

                  <div>
                    <p className="text-[#f8fafc] font-medium text-sm mb-1">Shenzhen Office</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">Building 113, Jiahua Garden, Jialong Villa, Minzhi Street, Longhua District, Shenzhen</p>
                  </div>

                  <div>
                    <p className="text-[#f8fafc] font-medium text-sm mb-1">USA Office</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">Unit N, 4539 North 22nd Street, Phoenix, Maricopa County, Arizona, USA, 85016</p>
                  </div>

                  <div>
                    <p className="text-[#f8fafc] font-medium text-sm mb-1">Australia Office</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">Sunnybank Hills, Queensland, Australia, 4109</p>
                  </div>

                  <div>
                    <p className="text-[#f8fafc] font-medium text-sm mb-1">Malaysia Office</p>
                    <p className="text-[#94a3b8] text-sm leading-relaxed">Sky Park One City, USJ 25/1B, Subang Jaya, Selangor, Malaysia, 47650</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#2997ff]/10 rounded-2xl shrink-0 shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                  <Mail className="w-6 h-6 text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#f8fafc]">Email Us</h3>
                  <p className="text-[#94a3b8] hover:text-[#2997ff] transition-colors cursor-pointer">info@flygtl-ict.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#2997ff]/10 rounded-2xl shrink-0 shadow-[0_0_15px_rgba(41,151,255,0.2)]">
                  <Phone className="w-6 h-6 text-[#2997ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-[#f8fafc]">Call Us</h3>
                  <p className="text-[#94a3b8]">HK: +852 609 0287</p>
                  <p className="text-[#94a3b8]">USA: +1 (223) 267-7777</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#0f172a]/40 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-lg border border-white/5 h-fit sticky top-32">
            <h2 className="text-2xl font-semibold mb-8 text-[#f8fafc]">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">First Name</label>
                  <input type="text" className="w-full bg-[#1e293b]/50 border border-white/10 text-white p-4 rounded-xl focus:ring-2 focus:ring-[#2997ff] focus:outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#94a3b8] mb-2">Last Name</label>
                  <input type="text" className="w-full bg-[#1e293b]/50 border border-white/10 text-white p-4 rounded-xl focus:ring-2 focus:ring-[#2997ff] focus:outline-none transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Email</label>
                <input type="email" className="w-full bg-[#1e293b]/50 border border-white/10 text-white p-4 rounded-xl focus:ring-2 focus:ring-[#2997ff] focus:outline-none transition-all" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#94a3b8] mb-2">Message</label>
                <textarea rows={4} className="w-full bg-[#1e293b]/50 border border-white/10 text-white p-4 rounded-xl focus:ring-2 focus:ring-[#2997ff] focus:outline-none transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#2997ff] text-white font-medium py-4 rounded-xl hover:bg-[#0071e3] transition-colors shadow-[0_0_15px_rgba(41,151,255,0.4)] hover:shadow-[0_0_25px_rgba(41,151,255,0.6)]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
