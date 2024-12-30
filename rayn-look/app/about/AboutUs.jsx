"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/variants";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="pt-10 overflow-hidden bg-black md:pt-0 sm:pt-16 2xl:pt-16">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
            >
              <h2 className="text-3xl font-bold leading-tight text-customGold sm:text-4xl lg:text-5xl">
                Meet The Owner
              </h2>
              <h2 className="text-3xl font-bold leading-tight text-customGold sm:text-4xl lg:text-5xl mt-4">
                Rayan Saghir
              </h2>
            </motion.div>
            <div></div>
            <motion.p
              variants={fadeIn("left", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8"
            >
              Founded in 2014 by Rayan Saghir, our story began in the heart of
              our home. With passion, dedication, and an unwavering belief in
              quality, we turned a small dream into a thriving business. Today,
              we’re proud to be recognized worldwide for offering a variety of
              the most natural and stunning contact lens colors.
            </motion.p>

            <motion.p
              variants={fadeIn("left", 1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="max-w-lg mt-3 text-xl leading-relaxed text-white md:mt-8"
            >
              Our products are designed to blend seamlessly with your natural
              beauty, enhancing your look while providing unmatched comfort.
              Whether you're seeking subtle elegance or a bold transformation,
              we have the perfect choice for you.
            </motion.p>

            <motion.p
              variants={fadeIn("left", 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.4 }}
              className="mt-4 text-xl text-white md:mt-8"
            >
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-customGold"></span>
                <span className="relative"> Got a question? </span>
              </span>
              <br className="block sm:hidden" />
              Feel free to{" "}
              <Link
                href="/contact"
                title=""
                className="transition-all duration-200 text-customGold hover:text-white hover:underline"
              >
                Contact Us
              </Link>{" "}
              or explore more about us!
            </motion.p>
          </div>

          {/* Right Section (Image) */}
          <motion.div
            variants={zoomIn("up", 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="relative"
          >
            <img
              className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
              alt="Founder Rayan Saghir"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
