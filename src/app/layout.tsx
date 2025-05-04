import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Spotify Stats",
  description: "Spotify Stats",
};

const inter = Inter({
  style: "normal",
  subsets: ["latin-ext"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          {Header()}
          <div className="flex-1 flex flex-col pb-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
