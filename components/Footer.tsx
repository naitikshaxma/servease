
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-24">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black text-white mb-6 tracking-tighter">
              SERVE<span className="text-blue-600">EASE</span>
            </h3>
            <p className="text-white/40 max-w-sm mb-10 leading-relaxed text-sm">
              The premier destination for elite local expertise. We curate, verify, and synchronize professional deployment across the Delhi NCR grid.
            </p>
            <div className="flex space-x-6">
              {['TW', 'IG', 'FB', 'LI'].map(social => (
                <a key={social} href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-[10px] font-black text-white/40 hover:text-blue-500 hover:border-blue-500 transition-all">
                  {social}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Navigation</h4>
            <ul className="space-y-4 text-white/60 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/services" className="hover:text-white transition-colors">Manifesto</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Origins</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Transmissions</Link></li>
              <li><Link to="/login" className="hover:text-white transition-colors">Access Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-8">Headquarters</h4>
            <p className="text-white/40 text-sm leading-loose">
              Sector 62, Noida<br />
              NCR Grid-401<br />
              +91 1800-SERVE-EASE
            </p>
          </div>
        </div>
        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-widest text-white/20">
          <p>© 2024 SERVEEASE EXPERTISE NETWORK.</p>
          <div className="flex space-x-12 mt-6 md:mt-0">
            <a href="#" className="hover:text-blue-500 transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-blue-500 transition-colors">User Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
