import ContactDrawer from "@/components/ContactDrawer";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CONTACT_EMAIL } from "@/lib/contact.mjs";

export function LegalSection({ id, title, children }) {
  return (
    <section aria-labelledby={id} className="border-t border-line pt-8 sm:pt-10">
      <h2 id={id} className="text-subheading mb-4 text-ink">{title}</h2>
      <div className="space-y-4 text-base leading-7 text-muted [&_a]:text-brand [&_a]:underline [&_a]:underline-offset-4 [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-brand [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-ink [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
        {children}
      </div>
    </section>
  );
}

export function LegalContact() {
  return <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;
}

export default function LegalPage({ title, description, currentPage, children }) {
  return (
    <ContactDrawer>
      <div className="bg-surface">
        <Navbar />

        <main id="contenu" className="mx-auto w-full max-w-4xl flex-1 px-5 py-14 sm:px-8 sm:py-20">
          <div className="mb-10 sm:mb-14">
            <h1 className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.04] font-bold tracking-[-0.055em] text-balance text-ink">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-7 text-muted">{description}</p>
            <p className="text-small mt-5 text-muted">Dernière mise à jour : <time dateTime="2026-09-23">23 septembre 2026</time></p>
          </div>

          <aside aria-label="Informations à compléter" className="mb-10 rounded-xl border border-line bg-surface p-5 text-sm leading-6 text-ink sm:mb-12 sm:p-6">
            <p className="font-semibold">Version à compléter avant publication</p>
            <p className="mt-1">Les informations signalées « à compléter » ou « à confirmer » doivent être renseignées par l’éditeur du site.</p>
          </aside>

          <div className="space-y-8 sm:space-y-10">{children}</div>
        </main>

        <Footer currentPage={currentPage} />
      </div>
    </ContactDrawer>
  );
}
