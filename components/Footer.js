const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-brand px-5 py-6 text-white sm:px-8 sm:py-8 lg:px-[clamp(1.5rem,4vw,5.1rem)] lg:py-[clamp(2rem,4vw,5rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(rgb(255_255_255_/_8%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_8%)_1px,transparent_1px)] [background-size:3.75rem_3.75rem] [mask-image:linear-gradient(to_bottom,transparent_4%,black_45%,transparent_100%)] sm:[background-size:5.5rem_5.5rem]"
      />

      <div className="relative z-10 my-16 w-full max-w-[90rem] sm:my-[clamp(4rem,8vh,7rem)]">
        <h2 className="font-display text-heading text-white">
          Votre savoir-faire mérite
          <br />
          un site à sa hauteur.
        </h2>
        <p className="text-body-large mt-8 max-w-[43rem] text-white sm:mt-[clamp(2rem,4vh,3.3rem)]">
          Parlons de votre activité et construisons un site qui inspire
          confiance dès le premier regard.
        </p>
        <a
          href="mailto:bonjour@digibati.fr?subject=Parlons%20de%20mon%20site"
          className={`text-button mt-8 flex min-h-18 w-full items-center justify-center rounded-lg bg-white px-3 py-4 text-brand shadow-[0_18px_45px_rgb(6_47_107_/_20%)] transition duration-200 hover:-translate-y-0.5 hover:bg-ice motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:mt-[clamp(2rem,4vh,3rem)] sm:min-h-20 sm:w-fit sm:min-w-[22rem] ${focusClasses}`}
        >
          <span>Parlons de votre projet</span>
        </a>
      </div>

      <div className="text-small relative z-10 flex flex-col items-start gap-3 border-t border-white/30 pt-6 text-white/70 sm:flex-row sm:items-center sm:justify-between sm:gap-8 sm:pt-8">
        <p>© 2026 Digibati. Tous droits réservés.</p>
        <a href="#top" className={`font-semibold text-white ${focusClasses}`}>
          Retour en haut ↑
        </a>
      </div>
    </footer>
  );
}
