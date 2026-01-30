
import React from 'react';
import useReveal from '../hooks/useReveal';
import { PROVIDERS } from '../constants';

const ProviderEarnings: React.FC = () => {
  const addToRefs = useReveal();
  const provider = PROVIDERS[0];

  return (
    <div className="pb-20">
      <div ref={addToRefs} className="blur-reveal active mb-16">
        <h1 className="text-5xl font-black tracking-tighter text-white uppercase mb-4">Financial <span className="text-blue-500">Yield</span></h1>
        <p className="text-slate-400">Total economic generation from expert deployment.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-20">
        <div ref={addToRefs} className="blur-reveal active lg:col-span-2 bg-slate-900 rounded-[50px] p-12 border border-white/5 shadow-2xl">
          <div className="flex justify-between items-center mb-12">
            <h3 className="text-xl font-black uppercase tracking-tighter text-white">Earnings Trajectory</h3>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Year-to-date</span>
          </div>
          {/* Static Chart Mockup */}
          <div className="h-64 flex items-end justify-between space-x-2">
            {[40, 60, 35, 90, 75, 55, 100, 85, 95, 120, 110, 140].map((h, i) => (
              <div key={i} className="flex-1 group relative">
                <div 
                  className="bg-blue-600/20 group-hover:bg-blue-600 transition-all rounded-t-lg" 
                  style={{ height: `${h}px` }}
                ></div>
                <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-[8px] font-black text-slate-600 uppercase">
                  {['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'][i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div ref={addToRefs} className="blur-reveal active bg-slate-900 rounded-[40px] p-10 border border-white/5 shadow-xl">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Current Cycle</p>
            <h4 className="text-4xl font-black text-white">{provider.earnings}</h4>
            <div className="mt-6 flex items-center text-emerald-400 text-[10px] font-black uppercase tracking-widest">
              <span>↑ 12.5% vs Last Cycle</span>
            </div>
          </div>
          <div ref={addToRefs} className="blur-reveal active bg-slate-900 rounded-[40px] p-10 border border-white/5 shadow-xl" style={{ transitionDelay: '0.1s' }}>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Lifecycle Yield</p>
            <h4 className="text-4xl font-black text-white">₹2,48,500</h4>
            <div className="mt-6 flex items-center text-blue-400 text-[10px] font-black uppercase tracking-widest">
              <span>{provider.totalJobs} Deployments</span>
            </div>
          </div>
        </div>
      </div>

      <div ref={addToRefs} className="blur-reveal active bg-slate-900 rounded-[50px] p-12 md:p-16 border border-white/5">
        <h3 className="text-2xl font-black uppercase tracking-tighter text-white mb-10">Payment Grid</h3>
        <div className="space-y-6">
          {[
            { id: 'TX-901', date: '25 Mar', amount: '₹1,200', status: 'Settled' },
            { id: 'TX-892', date: '22 Mar', amount: '₹3,500', status: 'Settled' },
            { id: 'TX-884', date: '18 Mar', amount: '₹2,100', status: 'Processing' },
          ].map((tx) => (
            <div key={tx.id} className="flex items-center justify-between p-8 bg-slate-800/50 rounded-[30px] border border-transparent hover:border-white/5 transition-all">
              <div className="flex items-center space-x-8">
                <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center font-black text-[10px] text-blue-400">{tx.date}</div>
                <div>
                  <p className="font-black text-white uppercase tracking-tight">{tx.id}</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">ACH Transfer</p>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <p className="text-xl font-black text-white">{tx.amount}</p>
                <span className={`text-[8px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full ${tx.status === 'Settled' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'}`}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderEarnings;
