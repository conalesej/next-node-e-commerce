import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { NavBar } from "./components";

const inter = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "CarSafari",
  description: "A Marketplace for new Cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
