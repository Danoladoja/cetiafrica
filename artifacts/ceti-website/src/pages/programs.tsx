import { motion } from "framer-motion";
import { ArrowRight, BarChart2, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Programs() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="w-full bg-white pb-32">
      {/* HEADER */}
      <section className="bg-ceti-navy pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl text-white leading-tight mb-8"
          >
            Three Integrated <span className="text-ceti-teal italic">Platforms</span>.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl text-white/70 leading-relaxed max-w-2xl mx-auto"
          >
            Working in concert to provide a 360-degree view of Africa's energy transition.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-16 space-y-16">
        
        {/* PULSE */}
        <motion.div 
          id="pulse"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-white shadow-2xl border-t-4 border-ceti-teal flex flex-col md:flex-row relative z-10"
        >
          <div className="w-full md:w-5/12 bg-ceti-teal/10 p-12 flex flex-col justify-center items-start">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-8 text-ceti-teal shadow-sm">
              <BookOpen className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-4xl text-ceti-navy mb-4">Africa Energy Pulse</h2>
            <p className="font-sans text-sm tracking-widest uppercase text-ceti-teal font-bold mb-6">Journalism & News</p>
          </div>
          <div className="w-full md:w-7/12 p-12 md:p-16 flex flex-col justify-center">
            <p className="font-sans text-lg text-ceti-navy/80 leading-relaxed mb-8">
              Rigorous, independent journalism and news analysis covering the policies, projects, and people driving the transition. Pulse is the authoritative record of what's happening on the ground, bypassing PR spin to deliver ground-truth reporting.
            </p>
            <ul className="space-y-4 mb-8 font-sans text-ceti-navy/70">
              <li className="flex gap-3">
                <span className="text-ceti-teal font-bold">•</span>
                <span>Weekly analytical newsletters diving deep into policy shifts.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-teal font-bold">•</span>
                <span>Investigative reports on energy financing and deployment.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-teal font-bold">•</span>
                <span>Interviews with key policymakers and industry leaders.</span>
              </li>
            </ul>
            <Button asChild className="self-start bg-ceti-teal hover:bg-ceti-teal/90 text-white rounded-none uppercase tracking-wider text-xs font-semibold px-6">
              <Link href="/publications">Read Pulse Articles</Link>
            </Button>
          </div>
        </motion.div>

        {/* TRACKER */}
        <motion.div 
          id="tracker"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-white shadow-2xl border-t-4 border-ceti-orange flex flex-col md:flex-row-reverse relative z-10"
        >
          <div className="w-full md:w-5/12 bg-ceti-orange/10 p-12 flex flex-col justify-center items-start">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-8 text-ceti-orange shadow-sm">
              <BarChart2 className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-4xl text-ceti-navy mb-4">AfriEnergy Tracker</h2>
            <p className="font-sans text-sm tracking-widest uppercase text-ceti-orange font-bold mb-6">Market Intelligence</p>
          </div>
          <div className="w-full md:w-7/12 p-12 md:p-16 flex flex-col justify-center">
            <p className="font-sans text-lg text-ceti-navy/80 leading-relaxed mb-8">
              Market intelligence, policy databases, and data visualizations mapping the continent's energy infrastructure. Tracker turns opaque energy data into accessible, actionable intelligence for investors and policymakers.
            </p>
            <ul className="space-y-4 mb-8 font-sans text-ceti-navy/70">
              <li className="flex gap-3">
                <span className="text-ceti-orange font-bold">•</span>
                <span>Interactive grid maps and infrastructure deployment trackers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-orange font-bold">•</span>
                <span>Comprehensive database of national energy transition plans.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-orange font-bold">•</span>
                <span>Quarterly market intelligence reports on investment flows.</span>
              </li>
            </ul>
            <Button asChild className="self-start bg-ceti-orange hover:bg-ceti-orange/90 text-white rounded-none uppercase tracking-wider text-xs font-semibold px-6">
              <Link href="/publications">Access Data Reports</Link>
            </Button>
          </div>
        </motion.div>

        {/* COMMS LAB */}
        <motion.div 
          id="comms"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="bg-white shadow-2xl border-t-4 border-ceti-amber flex flex-col md:flex-row relative z-10"
        >
          <div className="w-full md:w-5/12 bg-ceti-amber/10 p-12 flex flex-col justify-center items-start">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-full mb-8 text-ceti-amber shadow-sm">
              <MessageSquare className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-4xl text-ceti-navy mb-4">AfriEnergy Comms Lab</h2>
            <p className="font-sans text-sm tracking-widest uppercase text-ceti-amber font-bold mb-6">Strategic Communications</p>
          </div>
          <div className="w-full md:w-7/12 p-12 md:p-16 flex flex-col justify-center">
            <p className="font-sans text-lg text-ceti-navy/80 leading-relaxed mb-8">
              Strategic communications research and capacity building to reshape the global narrative on African energy. The Lab studies how energy is talked about and trains stakeholders to communicate more effectively.
            </p>
            <ul className="space-y-4 mb-8 font-sans text-ceti-navy/70">
              <li className="flex gap-3">
                <span className="text-ceti-amber font-bold">•</span>
                <span>Media monitoring and narrative analysis reports.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-amber font-bold">•</span>
                <span>Communications toolkits for civil society and policymakers.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-ceti-amber font-bold">•</span>
                <span>Workshops and training on energy transition messaging.</span>
              </li>
            </ul>
            <Button asChild className="self-start bg-ceti-amber hover:bg-ceti-amber/90 text-ceti-navy rounded-none uppercase tracking-wider text-xs font-semibold px-6">
              <Link href="/contact">Request a Workshop</Link>
            </Button>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
