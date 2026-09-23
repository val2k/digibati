import { ConversationIcon } from "@/components/ButtonIcons";
import { ContactButton } from "@/components/ContactDrawer";
import FooterCrane from "@/components/FooterCrane";
import FooterLegal from "@/components/FooterLegal";
import FooterTitle from "@/components/FooterTitle";

export default function Footer({ currentPage }) {
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
        <FooterTitle />
        <p className="text-body-large mt-8 max-w-[43rem] text-white sm:mt-[clamp(2rem,4vh,3.3rem)]">
          Parlons de votre activité et construisons un site qui inspire
          confiance dès le premier regard, et attire les prospects
        </p>
        <ul className="text-small mt-6 max-w-[43rem] space-y-[6px]">
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="shrink-0 font-bold text-white">✓</span>
            <h3 className="text-body font-semibold leading-snug">Montrez ce que vous savez faire</h3>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="shrink-0 font-bold text-white">✓</span>
            <h3 className="text-body font-semibold leading-snug">Attirez les bonnes demandes</h3>
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden="true" className="shrink-0 font-bold text-white">✓</span>
            <h3 className="text-body font-semibold leading-snug">Donnez envie de vous contacter</h3>
          </li>
        </ul>
        <ContactButton
          variant="inverse"
          className="mt-12 sm:mt-[clamp(3rem,5vh,4rem)]"
        >
          <ConversationIcon />
          Parlons de votre projet
        </ContactButton>
        <FooterCrane />
      </div>

      <FooterLegal currentPage={currentPage} />
    </footer>
  );
}
