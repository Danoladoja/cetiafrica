import { motion } from "framer-motion";
import pulseImg from "@assets/generated_images/pulse-img.jpg";
import commsImg from "@assets/generated_images/comms-img.jpg";
import heroBg from "@assets/generated_images/hero-bg.jpg";

const programs = [
  {
    num: "01",
    color: "#2AA89C",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    desc: "Pan-African energy journalism tracking the continent's power transition through data-driven reporting, investigative features, and sharp editorial analysis.",
    img: pulseImg,
  },
  {
    num: "02",
    color: "#E8551A",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    desc: "A real-time intelligence platform mapping Africa's energy investments, project pipelines, and regulatory shifts across 54 countries.",
    img: heroBg,
  },
  {
    num: "03",
    color: "#F6A820",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    desc: "Strategic communications support for clean energy actors — building narratives, strengthening advocacy, and amplifying Africa's transition story.",
    img: commsImg,
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
              className="grid grid-cols-1 lg:grid-cols-[1fr_420px] border-b border-white/10"
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

              {/* Image */}
              <div className="hidden lg:block relative overflow-hidden" style={{ borderTop: `2px solid ${p.color}` }}>
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "brightness(0.45) saturate(0.6)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
