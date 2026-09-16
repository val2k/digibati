import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata = {
  title: "Digibati · Des sites web pour les artisans du bâtiment",
  description:
    "Des sites web clairs et efficaces pour présenter votre activité, vos réalisations et faciliter les demandes de devis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geist.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full bg-background font-sans text-ink">
        {children}
      </body>
    </html>
  );
}
