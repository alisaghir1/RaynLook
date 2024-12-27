"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "@/variants";

const ThirdSection = () => {
  return (
    <div className="">
      <motion.div
        variants={zoomIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="my-20 bg-black text-white"
      >
        <h1 className="text-3xl text-center">Why Choose Rayn Look?</h1>
      </motion.div>
      <div className="bg-white text-customGold py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20">
          {/* Question 1 */}
          <motion.div
            variants={slideIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Why Choose Rayn Look for Your Contact Lenses?
            </h2>
            <p className="text-black">
              Rayn Look offers premium quality lenses designed for comfort,
              clarity, and natural beauty. We focus on providing exceptional
              customer service and a wide variety of lenses to suit your style
              and vision needs.
            </p>
          </motion.div>

          {/* Question 2 */}
          <motion.div
            variants={slideIn("down", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              What Makes Rayn Look’s Lenses Different?
            </h2>
            <p className="text-black">
              Our lenses are crafted from high-quality materials that ensure
              comfort all day long. The unique design of our lenses allows for a
              natural look while enhancing your eye color and providing
              crystal-clear vision.
            </p>
          </motion.div>

          {/* Question 3 */}
          <motion.div
            variants={slideIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              How Long Can I Wear Rayn Look Contact Lenses?
            </h2>
            <p className="text-black">
              Our lenses are designed for long-lasting comfort and can be worn
              for up to 1 year. With proper care and maintenance, they offer
              excellent performance throughout the year, ensuring clear vision
              and comfort.
            </p>
          </motion.div>

          {/* Question 4 */}
          <motion.div
            variants={slideIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Are Rayn Look Lenses Safe for My Eyes?
            </h2>
            <p className="text-black">
              Yes, safety is our top priority. All of our lenses are
              FDA-approved and made from high-quality, breathable materials that
              allow oxygen to reach your eyes, minimizing discomfort and
              preventing dryness.
            </p>
          </motion.div>

          {/* Question 5 */}
          <motion.div
            variants={slideIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="p-6 shadow-lg rounded-xl"
          >
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              How Do I Order Rayn Look Contact Lenses?
            </h2>
            <p className="text-black">
              Ordering is easy! Simply browse our collection, select the lenses
              that best suit your needs, and proceed to checkout. We offer fast
              and reliable shipping to ensure you get your lenses quickly and
              safely.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
