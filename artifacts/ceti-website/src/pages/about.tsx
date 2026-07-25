import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-[#0D1117] min-h-screen w-full text-ceti-cream">

      {/* ── Hero statement ── */}
      <section className="px-8 md:px-14 pt-40 md:pt-52 pb-20 md:pb-28 max-w-[1400px] mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-tight text-white mb-14 max-w-[18ch]"
        >
          We are Africa's Knowledge Infrastructure for Energy
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="origin-center h-px bg-ceti-orange w-16 mb-14"
        />

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="font-sans text-base md:text-lg lg:text-xl text-white/65 leading-relaxed max-w-[60ch] font-light"
        >
          The Climate and Energy Transition Initiative (CETI) is Africa's knowledge infrastructure for energy. A pan-African non-profit producing trusted journalism, market intelligence, research, policy analysis, strategic communications, and human-centred storytelling that inform decision-making and strengthen Africa's energy ecosystem. CETI serves as the institutional home of Africa Energy Pulse, AfriEnergy Tracker, and the AfriEnergy Comms Lab, creating an integrated platform for evidence, insight, and public engagement that advances the continent's energy future.
        </motion.p>
      </section>

      {/* ── Values strip ── */}
      <section className="border-t border-white/10">
        <div className="px-8 md:px-14 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-6">
            {[
              { num: "01", title: "Evidence-First",   color: "#2AA89C", desc: "Data precedes opinion. We deal in facts, flows, and market realities." },
              { num: "02", title: "Pan-African",       color: "#E8551A", desc: "A unified perspective across borders. The transition is continental." },
              { num: "03", title: "Independent",       color: "#F6A820", desc: "Uncompromised analysis. We report without political allegiance." },
              { num: "04", title: "Action-Oriented",   color: "#2AA89C", desc: "Knowledge designed to trigger decisions, not sit in archives." },
            ].map((val, i) => (
              <motion.div
                key={val.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col pt-6"
                style={{ borderTop: `2px solid ${val.color}` }}
              >
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium mb-5" style={{ color: val.color }}>
                  {val.num}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">{val.title}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
