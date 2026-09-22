export default function FooterCrane() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 360 300"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-[clamp(1.5rem,4vw,5.1rem)] bottom-0 hidden w-[clamp(13rem,23vw,22rem)] text-white/60 lg:block"
    >
      {/* Mast, bracing and the two sides of the jib. */}
      <path d="M252 278V94h28v184M252 94l28 36-28 36 28 36-28 36 28 40M280 94l-28 36 28 36-28 36 28 36-28 40" />
      <path d="M20 72h310v22H20zM20 94l31-22 31 22 31-22 31 22 31-22 31 22 31-22 31 22 31-22 31 22" />
      <path d="M58 72 266 24l50 48M252 72l14-48 14 48" />
      <path d="M290 94v30h32V94M306 94v30" />
      <path d="M252 99h-24v28h24M234 105h12v13h-12z" />
      <path d="m252 258-18 20h64l-18-20M218 278h96M208 286h116" />

      <g className="footer-crane-trolley">
        <path d="M96 96h28v9H96z" />
        <circle cx="101" cy="96" r="3" fill="var(--color-brand-strong)" />
        <circle cx="119" cy="96" r="3" fill="var(--color-brand-strong)" />
        <path className="footer-crane-cable" d="M110 105v80" />
        <g className="footer-crane-hook">
          <path d="m110 185 5 7-5 7-5-7z" />
          <path d="M110 199v7a7 7 0 1 0 7 7" />
        </g>
      </g>
    </svg>
  );
}
