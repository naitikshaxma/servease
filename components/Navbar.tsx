
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';

interface NavbarProps {
  user: User | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isProvider = user?.role === 'provider';
  const dashboardPath = isProvider ? '/provider/dashboard' : '/customer/dashboard';

  const navLinks = [
    { label: 'Home', path: '/', icon: '🏠' },
    { label: 'Work', path: '/services', icon: '🛠' },
    { label: 'About', path: '/about', icon: 'ℹ️' },
    { label: 'Help', path: '/contact', icon: '📞' },
  ];

  // Links that only show when logged in
  const privateLinks = user ? [
    { label: 'My Work', path: dashboardPath, icon: '📋' },
  ] : [];

  const allLinks = [...navLinks, ...privateLinks];

  return (
    <>
      {/* TOP NAVBAR (Desktop) */}
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 rounded-[2rem] px-8 py-4 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(59,130,246,0.5)] transform group-hover:rotate-12 transition-transform duration-500">S</div>
            <span className="text-2xl font-black text-white tracking-tighter hidden lg:block">
              SERVE<span className="text-blue-500">EASE</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-1 bg-white/5 p-1.5 rounded-2xl border border-white/5">
            {allLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 ${
                  location.pathname === link.path 
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(59,130,246,0.3)] scale-105' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-[8px] font-black text-blue-500 uppercase tracking-[0.4em]">Auth Level 1</span>
                  <span className="text-sm font-black text-white">{user.name}</span>
                </div>
                <button 
                  onClick={onLogout}
                  className="flex items-center space-x-2 px-5 py-3 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                >
                  <span className="text-lg">🚪</span>
                  <span className="hidden sm:block">Exit</span>
                </button>
              </div>
            ) : (
              // Removed the "Start" button to prioritize Hero Funnel, replaced with a subtle Login text link
              <Link 
                to="/login" 
                className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-all px-4"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* BOTTOM NAVBAR (Mobile Only) */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] z-50 bg-slate-900/90 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] shadow-[0_-10px_40px_rgba(0,0,0,0.4)] px-4">
        <div className="flex justify-around items-center h-20">
          {allLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex flex-col items-center justify-center flex-1 py-2 transition-all duration-500 ${
                location.pathname === link.path ? 'text-blue-500 scale-110' : 'text-slate-500'
              }`}
            >
              <span className="text-2xl mb-1">{link.icon}</span>
              <span className="text-[9px] font-black uppercase tracking-widest">{link.label}</span>
            </Link>
          ))}
          {!user && (
             <Link
              to="/login"
              className="flex flex-col items-center justify-center flex-1 py-2 text-slate-500"
            >
              <span className="text-2xl mb-1">▶</span>
              <span className="text-[9px] font-black uppercase tracking-widest">Login</span>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
