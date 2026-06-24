import type { Metadata } from "next";
import { siteUrl, siteName, siteDescription, siteTagline } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Portfolio`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  alternates: { canonical: "/" },
  verification: {
    google: "s4Wk8WjvqKjBFvUKucJLrO-5C8d_6BQNMm6xrfH9M2g",
  },
  openGraph: {
    title: `${siteName} — Portfolio`,
    description: siteTagline,
    url: siteUrl,
    siteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Portfolio`,
    description: siteTagline,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
