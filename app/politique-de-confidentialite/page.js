import Link from "next/link";
import LegalPage, { LegalContact, LegalSection } from "@/components/LegalPage";

export const metadata = {
  title: "Politique de confidentialité · Digibati",
  description: "Données collectées par le formulaire Digibati, utilisation, prestataires et droits relatifs à vos données personnelles.",
  robots: { index: false, follow: true },
};

export default function PolitiqueDeConfidentialite() {
  return (
    <LegalPage title="Politique de confidentialité" description="Comment vos données sont utilisées lorsque vous nous contactez au sujet de votre projet." currentPage="privacy">
      <LegalSection id="responsable" title="1. Responsable du traitement">
        <p>Les demandes adressées à Digibati sont traitées par l’éditeur du site, dont l’identité et les coordonnées sont à compléter dans les <Link href="/mentions-legales">mentions légales</Link>.</p>
        <p>Pour toute question concernant vos données personnelles : <LegalContact />.</p>
      </LegalSection>
      <LegalSection id="collecte" title="2. Données recueillies">
        <p>Lorsque vous envoyez le formulaire de contact, les informations suivantes sont transmises :</p>
        <ul>
          <li>Votre nom, votre adresse e-mail et la description de votre projet.</li>
          <li>Le nom de votre entreprise et votre numéro de téléphone, si vous les renseignez.</li>
          <li>L’offre sélectionnée et la provenance de la demande (site Digibati ou démonstration).</li>
        </ul>
        <p>Les champs obligatoires permettent de comprendre votre demande et de vous répondre. Sans ces informations, le formulaire ne peut pas être envoyé. Évitez d’inclure des informations sensibles dans votre message.</p>
        <p>Si vous nous contactez directement par e-mail, nous recevons votre adresse, le contenu du message et les éventuelles pièces jointes.</p>
      </LegalSection>
      <LegalSection id="finalites" title="3. Utilisation et base légale">
        <p>Vos informations servent à répondre à votre demande, échanger sur votre projet et préparer un devis. Pour une demande de devis ou de prestation, le traitement repose sur les mesures précontractuelles prises à votre demande.</p>
        <p>Pour les autres questions, le traitement repose sur l’intérêt légitime de Digibati à répondre aux personnes qui le contactent. Le formulaire ne vous inscrit pas à une newsletter.</p>
      </LegalSection>
      <LegalSection id="destinataires" title="4. Destinataires et prestataires">
        <p>Votre demande est adressée à Digibati. Le formulaire utilise le service FormSubmit pour transmettre les informations par e-mail ; le prestataire de messagerie intervient également dans leur réception et leur stockage.</p>
        <p>Vous pouvez consulter la <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">politique de confidentialité de FormSubmit (PDF, nouvel onglet)</a>.</p>
        <p><strong>À compléter :</strong> identité du prestataire de messagerie et de l’hébergeur, lieux de traitement des données, éventuels transferts hors de l’Espace économique européen et garanties applicables. Ces éléments doivent être confirmés auprès des prestataires avant publication de cette politique.</p>
      </LegalSection>
      <LegalSection id="conservation" title="5. Durée de conservation">
        <p><strong>À confirmer par Digibati :</strong> la durée de conservation des demandes de contact, des devis sans suite et des e-mails associés, ainsi que les modalités de suppression auprès des prestataires.</p>
        <p>Si votre demande aboutit à une prestation, les durées applicables aux documents contractuels et comptables doivent également être précisées selon les obligations qui concernent l’éditeur.</p>
      </LegalSection>
      <LegalSection id="cookies" title="6. Cookies et navigation">
        <p>Le site n’intègre actuellement aucun outil publicitaire ni outil de mesure d’audience. Le formulaire ne stocke pas vos coordonnées dans les cookies ou le stockage local de votre navigateur.</p>
        <p>La provenance « démonstration » est lue dans l’adresse de la page et ajoutée à votre demande pour en comprendre le contexte.</p>
        <p>Les traitements techniques de l’hébergement et des services tiers, notamment les journaux de connexion et leurs durées de conservation, restent à confirmer auprès des prestataires.</p>
      </LegalSection>
      <LegalSection id="droits" title="7. Vos droits">
        <p>Dans les conditions prévues par la réglementation, vous pouvez demander l’accès à vos données, leur rectification, leur effacement ou la limitation de leur traitement. Selon la base légale et les conditions applicables, vous pouvez également exercer un droit d’opposition ou de portabilité.</p>
        <p>Pour exercer vos droits, écrivez à <LegalContact /> en précisant votre demande. Si un doute raisonnable subsiste sur votre identité, des éléments complémentaires pourront être nécessaires.</p>
        <p>Vous pouvez également adresser une réclamation à la <a href="https://www.cnil.fr/fr/adresser-une-plainte">Commission nationale de l’informatique et des libertés (CNIL)</a>.</p>
      </LegalSection>
      <LegalSection id="modifications" title="8. Évolution de cette politique">
        <p>Cette page peut être mise à jour pour refléter l’évolution du site, de ses prestataires ou des traitements de données. La date de mise à jour figure en haut de la page.</p>
      </LegalSection>
    </LegalPage>
  );
}
