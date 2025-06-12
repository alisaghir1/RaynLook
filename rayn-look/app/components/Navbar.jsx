"use client";
import React, { useState, useEffect } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "FAQ", path: "/faq" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Ultra Modern Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled 
            ? "bg-gradient-to-r py-3 from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl shadow-2xl border-b border-customGold/20" 
            : "bg-gradient-to-r py-3 from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl shadow-2xl border-b border-customGold/2"
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center"
            >
              <Link href="/" className="flex items-center space-x-4 group">
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.1, rotateY: 180 }}
                    transition={{ duration: 0.6, type: "spring" }}
                    className="relative w-16 h-16 rounded-full overflow-hidden border border-customGold/40 shadow-xl bg-gradient-to-br from-customGold/20 to-transparent"
                  >
                    <Image
                      src="/logo1.png"
                      alt="RaynLook"
                      fill
                      className="object-cover"
                      priority
                    />
                  </motion.div>
                  
                  {/* Orbit Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 w-16 h-16 border border-customGold/20 rounded-full"
                  />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 w-16 h-16 bg-customGold rounded-full"
                  />
                </div>
                
                <div className="hidden sm:block">
                  <motion.h1 
                    className={`text-2xl font-black transition-all duration-500 ${
                      scrolled 
                        ? "bg-gradient-to-r from-customGold via-yellow-400 to-customGold bg-clip-text text-transparent"
                        : "text-white"
                    }`}
                  >
                    Rayn Look
                  </motion.h1>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-white/5 backdrop-blur-sm rounded-full p-2 border border-white/10">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.path;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <Link
                        href={link.path}
                        className="relative group"
                      >
                        <motion.div
                          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                            isActive
                              ? "bg-gradient-to-r from-customGold to-yellow-400 text-black shadow-lg"
                              : "text-white hover:bg-white/10"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {link.name}
                        </motion.div>
                        
                        {/* Underline Effect */}
                        {!isActive && (
                          <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-customGold rounded-full group-hover:w-full group-hover:left-0 transition-all duration-300"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              
              {/* Cart Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/cart"
                  className="relative group"
                >
                  <div className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    scrolled
                      ? "bg-gradient-to-r from-customGold to-yellow-400 text-black shadow-lg"
                      : "bg-white/10 backdrop-blur-sm text-white border border-white/20"
                  }`}>
                    <RiShoppingCart2Line className="w-5 h-5" />
                    <span className="hidden sm:inline font-semibold">Cart</span>
                  </div>
                  
                  {totalItems > 0 && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
                    >
                      {totalItems > 9 ? "9+" : totalItems}
                    </motion.div>
                  )}
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={toggleMenu}
                className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                  scrolled
                    ? "bg-white/10 backdrop-blur-sm border border-customGold/30"
                    : "bg-white/10 backdrop-blur-sm border border-white/20"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiX className="w-6 h-6 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiMenu className="w-6 h-6 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Slide Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed top-20 right-0 h-screen w-80 bg-gradient-to-b from-black via-gray-900 to-black backdrop-blur-xl border-l border-customGold/20"
            >
              <div className="p-8">
                {/* Mobile Navigation */}
                <div className="space-y-4">
                  {navLinks.map((link, index) => {
                    const isActive = pathname === link.path;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 + 0.2 }}
                      >
                        <Link
                          href={link.path}
                          onClick={() => setIsMenuOpen(false)}
                          className="block"
                        >
                          <motion.div
                            className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                              isActive
                                ? "bg-gradient-to-r from-customGold to-yellow-400 text-black"
                                : "text-white hover:bg-white/10"
                            }`}
                            whileHover={{ x: 5 }}
                          >
                            <div className={`w-2 h-2 rounded-full ${
                              isActive ? "bg-black" : "bg-customGold"
                            }`} />
                            <span className="text-lg font-medium">{link.name}</span>
                          </motion.div>
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile Footer */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-8 border-t border-white/10"
                >
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-2 text-customGold mb-4">
                      <BsEyeFill className="w-5 h-5" />
                      <span className="font-medium">Transform Your Vision</span>
                    </div>
                    
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="h-px bg-gradient-to-r from-transparent via-customGold to-transparent"
                    />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[-1]"
              onClick={() => setIsMenuOpen(false)}
            />
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;