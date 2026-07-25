import { motion, useScroll, useTransform, AnimatePresence, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";
import { useState, useRef } from "react";
import heroBg from "@assets/pexels-silveremeya-7381784_1784969949348.jpg";

/* ─── Programs data ────────────────────────────────────────── */
const programs = [
  {
    number: "01",
    name: "Africa Energy Pulse",
    tag: "Journalism",
    color: "#2AA89C",
    href: "/programs",
    description: "Pan-African energy journalism tracking the continent's power transition through data-driven reporting, investigative features, and sharp editorial analysis.",
  },
  {
    number: "02",
    name: "AfriEnergy Tracker",
    tag: "Market Intelligence",
    color: "#E8551A",
    href: "/programs",
    description: "A real-time intelligence platform mapping Africa's energy investments, project pipelines, and regulatory shifts across 54 countries.",
  },
  {
    number: "03",
    name: "AfriEnergy Comms Lab",
    tag: "Strategic Communications",
    color: "#F6A820",
    href: "/programs",
    description: "Strategic communications support for clean energy actors: building narratives, strengthening advocacy, and amplifying Africa's transition story.",
  },
];

/* ─── Inline stat pill ──────────────────────────────────────── */
function StatPill({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none font-extrabold" style={{ color }}>
        {value}
      </span>
      <span className="font-sans text-sm tracking-[0.2em] uppercase text-white/40">{label}</span>
    </div>
  );
}

/* ─── Home ──────────────────────────────────────────────────── */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  // Track window scroll — App root div is min-h-[100dvh] with no overflow lock
  const { scrollY } = useScroll();

  // Parallax on bg image
  const heroY = useTransform(scrollY, [0, 900], [0, 200]);

  // Scroll-driven transforms for the centred hero text
  const heroTextY       = useTransform(scrollY, [0, 600], [0, -120]);
  const heroTextScale   = useTransform(scrollY, [0, 600], [1, 0.78]);
  const heroTextOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <div className="bg-[#0D1117] w-full overflow-x-hidden">

      {/* ══ 01 · HERO ═══════════════════════════════════════════ */}
      <section ref={heroRef} className="relative w-full h-[100dvh] overflow-hidden">

        {/* Background image — strongly darkened so text is always vivid */}
        <motion.div className="absolute inset-0 z-0" style={{ y: heroY }}>
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover scale-110"
            style={{ filter: "brightness(0.22) saturate(0.5)" }}
          />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#0D1117] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </motion.div>

        {/* Hero text — centred + scroll-driven exit */}
        <motion.div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6"
          style={{ y: heroTextY, scale: heroTextScale, opacity: heroTextOpacity }}
        >
          <span className="font-sans text-xs tracking-[0.35em] uppercase text-ceti-orange font-semibold mb-7 block">
            We Are Building
          </span>

          <h1 className="font-serif text-[clamp(3rem,7.5vw,108px)] leading-[0.92] text-white tracking-tight">
            The Knowledge<br />Infrastructure
          </h1>

          <p className="mt-7 font-sans text-lg md:text-xl text-white/90 font-normal tracking-[0.2em] uppercase">
            For Africa's Energy Future
          </p>
        </motion.div>

        {/* Scroll cue */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-white/40"
          />
        </div>
      </section>

      {/* ══ 02 · STATEMENT ══════════════════════════════════════ */}
      <section className="w-full bg-[#0D1117] border-t border-white/8">

        {/* Editorial two-column */}
        <div className="px-8 md:px-14 py-16 md:py-28 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">

          {/* Left — anchor stat */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3 md:sticky md:top-32"
          >
            <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/45">The Context</span>
            <span className="font-serif text-[clamp(3.5rem,10vw,110px)] leading-[0.88] text-ceti-orange select-none tabular-nums">
              600M
            </span>
            <span className="font-sans text-sm tracking-[0.14em] text-white/60 leading-relaxed max-w-[18ch]">
              Africans without reliable electricity, today
            </span>
          </motion.div>

          {/* Right — manifesto + data annotations */}
          <div className="flex flex-col gap-12 md:gap-14">
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-serif text-[clamp(1.5rem,3vw,3.6rem)] text-white leading-[1.15] tracking-tight"
            >
              Africa holds the world's greatest solar potential and the fastest-growing energy markets on earth. The missing link is knowledge.
            </motion.p>

            {/* Annotation strip — 1 col on tiny screens, 3 on sm+ */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-3"
            >
              {[
                { value: "60%", label: "of global solar irradiance",    color: "#2AA89C" },
                { value: "3×",  label: "Africa's power demand by 2040", color: "#E8551A" },
                { value: "54",  label: "Countries. One energy story.",   color: "#F6A820" },
              ].map((s, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-2 pt-5 pb-2 ${i > 0 ? "sm:pl-6 sm:border-l border-white/10 border-t sm:border-t-0 mt-0" : ""}`}
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
      <section className="w-full px-8 md:px-14 pt-16 md:pt-20 pb-20 md:pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/45 mb-10 md:mb-14"
        >
          Our Programs
        </motion.p>

        {/* ── Mobile: vertical tap accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden flex flex-col border border-white/10 divide-y divide-white/10"
        >
          {programs.map((p, i) => {
            const isActive = activeProgram === i;
            return (
              <div
                key={p.number}
                onClick={() => setActiveProgram(isActive ? -1 : i)}
                className="relative overflow-hidden cursor-pointer"
                style={{ borderTop: `3px solid ${p.color}` }}
              >
                {/* Brand gradient */}
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-400"
                  style={{
                    background: `linear-gradient(135deg, ${p.color}1a 0%, transparent 70%)`,
                    opacity: isActive ? 1 : 0,
                  }}
                />

                {/* Header row — always visible */}
                <div className="flex items-center justify-between px-6 py-5 relative z-10">
                  <div className="flex items-center gap-4">
                    <span className="font-sans text-2xl font-bold tabular-nums" style={{ color: p.color }}>
                      {p.number}
                    </span>
                    <div>
                      <p className="font-serif text-lg text-white leading-tight">{p.name}</p>
                      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/40 mt-0.5">{p.tag}</p>
                    </div>
                  </div>
                  <span
                    className="text-white/30 text-xl transition-transform duration-300 shrink-0"
                    style={{ transform: isActive ? "rotate(45deg)" : "rotate(0deg)" }}
                  >
                    +
                  </span>
                </div>

                {/* Expandable body */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pt-1 relative z-10">
                        <p className="font-sans text-sm text-white/55 leading-relaxed mb-6">{p.description}</p>
                        <Link href={p.href}>
                          <span
                            className="inline-block font-sans text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full border"
                            style={{ color: p.color, borderColor: `${p.color}70`, backgroundColor: `${p.color}15` }}
                          >
                            Explore Program
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>

        {/* ── Desktop: horizontal hover accordion ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-6%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex h-[520px] border border-white/10 overflow-hidden"
        >
          {programs.map((p, i) => {
            const isActive = activeProgram === i;
            return (
              <motion.div
                key={p.number}
                onMouseEnter={() => setActiveProgram(i)}
                className="relative overflow-hidden cursor-pointer flex-shrink-0 border-r border-white/10 last:border-r-0"
                animate={{ flexGrow: isActive ? 4 : 1 }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderTop: `3px solid ${p.color}`, minWidth: 72 }}
              >
                {/* Brand gradient fill */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.45 }}
                  style={{ background: `linear-gradient(135deg, ${p.color}22 0%, ${p.color}08 45%, transparent 75%)` }}
                />

                {/* Watermark number */}
                <motion.span
                  className="absolute bottom-6 right-4 font-serif font-extrabold leading-none select-none tabular-nums pointer-events-none"
                  animate={{ fontSize: isActive ? "10rem" : "4rem", opacity: isActive ? 0.2 : 0.08 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  style={{ color: p.color }}
                >
                  {p.number}
                </motion.span>

                {/* Collapsed label — vertical */}
                <AnimatePresence>
                  {!isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex flex-col items-center justify-center px-2"
                    >
                      <span
                        className="font-sans text-[10px] tracking-[0.25em] uppercase font-medium whitespace-nowrap"
                        style={{ color: p.color, writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {p.name}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 }}
                      className="absolute inset-0 flex flex-col justify-end p-10 lg:p-12"
                    >
                      <span className="font-sans text-[10px] tracking-[0.3em] uppercase font-medium mb-4" style={{ color: p.color }}>
                        {p.tag}
                      </span>
                      <h2 className="font-serif text-[clamp(1.8rem,3.2vw,3.2rem)] text-white leading-[1.05] tracking-tight mb-5">
                        {p.name}
                      </h2>
                      <p className="font-sans text-sm text-white/55 leading-relaxed mb-8 max-w-sm">
                        {p.description}
                      </p>
                      <div className="h-px w-12 mb-8" style={{ backgroundColor: p.color }} />
                      <div>
                        <Link href={p.href}>
                          <span
                            className="inline-block font-sans text-[11px] font-semibold tracking-[0.18em] uppercase px-5 py-2 rounded-full border transition-colors duration-200"
                            style={{ color: p.color, borderColor: `${p.color}70`, backgroundColor: `${p.color}15` }}
                          >
                            Explore Program
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

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
