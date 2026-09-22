const variants = {
  primary:
    "bg-brand text-white shadow-[0_14px_32px_rgb(22_108_229_/_13%)] hover:bg-brand-strong hover:shadow-[0_17px_36px_rgb(22_108_229_/_21%)] focus-visible:ring-brand",
  secondary:
    "border border-[#b8c8dc] bg-white/70 text-ink hover:border-brand hover:bg-ice hover:text-brand hover:shadow-[0_12px_28px_rgb(34_76_128_/_10%)] focus-visible:ring-brand",
  inverse:
    "bg-white text-brand shadow-[0_18px_45px_rgb(6_47_107_/_20%)] hover:bg-ice focus-visible:ring-white focus-visible:ring-offset-brand-strong",
};

const highlights = {
  primary: "bg-white/20",
  secondary: "bg-brand/10",
  inverse: "bg-brand/10",
};

const sizes = {
  default: "text-button min-h-16 px-4 py-3.5 sm:min-h-18 sm:w-fit sm:px-5",
  compact: "text-label min-h-13 px-3 py-3",
};

export default function CtaButton({
  as: Component = "a",
  children,
  className = "",
  variant = "primary",
  size = "default",
  ...props
}) {
  return (
    <Component
      {...props}
      className={`group relative isolate flex w-full items-center justify-center overflow-hidden rounded-lg text-center transition-[color,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 motion-reduce:transition-none ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-[-40%] -left-[35%] z-0 w-[24%] skew-x-[-18deg] blur-[1px] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-[650%] motion-reduce:hidden ${highlights[variant]}`}
      />
      <span className="relative z-10 inline-flex items-center gap-2.5 transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:translate-x-0.5 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0">
        {children}
      </span>
    </Component>
  );
}
