import React from 'react'
import FAQ from './FAQ'

export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "FAQ - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "Get answers to your most frequently asked questions about Rayn Look's premium contact lenses. Learn about the lifespan, certification, comfort, care, and safety of our lenses. Whether you're looking for prescription lenses or fashion lenses, our FAQ page provides valuable insights into our high-quality products, designed for comfort and clarity. Explore all you need to know before purchasing your perfect pair of lenses.",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

const page = () => {
  return (
    <FAQ />
  )
}

export default page