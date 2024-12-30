import React from 'react'
import Contact from './Contact'

export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "Contact Us - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "Have questions about Rayn Look's premium contact lenses? Whether you're looking for prescription or fashion lenses, our Contact Us page is here to help. Reach out to our team for inquiries about product details, lens care, comfort, and safety. At Rayn Look, we’re committed to providing high-quality lenses designed for comfort and clarity. Let us assist you with all the information you need before purchasing your perfect pair of lenses. Explore our premium contact lenses, crafted for both style and vision clarity, and connect with us today!",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

const page = () => {
  return (
   <Contact />
  )
}

export default page