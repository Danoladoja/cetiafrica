import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const programs = [
  {
    num: "01",
    color: "#2AA89C",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    desc: "Pan-African energy journalism tracking the continent's power transition through data-driven reporting, investigative features, and sharp editorial analysis.",
  },
  {
    num: "02",
    color: "#E8551A",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    desc: "A real-time intelligence platform mapping Africa's energy investments, project pipelines, and regulatory shifts across 54 countries.",
  },
  {
    num: "03",
    color: "#F6A820",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    desc: "Strategic communications support for clean energy actors — building narratives, strengthening advocacy, and amplifying Africa's transition story.",
  },
];

export default function Programs() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const headingColor = useTransform(scrollYProgress, [0, 0.35], ["#FFFFFF", "#E8551A"]);

  return (
    <div ref={containerRef} className="bg-[#0D1117] min-h-screen w-full text-ceti-cream">

      {/* ── Hero statement ── */}
      <section className="px-8 md:px-14 pt-40 md:pt-52 pb-20 md:pb-28 max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{ color: headingColor }}
          whileHover={{ color: "#E8551A" }}
          className="font-serif text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-tight mb-14 max-w-[16ch] cursor-default"
        >
          Integrated programs across journalism, data, and communications.
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-ceti-orange w-16 mb-14"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="font-sans text-base md:text-lg lg:text-xl text-white/65 leading-relaxed max-w-[70ch] font-light"
        >
          CETI's three programs form a unified ecosystem of knowledge — from the newsroom to the data lab to the communications desk. Each is distinct in method; all are bound by the same purpose: making Africa's energy transition legible, navigable, and actionable for the actors who shape it.
        </motion.p>
      </section>

      {/* ── Programs strip ── */}
      <section>
        <div className="px-8 md:px-14 py-16 md:py-24 max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6">
            {programs.map((p, i) => (
              <motion.div
                key={p.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                className="flex flex-col pt-6"
                style={{ borderTop: `2px solid ${p.color}` }}
              >
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium mb-5" style={{ color: p.color }}>
                  {p.num}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 leading-tight">{p.name}</h3>
                <p className="font-sans text-sm text-white/50 leading-relaxed font-light">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
