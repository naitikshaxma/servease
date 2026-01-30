
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROVIDERS } from '../constants';
import useReveal from '../hooks/useReveal';

const ProviderDetails: React.FC = () => {
  const { providerId } = useParams<{ providerId: string }>();
  const addToRefs = useReveal();
  const provider = PROVIDERS.find(p => p.id === providerId);

  if (!provider) return null;

  const ratingPercent = (provider.rating / 5) * 100;

  return (
    <div className="pt-32 pb-32 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Floating Profile Card */}
          <div className="lg:col-span-5">
            <div ref={addToRefs} className="blur-reveal floating-card gradient-border p-1 bg-black overflow-hidden sticky top-32">
              <div className="bg-black rounded-[1.4rem] p-8">
                <div className="aspect-square rounded-3xl overflow-hidden mb-10 group">
                  <img src={provider.imageUrl} alt={provider.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                </div>
                
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <h1 className="text-4xl font-black tracking-tighter uppercase mb-2">{provider.name}</h1>
                    <p className="text-blue-500 font-bold uppercase tracking-widest text-sm">{provider.experience} Veteran</p>
                  </div>
                  <div ref={addToRefs} className="star-mask text-3xl mb-1" style={{ '--rating-width': `${ratingPercent}%` } as any}>
                    ☆☆☆☆☆
                    <div className="star-fill">★★★★★</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href={`tel:${provider.contact}`} className="flex items-center justify-center space-x-3 bg-white text-black py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-500 hover:text-white transition-all">
                    <span>Initiate Call</span>
                  </a>
                  <a href="#" className="flex items-center justify-center space-x-3 bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all">
                    <span>Direct Chat</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Location Pin */}
          <div className="lg:col-span-7 space-y-24">
            <div ref={addToRefs} className="blur-reveal">
              <h2 className="text-5xl font-black mb-10 tracking-tighter uppercase">Expertise <span className="text-blue-500">& Scope</span></h2>
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-12">
                {provider.description}. Every maneuver is executed with professional precision. We ensure that our practitioners adhere to the highest cinematic standards of service delivery.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                  <div className="text-blue-500 font-black mb-2">VERIFIED STATUS</div>
                  <p className="text-sm text-gray-500">Artisan identity and background audited by our master controllers.</p>
                </div>
                <div className="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl">
                  <div className="text-blue-500 font-black mb-2">IMMERSIVE SUPPORT</div>
                  <p className="text-sm text-gray-500">Concierge level assistance for all deployment queries.</p>
                </div>
              </div>
            </div>

            <div ref={addToRefs} className="blur-reveal">
              <h3 className="text-3xl font-black mb-10 tracking-tight uppercase">Strategic Location</h3>
              <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden border border-white/10">
                <iframe 
                  src="https://www.google.com/maps?q=Delhi+NCR&output=embed" 
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(1)' }} 
                  allowFullScreen={false} loading="lazy" title="Map"
                ></iframe>
                {/* Visual Location Pin Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ripple-pulse">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-2xl relative z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetails;
