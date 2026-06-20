import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Siddharth Ray — Portfolio",
  description:
    "Siddharth Ray — I build & write things. A portfolio told through the visual language of Odisha.",
  metadataBase: new URL("https://siddharthray.dev"),
  openGraph: {
    title: "Siddharth Ray — Portfolio",
    description: "I build & write things.",
    type: "website",
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
