import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Contexts/CartContext';
import { FormContext } from '../../Contexts/FormContext';
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, limit, orderBy, query, setDoc, where } from "firebase/firestore"


export const Cart = () => {
  const { cartItems, removeFromCart, totalPrice, totalQuantity, cleanCart} = useContext(CartContext);

  const { formData, isLoged } = useContext(FormContext)

  const generateOrder = (evt) => {
    const order = {}
    order.buyer = formData
    order.items = cartItems.map(({Name, Price, quantity}) => ({Name, Price, quantity}))
    order.total = totalPrice()
    
    const dbFirestore = getFirestore()
    const ordersCollection = collection(dbFirestore, 'Ordenes')

    addDoc(ordersCollection, order)
    .then(resp => <h1>`Id de la compra: ${resp.id}`</h1>)
    .catch(err => console.log(err))
    .finally(
      setTimeout(() => {
        cleanCart()
      }, 1000)
    )
  }
  

  return (
    <div className='bg-white w-auto h-auto border-2 border-black'>
      {cartItems.length === 0 ? (
        <>
          <h1 className='text-4xl'>El carrito esta vacio</h1>
          <Link to='/home'>
          <button className='border-black border-2 rounded-md bg-ice'>
            Explorar tienda
          </button>
          </Link>
        </>
        
      ) : (
        <ul>
          {cartItems.map( item => (
                <li key={item.id}>
                  <div>
                    <img className='w-24 h-24' src={item.Picture[0]}></img>
                  </div>  
                  <div className='p-7 text-2xl'>
                    <h1 className=''>{item.Name}</h1>
                  </div>
                  <div className='p-7'>
                    <h1>Precio: ${item.Price}</h1>
                  </div>
                  <div>
                    <h1>Cantidad:{item.quantity}</h1>
                  </div>
                  <div className='p-7'>
                    <button className='border-black border-2 rounded-md bg-red-500' onClick={() => removeFromCart(item)}>Remove</button>
                  </div>
                </li>
              ))} 
          <h1>Precio Total: ${totalPrice()}</h1>
          <h1>Cantidad de Productos: {totalQuantity()}</h1>
          <button onClick={cleanCart} className='border-black border-2 rounded-md bg-red-500'> 
            Limpiar Carrito
          </button>
          <button className='border-black border-2 rounded-md bg-blue-500'
          onClick={generateOrder}>
              Terminar compra
          </button>
        </ul>
        )}
    </div>
    )
  }
