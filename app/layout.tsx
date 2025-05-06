import type { Metadata } from "next";
import { Mystery_Quest } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const mysteryQuest = Mystery_Quest({
  variable: "--font-mystery-quest",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coffee shop",
  description: "Coffee shop project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mysteryQuest.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
