
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import useReveal from '../hooks/useReveal';

const ServicesPage: React.FC = () => {
  const addToRefs = useReveal();

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Cinematic Header with Shutter Reveal */}
      <section className="relative h-[60vh] flex items-center justify-center shutter-wrapper" ref={addToRefs}>
        <div className="shutter-panel shutter-top"></div>
        <div className="shutter-panel shutter-bottom"></div>
        
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-zoom opacity-40 grayscale" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1517646281694-2303a1181b94?q=80&w=2000')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 blur-reveal active tracking-tighter" ref={addToRefs}>
            CHOOSE YOUR <span className="text-blue-500">EXPERT</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto blur-reveal" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
            A curated selection of the finest artisans in Delhi NCR.
          </p>
        </div>
      </section>

      {/* Grid of Cinematic Service Cards */}
      <div className="container mx-auto px-8 pb-32 -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {SERVICES.map((service, index) => (
            <Link 
              to={`/providers/${service.id}`}
              key={service.id}
              ref={addToRefs}
              className="blur-reveal floating-card group relative h-[500px] rounded-[40px] overflow-hidden gradient-border p-[1px] transition-all duration-700"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 w-full h-full bg-black rounded-[40px] overflow-hidden">
                {/* Image with Grayscale to Color Morph */}
                <div 
                  ref={addToRefs}
                  className="morph-color absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-[2s] group-hover:scale-110 group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${service.imageUrl})` }}
                >
                  {/* Progressive Dark Gradient for Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:via-black/20 transition-all duration-700"></div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-10 z-10">
                  <div className="w-14 h-14 bg-blue-600/30 backdrop-blur-2xl border border-white/20 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-3 group-hover:text-blue-500 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center space-x-3 text-blue-500 font-black uppercase tracking-widest text-[10px]">
                    <span>Initiate Deployment</span>
                    <svg className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Final Cinematic CTA Section */}
      <section className="py-40 bg-white text-black relative overflow-hidden">
        <div className="container mx-auto px-8 text-center relative z-10">
          <div ref={addToRefs} className="blur-reveal">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter uppercase">READY FOR <span className="text-blue-600">EXCELLENCE?</span></h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-12">
              Our support team is standing by to ensure your service experience is perfectly choreographed.
            </p>
            <Link 
              to="/contact" 
              className="cta-cinematic inline-flex items-center px-12 py-5 bg-black text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-blue-600 transition-all shadow-2xl"
            >
              Contact Command Center
            </Link>
          </div>
        </div>
        
        {/* Subtle Background Particles / Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 opacity-50"></div>
      </section>
    </div>
  );
};

export default ServicesPage;
