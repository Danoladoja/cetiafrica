import { Link } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="bg-ceti-navy text-ceti-cream pt-24 pb-12 border-t-4 border-ceti-teal">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
        <div className="md:col-span-1">
          {/* Logo with inverted colors specifically for footer if needed, but we'll reuse the component and let it be. Wait, the Logo text might be dark. Let's make a FooterLogo. */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-[2px]">
              <div className="w-6 h-6 flex items-center justify-center bg-white text-ceti-navy font-sans font-bold text-xs">C</div>
              <div className="w-6 h-6 flex items-center justify-center bg-ceti-teal text-white font-sans font-bold text-xs">E</div>
              <div className="w-6 h-6 flex items-center justify-center bg-ceti-orange text-white font-sans font-bold text-xs">T</div>
              <div className="w-6 h-6 flex items-center justify-center bg-ceti-amber text-white font-sans font-bold text-xs">I</div>
            </div>
            <div className="flex flex-col justify-center leading-[1.1]">
              <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-white">Climate and Energy</span>
              <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-white">Transition Initiative</span>
            </div>
          </div>
          <p className="font-serif text-lg leading-snug mb-6 opacity-90">
            Advancing Africa's Energy Future through Evidence, Insight, and Engagement.
          </p>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-ceti-amber font-bold">Platforms</h4>
          <ul className="space-y-3 font-sans text-sm opacity-80">
            <li><Link href="/programs#pulse" className="hover:text-ceti-orange transition-colors">Africa Energy Pulse</Link></li>
            <li><Link href="/programs#tracker" className="hover:text-ceti-orange transition-colors">AfriEnergy Tracker</Link></li>
            <li><Link href="/programs#comms" className="hover:text-ceti-orange transition-colors">AfriEnergy Comms Lab</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-ceti-amber font-bold">Organization</h4>
          <ul className="space-y-3 font-sans text-sm opacity-80">
            <li><Link href="/about" className="hover:text-ceti-orange transition-colors">About Us</Link></li>
            <li><Link href="/publications" className="hover:text-ceti-orange transition-colors">Publications</Link></li>
            <li><Link href="/insights" className="hover:text-ceti-orange transition-colors">Insights & News</Link></li>
            <li><Link href="/contact" className="hover:text-ceti-orange transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest uppercase mb-4 text-ceti-amber font-bold">Newsletter</h4>
          <p className="font-sans text-sm opacity-80 mb-4">Stay informed on Africa's energy transition with our monthly insights.</p>
          <div className="flex gap-2">
            <Input 
              type="email" 
              placeholder="Email address" 
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 rounded-none focus-visible:ring-ceti-orange"
            />
            <Button className="bg-ceti-orange hover:bg-ceti-orange/90 text-white rounded-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans opacity-60">
        <p>&copy; {new Date().getFullYear()} Climate and Energy Transition Initiative (CETI). All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
