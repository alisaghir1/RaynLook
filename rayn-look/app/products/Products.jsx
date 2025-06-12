"use client";
import React, { useState } from "react";
import { MdAddShoppingCart, MdRemoveRedEye, MdFavorite } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaFilter } from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";
import { zoomIn } from "@/variants";
import Link from "next/link";
import { products, categories, getProductsByCategory, getProductsByRating } from "../data/data";

const ProductGrid = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [activeFilter, setActiveFilter] = useState('all');

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
      case 'featured':
        setFilteredProducts(products.filter(p => p.featured));
        break;
      case 'top-rated':
        setFilteredProducts(getProductsByRating(4.5));
        break;
      default:
        setFilteredProducts(getProductsByCategory(filter));
    }
  };

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-black mb-6">
            Our <span className="text-customGold">Complete</span> Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our entire range of premium contact lenses
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => handleFilter('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeFilter === 'all' 
                ? 'bg-customGold text-black' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Products
          </button>
          <button
            onClick={() => handleFilter('featured')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeFilter === 'featured' 
                ? 'bg-customGold text-black' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Featured
          </button>
          <button
            onClick={() => handleFilter('top-rated')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeFilter === 'top-rated' 
                ? 'bg-customGold text-black' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Top Rated
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilter(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === category.id 
                  ? 'bg-customGold text-black' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.icon} {category.name}
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
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-gray-100">
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className={`absolute top-3 left-3 ${product.badgeColor} text-white px-2 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {product.badge}
                  </span>
                  
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">
                        Out of Stock
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-customGold hover:text-black transition-colors">
                      <MdRemoveRedEye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-customGold transition-colors truncate">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-1">
                      {renderStars(product.rating).slice(0, 5)}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-customGold">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <span className="text-xs text-gray-500">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <Link href={`/products/${product.slug}`}>
                    <button
                      disabled={!product.inStock}
                      className={`w-full py-2 rounded-full font-semibold text-sm transition-all duration-300 flex items-center justify-center space-x-2 ${
                        product.inStock 
                          ? 'bg-gradient-to-r from-customGold to-yellow-500 text-black hover:shadow-lg' 
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      <MdRemoveRedEye className="w-4 h-4" />
                      <span>{product.inStock ? 'View Details' : 'Out of Stock'}</span>
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Products Found */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No products found for this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;