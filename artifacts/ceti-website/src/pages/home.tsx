import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import heroBg from "@assets/generated_images/hero-bg.jpg";

/* ─── Programs data ────────────────────────────────────────── */
const programs = [
  { number: "01", name: "Africa Energy Pulse",    tag: "Journalism",              color: "#2AA89C", href: "/programs" },
  { number: "02", name: "AfriEnergy Tracker",     tag: "Market Intelligence",     color: "#E8551A", href: "/programs" },
  { number: "03", name: "AfriEnergy Comms Lab",   tag: "Strategic Communications",color: "#F6A820", href: "/programs" },
];

/* ─── Inline stat pill ──────────────────────────────────────── */
function StatPill({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="font-serif text-[clamp(2.4rem,5vw,5rem)] leading-none font-black" style={{ color }}>
        {value}
      </span>
      <span className="font-sans text-sm tracking-[0.2em] uppercase text-white/40">{label}</span>
    </div>
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
          <div className="absolute inset-0 bg-[#0D1117]/78" />
          <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-[#0D1117]/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0D1117] to-transparent" />
        </motion.div>

        {/* Headline — vertically centred, bleeds to edges */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center px-8 md:px-14">
          <motion.h1
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-[clamp(4rem,13.5vw,196px)] leading-[0.86] text-white tracking-tight"
          >
            The Knowledge<br />Infrastructure
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.72 }}
            className="mt-5 font-sans text-xl md:text-2xl text-white/38 font-light tracking-wide"
          >
            For Africa's Energy Transition
          </motion.p>
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
      <section className="w-full bg-ceti-navy overflow-hidden">

        {/* Big stat */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="px-8 md:px-14 pt-24 pb-12 border-b border-white/8"
        >
          <div className="flex items-end gap-5 md:gap-8">
            <span className="font-serif text-[clamp(7rem,24vw,348px)] leading-[0.82] text-ceti-orange select-none">
              600M
            </span>
            <div className="pb-3 md:pb-8 flex flex-col gap-1">
              <span className="font-sans text-base md:text-lg tracking-[0.22em] uppercase text-white/35">
                Africans without<br />reliable electricity — today
              </span>
            </div>
          </div>
        </motion.div>

        {/* Statement + fact row */}
        <div className="px-8 md:px-14 py-20 md:py-28 grid md:grid-cols-2 gap-16 md:gap-24">
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(1.8rem,3.2vw,4rem)] text-white leading-[1.1] tracking-tight"
          >
            Africa holds the world's greatest solar potential and the fastest-growing
            energy markets on earth. The missing link is knowledge.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="flex flex-col justify-between gap-12"
          >
            <StatPill value="60%"  label="of global solar irradiance"   color="#2AA89C" />
            <StatPill value="3×"   label="Africa's power demand by 2040" color="#E8551A" />
            <StatPill value="54"   label="Countries. One energy story."  color="#F6A820" />
          </motion.div>
        </div>
      </section>

      {/* ══ 03 · PROGRAMS ═══════════════════════════════════════ */}
      <section className="w-full px-8 md:px-14 pt-20 pb-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-sans text-[10px] tracking-[0.35em] uppercase text-white/25 mb-14"
        >
          Our Programs
        </motion.p>

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
                <span
                  className="font-sans text-[4rem] font-black leading-none tabular-nums opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ color: p.color }}
                >
                  {p.number}
                </span>
                <h2 className="font-serif text-[clamp(1.8rem,2.6vw,3rem)] text-white leading-[1.05] tracking-tight flex-1">
                  {p.name}
                </h2>
                <div className="h-px bg-white/10 w-full" />
                <div className="flex items-center justify-between">
                  <span className="font-sans text-xs tracking-[0.22em] uppercase text-white/35">{p.tag}</span>
                  <span
                    className="font-sans text-sm font-bold tracking-[0.15em] transition-transform duration-300 group-hover:translate-x-1.5 inline-block"
                    style={{ color: p.color }}
                  >→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 04 · MARQUEE ════════════════════════════════════════ */}
      <div className="w-full border-y border-white/8 overflow-hidden py-5 bg-[#0D1117]">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 36s linear infinite" }}>
          {[0, 1].map((n) => (
            <span key={n} className="font-sans text-xs tracking-[0.32em] uppercase text-white/18 px-2 shrink-0">
              Africa Energy Pulse &nbsp;·&nbsp; AfriEnergy Tracker &nbsp;·&nbsp; AfriEnergy Comms Lab &nbsp;·&nbsp;
              Knowledge Infrastructure &nbsp;·&nbsp; Africa's Energy Transition &nbsp;·&nbsp;
              Pan-African &nbsp;·&nbsp; Non-Profit &nbsp;·&nbsp; Open Knowledge &nbsp;·&nbsp;
              Africa Energy Pulse &nbsp;·&nbsp; AfriEnergy Tracker &nbsp;·&nbsp; AfriEnergy Comms Lab &nbsp;·&nbsp;
              Knowledge Infrastructure &nbsp;·&nbsp; Africa's Energy Transition &nbsp;·&nbsp;
              Pan-African &nbsp;·&nbsp; Non-Profit &nbsp;·&nbsp; Open Knowledge &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ══ 05 · CTA ════════════════════════════════════════════ */}
      <section className="w-full bg-[#F5F0E8] px-8 md:px-14 py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3.5rem,9vw,128px)] text-ceti-dark leading-[0.88] tracking-tight max-w-[12ch]"
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
              className="inline-flex justify-center items-center px-9 py-4 bg-ceti-navy text-white font-sans text-sm font-semibold tracking-[0.18em] uppercase hover:bg-ceti-dark transition-colors duration-300"
            >
              Partner With Us
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center items-center px-9 py-4 border border-ceti-dark/25 text-ceti-dark font-sans text-sm font-semibold tracking-[0.18em] uppercase hover:border-ceti-dark transition-colors duration-300"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
