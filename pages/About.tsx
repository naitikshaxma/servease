
import React from 'react';
import useReveal from '../hooks/useReveal';

const About: React.FC = () => {
  const addToRefs = useReveal();

  return (
    <div className="pt-32 pb-32 bg-black text-white selection:bg-blue-500 overflow-hidden">
      <div className="container mx-auto px-6">
        <div ref={addToRefs} className="blur-reveal max-w-5xl mx-auto text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase">Our <span className="text-blue-500">Ethos</span></h1>
          <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
            ServeEase isn't just a platform; it's a movement to elevate the standards of local services through cinematic precision and human connection.
          </p>
        </div>

        {/* Split Screen Grayscale Morph Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch mb-40 rounded-[60px] overflow-hidden border border-white/10">
          <div ref={addToRefs} className="blur-reveal flex flex-col justify-center p-12 md:p-24 bg-white text-black">
            <h2 className="text-4xl font-black mb-8 tracking-tight uppercase">The Evolution</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From chaotic listings to a curated ecosystem. We've transformed how Delhi NCR interacts with professional skillsets.
            </p>
            <div className="space-y-8">
              {['Quality Mastery', 'Direct Transparency', 'Safety Protocols'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-blue-500 font-black text-xl">
                    0{idx+1}
                  </div>
                  <div className="font-bold text-xl uppercase tracking-tight">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div ref={addToRefs} className="morph-color relative min-h-[500px]">
            <img 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1000" 
              className="absolute inset-0 w-full h-full object-cover" 
              alt="Artisan at work" 
            />
            <div className="absolute inset-0 bg-blue-600/20 mix-blend-multiply"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
