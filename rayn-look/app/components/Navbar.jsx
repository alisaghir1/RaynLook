"use client";
import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { zoomIn } from "@/variants";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  // Toggle menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle active link change
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <motion.nav
      variants={zoomIn("up", 0.8)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true, amount: 0.4 }}
      className="py-4"
    >
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="/" className="flex items-center">
          <Image
            width={200}
            height={200}
            src="/logo.svg"
            className="mr-3 h-14 w-44"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center lg:order-2 ">
          <Link
            href="/cart"
            className="flex  justify-center items-center gap-1 text-white border border-customGold hover:bg-customGold  font-lg rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0  transition-all duration-300 ease-in-out"
          >
            <RiShoppingCart2Line /> Cart
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-customGold rounded-lg lg:hidden hover:text-white transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
            aria-controls="mobile-menu-2"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <CiMenuFries
              className={`w-6 h-6 ${
                isMenuOpen ? "hidden" : ""
              } transition-all duration-300 ease-in-out`}
            />
            <IoMdClose
              className={`w-6 h-6 outline-none ${
                !isMenuOpen ? "hidden" : ""
              } transition-all duration-300 ease-in-out`}
            />
          </button>
        </div>
        <div
          className={`items-center transition-all duration-300 ease-in-out justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isMenuOpen ? "block bg-gray text-white" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-lg lg:flex-row lg:space-x-8 lg:mt-0">
            {[
              { name: "Home", path: "/" },
              { name: "Products", path: "/products" },
              { name: "About us", path: "/about" },
              { name: "FAQ", path: "/faq" },
              { name: "Contact us", path: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.path}
                  onClick={() => [
                    handleLinkClick(link.name),
                    setIsMenuOpen(false),
                  ]}
                  className={`block py-2 pl-3 pr-4 ${
                    activeLink === link.name
                      ? "bg-customGold text-white lg:bg-transparent lg:text-customGold"
                      : "text-white hover:text-customGold"
                  } lg:p-0 lg:transition-colors lg:duration-300 lg:ease-in-out`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
