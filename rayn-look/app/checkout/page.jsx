"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/variants";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { 
  FaWhatsapp, 
  FaUser, 
  FaMapMarkerAlt, 
  FaBuilding, 
  FaClock,
  FaMoneyBillWave,
  FaCreditCard,
  FaShoppingCart,
  FaCheckCircle,
  FaExclamationTriangle
} from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    area: "",
    buildingFloor: "",
    pickupTime: "",
    paymentMethod: "cash"
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const total = cartItems.reduce((acc, item) => {
    const priceNum =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.-]+/g, ""))
        : item.price;
    return acc + priceNum * item.quantity;
  }, 0);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (error) setError(""); // Clear error when user starts typing
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "Please enter your first name.";
    if (!formData.lastName.trim()) return "Please enter your last name.";
    if (!formData.area.trim()) return "Please enter your area.";
    if (!formData.buildingFloor.trim()) return "Please enter your building and floor.";
    if (!formData.pickupTime.trim()) return "Please specify a time to pick the order.";
    if (cartItems.length === 0) return "Your cart is empty.";
    return null;
  };

  const handleSubmit = async () => {
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const orderLines = cartItems
        .map((item) => {
          const priceNum =
            typeof item.price === "string"
              ? Number(item.price.replace(/[^0-9.-]+/g, ""))
              : item.price;

          const descLower = item.description.toLowerCase();
          const powerText = descLower.includes("with power")
            ? "With Power"
            : descLower.includes("without power")
            ? "Without Power"
            : "";

          return `${item.name}${powerText ? ` (${powerText})` : ""} x${item.quantity} - $${(priceNum * item.quantity).toFixed(2)}`;
        })
        .join("\n");

      const paymentText = formData.paymentMethod === "cash" ? "Pay with Cash" : "Pay with Credit Card";

      const rawMessage = 
`🛍️ *New Order from RaynLook*

📦 *Order Details:*
${orderLines}

💰 *Total: $${total.toFixed(2)}*

👤 *Customer Information:*
Name: ${formData.firstName} ${formData.lastName}
Area: ${formData.area}
Building & Floor: ${formData.buildingFloor}
Pickup Time: ${formData.pickupTime}
Payment Method: ${paymentText}

Thank you for choosing RaynLook! 👁️✨`;

      const url = `https://wa.me/70967834?text=${encodeURIComponent(rawMessage)}`;
      
      window.open(url, "_blank");
      clearCart();
      
      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        area: "",
        buildingFloor: "",
        pickupTime: "",
        paymentMethod: "cash"
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center py-20"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <FaShoppingCart className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
              <p className="text-gray-300 text-lg mb-8">
                Add some products to your cart before proceeding to checkout.
              </p>
              <Link href="/cart">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-customGold/30 transition-all duration-300"
                >
                  Return to Cart
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
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
        
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <FaCheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Secure <span className="text-customGold">Checkout</span>
          </h1>
          <p className="text-xl text-gray-300">
            Complete your order and transform your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Checkout Form */}
          <motion.div
            variants={slideIn("left", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Delivery Information</h2>

            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-customGold mb-2">
                    First Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-customGold mb-2">
                    Last Name *
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Area */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-customGold mb-2">
                  Area *
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                  <input
                    type="text"
                    value={formData.area}
                    onChange={(e) => handleInputChange("area", e.target.value)}
                    placeholder="e.g. Jumeirah, Dubai Marina"
                    className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Building & Floor */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-customGold mb-2">
                  Building & Floor *
                </label>
                <div className="relative">
                  <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                  <input
                    type="text"
                    value={formData.buildingFloor}
                    onChange={(e) => handleInputChange("buildingFloor", e.target.value)}
                    placeholder="e.g. Building 5, Floor 3"
                    className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Pickup Time */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-customGold mb-2">
                  Available Pickup Time *
                </label>
                <div className="relative">
                  <FaClock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-customGold w-4 h-4" />
                  <input
                    type="text"
                    value={formData.pickupTime}
                    onChange={(e) => handleInputChange("pickupTime", e.target.value)}
                    placeholder="e.g. 5:00 PM - 7:00 PM"
                    className="w-full bg-black/50 border border-customGold/30 rounded-xl px-12 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-customGold focus:ring-2 focus:ring-customGold/20 transition-all duration-300"
                  />
                </div>
              </motion.div>

              {/* Payment Method */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-semibold text-customGold mb-4">
                  Payment Method *
                </label>
                <div className="space-y-3">
                  <div className="flex items-center p-4 bg-black/30 rounded-xl border border-customGold/20 hover:border-customGold/40 transition-all duration-300">
                    <input
                      type="radio"
                      id="cash"
                      name="payment"
                      value="cash"
                      checked={formData.paymentMethod === "cash"}
                      onChange={() => handleInputChange("paymentMethod", "cash")}
                      className="mr-3 w-4 h-4 text-customGold"
                    />
                    <FaMoneyBillWave className="w-5 h-5 text-customGold mr-3" />
                    <label htmlFor="cash" className="text-white font-medium cursor-pointer">
                      Pay with Cash on Delivery
                    </label>
                  </div>
                  
                  <div className="flex items-center p-4 bg-black/30 rounded-xl border border-gray-500/20 opacity-50 cursor-not-allowed">
                    <input
                      type="radio"
                      id="creditCard"
                      name="payment"
                      value="creditCard"
                      disabled
                      className="mr-3 w-4 h-4"
                    />
                    <FaCreditCard className="w-5 h-5 text-gray-500 mr-3" />
                    <label htmlFor="creditCard" className="text-gray-500 font-medium">
                      Credit Card (Coming Soon)
                    </label>
                  </div>
                </div>
              </motion.div>

              {/* Error Message */}
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center space-x-3 p-4 bg-red-500/20 border border-red-500/30 rounded-xl"
                >
                  <FaExclamationTriangle className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 font-medium">{error}</p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            variants={slideIn("right", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-customGold/20 h-fit sticky top-8"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Order Summary</h2>

            {/* Cart Items */}
            <div className="space-y-4 mb-8">
              {cartItems.map((item, index) => {
                const priceNum =
                  typeof item.price === "string"
                    ? Number(item.price.replace(/[^0-9.-]+/g, ""))
                    : item.price;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-4 p-4 bg-black/30 rounded-xl border border-white/10"
                  >
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-800 flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-customGold font-semibold text-sm">{item.name}</h3>
                      <p className="text-gray-300 text-xs">Qty: {item.quantity}</p>
                    </div>
                    <div className="text-customGold font-bold">
                      ${(priceNum * item.quantity).toFixed(2)}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Totals */}
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-gray-300">
                <span>Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Shipping:</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-white/20 pt-4">
                <div className="flex justify-between text-xl font-bold">
                  <span className="text-white">Total:</span>
                  <span className="text-customGold">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              className="w-full bg-gradient-to-r from-customGold to-yellow-500 text-black font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-customGold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Complete Order via WhatsApp</span>
                </>
              )}
            </motion.button>

            {/* Security Info */}
            <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <BsEyeFill className="w-4 h-4" />
              <span>Secure & Safe Checkout</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}