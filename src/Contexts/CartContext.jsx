import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {

    const idx = cartItems.findIndex(prod => item.id == prod.id)
    
    if(idx == -1){
      setCartItems([...cartItems, item])
    }else{
      cartItems[idx].Quantity += item.Quantity
      setCartItems(...cartItems)
    }
  }

  const removeFromCart = (itemToRemove) => {
    setCartItems(cartItems.filter((item) => item !== itemToRemove))
  }

  useEffect(() => {
    console.log("Carrito: ",cartItems.length)
  }, [cartItems])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
  
};
