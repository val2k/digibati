This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Parcours de la démo vers le devis

Le lien `https://www.digibati.fr/?devis=1&source=demo` ouvre automatiquement le
formulaire existant. Seul `devis` est retiré de l’URL, sans navigation ; les autres
paramètres et l’ancre sont conservés. Une URL sans `devis=1` laisse le formulaire
fermé.

La provenance est conservée dans le champ masqué `source` du formulaire et ajoutée
à l’e-mail sous la forme `Provenance : démo`. Elle reste disponible après fermeture
et réouverture du formulaire. Le paramètre `source=demo` étant conservé dans l’URL,
elle est également retrouvée après actualisation, sans rouvrir le formulaire.

Le bandeau et son activation sont gérés dans le projet distinct
`digibati-template-plombier`. Les deux projets doivent être déployés pour rendre
le parcours disponible sur les domaines publics.

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
