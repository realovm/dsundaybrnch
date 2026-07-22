import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "d'SundayBrnch",
  description:
    "D SUNDAY BRNCH is Lagos' recurring golden-hour experience, After Church na Brunch  every 1st and 3rd Sunday.",
  openGraph: {
    title: "D SUNDAY BRNCH",
    description:
      "After Church, we go for Brunch. Benin' recurring golden-hour experience, every 1st and 3rd Sunday.",
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
      <body className="antialiased">
        <SmoothScrollProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
