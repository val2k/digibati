import Image from "next/image";
import { ConversationIcon, EyeIcon } from "@/components/ButtonIcons";
import CtaButton from "@/components/CtaButton";
import ContactDrawer, {
  ContactButton,
} from "@/components/ContactDrawer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import plumberDemo from "@/public/images/laurent-adam-demo.png";

function Crane() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -top-40 right-0 bottom-[-8rem] left-[4%] z-0 hidden text-blueprint opacity-[.86] min-[901px]:block"
    >
      <div className="absolute top-[5rem] right-[1.75rem] left-0 h-[2.4rem] border-2 border-current [background-image:repeating-linear-gradient(33deg,transparent_0_2.75rem,currentColor_2.8rem_2.88rem,transparent_2.93rem_5.15rem),repeating-linear-gradient(-33deg,transparent_0_2.75rem,currentColor_2.8rem_2.88rem,transparent_2.93rem_5.15rem)]" />

      <div className="absolute top-[6.7rem] left-[38%] h-[1.15rem] w-[2.8rem] rounded-sm border-2 border-current bg-surface">
        <span className="absolute -top-[.18rem] left-[.3rem] size-[.6rem] rounded-full border-2 border-current bg-surface" />
        <span className="absolute -top-[.18rem] right-[.3rem] size-[.6rem] rounded-full border-2 border-current bg-surface" />
      </div>

      <div className="animate-crane-cable absolute top-[7.75rem] left-[calc(38%+1.28rem)] h-[1.45rem] w-0.5 origin-top bg-current will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none" />
      <div className="animate-crane-hook absolute top-[9rem] left-[calc(38%+1.02rem)] h-[1.35rem] w-[1.1rem] rounded-b-xl border-2 border-t-0 border-r-transparent border-current will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
        <span className="absolute -top-[.48rem] -left-[.08rem] size-2.5 rotate-45 border-2 border-current" />
      </div>

      <div className="absolute top-[7.35rem] right-[1.55rem] h-[calc(100%-7.35rem)] w-[3.35rem] border-x-2 border-current [background-image:repeating-linear-gradient(58deg,transparent_0_2.75rem,currentColor_2.8rem_2.88rem,transparent_2.95rem_5.5rem),repeating-linear-gradient(-58deg,transparent_0_2.75rem,currentColor_2.8rem_2.88rem,transparent_2.95rem_5.5rem)]" />
      <div className="absolute top-[7.35rem] right-0 h-[3.25rem] w-[2.75rem] border-2 border-current [background:linear-gradient(90deg,transparent_45%,currentColor_47%_51%,transparent_53%)]" />
    </div>
  );
}

function WebsitePreview() {
  return (
    <figure
      id="demo"
      className="group relative isolate z-10 m-0 w-full scroll-mt-8"
    >
      <Crane />

      <div className="relative w-full px-[clamp(.75rem,2.1vw,2.1rem)] pt-[clamp(1.55rem,2.9vw,3rem)] pb-[clamp(2.3rem,4.5vw,4.5rem)] max-[600px]:px-[.65rem] max-[600px]:pt-[1.1rem] max-[600px]:pb-[2.3rem]">
        <div className="animate-site-float relative z-10 w-full origin-[65%_50%] -rotate-2 overflow-hidden rounded-[.9rem] border border-[#ccd7e7] bg-white shadow-[0_28px_72px_rgb(31_68_119_/_14%)] will-change-transform group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          <div className="grid min-h-12 grid-cols-[4.2rem_1fr_4.2rem] items-center border-b border-[#e3e8f0] bg-[#f9fbfe] px-4 text-[#7d899a] max-[600px]:min-h-[2.2rem] max-[600px]:grid-cols-[2.4rem_1fr_2.4rem] max-[600px]:px-2">
            <div className="flex gap-1" aria-hidden="true">
              <span className="size-2 rounded-full bg-[#d9e0ea]" />
              <span className="size-2 rounded-full bg-[#d9e0ea]" />
              <span className="size-2 rounded-full bg-[#d9e0ea]" />
            </div>
            <div className="text-micro flex h-7 items-center justify-center gap-2 rounded-md border border-[#e1e7f0] max-[600px]:h-5">
              <span aria-hidden="true">⌾</span>
              votre-entreprise.fr
            </div>
            <span
              className="justify-self-end tracking-[.12rem]"
              aria-hidden="true"
            >
              •••
            </span>
          </div>

          <Image
            src={plumberDemo}
            alt="Aperçu du site de Laurent Adam, plombier à Roubaix"
            priority
            sizes="(min-width: 1024px) 44vw, 88vw"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </figure>
  );
}

export default function Home() {
  return (
    <ContactDrawer>
      <main>
        <div className="relative isolate min-h-[100svh] overflow-hidden bg-surface">
          <Navbar isHome />

          <section
            id="top"
            aria-labelledby="hero-title"
            className="relative z-10 mx-auto grid w-full max-w-[117.5rem] grid-cols-1 gap-14 px-5 pt-14 pb-16 sm:gap-18 sm:px-8 sm:pt-20 min-[901px]:min-h-[calc(100svh-72px)] min-[901px]:grid-cols-[minmax(25rem,.86fr)_minmax(32rem,1.14fr)] min-[901px]:items-center min-[901px]:gap-8 min-[901px]:py-[clamp(2.4rem,4.5vh,4.5rem)] lg:px-[clamp(1.5rem,4vw,5.1rem)] min-[1181px]:grid-cols-[minmax(33rem,1fr)_minmax(36rem,1.05fr)] min-[1181px]:gap-[clamp(3rem,6vw,6rem)]"
          >
            <div className="relative z-10 max-w-[49rem] min-[901px]:pb-4">
              <h1
                id="hero-title"
                className="font-display text-display text-ink"
              >
                Des sites web
                <br />
                pour les artisans
                <br />
                <span className="text-brand">du bâtiment.</span>
              </h1>
              <p className="text-body-large mt-8 max-w-[43rem] sm:mt-[clamp(2.4rem,4vh,3.3rem)]">
                Un site simple et clair pour valoriser votre savoir-faire,
                présenter vos réalisations et faciliter les demandes de devis.
              </p>
              <div className="mt-7 flex flex-col items-stretch gap-3 sm:mt-[clamp(2rem,3.8vh,2.7rem)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
                <ContactButton>
                  <ConversationIcon />
                  Parlons de votre site
                </ContactButton>
                <CtaButton
                  href="https://demo.digibati.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir la démo (nouvel onglet)"
                  variant="secondary"
                >
                  <EyeIcon />
                  Voir la démo
                </CtaButton>
              </div>
            </div>

            <WebsitePreview />
          </section>
        </div>

        <Offers />
      </main>

      <Footer />
    </ContactDrawer>
  );
}
