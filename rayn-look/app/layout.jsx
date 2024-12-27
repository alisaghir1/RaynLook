import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "Rayn Look - Premium Contact Lenses",
  description:
    "Experience unparalleled comfort and style with Rayn Look's premium contact lenses. Designed for natural beauty and exceptional vision, discover Lebanon's finest lenses today.",
  keywords: "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
  openGraph: {
    title: "Rayn Look - Premium Contact Lenses",
    description:
      "Transform your vision with Rayn Look. Offering premium contact lenses that enhance your style while ensuring unmatched comfort.",
    url: "https://rayn-look.com",
    type: "website",
    image: "https://raynlook.com/og-image.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
