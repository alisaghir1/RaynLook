import React from 'react'
import AboutUs from './AboutUs'

export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "About - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "At Rayn Look, we are committed to delivering premium contact lenses that combine style, comfort, and exceptional vision. Our mission is to offer high-quality lenses for every individual, whether you need prescription lenses for perfect clarity or fashion-forward options to enhance your look. Based in Lebanon, we pride ourselves on providing the best eye care and vision solutions, ensuring our customers experience the ultimate in eye comfort and design. Learn more about our journey, values, and dedication to bringing you the finest lenses available.",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

const page = () => {
  return (
    <AboutUs />
  )
}

export default page