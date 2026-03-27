import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const galleryImages = [
  { src: "/gallery1.jpg", alt: "Finished concrete driveway" },
  { src: "/gallery7.png", alt: "Concrete patio" },
  { src: "/gallery3.jpg", alt: "Concrete sidewalk" },
  { src: "/gallery4.png", alt: "Stamped concrete" },
  { src: "/gallery5.png", alt: "Commercial concrete" },
  { src: "/gallery6.png", alt: "Site grading" },
  { src: "/gallery2.jpg", alt: "Concrete installation" },
  { src: "/gallery8.jpg", alt: "Concrete Services" },
  { src: "/gallery9.jpg", alt: "Premium Finishes" },
  { src: "/gallery10.jpg", alt: "Expert Concrete Work" },
  { src: "/gallery11.png", alt: "Advance Concrete Team" },
  { src: "/gallery12.png", alt: "Professional Paving" },
  { src: "/gallery13.png", alt: "Quality Craftsmanship" },
  { src: "/gallery14.png", alt: "Turnkey Concrete Solutions" },
  { src: "/gallery15.png", alt: "Durable Infrastructure" },
  { src: "/mun1.jpg", alt: "Municipal Concrete Work" },
  { src: "/mun2.jpg", alt: "Municipal Concrete Work" },
  { src: "/mun3.jpg", alt: "Municipal Concrete Work" },
  { src: "/mun4.jpg", alt: "Municipal Concrete Work" },
  { src: "/residential1.jpg", alt: "Residential Concrete Work" },
  { src: "/residential2.jpg", alt: "Residential Concrete Work" },
  { src: "/residential4.jpg", alt: "Residential Concrete Work" },
  { src: "/residential 5.jpg", alt: "Residential Concrete Work" },
  { src: "/residential 6.jpg", alt: "Residential Concrete Work" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            {galleryImages.map((image, index) => (
              <div key={index}>
                <FadeIn 
                  delay={(index % 9 + 1) * 0.1} 
                  className="relative h-64 overflow-hidden group cursor-pointer"
                >
                  <div 
                    className="w-full h-full relative"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                      referrerPolicy="no-referrer" 
                    />
                  </div>
                </FadeIn>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block">
              Get a Free Estimate for Your Project
            </Link>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors z-50 pointer-events-auto"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={40} />
            </button>
            <motion.img 
              src={selectedImage} 
              alt="Enlarged concrete project work" 
              className="max-w-[90vw] max-h-[90vh] object-contain cursor-default"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
