import { motion } from "framer-motion";

export default function About() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="w-full bg-white pb-32">
      {/* HEADER */}
      <section className="bg-ceti-cream pt-24 pb-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="font-serif text-5xl md:text-7xl text-ceti-navy leading-tight mb-8">
              We are the <span className="text-ceti-orange italic">institutional home</span> for African energy narratives.
            </motion.h1>
            <motion.p variants={fadeUp} className="font-sans text-xl text-ceti-navy/70 leading-relaxed max-w-2xl mx-auto">
              A pan-African non-profit producing trusted journalism, market intelligence, and strategic communications.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* STORY & VALUES */}
      <section className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white p-10 md:p-16 shadow-2xl border-t-4 border-ceti-navy"
        >
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-ceti-navy prose-p:font-sans prose-p:text-ceti-navy/80 prose-p:leading-relaxed">
            <h2 className="text-3xl mb-6">Our Story</h2>
            <p>
              The Climate and Energy Transition Initiative (CETI) was founded on a simple premise: Africa's energy future cannot be dictated by external narratives or incomplete data. For too long, the continent has been discussed as a monolith—either a victim of climate change or a blank slate for renewable experiments.
            </p>
            <p>
              We exist to inject nuance, rigorous data, and human-centred storytelling into the global energy discourse. By elevating local expertise and providing independent analysis, we empower decision-makers to navigate complex energy challenges with clarity and confidence.
            </p>
            
            <h2 className="text-3xl mt-12 mb-6">Pan-African Mandate</h2>
            <p>
              Operating across the continent, our mandate is to close the information gap. We believe that robust data and authentic storytelling are prerequisites for a just transition. Our integrated platforms—Pulse, Tracker, and Comms Lab—work in concert to provide a 360-degree view of the energy landscape.
            </p>

            <h2 className="text-3xl mt-12 mb-6">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 not-prose">
              <div className="border-l-2 border-ceti-teal pl-6">
                <h4 className="font-sans font-bold text-ceti-navy mb-2 uppercase tracking-wider text-sm">Independence</h4>
                <p className="font-sans text-sm text-ceti-navy/70">Uncompromised editorial and analytical integrity in everything we publish.</p>
              </div>
              <div className="border-l-2 border-ceti-orange pl-6">
                <h4 className="font-sans font-bold text-ceti-navy mb-2 uppercase tracking-wider text-sm">Rigor</h4>
                <p className="font-sans text-sm text-ceti-navy/70">Evidence-forward approaches to data collection and policy analysis.</p>
              </div>
              <div className="border-l-2 border-ceti-amber pl-6">
                <h4 className="font-sans font-bold text-ceti-navy mb-2 uppercase tracking-wider text-sm">Human-Centric</h4>
                <p className="font-sans text-sm text-ceti-navy/70">Always remembering that energy transitions impact real lives and livelihoods.</p>
              </div>
              <div className="border-l-2 border-ceti-navy pl-6">
                <h4 className="font-sans font-bold text-ceti-navy mb-2 uppercase tracking-wider text-sm">Pan-African</h4>
                <p className="font-sans text-sm text-ceti-navy/70">Centering African voices, realities, and solutions in the global dialogue.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* TEAM (Placeholder) */}
      <section className="max-w-7xl mx-auto px-6 mt-32">
        <div className="text-center mb-16">
          <h2 className="font-sans text-sm font-bold tracking-[0.2em] text-ceti-teal uppercase mb-4">Leadership</h2>
          <h3 className="font-serif text-4xl text-ceti-navy">Meet the Team</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group">
              <div className="aspect-[3/4] bg-ceti-cream mb-4 overflow-hidden">
                <div className="w-full h-full bg-ceti-navy/5 group-hover:bg-ceti-navy/10 transition-colors" />
              </div>
              <h4 className="font-serif text-xl text-ceti-navy mb-1">Director Name</h4>
              <p className="font-sans text-xs uppercase tracking-wider text-ceti-orange">Position Title</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
