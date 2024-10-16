import type { Metadata } from "next";
import { Noto_Sans, STIX_Two_Text } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

const stixTwoText = STIX_Two_Text({
  subsets: ["latin"],
  variable: "--font-stix",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowly",
  description: "Landing page of flowly task manager.",
  generator: "Next.js",
  applicationName: "Flowly",
  openGraph: {
    title: "Flowly",
    description: "Landing page of flowly task manager.",
    url: "https://flowly-eng.vercel.app",
    siteName: "Flowly",
    images: "/assets/og-image.png",
    locale: "pl",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${stixTwoText.variable} ${notoSans.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
