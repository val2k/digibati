import Link from "next/link";

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-strong";

export default function FooterLegal({ currentPage }) {
  return (
    <div className="text-small relative z-10 flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-white/70 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-[clamp(1.5rem,4vw,5.1rem)]">
      <p>© 2026 Digibati. Tous droits réservés.</p>
      <nav aria-label="Informations légales" className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
        <Link href="/mentions-legales" aria-current={currentPage === "legal" ? "page" : undefined} className={`transition-colors hover:text-white aria-[current=page]:text-white ${focusClasses}`}>
          Mentions légales
        </Link>
        <Link href="/politique-de-confidentialite" aria-current={currentPage === "privacy" ? "page" : undefined} className={`transition-colors hover:text-white aria-[current=page]:text-white ${focusClasses}`}>
          Politique de confidentialité
        </Link>
      </nav>
    </div>
  );
}
