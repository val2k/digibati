import { ContactButton } from "@/components/ContactDrawer";
import OfferReveal from "@/components/OfferReveal";

const offers = [
  {
    name: "Site essentiel",
    fit: "Pour démarrer",
    price: "799 €",
    monthlyPrice: "29 €",
    description:
      "Une page claire pour présenter votre entreprise, rassurer vos visiteurs et être contacté.",
    features: [
      "Une page adaptée aux mobiles",
      "Tous vos services sur la même page",
      "Design adapté à votre identité",
      "Formulaire de demande de devis",
      "Fondations du référencement local",
    ],
    details: "Une série de corrections incluse avant la mise en ligne.",
  },
  {
    name: "Site métier",
    fit: "Recommandé",
    price: "1 499 €",
    monthlyPrice: "29 €",
    description:
      "Un site complet pour détailler vos prestations et aider vos futurs clients à choisir votre entreprise.",
    features: [
      "Accueil et page contact",
      "Jusqu’à 4 pages dédiées à vos services",
      "Design adapté à votre identité",
      "Formulaire de demande de devis",
      "Référencement local par prestation",
    ],
    details: "Deux séries de corrections incluses. Blog, réalisations et pages supplémentaires en option.",
    featured: true,
  },
  {
    name: "Site sur mesure",
    fit: "Pour aller plus loin",
    price: "2 990 €",
    startingFrom: true,
    monthlyPrice: "29 €",
    description:
      "Un site pensé autour de votre entreprise, de votre identité et de vos objectifs.",
    features: [
      "Direction artistique et maquette originales",
      "Organisation du site sur mesure",
      "Contenus et parcours personnalisés",
      "Fonctionnalités spécifiques sur devis",
      "Accompagnement au lancement",
    ],
    details: "Un devis adapté à votre projet, avec les pages, fonctionnalités et étapes de validation définies ensemble.",
  },
];

export default function Offers() {
  return (
    <section
      id="offres"
      aria-labelledby="offers-title"
      className="relative z-10 overflow-hidden bg-surface px-5 py-24 sm:px-8 sm:py-28 lg:px-[clamp(1.5rem,4vw,5.1rem)] lg:py-[clamp(6.5rem,10vw,11rem)]"
    >
      <div className="relative mx-auto w-full max-w-[102.5rem]">
        <div className="mb-14 grid items-end gap-7 md:grid-cols-[minmax(0,1fr)_minmax(20rem,.72fr)] md:gap-x-[clamp(3rem,8vw,9rem)] lg:mb-24">
          <p className="text-eyebrow text-brand uppercase md:col-span-2">
            Nos offres
          </p>
          <h2 id="offers-title" className="font-display text-heading text-ink">
            Le bon site,
            <br />
            au bon rythme.
          </h2>
          <p className="text-body-large mb-2 max-w-[35rem]">
            Une page pour démarrer, un site pour détailler vos services ou une
            création sur mesure. Choisissez l’offre adaptée à votre entreprise.
          </p>
        </div>

        <OfferReveal className="offer-reveal mx-auto grid max-w-[44rem] gap-4 min-[901px]:max-w-[86rem] min-[901px]:grid-cols-3 min-[901px]:gap-[clamp(1rem,1.8vw,1.75rem)]">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`flex min-h-0 flex-col rounded-xl border p-6 shadow-[0_16px_44px_rgb(38_70_111_/_6%)] transition-[translate] duration-250 ease-out motion-safe:hover:-translate-y-1 motion-reduce:transition-none min-[601px]:min-h-[30rem] min-[601px]:p-7 min-[1181px]:p-8 ${
                offer.featured
                  ? "border-brand bg-brand text-white shadow-[0_24px_65px_rgb(22_108_229_/_23%)]"
                  : "border-line bg-white/90"
              }`}
            >
              <div className="flex min-h-8 items-start">
                <span
                  className={`text-label ${
                    offer.featured
                      ? "rounded-md bg-white/15 px-2 py-1 text-white"
                      : "pt-1 text-muted"
                  }`}
                >
                  {offer.fit}
                </span>
              </div>

              <h3
                className={`mt-4 font-display text-card-title ${offer.featured ? "text-white" : "text-ink"}`}
              >
                {offer.name}
              </h3>
              <p
                className={`text-small mt-4 ${offer.featured ? "text-white/75" : "text-muted"}`}
              >
                {offer.startingFrom ? "Création à partir de" : "Création du site"}
              </p>
              <p
                className={`mt-2 font-display text-price ${offer.featured ? "text-white" : "text-ink"}`}
              >
                <span className="whitespace-nowrap">{offer.price}</span>{" "}
                <span className="font-sans text-small font-medium tracking-normal">HT</span>
              </p>
              <p
                className={`text-small mt-2 font-semibold ${offer.featured ? "text-white" : "text-black"}`}
              >
                + {offer.monthlyPrice} HT / mois d’entretien
              </p>
              <p
                className={`text-small mt-4 ${offer.featured ? "text-white/75" : "text-muted"}`}
              >
                {offer.description}
              </p>

              <ul
                className={`text-small my-6 grid gap-2.5 border-t pt-6 ${
                  offer.featured
                    ? "border-white/20 text-white/85"
                    : "border-line text-[#44556b]"
                }`}
              >
                {offer.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`font-bold ${offer.featured ? "text-white" : "text-brand"}`}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <p
                className={`text-small mb-6 ${offer.featured ? "text-white/75" : "text-muted"}`}
              >
                {offer.details}
              </p>

              <ContactButton
                offer={offer.name}
                variant={offer.featured ? "inverse" : "secondary"}
                size="compact"
                className="mt-auto"
              >
                Découvrir l’offre
              </ContactButton>
            </article>
          ))}
        </OfferReveal>
        <p className="text-small mx-auto mt-8 max-w-[52rem] text-center text-muted">
          L’entretien comprend l’hébergement, un nom de domaine standard, les
          sauvegardes et la maintenance technique du site vitrine. Les besoins
          techniques spécifiques sont chiffrés au devis. Les pages de mentions
          légales et de confidentialité sont prévues dans chaque offre, en plus
          des pages de présentation.
        </p>
      </div>
    </section>
  );
}
