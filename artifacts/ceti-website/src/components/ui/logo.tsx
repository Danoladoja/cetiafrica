export function Logo() {
  const squares = [
    { letter: 'C', bg: '#1B2F5E' },
    { letter: 'E', bg: '#2AA89C' },
    { letter: 'T', bg: '#E8551A' },
    { letter: 'I', bg: '#F6A820' },
  ];
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-[2px]">
        {squares.map(({ letter, bg }) => (
          <div key={letter} className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: bg }}>
            <span className="font-sans font-black text-lg text-white leading-none">{letter}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center leading-[1.2]">
        <span className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-foreground">Climate and Energy</span>
        <span className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-foreground">Transition Initiative</span>
      </div>
    </div>
  );
}

/** White monochrome variant — same 4-square mark, all white, for dark nav */
export function LogoWhite() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex gap-[2px]">
        {['C', 'E', 'T', 'I'].map((letter) => (
          <div key={letter} className="w-8 h-8 flex items-center justify-center bg-white">
            <span className="font-sans font-black text-lg text-[#0D1117] leading-none">{letter}</span>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-center leading-[1.2]">
        <span className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-white/60">Climate and Energy</span>
        <span className="font-sans font-semibold text-[9px] tracking-[0.18em] uppercase text-white/60">Transition Initiative</span>
      </div>
    </div>
  );
}
