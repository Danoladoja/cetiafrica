import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import pulseImg from "@assets/generated_images/pulse-img.jpg";
import commsImg from "@assets/generated_images/comms-img.jpg";

function CountUp({ end, label, prefix = "", suffix = "" }: { end: number; label: string; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    const duration = 2000;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end]);

  return (
    <div className="flex flex-col">
      <div className="font-serif text-[10vw] md:text-[8vw] leading-none text-ceti-navy">
        {prefix}{count}<span className="text-ceti-orange">{suffix}</span>
      </div>
      <div className="font-sans text-lg md:text-xl font-medium uppercase tracking-widest mt-4 text-ceti-navy/70">
        {label}
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);

  return (
    <div className="bg-ceti-dark w-full overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img 
            src={heroBg} 
            alt="African solar energy farm" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ceti-dark/70 mix-blend-multiply" />
          {/* Gradient veil so the nav logo is legible against any background */}
          <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        </motion.div>
        
        <div className="relative z-10 text-center w-full px-6 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif text-[12vw] md:text-[10vw] leading-[0.8] text-ceti-cream mb-6 tracking-tight"
          >
            Africa's Energy
            <br />
            Future<span className="text-ceti-orange">,</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-sans text-lg md:text-xl text-white font-light tracking-wide"
          >
            Knowledge infrastructure for Africa's energy transition.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <motion.div 
            animate={{ height: ["0px", "60px", "0px"], y: [0, 0, 60] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px bg-white/50 origin-top"
          />
        </motion.div>
      </section>

      {/* PROGRAMS STRIP */}
      <section className="w-full">
        {/* Pulse */}
        <div className="w-full min-h-[60vh] bg-ceti-teal grid grid-cols-1 md:grid-cols-2 group cursor-pointer border-b border-white/10">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-ceti-teal text-white">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">Africa Energy<br />Pulse</h2>
            <p className="font-sans text-xl md:text-2xl font-light">Trusted journalism on Africa's energy sector.</p>
          </div>
          <div className="h-[40vh] md:h-auto overflow-hidden relative">
            <img 
              src={pulseImg} 
              alt="Journalism" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Tracker */}
        <div className="w-full min-h-[60vh] bg-ceti-navy grid grid-cols-1 md:grid-cols-2 group cursor-pointer border-b border-white/10">
          <div className="h-[40vh] md:h-auto overflow-hidden relative order-last md:order-first">
            <img 
              src={heroBg} 
              alt="Data and Intelligence" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-12 md:p-24 bg-ceti-navy text-white">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">AfriEnergy<br />Tracker</h2>
            <p className="font-sans text-xl md:text-2xl font-light">Market intelligence and data for Africa's energy economy.</p>
          </div>
        </div>

        {/* Comms Lab */}
        <div className="w-full min-h-[60vh] bg-ceti-dark grid grid-cols-1 md:grid-cols-2 group cursor-pointer">
          <div className="flex flex-col justify-center p-12 md:p-24 bg-ceti-dark text-ceti-amber">
            <h2 className="font-serif text-5xl md:text-7xl mb-6">AfriEnergy<br />Comms Lab</h2>
            <p className="font-sans text-xl md:text-2xl font-light text-white/80">Strategic communications for Africa's energy transition.</p>
          </div>
          <div className="h-[40vh] md:h-auto overflow-hidden relative">
            <img 
              src={commsImg} 
              alt="Communications" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-20%" }}
        className="w-full bg-ceti-cream py-32 px-6 md:px-12"
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <CountUp end={32} suffix="+" label="Countries" />
          <CountUp end={150} suffix="+" label="Publications" />
          <CountUp end={500} suffix="+" label="Policymakers Reached" />
          <CountUp end={3} label="Integrated Platforms" />
        </div>
      </motion.section>

      {/* CONTACT STRIP */}
      <section className="w-full bg-ceti-navy py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <h2 className="font-serif text-4xl md:text-6xl text-white max-w-2xl leading-tight">
            Let's build Africa's energy future together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 shrink-0 w-full md:w-auto">
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-8 py-5 bg-ceti-orange text-white font-sans text-lg font-medium tracking-wide hover:bg-white hover:text-ceti-orange transition-colors"
            >
              Partner with us
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex justify-center items-center px-8 py-5 border border-white text-white font-sans text-lg font-medium tracking-wide hover:bg-white hover:text-ceti-navy transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
