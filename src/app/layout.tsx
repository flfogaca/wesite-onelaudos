import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Plataforma PACS/RIS/HIS - Documentação Técnica",
  description: "Documentação técnica completa da plataforma integrada de radiologia com PACS, RIS e Mini HIS. Referência para equipe de desenvolvimento.",
  keywords: ["PACS", "RIS", "HIS", "Radiologia", "DICOM", "Telerradiologia", "IA em Saúde"],
  authors: [{ name: "Themis Health" }],
  openGraph: {
    title: "Plataforma PACS/RIS/HIS",
    description: "Documentação técnica completa da plataforma integrada de radiologia",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-text`}
      >
        {children}
      </body>
    </html>
  );
}
