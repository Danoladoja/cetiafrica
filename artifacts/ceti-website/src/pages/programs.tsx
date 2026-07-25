import { motion } from "framer-motion";

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
  return (
    <div className="bg-[#0D1117] min-h-screen w-full text-ceti-cream">

      {/* Page header — mirrors About page */}
      <section className="px-8 md:px-14 pt-40 md:pt-52 pb-16 md:pb-20 max-w-[1400px] mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-tight text-white"
        >
          Programs.
        </motion.h1>
      </section>

      {/* Subtext */}
      <section className="px-8 md:px-14 pb-16 md:pb-20 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="origin-left h-px bg-ceti-orange w-16 mb-10"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
          className="font-sans text-base md:text-lg text-white/55 leading-relaxed max-w-[60ch] font-light"
        >
          Three integrated programs working across journalism, data, and communications — each distinct in method, unified in purpose: building the knowledge infrastructure Africa's energy transition needs.
        </motion.p>
      </section>

      {/* Program rows */}
      <section className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto">
          {programs.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6%" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="border-b border-white/10"
            >
              {/* Text */}
              <div
                className="px-8 md:px-14 py-12 md:py-16 flex flex-col"
                style={{ borderTop: `2px solid ${p.color}` }}
              >
                <span
                  className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium mb-5"
                  style={{ color: p.color }}
                >
                  {p.num} · {p.tag}
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3.2rem)] text-white leading-[1.05] tracking-tight mb-6">
                  {p.name}
                </h2>
                <div className="w-10 h-0.5 mb-6" style={{ backgroundColor: p.color }} />
                <p className="font-sans text-sm md:text-base text-white/55 leading-relaxed font-light max-w-[52ch]">
                  {p.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
