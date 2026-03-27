import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Hammer, Building2, Landmark, Shovel, HardHat, Star, Quote, X, Home as HomeIcon, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop", alt: "Residential Driveways" },
    { src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=2070&auto=format&fit=crop", alt: "Custom Patios" },
    { src: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?q=80&w=2070&auto=format&fit=crop", alt: "Sidewalks & Walkways" },
    { src: "https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop", alt: "Commercial Concrete" },
    { src: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop", alt: "Concrete Pouring" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-black min-h-screen flex items-center">
        <div 
          className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed"
        >
          <div className="absolute inset-0 bg-black/75 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center pt-24 md:pt-16 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-block bg-brand-red text-white px-4 py-1 font-bold uppercase tracking-wider text-sm mb-6 shadow-lg">
                Your Quality Concrete Experts
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6 uppercase"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Solid Foundations.<br />
              <span className="text-brand-red">Stunning Curb Appeal.</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-200 mb-4 max-w-2xl font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Advance Concrete Service delivers high-quality concrete for residential, commercial, and municipal projects. With over 15 years of industry expertise, we build to last.
            </motion.p>
            
            <motion.div 
              className="bg-brand-red/10 border-l-4 border-brand-red p-4 mb-10 max-w-2xl backdrop-blur-sm"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <p className="text-white font-bold text-lg md:text-xl">
                Free estimates and thorough measurements to guarantee accuracy.
              </p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-all hover:shadow-[0_0_20px_rgba(250,31,42,0.5)] flex items-center justify-center group">
                Get a Free Estimate
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <Link to="/about" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-4 font-bold uppercase tracking-widest transition-colors flex items-center justify-center">
                Learn About Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Subtle Concrete Texture Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center grayscale opacity-[0.03] [mask-image:linear-gradient(135deg,black_0%,transparent_100%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1541888081622-3a42cbc379b2?q=80&w=2070&auto=format&fit=crop" 
                alt="Concrete pouring team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="font-display font-bold text-5xl mb-2 text-brand-red">15+</div>
                <div className="text-lg uppercase tracking-widest font-bold">Years of Excellence</div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2} className="w-full">
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-3">About Us</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 uppercase leading-tight">
                Premium Concrete <br className="hidden sm:block" /> Solutions
              </h3>
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-20 h-1 bg-brand-red mb-6 origin-left"
              ></motion.div>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Advance Concrete Service delivers premium, turnkey concrete solutions. From site clearing to custom stamping, we bring precision, reliability, and unmatched craftsmanship to every residential and commercial project.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <Link to="/about" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors inline-flex items-center group">
                  Read Our Story
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="relative py-20 md:py-32 bg-brand-black">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-brand-black/50 z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356f12?q=80&w=2070&auto=format&fit=crop" 
            alt="Concrete construction background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Services</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              The "Turnkey" Promise
            </h3>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-brand-red mx-auto mb-6 origin-center"
            ></motion.div>
            <p className="text-gray-300 text-lg">
              We handle everything from site clearing to the final custom stamp. High-quality concrete for residential, commercial, and municipal projects.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={0.1} className="relative bg-white p-8 rounded-2xl hover:-translate-y-2 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden border-[3px] border-transparent hover:border-brand-red">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-2xl mb-8 group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,31,42,0.4)] group-hover:scale-110">
                  <HomeIcon className="text-brand-black group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-black transition-colors duration-500 mb-4 uppercase tracking-wide">Residential</h4>
                <p className="text-gray-800 transition-colors duration-500 mb-8 leading-relaxed flex-grow font-medium">
                  Transform your home's exterior with durable, beautifully finished driveways, sidewalks, and patios.
                </p>
                <Link to="/services/residential" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-red group-hover:text-red-800 transition-colors duration-500 mt-auto">
                  Explore Service <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative bg-white p-8 rounded-2xl hover:-translate-y-2 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden border-[3px] border-transparent hover:border-brand-red">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-2xl mb-8 group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,31,42,0.4)] group-hover:scale-110">
                  <Factory className="text-brand-black group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-black transition-colors duration-500 mb-4 uppercase tracking-wide">Commercial</h4>
                <p className="text-gray-800 transition-colors duration-500 mb-8 leading-relaxed flex-grow font-medium">
                  Reliable, heavy-duty concrete solutions for businesses, parking lots, and general contractors.
                </p>
                <Link to="/services/commercial" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-red group-hover:text-red-800 transition-colors duration-500 mt-auto">
                  Explore Service <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="relative bg-white p-8 rounded-2xl hover:-translate-y-2 shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col h-full overflow-hidden border-[3px] border-transparent hover:border-brand-red">
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-gray-50 border border-gray-100 flex items-center justify-center rounded-2xl mb-8 group-hover:border-brand-red group-hover:bg-brand-red transition-all duration-500 shadow-sm group-hover:shadow-[0_0_20px_rgba(250,31,42,0.4)] group-hover:scale-110">
                  <Landmark className="text-brand-black group-hover:text-white transition-colors duration-500" size={32} strokeWidth={1.5} />
                </div>
                <h4 className="text-2xl font-display font-bold text-brand-black transition-colors duration-500 mb-4 uppercase tracking-wide">Municipal</h4>
                <p className="text-gray-800 transition-colors duration-500 mb-8 leading-relaxed flex-grow font-medium">
                  Large-scale municipal builds requiring precision, strict compliance, and robust infrastructure.
                </p>
                <Link to="/services/municipal" className="inline-flex items-center text-sm font-bold uppercase tracking-widest text-brand-red group-hover:text-red-800 transition-colors duration-500 mt-auto">
                  Explore Service <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="relative py-20 md:py-28 bg-white overflow-hidden">
        {/* Subtle Concrete Texture Background */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center grayscale opacity-[0.03] [mask-image:linear-gradient(135deg,black_0%,transparent_100%)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 uppercase">
              Project Gallery
            </h3>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-brand-red mx-auto mb-6 origin-center"
            ></motion.div>
          </FadeIn>
        </div>

        {/* Continuous Slider */}
        <div className="relative z-10 w-full overflow-hidden flex">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...galleryImages, ...galleryImages].map((image, index) => (
              <div 
                key={index} 
                className="relative w-72 md:w-96 h-64 md:h-80 mx-2 flex-shrink-0 overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold uppercase tracking-wider text-sm md:text-base">{image.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 mt-12 text-center">
          <Link to="/gallery" className="bg-brand-black hover:bg-gray-800 text-white px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block">
            View Full Gallery
          </Link>
        </div>
      </section>

      {/* Reviews Preview Section */}
      <section className="py-20 md:py-28 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Reviews</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 uppercase">
              What Our Clients Say
            </h3>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-20 h-1 bg-brand-red mx-auto mb-6 origin-center"
            ></motion.div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <FadeIn delay={0.1} className="bg-gray-900 p-8 border-t-4 border-brand-red relative hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <Quote className="absolute top-6 right-6 text-gray-800 group-hover:text-brand-red/20 transition-colors duration-300" size={48} />
              <div className="flex text-brand-red mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-300 mb-6 italic relative z-10">
                "Advance Concrete did an amazing job on our new stamped patio. The crew was professional, family-friendly, and the attention to detail was incredible. Highly recommend!"
              </p>
              <p className="font-bold uppercase tracking-wider text-sm text-white">- Sarah M.</p>
            </FadeIn>

            <FadeIn delay={0.2} className="bg-gray-900 p-8 border-t-4 border-brand-red relative hover:-translate-y-2 transition-transform duration-300 shadow-xl group">
              <Quote className="absolute top-6 right-6 text-gray-800 group-hover:text-brand-red/20 transition-colors duration-300" size={48} />
              <div className="flex text-brand-red mb-4">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>
              <p className="text-gray-300 mb-6 italic relative z-10">
                "We hired them for a large commercial parking lot. They handled everything from site clearing to the final finish. True turnkey service and great communication."
              </p>
              <p className="font-bold uppercase tracking-wider text-sm text-white">- David T.</p>
            </FadeIn>
          </div>

          <div className="mt-12 text-center">
            <Link to="/reviews" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-black px-8 py-3 font-bold uppercase tracking-widest transition-colors inline-block">
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner (Contact) */}
      <section className="bg-brand-red py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 uppercase">Ready to start your next project?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact Your Quality Concrete Experts today. We provide turnkey solutions and free, no-obligation estimates.
          </p>
          <Link to="/contact" className="bg-brand-black hover:bg-gray-900 text-white px-10 py-4 font-bold uppercase tracking-widest transition-colors inline-block shadow-lg">
            Get Your Free Estimate
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-red transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image" 
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </>
  );
}
