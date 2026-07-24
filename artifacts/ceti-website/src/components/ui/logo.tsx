import logoMark from "@assets/ChatGPT_Image_Jul_25,_2026,_12_06_44_AM_1784934725738.png";

/**
 * The PNG has transparent padding around the mark.
 * We clip it by containing the image inside an overflow-hidden shell
 * and scaling it up so the actual mark fills the holder.
 */
function LogoImg({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="overflow-hidden relative shrink-0"
      style={{ width: 160, height: 52 }}
    >
      <img
        src={logoMark}
        alt="CETI — Climate and Energy Transition Initiative"
        style={{
          filter: dark ? "none" : "invert(1)",
          position: "absolute",
          width: 420,
          height: 420,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -44%)",
        }}
      />
    </div>
  );
}

/** Colored variant for light backgrounds */
export function Logo() {
  return <LogoImg dark />;
}

/** White monochrome variant for dark / transparent nav */
export function LogoWhite() {
  return <LogoImg />;
}
