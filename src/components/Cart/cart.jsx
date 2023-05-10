import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { Quantity_Button } from '../ItemDetail/quantity_Button';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='bg-white w-auto h-auto border-2 border-black'>
        <ul>
        {cartItems.map((item) => (
            <li className=' flex justify-between-1 border-2'>
            <div>
              <img className='w-24 h-24' src={item.products.Picture[0]}></img>
            </div>
            <div className='p-7 text-2xl'>
              <h1 className=''>{item.products.Name}</h1>
            </div>
            <div className='p-6'>
              {/* <Quantity_Button/> */}
            </div>
            <div className='p-7'>
              <h1>Precio: ${item.products.Price}</h1>
            </div>
            <div>
              <h1>Cantidad: ${}</h1>
            </div>
            <div className='p-7'>
              <button className='border-black border-2 rounded-md bg-red-500' onClick={() => removeFromCart(item)}>Remove</button>
            </div>
            </li>
        ))}
        </ul>
    </div>
  );

};
