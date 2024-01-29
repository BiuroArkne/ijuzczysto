import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/header/HeaderComponent";
import MenuComponent from "@/components/menu/MenuComponent";

const plus_jakarta_sans_font = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i już czysto",
  description: "i już czysto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="antialiased overflow-x-hidden" lang="en">
      <body className={`${plus_jakarta_sans_font.className} overflow-x-hidden`}>
        <HeaderComponent />
        <hr className="border-[#F7F8F8]" />
        <MenuComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}