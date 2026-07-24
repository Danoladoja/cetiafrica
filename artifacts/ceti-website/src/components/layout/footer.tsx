import { Link } from "wouter";
import cetiLogo from "@assets/ChatGPT_Image_Jul_24,_2026,_11_25_01_PM_1784932089497.png";

export default function Footer() {
  return (
    <footer className="bg-black text-ceti-cream py-16 px-6 md:px-12 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
        <div>
          <img src={cetiLogo} alt="CETI" className="w-[80px] brightness-0 invert mb-8" />
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-8">
          <nav className="flex gap-6 font-sans text-sm tracking-wide uppercase text-gray-400">
            <Link href="/about" className="hover:text-ceti-cream transition-colors">About</Link>
            <Link href="/programs" className="hover:text-ceti-cream transition-colors">Programs</Link>
            <Link href="/publications" className="hover:text-ceti-cream transition-colors">Publications</Link>
            <Link href="/contact" className="hover:text-ceti-cream transition-colors">Contact</Link>
          </nav>
          
          <p className="font-sans text-xs text-gray-600">
            © {new Date().getFullYear()} Climate and Energy Transition Initiative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
