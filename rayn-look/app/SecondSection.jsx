"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideIn } from "@/variants";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hero from '../public/Hero.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

import "./secondSection.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function SecondSection() {
  return (
    <div className="bg-white py-20 ">
      <div className="max-w-6xl text-center px-10 mx-auto xl:px-0 text-white container">
        <motion.h1
          variants={slideIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="text-3xl text-customGold"
        >
          Celebrity Favorite Contact Lenses
        </motion.h1>
        <motion.p
          variants={slideIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-xl text-black"
        >
          Rayn Look has become the go-to store for celebrities seeking premium
          contact lenses. Our lenses are designed not only to enhance your
          vision but also to complement your unique style. With a wide range of
          colors and designs, you’ll experience comfort and sophistication that
          is loved by stars and influencers around the world. Get ready to
          transform your look with lenses trusted by the best in the business.
        </motion.p>
      </div>
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
          delay: 2000, // Delay between slides in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Include Autoplay module
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="h-full object-cover"
            width={450}
            height={300}
            src={hero}
            alt="carousel-image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
