"use client";
import Image from "next/image";
import hero from "../public/Hero.jpg";
import FirstSection from "./FirstSection.jsx";
import SecondSection from "./SecondSection.jsx";
import ThirdSection from "./ThirdSection.jsx";
import Footer from "./components/Footer.jsx";
import Link from "next/link";
import { slideIn } from "@/variants";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <div className=" h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent">
          <Image
            className="absolute z-[-10] top-0 right-0 w-full h-full xl:object-cover"
            src={hero}
            alt="hero image"
          />
        </div>
        <div className="flex justify-center items-center h-full text-center z-10 relative mx-2">
          <div className="">
            <motion.h1
              variants={slideIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-5xl font-bold mb-4 text-white"
            >
              Natural Beauty, Perfect Vision
            </motion.h1>
            <motion.p
              variants={slideIn("up", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.4 }}
              className="text-lg text-customGold"
            >
              Transform Your Look with Lebanon&apos;s Finest Natural Contact
              Lenses
            </motion.p>
            <Link href={"/products"}>
              <motion.div
                variants={slideIn("up", 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
              >
                <button className="bg-customGold text-xl px-5 py-2 rounded-lg mt-5 hover:bg-black hover:text-customGold transition-all duration-300 ease-in-out">
                  Shop Now
                </button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </>
  );
}
