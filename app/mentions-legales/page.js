import Link from "next/link";
import LegalPage, { LegalContact, LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Mentions légales · Digibati",
  description: "Informations relatives à l’éditeur, à l’hébergement et à l’utilisation du site Digibati.",
  robots: { index: false, follow: true },
};

export default function MentionsLegales() {
  return (
    <LegalPage title="Mentions légales" description="Les informations relatives à l’édition et à l’utilisation du site Digibati." currentPage="legal">
      <LegalSection id="editeur" title="1. Éditeur du site">
        <p>Digibati présente des services de création de sites web pour les artisans du bâtiment.</p>
        <ul>
          <li><strong>Nom commercial :</strong> Digibati.</li>
          <li><strong>Nom et prénom ou raison sociale :</strong> à compléter.</li>
          <li><strong>Statut juridique et capital social, le cas échéant :</strong> à compléter.</li>
          <li><strong>Adresse professionnelle ou siège social :</strong> à compléter.</li>
          <li><strong>SIREN / SIRET et immatriculation au registre applicable :</strong> à compléter.</li>
          <li><strong>Numéro de TVA intracommunautaire, le cas échéant :</strong> à compléter.</li>
          <li><strong>Téléphone :</strong> à compléter.</li>
          <li><strong>E-mail :</strong> <LegalContact />.</li>
        </ul>
      </LegalSection>
      <LegalSection id="publication" title="2. Responsable de la publication">
        <p><strong>Nom du responsable de la publication :</strong> à compléter.</p>
        <p>Pour toute question concernant le contenu du site, vous pouvez écrire à <LegalContact />.</p>
      </LegalSection>
      <LegalSection id="hebergement" title="3. Hébergement">
        <ul>
          <li><strong>Nom ou raison sociale de l’hébergeur :</strong> à compléter.</li>
          <li><strong>Adresse de l’hébergeur :</strong> à compléter.</li>
          <li><strong>Téléphone de l’hébergeur :</strong> à compléter.</li>
        </ul>
      </LegalSection>
      <LegalSection id="propriete-intellectuelle" title="4. Propriété intellectuelle">
        <p>Les textes, visuels, illustrations, logos et autres éléments présentés sur le site sont protégés, lorsqu’ils sont originaux, par le droit de la propriété intellectuelle. Les droits appartiennent à leurs titulaires respectifs.</p>
        <p>Sauf autorisation du titulaire des droits ou exception prévue par la loi, leur reproduction, adaptation ou diffusion n’est pas autorisée. Pour une demande de réutilisation, contactez <LegalContact />.</p>
      </LegalSection>
      <LegalSection id="utilisation" title="5. Informations et liens externes">
        <p>Le site présente les prestations de Digibati. Les modalités propres à chaque projet sont précisées dans le devis et les documents contractuels correspondants.</p>
        <p>Si vous constatez une erreur ou un problème d’accès, vous pouvez le signaler à <LegalContact />. Les liens vers des sites tiers permettent de consulter des contenus soumis aux conditions de leurs propres éditeurs.</p>
      </LegalSection>
      <LegalSection id="donnees-personnelles" title="6. Données personnelles">
        <p>Pour connaître les données traitées lors de vos échanges avec Digibati et les modalités d’exercice de vos droits, consultez la <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.</p>
      </LegalSection>
    </LegalPage>
  );
}
