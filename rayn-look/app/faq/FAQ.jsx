"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaEye, FaShieldAlt, FaCertificate, FaClock, FaUserMd, FaBed, FaHeart, FaTools } from "react-icons/fa";
import Link from "next/link";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      id: 1,
      icon: FaClock,
      question: "What is the lifespan of your contact lenses?",
      answer: "Our premium contact lenses are designed to last for up to one year with proper care and maintenance. They offer long-lasting comfort and clarity throughout their lifespan. For optimal performance, follow our care instructions and replace them when recommended."
    },
    {
      id: 2,
      icon: FaCertificate,
      question: "Are your contact lenses certified?",
      answer: "Yes, our contact lenses are certified to meet the highest international standards for safety and quality. We hold certifications from leading regulatory bodies and prioritize your eye health above all. Each batch undergoes rigorous testing before reaching you."
    },
    {
      id: 3,
      icon: FaHeart,
      question: "How comfortable are your contact lenses?",
      answer: "Our contact lenses are engineered for maximum comfort, offering a natural feel throughout the day. They feature advanced breathable materials that allow optimal oxygen flow to your eyes, preventing dryness and irritation even during extended wear."
    },
    {
      id: 4,
      icon: FaEye,
      question: "Do your lenses look natural on the eye?",
      answer: "Absolutely! Our lenses are designed to enhance the natural beauty of your eyes with a flawless, seamless look. They blend perfectly with your iris using advanced color-matching technology, creating an undetectable, naturally beautiful appearance."
    },
    {
      id: 5,
      icon: FaTools,
      question: "How do I care for my contact lenses?",
      answer: "Proper care is essential for maintaining lens clarity and comfort. Always use fresh contact solution, never water. Clean and store your lenses in their case after each use. Replace the solution daily and avoid wearing lenses for more than 8-10 hours continuously."
    },
    {
      id: 6,
      icon: FaUserMd,
      question: "Can I wear these lenses if I have a prescription?",
      answer: "Yes, our lenses are available with prescription options for various vision needs. We offer corrective lenses for nearsightedness, farsightedness, and astigmatism. Consult with your eye care professional to determine the right prescription strength for you."
    },
    {
      id: 7,
      icon: FaShieldAlt,
      question: "Are your lenses safe for long-term wear?",
      answer: "Our lenses are designed for safe, long-term wear when used as directed. They're made from biocompatible materials that are gentle on your eyes. Follow proper hygiene practices and care instructions to ensure safe, comfortable long-term use."
    },
    {
      id: 8,
      icon: FaBed,
      question: "Can I sleep while wearing these lenses?",
      answer: "It's not recommended to sleep in contact lenses unless they're specifically designed for overnight wear. Our standard lenses should be removed before sleeping to allow your eyes to rest and breathe naturally. Always consult your eye care professional for personalized advice."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-customGold to-yellow-500 rounded-full mb-8 shadow-2xl shadow-customGold/50"
          >
            <FaEye className="w-10 h-10 text-white" />
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-customGold via-yellow-400 to-customGold bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Everything you need to know about our premium contact lenses
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-transparent via-customGold to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-4"
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="group"
            >
              <div className="bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-customGold/20 rounded-2xl overflow-hidden hover:border-customGold/40 transition-all duration-300 hover:shadow-2xl hover:shadow-customGold/10">
                
                {/* Question Button */}
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 lg:p-8 text-left flex items-center justify-between hover:bg-customGold/5 transition-all duration-300"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center space-x-4 flex-1">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-gradient-to-br from-customGold to-yellow-500 text-white shadow-lg' 
                        : 'bg-customGold/20 text-customGold group-hover:bg-customGold/30'
                    }`}>
                      <faq.icon className="w-6 h-6" />
                    </div>

                    {/* Question */}
                    <h3 className={`text-lg lg:text-xl font-semibold transition-colors duration-300 ${
                      openIndex === index ? 'text-customGold' : 'text-white group-hover:text-customGold'
                    }`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-customGold text-black' 
                        : 'bg-customGold/20 text-customGold group-hover:bg-customGold/30'
                    }`}
                  >
                    <FaChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                        <div className="pl-16">
                          <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.3 }}
                            className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-xl p-6 border border-customGold/20"
                          >
                            <p className="text-white/90 leading-relaxed text-lg">
                              {faq.answer}
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 backdrop-blur-sm border border-customGold/30 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-customGold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Our expert team is here to help you find the perfect lenses for your needs.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-customGold/50 transition-all duration-300"
              >
                Contact Our Experts
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;