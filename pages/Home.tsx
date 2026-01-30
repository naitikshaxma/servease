
import React from 'react';
import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const addToRefs = useReveal();

  return (
    <div className="bg-[#020617] pb-24 md:pb-0">
      {/* Cinematic Hero */}
      <section className="relative h-screen overflow-hidden flex items-center justify-center shutter-wrapper active" ref={addToRefs}>
        <div className="shutter-panel shutter-top"></div>
        <div className="shutter-panel shutter-bottom"></div>

        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-zoom opacity-30 grayscale"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="mb-6 inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.4em] blur-reveal active" ref={addToRefs}>
            Elite Service Network
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 blur-reveal active tracking-tighter leading-none" ref={addToRefs} style={{ transitionDelay: '0.2s' }}>
            FIND <span className="text-blue-500">EXPERTS</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto blur-reveal active font-light leading-relaxed" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
            The easiest way to get your work done. Trusted experts, ready to help you now.
          </p>
          <div ref={addToRefs} className="blur-reveal active flex flex-col items-center justify-center" style={{ transitionDelay: '0.6s' }}>
            <Link 
              to="/signup" 
              className="group relative inline-flex items-center justify-center px-24 py-7 bg-blue-600 text-white rounded-[2rem] text-sm font-black uppercase tracking-[0.3em] transition-all hover:bg-blue-700 shadow-[0_0_40px_rgba(59,130,246,0.3)] active:scale-95 hover:scale-105"
            >
              Partner with Us
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 text-slate-500 animate-bounce">
          <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Featured Grid */}
      <section className="py-40 bg-slate-950">
        <div className="container mx-auto px-8">
          <div ref={addToRefs} className="blur-reveal text-center mb-32">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase text-white">TOP <span className="text-blue-500">WORK</span></h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Easy services for everyone</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {SERVICES.slice(0, 3).map((service, idx) => (
              <div 
                key={service.id}
                ref={addToRefs}
                className="blur-reveal group relative bg-slate-900 rounded-[50px] p-12 overflow-hidden border border-white/5 hover:border-blue-500/30 shadow-2xl transition-all duration-700"
                style={{ transitionDelay: `${idx * 0.2}s` }}
              >
                <div className="morph-color relative z-10" ref={addToRefs}>
                  <div className="text-7xl mb-10 group-hover:scale-110 transition-transform duration-1000">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-tight text-white">{service.name}</h3>
                  <p className="text-slate-400 leading-relaxed mb-12 text-sm">{service.description}</p>
                </div>
                
                <Link 
                  to={`/providers/${service.id}`}
                  className="relative z-10 text-blue-400 font-black uppercase tracking-widest text-[10px] flex items-center space-x-4 group-hover:translate-x-4 transition-transform duration-700"
                >
                  <span>See People</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>

                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-500/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Stats */}
      <section className="relative py-48 overflow-hidden bg-black">
        <div 
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center grayscale opacity-10"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2000')` }}
        ></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 text-center">
            {[
              { val: "5K+", label: "People" },
              { val: "12K+", label: "Work Done" },
              { val: "4.9", label: "Happy Score" },
              { val: "24H", label: "Fast Help" }
            ].map((stat, i) => (
              <div key={i} ref={addToRefs} className="blur-reveal" style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="text-7xl font-black text-white mb-4 tracking-tighter">{stat.val}</div>
                <div className="text-blue-500 uppercase tracking-[0.4em] text-[10px] font-black">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
