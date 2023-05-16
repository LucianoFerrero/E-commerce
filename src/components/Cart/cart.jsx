import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { CartContext } from '../../Contexts/CartContext';
import { products } from '../../Data/products';
import { Quantity_Button } from '../ItemDetail/quantity_Button';

export const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className='bg-white w-auto h-auto border-2 border-black'>
      {cartItems.length === 0 ? (
        <h1 className='text-4xl'>El carrito esta vacio</h1>
      ) : (
        <ul>
          {cartItems.map(item => (
                <li key={item.id}>
                  <div>
                    <img className='w-24 h-24' src={item.products.Picture[0]}></img>
                  </div>  
                  <div className='p-7 text-2xl'>
                    <h1 className=''>{item.products.Name}</h1>
                  </div>
                  <div className='p-7'>
                    <h1>Precio: ${item.products.Price}</h1>
                  </div>
                  <div>
                    <h1>Cantidad: {item.products.Quantity}</h1>
                  </div>
                  <div className='p-7'>
                    <button className='border-black border-2 rounded-md bg-red-500' onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </li>
              ))} 
        </ul>
        )}
    </div>
    )
  }
