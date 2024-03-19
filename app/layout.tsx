import type { Metadata } from "next";
import clsx from "clsx";
import { Titillium_Web } from "next/font/google";
import "./globals.css";

import { MainNav } from "@/components/molecules/main-nav";
import { Footer } from "@/components/molecules/footer";

const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "400", "600", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hofu.pet"),
  title: "Hōfu - Alimento natural para tu mascota",
  description:
    "Alimentación 100% natural para mejorar la calidad de vida de tu mascotas.",
  applicationName: "Hōfu Pet Food",
  authors: [
    {
      url: "https://www.hofu.pet",
      name: "Hōfu - Alimento natural para tu mascota",
    },
  ],
  generator: "react, nextjs, tailwindcss, typescript, turbo, server components",
  creator: "Hōfu Pet Food",
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Hōfu - Alimento natural para tu mascota",
    description:
      "Alimentación 100% natural para mejorar la calidad de vida de tu mascotas.",
    url: "https://www.hofu.pet",
    images: [
      {
        url: new URL("https://www.hofu.pet/hofu-og-image.png"),
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hōfu - Alimento natural para tu mascota",
    description:
      "Alimentación 100% natural para mejorar la calidad de vida de tu mascotas.",
    images: new URL("https://www.hofu.pet/hofu-og-image.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={clsx(titillium.className, "overflow-x-hidden relative")}>
        <main>
          <MainNav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
