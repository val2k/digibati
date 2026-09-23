This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Formulaire de contact

Le formulaire utilise FormSubmit, comme valerian.studio, avec un envoi AJAX qui
garde le visiteur sur la page. Le destinataire par défaut est `bonjour@digibati.fr`.
Le formulaire affiche l’envoi en cours, puis une confirmation ou une erreur ;
les champs sont conservés si l’envoi échoue. Un champ piège limite les soumissions
automatisées. Aucun identifiant du formulaire personnel n’est réutilisé.

Avant ouverture au public :

1. Vérifier que la boîte `bonjour@digibati.fr` reçoit les e-mails.
2. Envoyer une demande de test depuis le site. FormSubmit demande de confirmer
   l’adresse destinataire lors de sa première utilisation.
3. Ouvrir l’e-mail d’activation FormSubmit et confirmer l’adresse.
4. Refaire un test et vérifier la réception, l’offre choisie, les coordonnées et
   la provenance de la démo. La confirmation affichée correspond à l’acceptation
   par FormSubmit ; elle ne vérifie pas la réception dans la boîte mail.

L’identifiant public fourni par FormSubmit après activation peut remplacer
l’adresse dans l’URL : définir `NEXT_PUBLIC_FORMSUBMIT_RECIPIENT` dans `.env.local`
et dans l’hébergement, puis reconstruire/redéployer le site. Cette variable est
publique et ne doit contenir aucune clé secrète. Sans elle, l’adresse ci-dessus
est utilisée. La configuration de valerian.studio reste inchangée.

Documentation : https://formsubmit.co/documentation

## Parcours de la démo vers le devis

Le lien `https://www.digibati.fr/?devis=1&source=demo` ouvre automatiquement le
formulaire existant. Seul `devis` est retiré de l’URL, sans navigation ; les autres
paramètres et l’ancre sont conservés. Une URL sans `devis=1` laisse le formulaire
fermé.

La provenance est conservée dans le champ masqué `source` du formulaire et ajoutée
à l’e-mail sous la forme `Provenance : Démo plombier`. Elle reste disponible après fermeture
et réouverture du formulaire. Le paramètre `source=demo` étant conservé dans l’URL,
elle est également retrouvée après actualisation, sans rouvrir le formulaire.

Le bandeau et son activation sont gérés dans le projet distinct
`digibati-template-plombier`. Les deux projets doivent être déployés pour rendre
le parcours disponible sur les domaines publics.

## Pages légales

Les routes `/mentions-legales` et `/politique-de-confidentialite` sont accessibles
depuis le footer commun. Le formulaire de contact propose aussi un lien vers la
politique dans un nouvel onglet pour conserver la demande en cours.

Les pages sont des versions à compléter : renseigner l’identité de l’éditeur,
son statut, son adresse, son immatriculation, sa TVA éventuelle, son téléphone,
le responsable de publication et les coordonnées de l’hébergeur. Confirmer aussi
le prestataire de messagerie, les durées de conservation et les éventuels
transferts de données de FormSubmit et des autres prestataires.

Après validation, retirer l’encart de version à compléter dans
`components/LegalPage.js`, mettre à jour la date et retirer `robots.index: false`
des métadonnées des deux pages pour permettre leur indexation.

Sources utilisées pour préparer les rubriques :
- [Mentions obligatoires — ministère de l’Économie](https://www.economie.gouv.fr/entreprises/developper-son-entreprise/innover-et-numeriser-son-entreprise/mentions-sur-votre-site-internet-les-obligations-respecter)
- [Information lors de la collecte — CNIL](https://www.cnil.fr/fr/exemples-de-formulaire-de-collecte-de-donnees-caractere-personnel)
- [Politique de FormSubmit](https://formsubmit.co/privacy.pdf)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
