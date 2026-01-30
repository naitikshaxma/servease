
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { ProviderService } from '../types';

const MyServices: React.FC = () => {
  const addToRefs = useReveal();
  const [services, setServices] = useState<ProviderService[]>([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('serveease_user') || '{}');
    const allServices: ProviderService[] = JSON.parse(localStorage.getItem('serveease_provider_services') || '[]');
    setServices(allServices.filter(s => s.providerId === user.id || s.providerName === user.name));
  }, []);

  const handleDelete = (id: string) => {
    const allServices: ProviderService[] = JSON.parse(localStorage.getItem('serveease_provider_services') || '[]');
    const updated = allServices.filter(s => s.id !== id);
    localStorage.setItem('serveease_provider_services', JSON.stringify(updated));
    setServices(services.filter(s => s.id !== id));
  };

  return (
    <div className="pb-20">
      <div ref={addToRefs} className="blur-reveal active mb-16 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black tracking-tighter text-white uppercase mb-4">My <span className="text-blue-500">Inventory</span></h1>
          <p className="text-slate-400">Manage your active service listings across the NCR grid.</p>
        </div>
        <Link to="/provider/add-service" className="bg-blue-600 text-white px-8 py-4 rounded-full font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95">
          Add New Node
        </Link>
      </div>

      {services.length === 0 ? (
        <div ref={addToRefs} className="blur-reveal active text-center py-32 bg-slate-900/50 rounded-[60px] border-2 border-dashed border-white/5">
          <div className="text-6xl mb-10 opacity-20">📦</div>
          <p className="text-slate-500 text-xl font-light uppercase tracking-widest">No services listed yet.</p>
          <Link to="/provider/add-service" className="text-blue-400 mt-8 inline-block font-black uppercase tracking-widest text-xs">Deploy First Service</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => (
            <div 
              key={service.id}
              ref={addToRefs}
              className="blur-reveal group bg-slate-900 rounded-[40px] overflow-hidden border border-white/5 hover:border-blue-500/30 transition-all duration-700 shadow-2xl flex flex-col md:flex-row"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="md:w-48 h-48 md:h-full relative overflow-hidden flex-shrink-0">
                <img src={service.imageUrl} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={service.name} />
                <div className={`absolute top-4 left-4 px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${service.availability === 'Available' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                  {service.availability}
                </div>
              </div>
              <div className="p-8 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{service.category}</span>
                    <span className="text-xl font-black text-white">{service.price}</span>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">{service.name}</h3>
                  <p className="text-slate-400 text-sm font-light line-clamp-2 mb-6">{service.description}</p>
                </div>
                <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
                  <Link to={`/provider/edit-service/${service.id}`} className="flex-1 bg-white/5 text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center hover:bg-white/10 transition-all">
                    Edit
                  </Link>
                  <button onClick={() => handleDelete(service.id)} className="flex-1 bg-red-500/10 text-red-400 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-red-500/20 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyServices;
