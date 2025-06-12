"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, zoomIn, fadeIn } from "@/variants";
import { MdOutlineSupportAgent, MdVerified, MdLocalShipping } from "react-icons/md";
import { FaShippingFast, FaAward, FaUsers, FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";
import { BsEyeFill, BsShieldCheck } from "react-icons/bs";
import { HiTrendingUp } from "react-icons/hi";

const ThirdSection = () => {
  // Features data
  const features = [
    {
      icon: <FaShippingFast className="w-8 h-8" />,
      title: "Worldwide Shipping",
      description: "We deliver to your doorstep, no matter where you are!",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <MdOutlineSupportAgent className="w-8 h-8" />,
      title: "24/7 Customer Support",
      description: "Our team is always here to assist you anytime, anywhere.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <BsShieldCheck className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Experience the finest craftsmanship backed by the highest standards.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaAward className="w-8 h-8" />,
      title: "Top-Rated Brand",
      description: "Proud to be rated #1 for quality and service worldwide!",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Statistics data
  const statistics = [
    {
      number: "600K+",
      label: "Social Media Followers",
      icon: <FaUsers className="w-8 h-8" />,
      color: "from-pink-500 to-red-500"
    },
    {
      number: "12K+",
      label: "5-Star Reviews",
      icon: <FaStar className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      extra: "★★★★★"
    },
    {
      number: "30K+",
      label: "Happy Customers",
      icon: <FaHeart className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      number: "32+",
      label: "Countries Worldwide",
      icon: <HiTrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500"
    }
  ];

  return (
    <div className="overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-r from-gray-900 to-black relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex justify-center items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
                <BsEyeFill className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-customGold">RaynLook</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience unmatched quality, service, and satisfaction with every purchase
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customGold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Our <span className="text-customGold">Success</span> Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                variants={slideIn(index % 2 === 0 ? "left" : "right", 0.6 + index * 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
                className="group"
              >
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 text-center h-full">
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  
                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-customGold to-yellow-500 bg-clip-text text-transparent">
                      {stat.number}
                    </span>
                    {stat.extra && (
                      <div className="text-2xl text-customGold mt-2">{stat.extra}</div>
                    )}
                  </div>
                  
                  {/* Label */}
                  <p className="text-xl font-semibold text-gray-700 group-hover:text-customGold transition-colors">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-3xl p-8 border border-customGold/20">
              <div className="flex items-center justify-center mb-4">
                <MdVerified className="w-8 h-8 text-customGold mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold text-black">
                  Trusted by Thousands Worldwide
                </h3>
              </div>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join our growing community of satisfied customers who trust RaynLook for their vision and style needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                  <BsShieldCheck className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">FDA Approved</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                  <FaAward className="w-5 h-5 text-customGold mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Award Winning</span>
                </div>
                <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md">
                  <MdLocalShipping className="w-5 h-5 text-blue-500 mr-2" />
                  <span className="text-sm font-semibold text-gray-700">Free Shipping</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;