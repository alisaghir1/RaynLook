"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "@/variants"; // Assuming variants are imported from a file

const FAQ = () => {
  return (
    <div id="faq" className="mx-auto max-w-2xl divide-y divide-white lg:max-w-7xl p-4 md:p-8">
      <motion.h2
        variants={slideIn("down", 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.4 }}
        className="mt-2 font-header text-3xl font-bold tracking-tight text-customGold sm:text-4xl"
      >
        Frequently Asked Questions
      </motion.h2>
      
      <dl className="mt-10 space-y-8 divide-y divide-white">
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            What is the lifespan of your contact lenses?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Our contact lenses are designed to last for up to one year, offering long-lasting comfort and clarity. Ensure proper care and maintenance for optimal performance.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            Are your contact lenses certified?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Yes, our contact lenses are certified to meet the highest international standards for safety and quality. We prioritize your eye health and comfort.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            How comfortable are your contact lenses?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Our contact lenses are designed for maximum comfort, offering a natural feel throughout the day. They are lightweight and breathable, so they won’t irritate or dry out your eyes.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            Do your lenses look natural on the eye?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Yes, our lenses are designed to enhance the natural beauty of your eyes, offering a flawless look. They blend seamlessly with your iris, so you can’t distinguish them from your natural eye color.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            How do I care for my contact lenses?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Proper care is essential for maintaining the clarity and comfort of your contact lenses. Always follow the cleaning and storage instructions provided with your lenses and replace the solution regularly. Avoid wearing lenses for extended periods without removing them for rest.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            Can I wear these lenses if I have a prescription?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Yes, our lenses are available with prescription options. We offer a variety of lenses designed for different vision needs, including nearsightedness, farsightedness, and astigmatism.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            Are your lenses safe for long-term wear?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              Our lenses are designed for safe, long-term wear when used as directed. We recommend following the care instructions and ensuring proper hygiene to avoid any eye irritation or infections.
            </p>
          </dd>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 1.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8"
        >
          <dt className="text-base font-semibold leading-7 text-customGold lg:col-span-3">
            Can I sleep while wearing these lenses?
          </dt>
          <dd className="mt-4 lg:col-span-9 lg:mt-0">
            <p className="text-base leading-7 text-white">
              It’s not recommended to sleep in your contact lenses unless they are specifically designed for overnight wear. Always remove your lenses before sleeping unless advised otherwise by your eye care professional.
            </p>
          </dd>
        </motion.div>
      </dl>
    </div>
  );
};

export default FAQ;
