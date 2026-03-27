import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Hammer, Building2, Landmark, Shovel, HardHat } from 'lucide-react';
import { FadeIn } from '../components/FadeIn';

const ServiceLayout = ({ title, icon: Icon, description, image }: { title: string, icon: any, description: React.ReactNode, image: string }) => (
  <>
    <section className="bg-brand-black pt-32 pb-20 md:pt-40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-brand-red flex items-center justify-center rounded-full">
            <Icon size={40} className="text-white" />
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-display font-bold uppercase mb-4">{title}</h1>
        <div className="w-20 h-1 bg-brand-red mx-auto"></div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <div className="overflow-hidden group shadow-2xl border-l-8 border-brand-red">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div>
              <h2 className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">Our Services</h2>
              <h3 className="text-4xl font-display font-bold text-brand-black mb-6 uppercase leading-tight">
                {title} Concrete Solutions
              </h3>
              <div className="w-20 h-1 bg-brand-red mb-8"></div>
              
              <div className="space-y-6 text-gray-700 text-lg">
                {description}
              </div>
              
              <div className="mt-10">
                <Link to="/contact" className="bg-brand-red hover:bg-red-700 text-white px-8 py-4 font-bold uppercase tracking-widest transition-colors inline-flex items-center group">
                  Get a Free Estimate
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

export function Residential() {
  return (
    <ServiceLayout 
      title="Residential"
      icon={Hammer}
      image="/residential2.jpg"
      description={
        <>
          <p>
            Transform your home's exterior with durable, beautifully finished <strong>driveways, sidewalks, patios, and remodeling</strong>. We focus on proper drainage and a flawless finish to elevate your property's value.
          </p>
          <p>
            Our residential concrete services are designed with the homeowner in mind. We provide turnkey solutions, handling everything from the initial tear-out and site prep to the final pour and finish.
          </p>
          <p>
            With over 15 years of experience, we guarantee accuracy with thorough measurements and a family-friendly, professional approach on every job site.
          </p>
        </>
      }
    />
  );
}

export function Commercial() {
  return (
    <ServiceLayout 
      title="Commercial"
      icon={Building2}
      image="/gallery3.jpg"
      description={
        <>
          <p>
            Reliable, heavy-duty concrete solutions for businesses. We partner seamlessly with general contractors, meeting strict deadlines and specifications with uncompromising quality for parking lots, foundations, and more.
          </p>
          <p>
            Commercial projects demand precision and durability. Our team is equipped to handle large-scale pours, ensuring structural integrity that can withstand heavy traffic and the elements.
          </p>
          <p>
            We offer free estimates and thorough measurements to guarantee accuracy, ensuring your commercial project stays on budget and on schedule.
          </p>
        </>
      }
    />
  );
}

export function Municipal() {
  return (
    <ServiceLayout 
      title="Municipal"
      icon={Landmark}
      image="/mun1.jpg"
      description={
        <>
          <p>
            Large-scale municipal builds require precision and compliance. We deliver robust concrete infrastructure for city projects, public walkways, and civic developments built to endure heavy public use.
          </p>
          <p>
            Our turnkey promise means we handle the complexities of municipal contracting, from site clearing to the final finish, ensuring all local codes and standards are strictly met.
          </p>
          <p>
            Trust our 15+ years of industry expertise to deliver civic projects that serve the community for decades to come.
          </p>
        </>
      }
    />
  );
}

export function Grading() {
  return (
    <ServiceLayout 
      title="Site Prep & Grading"
      icon={Shovel}
      image="/gallery11.png"
      description={
        <>
          <p>
            A flawless finish starts from the ground up. Our comprehensive <strong>site preparation and grading</strong> ensure proper drainage, stability, and a long-lasting foundation for every concrete project.
          </p>
          <p>
            We don't just pour concrete; we prepare the canvas. Our team handles excavation, dirt removal, leveling, and compacting to prevent future cracking and settling.
          </p>
          <p>
            Proper site prep is the cornerstone of our turnkey solutions. We provide thorough measurements to guarantee accuracy before a single drop of concrete is poured.
          </p>
        </>
      }
    />
  );
}

export function Decorative() {
  return (
    <ServiceLayout 
      title="Decorative & Stamped"
      icon={HardHat}
      image="/home services.jpg"
      description={
        <>
          <p>
            Elevate your surfaces with our expert <strong>finishing and custom stamp</strong> work. We create patterns, colors, and textures that mimic high-end stone, brick, or wood at a fraction of the cost.
          </p>
          <p>
            Perfect for pool decks, patios, and custom walkways that demand high visual impact. Our decorative concrete solutions add significant curb appeal and value to your property.
          </p>
          <p>
            From the initial design consultation to the final sealant, we handle everything. Contact us today for a free estimate and discover the possibilities of stamped concrete.
          </p>
        </>
      }
    />
  );
}
