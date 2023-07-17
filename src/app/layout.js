"use client"
import "./globals.css";
import { Html, Head, Main, NextScript } from "next/head";
import { Inter } from "next/font/google";
import Aos from "aos";
import Script from "next/script";
import Navbar from "@/layout/Navbar/Navbar";
import { ProviderUkm } from "@/api/ukm";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RAJA Brawijaya 2023 ",
  keywords:
    "raja brawijaya, rajabrawijaya, ospek ub, ospek ub 2023, raja brawijaya 2023, rabraw 2023",
  author: "PIT RAJA Brawijaya",
  description:
    "RAJA Brawijaya adalah singkatan dari Rangkaian Acara Jelajah Almamater Universitas Brawijaya, merupakan serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal terkait dengan kehidupan kampus, termasuk di dalamnya Pengenalan Kehidupan Kampus Mahasiswa Baru (PK2MB), Open House Lembaga Kedaulatan Mahasiswa dalam (OH).",
  openGraph: {
    title: "RAJA Brawijaya 2023",
    image: "https://rajabrawijaya.ub.ac.id/assets/favicon.ico",
    url: "https://rajabrawijaya.ub.ac.id",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderUkm>
        <Navbar></Navbar>
        {children}

        <Script
          strategy="lazyOnload"
          src="https://embed.tawk.to/62e72b6254f06e12d88c3a77/1g9bg2v97"
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-SR9L2P69VH');`,
          }}
        ></Script>
        </ProviderUkm>
      </body>
    </html>
  );
}
