import React from 'react'
import Products from './Products'

export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "Products - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "Discover the perfect blend of style, comfort, and vision with Rayn Look's premium contact lenses. Whether you're looking for lenses with prescription power or fashion lenses to enhance your look, our high-quality products are designed to provide a flawless fit and crystal-clear vision. Explore our wide range of lenses, available in Lebanon, and experience the best in eye care and design.",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

const page = () => {
  return (
    <Products />
  )
}

export default page