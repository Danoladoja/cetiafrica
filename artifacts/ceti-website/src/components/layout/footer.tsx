import { Link } from "wouter";
import cetiColorLogo from "@assets/ChatGPT_Image_Jul_25,_2026,_11_21_07_AM_1784976167970.png";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-ceti-cream py-10 md:py-14 px-8 md:px-14 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">

        {/* Logo — full-width on mobile so it centres in the same space as the nav */}
        <div className="order-first md:order-last w-full md:w-auto flex justify-center items-center opacity-90 hover:opacity-100 transition-opacity">
          <img
            src={cetiColorLogo}
            alt="CETI — Climate and Energy Transition Initiative"
            className="h-32 md:h-44 w-auto"
            style={{ mixBlendMode: "screen" }}
          />
        </div>

        {/* Nav + copyright — centred on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center md:items-start gap-5 md:gap-6">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-2 font-sans text-xs tracking-[0.22em] uppercase text-white/40">
            <Link href="/about"    className="hover:text-white transition-colors">About</Link>
            <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
            <Link href="/contact"  className="hover:text-white transition-colors">Contact</Link>
          </nav>
          <p className="font-sans text-xs text-white/20 text-center md:text-left">
            © {new Date().getFullYear()} Climate and Energy Transition Initiative. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
