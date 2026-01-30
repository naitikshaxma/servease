
import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { User } from '../types';

interface UserDashboardProps {
  user: User | null;
}

const UserDashboard: React.FC<UserDashboardProps> = ({ user }) => {
  const addToRefs = useReveal();

  if (!user) return null;

  return (
    <div className="pt-32 pb-32 bg-[#020617] min-h-screen">
      <div className="container mx-auto px-8">
        <div ref={addToRefs} className="blur-reveal active">
          <div className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-4">
            Customer Command Center
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white animate-fade-slide">
            Welcome, <span className="text-blue-500">{user.name}</span> 👋
          </h1>
          <p className="text-slate-400 mt-6 text-xl font-light max-w-2xl opacity-60">
            The grid is active. Your current expert engagements are being synchronized.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          {[
            { label: 'Browse Experts', icon: '🔍', link: '/services' },
            { label: 'Active Tasks', icon: '🛠️', val: '2' },
            { label: 'Service History', icon: '📜', val: '14' }
          ].map((item, i) => (
            <div key={i} ref={addToRefs} className="blur-reveal group bg-slate-900 p-10 rounded-[40px] border border-white/5 hover:border-blue-500/30 transition-all duration-700" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-3xl mb-6">{item.icon}</div>
              <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">{item.label}</div>
              {item.link ? (
                <Link to={item.link} className="text-2xl font-black text-white hover:text-blue-500 transition-colors">Launch Scan</Link>
              ) : (
                <div className="text-4xl font-black text-white">{item.val}</div>
              )}
            </div>
          ))}
        </div>

        <div ref={addToRefs} className="blur-reveal bg-slate-900 rounded-[50px] p-12 border border-white/5 shadow-2xl">
          <h2 className="text-2xl font-black uppercase tracking-tighter text-white mb-10">Live Engagement Tracker</h2>
          <div className="space-y-6">
            {[
              { provider: 'Rahul Sharma', task: 'AC Diagnostic', status: 'In Transit', time: '14:20' },
              { provider: 'Suman Devi', task: 'Deep Sanitization', status: 'Completed', time: 'Yesterday' },
            ].map((task, idx) => (
              <div key={idx} className="flex items-center justify-between p-8 bg-slate-800/50 rounded-[30px] border border-transparent hover:border-white/5 transition-all">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 font-black text-xs">{task.time}</div>
                  <div>
                    <p className="font-black text-white uppercase tracking-tight">{task.provider}</p>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{task.task}</p>
                  </div>
                </div>
                <span className={`text-[8px] font-black uppercase tracking-widest px-4 py-2 rounded-full ${task.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-blue-500/10 text-blue-400 animate-pulse'}`}>
                  {task.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
