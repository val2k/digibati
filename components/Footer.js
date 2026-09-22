import Link from "next/link";
import { ConversationIcon } from "@/components/ButtonIcons";
import { ContactButton } from "@/components/ContactDrawer";
import FooterCrane from "@/components/FooterCrane";

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-strong";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-brand-strong pt-6 text-white sm:pt-8 lg:pt-[clamp(2rem,4vw,5rem)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 w-1/2 [background-image:linear-gradient(rgb(255_255_255_/_8%)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_8%)_1px,transparent_1px)] [background-size:3.75rem_3.75rem] [mask-image:linear-gradient(to_right,transparent,black_30%),linear-gradient(to_bottom,transparent_4%,black_45%,transparent_100%)] [mask-composite:intersect] sm:[background-size:5.5rem_5.5rem]"
      />

      <div className="relative z-10 my-16 w-full max-w-[90rem] px-5 sm:my-[clamp(4rem,8vh,7rem)] sm:px-8 lg:px-[clamp(1.5rem,4vw,5.1rem)]">
        <h2 className="font-display text-heading text-white">
          Votre savoir-faire mérite
          <br />
          un site à sa hauteur.
        </h2>
        <p className="text-body-large mt-8 max-w-[43rem] text-white sm:mt-[clamp(2rem,4vh,3.3rem)]">
          Parlons de votre activité et construisons un site qui inspire
          confiance dès le premier regard.
        </p>
        <ol className="text-small mt-6 max-w-[43rem] list-decimal space-y-4 pl-5 marker:font-semibold">
          <li className="pl-2">
            <h3 className="text-body font-semibold leading-snug">Montrez ce que vous savez faire</h3>
            <p className="text-small text-white/80">
              Mettez vos réalisations en valeur pour donner confiance à vos futurs clients.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-body font-semibold leading-snug">Attirez les bonnes demandes</h3>
            <p className="text-small text-white/80">
              Présentez clairement vos prestations et votre secteur pour être contacté pour les bons projets.
            </p>
          </li>
          <li className="pl-2">
            <h3 className="text-body font-semibold leading-snug">Donnez envie de vous contacter</h3>
            <p className="text-small text-white/80">
              Un appel, un message, une demande de devis : facilitez le premier pas.
            </p>
          </li>
        </ol>
        <ContactButton
          variant="inverse"
          className="mt-12 sm:mt-[clamp(3rem,5vh,4rem)]"
        >
          <ConversationIcon />
          Parlons de votre projet
        </ContactButton>
        <FooterCrane />
      </div>

      <div className="text-small relative z-10 flex flex-col gap-3 border-t border-white/10 px-5 py-4 text-white/70 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-8 lg:px-[clamp(1.5rem,4vw,5.1rem)]">
        <p>© 2026 Digibati. Tous droits réservés.</p>
        <nav aria-label="Informations légales" className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          <Link href="/mentions-legales" className={`transition-colors hover:text-white ${focusClasses}`}>
            Mentions légales
          </Link>
          <Link href="/politique-de-confidentialite" className={`transition-colors hover:text-white ${focusClasses}`}>
            Politique de confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
