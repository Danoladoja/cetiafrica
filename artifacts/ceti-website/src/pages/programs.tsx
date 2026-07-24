import { motion } from "framer-motion";
import pulseImg from "@assets/generated_images/pulse-img.jpg";
import commsImg from "@assets/generated_images/comms-img.jpg";
import heroBg from "@assets/generated_images/hero-bg.jpg";

export default function Programs() {
  return (
    <div className="w-full bg-ceti-dark text-ceti-cream pt-20">
      <div className="px-6 md:px-12 py-24 md:py-32">
        <h1 className="font-serif text-5xl md:text-8xl mb-6">Programs.</h1>
      </div>

      <div className="flex flex-col w-full">
        {/* Pulse */}
        <section className="w-full min-h-[70vh] bg-ceti-teal grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-8">Africa Energy Pulse</h2>
            <p className="font-sans text-xl md:text-2xl font-light mb-12">Trusted journalism on Africa's energy sector.</p>
            <p className="font-sans text-lg opacity-80 max-w-md">We track capital flows, policy shifts, and grassroots impacts. Uncovering the stories behind the transition, reporting from the ground up.</p>
          </div>
          <div className="h-[50vh] lg:h-auto order-first lg:order-last">
            <img src={pulseImg} alt="Pulse" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
          </div>
        </section>

        {/* Tracker */}
        <section className="w-full min-h-[70vh] bg-ceti-navy grid grid-cols-1 lg:grid-cols-2">
          <div className="h-[50vh] lg:h-auto">
            <img src={heroBg} alt="Tracker" className="w-full h-full object-cover grayscale mix-blend-multiply opacity-80" />
          </div>
          <div className="p-12 md:p-24 flex flex-col justify-center">
            <h2 className="font-serif text-5xl md:text-7xl mb-8">AfriEnergy Tracker</h2>
            <p className="font-sans text-xl md:text-2xl font-light mb-12">Market intelligence and data for Africa's energy economy.</p>
            <p className="font-sans text-lg opacity-80 max-w-md">Real-time dashboards tracking solar deployment, grid investments, and regulatory shifts across 54 nations. Data made visible.</p>
          </div>
        </section>

        {/* Comms Lab */}
        <section className="w-full min-h-[70vh] bg-ceti-dark grid grid-cols-1 lg:grid-cols-2 border-t border-white/10">
          <div className="p-12 md:p-24 flex flex-col justify-center text-ceti-amber">
            <h2 className="font-serif text-5xl md:text-7xl mb-8">AfriEnergy Comms Lab</h2>
            <p className="font-sans text-xl md:text-2xl font-light mb-12 text-white/80">Strategic communications for Africa's energy transition.</p>
            <p className="font-sans text-lg text-white/60 max-w-md">We equip policymakers and organizations with the narrative tools to drive change. Shifting the conversation from deficit to opportunity.</p>
          </div>
          <div className="h-[50vh] lg:h-auto order-first lg:order-last">
            <img src={commsImg} alt="Comms Lab" className="w-full h-full object-cover grayscale opacity-50" />
          </div>
        </section>
      </div>
    </div>
  );
}
