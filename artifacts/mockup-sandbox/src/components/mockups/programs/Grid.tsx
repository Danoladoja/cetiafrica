import React from 'react';

const programs = [
  {
    id: '01',
    name: 'Africa Energy Pulse',
    tag: 'Journalism',
    color: '#2AA89C',
    description: 'Trusted journalism on Africa\'s energy sector. We track capital flows, policy shifts, and grassroots impacts.',
  },
  {
    id: '02',
    name: 'AfriEnergy Tracker',
    tag: 'Market Intelligence',
    color: '#E8551A',
    description: 'Market intelligence and data for Africa\'s energy economy. Real-time dashboards tracking solar deployment across 54 nations.',
  },
  {
    id: '03',
    name: 'AfriEnergy Comms Lab',
    tag: 'Strategic Communications',
    color: '#F6A820',
    description: 'Strategic communications for Africa\'s energy transition. We equip policymakers with narrative tools.',
  }
];

export default function ProgramsGrid() {
  return (
    <div 
      className="min-h-screen text-[#F5F0E8] font-sans selection:bg-[#F5F0E8] selection:text-[#0D1117]"
      style={{
        backgroundColor: '#0D1117',
        backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32 flex flex-col gap-16">
        
        {/* Header Section */}
        <header className="flex flex-col gap-8">
          <h1 className="font-['Playfair_Display'] text-6xl md:text-8xl font-medium tracking-tight">
            Programs.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-white/10 py-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest uppercase text-white/40">Portfolio Size</span>
              <span className="font-['Playfair_Display'] text-2xl">3 Programs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest uppercase text-white/40">Coverage</span>
              <span className="font-['Playfair_Display'] text-2xl">54 Nations</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-sm tracking-widest uppercase text-white/40">Founded</span>
              <span className="font-['Playfair_Display'] text-2xl">Est. 2023</span>
            </div>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 relative group border-t lg:border-t-0 border-white/10 lg:border-none pt-6 lg:pt-0">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`relative flex flex-col bg-[#161B22] min-h-[480px] p-8 md:p-10 transition-colors duration-500 hover:bg-[#1a2029] lg:border-r border-b lg:border-b-0 border-white/5 last:border-r-0`}
              style={{ borderTop: `4px solid ${program.color}` }}
            >
              {/* Background Watermark */}
              <div 
                className="absolute top-8 right-8 font-['Playfair_Display'] text-9xl leading-none font-bold opacity-[0.03] select-none pointer-events-none"
                style={{ color: program.color }}
              >
                {program.id}
              </div>

              {/* Tag Pill */}
              <div className="mb-12">
                <span 
                  className="inline-block text-xs uppercase tracking-widest font-medium px-3 py-1 border"
                  style={{ 
                    color: program.color,
                    borderColor: `${program.color}40`,
                    backgroundColor: `${program.color}10` 
                  }}
                >
                  {program.tag}
                </span>
              </div>

              {/* Content */}
              <div className="relative z-10 flex-grow flex flex-col">
                <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl leading-snug mb-6">
                  {program.name}
                </h2>
                
                <div 
                  className="w-12 h-[2px] mb-6"
                  style={{ backgroundColor: program.color }}
                />

                <p className="text-[15px] leading-relaxed text-[#F5F0E8]/70 font-light max-w-sm">
                  {program.description}
                </p>
              </div>

              {/* Footer */}
              <div className="mt-12">
                <button 
                  className="group/btn flex items-center gap-2 text-sm uppercase tracking-widest font-medium transition-opacity hover:opacity-80"
                  style={{ color: program.color }}
                >
                  Explore
                  <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
