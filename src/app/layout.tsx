import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import TopbarInfo from "@/modules/home/TopbarInfo";
import Navbar from "@/components/shared/Navbar/Navabr";
import { Toaster } from "sonner";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mars Codex your IT partner",
  description:
    "We create digital product. Provide massive IT solutions. Our service is website and mobile app development, UI/UX design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlow.className} antialiased`}>
        <header>
          <TopbarInfo></TopbarInfo>
        </header>
        <div>
          <nav className="sticky left-0 top-0 z-30 w-full">
            <Navbar></Navbar>
          </nav>
          {children}
        </div>
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
