"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserCheck, FaFileContract, FaEdit, FaEnvelope } from 'react-icons/fa';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const PrivacyPolicy = () => {
  const sections = [
    {
      id: 1,
      icon: FaUserCheck,
      title: "Personal Information",
      content: "At Rayn Look, we collect personal information only when necessary for processing your orders and inquiries. This includes your name, contact details, and payment information. We ensure that all collected data is used solely for enhancing your shopping experience and fulfilling your orders efficiently."
    },
    {
      id: 2,
      icon: FaFileContract,
      title: "No Returns Policy",
      content: "As our products are considered medical in nature, we are unable to accept returns. Once your purchase is made, it cannot be returned due to health and hygiene regulations. This policy ensures the safety and hygiene standards required for contact lens products."
    },
    {
      id: 3,
      icon: FaLock,
      title: "Data Security",
      content: "We are committed to protecting your personal information. Your data is securely stored using industry-standard encryption protocols to safeguard your privacy. We implement multiple layers of security and regularly update our systems to protect against unauthorized access."
    },
    {
      id: 4,
      icon: FaShieldAlt,
      title: "Sharing Your Information",
      content: "We may share your personal information with trusted third-party service providers solely for the purpose of fulfilling your orders. These services include payment processing and shipping. All third-party services we use are committed to keeping your data confidential and secure."
    },
    {
      id: 5,
      icon: FaEdit,
      title: "Changes to This Policy",
      content: "Rayn Look reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page, and we encourage you to review this policy periodically for any updates. We will notify users of significant changes via email when possible."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative pt-32 pb-16 px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-customGold to-yellow-500 rounded-full mb-8 shadow-2xl shadow-customGold/50"
          >
            <FaShieldAlt className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-customGold via-yellow-400 to-customGold bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed"
          >
            Your privacy is of utmost importance to us. Please read this policy carefully to understand how we handle your personal information.
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-customGold to-transparent mx-auto mt-8"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-6 lg:px-8 pb-20"
      >
        <div className="grid gap-8 lg:gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              variants={fadeInUp}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-customGold/20 rounded-2xl p-8 lg:p-10 hover:border-customGold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-customGold/10">
                
                {/* Section Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-customGold to-yellow-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-customGold group-hover:text-yellow-400 transition-colors duration-300">
                      {section.id}. {section.title}
                    </h2>
                  </div>
                </div>

                {/* Section Content */}
                <div className="pl-18">
                  <p className="text-lg text-white/90 leading-relaxed">
                    {section.content}
                  </p>
                </div>

                {/* Decorative bottom border */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="h-px bg-gradient-to-r from-transparent via-customGold/30 to-transparent mt-8"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 backdrop-blur-sm border border-customGold/30 rounded-2xl p-8 lg:p-10 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full mb-6 shadow-xl shadow-customGold/50"
            >
              <FaEnvelope className="w-8 h-8 text-white" />
            </motion.div>

            <h3 className="text-2xl lg:text-3xl font-bold text-customGold mb-4">
              Questions About Your Privacy?
            </h3>
            
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              If you have any questions regarding our privacy practices or if you would like to exercise any of your rights regarding your personal data, please don't hesitate to contact us.
            </p>
            
            <motion.a
              href="mailto:raynlook@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-customGold/50 transition-all duration-300"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>raynlook@gmail.com</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-customGold/60 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;