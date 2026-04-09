import type { Metadata } from "next";
import { Fira_Code } from 'next/font/google';
import "./globals.css";
import { Footer, Navbar } from "@/Components";
import AOSInnit from "@/Components/AOSInnit";

const firacode = Fira_Code({
  variable: '--font-fira-code',
  subsets: ["latin"],
   display: 'swap',
});


export const metadata: Metadata = {
  title: "Ore.Omoyeni",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firacode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AOSInnit/>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
