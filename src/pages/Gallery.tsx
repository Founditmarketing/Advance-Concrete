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
              <img src="/gallery1.jpg" alt="Finished concrete driveway" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-64 overflow-hidden group">
              <img src="/gallery7.png" alt="Concrete patio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-64 overflow-hidden group">
              <img src="/gallery3.jpg" alt="Concrete sidewalk" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.4} className="relative h-64 overflow-hidden group">
              <img src="/gallery4.png" alt="Stamped concrete" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.5} className="relative h-64 overflow-hidden group">
              <img src="/gallery5.png" alt="Commercial concrete" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.6} className="relative h-64 overflow-hidden group">
              <img src="/gallery6.png" alt="Site grading" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.7} className="relative h-64 overflow-hidden group">
              <img src="/gallery2.jpg" alt="Concrete installation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.8} className="relative h-64 overflow-hidden group">
              <img src="/gallery8.jpg" alt="Concrete Services" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.9} className="relative h-64 overflow-hidden group">
              <img src="/gallery9.jpg" alt="Premium Finishes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.1} className="relative h-64 overflow-hidden group">
              <img src="/gallery10.jpg" alt="Expert Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-64 overflow-hidden group">
              <img src="/gallery11.png" alt="Advance Concrete Team" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-64 overflow-hidden group">
              <img src="/gallery12.png" alt="Professional Paving" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.4} className="relative h-64 overflow-hidden group">
              <img src="/gallery13.png" alt="Quality Craftsmanship" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.5} className="relative h-64 overflow-hidden group">
              <img src="/gallery14.png" alt="Turnkey Concrete Solutions" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.6} className="relative h-64 overflow-hidden group">
              <img src="/gallery15.png" alt="Durable Infrastructure" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.7} className="relative h-64 overflow-hidden group">
              <img src="/mun1.jpg" alt="Municipal Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.8} className="relative h-64 overflow-hidden group">
              <img src="/mun2.jpg" alt="Municipal Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.9} className="relative h-64 overflow-hidden group">
              <img src="/mun3.jpg" alt="Municipal Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.1} className="relative h-64 overflow-hidden group">
              <img src="/mun4.jpg" alt="Municipal Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.2} className="relative h-64 overflow-hidden group">
              <img src="/residential1.jpg" alt="Residential Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.3} className="relative h-64 overflow-hidden group">
              <img src="/residential2.jpg" alt="Residential Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.4} className="relative h-64 overflow-hidden group">
              <img src="/residential4.jpg" alt="Residential Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.5} className="relative h-64 overflow-hidden group">
              <img src="/residential 5.jpg" alt="Residential Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
            </FadeIn>
            <FadeIn delay={0.6} className="relative h-64 overflow-hidden group">
              <img src="/residential 6.jpg" alt="Residential Concrete Work" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
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
