import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import hero from '../../public/Hero.jpg'

const Products = () => {
  return (
    <>
      <div className="text-center pt-20">
        <h1 className="font-bold text-4xl mb-4 text-white">
          Enhance Your Vision with Confidence
        </h1>
        <p className="text-2xl transition-all duration-300 ease-in-out hover:text-customGold text-customGold">
          Explore our premium contact lenses for clarity, comfort, and
          style—perfect for every need.
        </p>
      </div>

      <section
        id="Projects"
        className="mb-20 w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 "
      >
        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
              src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Emerald
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
              src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Gray lava
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
              src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Barbie Blue
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
            src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Green hazel
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
              src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Silver
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="w-72 bg-dark shadow-md rounded-lg duration-500 hover:scale-105 hover:shadow-xl">
          <a href="#">
            <Image
              src={hero}
              alt="Product"
              className="h-80 w-72 object-cover rounded-t-xl"
            />
            <div className="px-4 py-3 w-72">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                With Power
              </span>
              <p className="text-lg font-bold text-white truncate block capitalize">
                Aurora Green
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-white cursor-auto my-3">
                  $30
                </p>
                <div className="ml-auto text-2xl transition-all duration-300 ease-in-out text-white border border-white p-2 rounded-lg hover:bg-customGold">
                  <MdAddShoppingCart />
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Products;
