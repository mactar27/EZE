import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ILLUMINEZ VOTRE PRÉSENCE EN LIGNE",
  description: "Agence de communication et marketing digital basée à Dakar. Nous accompagnons les entreprises dans leur développement digital.",
  keywords: ["Agence digitale", "Marketing digital", "Dakar", "Création de contenu", "Web design", "Communication"],
  authors: [{ name: "EZK Agency" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${poppins.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-light text-dark">{children}</body>
    </html>
  );
}
