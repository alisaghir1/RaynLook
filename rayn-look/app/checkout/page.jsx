"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

// Your slideIn animation variant function
const slideIn = (direction = "up", delay = 0) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -50 : direction === "up" ? 50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay,
      },
    },
  };
  return variants;
};

export default function CheckoutPage() {
  const { cartItems, clearCart } = useCart();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [area, setArea] = useState("");
  const [buildingFloor, setBuildingFloor] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [error, setError] = useState("");

  const total = cartItems.reduce((acc, item) => {
    const priceNum =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.-]+/g, ""))
        : item.price;
    return acc + priceNum * item.quantity;
  }, 0);

  const handleSubmit = () => {
    if (!firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName.trim()) {
      setError("Please enter your last name.");
      return;
    }
    if (!area.trim()) {
      setError("Please enter your area.");
      return;
    }
    if (!buildingFloor.trim()) {
      setError("Please enter your building and floor.");
      return;
    }
    if (!pickupTime.trim()) {
      setError("Please specify a time to pick the order.");
      return;
    }
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setError(""); // clear error

    const orderLines = cartItems
      .map((item) => {
        const priceNum =
          typeof item.price === "string"
            ? Number(item.price.replace(/[^0-9.-]+/g, ""))
            : item.price;

        // Extract power info from description
        const descLower = item.description.toLowerCase();
        const powerText = descLower.includes("with power")
          ? "With Power"
          : descLower.includes("without power")
          ? "Without Power"
          : "";

        return `${item.name}${powerText ? ` (${powerText})` : ""} x${item.quantity} - $${(priceNum * item.quantity).toFixed(2)}`;
      })
      .join("\n");

    const paymentText = paymentMethod === "cash" ? "Pay with Cash" : "Pay with Credit Card";

    const rawMessage = 
`Order:
${orderLines}
Total: $${total.toFixed(2)}
Name: ${firstName} ${lastName}
Area: ${area}
Building & Floor: ${buildingFloor}
Pickup Time: ${pickupTime}
Payment Method: ${paymentText}`;

    const url = `https://wa.me/70967834?text=${encodeURIComponent(rawMessage)}`;

    window.open(url, "_blank");

    clearCart();
  };

  return (
    <motion.div 
      variants={slideIn("down", 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      className="w-full max-w-md mx-auto px-10 py-8 border-2 border-customGold rounded-lg bg-black bg-opacity-70 text-white my-20 shadow-lg"
    >
      <motion.h1
        variants={slideIn("down", 0.8)}
        className="text-5xl font-extrabold mb-6 text-customGold drop-shadow-lg"
      >
        Checkout
      </motion.h1>

      {cartItems.length === 0 && (
        <p className="text-gray-400 italic mb-4">Your cart is empty.</p>
      )}

      <div className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block font-semibold text-customGold mb-1">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full border border-customGold rounded px-3 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-customGold"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Your first name"
          />
        </div>

        {/* Last Name */}
        <div>
          <label htmlFor="lastName" className="block font-semibold text-customGold mb-1">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full border border-customGold rounded px-3 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-customGold"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Your last name"
          />
        </div>

        {/* Area */}
        <div>
          <label htmlFor="area" className="block font-semibold text-customGold mb-1">
            Area:
          </label>
          <input
            type="text"
            id="area"
            className="w-full border border-customGold rounded px-3 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-customGold"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            placeholder="e.g. Jumeirah, Dubai Marina"
          />
        </div>

        {/* Building & Floor */}
        <div>
          <label htmlFor="buildingFloor" className="block font-semibold text-customGold mb-1">
            Building & Floor:
          </label>
          <input
            type="text"
            id="buildingFloor"
            className="w-full border border-customGold rounded px-3 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-customGold"
            value={buildingFloor}
            onChange={(e) => setBuildingFloor(e.target.value)}
            placeholder="e.g. Building 5, Floor 3"
          />
        </div>

        {/* Pickup Time */}
        <div>
          <label htmlFor="pickupTime" className="block font-semibold text-customGold mb-1">
            Available Pickup Time:
          </label>
          <input
            type="text"
            id="pickupTime"
            className="w-full border border-customGold rounded px-3 py-2 bg-transparent text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-customGold"
            value={pickupTime}
            onChange={(e) => setPickupTime(e.target.value)}
            placeholder="e.g. 5:00 PM - 7:00 PM"
          />
        </div>

        {/* Payment Method */}
        <div>
          <p className="font-semibold text-customGold mb-2">Payment Method:</p>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="cash"
              name="payment"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={() => setPaymentMethod("cash")}
              className="mr-2"
            />
            <label htmlFor="cash">Pay with Cash</label>
          </div>
          <div className="flex items-center text-gray-500 cursor-not-allowed">
            <input
              type="radio"
              id="creditCard"
              name="payment"
              value="creditCard"
              disabled
              className="mr-2"
            />
            <label htmlFor="creditCard">Credit Card (Coming Soon)</label>
          </div>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="bg-customGold hover:bg-black border-customGold border hover:text-white font-semibold py-2 px-5 rounded w-full transition duration-300 ease-in-out"
          disabled={cartItems.length === 0}
        >
          Confirm and Send Order via WhatsApp
        </button>
      </div>
    </motion.div>
  );
}
