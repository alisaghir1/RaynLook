"use client";
import React, { useState } from "react";
import { MdAddShoppingCart, MdRemoveRedEye, MdFavorite } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, zoomIn } from "@/variants";
import Link from "next/link";
import { getFeaturedProducts } from "./data/data";
import { useCart } from "../context/CartContext";

const FeaturedItems = () => {
  // Get only featured products from data
  const featuredProducts = getFeaturedProducts();
  
  // Cart context
  const { addToCart } = useCart();
  
  // Loading state for individual products
  const [loadingStates, setLoadingStates] = useState({});

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="w-4 h-4 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="w-4 h-4 text-yellow-400" />);
    }

    return stars;
  };

  const handleAddToCart = async (product) => {
    if (!product.inStock) return;
    
    // Set loading state for this specific product
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    
    // Simulate API call for better UX
    await new Promise(resolve => setTimeout(resolve, 600));
    
    // Add to cart using context
    addToCart(product, 1);
    
    // Clear loading state
    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={slideIn("down", 1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <BsEyeFill className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h1 className="font-bold text-5xl md:text-6xl mb-6 text-white">
            <span className="text-customGold">Featured</span> Collection
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover our most-loved contact lenses for unmatched clarity, comfort, and stunning style
          </p>
        </motion.div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              variants={zoomIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              key={product.id}
              className="group relative"
            >
              <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl hover:border-customGold/50 transition-all duration-500 hover:-translate-y-2">
                {/* Product Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Badge */}
                  <span className={`absolute top-4 left-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg`}>
                    {product.badge}
                  </span>
                  
                  {/* Stock Status */}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Link href={`/products/${product.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-customGold hover:text-black transition-colors"
                      >
                        <MdRemoveRedEye className="w-5 h-5" />
                      </motion.button>
                    </Link>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-red-500 transition-colors"
                    >
                      <MdFavorite className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Color Indicator */}
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 border-2 border-white shadow-sm"></div>
                    <span className="text-xs font-medium text-white">{product.color}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-customGold transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating)}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-2">{product.description}</p>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-sm text-gray-400">
                      {product.rating} • {product.reviews} reviews
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-customGold">{product.price}</span>
                      <span className="text-lg text-gray-400 line-through">{product.originalPrice}</span>
                      <span className="bg-green-600 text-green-100 text-xs px-2 py-1 rounded-full font-semibold">
                        Save {Math.round(((parseInt(product.originalPrice.slice(1)) - parseInt(product.price.slice(1))) / parseInt(product.originalPrice.slice(1))) * 100)}%
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex space-x-3">
                    <motion.button
                      whileHover={{ scale: product.inStock ? 1.02 : 1 }}
                      whileTap={{ scale: product.inStock ? 0.98 : 1 }}
                      disabled={!product.inStock || loadingStates[product.id]}
                      onClick={() => handleAddToCart(product)}
                      className={`flex-1 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-customGold to-yellow-500 text-black hover:shadow-customGold/50' 
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <MdAddShoppingCart className="w-5 h-5" />
                      <span>
                        {loadingStates[product.id] 
                          ? 'Adding...' 
                          : product.inStock 
                            ? 'Add to Cart' 
                            : 'Out of Stock'
                        }
                      </span>
                    </motion.button>
                    
                    <Link href={`/products/${product.slug}`}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-6 py-3 border-2 border-customGold text-customGold rounded-full font-bold hover:bg-customGold hover:text-black transition-all duration-300"
                      >
                        Details
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-customGold/20 to-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>
            </motion.div>
          ))}
        </section>

        {/* View All Products Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link href="/products">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(203,178,106,0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-customGold text-customGold px-10 py-4 rounded-full font-bold text-lg hover:bg-customGold hover:text-black transition-all duration-300 flex items-center space-x-3 mx-auto"
            >
              <span>View All Products</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturedItems;