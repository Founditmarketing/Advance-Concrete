import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export default function Gallery() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-20 md:pt-40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">Project Gallery</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-gray-600 text-lg">
              A visual showcase of our premium driveways, sidewalks, patios, and custom finishes. We take pride in every pour.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FadeIn delay={0.1} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop" alt="Finished concrete driveway" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Residential Driveways</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop" alt="Concrete patio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Custom Patios</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2070&auto=format&fit=crop" alt="Concrete sidewalk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Sidewalks & Walkways</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.4} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=2070&auto=format&fit=crop" alt="Stamped concrete" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Decorative & Stamped</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.5} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="Commercial concrete" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Commercial Projects</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.6} className="relative h-64 overflow-hidden group">
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop" alt="Site grading" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold uppercase tracking-wider">Site Prep & Grading</span>
              </div>
            </FadeIn>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block">
              Get a Free Estimate for Your Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
