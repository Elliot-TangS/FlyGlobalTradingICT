import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] border-t border-gray-200 pt-24 pb-12 text-sm">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="relative h-12 w-48 mb-8">
              <Image src="/logo/logo.png" alt="Huamao Technology" fill className="object-contain" />
            </div>
            <p className="text-[#86868b] leading-relaxed mb-8 font-medium">
              Your Trustworthy Global ICT Infrastructure Supply Partner. Connecting the world with cutting-edge optical technology.
            </p>
            <div className="flex flex-col gap-4 text-[#86868b]">
               <a href="mailto:info@flygtl-ict.com" className="flex items-center gap-3 hover:text-[#0066cc] transition-colors">
                 <Mail className="w-4 h-4" /> info@flygtl-ict.com
               </a>
               <div className="flex items-center gap-3">
                 <Phone className="w-4 h-4" /> HK: +852 609 0287
               </div>
               <div className="flex items-center gap-3">
                 <Phone className="w-4 h-4" /> USA: +1 (223) 267-7777
               </div>
            </div>
          </div>

          <div>
            <h4 className="text-[#1d1d1f] font-semibold mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li><Link href="/solutions" className="text-[#86868b] hover:text-[#0066cc] transition-colors">Solutions</Link></li>
              <li><Link href="/products" className="text-[#86868b] hover:text-[#0066cc] transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-[#86868b] hover:text-[#0066cc] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-[#86868b] hover:text-[#0066cc] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1d1d1f] font-semibold mb-6">Global Hubs</h4>
            <ul className="space-y-4 text-[#86868b]">
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Hong Kong (HQ)</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Shenzhen • Chengdu</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Phoenix, USA</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Brisbane, Australia</li>
              <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-400" /> Selangor, Malaysia</li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#1d1d1f] font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-[#86868b] hover:text-[#0066cc] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-[#86868b] hover:text-[#0066cc] transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#86868b] text-xs">
            © {new Date().getFullYear()} Shenzhen Huamao Technology Co., Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
