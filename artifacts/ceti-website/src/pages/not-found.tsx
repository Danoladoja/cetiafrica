import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-ceti-dark text-ceti-cream flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-serif text-9xl text-ceti-orange mb-6">404</h1>
      <p className="font-sans text-2xl font-light mb-12 text-white/70">The page you're looking for doesn't exist.</p>
      <Link 
        href="/" 
        className="px-8 py-4 border border-white hover:bg-white hover:text-ceti-dark transition-colors font-sans uppercase tracking-widest text-sm"
      >
        Return Home
      </Link>
    </div>
  );
}
