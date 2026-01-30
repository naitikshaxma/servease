
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROVIDERS, SERVICES } from '../constants';
import useReveal from '../hooks/useReveal';
import { ProviderService } from '../types';

const ProvidersList: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const addToRefs = useReveal();
  
  const service = SERVICES.find(s => s.id === serviceId);
  const [displayNodes, setDisplayNodes] = useState<any[]>([]);

  useEffect(() => {
    // Merge constant providers with dynamically added ones from local storage
    const customServices: ProviderService[] = JSON.parse(localStorage.getItem('serveease_provider_services') || '[]');
    const categoryMatched = customServices.filter(s => s.category.toLowerCase() === service?.name.toLowerCase());
    
    const staticMatched = PROVIDERS.filter(p => p.serviceId === serviceId).map(p => ({
      ...p,
      isStatic: true
    }));

    const dynamicMatched = categoryMatched.map(s => ({
      id: s.id,
      name: s.providerName,
      serviceName: s.name,
      rating: 4.5, // Default for new
      price: s.price,
      experience: 'Verified',
      imageUrl: s.imageUrl,
      description: s.description,
      isStatic: false
    }));

    setDisplayNodes([...dynamicMatched, ...staticMatched]);
  }, [serviceId, service]);

  return (
    <div className="pt-32 pb-32 bg-[#020617] min-h-screen">
      <div className="container mx-auto px-8">
        <div ref={addToRefs} className="blur-reveal mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="flex items-center space-x-3 text-blue-400 mb-6">
              <span className="text-4xl group-hover:scale-125 transition-transform">{service?.icon}</span>
              <span className="text-xs font-black uppercase tracking-[0.4em]">{service?.name} Operations</span>
            </div>
            <h1 className="text-5xl font-black tracking-tighter text-white uppercase">Master <span className="text-blue-500">Operatives</span></h1>
            <p className="text-slate-400 mt-4 text-lg font-light leading-relaxed max-w-xl">
              Showing {displayNodes.length} verified experts synchronized with the {service?.name} protocol in Delhi NCR.
            </p>
          </div>
          <Link to="/services" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-blue-400 flex items-center transition-all group">
            <svg className="w-4 h-4 mr-2 group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path>
            </svg>
            Abort Protocol
          </Link>
        </div>

        {displayNodes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {displayNodes.map((p, index) => {
              const ratingPercent = (p.rating / 5) * 100;
              return (
                <div 
                  key={p.id}
                  ref={addToRefs}
                  className="blur-reveal bg-slate-900 rounded-[50px] overflow-hidden shadow-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-700 flex flex-col group"
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className="h-72 overflow-hidden relative">
                    <img src={p.imageUrl} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s] morph-color active grayscale" />
                    <div className="absolute top-6 right-6 bg-slate-950/90 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-black text-blue-400 shadow-xl border border-white/10">
                      RANK {p.rating}
                    </div>
                  </div>
                  <div className="p-10 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white">{p.name}</h3>
                      {!p.isStatic && <span className="text-[8px] font-black text-emerald-400 border border-emerald-400/20 bg-emerald-400/5 px-3 py-1 rounded-full uppercase tracking-widest">Market Listing</span>}
                    </div>
                    {p.serviceName && <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{p.serviceName}</p>}
                    
                    <div ref={addToRefs} className="star-mask text-xl mb-6 blur-reveal active" style={{ '--rating-width': `${ratingPercent}%` } as any}>
                      ☆☆☆☆☆
                      <div className="star-fill">★★★★★</div>
                    </div>
                    
                    <div className="mb-10 space-y-4">
                      <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest">{p.experience} Deployment History</p>
                      <p className="text-slate-400 text-sm font-light leading-relaxed line-clamp-2">{p.description}</p>
                    </div>
                    
                    <div className="mt-auto pt-8 border-t border-white/5 flex items-center justify-between">
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-1">Baseline</p>
                        <p className="text-xl font-black text-white">{p.price}</p>
                      </div>
                      <Link 
                        to={p.isStatic ? `/provider-detail/${p.id}` : `/provider-detail/${p.id}`} 
                        className="cta-cinematic bg-blue-600 text-white px-8 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/10"
                      >
                        Interface
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-32 bg-slate-900/50 rounded-[60px] border-2 border-dashed border-white/5">
            <div className="text-6xl mb-10 opacity-20">📡</div>
            <p className="text-slate-500 text-xl font-light uppercase tracking-widest">No nodes detected in this sector.</p>
            <Link to="/services" className="text-blue-400 mt-8 inline-block font-black uppercase tracking-widest text-xs hover:tracking-[0.4em] transition-all">Try Alternate Grid</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProvidersList;
