"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSearchParams } from "next/navigation";
import CtaButton from "@/components/CtaButton";
import { ConversationIcon } from "@/components/ButtonIcons";
import OfferSelect from "@/components/OfferSelect";
import { CONTACT_EMAIL, CONTACT_ENDPOINT, sendContactRequest } from "@/lib/contact.mjs";

const ContactContext = createContext(null);

function ContactUrlTrigger({ onOpen, onSource }) {
  const searchParams = useSearchParams();

  useEffect(() => {
    // Defer until the dialog is mounted; cancel the first pass in Strict Mode.
    const frame = window.requestAnimationFrame(() => {
      const url = new URL(window.location.href);
      if (url.searchParams.get("source") === "demo") onSource("demo");
      if (url.searchParams.get("devis") !== "1") return;

      onOpen();
      url.searchParams.delete("devis");
      window.history.replaceState(
        null,
        "",
        `${url.pathname}${url.search}${url.hash}`,
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, [searchParams, onOpen, onSource]);

  return null;
}

export function ContactTrigger({ children, offer, ...props }) {
  const openContact = useContext(ContactContext);

  return (
    <button
      {...props}
      type="button"
      aria-haspopup="dialog"
      aria-controls="contact-drawer"
      onClick={() => openContact(offer)}
    >
      {children}
    </button>
  );
}

export function ContactButton(props) {
  return <CtaButton {...props} as={ContactTrigger} />;
}

export default function ContactDrawer({ children }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const unlockScrollRef = useRef(null);
  const pointerStartedOutsideRef = useRef(false);
  const submittingRef = useRef(false);
  const [status, setStatus] = useState("idle");
  const [selectedOffer, setSelectedOffer] = useState("");
  const [source, setSource] = useState("");

  useEffect(() => () => unlockScrollRef.current?.(), []);

  const openContact = useCallback((offer) => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) return;

    if (offer) setSelectedOffer(offer);

    const body = document.body;
    const root = document.documentElement;
    const scrollY = window.scrollY;
    const savedStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - root.clientWidth;
    const bodyPadding = parseFloat(window.getComputedStyle(body).paddingRight);

    Object.assign(body.style, {
      position: "fixed",
      top: `-${scrollY}px`,
      width: "100%",
      overflow: "hidden",
      paddingRight: `${bodyPadding + scrollbarWidth}px`,
    });

    unlockScrollRef.current = () => {
      Object.assign(body.style, savedStyles);
      // Restore the page immediately, even though it uses smooth anchor scrolling.
      const scrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, scrollY);
      root.style.scrollBehavior = scrollBehavior;
      unlockScrollRef.current = null;
    };

    dialog.showModal();
    dialog.scrollTop = 0;
    closeButtonRef.current?.focus({ preventScroll: true });
  }, []);

  function closeContact() {
    dialogRef.current?.close();
  }

  function isOutsidePanel(event) {
    if (event.target !== event.currentTarget) return false;
    const bounds = event.currentTarget.getBoundingClientRect();
    return (
      event.clientX < bounds.left ||
      event.clientX > bounds.right ||
      event.clientY < bounds.top ||
      event.clientY > bounds.bottom
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (submittingRef.current) return;
    for (const fieldName of ["name", "project"]) {
      const field = event.currentTarget.elements.namedItem(fieldName);
      if (!field.value.trim()) {
        field.setCustomValidity("Merci de renseigner ce champ.");
        field.reportValidity();
        return;
      }
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    submittingRef.current = true;
    setStatus("submitting");

    try {
      await sendContactRequest(formData);
      form.reset();
      setSelectedOffer("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <ContactContext.Provider value={openContact}>
      {children}
      <Suspense fallback={null}>
        <ContactUrlTrigger onOpen={openContact} onSource={setSource} />
      </Suspense>
      <dialog
        ref={dialogRef}
        id="contact-drawer"
        className="contact-drawer"
        aria-labelledby="contact-drawer-title"
        aria-describedby="contact-drawer-description"
        onClose={() => unlockScrollRef.current?.()}
        onPointerDown={(event) => {
          pointerStartedOutsideRef.current = isOutsidePanel(event);
        }}
        onClick={(event) => {
          if (pointerStartedOutsideRef.current && isOutsidePanel(event)) {
            closeContact();
          }
          pointerStartedOutsideRef.current = false;
        }}
      >
        <div className="contact-drawer-content">
          <header className="site-topbar contact-drawer-topbar">
            <span className="font-display text-brandmark text-brand">
              digibati
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              className="contact-drawer-close"
              aria-label="Fermer le formulaire"
              onClick={closeContact}
            >
              <svg
                aria-hidden="true"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              >
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
          </header>

          <div className="contact-drawer-intro">
            <h2 id="contact-drawer-title" className="font-display">
              Parlons de votre projet.
            </h2>
            <p id="contact-drawer-description">
              Votre métier, vos envies, vos idées : racontez-nous ce que vous
              souhaitez construire.
            </p>
          </div>

          <form
            action={CONTACT_ENDPOINT}
            method="post"
            className="contact-form"
            aria-busy={status === "submitting"}
            onSubmit={handleSubmit}
            onInput={(event) => {
              event.target.setCustomValidity?.("");
              if (!submittingRef.current) setStatus("idle");
            }}
          >
            <input type="hidden" name="source" value={source} />
            <input type="hidden" name="_subject" value="Digibati — Nouvelle demande de projet" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <fieldset className="contact-form-grid min-w-0 border-0 p-0" disabled={status === "submitting"}>
              <label className="contact-field" htmlFor="contact-name">
                <span>Votre nom</span>
                <input
                  id="contact-name"
                  name="name"
                  autoComplete="name"
                  placeholder="Prénom et nom"
                  maxLength={120}
                  required
                />
              </label>
              <label className="contact-field" htmlFor="contact-company">
                <span>
                  Votre entreprise{" "}
                  <span className="contact-field-optional">(facultatif)</span>
                </span>
                <input
                  id="contact-company"
                  name="company"
                  autoComplete="organization"
                  placeholder="Nom de votre entreprise"
                  maxLength={160}
                />
              </label>
              <label className="contact-field" htmlFor="contact-email">
                <span>Votre e-mail</span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="vous@entreprise.fr"
                  maxLength={254}
                  required
                />
              </label>
              <label className="contact-field" htmlFor="contact-phone">
                <span>
                  Votre téléphone{" "}
                  <span className="contact-field-optional">(facultatif)</span>
                </span>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                  maxLength={30}
                />
              </label>
              <OfferSelect value={selectedOffer} onChange={setSelectedOffer} />
              <label
                className="contact-field contact-field-wide"
                htmlFor="contact-project"
              >
                <span>Parlez-nous de votre projet</span>
                <textarea
                  id="contact-project"
                  name="project"
                  rows={4}
                  placeholder="Votre activité, votre zone d’intervention, le site que vous imaginez…"
                  maxLength={3000}
                  required
                />
              </label>
            </fieldset>
            <CtaButton
              as="button"
              type="submit"
              disabled={status === "submitting"}
              className="contact-form-submit mt-6 disabled:cursor-wait disabled:opacity-70 sm:w-full"
            >
              {status === "success" ? <span aria-hidden="true">✓</span> : <ConversationIcon />}
              {status === "submitting" ? "Envoi en cours…" : status === "error" ? "Réessayer l’envoi" : "Envoyer ma demande"}
            </CtaButton>
            <p className="contact-form-note" role="status" aria-atomic="true">
              {status === "success" ? (
                "Merci, votre demande a bien été envoyée. Nous vous répondrons par e-mail."
              ) : status === "error" ? (
                <>
                  L’envoi n’a pas pu être confirmé. Vos informations sont conservées.
                  Réessayez ou écrivez à{" "}
                  <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
                    {CONTACT_EMAIL}
                  </a>.
                </>
              ) : status === "submitting" ? (
                "Votre demande est en cours d’envoi."
              ) : (
                "Vos coordonnées nous permettent de vous recontacter au sujet de votre projet."
              )}
            </p>
            <p className="contact-form-note">
              Digibati utilise ces informations pour répondre à votre demande.
              Consultez notre{" "}
              <a
                href="/politique-de-confidentialite"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              >
                politique de confidentialité (nouvel onglet)
              </a>.
            </p>
          </form>
        </div>
      </dialog>
    </ContactContext.Provider>
  );
}
