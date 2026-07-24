import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/publications", label: "Publications" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ceti-orange ${location === link.href ? "text-ceti-orange" : "text-foreground"}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="default" className="bg-ceti-orange hover:bg-ceti-orange/90 text-white rounded-none uppercase tracking-wider text-xs font-semibold px-6 py-5">
            <Link href="/contact">Partner with Us</Link>
          </Button>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border/50 shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-medium transition-colors ${location === link.href ? "text-ceti-orange" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button asChild className="w-full bg-ceti-orange hover:bg-ceti-orange/90 text-white rounded-none uppercase tracking-wider text-sm font-semibold py-6">
                <Link href="/contact" onClick={() => setIsOpen(false)}>Partner with Us</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
