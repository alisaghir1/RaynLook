"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const slideIn = (direction = "down", delay = 0) => {
  let yInitial = direction === "down" ? -50 : 50;
  return {
    hidden: { opacity: 0, y: yInitial },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        type: "spring",
        stiffness: 70,
        damping: 15,
      },
    },
  };
};

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const router = useRouter();

  const total = cartItems.reduce((acc, item) => {
    const priceNum =
      typeof item.price === "string"
        ? Number(item.price.replace(/[^0-9.-]+/g, ""))
        : item.price;
    return acc + priceNum * item.quantity;
  }, 0);

  const handleCheckout = () => {
    if (cartItems.length === 0) return alert("Cart is empty!");
    router.push("/checkout");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.h1
        variants={slideIn("down", 0.6)}
        initial="hidden"
        animate="show"
        className="text-3xl md:text-4xl font-extrabold my-4 text-white border border-customGold w-full p-5 rounded-xl"
      >
        Shopping Cart
      </motion.h1>

      {cartItems.length === 0 ? (
        <div className="text-center flex flex-col justify-center mt-60">
          <p className="text-white xl:text-3xl text-xl mb-6">Oops, your cart is empty.</p>
          <button
            onClick={() => router.push("/products")} // adjust if your products page path is different
            className="bg-customGold border border-customGold w-fit self-center xl:text-3xl text-xl hover:bg-black transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-xl"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <motion.div
                  variants={slideIn("up", 0.6)}
        initial="hidden"
        animate="show"
           className="mt-8 border border-customGold w-full p-5 rounded-xl">
            {cartItems.map((item) => {
              const priceNum =
                typeof item.price === "string"
                  ? Number(item.price.replace(/[^0-9.-]+/g, ""))
                  : item.price;

              return (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row border-b border-gray-300 py-4"
                >
                  <div className="flex-shrink-0 relative w-32 h-32">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 256px"
                      priority={false}
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                    <h2 className="text-lg font-semibold text-customGold">{item.name}</h2>
                    <p className="mt-2 text-white">{item.description}</p>
                    <div className="mt-4 flex items-center">
                      <span className="mr-2 text-white font-medium">Quantity:</span>
                      <div className="flex items-center">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="bg-gray-200 rounded-l-lg px-3 py-1 text-indigo-800 hover:bg-indigo-100 disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span className="mx-3 text-customGold font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="bg-gray-200 rounded-r-lg px-3 py-1 text-indigo-800 hover:bg-indigo-100"
                        >
                          +
                        </button>
                      </div>
                      <span className="ml-auto font-bold text-customGold">
                        ${(priceNum * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white border border-customGold rounded-lg p-2 font-bold xl:mt-0 mt-5 xl:ml-4 self-start hover:text-red-800 transition duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </motion.div>

          <div className="flex justify-end items-center mt-8 gap-5">
            <span className="text-white mr-4 font-medium">Subtotal:</span>
            <span className="text-2xl font-extrabold text-customGold">${total.toFixed(2)}</span>
            <button
              onClick={handleCheckout}
              className="bg-customGold hover:bg-black border-customGold border transition duration-200 ease-in-out text-white font-semibold py-2 px-5 rounded"
              disabled={cartItems.length === 0}
            >
              Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
}
