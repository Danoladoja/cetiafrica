import React from 'react';

const programs = [
  {
    num: "01",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    color: "#2AA89C",
    image: "/__mockup/images/pulse.jpg",
    desc1: "Trusted journalism on Africa's energy sector.",
    desc2: "We track capital flows, policy shifts, and grassroots impacts to provide a comprehensive view of the continent's energy transition.",
  },
  {
    num: "02",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    color: "#E8551A",
    image: "/__mockup/images/hero-bg.jpg",
    desc1: "Market intelligence and data for Africa's energy economy.",
    desc2: "Real-time dashboards tracking solar deployment, policy changes, and investment trends across 54 nations.",
  },
  {
    num: "03",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    color: "#F6A820",
    image: "/__mockup/images/comms.jpg",
    desc1: "Strategic communications for Africa's energy transition.",
    desc2: "We equip policymakers, researchers, and advocates with narrative tools and communication strategies to amplify their impact.",
  }
];

export default function EditorialPrograms() {
  return (
    <div className="min-h-screen bg-[#0D1117] text-[#F5F0E8] font-sans selection:bg-white/20 selection:text-white overflow-y-auto">
      {/* Header */}
      <header className="px-8 md:px-16 pt-24 pb-16">
        <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl tracking-tight font-medium">Programs.</h1>
      </header>

      {/* Programs List */}
      <main className="flex flex-col border-t border-white/10">
        {programs.map((prog, i) => (
          <div key={prog.num} className="group relative flex flex-col md:flex-row border-b border-white/10 min-h-[500px]">
            
            {/* Image Panel (Left - 40%) */}
            <div className="w-full md:w-[40%] relative overflow-hidden h-[400px] md:h-auto border-r border-white/10">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url(${prog.image})` }}
              />
              {/* Overlays for dark contrast and tint */}
              <div className="absolute inset-0 bg-[#0D1117]/70" />
              <div 
                className="absolute inset-0 opacity-20 mix-blend-color transition-opacity duration-700 group-hover:opacity-40"
                style={{ backgroundColor: prog.color }}
              />
            </div>

            {/* Editorial Layout (Right - 60%) */}
            <div className="w-full md:w-[60%] relative p-8 md:p-16 lg:p-24 flex flex-col justify-center overflow-hidden">
              
              {/* Background Number */}
              <div className="absolute top-4 right-8 md:right-16 font-['Playfair_Display'] text-[140px] md:text-[200px] font-bold opacity-[0.03] pointer-events-none select-none tracking-tighter italic transition-transform duration-700 group-hover:scale-110 group-hover:opacity-5">
                {prog.num}
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-2xl">
                <div 
                  className="uppercase tracking-[0.2em] text-xs font-semibold mb-6"
                  style={{ color: prog.color }}
                >
                  {prog.tag}
                </div>
                
                <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {prog.name}
                </h2>
                
                {/* Divider Line */}
                <div className="h-[1px] w-24 bg-white/20 mb-8 transition-all duration-500 group-hover:w-32 group-hover:bg-white/40" />
                
                <div className="space-y-6 text-white/70 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                  <p>{prog.desc1}</p>
                  <p>{prog.desc2}</p>
                </div>
                
                <div className="mt-12 opacity-0 -translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <button 
                    className="flex items-center gap-3 text-sm tracking-widest uppercase transition-colors"
                    style={{ color: prog.color }}
                  >
                    <span>Read Edition</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
          </div>
        ))}
      </main>
      
      <footer className="py-24 text-center text-white/30 text-sm tracking-widest uppercase">
        End of Editions
      </footer>
    </div>
  );
}
