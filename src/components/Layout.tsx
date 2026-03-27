import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Menu, X, ChevronDown, Facebook } from 'lucide-react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-black text-white py-2 px-4 md:px-8 text-sm hidden md:flex justify-between items-center z-50 relative">
        <div className="flex items-center space-x-6">
          <a href="tel:9139275368" className="flex items-center hover:text-brand-red transition-colors">
            <Phone size={14} className="mr-2 text-brand-red" />
            (913) 927-5368
          </a>
          <a href="mailto:brandon.miller@advanceconcretekc.com" className="flex items-center hover:text-brand-red transition-colors">
            <Mail size={14} className="mr-2 text-brand-red" />
            brandon.miller@advanceconcretekc.com
          </a>
        </div>
        <div className="flex items-center">
          <MapPin size={14} className="mr-2 text-brand-red" />
          19780 Antioch Road, Bucyrus 66013
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2 top-0' : 'bg-transparent py-6 md:top-[36px] top-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center cursor-pointer">
            <img 
              src="/logo.png" 
              alt="Advance Concrete KC Logo" 
              className={`transition-all duration-300 object-contain ${isScrolled ? 'h-12' : 'h-16 brightness-0 invert'}`}
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className={`font-semibold hover:text-brand-red uppercase tracking-wide transition-all duration-300 ${isScrolled ? 'text-sm text-brand-black' : 'text-base text-white'}`}>Home</Link>
            <Link to="/about" className={`font-semibold hover:text-brand-red uppercase tracking-wide transition-all duration-300 ${isScrolled ? 'text-sm text-brand-black' : 'text-base text-white'}`}>About Us</Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative group h-full flex items-center"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`font-semibold hover:text-brand-red uppercase tracking-wide flex items-center transition-all duration-300 py-2 ${isScrolled ? 'text-sm text-brand-black' : 'text-base text-white'}`}>
                Our Services <ChevronDown size={14} className="ml-1" />
              </button>
              
              <div className={`absolute top-full left-0 bg-white shadow-xl border-t-2 border-brand-red w-56 transition-all duration-200 origin-top ${isServicesOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                <Link to="/services/residential" onClick={() => setIsServicesOpen(false)} className="block w-full text-left px-5 py-3 text-base font-semibold text-brand-black hover:bg-gray-50 hover:text-brand-red transition-colors border-b border-gray-100 uppercase tracking-wide">Residential</Link>
                <Link to="/services/commercial" onClick={() => setIsServicesOpen(false)} className="block w-full text-left px-5 py-3 text-base font-semibold text-brand-black hover:bg-gray-50 hover:text-brand-red transition-colors border-b border-gray-100 uppercase tracking-wide">Commercial</Link>
                <Link to="/services/municipal" onClick={() => setIsServicesOpen(false)} className="block w-full text-left px-5 py-3 text-base font-semibold text-brand-black hover:bg-gray-50 hover:text-brand-red transition-colors border-b border-gray-100 uppercase tracking-wide">Municipal</Link>
                <Link to="/services/grading" onClick={() => setIsServicesOpen(false)} className="block w-full text-left px-5 py-3 text-base font-semibold text-brand-black hover:bg-gray-50 hover:text-brand-red transition-colors border-b border-gray-100 uppercase tracking-wide">Grading</Link>
                <Link to="/services/decorative" onClick={() => setIsServicesOpen(false)} className="block w-full text-left px-5 py-3 text-base font-semibold text-brand-black hover:bg-gray-50 hover:text-brand-red transition-colors uppercase tracking-wide">Decorative/Stamped</Link>
              </div>
            </div>

            <Link to="/gallery" className={`font-semibold hover:text-brand-red uppercase tracking-wide transition-all duration-300 ${isScrolled ? 'text-sm text-brand-black' : 'text-base text-white'}`}>Gallery</Link>
            <a href="/#reviews" className={`font-semibold hover:text-brand-red uppercase tracking-wide transition-all duration-300 ${isScrolled ? 'text-sm text-brand-black' : 'text-base text-white'}`}>Reviews</a>
            <Link to="/contact" className={`bg-brand-red text-white font-bold uppercase tracking-wide hover:bg-red-700 transition-all duration-300 ${isScrolled ? 'px-5 py-2 text-sm' : 'px-6 py-3 text-base'}`}>
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`focus:outline-none transition-colors duration-300 ${isScrolled ? 'text-brand-black' : 'text-white'}`}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col space-y-2 max-h-[80vh] overflow-y-auto">
            <Link to="/" className="text-left font-semibold text-brand-black py-2 uppercase tracking-wide">Home</Link>
            <Link to="/about" className="text-left font-semibold text-brand-black py-2 uppercase tracking-wide">About Us</Link>
            
            <div className="py-2">
              <div className="text-left font-semibold text-brand-black uppercase tracking-wide w-full flex justify-between items-center">
                Our Services
              </div>
              <div className="pl-4 mt-2 flex flex-col space-y-2 border-l-2 border-brand-red">
                <Link to="/services/residential" className="text-left text-sm font-semibold text-gray-600 py-1 uppercase tracking-wide">Residential</Link>
                <Link to="/services/commercial" className="text-left text-sm font-semibold text-gray-600 py-1 uppercase tracking-wide">Commercial</Link>
                <Link to="/services/municipal" className="text-left text-sm font-semibold text-gray-600 py-1 uppercase tracking-wide">Municipal</Link>
                <Link to="/services/grading" className="text-left text-sm font-semibold text-gray-600 py-1 uppercase tracking-wide">Grading</Link>
                <Link to="/services/decorative" className="text-left text-sm font-semibold text-gray-600 py-1 uppercase tracking-wide">Decorative/Stamped</Link>
              </div>
            </div>

            <Link to="/gallery" className="text-left font-semibold text-brand-black py-2 uppercase tracking-wide">Gallery</Link>
            <a href="/#reviews" className="text-left font-semibold text-brand-black py-2 uppercase tracking-wide">Reviews</a>
            <Link to="/contact" className="bg-brand-red text-white px-6 py-3 font-bold uppercase tracking-wide text-center w-full mt-4">
              Free Estimate
            </Link>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <Link to="/" className="inline-block mb-4">
                <img 
                  src="/logo.png" 
                  alt="Advance Concrete KC Logo" 
                  className="h-20 w-auto object-contain brightness-0 invert" 
                />
              </Link>
              <p className="text-gray-400 max-w-sm">
                Your Quality Concrete Experts providing turnkey solutions with over 15 years of industry expertise. Free estimates and precise measurements—because every pour starts with a plan.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-brand-red">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/services/residential" className="text-gray-400 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
                <li><a href="/#reviews" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-widest text-sm mb-4 text-brand-red">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="tel:9139275368" className="hover:text-white transition-colors">(913) 927-5368</a></li>
                <li><a href="mailto:brandon.miller@advanceconcretekc.com" className="hover:text-white transition-colors">brandon.miller@advanceconcretekc.com</a></li>
                <li>19780 Antioch Road<br/>Bucyrus, KS 66013</li>
              </ul>
              <div className="mt-6 flex items-center space-x-4">
                <a href="https://www.facebook.com/people/Advance-Concrete-Services/61559164107717/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-red transition-colors" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Advance Concrete Service. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
