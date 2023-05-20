import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (newProduct) => {
    const idx = cartItems.findIndex((prod) => newProduct.id == prod.id);

    if (idx == -1) {
      setCartItems([...cartItems, newProduct]);
    } else {
      cartItems[idx].quantity += newProduct.quantity;
      setCartItems([...cartItems]);
    }
  };

  const totalPrice = () =>
    cartItems.reduce((total, item) => (total += item.quantity * item.Price), 0);

  const totalQuantity = () =>
    cartItems.reduce((total, item) => (total += item.quantity), 0);

  const removeFromCart = (itemToRemove) => {
    if (itemToRemove.quantity > 1) {
      itemToRemove.quantity--;
      setCartItems([...cartItems]);
    } else {
      setCartItems(cartItems.filter((item) => item !== itemToRemove));
    }
  };

  const cleanCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        totalPrice,
        totalQuantity,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
