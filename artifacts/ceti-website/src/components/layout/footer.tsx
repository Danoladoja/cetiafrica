import { Link } from "wouter";
import cetiColorLogo from "@assets/ChatGPT_Image_Jul_25,_2026,_01_09_19_AM_1784938197678.png";

export default function Footer() {
  return (
    <footer className="bg-[#0D1117] text-ceti-cream py-14 px-8 md:px-14 mt-auto border-t border-white/8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">

        {/* Left column — nav + copyright */}
        <div className="flex flex-col items-start gap-6">
          <nav className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-xs tracking-[0.22em] uppercase text-white/40">
            <Link href="/about"    className="hover:text-white transition-colors">About</Link>
            <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
            <Link href="/contact"  className="hover:text-white transition-colors">Contact</Link>
          </nav>
          <p className="font-sans text-xs text-white/20">
            © {new Date().getFullYear()} Climate and Energy Transition Initiative. All rights reserved.
          </p>
        </div>

        {/* Right — logo */}
        <div className="opacity-90 hover:opacity-100 transition-opacity">
          <img
            src={cetiColorLogo}
            alt="CETI — Climate and Energy Transition Initiative"
            className="h-36 w-auto"
            style={{ mixBlendMode: "screen" }}
          />
        </div>

      </div>
    </footer>
  );
}
