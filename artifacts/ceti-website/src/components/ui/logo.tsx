import logoMark from "@assets/ChatGPT_Image_Jul_25,_2026,_12_06_44_AM_1784934725738.png";

/* Shared layout — icon clipped to just the grid mark, text on the right */
function LogoLayout({ invert }: { invert?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      {/* Icon — overflow-hidden clips away the "Climate and Energy..." text inside the PNG */}
      <div className="overflow-hidden shrink-0" style={{ height: 36, width: 36 }}>
        <img
          src={logoMark}
          alt=""
          style={{
            height: 90,
            width: "auto",
            marginTop: -22,
            marginLeft: -2,
            filter: invert ? "invert(1)" : "none",
          }}
        />
      </div>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span
          className="font-sans font-bold tracking-[0.14em] uppercase"
          style={{
            fontSize: 13,
            color: invert ? "#ffffff" : "#0D1117",
            letterSpacing: "0.14em",
          }}
        >
          CETI
        </span>
        <span
          className="font-sans uppercase mt-[3px]"
          style={{
            fontSize: 7.5,
            letterSpacing: "0.14em",
            lineHeight: 1.4,
            color: invert ? "rgba(255,255,255,0.45)" : "rgba(13,17,23,0.45)",
          }}
        >
          Climate and Energy<br />Transition Initiative
        </span>
      </div>
    </div>
  );
}

export function Logo() {
  return <LogoLayout />;
}

export function LogoWhite() {
  return <LogoLayout invert />;
}
