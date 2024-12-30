"use client";
import React from "react";
import { motion } from "framer-motion";
import {  slideIn, zoomIn } from "@/variants";
import { MdOutlineSupportAgent } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { GiUsaFlag } from "react-icons/gi";

const ThirdSection = () => {
  return (
    <div className="overflow-x-hidden">
      <motion.div
        variants={zoomIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="my-10 bg-black text-white flex flex-col xl:flex-row mx-5 gap-10 justify-center items-center"
      >
        <div className="flex flex-col ">
        <h2 className="text-xl text-center text-customGold flex justify-center items-center gap-2"><span className="text-white"><FaShippingFast /></span>World wide Shipping</h2>
        <p className=" text-center text-white text-sm">We deliver to your doorstep, no matter where you are!</p>
        </div>
        <div className="flex flex-col  text-center">
        <h2 className="text-xl text-center text-customGold flex justify-center items-center gap-2"><span className="text-white"><MdOutlineSupportAgent /></span>24/7 Customer Support</h2>
        <p className=" text-center text-white text-sm">Our team is always here to assist you anytime, anywhere.</p>
        </div>
        <div className="flex flex-col  text-center">
        <h2 className="text-xl text-center text-customGold flex justify-center items-center gap-2"><span className="text-white"><GiUsaFlag /></span>Made in USA</h2>
        <p className=" text-center text-white text-sm">Experience the finest craftsmanship backed by the highest standards.</p>
        </div>
        <div className="flex flex-col  text-center">
        <h2 className="text-xl text-center text-customGold flex justify-center items-center gap-2"><span className="text-white"><FaStar /></span>Top-Rated in Lebanon</h2>
        <p className=" text-center text-white text-sm">Proud to be rated #1 for quality and service in Lebanon!</p>
        </div>
      </motion.div>
      <div className="bg-white text-customGold py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mx-4 lg:px-20 text-center">
          {/* Question 1 */}
          <motion.div
            variants={slideIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="shadow-lg border py-4"
          >
            <h2 className="text-4xl font-semibold text-customBg mb-4">
             600000
            </h2>
            <p className="text-black text-2xl">
              Social Media Followers
            </p>
          </motion.div>

          {/* Question 2 */}
          <motion.div
            variants={slideIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="shadow-lg  border py-4"
          >
            <h2 className="text-4xl font-semibold text-customBg mb-4">
            12000
            </h2>
            <p className="text-black text-2xl">
            5-Star Reviews <span className="text-customGold"> ★★★★★ </span>
            </p>
          </motion.div>

          {/* Question 3 */}
          <motion.div
            variants={slideIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="shadow-lg border py-4"
          >
            <h2 className="text-4xl font-semibold text-customBg mb-4">
            30000
            </h2>
            <p className="text-black text-2xl">
            Happy Customers
            </p>
          </motion.div>

          {/* Question 4 */}
          <motion.div
            variants={slideIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="shadow-lg border py-4"
          >
            <h2 className="text-4xl font-semibold text-customBg mb-4">
            32
            </h2>
            <p className="text-black text-2xl">
            Countries Providing Our Products
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
