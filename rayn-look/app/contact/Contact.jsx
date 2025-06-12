"use client";

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaPaperPlane
} from 'react-icons/fa';
import { MdOutlineSupportAgent } from 'react-icons/md';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted on client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Handle subject selection
  const handleSubjectChange = (value) => {
    setFormData((prev) => ({ ...prev, subject: value }));
  };

  // Send email using EmailJS
  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        "service_9dw8n2b",
        "template_qi1yiur",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          subject: formData.subject,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "bz-racFIdw40qpvrn"
      );

      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
      });

      setAlertMessage('Thank you for your interest! Our team will contact you soon.');
      setAlertType('success');
      setShowAlert(true);
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      setAlertMessage('There was an error sending your message. Please try again.');
      setAlertType('error');
      setShowAlert(true);
      console.error("FAILED...", error);
      
      // Hide alert after 5 seconds
      setTimeout(() => setShowAlert(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      details: ["+961 78855963"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      details: ["Raynlook@gmail.com"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      details: ["Ain El Remmaneh", "Beirut, Lebanon"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      details: ["Mon - Fri: 9AM - 6PM", "Sat - Sun: 10AM - 4PM"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Simple fade animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  // Prevent rendering until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-customGold"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <MdOutlineSupportAgent className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-customGold">Touch</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our premium contact lenses? We're here to help you see the world more clearly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInLeft}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to transform your vision? Our expert team is standing by to assist you with any questions about our premium contact lenses.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 p-4 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white flex-shrink-0`}>
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-customGold mb-2">
                      {info.title}
                    </h3>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-300">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={slideInRight}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-gray-300">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={sendEmail} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-customGold mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                    <input
                      required
                      type="text"
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-customGold mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                    <input
                      required
                      type="text"
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-customGold mb-2">
                  Subject *
                </label>
                <select
                  required
                  onChange={(e) => handleSubjectChange(e.target.value)}
                  value={formData.subject}
                  className="w-full bg-black/50 border border-customGold/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Product Inquiry">Product Inquiry</option>
                  <option value="Prescription Assistance">Prescription Assistance</option>
                  <option value="Franchise Inquiry">Become a Partner</option>
                  <option value="Report a Problem">Report a Problem</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-customGold mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                  <input
                    required
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-customGold mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <FaPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                  <input
                    required
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-customGold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="4"
                  className="w-full bg-black/50 border border-customGold/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-customGold to-yellow-500 text-black font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-customGold/30 focus:outline-none focus:ring-2 focus:ring-customGold focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Success/Error Alert */}
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className={`fixed bottom-8 right-8 p-6 rounded-2xl shadow-2xl z-50 max-w-md ${
                alertType === 'success' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  alertType === 'success' ? 'bg-white/20' : 'bg-white/20'
                }`}>
                  {alertType === 'success' ? '✓' : '✗'}
                </div>
                <p className="font-medium">{alertMessage}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Contact;