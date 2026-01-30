
import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';

const ProviderLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Home Base', path: '/provider/dashboard', icon: '🏠' },
    { label: 'My Work', path: '/provider/my-services', icon: '🛠️' },
    { label: 'Add Work', path: '/provider/add-service', icon: '➕' },
    { label: 'Bookings', path: '/provider/requests', icon: '📋' },
    { label: 'Money', path: '/provider/earnings', icon: '💰' },
    { label: 'Profile', path: '/provider/profile', icon: '⚙️' },
  ];

  return (
    <div className="flex min-h-screen bg-[#020617] pt-24 pb-20 lg:pb-0">
      {/* Sidebar (Desktop) */}
      <aside className="w-72 bg-slate-900/50 backdrop-blur-xl border-r border-white/5 sticky top-24 h-[calc(100vh-6rem)] hidden lg:flex flex-col p-8">
        <div className="mb-10">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-2">Seller Console</p>
          <h2 className="text-xl font-black text-white">Main Menu</h2>
        </div>
        <nav className="flex-grow space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-4 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                location.pathname === item.path
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="pt-10 border-t border-white/5">
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center space-x-4 px-6 py-4 rounded-2xl text-sm font-black uppercase tracking-widest text-slate-500 hover:text-red-400 hover:bg-red-400/5 transition-all"
          >
            <span>🚪</span>
            <span>Exit</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow p-6 lg:p-12 overflow-x-hidden">
        <div className="max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ProviderLayout;
