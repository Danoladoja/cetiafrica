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

/** Monochrome white variant — original 4-square mark, all white, for dark backgrounds */
export function LogoWhite() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-[2px]">
        {['C', 'E', 'T', 'I'].map((letter) => (
          <div
            key={letter}
            className="w-7 h-7 flex items-center justify-center bg-white"
          >
            <span className="font-sans font-bold text-xs text-[#0D1117] leading-none">
              {letter}
            </span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center leading-[1.2]">
        <span className="font-sans font-medium text-[9px] tracking-[0.18em] uppercase text-white/70">
          Climate and Energy
        </span>
        <span className="font-sans font-medium text-[9px] tracking-[0.18em] uppercase text-white/70">
          Transition Initiative
        </span>
      </div>
    </div>
  );
}
