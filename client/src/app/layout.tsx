import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <div className=" bg-neutral-50 w-[80%] h-[90%] z-50 rounded-2xl shadow-2xl p-4 flex ">
          <Navbar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}