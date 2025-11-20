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
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-6 text-sm">
            Shenzhen Huamao Technology Co., Ltd.
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-black mb-8 leading-tight tracking-tight">
            High-Performance Optical Connectivity <br />
            <span className="text-gray-500">for AI, Hyperscale & Cloud Data Centers</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            As the exclusive supplier to national supercomputing centres, Shenzhen Huamao Technology Co., Ltd. delivers ultra-low-power, ultra-high-bandwidth optical modules—engineered for the next-generation data-driven world.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link
              href="/products"
              className="apple-button px-8 py-4 text-base font-medium"
            >
              View Products
            </Link>
            <Link
              href="/contact"
              className="text-blue-600 hover:underline text-base font-medium flex items-center gap-2"
            >
              Contact Sales <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
