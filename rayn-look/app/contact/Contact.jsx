"use client";

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { fadeIn } from '@/variants';

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
        "service_9dw8n2b", // Replace with your EmailJS service ID
        "template_qi1yiur", // Replace with your EmailJS template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          subject: formData.subject,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        "bz-racFIdw40qpvrn" // Replace with your EmailJS user ID
      );

      setFormData({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        phone: '',
        message: '',
      });

      setAlertMessage('Thank you for your interest, our team will contact you soon!');
      setShowAlert(true);
    } catch (error) {
      setAlertMessage('There was an error sending your message. Please try again.');
      setShowAlert(true);
      console.error("FAILED...", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-6 mb-20 mt-20 lg:px-8">
      <motion.div
        variants={fadeIn('down', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-xl flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-customGold">Contact Us</h1>
        <p className="mt-3 text-lg text-white">We’d love to hear from you! Please fill out the form below to get in touch with us.</p>
      </motion.div>

      <motion.form
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-customGold">First Name</label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                className="block bg-black w-full rounded-md border border-customGold px-3.5 py-2 text-customGold shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-customGold">Last Name</label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                className="block bg-black w-full rounded-md border border-customGold px-3.5 py-2 text-customGold shadow-sm sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <label htmlFor="subject" className="block text-sm font-semibold leading-6 text-customGold">Subject</label>
            <div className="mt-2.5">
              <select
                onChange={(e) => handleSubjectChange(e.target.value)}
                value={formData.subject}
                className="w-full bg-black rounded-md border border-customGold px-3.5 py-2 text-customGold shadow-sm sm:text-sm sm:leading-6"
              >
                <option value="" disabled>Select a subject</option>
                <option value="Franchise Inquiry">Become a Partner</option>
                <option value="Report a Problem">Report a Problem</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-customGold">Email</label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="block bg-black w-full rounded-md border border-customGold px-3.5 py-2 text-customGold shadow-sm b-customGold sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-customGold">Phone Number</label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="block bg-black w-full rounded-md border border-customGold px-3.5 py-2 text-customGold shadow-sm b-customGold sm:text-sm sm:leading-6"
              />
            </div>
          </motion.div>

          <motion.div
            className="sm:col-span-2"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-customGold">Message</label>
            <div className="mt-2.5">
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="4"
                className="block w-full rounded-md border border-customGold px-3.5 py-2 text-customGold bg-black shadow-sm b-customGold sm:text-sm sm:leading-6"
              ></textarea>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-customGold px-3.5 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-customGold focus:outline-none focus:ring-2 focus:ring-customGold focus:ring-offset-2"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </motion.div>
      </motion.form>

      {showAlert && (
        <div className='mt-6 p-4 text-white text-center'>
          {alertMessage}
        </div>
      )}
    </div>
  );
};

export default Contact;
