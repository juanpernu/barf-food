import type { Metadata } from "next";
import clsx from "clsx";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import { MainNav } from "@/components/molecules/main-nav";
import { Footer } from "@/components/molecules/footer";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://app.bilog.com.ar"),
  title: "Bilog Gestión Odontológica",
  description:
    "El nuevo software para la administración del consultorio y/o clínica Odontológica.",
  applicationName: "Bilog - Gestión Odontológica",
  authors: [
    { url: "https://app.bilog.com.ar", name: "Bilog Soluciones Informáticas" },
  ],
  generator: "react, nextjs, tailwindcss, typescript, turbo, server components",
  creator: "Bilog Soluciones Informáticas",
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Bilog Gestión Odontológica",
    description:
      "El nuevo software para la administración del consultorio y/o clínica Odontológica.",
    url: "https://app.bilog.com.ar",
    images: [
      {
        url: new URL(
          "https://signup.bilog.com.ar/static/og_images/og_freemium.png"
        ),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilog Gestión Odontológica",
    description:
      "El nuevo software para la administración del consultorio y/o clínica Odontológica.",
    images: new URL(
      "https://signup.bilog.com.ar/static/og_images/og_freemium.png"
    ),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={clsx(nunito.className, "overflow-x-hidden")}>
        <main>
          <MainNav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
