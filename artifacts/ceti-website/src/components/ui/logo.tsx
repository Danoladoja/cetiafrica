import logoMark from "@assets/ChatGPT_Image_Jul_25,_2026,_12_06_44_AM_1784934725738.png";

export function Logo() {
  return (
    <img
      src={logoMark}
      alt="CETI — Climate and Energy Transition Initiative"
      className="h-48 w-auto"
    />
  );
}

export function LogoWhite() {
  return (
    <img
      src={logoMark}
      alt="CETI — Climate and Energy Transition Initiative"
      className="h-48 w-auto"
      style={{ filter: "invert(1)" }}
    />
  );
}
