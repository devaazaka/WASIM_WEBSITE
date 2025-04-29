import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CookieConsentBanner from "@/components/layout/CookieConsentBanner";

const inter = Inter({ subsets: ["latin"] });

// Default Metadata for the entire site
export const metadata: Metadata = {
  metadataBase: new URL("https://WasimWestAfrica.org"), // Replace with actual domain
  title: {
    default: "West African Society of Integrative Medicine (WASIM)",
    template: "%s | WASIM",
  },
  description: "The West African Society of Integrative Medicine (WASIM) promotes integrative medicine practices across West Africa through education, research, and community.",
  keywords: ["integrative medicine", "West Africa", "holistic health", "traditional medicine", "complementary medicine", "WASIM"],
  openGraph: {
    title: "West African Society of Integrative Medicine (WASIM)",
    description: "Promoting integrative medicine practices across West Africa.",
    url: "https://WasimWestAfrica.org", // Replace with actual domain
    siteName: "WASIM",
    images: [
      {
        url: "/images/og-image-placeholder.jpg", // Replace with actual OG image path
        width: 1200,
        height: 630,
        alt: "WASIM Logo and banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "West African Society of Integrative Medicine (WASIM)",
    description: "Promoting integrative medicine practices across West Africa.",
    // images: ["/images/twitter-image-placeholder.jpg"], // Replace with actual Twitter image path
    // site: "@YourTwitterHandle", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Add more metadata as needed: icons, manifest, etc.
  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
};

// Placeholder Google Analytics ID
const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Replace with your actual Measurement ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <Script
          id="ga-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag("js", new Date());
              gtag("config", "${GA_TRACKING_ID}", {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Organization Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "West African Society of Integrative Medicine (WASIM)",
              "url": "https://WasimWestAfrica.org", // Replace with actual domain
              "logo": "https://WasimWestAfrica.org/images/logo-placeholder.png", // Replace with actual logo URL
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+123-456-7890", // Replace with actual phone
                "contactType": "Customer Service", // Or appropriate type
                "email": "info@wasimwestafrica.org"
              },
              "sameAs": [
                // Add social media profile URLs here if available
                // "https://www.facebook.com/YourPage",
                // "https://twitter.com/YourHandle",
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  );
}
