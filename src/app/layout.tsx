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
  title: "ILLUMINEZ VOTRE PRÉSENCE EN LIGNE – EZK Agency",
  description: "Agence de communication et marketing digital basée à Dakar. Nous accompagnons les entreprises dans leur développement digital.",
  keywords: ["Agence digitale", "Marketing digital", "Dakar", "Création de contenu", "Web design", "Communication"],
  authors: [{ name: "EZK Agency" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  verification: {
    google: "X9cBuMIqNYvemwJp1yxyukY1UXGKttoLpaf724Jo-gQ",
  },
};

import Chatbot from "@/components/Chatbot";

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
      <body className="min-h-full flex flex-col font-sans bg-light text-dark">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
