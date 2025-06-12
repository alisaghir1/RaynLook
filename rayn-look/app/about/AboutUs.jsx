"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "@/variants";
import Link from "next/link";
import Image from "next/image";
import { 
  FaEye, 
  FaHeart, 
  FaGlobe, 
  FaAward, 
  FaStar,
  FaUsers,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";

const AboutUs = () => {
  // Company values
  const values = [
    {
      icon: <FaEye className="w-8 h-8" />,
      title: "Vision First",
      description: "We prioritize your vision health and comfort above everything else.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Customer Love",
      description: "Every customer is family. We care about your experience and satisfaction.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <FaShieldAlt className="w-8 h-8" />,
      title: "Quality Promise",
      description: "Premium materials and rigorous testing ensure the highest quality.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Innovation",
      description: "Constantly pushing boundaries to bring you the latest in lens technology.",
      color: "from-purple-500 to-violet-500"
    }
  ];

  // Achievement stats
  const achievements = [
    { number: "2014", label: "Founded", icon: <FaRocket className="w-6 h-6" /> },
    { number: "500K+", label: "Happy Customers", icon: <FaUsers className="w-6 h-6" /> },
    { number: "32+", label: "Countries", icon: <FaGlobe className="w-6 h-6" /> },
    { number: "98%", label: "Satisfaction Rate", icon: <FaStar className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      
      {/* Hero Section */}
      <section className="py-20 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
                <BsEyeFill className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-customGold">RaynLook</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transforming vision and style since 2014, one lens at a time
            </p>
          </motion.div>

          {/* Main Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Left Section - Story */}
            <div className="space-y-8">
              <motion.div
                variants={slideIn("left", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Meet The <span className="text-customGold">Founder</span>
                </h2>
                <h3 className="text-2xl md:text-3xl font-semibold text-customGold mb-8">
                  Rayan Saghir
                </h3>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="space-y-6"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded in <span className="text-customGold font-semibold">2014</span> by Rayan Saghir, our story began in the heart of our home. With passion, dedication, and an unwavering belief in quality, we turned a small dream into a thriving business.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  Today, we're proud to be recognized <span className="text-customGold font-semibold">worldwide</span> for offering a variety of the most natural and stunning contact lens colors that blend seamlessly with your natural beauty.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Our products are designed to enhance your look while providing <span className="text-customGold font-semibold">unmatched comfort</span>. Whether you're seeking subtle elegance or a bold transformation, we have the perfect choice for you.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-2xl p-6 border border-customGold/20"
              >
                <p className="text-lg text-gray-300">
                  <span className="relative inline-block">
                    <span className="absolute inline-block w-full bottom-0.5 h-2 bg-customGold/30 rounded"></span>
                    <span className="relative text-customGold font-semibold">Got a question?</span>
                  </span>
                  <br className="block sm:hidden" />
                  Feel free to{" "}
                  <Link
                    href="/contact"
                    className="text-customGold hover:text-white transition-all duration-300 font-semibold hover:underline"
                  >
                    Contact Us
                  </Link>{" "}
                  or explore more about us!
                </p>
              </motion.div>
            </div>

            {/* Right Section - Image */}
            <motion.div
              variants={zoomIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative"
            >
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-customGold/20 to-yellow-500/20 rounded-3xl transform rotate-6"></div>
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                  <Image
                    className="w-full h-auto rounded-2xl"
                    src="/rayan.jpeg"
                    alt="Founder Rayan Saghir"
                    width={600}
                    height={700}
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-customGold to-yellow-500 rounded-full p-4 shadow-lg">
                  <MdVerified className="w-8 h-8 text-black" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-customGold">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={slideIn(index % 2 === 0 ? "left" : "right", 0.6 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-customGold transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-customGold">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that mark our commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.6 + index * 0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-customGold/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-customGold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-black group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-customGold to-yellow-500 bg-clip-text text-transparent mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-300 font-semibold group-hover:text-customGold transition-colors">
                    {achievement.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-customGold/10 to-yellow-500/10 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your <span className="text-customGold">Vision</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust RaynLook for their vision and style needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(203,178,106,0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-customGold/50 transition-all duration-300"
                >
                  Shop Now
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-customGold text-customGold px-8 py-4 rounded-full font-bold text-lg hover:bg-customGold hover:text-black transition-all duration-300"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;