import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Daily Games",
  description: "Vários jogos para se divertir",
  keywords: ['games', 'steam', 'jogos', 'xbox'],
  openGraph:{
    images: [`${process.env.PROJECT_URL}/preview.png`]
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
