"use client";
import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { zoomIn } from "@/variants";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About us", path: "/about" },
  { name: "FAQ", path: "/faq" },
  { name: "Contact us", path: "/contact" },
];

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0, overflow: "hidden" },
  visible: {
    height: "auto",
    opacity: 1,
    overflow: "hidden",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    overflow: "hidden",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // close menu after click
  };

  return (
    <motion.nav
      variants={zoomIn("up", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.4 }}
      className="border-b border-b-customGold"
    >
      <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto ">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            width={500}
            height={500}
            src="/logo1.png"
            className="mr-3 xl:h-52 h-40 xl:w-52 w-40"
            alt="Logo"
          />
        </Link>

        {/* Cart + Toggle */}
        <div className="flex items-center lg:order-2">
          <Link
            href="/cart"
            className="relative flex justify-center items-center gap-1 text-white border border-customGold hover:bg-customGold font-lg rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 transition-all duration-300 ease-in-out"
          >
            <RiShoppingCart2Line />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-0.5 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-customGold rounded-lg lg:hidden hover:text-white transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <IoMdClose className="w-6 h-6" /> : <CiMenuFries className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex lg:space-x-8 lg:order-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => handleLinkClick(link.name)}
              className={`text-sm font-lg py-2 transition-colors duration-300 ${
                activeLink === link.name
                  ? "text-customGold"
                  : "text-white hover:text-customGold"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobileMenu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="lg:hidden  text-white px-4"
          >
            <ul className="flex flex-col space-y-2 py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    onClick={() => handleLinkClick(link.name)}
                    className={`block text-sm font-lg py-2 pl-3 pr-4 transition-colors duration-300 ${
                      activeLink === link.name
                        ? "text-customGold"
                        : "hover:text-customGold"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
