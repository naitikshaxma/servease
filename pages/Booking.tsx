
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { PROVIDERS } from '../constants';

const Booking: React.FC = () => {
  const { providerId } = useParams();
  const navigate = useNavigate();
  const addToRefs = useReveal();
  const provider = PROVIDERS.find(p => p.id === providerId);
  const [confirmed, setConfirmed] = useState(false);

  if (!provider) return null;

  const handleBooking = () => {
    setConfirmed(true);
    setTimeout(() => navigate('/services'), 3000);
  };

  return (
    <div className="pt-32 pb-32 bg-[#020617] min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-8 max-w-3xl">
        {!confirmed ? (
          <div ref={addToRefs} className="blur-reveal active bg-slate-900 p-12 md:p-20 rounded-[60px] shadow-2xl border border-white/5">
            <h1 className="text-4xl font-black tracking-tighter uppercase mb-12 text-center text-white">Deployment <span className="text-blue-500">Verification</span></h1>
            
            <div className="flex items-center space-x-8 mb-16 p-8 bg-slate-800/50 rounded-[30px] border border-white/5">
              <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-lg border border-white/10">
                <img src={provider.imageUrl} className="w-full h-full object-cover" alt={provider.name} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">{provider.name}</h3>
                <p className="text-blue-400 font-bold uppercase tracking-widest text-[10px]">{provider.experience} Veteran Operative</p>
              </div>
            </div>

            <div className="space-y-10 mb-16">
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Target Protocol</span>
                <span className="font-bold text-white">Standard Service Engagement</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-6">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Baseline Rate</span>
                <span className="font-bold text-white">{provider.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500">Deployment Grid</span>
                <span className="font-bold text-white">Delhi NCR Central</span>
              </div>
            </div>

            <button 
              onClick={handleBooking}
              className="cta-cinematic w-full bg-blue-600 text-white py-6 rounded-3xl font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
            >
              Confirm Engagement
            </button>
          </div>
        ) : (
          <div ref={addToRefs} className="blur-reveal active text-center p-20 bg-slate-900 rounded-[60px] shadow-2xl shadow-blue-600/20 border border-white/5">
            <div className="w-24 h-24 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-10 animate-bounce border border-emerald-500/20">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-6">Synchronization <span className="text-blue-500">Successful</span></h2>
            <p className="text-slate-400 text-lg font-light mb-10 leading-relaxed">Your request has been broadcasted to the operative. Please remain stationed for confirmation.</p>
            <div className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] animate-pulse">Returning to Command Center...</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
