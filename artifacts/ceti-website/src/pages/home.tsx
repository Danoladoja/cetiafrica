import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, BarChart2, BookOpen, MessageSquare } from "lucide-react";
import { CountUp } from "@/components/ui/count-up";

export default function Home() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row bg-ceti-cream">
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 z-10">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-xl">
            <motion.div variants={fadeUp} className="mb-6 flex items-center gap-4">
              <div className="h-[2px] w-12 bg-ceti-teal"></div>
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-ceti-navy">
                Knowledge Infrastructure
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-ceti-navy mb-8">
              Africa's <span className="text-ceti-orange italic">Authority</span> on Energy Transition.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="font-sans text-lg md:text-xl text-ceti-navy/80 mb-10 max-w-md leading-relaxed">
              Producing trusted journalism, market intelligence, and human-centred storytelling to strengthen Africa's energy ecosystem.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button asChild className="bg-ceti-navy hover:bg-ceti-navy/90 text-white rounded-none px-8 py-6 text-sm font-semibold tracking-wider uppercase">
                <Link href="/programs">Explore Our Platforms</Link>
              </Button>
              <Button asChild variant="outline" className="border-2 border-ceti-navy text-ceti-navy hover:bg-ceti-navy hover:text-white rounded-none px-8 py-6 text-sm font-semibold tracking-wider uppercase bg-transparent">
                <Link href="/about">Our Mission</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-full relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src="/hero-solar.jpg" 
              alt="African solar field with energy worker" 
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle overlay for contrast if needed, but keeping it clean per Secure Energy ref */}
            <div className="absolute inset-0 bg-ceti-navy/10 mix-blend-multiply"></div>
          </motion.div>
        </div>
      </section>

      {/* MISSION TICKER */}
      <section className="bg-ceti-navy py-6 border-y border-white/10 overflow-hidden flex items-center">
        <div className="marquee-container w-full">
          <div className="marquee-content flex gap-8 items-center text-ceti-teal font-sans text-sm md:text-base font-medium tracking-widest uppercase whitespace-nowrap">
            <span>Journalism</span>
            <span className="text-ceti-amber">•</span>
            <span>Market Intelligence</span>
            <span className="text-ceti-amber">•</span>
            <span>Policy Analysis</span>
            <span className="text-ceti-amber">•</span>
            <span>Strategic Communications</span>
            <span className="text-ceti-amber">•</span>
            <span>Human-Centred Storytelling</span>
            <span className="text-ceti-amber">•</span>
            <span>Journalism</span>
            <span className="text-ceti-amber">•</span>
            <span>Market Intelligence</span>
            <span className="text-ceti-amber">•</span>
            <span>Policy Analysis</span>
            <span className="text-ceti-amber">•</span>
            <span>Strategic Communications</span>
            <span className="text-ceti-amber">•</span>
            <span>Human-Centred Storytelling</span>
            <span className="text-ceti-amber">•</span>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeUp} className="font-sans text-sm font-bold tracking-[0.2em] text-ceti-orange uppercase mb-4">
                Our Mandate
              </motion.h2>
              <motion.h3 variants={fadeUp} className="font-serif text-4xl md:text-5xl text-ceti-navy leading-tight mb-8">
                Building the institutional home for African energy narratives.
              </motion.h3>
              <motion.p variants={fadeUp} className="font-sans text-lg text-ceti-navy/70 mb-6 leading-relaxed">
                CETI is a pan-African non-profit dedicated to closing the information gap in the continent's energy sector. We believe that robust data and authentic storytelling are prerequisites for a just transition.
              </motion.p>
              <motion.p variants={fadeUp} className="font-sans text-lg text-ceti-navy/70 mb-10 leading-relaxed">
                By providing independent analysis and elevating local expertise, we empower decision-makers to navigate complex energy challenges with clarity and confidence.
              </motion.p>
              <motion.div variants={fadeUp}>
                <Link href="/about" className="inline-flex items-center gap-2 font-sans font-bold text-ceti-teal hover:text-ceti-navy transition-colors uppercase tracking-wider text-sm">
                  Read our full story <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden"
            >
              <img 
                src="/policymakers.jpg" 
                alt="African policymakers reviewing data" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-ceti-amber mix-blend-multiply z-[-1]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section className="py-24 md:py-32 bg-ceti-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="font-sans text-sm font-bold tracking-[0.2em] text-ceti-teal uppercase mb-4">
              Integrated Platforms
            </h2>
            <h3 className="font-serif text-4xl md:text-5xl text-ceti-navy leading-tight">
              Three pillars of knowledge, one unified ecosystem.
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pulse */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white p-10 border-t-4 border-ceti-teal shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-ceti-teal/10 flex items-center justify-center rounded-none mb-8 text-ceti-teal">
                <BookOpen className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4">Africa Energy Pulse</h4>
              <p className="font-sans text-ceti-navy/70 mb-8 leading-relaxed min-h-[80px]">
                Rigorous, independent journalism and news analysis covering the policies and people driving the transition.
              </p>
              <Link href="/programs#pulse" className="inline-flex items-center gap-2 font-sans font-bold text-ceti-navy group-hover:text-ceti-teal transition-colors uppercase tracking-wider text-xs">
                Explore Pulse <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Tracker */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-10 border-t-4 border-ceti-orange shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-ceti-orange/10 flex items-center justify-center rounded-none mb-8 text-ceti-orange">
                <BarChart2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4">AfriEnergy Tracker</h4>
              <p className="font-sans text-ceti-navy/70 mb-8 leading-relaxed min-h-[80px]">
                Market intelligence, policy databases, and data visualizations mapping the continent's energy infrastructure.
              </p>
              <Link href="/programs#tracker" className="inline-flex items-center gap-2 font-sans font-bold text-ceti-navy group-hover:text-ceti-orange transition-colors uppercase tracking-wider text-xs">
                Explore Tracker <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>

            {/* Comms Lab */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white p-10 border-t-4 border-ceti-amber shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-ceti-amber/10 flex items-center justify-center rounded-none mb-8 text-ceti-amber">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4">AfriEnergy Comms Lab</h4>
              <p className="font-sans text-ceti-navy/70 mb-8 leading-relaxed min-h-[80px]">
                Strategic communications research and capacity building to reshape the global narrative on African energy.
              </p>
              <Link href="/programs#comms" className="inline-flex items-center gap-2 font-sans font-bold text-ceti-navy group-hover:text-ceti-amber transition-colors uppercase tracking-wider text-xs">
                Explore Comms Lab <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPACT NUMBERS - DARK */}
      <section className="py-24 md:py-32 bg-ceti-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/africa-grid-map.jpg" alt="Africa grid map" className="w-full h-full object-cover mix-blend-screen" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-serif text-5xl md:text-7xl text-white mb-2"><CountUp end={32} /><span className="text-ceti-teal">+</span></h4>
              <p className="font-sans text-sm tracking-widest uppercase text-white/70">Countries Covered</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <h4 className="font-serif text-5xl md:text-7xl text-white mb-2"><CountUp end={150} /><span className="text-ceti-orange">+</span></h4>
              <p className="font-sans text-sm tracking-widest uppercase text-white/70">Publications</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className="font-serif text-5xl md:text-7xl text-white mb-2"><CountUp end={500} /><span className="text-ceti-amber">+</span></h4>
              <p className="font-sans text-sm tracking-widest uppercase text-white/70">Policymakers Reached</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h4 className="font-serif text-5xl md:text-7xl text-white mb-2"><CountUp end={3} /></h4>
              <p className="font-sans text-sm tracking-widest uppercase text-white/70">Integrated Platforms</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LATEST INSIGHTS */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-sans text-sm font-bold tracking-[0.2em] text-ceti-navy uppercase mb-4">
                Latest Insights
              </h2>
              <h3 className="font-serif text-4xl text-ceti-navy leading-tight">
                Evidence-forward analysis.
              </h3>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Button asChild variant="outline" className="border-ceti-navy text-ceti-navy hover:bg-ceti-navy hover:text-white rounded-none px-6 py-5 text-xs font-semibold tracking-wider uppercase">
                <Link href="/publications">View All Reports</Link>
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/2] bg-ceti-cream overflow-hidden mb-6 relative">
                <div className="absolute top-4 left-4 z-10 bg-ceti-teal text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  Market Intelligence
                </div>
                {/* We'll just use a solid color or gradient as a placeholder for article images since we only generated 3 main ones */}
                <div className="w-full h-full bg-gradient-to-br from-ceti-teal/20 to-ceti-navy/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-4 text-xs font-sans text-ceti-navy/60 mb-3 uppercase tracking-wider">
                <span>Oct 12, 2026</span>
                <span className="w-1 h-1 rounded-full bg-ceti-orange"></span>
                <span>8 min read</span>
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4 group-hover:text-ceti-orange transition-colors">
                Africa's Solar Surge: What the Data Really Shows
              </h4>
              <p className="font-sans text-ceti-navy/70 line-clamp-3">
                A comprehensive look at deployment rates across Sub-Saharan Africa, separating the hype from the hard numbers in renewable growth.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/2] bg-ceti-cream overflow-hidden mb-6 relative">
                <div className="absolute top-4 left-4 z-10 bg-ceti-orange text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  Policy Analysis
                </div>
                <div className="w-full h-full bg-gradient-to-bl from-ceti-orange/20 to-ceti-navy/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-4 text-xs font-sans text-ceti-navy/60 mb-3 uppercase tracking-wider">
                <span>Oct 05, 2026</span>
                <span className="w-1 h-1 rounded-full bg-ceti-orange"></span>
                <span>12 min read</span>
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4 group-hover:text-ceti-orange transition-colors">
                Bridging the Policy Gap in Sub-Saharan Energy
              </h4>
              <p className="font-sans text-ceti-navy/70 line-clamp-3">
                How regulatory frameworks are evolving to attract private capital while ensuring equitable access for rural communities.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[3/2] bg-ceti-cream overflow-hidden mb-6 relative">
                <div className="absolute top-4 left-4 z-10 bg-ceti-amber text-ceti-navy text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                  Strategic Comms
                </div>
                <div className="w-full h-full bg-gradient-to-t from-ceti-amber/20 to-ceti-navy/20 group-hover:scale-105 transition-transform duration-700 ease-out" />
              </div>
              <div className="flex items-center gap-4 text-xs font-sans text-ceti-navy/60 mb-3 uppercase tracking-wider">
                <span>Sep 28, 2026</span>
                <span className="w-1 h-1 rounded-full bg-ceti-orange"></span>
                <span>5 min read</span>
              </div>
              <h4 className="font-serif text-2xl text-ceti-navy mb-4 group-hover:text-ceti-orange transition-colors">
                The Comms Challenge in Just Transition Narratives
              </h4>
              <p className="font-sans text-ceti-navy/70 line-clamp-3">
                Analyzing how different stakeholders frame the 'just transition' and why alignment remains elusive on the global stage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PARTNERS PLACEHOLDER */}
      <section className="py-20 bg-ceti-cream border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="font-sans text-xs font-bold tracking-widest uppercase text-ceti-navy/50 mb-10">Supported by leading institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale">
            {/* Simple logo placeholders */}
            <div className="text-xl font-serif font-bold">Foundation One</div>
            <div className="text-xl font-sans font-black tracking-tighter">GLOBAL ENERGY</div>
            <div className="text-xl font-serif italic">The Institute</div>
            <div className="text-xl font-sans font-bold uppercase">Climate Fund</div>
          </div>
        </div>
      </section>

    </div>
  );
}
