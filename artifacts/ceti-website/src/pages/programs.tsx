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

      {/* Header + subtext */}
      <section className="px-8 md:px-14 pt-40 md:pt-52 pb-16 md:pb-24 max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-10 md:gap-24 items-end">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.8rem,7vw,7rem)] leading-[0.95] tracking-tight text-white"
        >
          Programs.
        </motion.h1>

        <div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="origin-left h-px bg-ceti-orange w-12 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.5 }}
            className="font-sans text-base md:text-lg text-white/60 leading-relaxed font-light"
          >
            Three integrated programs working across journalism, data, and communications — each distinct in method, unified in purpose: building the knowledge infrastructure Africa's energy transition needs.
          </motion.p>
        </div>
      </section>

      {/* Program list */}
      <section className="border-t border-white/10 max-w-[1400px] mx-auto">
        {programs.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            className="grid grid-cols-1 md:grid-cols-[96px_1fr_320px] gap-y-4 gap-x-10 lg:gap-x-16 items-start
                       px-8 md:px-14 py-10 md:py-14 border-b border-white/10 group"
          >
            {/* Number */}
            <span
              className="font-serif text-[3.5rem] md:text-[4.5rem] font-bold leading-none tabular-nums select-none"
              style={{ color: p.color }}
            >
              {p.num}
            </span>

            {/* Name */}
            <h2 className="font-serif text-[clamp(2rem,4vw,4rem)] text-white font-bold leading-[1.0] tracking-tight self-center">
              {p.name}
            </h2>

            {/* Tag + description */}
            <div className="flex flex-col gap-3 self-center md:pt-1">
              <span
                className="font-sans text-[10px] tracking-[0.32em] uppercase font-semibold"
                style={{ color: p.color }}
              >
                {p.tag}
              </span>
              <p className="font-sans text-sm text-white/75 leading-relaxed">
                {p.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

    </div>
  );
}
