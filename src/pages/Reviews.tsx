import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export default function Reviews() {
  return (
    <>
      <section className="bg-brand-black pt-32 pb-20 md:pt-40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">Customer Reviews</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="bg-gray-50 p-8 border-t-4 border-brand-red relative shadow-sm">
              <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
              <div className="flex text-brand-red mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">
                "Advance Concrete did an amazing job on our new stamped patio. The crew was professional, family-friendly, and the attention to detail was incredible. Highly recommend!"
              </p>
              <p className="font-bold uppercase tracking-wider text-sm text-brand-black">- Sarah M.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-50 p-8 border-t-4 border-brand-red relative shadow-sm">
              <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
              <div className="flex text-brand-red mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">
                "We hired them for a large commercial parking lot. They handled everything from site clearing to the final finish. True turnkey service and great communication."
              </p>
              <p className="font-bold uppercase tracking-wider text-sm text-brand-black">- David T.</p>
            </FadeIn>

            <FadeIn delay={0.3} className="bg-gray-50 p-8 border-t-4 border-brand-red relative shadow-sm">
              <Quote className="absolute top-6 right-6 text-gray-200" size={48} />
              <div className="flex text-brand-red mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-700 mb-6 italic relative z-10">
                "Needed our driveway replaced and graded properly. Brandon and his team provided a free estimate with thorough measurements. The final result is flawless."
              </p>
              <p className="font-bold uppercase tracking-wider text-sm text-brand-black">- Mark R.</p>
            </FadeIn>
          </div>

          <div className="mt-16 text-center flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="#" className="bg-brand-black hover:bg-gray-900 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block">
              Read our Google Reviews
            </a>
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block border-2 border-brand-red">
              Get a Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
