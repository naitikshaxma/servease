
import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { PROVIDERS } from '../constants';
import { User } from '../types';

interface ProviderDashboardProps {
  user: User | null;
}

const ProviderDashboard: React.FC<ProviderDashboardProps> = ({ user }) => {
  const addToRefs = useReveal();
  const provider = PROVIDERS[0]; // For demo stats

  if (!user) return null;

  return (
    <div className="pb-32 bg-[#020617] min-h-screen">
      <div className="container mx-auto">
        <div ref={addToRefs} className="blur-reveal active mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <div className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Operative Command Center
            </div>
            <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white animate-fade-slide">
              Welcome <span className="text-blue-500">{user.name}</span>, start serving today 🔧
            </h1>
            <p className="text-slate-400 mt-4 text-lg font-light opacity-60">Your expert deployment status is currently <span className="text-emerald-400 font-bold">Active</span>.</p>
          </div>
          <Link to="/provider/requests" className="cta-cinematic bg-blue-600 text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs shadow-xl shadow-blue-600/20">
            View Active Requests
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            { label: 'Monthly Yield', val: provider.earnings, color: 'text-blue-400' },
            { label: 'Active Deployments', val: provider.totalJobs, color: 'text-white' },
            { label: 'Mastery Rank', val: `⭐ ${provider.rating}`, color: 'text-amber-400' }
          ].map((stat, i) => (
            <div key={i} ref={addToRefs} className="blur-reveal group bg-slate-900 p-12 rounded-[40px] shadow-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-4">{stat.label}</div>
              <div className={`text-5xl font-black tracking-tighter ${stat.color} group-hover:scale-110 transition-transform duration-700 origin-left`}>
                {stat.val}
              </div>
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="blur-reveal bg-slate-900 rounded-[50px] p-12 md:p-16 shadow-2xl border border-white/5">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-2xl font-black uppercase tracking-tighter text-white">Performance Grid</h2>
            <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">March 2024 Cycle</div>
          </div>
          <div className="space-y-8">
            {[
              { id: 'JOB-401', client: 'Sarah Johnson', status: 'Completed', pay: '₹1,200', date: '2 hours ago' },
              { id: 'JOB-398', client: 'Mark Davis', status: 'In Progress', pay: '₹3,500', date: 'Today, 10:00 AM' },
              { id: 'JOB-395', client: 'Leila Chen', status: 'Completed', pay: '₹850', date: 'Yesterday' },
            ].map((job, idx) => (
              <div key={job.id} className="flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl bg-slate-800/50 hover:bg-slate-800 transition-colors group border border-transparent hover:border-white/5">
                <div className="flex items-center space-x-8 mb-4 md:mb-0">
                  <div className="w-12 h-12 bg-slate-700 rounded-2xl flex items-center justify-center font-black text-xs text-blue-400">{job.id.split('-')[1]}</div>
                  <div>
                    <div className="font-black text-white uppercase tracking-tight">{job.client}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{job.date}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end md:space-x-16">
                  <span className={`text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full ${job.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400'}`}>{job.status}</span>
                  <div className="text-xl font-black text-white">{job.pay}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
