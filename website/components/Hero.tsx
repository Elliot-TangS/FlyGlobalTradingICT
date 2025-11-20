'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center bg-transparent pointer-events-none">
      {/* Background Effects - Removed to let Globe show through */}
      
      <div className="container mx-auto px-6 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            {/* <h2 className="text-[#94a3b8] font-medium tracking-normal uppercase mb-6 text-xs md:text-sm opacity-60">
              Shenzhen Huamao Technology Co., Ltd.
            </h2> */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-[#f8fafc] mb-6 leading-[1.1] tracking-tight">
              Lighting the <br />
              <span className="text-[#2997ff] drop-shadow-[0_0_15px_rgba(41,151,255,0.5)]">AI world.</span>
            </h1>
            <p className="text-[#f8fafc] text-2xl md:text-3xl font-medium mb-4 leading-tight tracking-tight">
              One optical link at a time.
            </p>
            <p className="text-[#94a3b8] text-lg md:text-xl max-w-xl mb-10 leading-relaxed font-normal">
              Ultra-low-power optical modules drive tomorrow's hyperscale.
            </p>

            <div className="flex flex-row items-center gap-4">
              <Link
                href="/products"
                className="bg-[#0071e3] text-white rounded-full px-8 py-3 text-lg font-medium hover:bg-[#0077ed] transition-all transform hover:scale-[1.02] shadow-[0_0_20px_rgba(0,113,227,0.4)] hover:shadow-[0_0_30px_rgba(0,113,227,0.6)]"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-[#2997ff] text-[#2997ff] rounded-full px-8 py-3 text-lg font-medium hover:bg-[#2997ff]/10 transition-all transform hover:scale-[1.02]"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
          
          {/* Right side is empty for the globe */}
          <div className="hidden lg:block h-full w-full"></div>
        </div>
      </div>
    </section>
  );
}
