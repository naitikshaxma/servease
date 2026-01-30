
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { UserRole, User } from '../types';

interface AuthProps {
  type: 'login' | 'signup';
  onAuth: (user: User) => void;
}

const Auth: React.FC<AuthProps> = ({ type, onAuth }) => {
  const navigate = useNavigate();
  const addToRefs = useReveal();
  const [step, setStep] = useState<'selection' | 'form'>('selection');
  const [role, setRole] = useState<UserRole>('customer');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRoleSelection = (selectedRole: UserRole) => {
    setRole(selectedRole);
    setStep('form');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    setTimeout(() => {
      const registry = JSON.parse(localStorage.getItem('serveease_registry') || '[]');

      if (type === 'signup') {
        if (registry.find((u: any) => u.email === formData.email)) {
          setError('Communication frequency already registered.');
          setLoading(false);
          return;
        }

        const newUser = { 
          id: 'u-' + Math.random().toString(36).substr(2, 9),
          name: formData.name, 
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
          role: role
        };

        registry.push(newUser);
        localStorage.setItem('serveease_registry', JSON.stringify(registry));

        const sessionUser: User = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
        localStorage.setItem('currentUser', JSON.stringify(sessionUser));
        localStorage.setItem('isLoggedIn', 'true');
        
        onAuth(sessionUser);
        navigate(role === 'provider' ? '/provider/dashboard' : '/customer/dashboard');
      } else {
        const userFound = registry.find((u: any) => u.email === formData.email && u.password === formData.password);
        
        if (userFound) {
          const sessionUser: User = { id: userFound.id, name: userFound.name, email: userFound.email, role: userFound.role };
          localStorage.setItem('currentUser', JSON.stringify(sessionUser));
          localStorage.setItem('isLoggedIn', 'true');
          
          onAuth(sessionUser);
          navigate(userFound.role === 'provider' ? '/provider/dashboard' : '/customer/dashboard');
        } else {
          setError('Security key mismatch or identity not found.');
        }
      }
      setLoading(false);
    }, 1200);
  };

  if (step === 'selection') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] opacity-60"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')`, filter: 'invert(1)' }}></div>
        </div>
        
        <div ref={addToRefs} className="blur-reveal active w-full max-w-4xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">Choose Your <span className="text-blue-500">Path</span></h2>
            <p className="text-slate-400 text-lg font-medium tracking-tight">Select how you want to interact with the grid.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <button 
              onClick={() => handleRoleSelection('customer')}
              className="group bg-slate-900/50 backdrop-blur-3xl p-16 rounded-[50px] border border-white/5 hover:border-blue-500/30 transition-all text-center flex flex-col items-center justify-center space-y-8"
            >
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500">👤</div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">I want to get work done</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Continue as User</p>
              </div>
            </button>

            <button 
              onClick={() => handleRoleSelection('provider')}
              className="group bg-slate-900/50 backdrop-blur-3xl p-16 rounded-[50px] border border-white/5 hover:border-blue-500/30 transition-all text-center flex flex-col items-center justify-center space-y-8"
            >
              <div className="text-7xl group-hover:scale-110 transition-transform duration-500">🔧</div>
              <div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight mb-2">I want to provide service</h3>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Continue as Service Provider</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] px-6 py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px] opacity-60"></div>
      </div>

      <div 
        ref={addToRefs} 
        className="blur-reveal active w-full max-w-xl bg-slate-900/80 backdrop-blur-3xl rounded-[60px] shadow-2xl border border-white/5 p-10 md:p-20 relative z-10"
      >
        <button onClick={() => setStep('selection')} className="absolute top-10 left-10 text-slate-500 hover:text-white transition-colors flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7"></path></svg>
          <span>Back</span>
        </button>

        <div className="text-center mb-16 pt-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8 group">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black">S</div>
            <span className="text-2xl font-black text-white tracking-tighter">SERVE<span className="text-blue-500">EASE</span></span>
          </Link>
          <h2 className="text-4xl font-black text-white tracking-tighter uppercase mb-3">
            {type === 'login' ? 'Access Portal' : 'Join the Grid'}
          </h2>
          <p className="text-slate-400 text-sm font-medium tracking-tight">Active Role: <span className="text-blue-500 uppercase">{role}</span></p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-black uppercase tracking-widest text-center rounded-2xl">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          {type === 'signup' && (
            <div className="group relative">
              <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Ex. Rahul Sharma"
                className="w-full px-8 py-6 bg-slate-800/50 border border-white/5 rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
          )}
          
          <div className="group relative">
            <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Email Address</label>
            <input 
              required
              type="email" 
              placeholder="rahul@grid.com"
              className="w-full px-8 py-6 bg-slate-800/50 border border-white/5 rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Phone Number</label>
            <input 
              required
              type="tel" 
              placeholder="+91 0000000000"
              className="w-full px-8 py-6 bg-slate-800/50 border border-white/5 rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>

          <div className="group relative">
            <label className="absolute left-6 -top-2.5 px-2 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 z-10">Password</label>
            <input 
              required
              type="password" 
              placeholder="••••••••"
              className="w-full px-8 py-6 bg-slate-800/50 border border-white/5 rounded-[2rem] focus:ring-2 focus:ring-blue-600 outline-none text-white font-bold"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="group relative w-full overflow-hidden bg-blue-600 text-white py-6 rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] transition-all hover:bg-blue-700 hover:shadow-2xl active:scale-95 disabled:opacity-50"
          >
            <span className={`flex items-center justify-center transition-all ${loading ? 'opacity-0' : 'opacity-100'}`}>
              {type === 'login' ? 'Initiate Access' : 'Create Node'}
              <svg className="w-4 h-4 ml-3 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </span>
            {loading && <div className="absolute inset-0 flex items-center justify-center"><div className="w-6 h-6 border-[3px] border-white/30 border-t-white rounded-full animate-spin"></div></div>}
          </button>
        </form>

        <div className="mt-16 flex flex-col items-center space-y-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
            {type === 'login' ? (
              <>New operative? <Link to="/signup" className="text-blue-400 ml-2 border-b border-blue-900">Request Node</Link></>
            ) : (
              <>Node exists? <Link to="/login" className="text-blue-400 ml-2 border-b border-blue-900">Secure Access</Link></>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
