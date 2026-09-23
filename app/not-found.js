import Link from "next/link";
import CtaButton from "@/components/CtaButton";

export const metadata = {
  title: "Page introuvable · Digibati",
  description:
    "Cette page est introuvable. Retrouvez les offres de création de sites web Digibati depuis l’accueil.",
};

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col bg-surface">
      <header className="site-topbar shrink-0 border-b border-line">
        <div className="mx-5 flex h-full items-center sm:mx-8 lg:mx-[clamp(1.5rem,4vw,5.1rem)]">
          <Link
            href="/"
            aria-label="Digibati, accueil"
            className={`font-display text-brandmark text-brand ${focusClasses}`}
          >
            digibati
          </Link>
        </div>
      </header>

      <main className="relative isolate flex flex-1 items-center justify-center overflow-hidden px-5 py-16 sm:px-8 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(var(--color-blueprint)_1px,transparent_1px),linear-gradient(90deg,var(--color-blueprint)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
        />

        <div className="w-full max-w-3xl text-center">
          <p className="font-display text-[clamp(7rem,25vw,15rem)] leading-none font-extrabold tracking-[-0.08em] text-brand">
            <span className="sr-only">Erreur </span>404
          </p>
          <h1 className="font-display text-feature mt-6 text-ink">
            Cette page manque à l’appel.
          </h1>
          <p className="text-body-large mx-auto mt-5 max-w-lg text-muted">
            Elle a peut-être été déplacée, ou l’adresse est incorrecte.
            Revenons à l’accueil pour retrouver votre chemin.
          </p>

          <div className="mx-auto mt-8 flex max-w-sm flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:justify-center">
            <CtaButton as={Link} href="/">
              <svg
                aria-hidden="true"
                focusable="false"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5 shrink-0"
              >
                <path d="m12 5-7 7 7 7M5 12h14" />
              </svg>
              Retour à l’accueil
            </CtaButton>
            <CtaButton as={Link} href="/#offres" variant="secondary">
              Découvrir nos offres
            </CtaButton>
          </div>
        </div>
      </main>
    </div>
  );
}
