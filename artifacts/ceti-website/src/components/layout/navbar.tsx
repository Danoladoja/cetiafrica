import { Link, useLocation } from "wouter";
import { LogoWhite } from "@/components/ui/logo";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/programs", label: "Programs" },
    { href: "/contact", label: "Contact" },
  ];

  // We only want transparent nav on Home page when not scrolled
  const isHome = location === "/";
  const transparent = isHome && !scrolled && !mobileMenuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        transparent ? "bg-transparent text-ceti-cream" : "bg-ceti-dark text-ceti-cream"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-1">
        <Link href="/" className="z-50 focus:outline-none">
          <LogoWhite />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-sans font-medium tracking-wide text-sm uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className="relative group py-2"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-ceti-orange transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link 
            href="/contact"
            className="text-ceti-teal hover:text-ceti-cream transition-colors duration-300"
          >
            Partner with us
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-ceti-dark text-ceti-cream z-40 flex flex-col pt-32 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-8 font-serif text-4xl">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:text-ceti-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-ceti-teal hover:text-ceti-cream transition-colors mt-8"
              >
                Partner with us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
