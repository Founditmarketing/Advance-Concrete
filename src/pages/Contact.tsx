import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="bg-brand-black pt-32 pb-20 md:pt-40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">Contact Us</h1>
          <div className="w-20 h-1 bg-brand-red mx-auto"></div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Get in Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-brand-black mb-6 uppercase leading-tight">
                Request a Free Estimate
              </h3>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              <p className="text-gray-600 text-lg mb-10">
                Fill out the form below with details about your project. We provide free estimates and thorough measurements to guarantee accuracy.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-full mr-4 shrink-0">
                    <Phone className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-wide mb-1">Call Us</h4>
                    <a href="tel:9139275368" className="text-gray-600 hover:text-brand-red transition-colors text-lg font-medium">(913) 927-5368</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-full mr-4 shrink-0">
                    <Mail className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-wide mb-1">Email Us</h4>
                    <a href="mailto:brandon.miller@advanceconcretekc.com" className="text-gray-600 hover:text-brand-red transition-colors text-lg font-medium">brandon.miller@advanceconcretekc.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-full mr-4 shrink-0">
                    <MapPin className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-wide mb-1">Location</h4>
                    <p className="text-gray-600 text-lg font-medium">19780 Antioch Road<br/>Bucyrus, KS 66013</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-white shadow-sm flex items-center justify-center rounded-full mr-4 shrink-0">
                    <Facebook className="text-brand-red" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-wide mb-1">Follow Us</h4>
                    <a href="https://www.facebook.com/people/Advance-Concrete-Services/61559164107717/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-brand-red transition-colors text-lg font-medium">Advance Concrete Services</a>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-sm shadow-xl border-t-4 border-brand-red">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">First Name *</label>
                      <input type="text" id="firstName" className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">Last Name *</label>
                      <input type="text" id="lastName" className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">Email Address *</label>
                      <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">Phone Number *</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">Service Needed</label>
                    <select id="service" className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50 appearance-none">
                      <option value="">Select a service...</option>
                      <option value="residential">Residential (Driveways, Patios, Sidewalks)</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="municipal">Municipal Project</option>
                      <option value="grading">Site Prep & Grading</option>
                      <option value="decorative">Decorative/Stamped Concrete</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-brand-black uppercase tracking-wide mb-2">Project Details *</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 focus:border-brand-red focus:ring-1 focus:ring-brand-red outline-none transition-colors bg-gray-50 resize-none" required placeholder="Tell us about your project..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors shadow-md">
                    Send Message
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
