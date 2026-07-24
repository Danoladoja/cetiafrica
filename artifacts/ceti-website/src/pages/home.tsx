import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { useRef } from "react";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import pulseImg from "@assets/generated_images/pulse-img.jpg";
import commsImg from "@assets/generated_images/comms-img.jpg";

const programs = [
  {
    number: "01",
    name: "Africa Energy\nPulse",
    tag: "Journalism",
    line: "The continent's most trusted energy reporting.",
    color: "#2AA89C",       // teal
    borderColor: "border-l-[#2AA89C]",
    ghostColor: "text-[#2AA89C]",
    img: pulseImg,
    href: "/programs",
  },
  {
    number: "02",
    name: "AfriEnergy\nTracker",
    tag: "Market Intelligence",
    line: "Data and analysis for Africa's energy economy.",
    color: "#E8551A",       // orange
    borderColor: "border-l-[#E8551A]",
    ghostColor: "text-[#E8551A]",
    img: heroBg,
    href: "/programs",
    flip: true,
  },
  {
    number: "03",
    name: "AfriEnergy\nComms Lab",
    tag: "Strategic Communications",
    line: "Shaping the narrative for Africa's energy future.",
    color: "#F6A820",       // amber
    borderColor: "border-l-[#F6A820]",
    ghostColor: "text-[#F6A820]",
    img: commsImg,
    href: "/programs",
  },
];

function ProgramPanel({ p, index }: { p: typeof programs[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <div
      ref={ref}
      className={`relative w-full h-screen overflow-hidden border-l-4 ${p.borderColor}`}
    >
      {/* Full-bleed background image with parallax scale */}
      <motion.div className="absolute inset-0 z-0" style={{ scale: imgScale }}>
        <img
          src={p.img}
          alt={p.name}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Directional gradient overlay — text side gets dark, opposite fades */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background: p.flip
            ? `linear-gradient(to left, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.7) 45%, rgba(13,17,23,0.1) 100%)`
            : `linear-gradient(to right, rgba(13,17,23,0.92) 0%, rgba(13,17,23,0.7) 45%, rgba(13,17,23,0.1) 100%)`,
        }}
      />

      {/* Ghost program number — far background */}
      <div
        className={`absolute z-10 pointer-events-none select-none leading-none font-sans font-black opacity-[0.04] ${p.ghostColor}`}
        style={{
          fontSize: "32vw",
          bottom: "-4vw",
          ...(p.flip ? { right: "2vw" } : { left: "2vw" }),
        }}
      >
        {p.number}
      </div>

      {/* Content */}
      <motion.div
        className={`absolute z-20 top-1/2 -translate-y-1/2 flex flex-col gap-6 px-12 md:px-20 max-w-[52rem] ${p.flip ? "right-0" : "left-0"}`}
        initial={{ opacity: 0, x: p.flip ? 40 : -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-15%" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Tag */}
        <span
          className="font-sans text-xs font-semibold tracking-[0.3em] uppercase"
          style={{ color: p.color }}
        >
          {p.tag}
        </span>

        {/* Program name */}
        <h2 className="font-serif text-[clamp(3rem,7vw,6.5rem)] text-white leading-[0.9] tracking-tight whitespace-pre-line">
          {p.name}
        </h2>

        {/* Divider */}
        <div className="w-12 h-px" style={{ backgroundColor: p.color }} />

        {/* One-line description */}
        <p className="font-sans text-xl md:text-2xl text-white/70 font-light leading-relaxed">
          {p.line}
        </p>

        {/* CTA */}
        <Link
          href={p.href}
          className="inline-flex items-center gap-3 font-sans text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-300 group"
          style={{ color: p.color }}
        >
          Explore
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </Link>
      </motion.div>

      {/* Index tick at bottom right */}
      <div className="absolute bottom-8 right-10 z-20 flex items-center gap-3 opacity-30">
        <div className="w-8 h-px bg-white" />
        <span className="font-sans text-xs tracking-widest text-white">{p.number} / 03</span>
      </div>
    </div>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 220]);

  return (
    <div className="bg-ceti-dark w-full overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            alt="African solar energy farm at golden hour"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-ceti-dark/65" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ceti-dark to-transparent pointer-events-none" />
        </motion.div>

        <div className="relative z-10 text-center w-full px-6 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-serif text-[clamp(2.4rem,9vw,9rem)] leading-[0.88] text-ceti-cream tracking-tight max-w-[18ch]"
          >
            The Knowledge Infrastructure for Africa's Energy Future
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            className="mt-10 w-16 h-px bg-ceti-teal origin-left"
          />
        </div>

        {/* Scroll pulse */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-14 bg-white/40 mx-auto"
          />
        </motion.div>
      </section>

      {/* ── PROGRAMS ─────────────────────────────────────────── */}
      <section className="w-full">
        {programs.map((p, i) => (
          <ProgramPanel key={p.number} p={p} index={i} />
        ))}
      </section>

      {/* ── CONTACT STRIP ────────────────────────────────────── */}
      <section className="w-full bg-ceti-navy py-32 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-white max-w-xl leading-tight"
          >
            Let's build Africa's energy future together.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col sm:flex-row gap-5 shrink-0"
          >
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-5 bg-ceti-orange text-white font-sans text-sm font-semibold tracking-[0.15em] uppercase hover:bg-white hover:text-ceti-orange transition-colors duration-300"
            >
              Partner with us
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-8 py-5 border border-white/40 text-white font-sans text-sm font-semibold tracking-[0.15em] uppercase hover:border-white transition-colors duration-300"
            >
              Contact us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
