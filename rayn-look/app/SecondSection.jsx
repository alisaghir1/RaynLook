"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/variants";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import "./secondSection.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

// Celebrity testimonials data
const celebrityData = [
  {
    id: 1,
    name: "Emma Watson",
    role: "Actress & Activist",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    testimonial: "RaynLook's lenses give me the perfect natural enhancement for red carpet events.",
    lens: "Natural Hazel Collection",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Fashion Model",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    testimonial: "The comfort and style are unmatched. Perfect for long photoshoots.",
    lens: "Crystal Vision Pro",
    rating: 5
  },
  {
    id: 3,
    name: "Sofia Rodriguez",
    role: "Influencer",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    testimonial: "These lenses completely transformed my look. Absolutely stunning!",
    lens: "Ocean Blue Elite",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Actor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    testimonial: "Professional quality that I can rely on for every performance.",
    lens: "Golden Hour Premium",
    rating: 5
  },
  {
    id: 5,
    name: "Aria Kim",
    role: "K-Pop Star",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    testimonial: "Perfect for stage performances and music videos. Love the colors!",
    lens: "Emerald Dreams",
    rating: 5
  },
  {
    id: 6,
    name: "David Martinez",
    role: "TV Host",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    testimonial: "Crystal clear vision with incredible comfort for long filming days.",
    lens: "Professional Series",
    rating: 5
  },
  {
    id: 7,
    name: "Luna Park",
    role: "Fashion Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    testimonial: "The attention to detail and quality is exactly what I expect from luxury.",
    lens: "Rose Gold Luxe",
    rating: 5
  },
  {
    id: 8,
    name: "Alex Thompson",
    role: "Photographer",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    testimonial: "As someone who works with visuals, I appreciate the perfect clarity these provide.",
    lens: "Midnight Gray",
    rating: 5
  }
];

export default function SecondSection() {
  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, i) => (
      <FaStar key={i} className="w-4 h-4 text-yellow-400" />
    ));
  };

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(203,178,106,0.3) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="text-center mb-16">
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

          <motion.h1
            variants={slideIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="text-5xl md:text-6xl font-bold mb-6 text-black"
          >
            <span className="text-customGold">Celebrity</span> Favorites
          </motion.h1>
          
          <motion.p
            variants={slideIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Discover why A-list celebrities, influencers, and industry professionals choose RaynLook for their vision and style needs. Our premium contact lenses deliver exceptional comfort, stunning aesthetics, and the confidence that comes with wearing the best.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">500+</div>
              <div className="text-gray-500 text-sm">Celebrities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">98%</div>
              <div className="text-gray-500 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">50+</div>
              <div className="text-gray-500 text-sm">Countries</div>
            </div>
          </motion.div>
        </div>

        {/* Celebrity Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Swiper
            initialSlide={3}
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            {celebrityData.map((celebrity) => (
              <SwiperSlide key={celebrity.id}>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full">
                  {/* Celebrity Image */}
                  <div className="relative h-80">
                    <Image
                      className="w-full h-full object-cover"
                      width={400}
                      height={320}
                      src={celebrity.image}
                      alt={celebrity.name}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    
                    {/* Quote icon */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-customGold/90 rounded-full flex items-center justify-center">
                      <FaQuoteLeft className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{celebrity.name}</h3>
                      <p className="text-customGold font-medium text-sm">{celebrity.role}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-1 mb-4">
                      {renderStars(celebrity.rating)}
                    </div>

                    {/* Testimonial */}
                    <blockquote className="text-gray-600 text-sm italic mb-4 leading-relaxed">
                      "{celebrity.testimonial}"
                    </blockquote>

                    {/* Lens Info */}
                    <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-full px-4 py-2 text-center">
                      <span className="text-xs font-semibold text-customGold">
                        Uses: {celebrity.lens}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-3xl p-8 border border-customGold/20">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Join the Celebrity Circle
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Experience the same premium quality and stunning results that celebrities trust for their most important moments.
            </p>
            
            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(203,178,106,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-customGold/50 transition-all duration-300"
              >
                Shop Celebrity Favorites
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}