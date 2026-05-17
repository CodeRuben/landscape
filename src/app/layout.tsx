import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import { Footer } from "@/components/Footer";
import { GoatCounterAnalytics } from "@/components/GoatCounterAnalytics";
import { Header } from "@/components/Header";
import { business } from "@/data/site";
import { defaultDescription, localBusinessJsonLd } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: "K.H. White Bobcat Services | MetroWest Excavation and Bobcat Work",
    template: "%s | K.H. White Bobcat Services",
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "K.H. White Bobcat Services",
    description: defaultDescription,
    url: business.siteUrl,
    siteName: "K.H. White Bobcat Services",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd()),
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <GoatCounterAnalytics />
      </body>
    </html>
  );
}
