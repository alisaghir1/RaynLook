"use client";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import hero from "../../public/Hero.jpg";
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
    name: "Green Hazel",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 5,
    name: "Silver",
    description: "With Power",
    price: "$30",
    image: hero,
  },
  {
    id: 6,
    name: "Aurora Green",
    description: "With Power",
    price: "$30",
    image: hero,
  },
];

const Products = () => {
  return (
    <>
      <motion.div
        variants={slideIn("down", 1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
        className="text-center pt-20"
      >
        <h1 className="font-bold text-4xl mb-4 text-white">
          Enhance Your Vision with Confidence
        </h1>
        <p className="text-2xl transition-all duration-300 ease-in-out hover:text-customGold text-customGold">
          Explore our premium contact lenses for clarity, comfort, and
          style—perfect for every need.
        </p>
      </motion.div>

      <section
        id="Products"
        className="mb-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10"
      >
        {products.map((product) => (
          <motion.div
            variants={zoomIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            key={product.id}
            className="w-80 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link href="#">
              <Image
                src={product.image}
                alt="Product"
                className="h-80 w-80 object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-80">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {product.description}
                </span>
                <p className="text-lg font-bold text-white truncate block capitalize">
                  {product.name}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-white cursor-auto my-3">
                    {product.price}
                  </p>
                  <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-customGold p-2 rounded-lg hover:bg-customGold">
                    <MdAddShoppingCart />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>
    </>
  );
};

export default Products;
