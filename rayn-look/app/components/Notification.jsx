
"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdCheckCircle, MdInfo, MdWarning, MdError, MdClose } from 'react-icons/md';
import { useCart } from '../../context/CartContext.jsx';

const Notification = () => {
  const { notification, showNotification } = useCart();

  const getIcon = (type) => {
    switch (type) {
      case 'success': return <MdCheckCircle className="w-6 h-6" />;
      case 'info': return <MdInfo className="w-6 h-6" />;
      case 'warning': return <MdWarning className="w-6 h-6" />;
      case 'error': return <MdError className="w-6 h-6" />;
      default: return <MdCheckCircle className="w-6 h-6" />;
    }
  };

  const getColors = (type) => {
    switch (type) {
      case 'success': return 'bg-green-500 text-white';
      case 'info': return 'bg-blue-500 text-white';
      case 'warning': return 'bg-yellow-500 text-black';
      case 'error': return 'bg-red-500 text-white';
      default: return 'bg-customGold text-black';
    }
  };

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 max-w-sm"
        >
          <div className={`${getColors(notification.type)} rounded-xl shadow-2xl p-4 flex items-center space-x-3 border border-white/20 backdrop-blur-sm`}>
            <div className="flex-shrink-0">
              {getIcon(notification.type)}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">
                {notification.message}
              </p>
            </div>
            <button
              onClick={() => showNotification(null)}
              className="flex-shrink-0 hover:scale-110 transition-transform"
            >
              <MdClose className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;