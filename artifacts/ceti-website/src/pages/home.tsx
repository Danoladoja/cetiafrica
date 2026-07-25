import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import heroBg from "@assets/generated_images/hero-bg-v5.jpg";
import pulseIcon   from "../assets/icons/icon-pulse.svg";
import trackerIcon from "../assets/icons/icon-tracker.svg";
import commsIcon   from "../assets/icons/icon-comms.svg";

/* ─── Programs data ────────────────────────────────────────── */
const programs = [
  {
    number: "01",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    color: "#2AA89C",
    href: "/programs",
    icon: pulseIcon,
    description: "Authoritative journalism covering Africa's energy transition — policy shifts, project finance, grid access, and the communities powering change.",
  },
  {
    number: "02",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    color: "#E8551A",
    href: "/programs",
    icon: trackerIcon,
    description: "Real-time data and analysis on Africa's energy markets, investment flows, and project pipelines — turning raw data into strategic insight.",
  },
  {
    number: "03",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    color: "#F6A820",
    href: "/programs",
    icon: commsIcon,
    description: "Building the communications capacity of African energy advocates and institutions to shape their own narrative on the global stage.",
  },
];

/* ─── Programs cards ────────────────────────────────────────── */
function ProgramsSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="w-full px-8 md:px-14 pt-20 pb-24">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/45 mb-14"
      >
        Our Programs
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 border border-white/10 overflow-hidden">
        {programs.map((p, i) => {
          const isHovered = hovered === i;
          return (
            <motion.div
              key={p.number}
              className="relative overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-white/10 last:border-0"
              style={{ height: 520 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
            >
              {/* Card background — always dark with brand radial glow */}
              <div
                className="absolute inset-0"
                style={{ background: `radial-gradient(ellipse at 50% 40%, ${p.color}22 0%, #0D1117 65%)` }}
              />

              {/* Brand top accent */}
              <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ backgroundColor: p.color }} />

              {/* DEFAULT state — large centred icon + name */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-8 p-8 md:p-10"
                animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? -10 : 0 }}
                transition={{ duration: 0.35 }}
              >
                {/* Icon */}
                <img
                  src={p.icon}
                  alt=""
                  aria-hidden="true"
                  className="w-24 h-24 select-none"
                  style={{ filter: `brightness(0) invert(1) opacity(0.85)` }}
                />
                {/* Name + tag */}
                <div className="text-center">
                  <span
                    className="font-sans text-[10px] tracking-[0.32em] uppercase font-medium block mb-3"
                    style={{ color: p.color }}
                  >
                    {p.tag}
                  </span>
                  <h2 className="font-serif text-[clamp(1.5rem,2vw,2.4rem)] text-white leading-[1.1] tracking-tight">
                    {p.name}
                  </h2>
                </div>
              </motion.div>

              {/* HOVER state — description, no image */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center p-8 md:p-10"
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 16 }}
                transition={{ duration: 0.4, delay: isHovered ? 0.08 : 0 }}
              >
                <span
                  className="font-sans text-[10px] tracking-[0.32em] uppercase font-medium block mb-5"
                  style={{ color: p.color }}
                >
                  {p.tag}
                </span>
                <h2 className="font-serif text-[clamp(1.6rem,2.2vw,2.6rem)] text-white leading-[1.05] tracking-tight mb-5">
                  {p.name}
                </h2>
                <div className="h-px w-10 mb-6" style={{ backgroundColor: p.color }} />
                <p className="font-sans text-sm text-white/70 leading-relaxed mb-8 max-w-[30ch]">
                  {p.description}
                </p>
                <Link href={p.href}>
                  <span
                    className="inline-block font-sans text-[11px] font-semibold tracking-[0.22em] uppercase px-5 py-2 rounded-full border transition-all duration-300 hover:bg-white/10"
                    style={{ color: p.color, borderColor: `${p.color}80` }}
                  >
                    Explore Program
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

/* ─── Home ──────────────────────────────────────────────────── */
export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 900], [0, 200]);

  return (
    <div className="bg-[#0D1117] w-full overflow-x-hidden">

      {/* ══ 01 · HERO ═══════════════════════════════════════════ */}
      <section className="relative w-full h-[100dvh] overflow-hidden">

        {/* Parallax image */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img src={heroBg} alt="" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-[#0D1117]/55" />
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#0D1117]/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </motion.div>

        {/* Headline — vertically centred, bleeds to edges */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-14 max-w-[1100px]">
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-sans text-[10px] tracking-[0.38em] uppercase text-ceti-teal mb-5 block"
          >
            We Are Building
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            className="font-serif text-[clamp(3.2rem,8.5vw,124px)] leading-[0.9] text-white tracking-tight"
          >
            The Knowledge<br />Infrastructure
          </motion.h1>

          {/* Rule + subtitle in one line */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.75 }}
            className="mt-6 flex items-center gap-4"
          >
            <span className="block w-8 h-px bg-ceti-orange shrink-0" />
            <p className="font-sans text-base md:text-lg text-white/75 font-light tracking-[0.06em]">
              For Africa's Energy Transition
            </p>
          </motion.div>
        </div>

        {/* Scroll line */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-10 right-14 z-10"
        >
          <motion.div
            animate={{ y: [0, 9, 0], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-14 bg-white/30"
          />
        </motion.div>
      </section>

      {/* ══ 02 · STATEMENT ══════════════════════════════════════ */}
      <section className="w-full bg-[#0D1117] border-t border-white/8">

        {/* Editorial two-column */}
        <div className="px-8 md:px-14 py-20 md:py-28 grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">

          {/* Left — anchor stat */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 md:sticky md:top-32"
          >
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/45">The Context</span>
            <span className="font-serif text-[clamp(4rem,10vw,110px)] leading-[0.88] text-ceti-orange select-none tabular-nums">
              600M
            </span>
            <span className="font-sans text-sm tracking-[0.14em] text-white/60 leading-relaxed max-w-[18ch]">
              Africans without reliable electricity — today
            </span>
          </motion.div>

          {/* Right — manifesto + data annotations */}
          <div className="flex flex-col gap-14">
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-[clamp(1.8rem,3vw,3.6rem)] text-white leading-[1.12] tracking-tight"
            >
              Africa holds the world's greatest solar potential and the fastest-growing energy markets on earth. The missing link is knowledge.
            </motion.p>

            {/* Horizontal annotation strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="grid grid-cols-3"
            >
              {[
                { value: "60%", label: "of global solar irradiance",    color: "#2AA89C" },
                { value: "3×",  label: "Africa's power demand by 2040", color: "#E8551A" },
                { value: "54",  label: "Countries. One energy story.",   color: "#F6A820" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 pt-6 pb-2 ${i > 0 ? "pl-6 border-l border-white/10" : ""}`}
                  style={{ borderTop: `2px solid ${s.color}` }}
                >
                  <span className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-none" style={{ color: s.color }}>
                    {s.value}
                  </span>
                  <span className="font-sans text-[11px] tracking-[0.18em] uppercase text-white/50 leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>

      {/* ══ 03 · PROGRAMS ═══════════════════════════════════════ */}
      <ProgramsSection />

      {/* ══ 04 · MARQUEE ════════════════════════════════════════ */}
      <div className="w-full border-y border-white/10 overflow-hidden py-5 bg-[#0D1117]">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 36s linear infinite" }}>
          {[0, 1].map((n) => (
            <span key={n} className="font-sans text-xs tracking-[0.28em] uppercase text-white/40 px-2 shrink-0">
              Africa Energy Pulse
              <span style={{ color: "#2AA89C" }}>&nbsp; · &nbsp;</span>
              AfriEnergy Tracker
              <span style={{ color: "#E8551A" }}>&nbsp; · &nbsp;</span>
              AfriEnergy Comms Lab
              <span style={{ color: "#F6A820" }}>&nbsp; · &nbsp;</span>
              Knowledge Infrastructure
              <span style={{ color: "#2AA89C" }}>&nbsp; · &nbsp;</span>
              Africa's Energy Transition
              <span style={{ color: "#E8551A" }}>&nbsp; · &nbsp;</span>
              Pan-African &nbsp;·&nbsp; Non-Profit &nbsp;·&nbsp; Open Knowledge
              <span style={{ color: "#F6A820" }}>&nbsp; · &nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      {/* ══ 05 · CTA ════════════════════════════════════════════ */}
      <section className="w-full bg-[#0C1A30] px-8 md:px-14 py-28 md:py-36 border-t border-white/8">
        <div className="max-w-[1400px] mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/45 block mb-8"
          >
            Partner With Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3.5rem,9vw,128px)] text-white leading-[0.88] tracking-tight max-w-[12ch]"
          >
            Build the future<br />with us.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-9 py-4 bg-ceti-teal text-white font-sans text-sm font-semibold tracking-[0.18em] uppercase hover:bg-[#22958a] transition-colors duration-300"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-9 py-4 border border-white/20 text-white font-sans text-sm font-semibold tracking-[0.18em] uppercase hover:border-white/50 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
