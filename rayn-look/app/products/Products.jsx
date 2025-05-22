"use client";
import React, { useState, useEffect } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import hero from "../../public/Hero.jpg";
import { motion } from "framer-motion";
import { zoomIn } from "@/variants";
import { useCart } from "../../context/CartContext";

const products = [
  {
    id: 1,
    name: "Emerald",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 2,
    name: "Gray Lava",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 3,
    name: "Barbie Blue",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 4,
    name: "Green Hazel",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 5,
    name: "Silver",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 6,
    name: "Aurora Green",
    description: "With Power",
    price: "$30",
    image: hero,
  },
];

const Products = () => {
  const { addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  // Disable buttons while toast is visible
  const isDisabled = showToast;

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
  };

  // Auto hide toast after 3 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      {/* Centered modal toast */}
      {showToast && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-green-600 text-white px-8 py-6 rounded-lg flex flex-col items-center shadow-lg max-w-xs w-full">
            <p className="text-center text-lg font-semibold">
              Item added successfully!
            </p>
          </div>
        </div>
      )}

      <section
        id="Products"
        className="mb-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10"
      >
        {products.map((product) => (
          <motion.div
            variants={zoomIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            key={product.id}
            className="w-80 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div>
              <Image
                src={product.image}
                alt="Product"
                className="h-80 w-80 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-80">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.description}
                </span>
                <p className="text-lg font-bold text-white truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-white cursor-auto my-3">
                    {product.price}
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-customGold p-2 rounded-lg hover:bg-customGold disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-label={`Add ${product.name} to cart`}
                    disabled={isDisabled}
                  >
                    <MdAddShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Products;
