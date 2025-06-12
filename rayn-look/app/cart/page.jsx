"use client";
import { useCart } from "../../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/variants";
import { 
  FaShoppingCart, 
  FaTrash, 
  FaMinus, 
  FaPlus, 
  FaWhatsapp,
  FaArrowLeft,
  FaShoppingBag
} from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import Link from "next/link";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <FaShoppingCart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Shopping <span className="text-customGold">Cart</span>
          </h1>
          <p className="text-xl text-gray-300">
            Review your selected premium contact lenses
          </p>
        </motion.div>

        {cartItems.length === 0 ? (
          /* Empty Cart */
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center py-20"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 border border-white/10 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <FaShoppingBag className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Your Cart is Empty</h2>
              <p className="text-gray-300 text-lg mb-8">
                Looks like you haven't added any contact lenses to your cart yet.
              </p>
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-customGold/30 transition-all duration-300 flex items-center space-x-2 mx-auto"
                >
                  <FaShoppingCart className="w-5 h-5" />
                  <span>Start Shopping</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ) : (
          /* Cart Items */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Cart Items List */}
            <div className="lg:col-span-2">
              <motion.div
                variants={slideIn("left", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Cart Items</h2>
                  <span className="text-customGold font-semibold">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                  </span>
                </div>

                <div className="space-y-6">
                  {cartItems.map((item, index) => {
                    const priceNum =
                      typeof item.price === "string"
                        ? Number(item.price.replace(/[^0-9.-]+/g, ""))
                        : item.price;

                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-black/30 rounded-2xl p-6 border border-customGold/20 hover:border-customGold/40 transition-all duration-300"
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden bg-gray-800">
                              <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 96px, 128px"
                              />
                            </div>
                          </div>

                          {/* Product Details */}
                          <div className="flex-grow space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-customGold">{item.name}</h3>
                              <p className="text-gray-300 text-sm">{item.description}</p>
                            </div>

                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                              
                              {/* Quantity Controls */}
                              <div className="flex items-center space-x-4">
                                <span className="text-white font-medium">Quantity:</span>
                                <div className="flex items-center bg-black/50 rounded-full border border-customGold/30">
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    disabled={item.quantity <= 1}
                                    className="p-2 text-customGold hover:bg-customGold/20 rounded-l-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                  >
                                    <FaMinus className="w-3 h-3" />
                                  </button>
                                  <span className="px-4 py-2 text-customGold font-bold min-w-[3rem] text-center">
                                    {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="p-2 text-customGold hover:bg-customGold/20 rounded-r-full transition-colors"
                                  >
                                    <FaPlus className="w-3 h-3" />
                                  </button>
                                </div>
                              </div>

                              {/* Price */}
                              <div className="flex items-center justify-between md:justify-end gap-4">
                                <span className="text-2xl font-bold text-customGold">
                                  ${(priceNum * item.quantity).toFixed(2)}
                                </span>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-full transition-all duration-300"
                                >
                                  <FaTrash className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link href="/products">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center space-x-2 text-customGold hover:text-white transition-colors"
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      <span>Continue Shopping</span>
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <motion.div
                variants={slideIn("right", 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 border border-customGold/20 sticky top-8"
              >
                <h2 className="text-2xl font-bold text-white mb-8">Order Summary</h2>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping:</span>
                    <span className="text-green-400">Free</span>
                  </div>
                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between text-xl font-bold">
                      <span className="text-white">Total:</span>
                      <span className="text-customGold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  onClick={handleCheckout}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={cartItems.length === 0}
                  className="w-full bg-gradient-to-r from-customGold to-yellow-500 text-black font-bold py-4 rounded-2xl hover:shadow-lg hover:shadow-customGold/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  <span>Checkout via WhatsApp</span>
                </motion.button>

                {/* Security Badge */}
                <div className="mt-6 flex items-center justify-center space-x-2 text-gray-400 text-sm">
                  <BsEyeFill className="w-4 h-4" />
                  <span>Secure & Safe Checkout</span>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Free worldwide shipping</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Premium quality guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>24/7 customer support</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}