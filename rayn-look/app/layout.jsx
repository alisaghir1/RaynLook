import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { CartProvider } from '../context/CartContext.jsx'

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
  title: "Home - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "Experience unparalleled comfort and style with Rayn Look's premium contact lenses. Designed for natural beauty and exceptional vision, discover Lebanon's finest lenses today.",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  robots: "index, follow",
  charset: "UTF-8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <CartProvider>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
      </CartProvider>
    </html>
  );
}
