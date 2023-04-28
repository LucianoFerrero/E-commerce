import React, { useContext, useEffect } from 'react';
import { CartContext } from '../../Contexts/CartContext';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='bg-yellow-300 w-2/3 h-full border-2 border-black'>
        <ul>
        {cartItems.map((item) => (
            <li key={item.Id}>
            <a>{item.Name}{item.Price}</a>
            <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
        ))}
        </ul>
    </div>
  );

};
