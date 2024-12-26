"use client";
import React, { useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

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
    <nav className="py-4">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        <Link href="#" className="flex items-center">
          <Image
          width={200}
          height={120}
            src="/logo.png"
            className="mr-3 h-20 w-52"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center lg:order-2">
          <Link
            href="#"
            className="flex justify-center items-center gap-1 text-white border border-[#B5A300] hover:bg-[#B5A300] focus:ring-4 focus:ring-[#B5A300] font-lg rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 focus:outline-none transition-all duration-300 ease-in-out"
          >
            <RiShoppingCart2Line /> Cart
          </Link>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-[#B5A300] rounded-lg lg:hidden hover:text-white transition-all duration-300 ease-in-out"
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
            {["Home", "Products", "About us", "FAQ", "Contact us"].map(
              (link) => (
                <li key={link}>
                  <Link
                    href="#"
                    onClick={() => [
                      handleLinkClick(link),
                      setIsMenuOpen(false),
                    ]}
                    className={`block py-2 pl-3 pr-4 ${
                      activeLink === link
                        ? "bg-[#B5A300] text-[white] lg:bg-transparent lg:text-[#B5A300]"
                        : "text-white hover:text-[#B5A300]"
                    } lg:p-0 lg:transition-colors lg:duration-300 lg:ease-in-out`}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
