"use client";
import React from "react";
import { slideIn, zoomIn } from "@/variants";
import { fadeIn } from "@/variants";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5 mb-20">
      <motion.h2
        variants={zoomIn("up", 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="mb-1 text-3xl font-extrabold leading-tight text-white mt-10"
      >
        Our Services
      </motion.h2>
      <motion.p
        variants={zoomIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="mb-12 text-xl text-customGold"
      >
        Here are a few of the excellent services we provide at Rayn Look.
      </motion.p>
      <div className="w-full">
        <div className="flex flex-col w-full mb-10 sm:flex-row">
          <motion.div
            variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full mb-10 sm:mb-0 sm:w-1/2"
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-xl font-bold text-customGold">
                    Premium Contact Lenses
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">
                  ------------
                </p>
                <p className="mb-2 text-white">
                  We offer a wide variety of premium contact lenses designed for
                  comfort, clarity, and long-lasting wear. Whether you need
                  daily, monthly, or specialty lenses, we have you covered.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full sm:w-1/2"
          >
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-xl font-bold text-customGold">
                    Prescription Contact Lenses
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">
                  ------------
                </p>
                <p className="mb-2 text-white">
                  Get your prescription lenses customized to your exact
                  specifications. Our expert team ensures that your lenses fit
                  perfectly and provide the best visual clarity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex flex-col w-full mb-5 sm:flex-row">
          <motion.div
            variants={fadeIn("left", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full mb-10 sm:mb-0 sm:w-1/2"
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-white rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-white rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-xl font-bold text-customGold">
                    Eye Health Consultation
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-white uppercase">
                  ------------
                </p>
                <p className="mb-2 text-white">
                  Our eye health experts offer personalized consultations to
                  help you choose the best contact lenses for your eye health
                  needs, ensuring comfort and safety.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full mb-10 sm:mb-0 sm:w-1/2"
          >
            <div className="relative h-full ml-0 mr-0 sm:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-customGold rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-customGold rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-xl font-bold text-customGold">
                    Contact Lens Fitting
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-customGold uppercase">
                  ------------
                </p>
                <p className="mb-2 text-white">
                  We offer professional fitting services to ensure your contact
                  lenses fit perfectly and comfortably, tailored to your unique
                  eye shape and prescription.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("right", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="w-full sm:w-1/2"
          >
            <div className="relative h-full ml-0 md:mr-10">
              <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-white rounded-lg"></span>
              <div className="relative h-full p-5 bg-black border-2 border-white rounded-lg">
                <div className="flex items-center -mt-1">
                  <h3 className="my-2 ml-3 text-xl font-bold text-customGold">
                    Lens Care & Maintenance
                  </h3>
                </div>
                <p className="mt-3 mb-1 text-xs font-medium text-white uppercase">
                  ------------
                </p>
                <p className="mb-2 text-white">
                  We provide expert advice on lens care and maintenance, helping
                  you prolong the life of your lenses and maintain optimal eye
                  health.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
