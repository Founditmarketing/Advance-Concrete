import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export default function About() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-20 md:pt-40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">About Us</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-red z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Concrete workers smoothing surface" 
                  className="relative z-10 w-full h-auto object-cover shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 bg-brand-black text-white p-8 z-20 hidden md:block">
                  <p className="font-display text-5xl font-bold text-brand-red mb-1">15+</p>
                  <p className="font-bold uppercase tracking-wider text-sm">Years of<br/>Expertise</p>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Story</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 uppercase leading-tight">
                  Built on Reliability & Precision
                </h3>
                <div className="w-20 h-1 bg-brand-red mb-8"></div>
                
                <div className="space-y-6 text-gray-700 text-lg">
                  <p>
                    With <strong>over 15 years of industry expertise</strong>, Advance Concrete Service brings a family-friendly, professional vibe to every job site. We've built our reputation on reliability, precision, and unmatched craftsmanship in the Bucyrus area and beyond.
                  </p>
                  <p>
                    <strong>The "Turnkey" Promise:</strong> We handle everything from site clearing to the final custom stamp. Whether we're partnering with general contractors on large-scale municipal builds or helping homeowners elevate their property's value with remodeling and finishing, we bring the same level of dedication to every pour.
                  </p>
                  <p>
                    We understand that concrete is a permanent investment. When you choose Advance Concrete Service, you're choosing peace of mind and structural integrity that stands the test of time.
                  </p>
                </div>
                
                <div className="mt-10">
                  <Link to="/contact" className="bg-brand-black hover:bg-gray-800 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors inline-flex items-center group">
                    Request a Free Estimate
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
