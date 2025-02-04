import type { Metadata } from "next";
import { Nunito, Spectral } from "next/font/google";
import "./globals.css";
import Header from "@/components/_header";
import Footer from "@/components/_footer";

const spectral = Spectral({
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const nuito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Breathe Matters",
  description:
    "Breathe Matters is a revolutionary tool that merges science, psychology, and technology to revolutionize your breathing habits and transform your life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spectral.className} ${nuito.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
