import { motion } from "framer-motion";
import pulseImg from "@assets/generated_images/pulse-img.jpg";
import commsImg from "@assets/generated_images/comms-img.jpg";
import heroBg from "@assets/generated_images/hero-bg.jpg";

const programs = [
  {
    id: "01",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    color: "#2AA89C",
    bg: "bg-[#0D2926]",
    headline: "Trusted journalism on Africa's energy sector.",
    body: "We track capital flows, policy shifts, and grassroots impacts. Uncovering the stories behind the transition, reporting from the ground up.",
    img: pulseImg,
    imgAlt: "Africa Energy Pulse",
    imgRight: true,
  },
  {
    id: "02",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    color: "#E8551A",
    bg: "bg-[#1A0D08]",
    headline: "Market intelligence and data for Africa's energy economy.",
    body: "Real-time dashboards tracking solar deployment, grid investments, and regulatory shifts across 54 nations. Data made visible.",
    img: heroBg,
    imgAlt: "AfriEnergy Tracker",
    imgRight: false,
  },
  {
    id: "03",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    color: "#F6A820",
    bg: "bg-[#0D1117]",
    headline: "Strategic communications for Africa's energy transition.",
    body: "We equip policymakers and organisations with the narrative tools to drive change — shifting the conversation from deficit to opportunity.",
    img: commsImg,
    imgAlt: "AfriEnergy Comms Lab",
    imgRight: true,
  },
];

export default function Programs() {
  return (
    <div className="w-full bg-[#0D1117] text-ceti-cream">
      {/* Spacer for fixed navbar */}
      <div className="h-16 md:h-20" />

      {/* Page header */}
      <div className="px-6 md:px-14 py-16 md:py-24 border-b border-white/8">
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/40 block mb-5"
        >
          What We Do
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(3rem,7vw,96px)] leading-[0.92] tracking-tight"
        >
          Programs.
        </motion.h1>
      </div>

      {/* Program sections */}
      {programs.map((p, i) => (
        <section
          key={p.id}
          className={`w-full ${p.bg} border-b border-white/8`}
        >
          <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[60vh]`}>

            {/* Text panel */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col justify-center px-6 md:px-14 py-14 md:py-20 ${p.imgRight ? "lg:order-first" : "lg:order-last"}`}
            >
              <span
                className="font-sans text-[10px] tracking-[0.35em] uppercase font-semibold mb-5 block"
                style={{ color: p.color }}
              >
                {p.id} · {p.tag}
              </span>
              <h2
                className="font-serif text-[clamp(2rem,4.5vw,56px)] leading-[1.05] tracking-tight mb-6 text-white"
              >
                {p.name}
              </h2>
              <div className="w-10 h-0.5 mb-8" style={{ backgroundColor: p.color }} />
              <p className="font-sans text-base md:text-lg text-white/70 font-light leading-relaxed mb-5 max-w-md">
                {p.headline}
              </p>
              <p className="font-sans text-sm text-white/45 leading-relaxed max-w-md">
                {p.body}
              </p>
            </motion.div>

            {/* Image panel */}
            <div className={`relative h-64 sm:h-80 lg:h-auto ${p.imgRight ? "lg:order-last" : "lg:order-first"}`}>
              <img
                src={p.img}
                alt={p.imgAlt}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.55) saturate(0.7)" }}
              />
              <div
                className="absolute inset-0"
                style={{ background: `linear-gradient(135deg, ${p.color}22 0%, transparent 60%)` }}
              />
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}
