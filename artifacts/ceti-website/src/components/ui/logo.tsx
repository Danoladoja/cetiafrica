import { Link } from "wouter";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-[2px]">
        <div className="w-6 h-6 flex items-center justify-center bg-ceti-navy text-white font-sans font-bold text-xs">C</div>
        <div className="w-6 h-6 flex items-center justify-center bg-ceti-teal text-white font-sans font-bold text-xs">E</div>
        <div className="w-6 h-6 flex items-center justify-center bg-ceti-orange text-white font-sans font-bold text-xs">T</div>
        <div className="w-6 h-6 flex items-center justify-center bg-ceti-amber text-white font-sans font-bold text-xs">I</div>
      </div>
      <div className="flex flex-col justify-center leading-[1.1]">
        <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-foreground">Climate and Energy</span>
        <span className="font-sans font-medium text-[10px] tracking-widest uppercase text-foreground">Transition Initiative</span>
      </div>
    </div>
  );
}
