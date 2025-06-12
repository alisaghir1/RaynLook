"use client";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane
} from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Story", href: "/about" },
      { name: "Contact", href: "/contact" },
      { name: "FAQ", href: "/faq" }
    ],
    products: [
      { name: "All Products", href: "/products" },
      { name: "Daily Lenses", href: "/products" },
      { name: "Monthly Lenses", href: "/products" },
      { name: "Colored Lenses", href: "/products" }
    ],
    support: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacyPolicy" },
      { name: "Shopping Cart", href: "/cart" }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(203,178,106,0.3) 0%, transparent 50%)`
        }}></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 75% 75%, rgba(203,178,106,0.3) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg p-2">
                  <Image
                    src="/logo1.png"
                    alt="Rayn Look Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full blur-md opacity-50"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-customGold to-yellow-400 bg-clip-text text-transparent">
                  RAYN
                </span>
                <span className="text-sm font-medium text-customGold tracking-wider -mt-1">
                  LOOK
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-300 leading-relaxed"
            >
              Experience the world with clarity and style. Rayn Look offers premium contact lenses 
              that combine comfort, quality, and elegance for every lifestyle.
            </motion.p>

            {/* Social Media */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center space-x-4"
            >
              <span className="text-customGold font-medium">Follow Us:</span>
              <div className="flex space-x-3">
                {[
                  { icon: FaFacebookF, href: "https://facebook.com", color: "hover:text-blue-400" },
                  { icon: FaTwitter, href: "https://twitter.com", color: "hover:text-blue-400" },
                  { icon: FaInstagram, href: "https://instagram.com", color: "hover:text-pink-400" },
                  { icon: FaLinkedinIn, href: "https://linkedin.com", color: "hover:text-blue-600" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white transition-all duration-300 ${social.color} hover:bg-white/20`}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="space-y-4"
              >
                <h3 className="text-lg font-semibold text-customGold capitalize">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-customGold transition-colors duration-300 hover:translate-x-1 transform inline-block"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-lg font-semibold text-customGold mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-300 text-sm">
                  Get the latest news and exclusive offers delivered to your inbox.
                </p>
              </div>

              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:bg-white/20 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-customGold to-yellow-500 text-black py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300"
                >
                  <FaPaperPlane className="w-4 h-4" />
                  <span>Subscribe</span>
                </motion.button>
              </form>

              {isSubscribed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-green-400 text-sm text-center font-medium"
                >
                  ✓ Successfully subscribed!
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-white/10"
        >
          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-10 h-10 bg-customGold/20 rounded-full flex items-center justify-center">
              <FaPhone className="w-4 h-4 text-customGold" />
            </div>
            <div>
              <p className="text-sm text-customGold">Phone</p>
              <a href="tel:+96178855963" className="hover:text-customGold transition-colors">
                +961 78855963
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-10 h-10 bg-customGold/20 rounded-full flex items-center justify-center">
              <FaEnvelope className="w-4 h-4 text-customGold" />
            </div>
            <div>
              <p className="text-sm text-customGold">Email</p>
              <a href="mailto:Raynlook@gmail.com" className="hover:text-customGold transition-colors">
                Raynlook@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-gray-300">
            <div className="w-10 h-10 bg-customGold/20 rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="w-4 h-4 text-customGold" />
            </div>
            <div>
              <p className="text-sm text-customGold">Location</p>
              <a 
                href="https://maps.google.com/?q=Ain+El+Remmaneh+Beirut" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-customGold transition-colors"
              >
                Ain El Remmaneh, Beirut
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Rayn Look. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <Link 
              href="/privacyPolicy" 
              className="text-gray-400 hover:text-customGold text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-400 hover:text-customGold text-sm transition-colors"
            >
              FAQ
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-400 hover:text-customGold text-sm transition-colors"
            >
              Contact
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;