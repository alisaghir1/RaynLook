"use client";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import hero from "../public/Hero.jpg";
import { motion } from "framer-motion";
import { fadeIn, slideIn, zoomIn } from "@/variants";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Emerald",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 2,
    name: "Gray Lava",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 3,
    name: "Barbie Blue",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 4,
    name: "Barbie Blue",
    description: "With Power",
    price: "$30",
    image: hero,
  },
];

const FeauturedItems = () => {
  return (
    <div>
      <motion.div
        variants={slideIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center pt-20 mx-5"
      >
        <h1 className="font-bold text-4xl mb-4 text-customGold">
           Elevate Your Vision With Our Feautured Items
        </h1>
        <p className="text-2xl text-white">
          Discover our most-loved contact lenses for unmatched clarity, comfort, and style.
        </p>
      </motion.div>

      <section
        id="Products"
        className="mb-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 justify-items-center justify-center gap-y-20 gap-x-14 mt-10"
      >
        {products.map((product) => (
          <motion.div
            variants={zoomIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            key={product.id}
            className="relative w-80 bg-dark shadow-lg rounded-lg duration-500 hover:scale-105 hover:shadow-2xl"
          >
            {/* Badge */}
            <span className="absolute top-3 left-3 bg-customGold text-dark font-bold text-xs py-1 px-3 rounded-full">
              Top Seller
            </span>
            <Link href="#">
              <div className="relative">
                <Image
                  src={product.image}
                  alt="Product"
                  className="h-80 w-80 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-t-xl opacity-0 hover:opacity-80 transition-opacity duration-300"></div>
              </div>
              <div className="px-4 py-3 w-80">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.description}
                </span>
                <p className="text-lg font-bold text-white truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-customGold cursor-auto my-3">
                    {product.price}
                  </p>
                  <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-customGold border border-customGold p-2 rounded-lg hover:bg-customGold hover:text-dark">
                    <MdAddShoppingCart />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default FeauturedItems;
