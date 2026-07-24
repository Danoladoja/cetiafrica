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
          <div className="absolute inset-0 bg-[#0D1117]/65" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </motion.div>

        {/* Text — bottom-left, screen-filling */}
        <div className="absolute inset-0 z-10 flex flex-col justify-end px-8 md:px-14 pb-14 md:pb-18">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-serif text-[clamp(3.5rem,10.5vw,152px)] leading-[0.88] text-white tracking-tight"
          >
            The Knowledge<br />Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.65 }}
            className="mt-3 font-sans text-xl md:text-2xl text-white/45 font-light tracking-wide"
          >
            For Africa's Energy Transition
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
      <section className="w-full px-8 md:px-14 pt-20 pb-24">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/25 mb-14"
        >
          Our Programs
        </motion.p>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border border-white/10">
          {programs.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              <Link
                href={p.href}
                className="group flex flex-col gap-8 p-10 md:p-12 h-full transition-colors duration-300 hover:bg-white/[0.03] block"
              >
                {/* Number */}
                <span
                  className="font-sans text-[4rem] font-black leading-none tabular-nums transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                  style={{ color: p.color }}
                >
                  {p.number}
                </span>

                {/* Name */}
                <h2 className="font-serif text-[clamp(1.8rem,2.6vw,3rem)] text-white leading-[1.05] tracking-tight flex-1">
                  {p.name}
                </h2>

                {/* Divider */}
                <div className="h-px bg-white/10 w-full" />

                {/* Tag + arrow */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs tracking-[0.22em] uppercase text-white/35">
                    {p.tag}
                  </span>
                  <span
                    className="font-sans text-sm font-bold tracking-[0.15em] transition-transform duration-300 group-hover:translate-x-1.5 inline-block"
                    style={{ color: p.color }}
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────── */}
      <section className="w-full bg-ceti-navy py-28 px-8 md:px-14">
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
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-4 border border-white/30 text-white font-sans text-sm font-semibold tracking-[0.15em] uppercase hover:border-white transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
