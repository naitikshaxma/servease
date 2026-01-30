
import React from 'react';
import useReveal from '../hooks/useReveal';
import { PROVIDERS } from '../constants';

const ProviderProfile: React.FC = () => {
  const addToRefs = useReveal();
  const provider = PROVIDERS[0];

  return (
    <div className="pt-32 pb-32 bg-[#020617] min-h-screen">
      <div className="container mx-auto px-8 max-w-4xl">
        <div ref={addToRefs} className="blur-reveal mb-20 text-center">
          <div className="w-40 h-40 mx-auto mb-10 rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-900 relative group">
            <img src={provider.imageUrl} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Profile" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Update Photo</span>
            </div>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tighter uppercase mb-2">{provider.name}</h1>
          <p className="text-blue-400 font-black uppercase tracking-[0.4em] text-[10px]">Senior {provider.serviceId} Node</p>
        </div>

        <div ref={addToRefs} className="blur-reveal bg-slate-900 rounded-[50px] p-12 md:p-16 border border-white/5 shadow-2xl">
          <form className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative">
                <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Full Identity</label>
                <input type="text" defaultValue={provider.name} className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none shadow-sm font-bold text-white transition-all" />
              </div>
              <div className="group relative">
                <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Deployment Category</label>
                <select className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none shadow-sm font-bold text-white uppercase tracking-widest text-xs transition-all appearance-none">
                  <option>Electrician</option>
                  <option>Plumber</option>
                  <option>AC Repair</option>
                </select>
              </div>
            </div>

            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Professional Manifesto</label>
              <textarea rows={5} defaultValue={provider.description} className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none shadow-sm font-medium text-slate-300 leading-relaxed transition-all"></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group relative">
                <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Experience Index</label>
                <input type="text" defaultValue={provider.experience} className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none shadow-sm font-bold text-white transition-all" />
              </div>
              <div className="group relative">
                <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Baseline Rate</label>
                <input type="text" defaultValue={provider.price} className="w-full px-8 py-5 bg-slate-800 border border-white/5 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none shadow-sm font-bold text-white transition-all" />
              </div>
            </div>

            <div className="flex justify-end pt-8">
              <button className="cta-cinematic px-16 py-5 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.2em] text-[10px] shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all">
                Synchronize Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
