
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { ProviderService } from '../types';
import { SERVICES } from '../constants';

const AddEditService: React.FC = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const addToRefs = useReveal();
  const isEdit = !!serviceId;

  const [formData, setFormData] = useState<Partial<ProviderService>>({
    name: '',
    category: SERVICES[0].name,
    price: '₹',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200',
    availability: 'Available',
    location: 'Delhi NCR'
  });

  useEffect(() => {
    if (isEdit) {
      const allServices: ProviderService[] = JSON.parse(localStorage.getItem('serveease_provider_services') || '[]');
      const found = allServices.find(s => s.id === serviceId);
      if (found) setFormData(found);
    }
  }, [serviceId, isEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('serveease_user') || '{}');
    const allServices: ProviderService[] = JSON.parse(localStorage.getItem('serveease_provider_services') || '[]');
    
    if (isEdit) {
      const updated = allServices.map(s => s.id === serviceId ? { ...s, ...formData } : s);
      localStorage.setItem('serveease_provider_services', JSON.stringify(updated));
    } else {
      const newService: ProviderService = {
        ...formData as ProviderService,
        id: 's' + Date.now(),
        providerId: user.id,
        providerName: user.name
      };
      allServices.push(newService);
      localStorage.setItem('serveease_provider_services', JSON.stringify(allServices));
    }
    navigate('/provider/my-services');
  };

  return (
    <div className="pb-20">
      <div ref={addToRefs} className="blur-reveal active mb-16">
        <h1 className="text-5xl font-black tracking-tighter text-white uppercase mb-4">
          {isEdit ? 'Reconfigure' : 'Deploy'} <span className="text-blue-500">Service</span>
        </h1>
        <p className="text-slate-400">Configure your professional deployment parameters.</p>
      </div>

      <div ref={addToRefs} className="blur-reveal active bg-slate-900 rounded-[50px] p-10 md:p-16 border border-white/5 shadow-2xl">
        <form onSubmit={handleSubmit} className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Service Identity</label>
              <input 
                required
                type="text" 
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Ex. Industrial High-Voltage Wiring"
                className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
              />
            </div>
            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Classification</label>
              <select 
                value={formData.category}
                onChange={e => setFormData({...formData, category: e.target.value})}
                className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold appearance-none uppercase tracking-widest text-xs"
              >
                {SERVICES.map(s => <option key={s.id}>{s.name}</option>)}
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Baseline Rate</label>
              <input 
                required
                type="text" 
                value={formData.price}
                onChange={e => setFormData({...formData, price: e.target.value})}
                className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
              />
            </div>
            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Status Level</label>
              <select 
                value={formData.availability}
                onChange={e => setFormData({...formData, availability: e.target.value as any})}
                className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold appearance-none uppercase tracking-widest text-xs"
              >
                <option>Available</option>
                <option>Busy</option>
              </select>
            </div>
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Visual Evidence (URL)</label>
            <input 
              type="text" 
              value={formData.imageUrl}
              onChange={e => setFormData({...formData, imageUrl: e.target.value})}
              className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
            />
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Service Manifesto</label>
            <textarea 
              required
              rows={4}
              value={formData.description}
              onChange={e => setFormData({...formData, description: e.target.value})}
              className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none text-slate-300 font-medium leading-relaxed"
            ></textarea>
          </div>

          <div className="flex justify-end pt-8 space-x-6">
            <button 
              type="button"
              onClick={() => navigate('/provider/my-services')}
              className="px-12 py-5 border-2 border-white/5 text-slate-500 rounded-full font-black uppercase tracking-widest text-[10px] hover:text-white hover:border-white/20 transition-all"
            >
              Abort
            </button>
            <button 
              type="submit"
              className="px-16 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
            >
              {isEdit ? 'Sync Changes' : 'Execute Deployment'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEditService;
