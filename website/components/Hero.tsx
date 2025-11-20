'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-transparent pointer-events-none">
      {/* Background Effects - Removed to let Globe show through */}
      
      <div className="container mx-auto px-6 relative z-10 text-center pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-[#1d1d1f] font-medium tracking-normal uppercase mb-8 text-xs md:text-sm opacity-60">
            Shenzhen Huamao Technology Co., Ltd.
          </h2>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold text-[#1d1d1f] mb-8 leading-[1.05] tracking-tight">
            Lighting the <br />
            <span className="text-gradient bg-gradient-to-r from-[#0071e3] to-[#40a9ff] bg-clip-text text-transparent">AI world.</span>
          </h1>
          <p className="text-[#1d1d1f] text-2xl md:text-3xl font-medium max-w-3xl mx-auto mb-4 leading-tight tracking-tight">
            One optical link at a time.
          </p>
          <p className="text-[#86868b] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-normal">
            Ultra-low-power transceivers built to drive tomorrow’s hyperscale computing.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/products"
              className="bg-[#0071e3] text-white rounded-full px-8 py-4 text-lg font-medium hover:bg-[#0077ed] transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="text-[#0071e3] hover:text-[#0077ed] text-lg font-medium flex items-center gap-2 group"
            >
              Contact Sales <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
