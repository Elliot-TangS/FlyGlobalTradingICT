import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, Download, Zap, Activity, BarChart3, ShieldCheck } from 'lucide-react';
import { products } from '@/lib/products';
import { DotPattern } from '@/components/ui/dot-pattern';
import { cn } from '@/lib/utils';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

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
        <Link href="/products" className="inline-flex items-center gap-2 text-[#94a3b8] hover:text-[#2997ff] mb-8 transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Product Image Section */}
          <div className="relative group">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#0f172a]/50 border border-white/10 shadow-2xl">
               <div className="absolute inset-0 flex items-center justify-center p-12 bg-transparent">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  />
               </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-[#2997ff]/10 blur-3xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
          </div>

          {/* Product Info Section */}
          <div className="flex flex-col justify-center">
             <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#2997ff]/30 bg-[#2997ff]/10 w-fit">
                <span className="text-[#2997ff] text-sm font-medium tracking-wide uppercase">{product.category}</span>
             </div>
             <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] mb-4">{product.name}</h1>
             <p className="text-xl text-[#94a3b8] mb-2 font-mono">{product.model}</p>
             <p className="text-lg text-gray-400 leading-relaxed mb-8 border-l-2 border-[#2997ff] pl-4">
                {product.description}
             </p>

             <div className="flex flex-wrap gap-4 mb-10">
                <Link 
                  href="/contact"
                  className="bg-[#2997ff] text-white px-8 py-3 rounded-full font-medium hover:bg-[#0077ed] transition-all hover:scale-105 shadow-[0_0_20px_rgba(41,151,255,0.4)] flex items-center gap-2"
                >
                   Contact Sales
                </Link>
                <a 
                  href={product.datasheet || `/datasheets/${product.id}.pdf`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-transparent border border-white/20 text-white px-8 py-3 rounded-full font-medium hover:bg-white/5 transition-all flex items-center gap-2"
                >
                   <Download className="w-4 h-4" /> Datasheet
                </a>
             </div>

             {/* Key Features Grid (Small) */}
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-[#1e293b]/50 rounded-xl border border-white/5">
                   <Zap className="w-5 h-5 text-[#2997ff] mb-2" />
                   <span className="text-sm text-[#94a3b8] block">Low Power</span>
                </div>
                <div className="p-4 bg-[#1e293b]/50 rounded-xl border border-white/5">
                   <Activity className="w-5 h-5 text-[#2997ff] mb-2" />
                   <span className="text-sm text-[#94a3b8] block">High Performance</span>
                </div>
             </div>
          </div>
        </div>

        {/* Specs & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
           <div className="lg:col-span-2 space-y-8">
              {/* Specifications Table */}
              <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                 <h3 className="text-2xl font-semibold text-[#f8fafc] mb-8 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-[#2997ff]" /> Technical Specifications
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                    {Object.entries(product.specs).map(([key, value]) => (
                       <div key={key} className="border-b border-white/5 pb-4 last:border-0">
                          <dt className="text-sm text-[#94a3b8] mb-1 uppercase tracking-wider">{key}</dt>
                          <dd className="text-lg text-[#f8fafc] font-medium">{value}</dd>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Compliance (If Available) */}
              {product.compliance && (
                <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                   <h3 className="text-2xl font-semibold text-[#f8fafc] mb-8 flex items-center gap-3">
                      <ShieldCheck className="w-6 h-6 text-[#2997ff]" /> Standards Compliance
                   </h3>
                   <div className="flex flex-wrap gap-3">
                      {product.compliance.map((item, idx) => (
                         <span key={idx} className="px-4 py-2 bg-[#2997ff]/10 border border-[#2997ff]/20 rounded-full text-sm text-[#2997ff]">
                            {item}
                         </span>
                      ))}
                   </div>
                </div>
              )}

              {/* Features List */}
               <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 md:p-10 backdrop-blur-sm">
                 <h3 className="text-2xl font-semibold text-[#f8fafc] mb-8 flex items-center gap-3">
                    <ShieldCheck className="w-6 h-6 text-[#2997ff]" /> Key Features
                 </h3>
                 <ul className="grid grid-cols-1 gap-4">
                    {product.features.map((feature, idx) => (
                       <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="w-5 h-5 text-[#2997ff] shrink-0 mt-0.5" />
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           {/* Sidebar / Additional Context */}
           <div className="lg:col-span-1 space-y-6">
              {/* Applications (If Available) */}
              {product.applications && (
                <div className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                   <h4 className="text-xl font-semibold text-[#f8fafc] mb-6">Target Applications</h4>
                   <ul className="space-y-3">
                      {product.applications.map((app, idx) => (
                         <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#2997ff] mt-2 shrink-0" />
                            {app}
                         </li>
                      ))}
                   </ul>
                </div>
              )}

              <div className="bg-gradient-to-b from-[#2997ff]/10 to-[#0f172a]/40 border border-[#2997ff]/20 rounded-3xl p-8">
                 <h4 className="text-xl font-semibold text-[#f8fafc] mb-4">Why Fly Global Trading?</h4>
                 <p className="text-[#94a3b8] mb-6 text-sm leading-relaxed">
                    We provide industry-leading optical interconnects tested for the most demanding AI & HPC environments.
                 </p>
                 <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" /> Global Supply Chain</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" /> 24/7 Technical Support</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#2997ff]" /> Custom Engineering</li>
                 </ul>
              </div>
           </div>
        </div>
      </div>
    </main>
  );
}
