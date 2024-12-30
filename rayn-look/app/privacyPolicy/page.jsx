import React from 'react'


export const metadata = {
  icons: {
    icon: "/logo.svg", // Standard favicon
    apple: "/logo.svg", // Apple touch icon
    maskIcon: { href: "/logo.svg", color: "#CBB26A" }, // Safari pinned tab
  },
  title: "Privacy Policy - Rayn Look | Premium Contact Lenses | Top Rated In Lebanon",
  description:
    "Rayn Look values your privacy. Our Privacy Policy explains how we collect, store, and protect your personal information when you visit our site or make a purchase. Learn about our no-returns policy for medical products, how we use cookies, and the steps we take to ensure the confidentiality and security of your data. We are committed to providing you with high-quality lenses and the best shopping experience, while safeguarding your privacy at all times.",
  keywords:
    "contact lenses, natural lenses, premium lenses, Rayn Look, Lebanon, eye comfort, fashion lenses, lenses in lebanon, lebanese lenses, lenses, best lenses in lebanon, products, eyes, with power, without power, degrees, without degrees, prescription lenses, prescription contacts, diopters",
  author: "Rayn Look",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  charset: "UTF-8",
};

const PrivacyPolicy = () => {
  return (
    <div className="px-6 mb-20 mt-20 lg:px-8">
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-customGold">Privacy Policy</h1>
    <p className="mt-3 text-lg text-white">Your privacy is of utmost importance to us. Please read this policy carefully to understand how we handle your personal information.</p>
    
    <div className="mt-10 text-white">
      <h2 className="text-2xl font-semibold text-customGold">1. Personal Information</h2>
      <p className="mt-2">
        At Rayn Look, we collect personal information only when necessary for processing your orders and inquiries. This includes your name, contact details, and payment information. 
      </p>
      
      <h2 className="text-2xl font-semibold text-customGold mt-6">2. No Returns Policy</h2>
      <p className="mt-2">
        As our products are considered medical in nature, we are unable to accept returns. Once your purchase is made, it cannot be returned due to health and hygiene regulations.
      </p>
      
      <h2 className="text-2xl font-semibold text-customGold mt-6">3. Data Security</h2>
      <p className="mt-2">
        We are committed to protecting your personal information. Your data is securely stored and we use encryption protocols to safeguard your privacy. We do not sell or share your personal information with third parties unless required by law.
      </p>
      
      <h2 className="text-2xl font-semibold text-customGold mt-6">4. Sharing Your Information</h2>
      <p className="mt-2">
        We may share your personal information with trusted third-party service providers solely for the purpose of fulfilling your orders. These services include payment processing and shipping. All third-party services we use are committed to keeping your data confidential.
      </p>
      
      <h2 className="text-2xl font-semibold text-customGold mt-6">5. Changes to This Policy</h2>
      <p className="mt-2">
        Rayn Look reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review this policy periodically for any updates.
      </p>
    </div>

    <div className="mt-10">
      <p className="text-lg text-white">
        If you have any questions regarding our privacy practices or if you would like to exercise any of your rights regarding your personal data, please contact us at <strong>raynlook@gmail.com</strong>.
      </p>
    </div>
  </div>
  )
}

export default PrivacyPolicy