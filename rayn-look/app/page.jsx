"use client";
import Image from "next/image";
import FeauturedItems from "./FeaturedItems";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import Footer from "./components/Footer.jsx";
import Link from "next/link";
import { slideIn } from "@/variants";
import { motion } from "framer-motion";
import { FaShoppingBag, FaPlay, FaEye } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [particles, setParticles] = useState([]);

  // Generate particles on client side only
  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 2,
          duration: 4 + Math.random() * 2,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <>
      <div className="h-screen relative overflow-hidden">
        {/* Hero Background with better image */}
        <div className="absolute inset-0">
          {/* High-quality eye/contact lens background */}
          <Image
            className="absolute z-[-10] w-full h-full object-cover"
            src="/Hero.jpg"
            alt="Beautiful eye with contact lens"
            fill
            priority
            quality={95}
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50"></div>
          
          {/* Animated particles - only render on client */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 bg-customGold rounded-full opacity-30"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                }}
              />
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            {/* Animated Logo/Icon */}
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="relative mx-auto w-24 h-24">
                <div className="absolute inset-0 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-2xl shadow-customGold/50">
                  <FaEye className="w-12 h-12 text-white" />
                </div>
                <div className="absolute inset-0 bg-customGold/30 rounded-full blur-xl animate-pulse"></div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={slideIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-6xl md:text-8xl font-bold mb-6 text-white leading-tight"
            >
              <span className="bg-gradient-to-r from-white via-customGold to-white bg-clip-text text-transparent">
                Natural Beauty,
              </span>
              <br />
              <span className="text-customGold">Perfect Vision</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={slideIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto leading-relaxed"
            >
              Transform Your Look with Lebanon&apos;s Finest Natural Contact Lenses
            </motion.p>

            {/* Additional description */}
            <motion.p
              variants={slideIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-lg text-customGold/80 mb-12 max-w-2xl mx-auto"
            >
              Experience unmatched comfort, crystal-clear vision, and stunning style trusted by thousands worldwide
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={slideIn("up", 1.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Link href="/products">
                <motion.button
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 20px 40px rgba(203,178,106,0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-2xl flex items-center space-x-3 hover:shadow-customGold/60 transition-all duration-300"
                >
                  <FaShoppingBag className="w-5 h-5" />
                  <span>Shop Now</span>
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator - Perfect Center */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-customGold"
          >
            <div className="flex flex-col items-center space-y-2">
              <span className="text-sm uppercase tracking-wider font-medium">Scroll to Explore</span>
              <div className="w-6 h-10 border-2 border-customGold/50 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1 h-3 bg-customGold rounded-full mt-2"
                ></motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <FeauturedItems />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </>
  );
}