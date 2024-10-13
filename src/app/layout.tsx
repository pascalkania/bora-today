import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bora Today",
  description: "The weather app for the Bora area, mainly in Croatia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
