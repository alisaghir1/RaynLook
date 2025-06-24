"use client";
import React, { useState } from "react";
import { MdAddShoppingCart, MdRemoveRedEye } from "react-icons/md";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/variants";
import Link from "next/link";
import { products, getProductsByCategory, getProductsByRating } from "../data/data";
import { useCart } from "../../context/CartContext";

const ProductGrid = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');
  const [loadingStates, setLoadingStates] = useState({});

  // Cart context
  const { addToCart } = useCart();

  // Simplified categories for yearly lenses
  const lensCategories = [
    { id: 'all', name: 'All Lenses', icon: '👁️' },
    { id: 'with-power', name: 'With Power', icon: '🔍' },
    { id: 'without-power', name: 'Without Power', icon: '✨' },
    { id: 'featured', name: 'Featured', icon: '⭐' },
    { id: 'top-rated', name: 'Top Rated', icon: '🏆' }
  ];

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

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    
    switch (filter) {
      case 'all':
        setFilteredProducts(products);
        break;
      case 'with-power':
        setFilteredProducts(products.filter(p => p.hasPower));
        break;
      case 'without-power':
        setFilteredProducts(products.filter(p => !p.hasPower));
        break;
      case 'featured':
        setFilteredProducts(products.filter(p => p.featured));
        break;
      case 'top-rated':
        setFilteredProducts(getProductsByRating(4.5));
        break;
      default:
        setFilteredProducts(products);
    }
  };

  const handleAddToCart = async (product) => {
    if (!product.inStock) return;
    
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));
    await new Promise(resolve => setTimeout(resolve, 600));
    addToCart(product, 1);
    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  };

  return (
    <div className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <BsEyeFill className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            Premium <span className="text-customGold">Yearly</span> Lenses
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Long-lasting comfort and style with our premium yearly contact lens collection
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {lensCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeFilter === category.id 
                  ? 'bg-customGold text-black shadow-lg shadow-customGold/30' 
                  : 'bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-customGold/50'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              variants={zoomIn("up", 1)}
              initial="hidden"
              whileInView={"show"}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              key={product.id}
              className="group relative"
            >
              {/* Product Card */}
              <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:border-customGold/50 transition-all duration-500 hover:-translate-y-1">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {product.badge}
                  </span>

                  {/* Power Indicator */}
                  <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      product.hasPower 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-green-500 text-white'
                    }`}>
                      {product.hasPower ? 'With Power' : 'No Power'}
                    </span>
                    <span className="bg-black/70 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Yearly
                    </span>
                  </div>
                  
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-customGold transition-colors truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating).slice(0, 5)}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-customGold">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {product.rating} ⭐ ({product.reviews})
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock || loadingStates[product.id]}
                      className={`flex-1 py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-customGold to-yellow-500 text-black hover:shadow-lg hover:shadow-customGold/30' 
                          : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <MdAddShoppingCart className="w-4 h-4" />
                      <span>
                        {loadingStates[product.id] 
                          ? 'Adding...' 
                          : product.inStock 
                            ? 'Add to Cart' 
                            : 'Out of Stock'
                        }
                      </span>
                    </button>
                    
                    <Link href={`/products/${product.slug}`}>
                      <button className="px-4 py-2 border-2 border-customGold text-customGold rounded-full font-semibold text-sm hover:bg-customGold hover:text-black transition-all duration-300">
                        <MdRemoveRedEye className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
              <BsEyeFill className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 text-xl mb-2">No lenses found</p>
              <p className="text-gray-500">Try adjusting your filter selection</p>
            </div>
          </div>
        )}

        {/* Product Count */}
        <div className="text-center mt-8">
          <p className="text-gray-400">
            Showing <span className="text-customGold font-bold">{filteredProducts.length}</span> of <span className="text-customGold font-bold">{products.length}</span> yearly contact lenses
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;