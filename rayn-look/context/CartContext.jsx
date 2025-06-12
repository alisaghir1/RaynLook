"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isMounted, setIsMounted] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    setIsMounted(true);
    const stored = localStorage.getItem("cartItems");
    if (stored) {
      setCartItems(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems, isMounted]);

  const showNotification = (message, type = 'success') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        const updatedItems = prev.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
        showNotification(
          `🎉 Updated ${product.name} quantity in cart! (${existing.quantity + quantity} total)`,
          'success'
        );
        return updatedItems;
      } else {
        showNotification(
          `✨ ${product.name} added to cart! Ready to make your eyes shine!`,
          'success'
        );
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return;
    setCartItems((prev) => {
      const updatedItems = prev.map(item => {
        if (item.id === id) {
          showNotification(
            `📝 Updated ${item.name} quantity to ${quantity}`,
            'info'
          );
          return { ...item, quantity };
        }
        return item;
      });
      return updatedItems;
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const itemToRemove = prev.find(item => item.id === id);
      if (itemToRemove) {
        showNotification(
          `🗑️ Removed ${itemToRemove.name} from cart`,
          'warning'
        );
      }
      return prev.filter(item => item.id !== id);
    });
  };

  const clearCart = () => {
    setCartItems([]);
    showNotification(
      '🧹 Cart cleared! Ready for a fresh start!',
      'info'
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      updateQuantity, 
      removeFromCart, 
      clearCart,
      getTotalItems,
      getTotalPrice,
      notification,
      showNotification
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};