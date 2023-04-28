import React, { useContext } from 'react';
import { CartContext } from '../../Contexts/CartContext';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='bg-yellow-300 w-2/3 h-full border-2 border-black'>
        <ul>
        {cartItems.map((item) => (
            <li key={item.Id}>
            <h1>{item.Name}</h1> {item.Price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
        ))}
        </ul>
    </div>
  );

  console.log(item.Price)
};
