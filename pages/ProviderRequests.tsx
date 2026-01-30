
import React, { useState } from 'react';
import useReveal from '../hooks/useReveal';
import { DUMMY_REQUESTS } from '../constants';

const ProviderRequests: React.FC = () => {
  const addToRefs = useReveal();
  const [requests, setRequests] = useState(DUMMY_REQUESTS);

  const handleAction = (id: string, newStatus: 'accepted' | 'rejected') => {
    setRequests(requests.map(r => r.id === id ? { ...r, status: newStatus } : r));
  };

  return (
    <div className="pt-32 pb-32 bg-[#020617] min-h-screen">
      <div className="container mx-auto px-8">
        <div ref={addToRefs} className="blur-reveal mb-16">
          <h1 className="text-5xl font-black tracking-tighter text-white mb-4 uppercase">Inbound <span className="text-blue-500">Requests</span></h1>
          <p className="text-slate-400 text-lg font-light">Monitor your current deployment invitations in real-time.</p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {requests.map((req, i) => (
            <div 
              key={req.id} 
              ref={addToRefs}
              className="blur-reveal bg-slate-900 p-10 md:p-12 rounded-[40px] shadow-2xl border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-10 hover:border-blue-500/30 transition-all"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="flex items-start space-x-8">
                <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase mb-2">{req.customerName}</h3>
                  <div className="flex flex-wrap gap-4 items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth="2"></path></svg>
                      {req.date}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth="2"></path></svg>
                      {req.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                {req.status === 'pending' ? (
                  <>
                    <button 
                      onClick={() => handleAction(req.id, 'rejected')}
                      className="px-10 py-4 border-2 border-white/5 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-500 hover:border-red-500 hover:text-red-500 transition-all"
                    >
                      Decline
                    </button>
                    <button 
                      onClick={() => handleAction(req.id, 'accepted')}
                      className="px-10 py-4 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95"
                    >
                      Accept Deployment
                    </button>
                  </>
                ) : (
                  <div className={`px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-widest ${req.status === 'accepted' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-500 border border-white/5'}`}>
                    {req.status}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderRequests;
