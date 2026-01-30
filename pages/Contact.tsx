
import React from 'react';
import useReveal from '../hooks/useReveal';

const Contact: React.FC = () => {
  const addToRefs = useReveal();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white">
      {/* Cinematic Header with Shutter Reveal */}
      <section className="relative h-[60vh] flex items-center justify-center shutter-wrapper" ref={addToRefs}>
        <div className="shutter-panel shutter-top"></div>
        <div className="shutter-panel shutter-bottom"></div>
        
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-zoom opacity-40 grayscale" 
             style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000')` }}>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 blur-reveal active tracking-tighter" ref={addToRefs}>
            COMMAND <span className="text-blue-500">CENTER</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto blur-reveal" ref={addToRefs} style={{ transitionDelay: '0.4s' }}>
            Our support operatives are synchronized for your success.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-8 pb-32 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Form with Gradient Border */}
          <div ref={addToRefs} className="blur-reveal gradient-border p-[1px] rounded-[40px] shadow-2xl">
            <div className="bg-black/80 backdrop-blur-3xl p-10 md:p-12 rounded-[39px]">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-8">Transmit Message</h2>
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 ml-2">Identity</label>
                    <input type="text" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-white/20" placeholder="Artisan / Client Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 ml-2">Frequency</label>
                    <input type="email" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-white/20" placeholder="Email Address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 ml-2">Objective</label>
                  <input type="text" className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-white/20" placeholder="What is the mission?" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 ml-2">Detailed Log</label>
                  <textarea rows={5} className="w-full px-8 py-5 bg-white/5 border border-white/10 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none placeholder:text-white/20" placeholder="Explain the project requirements..."></textarea>
                </div>
                <button className="cta-cinematic w-full bg-blue-600 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-700 transition-all shadow-[0_0_30px_rgba(37,99,235,0.2)] active:scale-95">
                  Launch Transmission
                </button>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-16">
            <div ref={addToRefs} className="blur-reveal">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-10">Strategic Nodes</h3>
              <div className="space-y-10">
                {[
                  { 
                    label: "Operations Hub", 
                    val: "Building 4, Sector 62, Noida, Delhi NCR", 
                    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
                    color: "text-blue-500",
                    bg: "bg-blue-500/10"
                  },
                  { 
                    label: "Secure Transmission", 
                    val: "support@serveease.com", 
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    color: "text-emerald-500",
                    bg: "bg-emerald-500/10"
                  },
                  { 
                    label: "Uptime Protocol", 
                    val: "Mon - Sun: 08:00 - 22:00 IST", 
                    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                    color: "text-purple-500",
                    bg: "bg-purple-500/10"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-8 group">
                    <div className={`ripple-pulse w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center ${item.color} flex-shrink-0 transition-transform duration-500 group-hover:scale-110`}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d={item.icon} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                    </div>
                    <div>
                      <h5 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-1">{item.label}</h5>
                      <p className="text-xl font-bold tracking-tight text-white/90">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div ref={addToRefs} className="blur-reveal floating-card h-[400px] rounded-[40px] overflow-hidden border border-white/10 grayscale group hover:grayscale-0 transition-all duration-1000 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps?q=Delhi+NCR&output=embed" 
                width="100%" height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.2)' }} 
                allowFullScreen={false} loading="lazy" title="Map Node"
              ></iframe>
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-6 py-2 rounded-full border border-white/10">
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">Live Grid Feed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
