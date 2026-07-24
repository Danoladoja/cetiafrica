import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/hero-bg.jpg";

const programs = [
  {
    number: "01",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    color: "#2AA89C",
    href: "/programs",
  },
  {
    number: "02",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    color: "#E8551A",
    href: "/programs",
  },
  {
    number: "03",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    color: "#F6A820",
    href: "/programs",
  },
];

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 180]);

  return (
    <div className="bg-[#0D1117] w-full overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[100dvh] overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            alt="African solar energy farm"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-[#0D1117]/70" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </motion.div>

        {/* Text — bottom-left anchored */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-10 md:px-16 pb-20 md:pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-serif text-[clamp(2.8rem,7.5vw,7.5rem)] leading-[0.9] text-white tracking-tight"
          >
            The knowledge<br />infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.65 }}
            className="mt-5 font-sans text-lg md:text-xl text-white/45 font-light tracking-wide"
          >
            for Africa's energy transition
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 right-12 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-white/30 mx-auto"
          />
        </motion.div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="w-full border-t border-white/8">
        {programs.map((p, i) => (
          <motion.div
            key={p.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
          >
            <Link
              href={p.href}
              className="group flex items-start md:items-center justify-between gap-8 px-10 md:px-16 py-12 md:py-14 border-b border-white/8 transition-colors duration-300 hover:bg-white/[0.025] block"
            >
              {/* Left: number + name */}
              <div className="flex items-start md:items-baseline gap-8 md:gap-12">
                <span
                  className="font-sans text-xs font-bold tracking-[0.25em] uppercase shrink-0 mt-2 md:mt-0"
                  style={{ color: p.color }}
                >
                  {p.number}
                </span>
                <h2 className="font-serif text-[clamp(2rem,4.5vw,4.5rem)] text-white leading-tight tracking-tight group-hover:text-white/80 transition-colors duration-300">
                  {p.name}
                </h2>
              </div>

              {/* Right: tag + arrow */}
              <div className="hidden md:flex items-center gap-10 shrink-0">
                <span className="font-sans text-sm text-white/35 tracking-wide">
                  {p.tag}
                </span>
                <span
                  className="font-sans text-sm font-semibold tracking-[0.2em] uppercase transition-transform duration-300 group-hover:translate-x-2 inline-block"
                  style={{ color: p.color }}
                >
                  Explore →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────── */}
      <section className="w-full bg-ceti-navy py-28 px-10 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-white max-w-lg leading-tight"
          >
            Let's build Africa's energy future together.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="flex flex-col sm:flex-row gap-4 shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 bg-ceti-orange text-white font-sans text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-ceti-orange transition-colors duration-300"
            >
              Partner with us
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-white/30 text-white font-sans text-sm font-semibold tracking-[0.15em] uppercase hover:border-white transition-colors duration-300"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
