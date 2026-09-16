const offers = [
  {
    name: "Site essentiel",
    fit: "Pour démarrer",
    price: "990 €",
    description:
      "Une présence en ligne claire pour présenter votre activité et recevoir des demandes.",
    features: [
      "Une page complète et responsive",
      "Présentation de vos services",
      "Formulaire de demande de devis",
      "Fondations du référencement local",
    ],
    subject: "Je suis intéressé par l'offre Site essentiel",
  },
  {
    name: "Site métier",
    fit: "Recommandé",
    price: "1 790 €",
    description:
      "Un site complet pour valoriser votre savoir-faire et rassurer vos futurs clients.",
    features: [
      "Plusieurs pages dédiées",
      "Galerie de réalisations",
      "Avis et éléments de confiance",
      "Référencement local approfondi",
    ],
    subject: "Je suis intéressé par l'offre Site métier",
    featured: true,
  },
  {
    name: "Site sur mesure",
    fit: "Pour aller plus loin",
    price: "2 990 €",
    description:
      "Un site pensé autour de votre entreprise, de votre identité et de vos objectifs.",
    features: [
      "Direction artistique personnalisée",
      "Contenus et parcours sur mesure",
      "Fonctionnalités spécifiques",
      "Accompagnement au lancement",
    ],
    subject: "Je souhaite parler d'un site sur mesure",
  },
];

const focusClasses =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-4";

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
            Choisissez une base claire. Chaque offre est ensuite adaptée à votre
            métier, votre zone d’intervention et vos objectifs.
          </p>
        </div>

        <div className="mx-auto grid max-w-[44rem] gap-4 min-[901px]:max-w-[86rem] min-[901px]:grid-cols-3 min-[901px]:gap-[clamp(1rem,1.8vw,1.75rem)]">
          {offers.map((offer) => (
            <article
              key={offer.name}
              className={`flex min-h-0 flex-col rounded-xl border p-6 shadow-[0_16px_44px_rgb(38_70_111_/_6%)] transition-shadow duration-200 motion-reduce:transition-none min-[601px]:min-h-[30rem] min-[601px]:p-7 min-[1181px]:p-8 ${
                offer.featured
                  ? "border-brand bg-brand text-white shadow-[0_24px_65px_rgb(22_108_229_/_23%)] hover:shadow-[0_28px_72px_rgb(22_108_229_/_29%)]"
                  : "border-line bg-white/90 hover:shadow-[0_22px_58px_rgb(38_70_111_/_11%)]"
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
                className={`mt-2 font-display text-price ${offer.featured ? "text-white" : "text-ink"}`}
              >
                {offer.price}
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

              <a
                href={`mailto:bonjour@digibati.fr?subject=${encodeURIComponent(offer.subject)}`}
                className={`text-label mt-auto flex min-h-13 items-center justify-center rounded-lg border px-3 py-3 transition-colors motion-reduce:transition-none ${focusClasses} ${
                  offer.featured
                    ? "border-white bg-white text-brand hover:bg-ice"
                    : "border-[#c8d6e6] text-ink hover:border-brand hover:bg-ice hover:text-brand"
                }`}
              >
                Découvrir l’offre
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
