import Link from "next/link";
import { ConversationIcon } from "@/components/ButtonIcons";
import { ContactTrigger } from "@/components/ContactDrawer";

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4";

export default function Navbar({ isHome = false }) {
  return (
    <header className="site-topbar relative z-20 shrink-0 border-b border-line bg-surface">
      <div className="mx-5 flex h-full items-center sm:mx-8 lg:mx-[clamp(1.5rem,4vw,5.1rem)]">
        <Link
          href={isHome ? "#top" : "/"}
          aria-label="Digibati, accueil"
          className={`font-display text-brandmark text-brand ${focusClasses}`}
        >
          digibati
        </Link>
        <nav
          aria-label="Navigation principale"
          className="ml-auto flex items-center gap-3 max-[360px]:gap-2 sm:gap-8"
        >
          <Link
            href={isHome ? "#offres" : "/#offres"}
            className={`text-label transition-colors hover:text-brand ${focusClasses}`}
          >
            Nos offres
          </Link>
          <ContactTrigger
            className={`inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2.5 rounded-lg bg-brand px-4 text-label text-white transition-colors hover:bg-brand-strong motion-reduce:transition-none ${focusClasses}`}
          >
            <ConversationIcon />
            Discutons
          </ContactTrigger>
        </nav>
      </div>
    </header>
  );
}
