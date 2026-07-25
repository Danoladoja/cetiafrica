import React from 'react';
import pulseImg from '../../../images/pulse.jpg';
import trackerImg from '../../../images/hero-bg.jpg';
import commsImg from '../../../images/comms.jpg';

export default function Cinematic() {
  return (
    <div className="bg-[#0D1117] text-[#F5F0E8] font-sans h-[100dvh] overflow-y-auto w-full snap-y snap-mandatory scroll-smooth relative">
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap');
      `}} />

      {/* Intro Section */}
      <section className="h-[100dvh] w-full snap-start flex flex-col items-center justify-center relative bg-[#0D1117]">
        <h1 className="font-['Playfair_Display'] text-[80px] md:text-[120px] font-bold text-white tracking-tight">
          Programs.
        </h1>
        <div className="absolute bottom-12 flex flex-col items-center opacity-50 animate-bounce">
          <span className="text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-light">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-[#F5F0E8]"></div>
        </div>
      </section>

      {/* Africa Energy Pulse */}
      <section className="h-[100dvh] w-full snap-start relative overflow-hidden group border-t border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${pulseImg})`,
            filter: 'brightness(0.2)' 
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)' }} />
        
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto w-full z-10">
          <div className="w-20 h-[3px] bg-[#2AA89C] mb-8" />
          <div className="text-[#2AA89C] font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            Journalism
          </div>
          <h2 className="font-['Playfair_Display'] text-[60px] md:text-[96px] font-bold text-white leading-[1.05] mb-8 max-w-4xl">
            Africa Energy Pulse
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-[480px] leading-relaxed">
            Trusted journalism on Africa's energy sector. We track capital flows, policy shifts, and grassroots impacts.
          </p>
        </div>
      </section>

      {/* AfriEnergy Tracker */}
      <section className="h-[100dvh] w-full snap-start relative overflow-hidden group border-t border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${trackerImg})`,
            filter: 'brightness(0.2)' 
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)' }} />
        
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto w-full z-10">
          <div className="w-20 h-[3px] bg-[#E8551A] mb-8" />
          <div className="text-[#E8551A] font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            Market Intelligence
          </div>
          <h2 className="font-['Playfair_Display'] text-[60px] md:text-[96px] font-bold text-white leading-[1.05] mb-8 max-w-4xl">
            AfriEnergy Tracker
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-[480px] leading-relaxed">
            Market intelligence and data for Africa's energy economy. Real-time dashboards tracking solar deployment across 54 nations.
          </p>
        </div>
      </section>

      {/* AfriEnergy Comms Lab */}
      <section className="h-[100dvh] w-full snap-start relative overflow-hidden group border-t border-white/10">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] group-hover:scale-105"
          style={{ 
            backgroundImage: `url(${commsImg})`,
            filter: 'brightness(0.2)' 
          }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(13,17,23,0.9) 0%, rgba(13,17,23,0.3) 50%, transparent 100%)' }} />
        
        <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto w-full z-10">
          <div className="w-20 h-[3px] bg-[#F6A820] mb-8" />
          <div className="text-[#F6A820] font-semibold tracking-[0.2em] uppercase text-sm mb-6">
            Strategic Communications
          </div>
          <h2 className="font-['Playfair_Display'] text-[60px] md:text-[96px] font-bold text-white leading-[1.05] mb-8 max-w-4xl">
            AfriEnergy Comms Lab
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light max-w-[480px] leading-relaxed">
            Strategic communications for Africa's energy transition. We equip policymakers with narrative tools to drive change.
          </p>
        </div>
      </section>
    </div>
  );
}
